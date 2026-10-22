/** R48 ranked 5v5 queue: pure rules (no I/O) so they are unit-tested. */
export const QUEUE_SIZE = 10;
export const TEAM_SIZE = 5;
export const READY_SECONDS = 20;
export const VETO_TURN_SECONDS = 20;
/** CS2 Active Duty pool (same seven maps the DatHost client accepts). */
export const ACTIVE_DUTY = ["de_dust2", "de_mirage", "de_inferno", "de_nuke", "de_ancient", "de_anubis", "de_train"] as const;

export type Side = "team1" | "team2";
export type Seat = { userId: string; rp: number };
export type Ban = { map: string; by: Side | "auto" };

const sum = (xs: Seat[]) => xs.reduce((a, s) => a + s.rp, 0);

/**
 * Snake draft by RP (A B B A A B B A A B), then greedy 1-for-1 swaps while they shrink the RP gap.
 * Deterministic: ties keep queue order.
 */
export function balanceTeams(seats: Seat[]): { team1: Seat[]; team2: Seat[]; gap: number } {
  const sorted = seats.map((s, i) => ({ s, i })).sort((a, b) => b.s.rp - a.s.rp || a.i - b.i).map((x) => x.s);
  const t1: Seat[] = [];
  const t2: Seat[] = [];
  sorted.forEach((s, i) => ((i % 4 === 0 || i % 4 === 3) ? t1 : t2).push(s));
  for (let guard = 0; guard < 50; guard++) {
    const gap = Math.abs(sum(t1) - sum(t2));
    let best: [number, number, number] | null = null;
    for (let a = 0; a < t1.length; a++) {
      for (let b = 0; b < t2.length; b++) {
        const d = t1[a].rp - t2[b].rp;
        const next = Math.abs(sum(t1) - 2 * d - sum(t2));
        if (next < gap && (!best || next < best[2])) best = [a, b, next];
      }
    }
    if (!best) break;
    const [a, b] = best;
    [t1[a], t2[b]] = [t2[b], t1[a]];
  }
  return { team1: t1, team2: t2, gap: Math.abs(sum(t1) - sum(t2)) };
}

/** Captain = highest RP on the side (first in queue order on ties). */
export function captainOf(team: Seat[]): string | null {
  return team.reduce<Seat | null>((best, s) => (!best || s.rp > best.rp ? s : best), null)?.userId ?? null;
}

/** Bans alternate team1, team2, ... until one map is left. */
export function vetoTurn(pool: readonly string[], bans: Ban[]): Side | null {
  if (pool.length - bans.length <= 1) return null;
  return bans.length % 2 === 0 ? "team1" : "team2";
}

export function remainingMaps(pool: readonly string[], bans: Ban[]): string[] {
  const banned = new Set(bans.map((b) => b.map));
  return pool.filter((m) => !banned.has(m));
}

export type BanCheck = { ok: true; bans: Ban[]; decided: string | null } | { ok: false; error: "not-your-turn" | "not-in-pool" | "veto-over" };

export function applyBan(pool: readonly string[], bans: Ban[], side: Side | "auto", map: string): BanCheck {
  const turn = vetoTurn(pool, bans);
  if (!turn) return { ok: false, error: "veto-over" };
  if (side !== "auto" && side !== turn) return { ok: false, error: "not-your-turn" };
  if (!remainingMaps(pool, bans).includes(map)) return { ok: false, error: "not-in-pool" };
  const next = [...bans, { map, by: side }];
  const left = remainingMaps(pool, next);
  return { ok: true, bans: next, decided: left.length === 1 ? left[0] : null };
}

/** Timed-out captain: the auto ban removes the last remaining map in pool order (predictable, never random). */
export function autoBanMap(pool: readonly string[], bans: Ban[]): string | null {
  const left = remainingMaps(pool, bans);
  return left.length > 1 ? left[left.length - 1] : null;
}

/** Ready check outcome once the deadline passed or everyone answered. */
export function readyOutcome(players: { userId: string; accepted: boolean; declined: boolean }[], expired: boolean) {
  const declined = players.filter((p) => p.declined || (expired && !p.accepted)).map((p) => p.userId);
  if (declined.length) return { kind: "cancel" as const, removed: declined, requeue: players.filter((p) => !declined.includes(p.userId)).map((p) => p.userId) };
  if (players.every((p) => p.accepted)) return { kind: "go" as const };
  return { kind: "wait" as const };
}

export const mapLabel = (m: string) => (m === "de_dust2" ? "Dust II" : m.replace(/^de_/, "").replace(/^\w/, (c) => c.toUpperCase()));
