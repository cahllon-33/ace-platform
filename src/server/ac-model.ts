/**
 * R60 learning-model pipeline (server). Labels = owner/Overwatch-decided AnticheatReview rows only
 * (cleared → 0, confirmed → 1). No synthetic data here. Until readiness passes, the system stays rule-based.
 */
import { Prisma } from "@prisma/client";
import { getPrisma } from "@/server/db";
import { activationVerdict, featuresFrom, isModel, predict, readiness, train, MODEL_REASON_P, type Model, type Sample } from "@/lib/ac-model";

export async function labeledSamples(): Promise<Sample[]> {
  const rows = await getPrisma().anticheatReview.findMany({ where: { status: { in: ["cleared", "confirmed"] } }, select: { id: true, status: true, indicators: true }, orderBy: { reviewedAt: "desc" }, take: 20000 });
  return rows.map((r) => ({ id: r.id, y: r.status === "confirmed" ? 1 : 0, x: featuresFrom(r.indicators as Record<string, unknown>) }));
}

/** Trains a candidate; activates it only if it passes the held-out gates (previous active model is retired). */
export async function trainModel() {
  const db = getPrisma();
  const samples = await labeledSamples();
  const ready = readiness(samples);
  if (!ready.ready) return { trained: false as const, readiness: ready };
  const model = train(samples);
  const verdict = activationVerdict(model);
  const row = await db.anticheatModel.create({ data: { status: verdict.active ? "active" : "rejected", model: model as unknown as Prisma.InputJsonValue, verdict: verdict.text, labeled: samples.length, activatedAt: verdict.active ? new Date() : null } });
  if (verdict.active) await db.anticheatModel.updateMany({ where: { status: "active", id: { not: row.id } }, data: { status: "retired" } });
  return { trained: true as const, readiness: ready, active: verdict.active, verdict: verdict.text, id: row.id };
}

let cache: { at: number; model: Model | null } | null = null;
export async function activeModel(): Promise<Model | null> {
  if (cache && Date.now() - cache.at < 60_000) return cache.model;
  const row = await getPrisma().anticheatModel.findFirst({ where: { status: "active" }, orderBy: { activatedAt: "desc" } }).catch(() => null);
  const m = row && isModel(row.model) ? (row.model as unknown as Model) : null;
  cache = { at: Date.now(), model: m };
  return m;
}

/** Model hint for one player-match: probability + top contributions. Null while rule-based. */
export async function modelHint(indicators: Record<string, unknown>) {
  const m = await activeModel();
  if (!m) return null;
  const r = predict(m, featuresFrom(indicators));
  return { ...r, flag: r.p >= MODEL_REASON_P };
}

export async function modelStatus() {
  const db = getPrisma();
  const samples = await labeledSamples().catch(() => []);
  const [active, recent] = await Promise.all([
    db.anticheatModel.findFirst({ where: { status: "active" }, orderBy: { activatedAt: "desc" } }).catch(() => null),
    db.anticheatModel.findMany({ orderBy: { createdAt: "desc" }, take: 5, select: { id: true, status: true, verdict: true, labeled: true, createdAt: true } }).catch(() => []),
  ]);
  const am = active && isModel(active.model) ? (active.model as unknown as Model) : null;
  return {
    readiness: readiness(samples),
    active: am ? { id: active!.id, trainedAt: am.trainedAt, samples: am.samples, holdout: am.holdout, weights: am.features.map((f, i) => ({ feature: f, weight: Math.round(am.weights[i] * 100) / 100 })) } : null,
    recent,
  };
}
