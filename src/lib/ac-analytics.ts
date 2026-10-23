/**
 * R59 A.C.E server-side behavioural analytics (pure, no I/O).
 * Input: AceBridge 0.4.0 kill_telemetry rows for one player in one match.
 * Output: indicators + a 0-100 suspicion score WITH explanations. A score is a review hint only:
 * nothing here bans anyone; the caller may only add the player to the owner review queue.
 */

export type TraceSample = { dt: number; pitch: number; yaw: number; err: number };
export type KillRec = {
  weapon: string; headshot: boolean; distance: number;
  wallbang: boolean; throughSmoke: boolean; attackerBlind: boolean; victimBot?: boolean;
  trace?: TraceSample[] | null; sampleMs?: number;
};

export type Baseline = { hsRate: number; flickLockRate: number; wallbangRate: number; smokeRate: number; blindRate: number; fastReactionRate: number };
/** Conservative defaults used until the population has enough kills (see populationBaseline). */
export const DEFAULT_BASELINE: Baseline = { hsRate: 0.45, flickLockRate: 0.06, wallbangRate: 0.04, smokeRate: 0.03, blindRate: 0.02, fastReactionRate: 0.08 };

export const MIN_KILLS = 8;
export const REVIEW_THRESHOLD = 35;
/** deg/s above which a pre-kill rotation counts as a "snap" */
export const SNAP_DEG_PER_SEC = 1500;
/** reaction proxy below this (ms) counts as "fast" */
export const FAST_REACTION_MS = 120;

const NON_AIM = /^(knife|bayonet|hegrenade|inferno|molotov|incgrenade|flashbang|smokegrenade|decoy|taser|world|planted_c4)/;
const NO_HS_STAT = /^(awp|ssg08|g3sg1|scar20|nova|xm1014|mag7|sawedoff)/;
const SNIPER = /^(awp|ssg08|g3sg1|scar20)/;
export const isAimKill = (k: KillRec) => !NON_AIM.test(k.weapon.replace(/^weapon_/, ""));

/** Smallest signed difference between two yaw angles, in degrees. */
export function angleDelta(a: number, b: number): number {
  let d = (b - a) % 360;
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return d;
}

export type KillMetrics = { peakSnap: number; flickLock: boolean; reactionMs: number | null; finalErr: number | null };

/** Per-kill aim metrics from the short pre-kill trace (dt ms relative to the kill, ascending). */
export function killMetrics(k: KillRec): KillMetrics {
  const t = (k.trace ?? []).filter((s) => Number.isFinite(s.dt) && Number.isFinite(s.yaw) && Number.isFinite(s.pitch)).sort((a, b) => a.dt - b.dt);
  if (t.length < 3) return { peakSnap: 0, flickLock: false, reactionMs: null, finalErr: t.length ? t[t.length - 1].err : null };
  let peakSnap = 0, peakIdx = -1;
  for (let i = 1; i < t.length; i++) {
    const dtS = (t[i].dt - t[i - 1].dt) / 1000;
    if (dtS <= 0 || t[i].dt < -300) continue; // only the last 300 ms before the kill
    const deg = Math.hypot(t[i].pitch - t[i - 1].pitch, angleDelta(t[i - 1].yaw, t[i].yaw));
    const v = deg / dtS;
    if (v > peakSnap) { peakSnap = v; peakIdx = i; }
  }
  const finalErr = t[t.length - 1].err;
  // Flick-lock: a very fast rotation that ends on target with (almost) no correction before the kill.
  const after = peakIdx >= 0 ? t.slice(peakIdx) : [];
  const flickLock = peakSnap >= SNAP_DEG_PER_SEC && finalErr <= 2 && after.length <= 3 && after.every((s) => s.err <= 3);
  // Reaction proxy: time from the last sample that was clearly off target (>15°) to the kill.
  let reactionMs: number | null = null;
  for (let i = t.length - 1; i >= 0; i--) if (t[i].err > 15) { reactionMs = -t[i].dt; break; }
  return { peakSnap: Math.round(peakSnap), flickLock, reactionMs, finalErr };
}

