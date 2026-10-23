import { RP_RULES } from "@/lib/rp-rules";
import { expectedScore, placementCap, playerMatchDelta, tierKMultiplier, tierWinMultiplier, type MatchOutcome } from "@/lib/rating";
import { rankFromRating } from "@/lib/ranks";

/**
 * R53: explain a stored RP change with the live RP rules (server side). Replays playerMatchDelta from
 * the stored before-values so the factors shown are exactly the ones the engine used. `consistent` is
 * false when the replay does not reproduce the stored delta (e.g. an admin override or an older ruleset).
 */
export type RpFactor = { key: "outcome" | "odds" | "placement" | "tier" | "mvp" | "clamp" | "placementCap" | "abandon"; value: number | string };
export type RpExplanation = {
  delta: number; rpBefore: number; rpAfter: number; outcome: MatchOutcome; winChance: number; opponentAverage: number;
  placement: boolean; factors: RpFactor[]; consistent: boolean; version: string;
  rankBefore: number; rankAfter: number; change: "up" | "down" | "same";
};

export function explainRpChange(i: { rpBefore: number; rpAfter: number; opponentAverage: number; outcome: MatchOutcome; matchesPlayed: number; abandoned?: boolean; mvp?: boolean; killsRecorded?: boolean; version?: string }): RpExplanation {
  const placing = i.matchesPlayed < RP_RULES.placementMatches;
  const replay = playerMatchDelta({ rating: i.rpBefore, opponentAverage: i.opponentAverage, outcome: i.outcome, matchesPlayed: i.matchesPlayed, abandoned: i.abandoned, mvp: i.mvp, killsRecorded: i.killsRecorded });
  const winChance = Math.round(expectedScore(i.rpBefore, i.opponentAverage) * 100);
  const factors: RpFactor[] = [{ key: "outcome", value: i.abandoned ? "abandon" : i.outcome }, { key: "odds", value: winChance }];
  if (i.abandoned) factors.push({ key: "abandon", value: RP_RULES.abandonMode });
  if (placing) factors.push({ key: "placement", value: RP_RULES.placementKMultiplier });
  const tm = i.outcome === "win" ? tierWinMultiplier(i.rpBefore) * tierKMultiplier(i.rpBefore) : tierKMultiplier(i.rpBefore);
  if (tm !== 1) factors.push({ key: "tier", value: tm });
  if (replay.mvpApplied) factors.push({ key: "mvp", value: RP_RULES.mvpBonus });
  if (replay.placementCapped) factors.push({ key: "placementCap", value: placementCap() });
  const delta = i.rpAfter - i.rpBefore;
  const rankBefore = rankFromRating(i.rpBefore).level, rankAfter = rankFromRating(i.rpAfter).level;
  return {
    delta, rpBefore: i.rpBefore, rpAfter: i.rpAfter, outcome: i.outcome, winChance, opponentAverage: Math.round(i.opponentAverage), placement: placing, factors,
    consistent: replay.delta === delta && (!i.version || i.version === RP_RULES.version), version: i.version ?? RP_RULES.version,
    rankBefore, rankAfter, change: rankAfter > rankBefore ? "up" : rankAfter < rankBefore ? "down" : "same",
  };
}
