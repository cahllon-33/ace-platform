import { demoForMatch } from "@/lib/queue";
import { getPrisma } from "@/server/db";
import { rankFromRating } from "@/lib/ranks";
import { dathost, DathostError, readDathostConfig, type FileEntry } from "@/server/dathost";
import { ACTIVE_STATES, lobbyView, type LobbyView } from "@/server/queue-engine";
import { SETTING, healthTick, readSetting, writeSetting } from "@/server/server-health";

/** R48b owner tools: match management, moderation, health, history, audit. Callers must check the owner session. */
const err = (e: unknown) => (e instanceof DathostError ? e.message : e instanceof Error ? e.message : "failed");
const api = () => {
  const cfg = readDathostConfig();
  if (!cfg) throw new Error("DatHost is not configured.");
  return dathost(cfg);
};

/* ---------- match management ---------- */

export type LiveScoreboard = { lobby: LobbyView; players: { steamId: string; name: string; team: string; connected: boolean; left: boolean; kills: number | null; deaths: number | null; assists: number | null; damage: number | null; mvps: number | null }[] };

export async function liveMatches(): Promise<LiveScoreboard[]> {
  const prisma = getPrisma();
  const rows = await prisma.queueLobby.findMany({ where: { state: { in: [...ACTIVE_STATES] } }, orderBy: { createdAt: "desc" }, take: 5 });
  const out: LiveScoreboard[] = [];
  for (const l of rows) {
    const view = await lobbyView(l.id, null);
    if (!view) continue;
    const dm = l.dathostMatchId ? await api().getMatch(l.dathostMatchId).catch(() => null) : null;
    const users = dm ? await prisma.user.findMany({ where: { steamId: { in: dm.players.map((p) => p.steam_id_64) } }, select: { steamId: true, displayName: true } }) : [];
    const names = new Map(users.map((u) => [u.steamId, u.displayName]));
    out.push({
      lobby: { ...view, scoreA: dm?.team1?.stats?.score ?? view.scoreA, scoreB: dm?.team2?.stats?.score ?? view.scoreB, rounds: dm?.rounds_played ?? view.rounds },
      players: (dm?.players ?? []).filter((p) => p.team !== "spectator").map((p) => ({
        steamId: p.steam_id_64, name: names.get(p.steam_id_64) ?? p.steam_id_64, team: p.team, connected: !!p.connected, left: !!p.disconnected_at,
        kills: p.stats?.kills ?? null, deaths: p.stats?.deaths ?? null, assists: p.stats?.assists ?? null, damage: p.stats?.damage_dealt ?? null, mvps: p.stats?.mvps ?? null,
      })),
    });
  }
  return out;
}

/** Cancels on DatHost too; no RP change. */
export async function cancelMatch(lobbyId: string) {
  const prisma = getPrisma();
  const l = await prisma.queueLobby.findUnique({ where: { id: lobbyId } });
  if (!l) return { ok: false as const, error: "not-found" };
  if (l.dathostMatchId && l.state === "LIVE") { try { await api().cancelMatch(l.dathostMatchId); } catch (e) { return { ok: false as const, error: err(e) }; } }
  await prisma.queueLobby.update({ where: { id: lobbyId }, data: { state: "CANCELLED", error: "admin-cancel", endedAt: new Date() } });
  if (l.matchId) await prisma.match.updateMany({ where: { id: l.matchId, state: { in: ["PENDING", "IN_PROGRESS"] } }, data: { state: "CANCELLED", endedAt: new Date() } });
  return { ok: true as const };
}

