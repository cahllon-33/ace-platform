/**
 * R52 data + actions for A.C.E desktop v2 (Arena, Squad Finder, Ladder, Intel, Clans, Comms, Contracts, Armory, Circuit, Membership).
 * Real rows only: empty tables give empty lists, unrecorded stats stay null.
 */
import { getPrisma } from "@/server/db";
import { rankFromRating } from "@/lib/ranks";
import { loadLive } from "@/server/live";
import { ACTIVE_DUTY } from "@/lib/queue";
import { PARTY_MAX, avgLevel, cleanTags } from "@/lib/party";
import { activity, percentile, perMap, performance, ratingBand, regionOf, roleProfile, streaks, type Line } from "@/lib/intel";
import { FREE_PRICE, PLUS_PRICE, PREMIUM_PRICE } from "@/lib/pricing";
import { PLAN_MATRIX } from "@/lib/plan-compare";

const db = () => getPrisma();
const ONLINE_MS = 5 * 60_000;
const UPSEL = { id: true, displayName: true, avatarUrl: true, competitiveRating: true, subscriptionTier: true, verifiedAt: true, steamId: true } as const;
type U = { id: string; displayName: string; avatarUrl: string; competitiveRating: number; subscriptionTier: string; verifiedAt: Date | null; steamId: string | null };
const card = (u: U) => ({ id: u.id, name: u.displayName, avatarUrl: u.avatarUrl || null, rp: u.competitiveRating, level: rankFromRating(u.competitiveRating).level, tier: u.subscriptionTier, verified: !!u.verifiedAt });

async function onlineSet(ids: string[]) {
  if (!ids.length) return new Set<string>();
  const rows = await db().userSession.findMany({ where: { userId: { in: ids }, revokedAt: null, lastSeenAt: { gte: new Date(Date.now() - ONLINE_MS) } }, select: { userId: true } });
  return new Set(rows.map((r) => r.userId));
}
/** Latest sign-in country per user (2-letter, from the Vercel geo header). */
async function countries(ids: string[]) {
  if (!ids.length) return new Map<string, string>();
  const rows = await db().signInEvent.findMany({ where: { userId: { in: ids }, country: { not: null } }, orderBy: { createdAt: "desc" }, select: { userId: true, country: true } });
  const m = new Map<string, string>();
  for (const r of rows) if (!m.has(r.userId) && r.country) m.set(r.userId, r.country);
  return m;
}

/* ---------------- Parties ---------------- */
const PARTY_INC = { members: { orderBy: { joinedAt: "asc" as const }, include: { user: { select: UPSEL } } }, leader: { select: UPSEL } };
type PartyRow = Awaited<ReturnType<typeof partyRows>>[number];
const partyRows = (where: object) => db().party.findMany({ where, orderBy: { createdAt: "desc" }, take: 60, include: PARTY_INC });
function partyView(p: PartyRow, online: Set<string>) {
  const members = p.members.map((m) => ({ ...card(m.user), online: online.has(m.userId), leader: m.userId === p.leaderId }));
  return { id: p.id, leaderId: p.leaderId, language: p.language, tags: p.tags, isOpen: p.isOpen, note: p.note, slots: PARTY_MAX, members,
    avgLevel: avgLevel(members.map((m) => m.level)), premium: p.leader.subscriptionTier === "PREMIUM", joinable: p.isOpen && members.length < PARTY_MAX, createdAt: p.createdAt.toISOString() };
}
export async function squadFinder(meId: string | null, f: { filter?: string; language?: string }) {
  const rows = await partyRows({ isOpen: true });
  const online = await onlineSet(rows.flatMap((p) => p.members.map((m) => m.userId)));
  let list = rows.map((p) => partyView(p, online)).filter((p) => p.members.length > 0);
  if (f.filter === "premium") list = list.filter((p) => p.premium);
  if (f.filter === "joinable") list = list.filter((p) => p.joinable);
  if (f.language && f.language !== "any") list = list.filter((p) => p.language === f.language || p.language === "any");
  return { rows: list, mine: meId ? await myParty(meId) : null, invites: meId ? await myInvites(meId) : [] };
}
export async function myParty(userId: string) {
  const m = await db().partyMember.findUnique({ where: { userId }, select: { partyId: true } });
  if (!m) return null;
  const [p] = await partyRows({ id: m.partyId });
  if (!p) return null;
  return partyView(p, await onlineSet(p.members.map((x) => x.userId)));
}
async function myInvites(userId: string) {
  const rows = await db().partyInvite.findMany({ where: { userId }, include: { party: { include: { leader: { select: UPSEL }, _count: { select: { members: true } } } } }, orderBy: { createdAt: "desc" }, take: 10 });
  return rows.map((r) => ({ partyId: r.partyId, from: card(r.party.leader), size: r.party._count.members }));
}