/** One-sided binomial z-score of observing `x` of `n` with expected rate p. */
export function binomZ(x: number, n: number, p: number): number {
  if (n <= 0 || p <= 0 || p >= 1) return 0;
  return (x - n * p) / Math.sqrt(n * p * (1 - p));
}
const median = (a: number[]) => { if (!a.length) return null; const s = [...a].sort((x, y) => x - y); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const stdev = (a: number[]) => { if (a.length < 2) return null; const m = a.reduce((x, y) => x + y, 0) / a.length; return Math.sqrt(a.reduce((x, y) => x + (y - m) ** 2, 0) / (a.length - 1)); };

export type Reason = { key: string; value: number; baseline?: number; points: number; text: string };
export type Analysis = {
  kills: number; aimKills: number; score: number; level: "low" | "medium" | "high"; reviewable: boolean;
  indicators: {
    hsRate: number | null; hsZ: number; flickLockRate: number; flickZ: number; peakSnapMedian: number | null;
    reactionMedianMs: number | null; reactionStdMs: number | null; fastReactionRate: number; fastReactionZ: number;
    wallbangRate: number; wallbangZ: number; smokeRate: number; smokeZ: number; blindRate: number; blindZ: number;
    finalErrMedian: number | null; finalErrStd: number | null;
  };
  reasons: Reason[];
};

/** Points for a z-score: nothing below z=2.5 (normal variance), capped. */
const zPoints = (z: number, weight: number, cap: number) => (z < 2.5 ? 0 : Math.min(cap, (z - 2.5) * weight + weight));
const r2 = (n: number) => Math.round(n * 100) / 100;

export function analyzePlayer(kills: KillRec[], baseline: Baseline = DEFAULT_BASELINE): Analysis {
  const aim = kills.filter(isAimKill);
  const hsPool = aim.filter((k) => !NO_HS_STAT.test(k.weapon.replace(/^weapon_/, "")));
  // Snipers flick-and-stop legitimately (that is how AWPs are played), so aim-trace metrics use the other weapons only.
  const m = aim.filter((k) => !SNIPER.test(k.weapon.replace(/^weapon_/, ""))).map(killMetrics);
  const traced = m.filter((x) => x.finalErr !== null);
  const n = kills.length, na = aim.length;
  const hs = hsPool.filter((k) => k.headshot).length;
  const hsRate = hsPool.length ? hs / hsPool.length : null;
  const hsZ = binomZ(hs, hsPool.length, baseline.hsRate);
  const flick = m.filter((x) => x.flickLock).length;
  const flickZ = binomZ(flick, traced.length, baseline.flickLockRate);
  const reactions = m.map((x) => x.reactionMs).filter((x): x is number => x !== null && x >= 0);
  const fast = reactions.filter((x) => x < FAST_REACTION_MS).length;
  const fastZ = binomZ(fast, reactions.length, baseline.fastReactionRate);
  const wb = kills.filter((k) => k.wallbang).length, sm = kills.filter((k) => k.throughSmoke).length, bl = kills.filter((k) => k.attackerBlind).length;
  const wbZ = binomZ(wb, n, baseline.wallbangRate), smZ = binomZ(sm, n, baseline.smokeRate), blZ = binomZ(bl, n, baseline.blindRate);
  const finals = traced.map((x) => x.finalErr as number);
  const reactionStd = stdev(reactions);
  const finalStd = stdev(finals);
  const reasons: Reason[] = [];
  const add = (key: string, value: number, points: number, text: string, base?: number) => { if (points > 0) reasons.push({ key, value: r2(value), baseline: base === undefined ? undefined : r2(base), points: Math.round(points), text }); };
  if (hsRate !== null && hsPool.length >= MIN_KILLS) add("hs_rate", hsRate, zPoints(hsZ, 6, 22), `Headshot rate ${(hsRate * 100).toFixed(0)}% on ${hsPool.length} rifle/pistol kills vs ${(baseline.hsRate * 100).toFixed(0)}% population (z=${hsZ.toFixed(1)})`, baseline.hsRate);
  if (traced.length >= MIN_KILLS) add("flick_lock", flick / traced.length, zPoints(flickZ, 8, 30), `${flick}/${traced.length} kills were a >${SNAP_DEG_PER_SEC}°/s snap that stopped exactly on target (z=${flickZ.toFixed(1)})`, baseline.flickLockRate);
  if (reactions.length >= MIN_KILLS) add("fast_reaction", fast / reactions.length, zPoints(fastZ, 6, 22), `${fast}/${reactions.length} kills acquired the target in <${FAST_REACTION_MS} ms (z=${fastZ.toFixed(1)})`, baseline.fastReactionRate);
  if (n >= MIN_KILLS) {
    add("wallbang", wb / n, zPoints(wbZ, 4, 14), `${wb}/${n} kills through walls (z=${wbZ.toFixed(1)})`, baseline.wallbangRate);
    add("smoke", sm / n, zPoints(smZ, 4, 14), `${sm}/${n} kills through smoke (z=${smZ.toFixed(1)})`, baseline.smokeRate);
    add("blind", bl / n, zPoints(blZ, 3, 10), `${bl}/${n} kills while flashed (z=${blZ.toFixed(1)})`, baseline.blindRate);
  }
  // Consistency outliers: human aim varies. Near-zero spread across many kills is unusual.
  if (reactionStd !== null && reactions.length >= MIN_KILLS && reactionStd < 12) add("reaction_consistency", reactionStd, 12, `Reaction time spread only ${reactionStd.toFixed(0)} ms across ${reactions.length} kills (humans usually vary by 40+ ms)`);
  if (finalStd !== null && finals.length >= MIN_KILLS && finalStd < 0.25 && (median(finals) ?? 99) < 0.6) add("aim_consistency", finalStd, 12, `Crosshair error at the kill is almost identical on every kill (sd ${finalStd.toFixed(2)}°)`);
  let score = Math.min(100, reasons.reduce((s, r) => s + r.points, 0));
  // A single indicator alone is capped so one hot match (e.g. a great headshot game) cannot reach "high".
  if (reasons.length === 1) score = Math.min(score, 30);
  if (n < MIN_KILLS) score = 0;
  const level = score >= 60 ? "high" : score >= REVIEW_THRESHOLD ? "medium" : "low";
  return {
    kills: n, aimKills: na, score: Math.round(score), level, reviewable: n >= MIN_KILLS && score >= REVIEW_THRESHOLD,
    indicators: {
      hsRate: hsRate === null ? null : r2(hsRate), hsZ: r2(hsZ), flickLockRate: traced.length ? r2(flick / traced.length) : 0, flickZ: r2(flickZ),
      peakSnapMedian: median(m.map((x) => x.peakSnap).filter((x) => x > 0)), reactionMedianMs: median(reactions), reactionStdMs: reactionStd === null ? null : Math.round(reactionStd),
      fastReactionRate: reactions.length ? r2(fast / reactions.length) : 0, fastReactionZ: r2(fastZ),
      wallbangRate: n ? r2(wb / n) : 0, wallbangZ: r2(wbZ), smokeRate: n ? r2(sm / n) : 0, smokeZ: r2(smZ), blindRate: n ? r2(bl / n) : 0, blindZ: r2(blZ),
      finalErrMedian: median(finals), finalErrStd: finalStd === null ? null : r2(finalStd),
    },
    reasons,
  };
}

/** Population baseline from many kills (all players); falls back per field when the sample is small. */
export function populationBaseline(all: KillRec[]): Baseline {
  if (all.length < 500) return DEFAULT_BASELINE;
  const a = analyzePlayer(all, DEFAULT_BASELINE).indicators;
  const clamp = (v: number | null, d: number, lo: number, hi: number) => (v === null || !Number.isFinite(v) ? d : Math.min(hi, Math.max(lo, v)));
  return {
    hsRate: clamp(a.hsRate, DEFAULT_BASELINE.hsRate, 0.25, 0.6),
    flickLockRate: clamp(a.flickLockRate, DEFAULT_BASELINE.flickLockRate, 0.02, 0.15),
    wallbangRate: clamp(a.wallbangRate, DEFAULT_BASELINE.wallbangRate, 0.01, 0.1),
    smokeRate: clamp(a.smokeRate, DEFAULT_BASELINE.smokeRate, 0.01, 0.1),
    blindRate: clamp(a.blindRate, DEFAULT_BASELINE.blindRate, 0.005, 0.08),
    fastReactionRate: clamp(a.fastReactionRate, DEFAULT_BASELINE.fastReactionRate, 0.03, 0.2),
  };
}