/** Stops the DatHost match and records the current score as final without applying RP (a partial match is not a verified result). */
export async function forceEnd(lobbyId: string) {
  const prisma = getPrisma();
  const l = await prisma.queueLobby.findUnique({ where: { id: lobbyId } });
  if (!l?.dathostMatchId || l.state !== "LIVE") return { ok: false as const, error: "not-live" };
  try {
    const dm = await api().getMatch(l.dathostMatchId);
    await api().cancelMatch(l.dathostMatchId);
    const a = dm.team1?.stats?.score ?? l.scoreA ?? 0;
    const b = dm.team2?.stats?.score ?? l.scoreB ?? 0;
    await prisma.queueLobby.update({ where: { id: lobbyId }, data: { state: "DONE", error: "force-ended", scoreA: a, scoreB: b, endedAt: new Date() } });
    if (l.matchId) await prisma.match.updateMany({ where: { id: l.matchId, state: "IN_PROGRESS" }, data: { state: "COMPLETED", scoreA: a, scoreB: b, endedAt: new Date() } });
    return { ok: true as const };
  } catch (e) {
    return { ok: false as const, error: err(e) };
  }
}

/** Adds a registered player to the leaver's side on DatHost (team_size 5 keeps one active seat) and marks the leaver replaced. */
export async function replacePlayer(lobbyId: string, outUserId: string, inSteamId: string) {
  const prisma = getPrisma();
  const l = await prisma.queueLobby.findUnique({ where: { id: lobbyId }, include: { players: true } });
  const out = l?.players.find((p) => p.userId === outUserId);
  if (!l || !out) return { ok: false as const, error: "not-found" };
  const sub = await prisma.user.findUnique({ where: { steamId: inSteamId.trim() }, select: { id: true, competitiveRating: true, accountStatus: true } });
  if (!sub || sub.accountStatus !== "ACTIVE") return { ok: false as const, error: "Substitute must be a registered, active A.C.E player." };
  if (l.players.some((p) => p.userId === sub.id && !p.replaced)) return { ok: false as const, error: "Already in this lobby." };
  try {
    if (l.dathostMatchId && l.state === "LIVE") await api().addMatchPlayer(l.dathostMatchId, inSteamId.trim(), out.team as "team1" | "team2");
    await prisma.$transaction([
      prisma.queueLobbyPlayer.update({ where: { id: out.id }, data: { replaced: true } }),
      prisma.queueLobbyPlayer.upsert({ where: { lobbyId_userId: { lobbyId, userId: sub.id } }, create: { lobbyId, userId: sub.id, team: out.team, rp: sub.competitiveRating, accepted: true }, update: { replaced: false, team: out.team, accepted: true } }),
      ...(l.matchId ? [
        prisma.matchPlayer.deleteMany({ where: { matchId: l.matchId, userId: outUserId, kills: null } }),
        prisma.matchPlayer.upsert({ where: { matchId_userId: { matchId: l.matchId, userId: sub.id } }, create: { matchId: l.matchId, userId: sub.id, teamId: out.team }, update: { teamId: out.team } }),
      ] : []),
    ]);
    return { ok: true as const };
  } catch (e) {
    return { ok: false as const, error: err(e) };
  }
}

/* ---------- moderation ---------- */

export async function listBans() {
  const rows = await getPrisma().queueBan.findMany({ orderBy: { createdAt: "desc" }, take: 100, include: { user: { select: { displayName: true, steamId: true } } } });
  const now = Date.now();
  return rows.map((b) => ({
    id: b.id, kind: b.kind, reason: b.reason, until: b.until?.toISOString() ?? null, createdAt: b.createdAt.toISOString(), createdBy: b.createdBy,
    active: !b.revokedAt && (!b.until || b.until.getTime() > now), revoked: !!b.revokedAt, name: b.user.displayName, steamId: b.user.steamId ?? "",
  }));
}

export async function banPlayer(steamId: string, reason: string, minutes: number | null, actor: string) {
  const prisma = getPrisma();
  const u = await prisma.user.findUnique({ where: { steamId: steamId.trim() }, select: { id: true } });
  if (!u) return { ok: false as const, error: "No A.C.E player with that SteamID." };
  const r = reason.trim().slice(0, 200);
  if (!r) return { ok: false as const, error: "A reason is required." };
  const until = minutes && minutes > 0 ? new Date(Date.now() + Math.min(minutes, 525_600) * 60_000) : null;
  await prisma.$transaction([
    prisma.queueBan.create({ data: { userId: u.id, kind: "BAN", reason: r, until, createdBy: actor } }),
    prisma.queueEntry.deleteMany({ where: { userId: u.id } }),
  ]);
  return { ok: true as const };
}

