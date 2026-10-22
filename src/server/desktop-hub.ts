/**
 * R51 data for the A.C.E desktop app's native screens. Real database rows only (no placeholders):
 * empty tables return empty lists. Only public profile fields are exposed; "me" needs the session.
 */
import { getPrisma } from "@/server/db";
import { rankFromRating } from "@/lib/ranks";

type PlayerRow = { id: string; displayName: string; avatarUrl: string; steamId: string | null; competitiveRating: number; wins: number; losses: number; verifiedAt: Date | null };
const pub = (u: PlayerRow) => {
  const r = rankFromRating(u.competitiveRating);
  const games = u.wins + u.losses;
  return { id: u.id, name: u.displayName, avatarUrl: u.avatarUrl || null, steamId: u.steamId, rp: u.competitiveRating, level: r.level, wins: u.wins, losses: u.losses, winRate: games ? Math.round((u.wins / games) * 100) : null, verified: !!u.verifiedAt };
};
const PSEL = { id: true, displayName: true, avatarUrl: true, steamId: true, competitiveRating: true, wins: true, losses: true, verifiedAt: true } as const;
const ACTIVE = { accountStatus: "ACTIVE" as const, steamId: { not: null } };

export async function hubLeaderboard(take = 100) {
  const rows = await getPrisma().user.findMany({ where: ACTIVE, orderBy: [{ competitiveRating: "desc" }, { wins: "desc" }], take, select: PSEL });
  return rows.map((u, i) => ({ pos: i + 1, ...pub(u) }));
}

export async function hubPros(take = 24) {
  // "Pro" = verified A.C.E players, ranked by RP.
  const rows = await getPrisma().user.findMany({ where: { ...ACTIVE, verifiedAt: { not: null } }, orderBy: { competitiveRating: "desc" }, take, select: PSEL });
  return rows.map(pub);
}

export async function hubTeams(take = 50) {
  const rows = await getPrisma().team.findMany({ orderBy: [{ combinedWinRate: "desc" }, { createdAt: "asc" }], take, include: { members: { include: { user: { select: PSEL } } } } });
  return rows.map((t) => ({ id: t.id, name: t.name, tag: t.clanTag, logoUrl: t.logoUrl || null, winRate: t.combinedWinRate, streak: t.activeStreak, members: t.members.map((m) => ({ role: m.role, ...pub(m.user) })) }));
}

async function matchesFor(userId: string | null, take: number) {
  const rows = await getPrisma().match.findMany({
    where: { state: "COMPLETED", ...(userId ? { players: { some: { userId } } } : {}) }, orderBy: { endedAt: "desc" }, take,
    select: { id: true, mapName: true, scoreA: true, scoreB: true, endedAt: true, source: true, players: { select: { userId: true, kills: true, deaths: true, assists: true, damage: true, roundsPlayed: true, headshotKills: true, mvps: true, user: { select: { displayName: true } } } } },
  });
  return rows.map((m) => ({ id: m.id, map: m.mapName, scoreA: m.scoreA, scoreB: m.scoreB, endedAt: m.endedAt?.toISOString() ?? null, players: m.players.map((p) => ({ userId: p.userId, name: p.user.displayName, k: p.kills, d: p.deaths, a: p.assists, adr: p.damage != null && p.roundsPlayed ? Math.round(p.damage / p.roundsPlayed) : null, hs: p.headshotKills, mvps: p.mvps })) }));
}

export const hubMatches = (take = 30) => matchesFor(null, take);

export async function hubPlayer(id: string) {
  const prisma = getPrisma();
  const u = await prisma.user.findFirst({ where: { ...ACTIVE, OR: [{ id }, { steamId: id }] }, select: { ...PSEL, createdAt: true } });
  if (!u) return null;
  const [teams, matches, history, agg] = await Promise.all([
    prisma.teamMember.findMany({ where: { userId: u.id }, include: { team: { select: { id: true, name: true, clanTag: true } } } }),
    matchesFor(u.id, 20),
    prisma.ratingHistory.findMany({ where: { userId: u.id }, orderBy: { createdAt: "asc" }, take: 50, select: { ratingAfter: true, createdAt: true } }),
    prisma.matchPlayer.aggregate({ where: { userId: u.id, kills: { not: null } }, _sum: { kills: true, deaths: true, assists: true, damage: true, roundsPlayed: true, headshotKills: true, mvps: true }, _count: true }),
  ]);
  const s = agg._sum;
  return {
    ...pub(u), joined: u.createdAt.toISOString(),
    teams: teams.map((t) => ({ id: t.team.id, name: t.team.name, tag: t.team.clanTag, role: t.role })),
    totals: { matches: agg._count, kills: s.kills, deaths: s.deaths, assists: s.assists, kd: s.kills != null && s.deaths ? +(s.kills / s.deaths).toFixed(2) : null, adr: s.damage != null && s.roundsPlayed ? Math.round(s.damage / s.roundsPlayed) : null, hsPct: s.kills && s.headshotKills != null ? Math.round((s.headshotKills / s.kills) * 100) : null, mvps: s.mvps },
    rating: history.map((h) => ({ rp: h.ratingAfter, at: h.createdAt.toISOString() })),
    matches,
  };
}

export async function hubNotifications(userId: string) {
  return (await getPrisma().notification.findMany({ where: { userId }, orderBy: { createdAt: "desc" }, take: 50 })).map((n) => ({ id: n.id, kind: n.kind, read: !!n.readAt, at: n.createdAt.toISOString() }));
}

export async function hubParty(userId: string) {
  const mine = await getPrisma().teamMember.findMany({ where: { userId }, include: { team: { include: { members: { include: { user: { select: { ...PSEL, sessions: { where: { revokedAt: null }, orderBy: { lastSeenAt: "desc" }, take: 1, select: { lastSeenAt: true } } } } } } } } } });
  return mine.map((m) => ({
    id: m.team.id, name: m.team.name, tag: m.team.clanTag,
    members: m.team.members.map((x) => ({ role: x.role, online: !!x.user.sessions[0] && Date.now() - x.user.sessions[0].lastSeenAt.getTime() < 5 * 60_000, ...pub(x.user) })),
  }));
}
