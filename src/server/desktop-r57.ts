/**
 * R57 desktop "My Stats" (private by default) and the public Ranks ladder. Real rows only.
 * Stats sources: MatchPlayer (verified match server report), MatchWeaponStat, AceBridge player_death events, RatingHistory.
 */
import { getPrisma } from "@/server/db";
import { rankFromRating, RANK_TIERS } from "@/lib/ranks";
import { ACTIVE_DUTY } from "@/lib/queue";
import { regionOf, REGIONS } from "@/lib/intel";
import { headshotsFor } from "@/server/desktop-r53";
import {
  mapsBlock, performanceBlock, withBridge, progressBlock, seasonStandings, statsPublicFrom, STATS_PUBLIC_KEY, totalsBlock, trends, weaponClass,
  type R57Line, type WeaponClass,
} from "@/lib/stats-r57";

const db = () => getPrisma();
const RANGES: Record<string, number> = { "7d": 7, "30d": 30, "90d": 90 };

export async function statsPublic() {
  const r = await db().siteSetting.findUnique({ where: { key: STATS_PUBLIC_KEY } }).catch(() => null);
  return statsPublicFrom(r?.value);
}
export async function setStatsPublic(on: boolean) {
  await db().siteSetting.upsert({ where: { key: STATS_PUBLIC_KEY }, create: { key: STATS_PUBLIC_KEY, value: on ? "1" : "0" }, update: { value: on ? "1" : "0" } });
  return { ok: true as const, statsPublic: on };
}

type F = { range?: string; map?: string; type?: string };

async function loadLines(userId: string, steamId: string | null, f: F, from: Date | null, to: Date | null) {
  const mps = await db().matchPlayer.findMany({
    where: { userId, match: { state: "COMPLETED", endedAt: { ...(from ? { gte: from } : {}), ...(to ? { lt: to } : {}) },
      ...(f.map && f.map !== "all" ? { mapName: f.map } : {}), ...(f.type === "queue" ? { tournamentId: null } : f.type === "tournament" ? { tournamentId: { not: null } } : {}) } },
    include: { match: { select: { externalId: true, mapName: true, endedAt: true, winnerTeamId: true, scoreA: true, scoreB: true, teamAId: true, tournamentId: true } }, weapons: true },
    orderBy: { match: { endedAt: "desc" } }, take: 1000,
  });
  const ids = mps.map((m) => m.matchId);
  const hist = ids.length ? await db().ratingHistory.findMany({ where: { userId, matchId: { in: ids } }, select: { matchId: true, ratingBefore: true, ratingAfter: true } }) : [];
  const delta = new Map(hist.map((h) => [h.matchId!, h.ratingAfter - h.ratingBefore]));
  const hsBy = await headshotsFor(mps, steamId);
  // R58: AceBridge round stats, keyed by the id the plugin was bound to (A.C.E match id or DatHost match id).
  const keys = [...new Set(mps.flatMap((m) => [m.matchId, m.match.externalId].filter((x): x is string => !!x)))];
  const bxRows = steamId && keys.length ? await db().cs2PlayerMatchStat.findMany({ where: { steamId, matchKey: { in: keys } } }).catch(() => []) : [];
  const bxBy = new Map(bxRows.map((r) => [r.matchKey, r]));
  const lines: R57Line[] = mps.map((m) => {
    const mineA = m.teamId != null && m.teamId === m.match.teamAId;
    const known = m.teamId != null && m.match.teamAId != null;
    const h = hsBy.get(m.matchId);
    return {
      matchId: m.matchId, at: (m.match.endedAt ?? new Date(0)).getTime(), map: m.match.mapName, tournament: !!m.match.tournamentId,
      won: m.match.winnerTeamId && m.teamId ? m.match.winnerTeamId === m.teamId : delta.has(m.matchId) ? delta.get(m.matchId)! > 0 : null,
      k: m.kills ?? (h?.source === "events" ? h.kills : null), d: m.deaths, a: m.assists, dmg: m.damage, rounds: m.roundsPlayed,
      roundsWon: known ? (mineA ? m.match.scoreA : m.match.scoreB) : null, hs: h?.hs ?? null,
      clW: m.clutchesWon, clP: m.clutchesPlayed, enW: m.entryWins, enA: m.entryAttempts, util: m.utilityDamage,
      m2: m.multi2k, m3: m.multi3k, m4: m.multi4k, m5: m.multi5k, mvps: m.mvps,
      score: known ? (mineA ? `${m.match.scoreA}-${m.match.scoreB}` : `${m.match.scoreB}-${m.match.scoreA}`) : null, rpDelta: delta.get(m.matchId) ?? null,
      bx: bxBy.get(m.matchId) ?? (m.match.externalId ? bxBy.get(m.match.externalId) : undefined) ?? null,
    };
  }).map(withBridge);
  return { mps, lines };
}

