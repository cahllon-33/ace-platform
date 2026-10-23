import { Prisma } from "@prisma/client";
import { getPrisma } from "@/server/db";
import { analyzePlayer, populationBaseline, MIN_KILLS, REVIEW_THRESHOLD, type KillRec, type TraceSample } from "@/lib/ac-analytics";
import { parseCompactSamples, wallhackScore, type ViewBatch } from "@/lib/ac-wallhack";
import { modelHint } from "@/server/ac-model";

const num = (v: unknown, d = 0) => (typeof v === "number" && Number.isFinite(v) ? v : d);
const bool = (v: unknown) => v === true;
const sid = (v: unknown) => (typeof v === "string" && /^\d{5,20}$/.test(v) ? v : null);
const vec = (v: unknown) => (Array.isArray(v) ? v.slice(0, 3).map((x) => num(x)) : null);

/** Parses an AceBridge 0.4.0 kill_telemetry payload into a row. Returns null when the attacker is not a human SteamID. */
export function parseKillTelemetry(data: Record<string, unknown>) {
  const attacker = sid(data.attacker);
  if (!attacker) return null;
  const trace: TraceSample[] = (Array.isArray(data.trace) ? data.trace : []).slice(0, 64).map((s) => {
    const o = (s ?? {}) as Record<string, unknown>;
    return { dt: num(o.dt), pitch: num(o.pitch), yaw: num(o.yaw), err: num(o.err, 180) };
  });
  return {
    round: Math.trunc(num(data.round)), attackerSteamId: attacker, victimSteamId: sid(data.victim), victimBot: bool(data.victimBot),
    weapon: typeof data.weapon === "string" ? data.weapon.slice(0, 40) : "", headshot: bool(data.headshot), distance: num(data.distance),
    wallbang: bool(data.wallbang), throughSmoke: bool(data.throughSmoke), attackerBlind: bool(data.attackerBlind), noscope: bool(data.noscope),
    attackerPos: vec(data.attackerPos) ?? Prisma.JsonNull, victimPos: vec(data.victimPos) ?? Prisma.JsonNull, attackerAngles: vec(data.attackerAngles) ?? Prisma.JsonNull,
    trace: trace as unknown as Prisma.InputJsonValue, sampleMs: Math.trunc(num(data.sampleMs, 31)),
  };
}

export async function storeKillTelemetry(eventId: string, serverId: string, matchKey: string, data: Record<string, unknown>) {
  const row = parseKillTelemetry(data);
  if (!row) return false;
  await getPrisma().cs2KillTelemetry.create({ data: { eventId, serverId, matchKey, ...row } });
  return true;
}

/** R60: AceBridge 0.4.1 view_samples batch → one row per player. Unknown shapes are dropped. */
export async function storeViewSamples(eventId: string, serverId: string, matchKey: string, data: Record<string, unknown>) {
  const players = Array.isArray(data.players) ? data.players.slice(0, 12) : [];
  const round = Math.trunc(num(data.round));
  const rows = players.flatMap((p, i) => {
    const o = (p ?? {}) as Record<string, unknown>;
    const steamId = sid(o.s);
    if (!steamId) return [];
    const samples = parseCompactSamples(o.smp, 400).map((x) => [x.t, x.enemies.map((e) => [e.e, Math.round(e.err * 10), e.vis ? 1 : 0, Math.round(e.bear)])]);
    return [{ eventId: `${eventId}:${i}`, serverId, matchKey, round, steamId, aliveMs: Math.max(0, Math.min(600_000, Math.trunc(num(o.alive)))), samples: samples as unknown as Prisma.InputJsonValue }];
  });
  if (rows.length) await getPrisma().cs2ViewSample.createMany({ data: rows, skipDuplicates: true });
  return rows.length;
}

async function loadViewBatches(matchKey: string) {
  const rows = await getPrisma().cs2ViewSample.findMany({ where: { matchKey }, select: { steamId: true, aliveMs: true, samples: true }, take: 5000 }).catch(() => []);
  const by = new Map<string, ViewBatch[]>();
  for (const r of rows) { const l = by.get(r.steamId) ?? []; l.push({ aliveMs: r.aliveMs, samples: parseCompactSamples(r.samples, 400) }); by.set(r.steamId, l); }
  return by;
}

const toRec = (r: { weapon: string; headshot: boolean; distance: number; wallbang: boolean; throughSmoke: boolean; attackerBlind: boolean; victimBot: boolean; trace: Prisma.JsonValue }): KillRec => ({
  weapon: r.weapon, headshot: r.headshot, distance: r.distance, wallbang: r.wallbang, throughSmoke: r.throughSmoke, attackerBlind: r.attackerBlind, victimBot: r.victimBot,
  trace: Array.isArray(r.trace) ? (r.trace as unknown as TraceSample[]) : [],
});
const SEL = { attackerSteamId: true, weapon: true, headshot: true, distance: true, wallbang: true, throughSmoke: true, attackerBlind: true, victimBot: true, trace: true } as const;