/* ---------------- Clans (clubs) ---------------- */
export async function clans(f: { q?: string; region?: string; language?: string }) {
  const rows = await db().club.findMany({
    where: { ...(f.q ? { name: { contains: f.q.slice(0, 40), mode: "insensitive" as const } } : {}), ...(f.region && f.region !== "all" ? { region: f.region } : {}), ...(f.language && f.language !== "any" ? { language: f.language } : {}) },
    orderBy: { createdAt: "desc" }, take: 60, include: { members: { include: { user: { select: { competitiveRating: true } } } } },
  });
  return rows.map((c) => ({ id: c.id, name: c.name, tag: c.tag, description: c.description, region: c.region, language: c.language, isOpen: c.isOpen, members: c.members.length, avgLevel: avgLevel(c.members.map((m) => rankFromRating(m.user.competitiveRating).level)) }));
}
export async function clan(id: string, meId: string | null) {
  const c = await db().club.findUnique({ where: { id }, include: { members: { orderBy: { joinedAt: "asc" }, include: { user: { select: UPSEL } } } } });
  if (!c) return null;
  const ids = c.members.map((m) => m.userId);
  const week = new Date(Date.now() - 7 * 86400_000);
  const [online, matches7d] = await Promise.all([onlineSet(ids), ids.length ? db().matchPlayer.count({ where: { userId: { in: ids }, match: { state: "COMPLETED", endedAt: { gte: week } } } }) : 0]);
  const members = c.members.map((m) => ({ ...card(m.user), role: m.role, online: online.has(m.userId) }));
  return { id: c.id, name: c.name, tag: c.tag, description: c.description, region: c.region, language: c.language, isOpen: c.isOpen, ownerId: c.ownerId, createdAt: c.createdAt.toISOString(),
    members, avgLevel: avgLevel(members.map((m) => m.level)), memberMatches7d: matches7d, isMember: !!meId && ids.includes(meId) };
}

