/**
 * R53 desktop 1.3.0: rank progress + RP explanation, Dossier, privacy, and the owner-only Command area.
 * Real rows only. Command functions must be called after readIsSteamOwner() (the route enforces it).
 */
import { getPrisma } from "@/server/db";
import { rankProgress } from "@/lib/rank-progress";
import { rankFromRating } from "@/lib/ranks";
import { explainRpChange } from "@/lib/rp-explain";
import { achievements, activityStreak } from "@/lib/achievements";
import { asDmPolicy, asVisibility, canViewProfile, type Privacy } from "@/lib/privacy";
import { prestigeForRp } from "@/lib/prestige";
import { combatStats, matchHeadshots, pct, type KillEvent } from "@/lib/combat-stats";

const db = () => getPrisma();
const iso = (d: Date | null | undefined) => (d ? d.toISOString() : null);

async function areFriends(a: string, b: string) {
  if (a === b) return true;
  return !!(await db().friendship.findFirst({ where: { status: "ACCEPTED", OR: [{ requesterId: a, addresseeId: b }, { requesterId: b, addresseeId: a }] } }));
}

/** Per-match explanation from the stored RatingHistory rows of that match. */
async function explainRows(userId: string, rows: { matchId: string | null; ratingBefore: number; ratingAfter: number; reason: string; algorithmVersion: string; createdAt: Date }[], priorCount: number) {
  const ids = rows.map((r) => r.matchId).filter((x): x is string => !!x);
  const [peers, mps] = await Promise.all([
    ids.length ? db().ratingHistory.findMany({ where: { matchId: { in: ids } }, select: { matchId: true, userId: true, ratingBefore: true } }) : [],
    ids.length ? db().matchPlayer.findMany({ where: { matchId: { in: ids } }, select: { matchId: true, userId: true, teamId: true, mvps: true } }) : [],
  ]);
  return rows.map((r, i) => {
    if (!r.matchId || (r.reason !== "verified-win" && r.reason !== "verified-loss")) return { matchId: r.matchId, at: r.createdAt.toISOString(), delta: r.ratingAfter - r.ratingBefore, reason: r.reason, explain: null };
    const team = new Map(mps.filter((m) => m.matchId === r.matchId).map((m) => [m.userId, m.teamId]));
    const myTeam = team.get(userId) ?? null;
    const opp = peers.filter((p) => p.matchId === r.matchId && p.userId !== userId && myTeam && team.get(p.userId) && team.get(p.userId) !== myTeam);
    const oppAvg = opp.length ? opp.reduce((s, p) => s + p.ratingBefore, 0) / opp.length : r.ratingBefore;
    const explain = explainRpChange({ rpBefore: r.ratingBefore, rpAfter: r.ratingAfter, opponentAverage: oppAvg, outcome: r.reason === "verified-win" ? "win" : "loss", matchesPlayed: priorCount + i, killsRecorded: false, version: r.algorithmVersion });
    return { matchId: r.matchId, at: r.createdAt.toISOString(), delta: explain.delta, reason: r.reason, explain: { ...explain, opponentsKnown: opp.length } };
  });
}

/** Rank centerpiece: progress, last verified match explained, activity streak, next contract. */
export async function progress(userId: string) {
  const u = await db().user.findUnique({ where: { id: userId }, select: { competitiveRating: true, subscriptionTier: true, wins: true, losses: true } });
  if (!u) return null;
  const hist = await db().ratingHistory.findMany({ where: { userId }, orderBy: { createdAt: "asc" }, select: { matchId: true, ratingBefore: true, ratingAfter: true, reason: true, algorithmVersion: true, createdAt: true } });
  const verified = hist.filter((h) => h.reason === "verified-win" || h.reason === "verified-loss");
  const last = verified.at(-1);
  const [lastExplained] = last ? await explainRows(userId, [last], verified.length - 1) : [null];
  const now = new Date();
  const contracts = await db().mission.findMany({ where: { active: true, startsAt: { lte: now }, endsAt: { gt: now }, rewards: { none: { userId } } }, orderBy: { endsAt: "asc" }, take: 1, select: { id: true, title: true, metric: true, target: true, endsAt: true } });
  const p = rankProgress(u.competitiveRating);
  const pres = prestigeForRp(u.competitiveRating);
  return {
    progress: p, rankName: rankFromRating(u.competitiveRating).name, prestige: pres ? { name: pres.name, slug: pres.slug } : null,
    wins: u.wins, losses: u.losses, placementLeft: Math.max(0, 10 - (u.wins + u.losses)),
    lastMatch: lastExplained, streak: activityStreak(verified.map((v) => v.createdAt.toISOString()), now),
    nextContract: contracts[0] ? { ...contracts[0], endsAt: contracts[0].endsAt.toISOString() } : null,
  };
}

