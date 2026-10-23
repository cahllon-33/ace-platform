import { resolvedConnect, resolvedGotv } from "@/server/connect-address";
import { Prisma } from "@prisma/client";
import { getPrisma } from "@/server/db";
import { dathost, DathostError, isAceMap, readDathostConfig } from "@/server/dathost";
import { getAppBaseUrl } from "@/server/env";
import { effectiveRankArt } from "@/server/rank-art";
import { rankFromRating, type RankArt } from "@/lib/ranks";
import {
  ACTIVE_DUTY, QUEUE_SIZE, READY_SECONDS, VETO_TURN_SECONDS,
  applyBan, autoBanMap, balanceTeams, captainOf, dodgeCooldownMinutes, estimateWaitSeconds, leaverCooldownMinutes, readyOutcome, remainingMaps,
  gotvFix, normalizeConnectUrl, vetoTurn, winProbability, type Ban, type Side,
} from "@/lib/queue";
import type { Cs2Match } from "@/server/dathost";
import { healthTick } from "@/server/server-health";
import { connectDetails, randomServerPassword } from "@/server/discord";
import { anticheatBlock } from "@/server/anticheat";
import { groupEntries, pickMatch, splitGroups } from "@/lib/party";
import { pickByTrust } from "@/lib/trust";
import { refreshTrust, trustMap } from "@/server/trust";
import { cleanupMatchDiscord, readLobbyDiscord, setupMatchDiscord } from "@/server/discord-match";

/** States that hold the (single) DatHost server. */
export const ACTIVE_STATES = ["READY", "VETO", "LAUNCHING", "LIVE"] as const;
const LIVE_POLL_MS = 15_000;
/** A LAUNCHING lobby that never reached LIVE (crashed request) is failed after this. */
const LAUNCH_STALE_MS = 90_000;

type Tx = Prisma.TransactionClient;

const bansOf = (v: Prisma.JsonValue): Ban[] => (Array.isArray(v) ? (v as Ban[]) : []);