/** Weapon-class kills: the match report's weapon table first, else AceBridge player_death events (weapon field). */
async function weaponKills(mps: Awaited<ReturnType<typeof loadLines>>["mps"], steamId: string | null, bxOf?: Map<string, NonNullable<R57Line["bx"]>>) {
  const out: { cls: WeaponClass; kills: number }[] = [];
  let matches = 0;
  const need = new Map<string, string>();
  for (const m of mps) {
    const bx = bxOf?.get(m.matchId);
    if (m.weapons.length) { matches++; for (const w of m.weapons) out.push({ cls: weaponClass(w.weapon), kills: w.kills }); }
    else if (bx && bx.rounds > 0) { matches++; out.push({ cls: "sniper", kills: bx.wSniper }, { cls: "pistol", kills: bx.wPistol }, { cls: "knife", kills: bx.wKnife }, { cls: "zeus", kills: bx.wZeus }, { cls: "other", kills: bx.wOther }); }
    else if (steamId) { need.set(m.matchId, m.matchId); if (m.match.externalId) need.set(m.match.externalId, m.matchId); }
  }
  if (need.size && steamId) {
    const ev = await db().cs2PluginEvent.findMany({ where: { type: "player_death", matchId: { in: [...need.keys()] } }, select: { matchId: true, payload: true }, take: 50000 });
    const seen = new Set<string>();
    for (const e of ev) {
      const d = (e.payload ?? {}) as Record<string, unknown>;
      const mid = e.matchId ? need.get(e.matchId) : undefined;
      if (!mid) continue;
      seen.add(mid);
      if (d.attacker !== steamId || d.victim === steamId || typeof d.weapon !== "string") continue;
      out.push({ cls: weaponClass(d.weapon), kills: 1 });
    }
    matches += seen.size;
  }
  return { out, matches };
}

/** Full stats for one player. The route decides who may read whom (self only unless stats.public). */
export async function myStats(userId: string, f: F) {
  const u = await db().user.findUnique({ where: { id: userId }, select: { id: true, steamId: true, displayName: true, avatarUrl: true, competitiveRating: true } });
  if (!u) return null;
  const days = RANGES[f.range ?? ""] ?? null;
  const now = Date.now();
  const since = days ? new Date(now - days * 86400_000) : null;
  const { mps, lines } = await loadLines(u.id, u.steamId, f, since, null);
  const prev = days ? (await loadLines(u.id, u.steamId, f, new Date(now - 2 * days * 86400_000), since)).lines : null;
  const perf = performanceBlock(lines);
  const w = await weaponKills(mps, u.steamId, new Map(lines.filter((l) => l.bx).map((l) => [l.matchId, l.bx!])));
  const hist = await db().ratingHistory.findMany({ where: { userId: u.id, matchId: { not: null }, ...(since ? { createdAt: { gte: since } } : {}) }, orderBy: { createdAt: "asc" }, select: { ratingBefore: true, ratingAfter: true, createdAt: true } });
  const tier = rankFromRating(u.competitiveRating);
  return {
    player: { id: u.id, name: u.displayName, avatarUrl: u.avatarUrl || null, rp: u.competitiveRating, level: tier.level, rankName: tier.name },
    filters: { range: f.range ?? "all", map: f.map ?? "all", type: f.type ?? "all", maps: [...ACTIVE_DUTY], ranges: ["all", "7d", "30d", "90d"], types: ["all", "queue", "tournament"] },
    performance: { ...perf, matches: lines.length, trend: prev ? trends(perf, performanceBlock(prev)) : null, prevMatches: prev?.length ?? null },
    totals: totalsBlock(lines, w.out, w.matches),
    activity: { matches: lines.length, times: lines.map((l) => new Date(l.at).toISOString()) },
    progress: progressBlock(hist.map((h) => ({ rp: h.ratingAfter, at: h.createdAt.toISOString(), delta: h.ratingAfter - h.ratingBefore }))),
    maps: { matches: lines.filter((l) => l.map).length, ...mapsBlock(lines) },
    history: lines.slice(0, 50).map((l) => ({ matchId: l.matchId, at: new Date(l.at).toISOString(), map: l.map, won: l.won, score: l.score, k: l.k, d: l.d, a: l.a,
      adr: l.dmg != null && l.rounds ? Math.round(l.dmg / l.rounds) : null, hsPct: l.hs != null && l.k ? Math.round((l.hs / l.k) * 100) : null, rpDelta: l.rpDelta, type: l.tournament ? "tournament" : "queue" })),
    // Stats that come only from AceBridge 0.3.0 round events; each reads "Not tracked yet" until a match in scope has them.
    bridgeMatches: lines.filter((l) => l.bx && l.bx.rounds > 0).length,
  };
}