/* ---------------- Comms (friends + DMs) ---------------- */
export async function comms(meId: string) {
  const rows = await db().friendship.findMany({ where: { OR: [{ requesterId: meId }, { addresseeId: meId }] }, include: { requester: { select: UPSEL }, addressee: { select: UPSEL } } });
  const other = (r: (typeof rows)[number]) => (r.requesterId === meId ? r.addressee : r.requester);
  const friends = rows.filter((r) => r.status === "ACCEPTED").map(other);
  const [online, unread] = await Promise.all([onlineSet(friends.map((f) => f.id)), db().directMessage.groupBy({ by: ["fromId"], where: { toId: meId, readAt: null }, _count: { _all: true } })]);
  const un = new Map(unread.map((u) => [u.fromId, u._count._all]));
  return {
    friends: friends.map((f) => ({ ...card(f), online: online.has(f.id), unread: un.get(f.id) ?? 0 })).sort((a, b) => Number(b.online) - Number(a.online) || a.name.localeCompare(b.name)),
    incoming: rows.filter((r) => r.status === "PENDING" && r.addresseeId === meId).map((r) => ({ id: r.id, from: card(r.requester) })),
    outgoing: rows.filter((r) => r.status === "PENDING" && r.requesterId === meId).map((r) => ({ id: r.id, to: card(r.addressee) })),
  };
}
const areFriends = async (a: string, b: string) => !!(await db().friendship.findFirst({ where: { status: "ACCEPTED", OR: [{ requesterId: a, addresseeId: b }, { requesterId: b, addresseeId: a }] } }));
export async function thread(meId: string, withId: string) {
  if (!(await areFriends(meId, withId))) return null;
  const rows = await db().directMessage.findMany({ where: { OR: [{ fromId: meId, toId: withId }, { fromId: withId, toId: meId }] }, orderBy: { createdAt: "desc" }, take: 100 });
  await db().directMessage.updateMany({ where: { fromId: withId, toId: meId, readAt: null }, data: { readAt: new Date() } });
  return rows.reverse().map((m) => ({ id: m.id, mine: m.fromId === meId, body: m.body, at: m.createdAt.toISOString() }));
}
export async function searchPlayers(q: string) {
  if (q.trim().length < 2) return [];
  const rows = await db().user.findMany({ where: { accountStatus: "ACTIVE", steamId: { not: null }, displayName: { contains: q.trim().slice(0, 32), mode: "insensitive" } }, take: 12, select: UPSEL, orderBy: { competitiveRating: "desc" } });
  return rows.map(card);
}

/* ---------------- Ladder ---------------- */
export async function ladder(f: { region?: string; country?: string; period?: string }) {
  const period = f.period === "weekly" ? 7 : f.period === "monthly" ? 30 : null;
  if (period) {
    // Period ladders: RP gained from rated matches inside the window.
    const since = new Date(Date.now() - period * 86400_000);
    const g = await db().ratingHistory.findMany({ where: { createdAt: { gte: since }, matchId: { not: null } }, select: { userId: true, ratingBefore: true, ratingAfter: true } });
    const by = new Map<string, { gain: number; n: number }>();
    for (const r of g) { const x = by.get(r.userId) ?? { gain: 0, n: 0 }; x.gain += r.ratingAfter - r.ratingBefore; x.n++; by.set(r.userId, x); }
    const users = await db().user.findMany({ where: { id: { in: [...by.keys()] }, accountStatus: "ACTIVE" }, select: UPSEL });
    const cc = await countries(users.map((u) => u.id));
    return { period: f.period, rows: users.map((u) => ({ ...card(u), country: cc.get(u.id) ?? null, gain: by.get(u.id)!.gain, matches: by.get(u.id)!.n })).sort((a, b) => b.gain - a.gain).slice(0, 100).map((r, i) => ({ pos: i + 1, ...r })) };
  }
  const users = await db().user.findMany({ where: { accountStatus: "ACTIVE", steamId: { not: null } }, orderBy: [{ competitiveRating: "desc" }, { wins: "desc" }], take: 500, select: { ...UPSEL, wins: true, losses: true } });
  const cc = await countries(users.map((u) => u.id));
  let rows = users.map((u) => ({ ...card(u), wins: u.wins, losses: u.losses, country: cc.get(u.id) ?? null, region: regionOf(cc.get(u.id)) }));
  if (f.region && f.region !== "all") rows = rows.filter((r) => r.region === f.region);
  if (f.country) rows = rows.filter((r) => r.country === f.country!.toUpperCase());
  return { period: "lifetime", rows: rows.slice(0, 100).map((r, i) => ({ pos: i + 1, ...r })), countries: [...new Set([...cc.values()])].sort() };
}