/** Serializes queue mutations across instances (Postgres transaction-scoped advisory lock). */
async function locked<T>(fn: (tx: Tx) => Promise<T>): Promise<T> {
  return getPrisma().$transaction(async (tx) => {
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(48048048)`;
    return fn(tx);
  }, { timeout: 15000 });
}

async function requeue(tx: Tx, userIds: string[]) {
  if (!userIds.length) return;
  const users = await tx.user.findMany({ where: { id: { in: userIds }, accountStatus: "ACTIVE" }, select: { id: true, competitiveRating: true } });
  for (const u of users) {
    await tx.queueEntry.upsert({ where: { userId: u.id }, create: { userId: u.id, rp: u.competitiveRating }, update: {} });
  }
}

/** Starts a 10-player lobby from the oldest queue entries when the server is free. */
async function formLobby(tx: Tx, now: Date) {
  const busy = await tx.queueLobby.count({ where: { state: { in: [...ACTIVE_STATES] } } });
  if (busy) return;
  const all = await tx.queueEntry.findMany({ orderBy: { joinedAt: "asc" }, take: 60 });
  if (all.length < QUEUE_SIZE) return;
  // R52: parties stay together. With no parties waiting this is exactly the old oldest-10 + balanceTeams path.
  let entries = all.slice(0, QUEUE_SIZE);
  let teams: { team1: { userId: string; rp: number }[]; team2: { userId: string; rp: number }[] } | null = null;
  if (all.some((e) => e.partyId)) {
    const picked = pickMatch(groupEntries(all.map((e) => ({ userId: e.userId, rp: e.rp, partyId: e.partyId, joinedAt: e.joinedAt.getTime() }))), QUEUE_SIZE);
    if (!picked) return;
    teams = splitGroups(picked);
    if (!teams) return;
    const ids = new Set(picked.flatMap((g) => g.seats.map((x) => x.userId)));
    entries = all.filter((e) => ids.has(e.userId));
  } else {
    // R60: prefer pairing similar-trust players (cached TrustProfile only; no external calls inside the lock).
    // The oldest entry is always included and trust is ignored after TRUST_MAX_WAIT_MS, so nobody starves.
    const trust = await trustMap(all.map((e) => e.userId), tx);
    if (trust.size) {
      const ids = new Set(pickByTrust(all, trust, QUEUE_SIZE, now));
      if (ids.size === QUEUE_SIZE) entries = all.filter((e) => ids.has(e.userId));
    }
  }
  const { team1, team2 } = teams ?? balanceTeams(entries.map((e) => ({ userId: e.userId, rp: e.rp })));
  const joined = new Map(entries.map((e) => [e.userId, e.joinedAt.getTime()]));
  const waited = (id: string) => Math.max(0, Math.round((now.getTime() - (joined.get(id) ?? now.getTime())) / 1000));
  await tx.queueEntry.deleteMany({ where: { id: { in: entries.map((e) => e.id) } } });
  await tx.queueLobby.create({
    data: {
      state: "READY", readyDeadline: new Date(now.getTime() + READY_SECONDS * 1000), mapPool: [...ACTIVE_DUTY],
      captain1Id: captainOf(team1), captain2Id: captainOf(team2),
      players: { create: [...team1.map((s) => ({ ...s, team: "team1", waitedSec: waited(s.userId) })), ...team2.map((s) => ({ ...s, team: "team2", waitedSec: waited(s.userId) }))] },
    },
  });
}

/**
 * Advances every lobby by the clock: ready-check expiry, veto auto-bans, live-match polling, then queue pop.
 * Called from each queue poll (no cron needed). Returns lobbies that must be launched outside the lock.
 */
export async function tick(now = new Date()): Promise<string[]> {
  const toLaunch = await locked(async (tx) => {
    const launch: string[] = [];
    const lobbies = await tx.queueLobby.findMany({ where: { state: { in: ["READY", "VETO", "LAUNCHING"] } }, include: { players: true } });
    for (const l of lobbies) {
      if (l.state === "READY") {
        const out = readyOutcome(l.players, !!l.readyDeadline && l.readyDeadline <= now);
        if (out.kind === "cancel") {
          await tx.queueLobby.update({ where: { id: l.id }, data: { state: "CANCELLED", error: "ready-check", endedAt: now } });
          if (!l.isTest) {
            await requeue(tx, out.requeue);
            for (const userId of out.removed) await penalize(tx, userId, "COOLDOWN", now);
          }
        } else if (out.kind === "go") {
          await tx.queueLobby.update({ where: { id: l.id }, data: { state: "VETO", vetoTurn: "team1", vetoDeadline: new Date(now.getTime() + VETO_TURN_SECONDS * 1000) } });
        }
      } else if (l.state === "VETO" && l.vetoDeadline && l.vetoDeadline <= now) {
        const map = autoBanMap(l.mapPool, bansOf(l.bans));
        if (map) await recordBan(tx, l.id, l.mapPool, bansOf(l.bans), "auto", map, now);
        if (remainingMaps(l.mapPool, [...bansOf(l.bans), ...(map ? [{ map, by: "auto" as const }] : [])]).length <= 1) launch.push(l.id);
      } else if (l.state === "LAUNCHING" && !l.dathostMatchId && now.getTime() - l.updatedAt.getTime() > LAUNCH_STALE_MS) {
        await tx.queueLobby.update({ where: { id: l.id }, data: { state: "FAILED", error: "launch-timeout" } });
      }
    }
    await formLobby(tx, now);
    return launch;
  });
  for (const id of toLaunch) await launchLobby(id);
  await pollLive(now);
  await healthTick(now).catch(() => undefined);
  return toLaunch;
}

/** Escalating anti-dodge (COOLDOWN) or leaver (LEAVER) restriction. */
async function penalize(tx: Tx, userId: string, kind: "COOLDOWN" | "LEAVER", now: Date) {
  const windowMs = kind === "COOLDOWN" ? 24 * 3600_000 : 7 * 24 * 3600_000;
  const prior = await tx.queueBan.count({ where: { userId, kind, createdAt: { gte: new Date(now.getTime() - windowMs) } } });
  const minutes = kind === "COOLDOWN" ? dodgeCooldownMinutes(prior) : leaverCooldownMinutes(prior);
  await tx.queueBan.create({ data: { userId, kind, reason: kind === "COOLDOWN" ? "ready-check" : "left-match", until: new Date(now.getTime() + minutes * 60_000) } });
  await tx.queueEntry.deleteMany({ where: { userId } });
}

export async function activeRestriction(userId: string, now = new Date()) {
  return getPrisma().queueBan.findFirst({
    where: { userId, revokedAt: null, OR: [{ until: null }, { until: { gt: now } }] },
    orderBy: [{ until: { sort: "desc", nulls: "first" } }],
    select: { id: true, kind: true, reason: true, until: true },
  });
}

async function recordBan(tx: Tx, lobbyId: string, pool: string[], bans: Ban[], side: Side | "auto", map: string, now: Date) {
  const r = applyBan(pool, bans, side === "auto" ? (vetoTurn(pool, bans) ?? "auto") : side, map);
  if (!r.ok) return r;
  const turn = vetoTurn(pool, r.bans);
  const saved = side === "auto" ? r.bans.map((b, i) => (i === r.bans.length - 1 ? { ...b, by: "auto" as const } : b)) : r.bans;
  await tx.queueLobby.update({
    where: { id: lobbyId },
    data: r.decided
      ? { bans: saved, map: r.decided, vetoTurn: null, vetoDeadline: null, state: "LAUNCHING" }
      : { bans: saved, vetoTurn: turn, vetoDeadline: new Date(now.getTime() + VETO_TURN_SECONDS * 1000) },
  });
  return r;
}

export async function joinQueue(userId: string) {
  const prisma = getPrisma();
  // R52: in a party of 2+, only the leader queues, and the whole party goes in together.
  const membership = await prisma.partyMember.findUnique({ where: { userId }, select: { party: { select: { id: true, leaderId: true, members: { select: { userId: true } } } } } });
  const party = membership && membership.party.members.length > 1 ? membership.party : null;
  if (party && party.leaderId !== userId) return { ok: false as const, error: "party-leader-only" };
  const ids = party ? party.members.map((m) => m.userId) : [userId];
  // R60: refresh cached trust before taking the queue lock (bounded, best effort, never blocks joining).
  await Promise.all(ids.map((id) => refreshTrust(id).catch(() => null)));
  for (const id of ids) {
    const ac = await anticheatBlock(id);
    if (ac) return { ok: false as const, error: id === userId ? ac : "party-member-blocked" };
  }
  return locked(async (tx) => {
    for (const id of ids) {
      const user = await tx.user.findUnique({ where: { id }, select: { id: true, steamId: true, accountStatus: true, competitiveRating: true } });
      const mine = id === userId;
      if (!user?.steamId) return { ok: false as const, error: mine ? "steam-required" : "party-member-blocked" };
      if (user.accountStatus !== "ACTIVE") return { ok: false as const, error: mine ? "not-eligible" : "party-member-blocked" };
      const restricted = await tx.queueBan.findFirst({ where: { userId: id, revokedAt: null, OR: [{ until: null }, { until: { gt: new Date() } }] } });
      if (restricted) return { ok: false as const, error: !mine ? "party-member-blocked" : restricted.kind === "BAN" ? "banned" : "cooldown" };
      const seated = await tx.queueLobbyPlayer.count({ where: { userId: id, declined: false, lobby: { state: { in: [...ACTIVE_STATES] } } } });
      if (seated) return { ok: false as const, error: mine ? "in-match" : "party-member-blocked" };
    }
    const users = await tx.user.findMany({ where: { id: { in: ids } }, select: { id: true, competitiveRating: true } });
    const now = new Date();
    for (const u of users) {
      await tx.queueEntry.upsert({ where: { userId: u.id }, create: { userId: u.id, rp: u.competitiveRating, partyId: party?.id ?? null, joinedAt: now }, update: { partyId: party?.id ?? null } });
    }
    await formLobby(tx, now);
    return { ok: true as const };
  });
}

export async function leaveQueue(userId: string) {
  const prisma = getPrisma();
  const mine = await prisma.queueEntry.findUnique({ where: { userId }, select: { partyId: true } });
  // R52: a party leaves the queue together.
  await prisma.queueEntry.deleteMany({ where: mine?.partyId ? { partyId: mine.partyId } : { userId } });
  return { ok: true as const };
}

export async function answerReady(userId: string, accept: boolean) {
  const ac = accept ? await anticheatBlock(userId) : null;
  if (ac) return { ok: false as const, error: ac };
  const res = await locked(async (tx) => {
    const seat = await tx.queueLobbyPlayer.findFirst({ where: { userId, lobby: { state: "READY" } } });
    if (!seat) return { ok: false as const, error: "no-ready-check" };
    await tx.queueLobbyPlayer.update({ where: { id: seat.id }, data: accept ? { accepted: true } : { declined: true, accepted: false } });
    return { ok: true as const };
  });
  await tick();
  return res;
}

/** Captain ban. In a test lobby where the owner captains both sides, they may ban for either turn. */
export async function banMap(userId: string, map: string) {
  let launch: string | null = null;
  const res = await locked(async (tx) => {
    const lobby = await tx.queueLobby.findFirst({ where: { state: "VETO", OR: [{ captain1Id: userId }, { captain2Id: userId }] } });
    if (!lobby) return { ok: false as const, error: "not-captain" };
    const bans = bansOf(lobby.bans);
    const turn = vetoTurn(lobby.mapPool, bans);
    const mySide: Side | null = turn === "team1" && lobby.captain1Id === userId ? "team1" : turn === "team2" && lobby.captain2Id === userId ? "team2" : null;
    if (!mySide) return { ok: false as const, error: "not-your-turn" };
    const r = await recordBan(tx, lobby.id, lobby.mapPool, bans, mySide, map, new Date());
    if (!r.ok) return { ok: false as const, error: r.error };
    if (r.decided) launch = lobby.id;
    return { ok: true as const };
  });
  if (launch) await launchLobby(launch);
  return res;
}

/** Creates the DatHost CS2 match. Only one caller wins the LAUNCHING -> creating claim. */
export async function launchLobby(lobbyId: string) {
  const prisma = getPrisma();
  const claim = await prisma.queueLobby.updateMany({ where: { id: lobbyId, state: "LAUNCHING", dathostMatchId: null, error: "" }, data: { error: "creating" } });
  if (!claim.count) return;
  const lobby = await prisma.queueLobby.findUnique({ where: { id: lobbyId }, include: { players: { include: { user: { select: { steamId: true } } } } } });
  const fail = (error: string) => prisma.queueLobby.update({ where: { id: lobbyId }, data: { state: "FAILED", error: error.slice(0, 300) } });
  if (!lobby?.map || !isAceMap(lobby.map)) return void (await fail("no-map"));
  const cfg = readDathostConfig();
  const secret = process.env.DATHOST_WEBHOOK_SECRET?.trim();
  if (!cfg || !secret) return void (await fail("dathost-not-configured"));
  const seats = lobby.players.filter((p) => p.accepted || lobby.isTest);
  const ids = (side: string) => seats.filter((p) => p.team === side).map((p) => p.user.steamId).filter((s): s is string => !!s);
  try {
    const api = dathost(cfg);
    const base = getAppBaseUrl();
    // Demo recording: DatHost only writes a .dem for the match when GOTV is on. Turn it on (persistent) if needed.
    const pre = await api.getRaw().catch(() => null);
    const fix = pre ? gotvFix(pre.cs2_settings) : null;
    if (fix) await api.update(fix).catch(() => undefined);
    // R50: fresh random server password for every match, persisted in DatHost and applied live before the match is created.
    const serverPassword = randomServerPassword();
    await api.update({ "cs2_settings.password": serverPassword });
    await api.console(`sv_password "${serverPassword}"`).catch(() => undefined);
    const match = await api.createMatch({
      team1: { name: "A.C.E Alpha", steamIds: ids("team1") },
      team2: { name: "A.C.E Bravo", steamIds: ids("team2") },
      map: lobby.map,
      matchEndUrl: `${base}/api/dathost/match-webhook`,
      roundEndUrl: `${base}/api/dathost/match-webhook`,
      webhookAuthorization: `Bearer ${secret}`,
      ...(lobby.isTest ? {} : { teamSize: 5 }),
      password: serverPassword,
    });
    // R58: bind AceBridge round stats to this DatHost match (the site maps it to the A.C.E match via externalId). Harmless if the plugin is not installed.
    if (/^[A-Za-z0-9_-]{1,80}$/.test(match.id)) await api.console(`ace_match_id ${match.id}`).catch(() => undefined);
    const target = await connectTarget(api);
    const connectUrl = target?.connectUrl ?? null;
    const server = target ? { address: target.address } : null;
    const created = await prisma.match.create({
      data: {
        externalId: match.id, gameServerId: cfg.serverId, round: 0, slot: 0, state: "IN_PROGRESS", mapName: lobby.map,
        teamAId: "team1", teamBId: "team2", source: lobby.isTest ? "dathost-test" : "dathost", startedAt: new Date(),
        players: { create: seats.map((p) => ({ userId: p.userId, teamId: p.team })) },
      },
      select: { id: true },
    });
    await prisma.queueLobby.update({
      where: { id: lobbyId },
      data: { state: "LIVE", error: "", dathostMatchId: match.id, matchId: created.id, connectUrl, serverAddress: server?.address ?? null, serverPassword, checkedAt: new Date() },
    });
    await setupMatchDiscord(lobbyId).catch(() => undefined);
  } catch (e) {
    await fail(e instanceof DathostError ? e.message : "dathost-create-failed");
  }
}

/** Mirrors score/rounds from a DatHost match payload onto its lobby (round webhook + polling). */
export async function mirrorLiveScore(m: Cs2Match) {
  await getPrisma().queueLobby.updateMany({
    where: { dathostMatchId: m.id, state: "LIVE" },
    data: { scoreA: m.team1?.stats?.score ?? null, scoreB: m.team2?.stats?.score ?? null, roundsPlayed: m.rounds_played ?? null },
  });
}

/** Leavers: rostered players DatHost reports as disconnected during the live phase. */
async function penalizeLeavers(lobbyId: string, m: Cs2Match, now: Date) {
  const left = new Set((m.players ?? []).filter((p) => p.team !== "spectator" && p.disconnected_at).map((p) => p.steam_id_64));
  if (!left.size) return;
  const seats = await getPrisma().queueLobbyPlayer.findMany({ where: { lobbyId, replaced: false }, include: { user: { select: { steamId: true } } } });
  await getPrisma().$transaction(async (tx) => {
    for (const s of seats) if (s.user.steamId && left.has(s.user.steamId)) await penalize(tx, s.userId, "LEAVER", now);
  });
}

let watchCache: { at: number; url: string | null } | null = null;
/** GOTV spectator link for live lobbies, cached 60 s so lobby polls don't hit DatHost every time. */
async function watchUrl(): Promise<string | null> {
  if (watchCache && Date.now() - watchCache.at < 60_000) return watchCache.url;
  const cfg = readDathostConfig();
  const url = cfg ? await resolvedGotv(await dathost(cfg).getRaw().catch(() => null)).catch(() => null) : null;
  watchCache = { at: Date.now(), url };
  return url;
}

/** steam://run/730 connect target (address + password if set). One retry so players get auto-launched right after the veto. */
async function connectTarget(api: ReturnType<typeof dathost>) {
  for (let i = 0; i < 2; i++) {
    const raw = await api.getRaw().catch(() => null);
    if (raw?.ip && raw.ports?.game) return resolvedConnect(raw.ip, raw.ports.game, raw.cs2_settings?.password);
  }
  return null;
}

/** LIVE lobbies: polled every 15 s for live score; done when finished (webhook or poll), cancelled when DatHost cancels. */
async function pollLive(now: Date) {
  const prisma = getPrisma();
  const live = await prisma.queueLobby.findMany({ where: { state: "LIVE" } });
  for (const l of live) {
    if (l.checkedAt && now.getTime() - l.checkedAt.getTime() < LIVE_POLL_MS) continue;
    const claim = await prisma.queueLobby.updateMany({ where: { id: l.id, checkedAt: l.checkedAt }, data: { checkedAt: now } });
    if (!claim.count || !l.dathostMatchId) continue;
    const cfg = readDathostConfig();
    // Backfill: if the server address was unavailable at launch, fill it so seated players still auto-launch.
    if (!l.connectUrl && cfg) {
      const target = await connectTarget(dathost(cfg));
      if (target) await prisma.queueLobby.update({ where: { id: l.id }, data: { connectUrl: target.connectUrl, serverAddress: target.address } });
    }
    const dm = cfg ? await dathost(cfg).getMatch(l.dathostMatchId).catch(() => null) : null;
    const m = l.matchId ? await prisma.match.findUnique({ where: { id: l.matchId }, select: { state: true } }) : null;
    if (dm) await mirrorLiveScore(dm);
    if (dm?.cancel_reason) {
      await prisma.queueLobby.update({ where: { id: l.id }, data: { state: "CANCELLED", error: `dathost:${dm.cancel_reason}`.slice(0, 300), endedAt: now } });
      if (l.matchId) await prisma.match.updateMany({ where: { id: l.matchId, state: "IN_PROGRESS" }, data: { state: "CANCELLED", endedAt: now } });
      if (!l.isTest) await penalizeLeavers(l.id, dm, now);
      await cleanupMatchDiscord(l.id).catch(() => undefined);
    } else if (dm?.finished || m?.state === "COMPLETED") {
      await prisma.queueLobby.update({ where: { id: l.id }, data: { state: "DONE", endedAt: now, ...(dm ? { scoreA: dm.team1?.stats?.score ?? null, scoreB: dm.team2?.stats?.score ?? null } : {}) } });
      if (dm && !l.isTest) await penalizeLeavers(l.id, dm, now);
      await cleanupMatchDiscord(l.id).catch(() => undefined);
    }
  }
}

/* ---------- read model ---------- */

export type LobbySeatView = { userId: string; name: string; avatarUrl: string | null; rp: number; level: number; art: RankArt; team: Side; accepted: boolean; captain: boolean; me: boolean };
export type LobbyView = {
  id: string; state: string; isTest: boolean; readyDeadline: string | null; vetoDeadline: string | null; vetoTurn: Side | null;
  myTurn: boolean; pool: string[]; bans: Ban[]; map: string | null; connectUrl: string | null; address: string | null;
  /** R50: only for this match's own players while LIVE. */
  password: string | null; steamUrl: string | null; consoleLine: string | null; voiceUrl: string | null; watchUrl: string | null; error: string;
  players: LobbySeatView[]; acceptedCount: number;
  scoreA: number | null; scoreB: number | null; rounds: number | null; avg1: number; avg2: number; winChance1: number; region: string;
  result: { won: boolean | null; rpBefore: number | null; rpAfter: number | null; kills: number | null; deaths: number | null; assists: number | null; damage: number | null; mvps: number | null; hs: number | null } | null;
};
export type QueueView = {
  queued: number; needed: number; inQueue: boolean; joinedAt: string | null; lobby: LobbyView | null; serverBusy: boolean; now: string;
  estimateSec: number | null; region: string; restriction: { kind: string; until: string | null; reason: string } | null;
};

async function recentWaitEstimate() {
  const rows = await getPrisma().queueLobbyPlayer.findMany({ where: { waitedSec: { not: null }, lobby: { isTest: false } }, orderBy: { lobby: { createdAt: "desc" } }, take: 50, select: { waitedSec: true } });
  return estimateWaitSeconds(rows.map((r) => r.waitedSec ?? -1));
}

/** Server location id (e.g. "milan") cached for display. */
let regionCache: { at: number; v: string } | null = null;
async function serverRegion() {
  if (regionCache && Date.now() - regionCache.at < 10 * 60_000) return regionCache.v;
  const cfg = readDathostConfig();
  const v = cfg ? await dathost(cfg).getServer().then((s) => s.location).catch(() => "") : "";
  regionCache = { at: Date.now(), v };
  return v;
}

const SHOW_RECENT_MS = 10 * 60_000;

export async function readQueueView(userId: string | null): Promise<QueueView> {
  const prisma = getPrisma();
  const now = new Date();
  const [queued, mine, busy, estimateSec, region, restriction] = await Promise.all([
    prisma.queueEntry.count(),
    userId ? prisma.queueEntry.findUnique({ where: { userId } }) : null,
    prisma.queueLobby.count({ where: { state: { in: [...ACTIVE_STATES] } } }),
    recentWaitEstimate().catch(() => null),
    serverRegion(),
    userId ? activeRestriction(userId, now) : null,
  ]);
  const seat = userId
    ? await prisma.queueLobbyPlayer.findFirst({
        where: { userId, OR: [{ lobby: { state: { in: [...ACTIVE_STATES] } } }, { lobby: { updatedAt: { gte: new Date(now.getTime() - SHOW_RECENT_MS) } } }] },
        orderBy: { lobby: { createdAt: "desc" } },
        select: { lobbyId: true },
      })
    : null;
  const lobby = seat ? await lobbyView(seat.lobbyId, userId) : null;
  if (lobby) lobby.region = region;
  return {
    queued, needed: QUEUE_SIZE, inQueue: !!mine, joinedAt: mine?.joinedAt.toISOString() ?? null, lobby, serverBusy: busy > 0, now: now.toISOString(),
    estimateSec, region, restriction: restriction ? { kind: restriction.kind, until: restriction.until?.toISOString() ?? null, reason: restriction.reason } : null,
  };
}

export async function lobbyView(lobbyId: string, userId: string | null): Promise<LobbyView | null> {
  const l = await getPrisma().queueLobby.findUnique({
    where: { id: lobbyId },
    include: { players: { include: { user: { select: { id: true, displayName: true, avatarUrl: true, competitiveRating: true, subscriptionTier: true, rankArt: true } } } } },
  });
  if (!l) return null;
  const turn = (l.vetoTurn as Side | null) ?? null;
  const players: LobbySeatView[] = l.players
    .map((p) => ({
      userId: p.userId, name: p.user.displayName, avatarUrl: p.user.avatarUrl || null, rp: p.user.competitiveRating,
      level: rankFromRating(p.user.competitiveRating).level, art: effectiveRankArt(p.user), team: p.team as Side,
      accepted: p.accepted, captain: p.userId === (p.team === "team1" ? l.captain1Id : l.captain2Id), me: p.userId === userId,
    }))
    .sort((a, b) => b.rp - a.rp);
  const avgOf = (side: Side) => {
    const xs = l.players.filter((p) => p.team === side && !p.replaced).map((p) => p.rp);
    return xs.length ? Math.round(xs.reduce((a, b) => a + b, 0) / xs.length) : 0;
  };
  const myTurn = l.state === "VETO" && !!userId && ((turn === "team1" && l.captain1Id === userId) || (turn === "team2" && l.captain2Id === userId));
  const showConnect = l.state === "LIVE" && players.some((p) => p.me);
  const mySide = l.players.find((p) => p.userId === userId)?.team as Side | undefined;
  const cd = showConnect && l.serverAddress && l.serverPassword ? connectDetails(l.serverAddress, l.serverPassword) : null;
  const voiceUrl = showConnect && mySide ? readLobbyDiscord(l.discord)[mySide]?.invite ?? null : null;
  return {
    id: l.id, state: l.state, isTest: l.isTest, readyDeadline: l.readyDeadline?.toISOString() ?? null, vetoDeadline: l.vetoDeadline?.toISOString() ?? null,
    vetoTurn: turn, myTurn, pool: l.mapPool, bans: bansOf(l.bans), map: l.map, connectUrl: showConnect ? normalizeConnectUrl(l.connectUrl) : null, watchUrl: l.state === "LIVE" ? await watchUrl() : null, address: showConnect ? l.serverAddress : null,
    password: cd ? l.serverPassword : null, steamUrl: cd?.steamUrl ?? null, consoleLine: cd?.console ?? null, voiceUrl,
    error: l.error === "creating" ? "" : l.error, players, acceptedCount: l.players.filter((p) => p.accepted).length,
    scoreA: l.scoreA, scoreB: l.scoreB, rounds: l.roundsPlayed, avg1: avgOf("team1"), avg2: avgOf("team2"), winChance1: winProbability(avgOf("team1"), avgOf("team2")),
    region: "", result: l.state === "DONE" && userId ? await resultFor(l.matchId, userId, l.players.find((p) => p.userId === userId)?.team ?? null, l.scoreA, l.scoreB) : null,
  };
}

async function resultFor(matchId: string | null, userId: string, team: string | null, a: number | null, b: number | null): Promise<LobbyView["result"]> {
  if (!matchId) return null;
  const prisma = getPrisma();
  const [line, rh] = await Promise.all([
    prisma.matchPlayer.findUnique({ where: { matchId_userId: { matchId, userId } } }),
    prisma.ratingHistory.findFirst({ where: { matchId, userId }, orderBy: { createdAt: "desc" } }),
  ]);
  const won = a == null || b == null || a === b || !team ? null : team === "team1" ? a > b : b > a;
  return {
    won, rpBefore: rh?.ratingBefore ?? null, rpAfter: rh?.ratingAfter ?? null,
    kills: line?.kills ?? null, deaths: line?.deaths ?? null, assists: line?.assists ?? null, damage: line?.damage ?? null, mvps: line?.mvps ?? null, hs: line?.headshotKills ?? null,
  };
}

/* ---------- owner test mode ---------- */

/**
 * Owner-only test lobby: the owner plus optional registered players (by SteamID64), on fewer than 10 seats.
 * flow "full" runs the ready check and veto; "direct" launches on the chosen map at once.
 */
export async function createTestLobby(ownerUserId: string, opts: { flow: "full" | "direct"; map: string; extraSteamIds: string[] }) {
  const prisma = getPrisma();
  const busy = await prisma.queueLobby.count({ where: { state: { in: [...ACTIVE_STATES] } } });
  if (busy) return { ok: false as const, error: "A lobby already holds the server. Cancel it first." };
  const extras = opts.extraSteamIds.length
    ? await prisma.user.findMany({ where: { steamId: { in: opts.extraSteamIds.slice(0, 9) }, accountStatus: "ACTIVE", id: { not: ownerUserId } }, select: { id: true, competitiveRating: true } })
    : [];
  const owner = await prisma.user.findUnique({ where: { id: ownerUserId }, select: { id: true, competitiveRating: true, steamId: true } });
  if (!owner?.steamId) return { ok: false as const, error: "Owner has no linked Steam account." };
  if (opts.flow === "direct" && !isAceMap(opts.map)) return { ok: false as const, error: "Pick a map from the pool." };
  const seats = [{ userId: owner.id, rp: owner.competitiveRating }, ...extras.map((u) => ({ userId: u.id, rp: u.competitiveRating }))];
  const { team1, team2 } = seats.length > 1 ? balanceTeams(seats) : { team1: seats, team2: [] };
  const ownerSide = team1.some((s) => s.userId === owner.id) ? "team1" : "team2";
  const c1 = captainOf(team1);
  const c2 = captainOf(team2);
  const now = new Date();
  const lobby = await prisma.queueLobby.create({
    data: {
      isTest: true, mapPool: [...ACTIVE_DUTY],
      // Lone owner captains both sides so the veto can be exercised.
      captain1Id: ownerSide === "team1" ? owner.id : c1 ?? owner.id, captain2Id: ownerSide === "team2" ? owner.id : c2 ?? owner.id,
      ...(opts.flow === "direct"
        ? { state: "LAUNCHING", map: opts.map }
        : { state: "READY", readyDeadline: new Date(now.getTime() + READY_SECONDS * 1000) }),
      players: { create: [...team1.map((s) => ({ ...s, team: "team1", accepted: opts.flow === "direct" })), ...team2.map((s) => ({ ...s, team: "team2", accepted: opts.flow === "direct" }))] },
    },
  });
  await prisma.queueEntry.deleteMany({ where: { userId: { in: seats.map((s) => s.userId) } } });
  if (opts.flow === "direct") await launchLobby(lobby.id);
  return { ok: true as const, lobbyId: lobby.id };
}

/** Owner fills empty slots with server bots after a test match is created (best effort; DatHost may kick bots in match mode). */
export async function addTestBots(count: number) {
  const cfg = readDathostConfig();
  if (!cfg) return { ok: false as const, error: "DatHost is not configured." };
  const n = Math.max(0, Math.min(9, Math.round(count)));
  try {
    await dathost(cfg).console(`bot_quota_mode fill; bot_quota ${n + 1}`);
    return { ok: true as const };
  } catch (e) {
    return { ok: false as const, error: e instanceof DathostError ? e.message : "DatHost request failed." };
  }
}

/** Owner cancel for a stuck lobby: marks it cancelled (does not touch the DatHost match or delete rows). */
export async function cancelLobby(lobbyId: string) {
  await getPrisma().queueLobby.updateMany({ where: { id: lobbyId, state: { in: [...ACTIVE_STATES] } }, data: { state: "CANCELLED", error: "owner-cancel" } });
  await cleanupMatchDiscord(lobbyId).catch(() => undefined);
  return { ok: true as const };
}

export async function activeLobbies(viewerId: string | null = null) {
  const rows = await getPrisma().queueLobby.findMany({ where: { OR: [{ state: { in: [...ACTIVE_STATES] } }, { isTest: true }] }, orderBy: { createdAt: "desc" }, take: 5, select: { id: true } });
  return (await Promise.all(rows.map((r) => lobbyView(r.id, viewerId)))).filter((x): x is LobbyView => !!x);
}
