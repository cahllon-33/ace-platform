/**
 * R60 A.C.E trust score (pure). 0-100, explainable parts. Used ONLY to prefer pairing similar-trust players
 * in matchmaking and for Overwatch eligibility. It never blocks anyone from queueing.
 */
export type TrustInput = {
  accountAgeDays: number;
  steamLevel: number | null;          // null = private / unavailable
  cs2Hours: number | null;            // null = private / unavailable
  steamAccountAgeDays: number | null; // Steam timecreated, if public
  matches: number;
  reportsAgainstDistinct90d: number;  // distinct reporters, last 90 days
  reportsUpheld: number;              // reports the owner resolved as actioned
  reviewsConfirmed: number;
  reviewsCleared: number;
  hwBanLinked: boolean;               // shares a hardware hash with a banned account
  accountBanned: boolean;
};
export type TrustPart = { key: string; points: number; text: string };
export type Trust = { score: number; band: "low" | "normal" | "high"; parts: TrustPart[] };

export const LOW_TRUST = 35;
export const HIGH_TRUST = 70;
export const trustBand = (s: number): Trust["band"] => (s < LOW_TRUST ? "low" : s >= HIGH_TRUST ? "high" : "normal");

export function computeTrust(i: TrustInput): Trust {
  const parts: TrustPart[] = [];
  const add = (key: string, points: number, text: string) => { if (points) parts.push({ key, points: Math.round(points), text }); };
  add("base", 40, "Base");
  add("account_age", Math.min(15, (Math.max(0, i.accountAgeDays) / 365) * 15), `A.C.E account ${Math.floor(i.accountAgeDays)} days old`);
  if (i.steamAccountAgeDays !== null) add("steam_age", Math.min(10, (i.steamAccountAgeDays / (365 * 5)) * 10), `Steam account ${Math.floor(i.steamAccountAgeDays / 365)} years old`);
  if (i.steamLevel !== null) add("steam_level", Math.min(8, i.steamLevel / 5), `Steam level ${i.steamLevel}`);
  if (i.cs2Hours !== null) add("cs2_hours", Math.min(12, (i.cs2Hours / 1000) * 12), `${Math.round(i.cs2Hours)} CS2 hours`);
  if (i.steamLevel === null && i.cs2Hours === null) add("steam_private", 0, "Steam profile private (neutral)");
  add("matches", Math.min(10, i.matches / 10), `${i.matches} A.C.E matches`);
  // Reports: only distinct reporters count, softened (mass-report brigades are capped).
  if (i.reportsAgainstDistinct90d >= 3) add("reports", -Math.min(15, (i.reportsAgainstDistinct90d - 2) * 2.5), `${i.reportsAgainstDistinct90d} distinct players reported this account in 90 days`);
  add("reports_upheld", -Math.min(20, i.reportsUpheld * 8), `${i.reportsUpheld} reports upheld by the owner`);
  add("reviews_confirmed", -Math.min(60, i.reviewsConfirmed * 40), `${i.reviewsConfirmed} confirmed anti-cheat reviews`);
  add("reviews_cleared", Math.min(5, i.reviewsCleared * 2), `${i.reviewsCleared} reviews cleared (reviewed and clean)`);
  if (i.hwBanLinked) add("hw_link", -35, "Hardware shared with a banned account");
  if (i.accountBanned) add("banned", -100, "Account banned");
  let score = Math.max(0, Math.min(100, Math.round(parts.reduce((a, p) => a + p.points, 0))));
  // An owner-confirmed cheating verdict or HWID ban link always lands in the low band, however old the account is.
  if (i.reviewsConfirmed > 0 || i.hwBanLinked) score = Math.min(score, LOW_TRUST - 1);
  return { score, band: trustBand(score), parts };
}

export type QueueCand = { userId: string; joinedAt: Date; partyId?: string | null };
/** After this wait, trust is ignored for that player so low-trust pools never starve. */
export const TRUST_MAX_WAIT_MS = 8 * 60 * 1000;

/**
 * Picks `size` solo players. The oldest entry is always included (no starvation). If it has waited less
 * than TRUST_MAX_WAIT_MS, the remaining slots are filled by closest trust first (same band first, then
 * nearest score), ties by join time. Unknown trust = 50.
 */
export function pickByTrust(entries: QueueCand[], trust: Map<string, number>, size: number, now: Date): string[] {
  const sorted = [...entries].sort((a, b) => a.joinedAt.getTime() - b.joinedAt.getTime());
  if (sorted.length < size) return [];
  const anchor = sorted[0];
  if (now.getTime() - anchor.joinedAt.getTime() >= TRUST_MAX_WAIT_MS) return sorted.slice(0, size).map((e) => e.userId);
  const t = (id: string) => trust.get(id) ?? 50;
  const aT = t(anchor.userId), aB = trustBand(aT);
  const rest = sorted.slice(1).map((e, idx) => ({ e, idx, sameBand: trustBand(t(e.userId)) === aB ? 0 : 1, dist: Math.abs(t(e.userId) - aT), long: now.getTime() - e.joinedAt.getTime() >= TRUST_MAX_WAIT_MS ? 0 : 1 }));
  rest.sort((x, y) => x.long - y.long || x.sameBand - y.sameBand || Math.floor(x.dist / 10) - Math.floor(y.dist / 10) || x.idx - y.idx);
  return [anchor.userId, ...rest.slice(0, size - 1).map((r) => r.e.userId)];
}
