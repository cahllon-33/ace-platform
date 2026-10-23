/**
 * R60 wallhack heuristic (pure): sustained crosshair tracking of OCCLUDED enemies over time.
 * Input: AceBridge 0.4.1 view samples. For each sample of a live player the plugin lists enemies
 * inside a 30° cone with: angular error from the crosshair (deg), whether the game considers that enemy
 * spotted by this player (the engine's own line-of-sight "spotted" mask), and the bearing (yaw) to the enemy.
 *
 * A "track" = the crosshair stays within TRACK_DEG of the SAME occluded enemy for ≥ MIN_TRACK_MS while the
 * bearing to that enemy moves ≥ MIN_BEARING_DEG (i.e. the crosshair FOLLOWS a moving hidden player).
 * Holding a common angle / pre-aiming a door does not count because the bearing does not move.
 * Output is a review hint only; it never bans.
 */
export type EnemyObs = { e: number; err: number; vis: boolean; bear: number };
export type ViewSample = { t: number; enemies: EnemyObs[] };
export type ViewBatch = { aliveMs: number; samples: ViewSample[] };

export const TRACK_DEG = 6;
export const MIN_TRACK_MS = 1500;
export const MIN_BEARING_DEG = 12;
/** Max gap between samples that still counts as continuous tracking. */
export const MAX_GAP_MS = 600;
/** Expected occluded tracks per alive minute for a normal player (conservative default until a population baseline exists). */
export const DEFAULT_TRACKS_PER_MIN = 0.03;
export const MIN_ALIVE_MIN = 8;

const yawDiff = (a: number, b: number) => { let d = (b - a) % 360; if (d > 180) d -= 360; if (d < -180) d += 360; return d; };

export type Track = { enemy: number; startT: number; endT: number; ms: number; bearingDeg: number; meanErr: number };

export function findTracks(samples: ViewSample[]): Track[] {
  const s = [...samples].filter((x) => Number.isFinite(x.t)).sort((a, b) => a.t - b.t);
  const open = new Map<number, { startT: number; lastT: number; b0: number; bMin: number; bMax: number; errSum: number; n: number; unwrapped: number; lastB: number }>();
  const out: Track[] = [];
  const close = (e: number) => {
    const o = open.get(e); if (!o) return; open.delete(e);
    const ms = o.lastT - o.startT, span = o.bMax - o.bMin;
    if (ms >= MIN_TRACK_MS && span >= MIN_BEARING_DEG) out.push({ enemy: e, startT: o.startT, endT: o.lastT, ms, bearingDeg: Math.round(span), meanErr: Math.round((o.errSum / o.n) * 10) / 10 });
  };
  for (const smp of s) {
    const hit = new Set<number>();
    for (const en of smp.enemies) {
      if (en.vis || !(en.err <= TRACK_DEG)) continue;
      hit.add(en.e);
      const o = open.get(en.e);
      if (o && smp.t - o.lastT <= MAX_GAP_MS) {
        o.unwrapped += yawDiff(o.lastB, en.bear); o.lastB = en.bear;
        o.bMin = Math.min(o.bMin, o.unwrapped); o.bMax = Math.max(o.bMax, o.unwrapped);
        o.lastT = smp.t; o.errSum += en.err; o.n++;
      } else {
        if (o) close(en.e);
        open.set(en.e, { startT: smp.t, lastT: smp.t, b0: en.bear, bMin: 0, bMax: 0, errSum: en.err, n: 1, unwrapped: 0, lastB: en.bear });
      }
    }
    for (const e of [...open.keys()]) if (!hit.has(e)) close(e);
  }
  for (const e of [...open.keys()]) close(e);
  return out;
}

export type WallhackResult = { aliveMin: number; tracks: number; tracksPerMin: number; z: number; points: number; text: string; examples: Track[] };

/** Poisson z of observed tracks vs the expected rate over the player's alive time. */
export function wallhackScore(batches: ViewBatch[], baselinePerMin = DEFAULT_TRACKS_PER_MIN): WallhackResult {
  const aliveMs = batches.reduce((a, b) => a + Math.max(0, b.aliveMs), 0);
  const aliveMin = aliveMs / 60000;
  const tracks = batches.flatMap((b) => findTracks(b.samples));
  const lambda = Math.max(0.05, baselinePerMin * aliveMin);
  const z = aliveMin > 0 ? (tracks.length - lambda) / Math.sqrt(lambda) : 0;
  // Conservative: needs enough alive time, ≥3 separate tracks, and a large excess over expectation.
  const points = aliveMin >= MIN_ALIVE_MIN && tracks.length >= 3 && z >= 4 ? Math.min(25, 8 + (z - 4) * 2) : 0;
  return {
    aliveMin: Math.round(aliveMin * 10) / 10, tracks: tracks.length, tracksPerMin: aliveMin ? Math.round((tracks.length / aliveMin) * 100) / 100 : 0,
    z: Math.round(z * 100) / 100, points: Math.round(points),
    text: `${tracks.length} times the crosshair followed a hidden (not spotted) moving enemy for ≥${MIN_TRACK_MS / 1000}s over ${aliveMin.toFixed(1)} alive minutes (expected ≈${(baselinePerMin * aliveMin).toFixed(2)}, z=${z.toFixed(1)})`,
    examples: tracks.sort((a, b) => b.ms - a.ms).slice(0, 5),
  };
}

/** Parses the compact 0.4.1 view_samples per-player payload: smp = [[tMs, [[enemyIdx, err×10, vis 0|1, bearing], ...]], ...]. */
export function parseCompactSamples(raw: unknown, maxSamples = 2000): ViewSample[] {
  if (!Array.isArray(raw)) return [];
  const out: ViewSample[] = [];
  for (const r of raw.slice(0, maxSamples)) {
    if (!Array.isArray(r) || typeof r[0] !== "number") continue;
    const enemies: EnemyObs[] = (Array.isArray(r[1]) ? r[1] : []).slice(0, 10).flatMap((e: unknown) => {
      if (!Array.isArray(e) || e.length < 4 || !e.every((x) => typeof x === "number" && Number.isFinite(x))) return [];
      return [{ e: Math.trunc(e[0]), err: e[1] / 10, vis: e[2] === 1, bear: e[3] }];
    });
    out.push({ t: r[0], enemies });
  }
  return out;
}
