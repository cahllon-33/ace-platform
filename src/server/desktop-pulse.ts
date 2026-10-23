/**
 * R55 public "pulse" for the A.C.E desktop app: what is happening on the platform right now.
 * Real rows only: live/ongoing queue lobbies (owner test lobbies excluded), the ranked queue size,
 * live presence and registered accounts. No passwords, connect links or server addresses are exposed.
 */
import { getPrisma } from "@/server/db";
import { rankFromRating } from "@/lib/ranks";
import { readPresence } from "@/server/presence";
import { ACTIVE_STATES } from "@/server/queue-engine";

export async function pulse() {
  const prisma = getPrisma();
  const [lobbies, queue, registered, presence, recent] = await Promise.all([
    prisma.queueLobby.findMany({
      where: { isTest: false, state: { in: [...ACTIVE_STATES] } },
      orderBy: { createdAt: "desc" }, take: 20,
      select: { id: true, state: true, map: true, scoreA: true, scoreB: true, roundsPlayed: true, createdAt: true,
        players: { where: { declined: false, replaced: false }, select: { team: true, rp: true, user: { select: { id: true, displayName: true, avatarUrl: true } } } } },
    }),
    prisma.queueEntry.count(),
    prisma.user.count({ where: { accountStatus: "ACTIVE" } }),
    readPresence().catch(() => ({ count: 0, unavailable: true })),
    prisma.queueLobby.findMany({
      where: { isTest: false, state: "DONE" }, orderBy: { endedAt: "desc" }, take: 5,
      select: { id: true, map: true, scoreA: true, scoreB: true, endedAt: true, matchId: true },
    }),
  ]);
  const side = (ps: (typeof lobbies)[number]["players"], t: string) => ps.filter((p) => p.team === t).map((p) => ({ id: p.user.id, name: p.user.displayName, avatarUrl: p.user.avatarUrl || null, level: rankFromRating(p.rp).level }));
  return {
    at: new Date().toISOString(),
    online: presence.unavailable ? null : presence.count,
    queue, registered,
    live: lobbies.map((l) => ({ id: l.id, state: l.state, map: l.map, scoreA: l.scoreA, scoreB: l.scoreB, rounds: l.roundsPlayed, since: l.createdAt, team1: side(l.players, "team1"), team2: side(l.players, "team2") })),
    recent: recent.map((r) => ({ id: r.matchId ?? r.id, map: r.map, scoreA: r.scoreA, scoreB: r.scoreB, endedAt: r.endedAt })),
  };
}