/* ---------------- Intel (stats) ---------------- */
export async function intel(userId: string, f: { range?: string; map?: string; type?: string }) {
  const u = await db().user.findFirst({ where: { OR: [{ id: userId }, { steamId: userId }], accountStatus: "ACTIVE" }, select: { ...UPSEL, wins: true, losses: true } });
  if (!u) return null;
  const days = ({ "7d": 7, "30d": 30, "90d": 90 } as Record<string, number>)[f.range ?? ""] ?? null;
  const since = days ? new Date(Date.now() - days * 86400_000) : null;
  const mps = await db().matchPlayer.findMany({
    where: { userId: u.id, match: { state: "COMPLETED", ...(since ? { endedAt: { gte: since } } : {}), ...(f.map && f.map !== "all" ? { mapName: f.map } : {}), ...(f.type === "queue" ? { tournamentId: null } : f.type === "tournament" ? { tournamentId: { not: null } } : {}) } },
    include: { match: { select: { id: true, mapName: true, endedAt: true, winnerTeamId: true, scoreA: true, scoreB: true } }, weapons: true }, orderBy: { match: { endedAt: "desc" } }, take: 500,
  });
  const hist = await db().ratingHistory.findMany({ where: { userId: u.id }, orderBy: { createdAt: "asc" }, select: { ratingBefore: true, ratingAfter: true, createdAt: true, matchId: true } });
  const delta = new Map(hist.filter((h) => h.matchId).map((h) => [h.matchId!, h.ratingAfter - h.ratingBefore]));
  const lines: Line[] = mps.map((m) => ({
    matchId: m.matchId, at: (m.match.endedAt ?? new Date(0)).getTime(), map: m.match.mapName,
    won: delta.has(m.matchId) ? delta.get(m.matchId)! > 0 : m.match.winnerTeamId && m.teamId ? m.match.winnerTeamId === m.teamId : null,
    k: m.kills, d: m.deaths, a: m.assists, dmg: m.damage, rounds: m.roundsPlayed, hs: m.headshotKills, clW: m.clutchesWon, clP: m.clutchesPlayed, enW: m.entryWins, enA: m.entryAttempts,
    util: m.utilityDamage, m2: m.multi2k, m3: m.multi3k, m4: m.multi4k, m5: m.multi5k, mvps: m.mvps,
  }));
  const weapons = new Map<string, { kills: number; hs: number; dmg: number }>();
  for (const m of mps) for (const w of m.weapons) { const x = weapons.get(w.weapon) ?? { kills: 0, hs: 0, dmg: 0 }; x.kills += w.kills; x.hs += w.headshotKills; x.dmg += w.damage; weapons.set(w.weapon, x); }
  const trend = hist.filter((h) => !since || h.createdAt >= since).map((h) => ({ rp: h.ratingAfter, at: h.createdAt.toISOString() }));
  const rps = trend.map((t) => t.rp);
  // Percentile vs players in the same region (latest sign-in country) and vs everyone.
  const cc = await countries([u.id]);
  const region = regionOf(cc.get(u.id));
  const everyone = await db().user.findMany({ where: { accountStatus: "ACTIVE", steamId: { not: null }, id: { not: u.id } }, select: { id: true, competitiveRating: true }, take: 5000 });
  let regionPop: number[] = [];
  if (region) { const all = await countries(everyone.map((e) => e.id)); regionPop = everyone.filter((e) => regionOf(all.get(e.id)) === region).map((e) => e.competitiveRating); }
  const perf = performance(lines);
  return {
    player: { ...card(u), wins: u.wins, losses: u.losses, country: cc.get(u.id) ?? null, region },
    filters: { range: f.range ?? "all", map: f.map ?? "all", type: f.type ?? "all", maps: [...ACTIVE_DUTY] },
    performance: { ...perf, flashSuccess: null, flashesPerRound: null },
    streaks: streaks(lines), maps: perMap(lines), role: roleProfile(lines),
    rating: { band: ratingBand(trend), highest: rps.length ? Math.max(...rps) : null, lowest: rps.length ? Math.min(...rps) : null } as { band: ReturnType<typeof ratingBand>; highest: number | null; lowest: number | null; locked?: boolean },
    percentile: { global: percentile(u.competitiveRating, everyone.map((e) => e.competitiveRating)), region: region ? percentile(u.competitiveRating, regionPop) : null, regionSize: regionPop.length },
    activity: activity(lines),
    weapons: [...weapons.entries()].map(([weapon, w]) => ({ weapon, ...w, hsPct: w.kills ? Math.round((w.hs / w.kills) * 100) : null })).sort((a, b) => b.kills - a.kills).slice(0, 12),
    recent: lines.slice(0, 20).map((l) => ({ matchId: l.matchId, at: new Date(l.at).toISOString(), map: l.map, won: l.won, k: l.k, d: l.d, a: l.a, adr: l.dmg != null && l.rounds ? Math.round(l.dmg / l.rounds) : null, rpDelta: delta.get(l.matchId) ?? null })),
    /** Columns the A.C.E server plugin does not record yet (shown as "not tracked", never estimated). */
    notTracked: ["flashSuccess", "flashesPerRound", "clutch1v1", "clutch1v2", "sideSplit"],
  };
}