/** Full player dossier, privacy-aware. viewerId null = signed out. */
export async function dossier(idOrSteam: string, viewerId: string | null, owner = false) {
  const u = await db().user.findFirst({ where: { accountStatus: "ACTIVE", OR: [{ id: idOrSteam }, { steamId: idOrSteam }] }, select: { id: true, steamId: true, displayName: true, avatarUrl: true, competitiveRating: true, subscriptionTier: true, verifiedAt: true, wins: true, losses: true, createdAt: true, profileVisibility: true } });
  if (!u) return null;
  const self = viewerId === u.id;
  const vis = asVisibility(u.profileVisibility);
  const head = { id: u.id, name: u.displayName, avatarUrl: u.avatarUrl || null, rp: u.competitiveRating, level: rankFromRating(u.competitiveRating).level, rankName: rankFromRating(u.competitiveRating).name, plan: u.subscriptionTier, verified: !!u.verifiedAt, joined: u.createdAt.toISOString(), visibility: vis, self };
  if (!canViewProfile(vis, { self, owner, friends: !!viewerId && (await areFriends(viewerId, u.id)) })) return { ...head, locked: true as const };
  const [hist, mps, claimed, seasons] = await Promise.all([
    db().ratingHistory.findMany({ where: { userId: u.id }, orderBy: { createdAt: "asc" }, select: { matchId: true, ratingBefore: true, ratingAfter: true, reason: true, algorithmVersion: true, createdAt: true } }),
    db().matchPlayer.findMany({ where: { userId: u.id, match: { state: "COMPLETED" } }, select: { matchId: true, teamId: true, kills: true, deaths: true, assists: true, damage: true, roundsPlayed: true, headshotKills: true, multi5k: true, mvps: true, clutchesWon: true, clutchesPlayed: true, entryWins: true, entryAttempts: true, utilityDamage: true, match: { select: { externalId: true, mapName: true, scoreA: true, scoreB: true, teamAId: true, winnerTeamId: true, endedAt: true } } }, orderBy: { match: { endedAt: "desc" } }, take: 500 }),
    db().missionReward.count({ where: { userId: u.id } }),
    db().leagueSeason.findMany({ where: { status: { not: "DRAFT" } }, orderBy: { createdAt: "asc" } }),
  ]);
  const verified = hist.filter((h) => h.reason === "verified-win" || h.reason === "verified-loss");
  const sum = (k: "multi5k" | "mvps" | "clutchesWon") => mps.reduce((s, m) => s + (m[k] ?? 0), 0);
  const peak = hist.reduce((m, h) => Math.max(m, h.ratingAfter), u.competitiveRating);
  const ach = achievements({ results: verified.map((v) => ({ win: v.reason === "verified-win", at: v.createdAt.toISOString() })), aces: sum("multi5k"), mvps: sum("mvps"), clutches: sum("clutchesWon"), peakRp: peak, contractsClaimed: claimed });
  // Season windows: from registration (or regular start) to the next season (or finals); unseasoned results stay out.
  const seasonRows = seasons.map((s) => {
    const from = s.registrationOpensAt ?? s.regularStartsAt ?? s.createdAt, to = s.nextSeasonAt ?? s.finalsAt ?? null;
    const inS = verified.filter((v) => v.createdAt >= from && (!to || v.createdAt < to));
    if (!inS.length) return { id: s.id, name: s.name, status: s.status, matches: 0, wins: 0, losses: 0, rpChange: 0, peak: null as number | null, endRp: null as number | null };
    const w = inS.filter((v) => v.reason === "verified-win").length;
    return { id: s.id, name: s.name, status: s.status, matches: inS.length, wins: w, losses: inS.length - w, rpChange: inS.reduce((a, v) => a + v.ratingAfter - v.ratingBefore, 0), peak: Math.max(...inS.map((v) => v.ratingAfter)), endRp: inS.at(-1)!.ratingAfter };
  });
  const recent = verified.slice(-30);
  const explained = await explainRows(u.id, recent, verified.length - recent.length);
  const byMatch = new Map(explained.map((e) => [e.matchId, e]));
  // Headshots: server report first; for matches whose report lacks it, AceBridge player_death events (headshot flag).
  const hsByMatch = await headshotsFor(mps, u.steamId);
  const combat = combatStats(mps, hsByMatch);
  const history = mps.slice(0, 30).map((m) => {
    const h = hsByMatch.get(m.matchId)!;
    const e = byMatch.get(m.matchId);
    const won = m.match.winnerTeamId ? m.match.winnerTeamId === m.teamId : null;
    const mineA = m.teamId === m.match.teamAId;
    return { matchId: m.matchId, map: m.match.mapName, at: iso(m.match.endedAt), won, score: m.match.scoreA != null && m.match.scoreB != null ? (mineA ? `${m.match.scoreA}-${m.match.scoreB}` : `${m.match.scoreB}-${m.match.scoreA}`) : null, kills: m.kills, deaths: m.deaths, assists: m.assists, adr: m.damage != null && m.roundsPlayed ? Math.round(m.damage / m.roundsPlayed) : null, hsPct: h.hs != null && h.kills ? pct(h.hs, h.kills) : null, hsSource: h.source, delta: e?.delta ?? null, explain: e?.explain ?? null };
  });
  return { ...head, locked: false as const, wins: u.wins, losses: u.losses, peakRp: peak, progress: rankProgress(u.competitiveRating), seasons: seasonRows, achievements: ach, history, combat,
    totals: { matches: mps.length, aces: sum("multi5k"), mvps: sum("mvps"), clutches: sum("clutchesWon"), contracts: claimed }, rating: hist.slice(-60).map((h) => ({ rp: h.ratingAfter, at: h.createdAt.toISOString() })) };
}