export async function revokeBan(id: string) {
  await getPrisma().queueBan.updateMany({ where: { id, revokedAt: null }, data: { revokedAt: new Date() } });
  return { ok: true as const };
}

export async function queueList() {
  const rows = await getPrisma().queueEntry.findMany({ orderBy: { joinedAt: "asc" }, include: { user: { select: { displayName: true, steamId: true } } } });
  return rows.map((e) => ({ userId: e.userId, name: e.user.displayName, steamId: e.user.steamId ?? "", rp: e.rp, joinedAt: e.joinedAt.toISOString() }));
}

export async function kickFromQueue(userId: string) {
  await getPrisma().queueEntry.deleteMany({ where: { userId } });
  return { ok: true as const };
}

/** Kicks by in-game name through the console (CS2 has no SteamID kick command over RCON). */
export async function kickFromServer(name: string) {
  const n = name.trim();
  if (!n || n.length > 64 || /["\r\n;]/.test(n)) return { ok: false as const, error: "Invalid player name." };
  try { await api().console(`kick "${n}"`); return { ok: true as const }; } catch (e) { return { ok: false as const, error: err(e) }; }
}

/* ---------- health ---------- */

export async function healthView() {
  const prisma = getPrisma();
  await healthTick(new Date()).catch(() => undefined);
  const [alerts, autoRestart, restartHour] = await Promise.all([
    prisma.serverAlert.findMany({ orderBy: { createdAt: "desc" }, take: 20 }),
    readSetting(SETTING.autoRestart), readSetting(SETTING.restartHour),
  ]);
  return {
    alerts: alerts.map((a) => ({ id: a.id, kind: a.kind, message: a.message, at: a.createdAt.toISOString(), open: !a.resolvedAt })),
    autoRestart: autoRestart === "true", restartHour: restartHour ?? "",
  };
}

export async function saveHealthSettings(autoRestart: boolean, restartHour: string) {
  const h = restartHour.trim();
  if (h !== "" && !(/^\d{1,2}$/.test(h) && Number(h) <= 23)) return { ok: false as const, error: "Hour must be 0–23 (UTC) or empty." };
  await writeSetting(SETTING.autoRestart, autoRestart ? "true" : "false");
  await writeSetting(SETTING.restartHour, h);
  return { ok: true as const };
}

/* ---------- history + audit ---------- */

export async function matchHistory() {
  const prisma = getPrisma();
  const lobbies = await prisma.queueLobby.findMany({ where: { state: { in: ["DONE", "CANCELLED", "FAILED"] } }, orderBy: { createdAt: "desc" }, take: 25, include: { _count: { select: { players: true } } } });
  const matchIds = lobbies.map((l) => l.matchId).filter((x): x is string => !!x);
  const matches = matchIds.length ? await prisma.match.findMany({ where: { id: { in: matchIds } }, select: { id: true, ratingApplied: true, state: true, countsForRp: true, rpRevertedAt: true } }) : [];
  const m = new Map(matches.map((x) => [x.id, x]));
  let demos: FileEntry[] = [];
  try { demos = (await api().listFiles("", 3)).filter((f) => !f.deleted && /\.dem$/i.test(f.path)); } catch { demos = []; }
  let gotv: string | null = null;
  try {
    const raw = await api().getRaw();
    gotv = raw.cs2_settings && (raw.cs2_settings as { enable_gotv?: boolean }).enable_gotv && raw.ports.gotv ? `${raw.ip}:${raw.ports.gotv}` : null;
  } catch { gotv = null; }
  return {
    gotv,
    demos: demos.map((d) => ({ path: d.path, size: d.size, matchId: lobbies.find((l) => l.dathostMatchId && d.path.includes(l.dathostMatchId))?.id ?? null })),
    rows: lobbies.map((l) => ({
      id: l.id, state: l.state, isTest: l.isTest, map: l.map, scoreA: l.scoreA, scoreB: l.scoreB, players: l._count.players, error: l.error,
      at: (l.endedAt ?? l.updatedAt).toISOString(), dathostMatchId: l.dathostMatchId, demo: demoForMatch(demos, l.dathostMatchId), ratingApplied: l.matchId ? !!m.get(l.matchId)?.ratingApplied : false,
      matchId: l.matchId, vsBots: l.botDifficulty != null, botDifficulty: l.botDifficulty,
      countsForRp: l.isTest ? (l.matchId ? m.get(l.matchId)?.countsForRp ?? l.countsForRp : l.countsForRp) : true,
      rpReverted: l.matchId ? !!m.get(l.matchId)?.rpRevertedAt : false,
    })),
  };
}

export async function auditLog() {
  const rows = await getPrisma().adminAuditLog.findMany({ where: { OR: [{ action: { startsWith: "server." } }, { action: { startsWith: "queue." } }] }, orderBy: { createdAt: "desc" }, take: 80 });
  return rows.map((r) => ({ id: r.id, actor: r.actor, action: r.action, value: r.newValue, reason: r.reason, at: r.createdAt.toISOString() }));
}

export async function audit(actor: string, action: string, value: string, reason = "") {
  await getPrisma().adminAuditLog.create({ data: { actor, action, newValue: value.slice(0, 300), reason: reason.slice(0, 300) } }).catch(() => undefined);
}

/**
 * R73: undo the RP a test match applied. Nothing is deleted: each player's RP moves back by the delta recorded in
 * RatingHistory, the win/loss counter is decremented, and a reversing "test-revert" RatingHistory row is written.
 */
export async function revertTestMatchRp(matchId: string) {
  const prisma = getPrisma();
  return prisma.$transaction(async (tx) => {
    const match = await tx.match.findUnique({ where: { id: matchId }, select: { id: true, isTest: true, ratingApplied: true, rpRevertedAt: true } });
    if (!match) return { ok: false as const, error: "Match not found." };
    if (!match.isTest) return { ok: false as const, error: "Only test matches can be reverted." };
    if (match.rpRevertedAt) return { ok: false as const, error: "Already reverted." };
    if (!match.ratingApplied) return { ok: false as const, error: "No RP was applied to this match." };
    const rows = await tx.ratingHistory.findMany({ where: { matchId, reason: { in: ["verified-win", "verified-loss"] } } });
    let n = 0;
    for (const r of rows) {
      const u = await tx.user.findUnique({ where: { id: r.userId }, select: { competitiveRating: true, rankLevel: true, wins: true, losses: true } });
      if (!u) continue;
      const after = u.competitiveRating - (r.ratingAfter - r.ratingBefore);
      const rankAfter = rankFromRating(after).level;
      const win = r.reason === "verified-win";
      await tx.user.update({
        where: { id: r.userId },
        data: { competitiveRating: after, rankLevel: rankAfter, ...(win ? { wins: Math.max(0, u.wins - 1) } : { losses: Math.max(0, u.losses - 1) }) },
      });
      await tx.ratingHistory.create({
        data: { userId: r.userId, matchId, ratingBefore: u.competitiveRating, ratingAfter: after, rankBefore: u.rankLevel, rankAfter, algorithmVersion: r.algorithmVersion, reason: "test-revert" },
      });
      n++;
    }
    await tx.match.update({ where: { id: matchId }, data: { rpRevertedAt: new Date(), ratingApplied: false } });
    return { ok: true as const, players: n };
  });
}

/** R73: owner player picker for test matches (name or SteamID64). */
export async function searchPlayers(q: string) {
  const s = q.trim();
  if (s.length < 2) return [];
  const rows = await getPrisma().user.findMany({
    where: { accountStatus: "ACTIVE", steamId: { not: null }, OR: [{ steamId: s }, { displayName: { contains: s, mode: "insensitive" } }] },
    select: { steamId: true, displayName: true, competitiveRating: true }, take: 8, orderBy: { displayName: "asc" },
  });
  return rows.map((r) => ({ steamId: r.steamId!, name: r.displayName, rp: r.competitiveRating }));
}
