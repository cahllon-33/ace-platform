/**
 * R60 A.C.E Overwatch (server). Eligible veteran players see ANONYMISED cases (no SteamID, name or match id)
 * and vote. Votes are advice; the owner makes the final decision through decideReview.
 */
import { Prisma } from "@prisma/client";
import { getPrisma } from "@/server/db";
import { killMetrics, type TraceSample } from "@/lib/ac-analytics";
import { anonymizedTimeline, eligibility, isVerdict, OW_RULES, safeDemoUrl, scrub, tally, type Verdict } from "@/lib/overwatch";
import { decideReview } from "@/server/ac-analytics";
import { refreshTrust } from "@/server/trust";

export async function openOverwatchCase(reviewId: string, demoUrl: string, actor: string) {
  const db = getPrisma();
  const r = await db.anticheatReview.findUnique({ where: { id: reviewId } });
  if (!r || r.status !== "open") return null;
  const kills = await db.cs2KillTelemetry.findMany({ where: { matchKey: r.matchKey, attackerSteamId: r.steamId }, orderBy: { createdAt: "asc" }, take: 80, select: { round: true, weapon: true, headshot: true, wallbang: true, throughSmoke: true, attackerBlind: true, distance: true, trace: true } });
  const timeline = anonymizedTimeline(kills.map((k) => {
    const m = killMetrics({ ...k, trace: Array.isArray(k.trace) ? (k.trace as unknown as TraceSample[]) : [] });
    const flagged = [m.flickLock ? "snap-to-target" : "", m.reactionMs !== null && m.reactionMs < 120 ? "very fast reaction" : ""].filter(Boolean);
    return { ...k, flagged };
  }));
  const reasons = (Array.isArray(r.reasons) ? (r.reasons as { key: string; text: string }[]) : []).map((x) => ({ key: x.key, text: scrub(String(x.text ?? "")) }));
  const summary = { score: Math.round(r.score), level: r.level, kills: r.kills, reasons };
  const data = { demoUrl: safeDemoUrl(demoUrl) ?? "", timeline: timeline as unknown as Prisma.InputJsonValue, summary: summary as unknown as Prisma.InputJsonValue, createdBy: actor.slice(0, 80) };
  return db.overwatchCase.upsert({ where: { reviewId }, create: { reviewId, ...data }, update: { ...data, status: "open", closedAt: null } });
}

export async function closeOverwatchCase(caseId: string, status: "cleared" | "confirmed", actor: string, note: string) {
  const db = getPrisma();
  const c = await db.overwatchCase.findUnique({ where: { id: caseId }, include: { votes: { select: { verdict: true } } } });
  if (!c) return null;
  const t = tally(c.votes.map((v) => v.verdict as Verdict));
  await decideReview(c.reviewId, status, actor, `${note} [Overwatch ${t.total} votes, consensus ${t.consensus ?? "none"}]`);
  return db.overwatchCase.update({ where: { id: caseId }, data: { status: "closed", closedAt: new Date() } });
}

export async function reviewerEligibility(userId: string, now = new Date()) {
  const db = getPrisma();
  const u = await db.user.findUnique({ where: { id: userId }, select: { steamId: true, createdAt: true, wins: true, losses: true, accountStatus: true, verifiedAt: true } });
  if (!u) return { eligible: false, missing: ["sign in"] };
  const [trust, confirmed, ban] = await Promise.all([
    refreshTrust(userId).catch(() => null),
    db.anticheatReview.count({ where: { steamId: u.steamId ?? "-", status: "confirmed" } }),
    db.queueBan.count({ where: { userId, revokedAt: null, kind: "BAN", OR: [{ until: null }, { until: { gt: now } }] } }),
  ]);
  return eligibility({ accountAgeDays: (now.getTime() - u.createdAt.getTime()) / 86400_000, matches: u.wins + u.losses, trust: trust?.score ?? 0, banned: u.accountStatus !== "ACTIVE" || ban > 0, confirmedReviews: confirmed, verified: !!u.steamId && !!u.verifiedAt });
}

/** Lobby players of a match key (to keep reviewers off cases from their own matches). */
async function matchUserIds(matchKey: string) {
  const l = await getPrisma().queueLobby.findFirst({ where: { dathostMatchId: matchKey }, select: { players: { select: { userId: true } } } });
  return new Set(l?.players.map((p) => p.userId) ?? []);
}

export type ReviewerCase = { id: string; demoUrl: string | null; timeline: unknown; summary: unknown };
export async function nextCaseFor(userId: string): Promise<ReviewerCase | null> {
  const db = getPrisma();
  const cases = await db.overwatchCase.findMany({ where: { status: "open", votes: { none: { reviewerId: userId } } }, orderBy: { createdAt: "asc" }, take: 20 });
  for (const c of cases) {
    const review = await db.anticheatReview.findUnique({ where: { id: c.reviewId }, select: { matchKey: true, userId: true } });
    if (!review || review.userId === userId) continue;
    if ((await matchUserIds(review.matchKey)).has(userId)) continue;
    return { id: c.id, demoUrl: safeDemoUrl(c.demoUrl), timeline: c.timeline, summary: c.summary };
  }
  return null;
}

export async function castVote(userId: string, caseId: string, verdict: unknown, now = new Date()) {
  if (!isVerdict(verdict)) return { ok: false as const, error: "invalid" };
  const el = await reviewerEligibility(userId, now);
  if (!el.eligible) return { ok: false as const, error: "not_eligible" };
  const db = getPrisma();
  const today = await db.overwatchVote.count({ where: { reviewerId: userId, createdAt: { gte: new Date(now.getTime() - 86400_000) } } });
  if (today >= OW_RULES.votesPerDay) return { ok: false as const, error: "daily_limit" };
  const next = await nextCaseFor(userId);
  const c = await db.overwatchCase.findUnique({ where: { id: caseId }, select: { status: true } });
  if (!c || c.status !== "open" || next?.id !== caseId) return { ok: false as const, error: "unavailable" };
  await db.overwatchVote.create({ data: { caseId, reviewerId: userId, verdict } }).catch(() => null);
  return { ok: true as const };
}

export async function overwatchAdmin() {
  const rows = await getPrisma().overwatchCase.findMany({ orderBy: [{ status: "desc" }, { createdAt: "desc" }], take: 50, include: { votes: { select: { verdict: true } } } });
  return rows.map((c) => ({ id: c.id, reviewId: c.reviewId, status: c.status, demoUrl: c.demoUrl, createdAt: c.createdAt, tally: tally(c.votes.map((v) => v.verdict as Verdict)) }));
}