/* ---------------- Privacy ---------------- */
export async function readPrivacy(userId: string): Promise<Privacy | null> {
  const u = await db().user.findUnique({ where: { id: userId }, select: { profileVisibility: true, inventoryHidden: true, showOnline: true, dmPolicy: true } });
  return u ? { profileVisibility: asVisibility(u.profileVisibility), inventoryHidden: u.inventoryHidden, showOnline: u.showOnline, dmPolicy: asDmPolicy(u.dmPolicy) } : null;
}
export async function setPrivacy(userId: string, b: Record<string, unknown>) {
  const data: Partial<Privacy> = {};
  if ("profileVisibility" in b) data.profileVisibility = asVisibility(b.profileVisibility);
  if ("dmPolicy" in b) data.dmPolicy = asDmPolicy(b.dmPolicy);
  if (typeof b.inventoryHidden === "boolean") data.inventoryHidden = b.inventoryHidden;
  if (typeof b.showOnline === "boolean") data.showOnline = b.showOnline;
  await db().user.update({ where: { id: userId }, data });
  return { ok: true as const, privacy: await readPrivacy(userId) };
}

/** Per-match headshots for a player: the server report, else AceBridge player_death events bound to the match
 *  (by A.C.E match id or DatHost match id via ace_match_id / ACE_MATCH_ID). Null when neither recorded it. */
export async function headshotsFor(mps: { matchId: string; kills: number | null; headshotKills: number | null; match: { externalId: string | null } }[], steamId: string | null) {
  const keyOf = new Map<string, string>();
  if (steamId) for (const m of mps) if (m.headshotKills == null) { keyOf.set(m.matchId, m.matchId); if (m.match.externalId) keyOf.set(m.match.externalId, m.matchId); }
  const evRows = keyOf.size ? await db().cs2PluginEvent.findMany({ where: { type: "player_death", matchId: { in: [...keyOf.keys()] } }, select: { matchId: true, payload: true }, take: 20000 }) : [];
  const evByMatch = new Map<string, KillEvent[]>();
  for (const r of evRows) {
    const d = (r.payload ?? {}) as Record<string, unknown>;
    const ev: KillEvent = { matchId: r.matchId, attacker: typeof d.attacker === "string" ? d.attacker : null, victim: typeof d.victim === "string" ? d.victim : null, headshot: typeof d.headshot === "boolean" ? d.headshot : null };
    const mid = r.matchId ? keyOf.get(r.matchId) : undefined;
    if (mid) evByMatch.set(mid, [...(evByMatch.get(mid) ?? []), ev]);
  }
  return new Map(mps.map((m) => [m.matchId, matchHeadshots(m, evByMatch.get(m.matchId) ?? null, steamId)]));
}
