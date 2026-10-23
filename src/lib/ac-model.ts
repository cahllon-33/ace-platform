/**
 * R60 A.C.E learning model (pure, no I/O): a small, explainable logistic-regression classifier over
 * per-player-per-match indicators produced by analyzePlayer (+ the wallhack heuristic).
 *
 * Rules:
 *  - Trained ONLY on real owner/Overwatch decisions (cleared = 0, confirmed = 1). Synthetic data is used in tests only.
 *  - Until there are enough labels (MIN_LABELS, MIN_PER_CLASS) the system stays rule-based.
 *  - A trained model is activated only if its held-out false-positive rate and precision pass the gates below.
 *  - Output is a review hint with per-feature contributions. It never bans.
 */

export const FEATURES = [
  "hsZ", "flickZ", "fastReactionZ", "wallbangZ", "smokeZ", "blindZ", "reactionTightness", "aimTightness", "occludedTrackZ",
] as const;
export type FeatureKey = (typeof FEATURES)[number];
export type FeatureVec = Record<FeatureKey, number>;

export const MIN_LABELS = 150;
export const MIN_PER_CLASS = 30;
/** Activation gates on the held-out split. */
export const MAX_HOLDOUT_FPR = 0.05;
export const MIN_HOLDOUT_PRECISION = 0.7;
/** Probability at/above which the model adds a review reason. */
export const MODEL_REASON_P = 0.8;

const clampZ = (z: unknown) => (typeof z === "number" && Number.isFinite(z) ? Math.max(-5, Math.min(10, z)) : 0);

/** Indicators JSON (as stored on AnticheatReview.indicators) -> feature vector. Missing values are 0 (neutral). */
export function featuresFrom(ind: Record<string, unknown> | null | undefined): FeatureVec {
  const i = ind ?? {};
  const rs = typeof i.reactionStdMs === "number" ? i.reactionStdMs : null;
  const fs = typeof i.finalErrStd === "number" ? i.finalErrStd : null;
  return {
    hsZ: clampZ(i.hsZ), flickZ: clampZ(i.flickZ), fastReactionZ: clampZ(i.fastReactionZ),
    wallbangZ: clampZ(i.wallbangZ), smokeZ: clampZ(i.smokeZ), blindZ: clampZ(i.blindZ),
    // "tightness": larger = more machine-like consistency. 0 when unknown.
    reactionTightness: rs === null ? 0 : Math.max(0, Math.min(5, (60 - rs) / 12)),
    aimTightness: fs === null ? 0 : Math.max(0, Math.min(5, (1.5 - fs) / 0.3)),
    occludedTrackZ: clampZ(i.occludedTrackZ),
  };
}

export type Sample = { x: FeatureVec; y: 0 | 1; id: string };
export type Model = {
  version: 1; features: FeatureKey[]; mean: number[]; std: number[]; weights: number[]; bias: number;
  trainedAt: string; samples: number; positives: number;
  holdout: { n: number; tp: number; fp: number; tn: number; fn: number; precision: number; recall: number; fpr: number; accuracy: number };
};

export type Readiness = { ready: boolean; labeled: number; positives: number; negatives: number; needed: number; text: string };
export function readiness(labels: { y: 0 | 1 }[]): Readiness {
  const positives = labels.filter((l) => l.y === 1).length, negatives = labels.length - positives;
  const needed = Math.max(0, MIN_LABELS - labels.length, MIN_PER_CLASS - positives, MIN_PER_CLASS - negatives);
  const ready = labels.length >= MIN_LABELS && positives >= MIN_PER_CLASS && negatives >= MIN_PER_CLASS;
  return { ready, labeled: labels.length, positives, negatives, needed, text: ready ? "enough real labels to train" : `rule-based: needs ${MIN_LABELS} decided reviews with ≥${MIN_PER_CLASS} of each outcome (have ${labels.length}: ${positives} confirmed / ${negatives} cleared)` };
}

/** Deterministic split: ~20% held out, by a stable hash of the sample id. */
export function isHoldout(id: string): boolean {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) { h ^= id.charCodeAt(i); h = Math.imul(h, 16777619); }
  return ((h >>> 0) % 5) === 0;
}

const sigmoid = (z: number) => 1 / (1 + Math.exp(-Math.max(-30, Math.min(30, z))));
const vec = (x: FeatureVec) => FEATURES.map((k) => x[k]);