/* ---------------- Contracts (missions) ---------------- */
async function metricValue(userId: string, metric: string, from: Date, to: Date) {
  if (metric === "matches" || metric === "wins") {
    const rows = await db().ratingHistory.findMany({ where: { userId, matchId: { not: null }, createdAt: { gte: from, lt: to } }, select: { ratingBefore: true, ratingAfter: true } });
    return metric === "matches" ? rows.length : rows.filter((r) => r.ratingAfter > r.ratingBefore).length;
  }
  const field = ({ kills: "kills", mvps: "mvps", headshots: "headshotKills" } as const)[metric as "kills"];
  if (!field) return 0;
  const agg = await db().matchPlayer.aggregate({ where: { userId, match: { state: "COMPLETED", endedAt: { gte: from, lt: to } } }, _sum: { [field]: true } });
  return (agg._sum as Record<string, number | null>)[field] ?? 0;
}
export async function contracts(meId: string | null) {
  const now = new Date();
  const rows = await db().mission.findMany({ where: { active: true }, orderBy: { startsAt: "asc" }, include: { rewardItem: { select: { name: true, kind: true, color: true } }, ...(meId ? { rewards: { where: { userId: meId }, select: { id: true } } } : {}) } });
  return Promise.all(rows.map(async (m) => {
    const phase = now < m.startsAt ? "upcoming" : now >= m.endsAt ? "ended" : "ongoing";
    const progress = meId && phase !== "upcoming" ? Math.min(m.target, await metricValue(meId, m.metric, m.startsAt, m.endsAt)) : null;
    return { id: m.id, title: m.title, description: m.description, metric: m.metric, target: m.target, startsAt: m.startsAt.toISOString(), endsAt: m.endsAt.toISOString(), phase, progress,
      reward: m.rewardItem ? { name: m.rewardItem.name, kind: m.rewardItem.kind, color: m.rewardItem.color } : null, claimed: !!(m as { rewards?: unknown[] }).rewards?.length };
  }));
}

/* ---------------- Armory, news, circuit, membership, arena ---------------- */
export async function armory(meId: string | null) {
  const [items, owned] = await Promise.all([
    db().cosmeticItem.findMany({ where: { active: true }, orderBy: [{ featured: "desc" }, { kind: "asc" }, { createdAt: "asc" }] }),
    meId ? db().cosmeticOwnership.findMany({ where: { userId: meId }, select: { itemId: true, equipped: true } }) : [],
  ]);
  const own = new Map(owned.map((o) => [o.itemId, o.equipped]));
  return items.map((i) => ({ id: i.id, slug: i.slug, kind: i.kind, name: i.name, description: i.description, priceCents: i.priceCents, color: i.color, featured: i.featured, owned: own.has(i.id), equipped: own.get(i.id) ?? false }));
}
export const news = async (take = 10) => (await db().newsPost.findMany({ where: { published: true }, orderBy: { createdAt: "desc" }, take })).map((n) => ({ id: n.id, title: n.title, body: n.body, url: n.url, at: n.createdAt.toISOString() }));