/** Baseline from the latest 5000 human-victim kills across all matches (cached per invocation). */
export async function loadBaseline() {
  const rows = await getPrisma().cs2KillTelemetry.findMany({ where: { victimBot: false }, orderBy: { createdAt: "desc" }, take: 5000, select: SEL });
  return populationBaseline(rows.map(toRec));
}

/**
 * Analyse every player of one match and upsert the owner review queue for players at/above the threshold.
 * Never bans and never changes an account: an owner decides in /admin/anticheat.
 * A review that an owner already closed is not reopened; its numbers are refreshed only while open.
 */
export async function analyzeMatch(matchKey: string) {
  const db = getPrisma();
  const rows = await db.cs2KillTelemetry.findMany({ where: { matchKey }, select: SEL, take: 3000 });
  const byPlayer = new Map<string, KillRec[]>();
  for (const r of rows) { const l = byPlayer.get(r.attackerSteamId) ?? []; l.push(toRec(r)); byPlayer.set(r.attackerSteamId, l); }
  const baseline = await loadBaseline();
  const views = await loadViewBatches(matchKey);
  let queued = 0;
  for (const [steamId, kills] of byPlayer) {
    if (kills.length < MIN_KILLS) continue;
    const a = analyzePlayer(kills, baseline);
    // R60 wallhack heuristic (occluded tracking). Adds a reason; same single-indicator cap as the rules.
    const wh = views.has(steamId) ? wallhackScore(views.get(steamId)!) : null;
    const indicators: Record<string, unknown> = { ...a.indicators, occludedTrackZ: wh?.z ?? 0, occludedTracks: wh?.tracks ?? 0, aliveMin: wh?.aliveMin ?? 0 };
    const reasons = [...a.reasons];
    if (wh && wh.points > 0) reasons.push({ key: "occluded_tracking", value: wh.tracksPerMin, points: wh.points, text: wh.text });
    // R60 model hint (only when a validated model is active). Never a ban.
    const hint = await modelHint(indicators).catch(() => null);
    if (hint?.flag) reasons.push({ key: "model", value: hint.p, points: 15, text: `Model p=${hint.p.toFixed(2)}; top: ${hint.contributions.slice(0, 3).map((c) => `${c.feature} ${c.contribution > 0 ? "+" : ""}${c.contribution}`).join(", ")}` });
    let score = Math.min(100, reasons.reduce((s2, r) => s2 + r.points, 0));
    if (reasons.length === 1) score = Math.min(score, 30);
    const level = score >= 60 ? "high" : score >= REVIEW_THRESHOLD ? "medium" : "low";
    if (score < REVIEW_THRESHOLD) continue;
    const user = await db.user.findUnique({ where: { steamId }, select: { id: true } }).catch(() => null);
    const data = { score, level, kills: a.kills, indicators: indicators as unknown as Prisma.InputJsonValue, reasons: reasons as unknown as Prisma.InputJsonValue, userId: user?.id ?? null, modelP: hint?.p ?? null };
    const existing = await db.anticheatReview.findUnique({ where: { matchKey_steamId: { matchKey, steamId } }, select: { status: true } });
    if (existing && existing.status !== "open") continue;
    await db.anticheatReview.upsert({ where: { matchKey_steamId: { matchKey, steamId } }, create: { matchKey, steamId, ...data }, update: data });
    queued++;
  }
  return { players: byPlayer.size, queued };
}

export async function loadReviewQueue(status = "open") {
  return getPrisma().anticheatReview.findMany({ where: { status }, orderBy: [{ score: "desc" }, { createdAt: "desc" }], take: 100 });
}

/** Owner decision. "confirmed" records the decision only; any ban is a separate, explicit owner action. */
export async function decideReview(id: string, status: "cleared" | "confirmed" | "open", actor: string, note: string) {
  return getPrisma().anticheatReview.update({ where: { id }, data: { status, note: note.slice(0, 1000), reviewedBy: actor.slice(0, 80), reviewedAt: new Date() } });
}

export async function hardwareBanned(hwHash: string) {
  if (!/^[a-f0-9]{64}$/.test(hwHash)) return false;
  const b = await getPrisma().anticheatHardwareBan.findUnique({ where: { hwHash } });
  return !!b && !b.revokedAt;
}

/** Owner-only: ban the hardware fingerprint(s) last reported by this user's desktop sessions. */
export async function banUserHardware(userId: string, reason: string, actor: string) {
  const db = getPrisma();
  const sessions = await db.anticheatSession.findMany({ where: { userId, hwHash: { not: "" } }, select: { hwHash: true }, take: 20 });
  const hashes = [...new Set(sessions.map((s) => s.hwHash))];
  for (const hwHash of hashes) await db.anticheatHardwareBan.upsert({ where: { hwHash }, create: { hwHash, userId, reason: reason.slice(0, 300), createdBy: actor.slice(0, 80) }, update: { revokedAt: null, reason: reason.slice(0, 300) } });
  return hashes.length;
}