/** Latest sign-in country per user. */
async function countries(ids: string[]) {
  const m = new Map<string, string>();
  if (!ids.length) return m;
  const rows = await db().signInEvent.findMany({ where: { userId: { in: ids }, country: { not: null } }, orderBy: { createdAt: "desc" }, select: { userId: true, country: true } });
  for (const r of rows) if (!m.has(r.userId) && r.country) m.set(r.userId, r.country);
  return m;
}

/** Public ranked ladder. season = LeagueSeason id (RP at the end of that season's window) or lifetime. */
export async function ranks(f: { season?: string; country?: string; region?: string }, meId: string | null) {
  const seasons = await db().leagueSeason.findMany({ where: { status: { not: "DRAFT" } }, orderBy: { createdAt: "desc" }, select: { id: true, name: true, status: true, registrationOpensAt: true, regularStartsAt: true, createdAt: true, nextSeasonAt: true, finalsAt: true } });
  const season = f.season && f.season !== "all" ? seasons.find((s) => s.id === f.season) ?? null : null;
  let base: { userId: string; rp: number; matches: number | null }[];
  if (season) {
    const from = season.registrationOpensAt ?? season.regularStartsAt ?? season.createdAt, to = season.nextSeasonAt ?? season.finalsAt ?? null;
    const rows = await db().ratingHistory.findMany({ where: { matchId: { not: null }, createdAt: { gte: from, ...(to ? { lt: to } : {}) } }, select: { userId: true, ratingAfter: true, createdAt: true } });
    base = seasonStandings(rows.map((r) => ({ userId: r.userId, ratingAfter: r.ratingAfter, at: r.createdAt })));
  } else {
    const us = await db().user.findMany({ where: { accountStatus: "ACTIVE", steamId: { not: null } }, orderBy: [{ competitiveRating: "desc" }, { wins: "desc" }], take: 2000, select: { id: true, competitiveRating: true, wins: true, losses: true } });
    base = us.map((x) => ({ userId: x.id, rp: x.competitiveRating, matches: x.wins + x.losses }));
  }
  const users = await db().user.findMany({ where: { id: { in: base.map((b) => b.userId) }, accountStatus: "ACTIVE" }, select: { id: true, displayName: true, avatarUrl: true, verifiedAt: true, wins: true, losses: true } });
  const byId = new Map(users.map((x) => [x.id, x]));
  const cc = await countries(base.map((b) => b.userId));
  let rows = base.filter((b) => byId.has(b.userId)).map((b) => {
    const x = byId.get(b.userId)!, t = rankFromRating(b.rp), country = cc.get(b.userId) ?? null;
    return { id: b.userId, name: x.displayName, avatarUrl: x.avatarUrl || null, verified: !!x.verifiedAt, country, region: regionOf(country), rp: b.rp, level: t.level, rankName: t.name, matches: b.matches ?? x.wins + x.losses };
  });
  const countryList = [...new Set(rows.map((r) => r.country).filter((c): c is string => !!c))].sort();
  if (f.region && f.region !== "all") rows = rows.filter((r) => r.region === f.region);
  if (f.country && f.country !== "all") rows = rows.filter((r) => r.country === f.country!.toUpperCase());
  const ranked = rows.map((r, i) => ({ pos: i + 1, ...r }));
  const mine = meId ? ranked.find((r) => r.id === meId) ?? null : null;
  return {
    season: season ? { id: season.id, name: season.name } : null,
    seasons: seasons.map((s) => ({ id: s.id, name: s.name, status: s.status })),
    regions: [...REGIONS], countries: countryList, total: ranked.length,
    tiers: RANK_TIERS.map((t) => ({ level: t.level, name: t.name, minRating: t.minRating })),
    me: meId ? { inLadder: !!mine, row: mine } : null,
    rows: ranked.slice(0, 200),
  };
}