/** L2-regularised logistic regression with class weighting (balanced), full-batch gradient descent. Deterministic. */
export function train(samples: Sample[], opts: { epochs?: number; lr?: number; l2?: number; now?: Date } = {}): Model {
  const epochs = opts.epochs ?? 600, lr = opts.lr ?? 0.2, l2 = opts.l2 ?? 0.01;
  const tr = samples.filter((s) => !isHoldout(s.id)), ho = samples.filter((s) => isHoldout(s.id));
  const X = tr.map((s) => vec(s.x)), d = FEATURES.length;
  const mean = Array.from({ length: d }, (_, j) => X.reduce((a, r) => a + r[j], 0) / Math.max(1, X.length));
  const std = Array.from({ length: d }, (_, j) => Math.sqrt(X.reduce((a, r) => a + (r[j] - mean[j]) ** 2, 0) / Math.max(1, X.length)) || 1);
  const Z = X.map((r) => r.map((v, j) => (v - mean[j]) / std[j]));
  const pos = tr.filter((s) => s.y === 1).length, neg = tr.length - pos;
  const wPos = pos ? tr.length / (2 * pos) : 1, wNeg = neg ? tr.length / (2 * neg) : 1;
  const w = new Array(d).fill(0); let b = 0;
  for (let e = 0; e < epochs; e++) {
    const gw = new Array(d).fill(0); let gb = 0;
    for (let i = 0; i < Z.length; i++) {
      const p = sigmoid(Z[i].reduce((a, v, j) => a + v * w[j], b));
      const cw = tr[i].y === 1 ? wPos : wNeg;
      const g = (p - tr[i].y) * cw;
      for (let j = 0; j < d; j++) gw[j] += g * Z[i][j];
      gb += g;
    }
    const n = Math.max(1, Z.length);
    for (let j = 0; j < d; j++) w[j] -= lr * (gw[j] / n + l2 * w[j]);
    b -= lr * (gb / n);
  }
  const model: Model = {
    version: 1, features: [...FEATURES], mean, std, weights: w, bias: b, trainedAt: (opts.now ?? new Date()).toISOString(),
    samples: samples.length, positives: samples.filter((s) => s.y === 1).length,
    holdout: { n: 0, tp: 0, fp: 0, tn: 0, fn: 0, precision: 0, recall: 0, fpr: 0, accuracy: 0 },
  };
  model.holdout = evaluate(model, ho);
  return model;
}

export function evaluate(m: Model, set: Sample[], threshold = MODEL_REASON_P) {
  let tp = 0, fp = 0, tn = 0, fn = 0;
  for (const s of set) { const p = predict(m, s.x).p >= threshold; if (p && s.y) tp++; else if (p) fp++; else if (s.y) fn++; else tn++; }
  const r = (a: number, b: number) => (b ? Math.round((a / b) * 1000) / 1000 : 0);
  return { n: set.length, tp, fp, tn, fn, precision: r(tp, tp + fp), recall: r(tp, tp + fn), fpr: r(fp, fp + tn), accuracy: r(tp + tn, set.length) };
}

/** Activation gate: never activate a model that would flood the queue with clean players. */
export function activationVerdict(m: Model): { active: boolean; text: string } {
  const h = m.holdout;
  if (h.n < 20) return { active: false, text: `held-out set too small (${h.n})` };
  if (h.fp + h.tn < 10 || h.tp + h.fn < 5) return { active: false, text: "held-out set lacks both outcomes" };
  if (h.fpr > MAX_HOLDOUT_FPR) return { active: false, text: `held-out false-positive rate ${(h.fpr * 100).toFixed(1)}% > ${MAX_HOLDOUT_FPR * 100}%` };
  if (h.precision < MIN_HOLDOUT_PRECISION) return { active: false, text: `held-out precision ${(h.precision * 100).toFixed(0)}% < ${MIN_HOLDOUT_PRECISION * 100}%` };
  return { active: true, text: `held-out precision ${(h.precision * 100).toFixed(0)}%, recall ${(h.recall * 100).toFixed(0)}%, FPR ${(h.fpr * 100).toFixed(1)}%` };
}

export type Contribution = { feature: FeatureKey; value: number; contribution: number };
/** Probability + per-feature contributions (weight × standardised value), largest first. */
export function predict(m: Model, x: FeatureVec): { p: number; contributions: Contribution[] } {
  const v = m.features.map((k) => x[k] ?? 0);
  const contributions = v.map((val, j) => ({ feature: m.features[j], value: Math.round(val * 100) / 100, contribution: Math.round(m.weights[j] * ((val - m.mean[j]) / (m.std[j] || 1)) * 100) / 100 }));
  const p = sigmoid(contributions.reduce((a, c) => a + c.contribution, m.bias));
  return { p: Math.round(p * 1000) / 1000, contributions: contributions.sort((a, b) => Math.abs(b.contribution) - Math.abs(a.contribution)) };
}

export function isModel(v: unknown): v is Model {
  const m = v as Model;
  return !!m && m.version === 1 && Array.isArray(m.weights) && Array.isArray(m.features) && m.weights.length === m.features.length && Array.isArray(m.mean) && Array.isArray(m.std);
}
