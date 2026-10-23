/**
 * R60 trust score (server). Computed outside the queue lock and cached in TrustProfile; formLobby reads the cache only.
 * Steam data comes from the public Steam Web API (GetSteamLevel, GetOwnedGames appid 730, GetPlayerSummaries timecreated)
 * and is used only when the player's profile is public. Never blocks queueing.
 */
import { Prisma } from "@prisma/client";
import { getPrisma } from "@/server/db";
import { getSteamApiKey } from "@/server/env";
import { computeTrust, type Trust } from "@/lib/trust";

const CACHE_MS = 6 * 3600_000;
const STEAM_REFRESH_MS = 7 * 24 * 3600_000;

async function steamJson(url: string): Promise<Record<string, unknown> | null> {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(4000), cache: "no-store" });
    return r.ok ? ((await r.json()) as Record<string, unknown>) : null;
  } catch { return null; }
}

/** Public Steam facts; every field is null when private/unavailable. The API key is never logged or returned. */
export async function fetchSteamFacts(steamId: string) {
  const key = getSteamApiKey();
  if (!key || !/^\d{17}$/.test(steamId)) return { steamLevel: null, cs2Hours: null, steamCreatedAt: null };
  const base = "https://api.steampowered.com";
  const q = `key=${encodeURIComponent(key)}&steamid=${steamId}`;
  const [lvl, games, sum] = await Promise.all([
    steamJson(`${base}/IPlayerService/GetSteamLevel/v1/?${q}`),
    steamJson(`${base}/IPlayerService/GetOwnedGames/v1/?${q}&include_played_free_games=true&appids_filter%5B0%5D=730`),
    steamJson(`${base}/ISteamUser/GetPlayerSummaries/v2/?key=${encodeURIComponent(key)}&steamids=${steamId}`),
  ]);
  const lr = (lvl?.response ?? {}) as { player_level?: number };
  const gr = (games?.response ?? {}) as { games?: { appid: number; playtime_forever?: number }[] };
  const cs = gr.games?.find((g) => g.appid === 730);
  const p = ((sum?.response as { players?: { timecreated?: number }[] } | undefined)?.players ?? [])[0];
  return {
    steamLevel: typeof lr.player_level === "number" ? lr.player_level : null,
    cs2Hours: cs && typeof cs.playtime_forever === "number" ? cs.playtime_forever / 60 : null,
    steamCreatedAt: p?.timecreated ? new Date(p.timecreated * 1000) : null,
  };
}

export async function trustInputs(userId: string, now = new Date()) {
  const db = getPrisma();
  const u = await db.user.findUnique({ where: { id: userId }, select: { id: true, steamId: true, createdAt: true, wins: true, losses: true, accountStatus: true } });
  if (!u) return null;
  const since90 = new Date(now.getTime() - 90 * 86400_000);
  const sid = u.steamId ?? "-";
  const [reporters, upheld, confirmed, cleared, sessions] = await Promise.all([
    db.playerReport.findMany({ where: { targetSteamId: sid, createdAt: { gte: since90 } }, select: { reporterId: true }, distinct: ["reporterId"], take: 100 }),
    db.playerReport.count({ where: { targetSteamId: sid, status: "actioned" } }),
    db.anticheatReview.count({ where: { steamId: sid, status: "confirmed" } }),
    db.anticheatReview.count({ where: { steamId: sid, status: "cleared" } }),
    db.anticheatSession.findMany({ where: { userId, hwHash: { not: "" } }, select: { hwHash: true }, take: 20 }),
  ]);
  const hashes = [...new Set(sessions.map((s) => s.hwHash))];
  const hwBanLinked = hashes.length ? (await db.anticheatHardwareBan.count({ where: { hwHash: { in: hashes }, revokedAt: null } })) > 0 : false;
  return { user: u, reporters: reporters.length, upheld, confirmed, cleared, hwBanLinked };
}

/** Recomputes (and caches) one user's trust. Steam facts are refreshed at most weekly. */
export async function refreshTrust(userId: string, opts: { force?: boolean; now?: Date } = {}): Promise<Trust | null> {
  const db = getPrisma(), now = opts.now ?? new Date();
  const cached = await db.trustProfile.findUnique({ where: { userId } });
  if (cached && !opts.force && now.getTime() - cached.computedAt.getTime() < CACHE_MS) return { score: cached.score, band: cached.band as Trust["band"], parts: (cached.parts as unknown as Trust["parts"]) ?? [] };
  const inp = await trustInputs(userId, now);
  if (!inp) return null;
  let steam = { steamLevel: cached?.steamLevel ?? null, cs2Hours: cached?.cs2Hours ?? null, steamCreatedAt: cached?.steamCreatedAt ?? null };
  let steamFetchedAt = cached?.steamFetchedAt ?? null;
  if (inp.user.steamId && (!steamFetchedAt || now.getTime() - steamFetchedAt.getTime() > STEAM_REFRESH_MS)) { steam = await fetchSteamFacts(inp.user.steamId); steamFetchedAt = now; }
  const t = computeTrust({
    accountAgeDays: inp.user.createdAt ? (now.getTime() - inp.user.createdAt.getTime()) / 86400_000 : 0,
    steamLevel: steam.steamLevel, cs2Hours: steam.cs2Hours,
    steamAccountAgeDays: steam.steamCreatedAt ? (now.getTime() - steam.steamCreatedAt.getTime()) / 86400_000 : null,
    matches: (inp.user.wins ?? 0) + (inp.user.losses ?? 0),
    reportsAgainstDistinct90d: inp.reporters, reportsUpheld: inp.upheld, reviewsConfirmed: inp.confirmed, reviewsCleared: inp.cleared,
    hwBanLinked: inp.hwBanLinked, accountBanned: inp.user.accountStatus !== "ACTIVE",
  });
  const data = { score: t.score, band: t.band, parts: t.parts as unknown as Prisma.InputJsonValue, ...steam, steamFetchedAt, computedAt: now };
  await db.trustProfile.upsert({ where: { userId }, create: { userId, ...data }, update: data });
  return t;
}

export async function trustMap(userIds: string[], db: Pick<Prisma.TransactionClient, "trustProfile"> = getPrisma()) {
  const rows = await db.trustProfile.findMany({ where: { userId: { in: userIds } }, select: { userId: true, score: true } }).catch(() => []);
  return new Map(rows.map((r) => [r.userId, r.score]));
}