export async function circuit(meId: string | null) {
  const seasons = await db().leagueSeason.findMany({ where: { status: { not: "DRAFT" } }, orderBy: { createdAt: "desc" }, take: 8 });
  const tourIds = seasons.map((s) => s.tournamentId).filter((x): x is string => !!x);
  const tours = tourIds.length ? await db().tournament.findMany({ where: { id: { in: tourIds } }, include: { _count: { select: { entries: true } } } }) : [];
  const myTeams = meId ? await db().teamMember.findMany({ where: { userId: meId }, include: { team: { include: { _count: { select: { members: true } } } } } }) : [];
  const iso = (d: Date | null) => d?.toISOString() ?? null;
  return {
    seasons: seasons.map((s) => {
      const t = tours.find((x) => x.id === s.tournamentId);
      return { id: s.id, name: s.name, status: s.status, description: s.description, prizeText: s.prizeText,
        timeline: { registrationOpensAt: iso(s.registrationOpensAt), registrationClosesAt: iso(s.registrationClosesAt), regularStartsAt: iso(s.regularStartsAt), regularEndsAt: iso(s.regularEndsAt), playoffsStartsAt: iso(s.playoffsStartsAt), finalsAt: iso(s.finalsAt), nextSeasonAt: iso(s.nextSeasonAt) },
        tournament: t ? { id: t.id, name: t.name, status: t.status, teams: t._count.entries } : null };
    }),
    myTeams: myTeams.map((m) => ({ id: m.team.id, name: m.team.name, tag: m.team.clanTag, members: m.team._count.members, eligible: m.team._count.members >= 5, captain: m.role === "CAPTAIN" })),
  };
}

export async function membership(meId: string | null) {
  const u = meId ? await db().user.findUnique({ where: { id: meId }, select: { subscriptionTier: true, subscriptionStatus: true, subscriptionExpiresAt: true, paddleCustomerId: true } }) : null;
  return { prices: { free: FREE_PRICE, plus: PLUS_PRICE, premium: PREMIUM_PRICE, period: "/mo" }, matrix: PLAN_MATRIX,
    me: u ? { tier: u.subscriptionTier, status: u.subscriptionStatus, expiresAt: u.subscriptionExpiresAt?.toISOString() ?? null, canManage: !!u.paddleCustomerId } : null };
}

export async function arena(meId: string | null) {
  const [live, posts, shop, openParties, missions, mine, myClans] = await Promise.all([
    loadLive(), news(4), armory(meId), db().party.count({ where: { isOpen: true } }), db().mission.count({ where: { active: true, endsAt: { gt: new Date() } } }),
    meId ? myParty(meId) : null,
    meId ? db().clubMember.findMany({ where: { userId: meId }, include: { club: { include: { _count: { select: { members: true } } } } }, take: 6 }) : [],
  ]);
  return { live, news: posts, featured: shop.filter((i) => i.featured).slice(0, 4), shopCount: shop.length, openParties, activeContracts: missions, party: mine,
    clans: myClans.map((c) => ({ id: c.club.id, name: c.club.name, tag: c.club.tag, members: c.club._count.members })), mapPool: [...ACTIVE_DUTY] };
}

/* ---------------- Actions ---------------- */
type R = { ok: true; data?: unknown } | { ok: false; error: string };
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

async function leaveParty(userId: string) {
  const m = await db().partyMember.findUnique({ where: { userId }, include: { party: { include: { members: { orderBy: { joinedAt: "asc" } } } } } });
  if (!m) return;
  await db().queueEntry.deleteMany({ where: { partyId: m.partyId } });
  const rest = m.party.members.filter((x) => x.userId !== userId);
  if (!rest.length) { await db().party.delete({ where: { id: m.partyId } }); return; }
  await db().partyMember.delete({ where: { userId } });
  if (m.party.leaderId === userId) await db().party.update({ where: { id: m.partyId }, data: { leaderId: rest[0].userId } });
}

