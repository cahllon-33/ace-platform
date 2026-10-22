import { Prisma } from "@prisma/client";
import { getPrisma } from "@/server/db";
import { dathost, DathostError, isAceMap, readDathostConfig } from "@/server/dathost";
import { getAppBaseUrl } from "@/server/env";
import { effectiveRankArt } from "@/server/rank-art";
import { rankFromRating, type RankArt } from "@/lib/ranks";
import {
  ACTIVE_DUTY, QUEUE_SIZE, READY_SECONDS, VETO_TURN_SECONDS,
  applyBan, autoBanMap, balanceTeams, captainOf, readyOutcome, remainingMaps, vetoTurn, type Ban, type Side,
} from "@/lib/queue";

/** States that hold the (single) DatHost server. */
export const ACTIVE_STATES = ["READY", "VETO", "LAUNCHING", "LIVE"] as const;
const LIVE_POLL_MS = 30_000;
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
  const entries = await tx.queueEntry.findMany({ orderBy: { joinedAt: "asc" }, take: QUEUE_SIZE });
  if (entries.length < QUEUE_SIZE) return;
  const { team1, team2 } = balanceTeams(entries.map((e) => ({ userId: e.userId, rp: e.rp })));
  await tx.queueEntry.deleteMany({ where: { id: { in: entries.map((e) => e.id) } } });
  await tx.queueLobby.create({
    data: {
      state: "READY", readyDeadline: new Date(now.getTime() + READY_SECONDS * 1000), mapPool: [...ACTIVE_DUTY],
      captain1Id: captainOf(team1), captain2Id: captainOf(team2),
      players: { create: [...team1.map((s) => ({ ...s, team: "team1" })), ...team2.map((s) => ({ ...s, team: "team2" }))] },
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
          await tx.queueLobby.update({ where: { id: l.id }, data: { state: "CANCELLED", error: "ready-check" } });
          if (!l.isTest) await requeue(tx, out.requeue);
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
  return toLaunch;
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
  return locked(async (tx) => {
    const user = await tx.user.findUnique({ where: { id: userId }, select: { id: true, steamId: true, accountStatus: true, competitiveRating: true } });
    if (!user?.steamId) return { ok: false as const, error: "steam-required" };
    if (user.accountStatus !== "ACTIVE") return { ok: false as const, error: "not-eligible" };
    const seated = await tx.queueLobbyPlayer.count({ where: { userId, declined: false, lobby: { state: { in: [...ACTIVE_STATES] } } } });
    if (seated) return { ok: false as const, error: "in-match" };
    await tx.queueEntry.upsert({ where: { userId }, create: { userId, rp: user.competitiveRating }, update: {} });
    await formLobby(tx, new Date());
    return { ok: true as const };
  });
}

export async function leaveQueue(userId: string) {
  await getPrisma().queueEntry.deleteMany({ where: { userId } });
  return { ok: true as const };
}

export async function answerReady(userId: string, accept: boolean) {
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
    const match = await api.createMatch({
      team1: { name: "A.C.E Alpha", steamIds: ids("team1") },
      team2: { name: "A.C.E Bravo", steamIds: ids("team2") },
      map: lobby.map,
      matchEndUrl: `${base}/api/dathost/match-webhook`,
      webhookAuthorization: `Bearer ${secret}`,
    });
    const server = await api.getServer().catch(() => null);
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
      data: { state: "LIVE", error: "", dathostMatchId: match.id, matchId: created.id, connectUrl: server?.connectUrl ?? null, serverAddress: server?.address ?? null, checkedAt: new Date() },
    });
  } catch (e) {
    await fail(e instanceof DathostError ? e.message : "dathost-create-failed");
  }
}

