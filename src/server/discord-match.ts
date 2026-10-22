import { Prisma } from "@prisma/client";
import { getPrisma } from "@/server/db";
import { getAppBaseUrl } from "@/server/env";
import { discordBot, matchDm, readDiscordBotConfig, teamOverwrites, type DiscordBot } from "@/server/discord";

/** Stored on QueueLobby.discord. */
export type LobbyDiscord = {
  team1?: { channelId: string; invite: string | null };
  team2?: { channelId: string; invite: string | null };
  dms?: number; moved?: number; error?: string; cleanedAt?: string;
};
export const CATEGORY_NAME = "A.C.E Matches";

export function readLobbyDiscord(v: Prisma.JsonValue | null | undefined): LobbyDiscord {
  return v && typeof v === "object" && !Array.isArray(v) ? (v as LobbyDiscord) : {};
}

async function matchCategory(bot: DiscordBot): Promise<string> {
  const existing = (await bot.channels()).find((c) => c.type === 4 && c.name.toLowerCase() === CATEGORY_NAME.toLowerCase());
  if (existing) return existing.id;
  return (await bot.createChannel({ name: CATEGORY_NAME, type: 4 }, "A.C.E match voice category")).id;
}

/**
 * After the DatHost match is created: Team A / Team B voice channels limited to each team's linked players, invites,
 * moves players already in guild voice, and DMs every linked player their voice link plus connect details.
 * Never throws: Discord trouble must not break the match.
 */
export async function setupMatchDiscord(lobbyId: string, f: typeof fetch = fetch): Promise<LobbyDiscord> {
  const cfg = readDiscordBotConfig();
  if (!cfg) return {};
  const prisma = getPrisma();
  const lobby = await prisma.queueLobby.findUnique({ where: { id: lobbyId }, include: { players: { include: { user: { select: { discordId: true } } } } } });
  if (!lobby) return {};
  const prior = readLobbyDiscord(lobby.discord);
  if (prior.team1 || prior.team2) return prior;
  const bot = discordBot(cfg, f);
  const out: LobbyDiscord = { dms: 0, moved: 0 };
  const short = lobby.id.slice(-5).toUpperCase();
  const botId = process.env.DISCORD_CLIENT_ID?.trim() || null;
  const seats = lobby.players.filter((p) => !p.replaced && (p.accepted || lobby.isTest));
  try {
    const parent = await matchCategory(bot);
    for (const side of ["team1", "team2"] as const) {
      const ids = seats.filter((p) => p.team === side).map((p) => p.user.discordId).filter((x): x is string => !!x);
      const label = side === "team1" ? "A" : "B";
      const ch = await bot.createChannel(
        { name: `${side === "team1" ? "🟥" : "🟦"} Team ${label} · ${lobby.map ?? "match"} · #${short}`, type: 2, parent_id: parent, user_limit: 6, permission_overwrites: teamOverwrites(cfg.guildId, botId, ids) },
        `A.C.E match ${lobby.id}`,
      );
      const invite = await bot.createInvite(ch.id).then((i) => `https://discord.gg/${i.code}`).catch(() => null);
      out[side] = { channelId: ch.id, invite };
    }
  } catch (e) {
    out.error = e instanceof Error ? e.message.slice(0, 200) : "discord-setup-failed";
  }
  await prisma.queueLobby.update({ where: { id: lobbyId }, data: { discord: out as Prisma.InputJsonValue } });
  const base = (() => { try { return getAppBaseUrl(); } catch { return ""; } })();
  for (const p of seats) {
    const did = p.user.discordId;
    const t = out[p.team as "team1" | "team2"];
    if (!did) continue;
    if (t) {
      const vs = await bot.voiceState(did).catch(() => null);
      if (vs?.channel_id && vs.channel_id !== t.channelId) {
        await bot.moveMember(did, t.channelId, "A.C.E match start").then(() => { out.moved!++; }).catch(() => undefined);
      }
    }
    const content = matchDm({
      team: p.team === "team1" ? "A" : "B", map: lobby.map ?? "", voiceUrl: t?.invite ?? null,
      address: lobby.serverAddress, password: lobby.serverPassword ?? "", lobbyUrl: `${base}/play`,
    });
    await bot.dm(did, content).then(() => { out.dms!++; }).catch(() => undefined);
  }
  await prisma.queueLobby.update({ where: { id: lobbyId }, data: { discord: out as Prisma.InputJsonValue } });
  return out;
}

/** Deletes the match voice channels once (DONE / CANCELLED / FAILED). Safe to call repeatedly. */
export async function cleanupMatchDiscord(lobbyId: string, f: typeof fetch = fetch) {
  const cfg = readDiscordBotConfig();
  if (!cfg) return;
  const prisma = getPrisma();
  const lobby = await prisma.queueLobby.findUnique({ where: { id: lobbyId }, select: { discord: true } });
  const d = readLobbyDiscord(lobby?.discord);
  if (d.cleanedAt || (!d.team1 && !d.team2)) return;
  const bot = discordBot(cfg, f);
  for (const t of [d.team1, d.team2]) {
    if (t) await bot.deleteChannel(t.channelId, "A.C.E match ended").catch(() => undefined);
  }
  await prisma.queueLobby.update({ where: { id: lobbyId }, data: { discord: { ...d, cleanedAt: new Date().toISOString() } as Prisma.InputJsonValue } });
}

/** Cleans every ended lobby that still has channels (called from the match webhook and the live poll). */
export async function cleanupEndedMatches() {
  const ended = await getPrisma().queueLobby.findMany({
    where: { state: { in: ["DONE", "CANCELLED", "FAILED"] }, NOT: { discord: { equals: Prisma.DbNull } }, updatedAt: { gt: new Date(Date.now() - 3 * 86400_000) } },
    select: { id: true, discord: true }, take: 20, orderBy: { updatedAt: "desc" },
  });
  for (const l of ended) {
    const d = readLobbyDiscord(l.discord);
    if (!d.cleanedAt && (d.team1 || d.team2)) await cleanupMatchDiscord(l.id).catch(() => undefined);
  }
}