export async function desktopAction(meId: string, op: string, b: Record<string, unknown>): Promise<R> {
  const prisma = db();
  switch (op) {
    case "party.create": {
      await leaveParty(meId);
      await prisma.queueEntry.deleteMany({ where: { userId: meId } });
      const p = await prisma.party.create({ data: { leaderId: meId, language: str(b.language, 8) || "any", tags: cleanTags(b.tags), isOpen: b.isOpen !== false, note: str(b.note, 120), members: { create: { userId: meId } } } });
      return { ok: true, data: { id: p.id } };
    }
    case "party.join": {
      const id = str(b.partyId, 40);
      return prisma.$transaction(async (tx) => {
        await tx.$executeRaw`SELECT pg_advisory_xact_lock(52052052)`;
        const p = await tx.party.findUnique({ where: { id }, include: { members: true, invites: { where: { userId: meId } }, leader: { select: { verifiedAt: true } } } });
        if (!p) return { ok: false as const, error: "not-found" };
        if (p.members.some((m) => m.userId === meId)) return { ok: true as const };
        if (p.members.length >= PARTY_MAX) return { ok: false as const, error: "party-full" };
        if (!p.isOpen && !p.invites.length) return { ok: false as const, error: "invite-only" };
        if (p.tags.includes("verified")) { const me = await tx.user.findUnique({ where: { id: meId }, select: { verifiedAt: true } }); if (!me?.verifiedAt) return { ok: false as const, error: "verified-only" }; }
        const cur = await tx.partyMember.findUnique({ where: { userId: meId } });
        if (cur) return { ok: false as const, error: "leave-current-party" };
        await tx.queueEntry.deleteMany({ where: { OR: [{ partyId: id }, { userId: meId }] } });
        await tx.partyMember.create({ data: { partyId: id, userId: meId } });
        await tx.partyInvite.deleteMany({ where: { partyId: id, userId: meId } });
        return { ok: true as const };
      });
    }
    case "party.leave": await leaveParty(meId); return { ok: true };
    case "party.invite": case "party.kick": case "party.update": {
      const m = await prisma.partyMember.findUnique({ where: { userId: meId }, include: { party: true } });
      if (!m || m.party.leaderId !== meId) return { ok: false, error: "leader-only" };
      if (op === "party.update") { await prisma.party.update({ where: { id: m.partyId }, data: { isOpen: b.isOpen !== false, tags: cleanTags(b.tags), language: str(b.language, 8) || "any", note: str(b.note, 120) } }); return { ok: true }; }
      const target = str(b.userId, 40);
      if (op === "party.kick") { if (target !== meId) { await prisma.partyMember.deleteMany({ where: { partyId: m.partyId, userId: target } }); await prisma.queueEntry.deleteMany({ where: { partyId: m.partyId } }); } return { ok: true }; }
      if (!(await prisma.user.findUnique({ where: { id: target }, select: { id: true } }))) return { ok: false, error: "not-found" };
      await prisma.partyInvite.upsert({ where: { partyId_userId: { partyId: m.partyId, userId: target } }, create: { partyId: m.partyId, userId: target }, update: {} });
      return { ok: true };
    }
    case "party.decline": await prisma.partyInvite.deleteMany({ where: { userId: meId, partyId: str(b.partyId, 40) } }); return { ok: true };
    case "clan.create": {
      const name = str(b.name, 32), tag = str(b.tag, 5).toUpperCase();
      if (name.length < 3 || !/^[A-Z0-9]{2,5}$/.test(tag)) return { ok: false, error: "invalid" };
      if ((await prisma.club.count({ where: { ownerId: meId } })) >= 3) return { ok: false, error: "limit" };
      try {
        const c = await prisma.club.create({ data: { name, tag, description: str(b.description, 280), region: str(b.region, 8) || "global", language: str(b.language, 8) || "any", isOpen: b.isOpen !== false, ownerId: meId, members: { create: { userId: meId, role: "OWNER" } } } });
        return { ok: true, data: { id: c.id } };
      } catch { return { ok: false, error: "name-taken" }; }
    }
    case "clan.join": {
      const c = await prisma.club.findUnique({ where: { id: str(b.clanId, 40) } });
      if (!c) return { ok: false, error: "not-found" };
      if (!c.isOpen) return { ok: false, error: "closed" };
      await prisma.clubMember.upsert({ where: { clubId_userId: { clubId: c.id, userId: meId } }, create: { clubId: c.id, userId: meId }, update: {} });
      return { ok: true };
    }
    case "clan.leave": {
      const id = str(b.clanId, 40);
      const c = await prisma.club.findUnique({ where: { id } });
      if (c?.ownerId === meId) return { ok: false, error: "owner-cannot-leave" };
      await prisma.clubMember.deleteMany({ where: { clubId: id, userId: meId } });
      return { ok: true };
    }
    case "friend.request": {
      const to = str(b.userId, 40);
      if (to === meId || !(await prisma.user.findUnique({ where: { id: to }, select: { id: true } }))) return { ok: false, error: "not-found" };
      const back = await prisma.friendship.findUnique({ where: { requesterId_addresseeId: { requesterId: to, addresseeId: meId } } });
      if (back) { await prisma.friendship.update({ where: { id: back.id }, data: { status: "ACCEPTED" } }); return { ok: true }; }
      await prisma.friendship.upsert({ where: { requesterId_addresseeId: { requesterId: meId, addresseeId: to } }, create: { requesterId: meId, addresseeId: to }, update: {} });
      return { ok: true };
    }
    case "friend.accept": await prisma.friendship.updateMany({ where: { id: str(b.id, 40), addresseeId: meId }, data: { status: "ACCEPTED" } }); return { ok: true };
    case "friend.remove": {
      const o = str(b.userId, 40);
      await prisma.friendship.deleteMany({ where: { OR: [{ requesterId: meId, addresseeId: o }, { requesterId: o, addresseeId: meId }] } });
      return { ok: true };
    }
    case "dm.send": {
      const to = str(b.to, 40), body = str(b.body, 500);
      if (!body) return { ok: false, error: "empty" };
      if (!(await areFriends(meId, to))) return { ok: false, error: "friends-only" };
      const recent = await prisma.directMessage.count({ where: { fromId: meId, createdAt: { gte: new Date(Date.now() - 60_000) } } });
      if (recent >= 30) return { ok: false, error: "slow-down" };
      await prisma.directMessage.create({ data: { fromId: meId, toId: to, body } });
      return { ok: true };
    }
    case "contract.claim": {
      const m = await prisma.mission.findUnique({ where: { id: str(b.id, 40) } });
      if (!m || !m.active) return { ok: false, error: "not-found" };
      if (new Date() < m.startsAt) return { ok: false, error: "not-started" };
      if ((await metricValue(meId, m.metric, m.startsAt, m.endsAt)) < m.target) return { ok: false, error: "not-complete" };
      try {
        await prisma.$transaction(async (tx) => {
          await tx.missionReward.create({ data: { missionId: m.id, userId: meId } });
          if (m.rewardItemId) {
            const has = await tx.cosmeticOwnership.findUnique({ where: { userId_itemId: { userId: meId, itemId: m.rewardItemId } } });
            if (!has) await tx.cosmeticOwnership.create({ data: { userId: meId, itemId: m.rewardItemId, orderId: `contract:${m.id}:${meId}` } });
          }
          await tx.notification.create({ data: { userId: meId, kind: "contract-complete" } });
        });
      } catch { return { ok: false, error: "already-claimed" }; }
      return { ok: true };
    }
    default: return { ok: false, error: "unknown-op" };
  }
}