/** LIVE lobbies: done when the webhook completed the Match, or DatHost reports finished/cancelled (polled at most every 30 s). */
async function pollLive(now: Date) {
  const prisma = getPrisma();
  const live = await prisma.queueLobby.findMany({ where: { state: "LIVE" } });
  for (const l of live) {
    const m = l.matchId ? await prisma.match.findUnique({ where: { id: l.matchId }, select: { state: true } }) : null;
    if (m?.state === "COMPLETED") { await prisma.queueLobby.update({ where: { id: l.id }, data: { state: "DONE" } }); continue; }
    if (l.checkedAt && now.getTime() - l.checkedAt.getTime() < LIVE_POLL_MS) continue;
    const claim = await prisma.queueLobby.updateMany({ where: { id: l.id, checkedAt: l.checkedAt }, data: { checkedAt: now } });
    if (!claim.count || !l.dathostMatchId) continue;
    const cfg = readDathostConfig();
    if (!cfg) continue;
    const dm = await dathost(cfg).getMatch(l.dathostMatchId).catch(() => null);
    if (dm?.cancel_reason) {
      await prisma.queueLobby.update({ where: { id: l.id }, data: { state: "CANCELLED", error: `dathost:${dm.cancel_reason}`.slice(0, 300) } });
      if (l.matchId) await prisma.match.updateMany({ where: { id: l.matchId, state: "IN_PROGRESS" }, data: { state: "CANCELLED", endedAt: now } });
    } else if (dm?.finished) {
      await prisma.queueLobby.update({ where: { id: l.id }, data: { state: "DONE" } });
    }
  }
}

/* ---------- read model ---------- */

export type LobbySeatView = { userId: string; name: string; avatarUrl: string | null; rp: number; level: number; art: RankArt; team: Side; accepted: boolean; captain: boolean; me: boolean };
export type LobbyView = {
  id: string; state: string; isTest: boolean; readyDeadline: string | null; vetoDeadline: string | null; vetoTurn: Side | null;
  myTurn: boolean; pool: string[]; bans: Ban[]; map: string | null; connectUrl: string | null; address: string | null; error: string;
  players: LobbySeatView[]; acceptedCount: number;
};
export type QueueView = { queued: number; needed: number; inQueue: boolean; joinedAt: string | null; lobby: LobbyView | null; serverBusy: boolean; now: string };

const SHOW_RECENT_MS = 10 * 60_000;

export async function readQueueView(userId: string | null): Promise<QueueView> {
  const prisma = getPrisma();
  const now = new Date();
  const [queued, mine, busy] = await Promise.all([
    prisma.queueEntry.count(),
    userId ? prisma.queueEntry.findUnique({ where: { userId } }) : null,
    prisma.queueLobby.count({ where: { state: { in: [...ACTIVE_STATES] } } }),
  ]);
  const seat = userId
    ? await prisma.queueLobbyPlayer.findFirst({
        where: { userId, OR: [{ lobby: { state: { in: [...ACTIVE_STATES] } } }, { lobby: { updatedAt: { gte: new Date(now.getTime() - SHOW_RECENT_MS) } } }] },
        orderBy: { lobby: { createdAt: "desc" } },
        select: { lobbyId: true },
      })
    : null;
  const lobby = seat ? await lobbyView(seat.lobbyId, userId) : null;
  return { queued, needed: QUEUE_SIZE, inQueue: !!mine, joinedAt: mine?.joinedAt.toISOString() ?? null, lobby, serverBusy: busy > 0, now: now.toISOString() };
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
  const myTurn = l.state === "VETO" && !!userId && ((turn === "team1" && l.captain1Id === userId) || (turn === "team2" && l.captain2Id === userId));
  const showConnect = l.state === "LIVE" && players.some((p) => p.me);
  return {
    id: l.id, state: l.state, isTest: l.isTest, readyDeadline: l.readyDeadline?.toISOString() ?? null, vetoDeadline: l.vetoDeadline?.toISOString() ?? null,
    vetoTurn: turn, myTurn, pool: l.mapPool, bans: bansOf(l.bans), map: l.map, connectUrl: showConnect ? l.connectUrl : null, address: showConnect ? l.serverAddress : null,
    error: l.error === "creating" ? "" : l.error, players, acceptedCount: l.players.filter((p) => p.accepted).length,
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
  return { ok: true as const };
}

export async function activeLobbies() {
  const rows = await getPrisma().queueLobby.findMany({ where: { OR: [{ state: { in: [...ACTIVE_STATES] } }, { isTest: true }] }, orderBy: { createdAt: "desc" }, take: 5, select: { id: true } });
  return (await Promise.all(rows.map((r) => lobbyView(r.id, null)))).filter((x): x is LobbyView => !!x);
}
