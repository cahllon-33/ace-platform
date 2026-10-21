import { RANK_TIERS, rankFromRating } from "@/lib/ranks";
import { RP_RULES } from "@/lib/rp-rules";

/** Kept for pages that print the engine settings. Values come from RP_RULES. */
export const RATING_CONFIG = {
  version: RP_RULES.version,
  startingRating: RP_RULES.startingRating,
  kFactor: RP_RULES.kFactor,
  scale: RP_RULES.scale,
  minRating: RP_RULES.floor,
  maxRating: RP_RULES.ceiling,
} as const;

export type MatchScore = 0 | 0.5 | 1;
export type MatchOutcome = "win" | "loss" | "draw";

export type PlayerMatchInput = {
  rating: number;
  /** Average rating of the other team. */
  opponentAverage: number;
  outcome: MatchOutcome;
  /** Matches already completed before this one (placement = the first RP_RULES.placementMatches). */
  matchesPlayed: number;
  /** Abandoned or left the match. */
  abandoned?: boolean;
  /** Match MVP. Only honoured when the server recorded kills for this match. */
  mvp?: boolean;
  killsRecorded?: boolean;
};

export type PlayerMatchResult = { delta: number; ratingAfter: number; mvpApplied: boolean; placementCapped: boolean };

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function expectedScore(playerRating: number, opponentRating: number): number {
  return 1 / (1 + 10 ** ((opponentRating - playerRating) / RP_RULES.scale));
}

export function tierWinMultiplier(rating: number): number {
  return RP_RULES.tierWinMultiplier[rankFromRating(rating).level] ?? 1;
}

/** Highest rating reachable during placement: one below the floor of the tier above placementMaxTier. */
export function placementCap(): number {
  const next = RANK_TIERS.find((tier) => tier.level === RP_RULES.placementMaxTier + 1);
  return next ? next.minRating - 1 : RP_RULES.ceiling;
}

export function tierKMultiplier(rating: number): number {
  return RP_RULES.tierKMultiplier[rankFromRating(rating).level] ?? 1;
}

function rawLoss(rating: number, opponentAverage: number, k: number) {
  return Math.round(clamp(k * expectedScore(rating, opponentAverage), RP_RULES.loss.min, RP_RULES.loss.max) * tierKMultiplier(rating));
}

export function playerMatchDelta(input: PlayerMatchInput): PlayerMatchResult {
  const { rating } = input;
  let delta: number;
  let mvpApplied = false;
  const placing = input.matchesPlayed < RP_RULES.placementMatches;
  const k = RP_RULES.kFactor * (placing ? RP_RULES.placementKMultiplier : 1);
  if (input.abandoned) {
    delta = RP_RULES.abandonMode === "double"
      ? -Math.max(RP_RULES.abandonPenalty, 2 * rawLoss(rating, input.opponentAverage, k))
      : -RP_RULES.abandonPenalty;
  } else if (input.outcome === "draw") {
    delta = RP_RULES.draw;
  } else {
    const expected = expectedScore(rating, input.opponentAverage);
    const mvp = Boolean(input.mvp && input.killsRecorded);
    if (input.outcome === "win") {
      const base = clamp(k * (1 - expected), RP_RULES.win.min, RP_RULES.win.max);
      delta = Math.round(base * tierWinMultiplier(rating) * tierKMultiplier(rating));
      if (mvp) {
        delta = Math.min(RP_RULES.maxGainWithMvp, delta + RP_RULES.mvpBonus);
        mvpApplied = true;
      }
    } else {
      delta = -rawLoss(rating, input.opponentAverage, k);
      if (mvp) {
        delta = Math.min(-Math.round(RP_RULES.loss.min * tierKMultiplier(rating)), delta + RP_RULES.mvpBonus);
        mvpApplied = true;
      }
    }
  }
  let after = clamp(rating + delta, RP_RULES.floor, RP_RULES.ceiling);
  let placementCapped = false;
  if (placing && after > rating) {
    const cap = Math.max(rating, placementCap());
    if (after > cap) {
      after = cap;
      placementCapped = true;
    }
  }
  return { delta: after - rating, ratingAfter: after, mvpApplied, placementCapped };
}

/** Simple even-format helper used by example tables (no placement, no MVP). */
export function nextRating(playerRating: number, opponentRating: number, score: MatchScore): number {
  const outcome: MatchOutcome = score === 1 ? "win" : score === 0 ? "loss" : "draw";
  return playerMatchDelta({
    rating: playerRating,
    opponentAverage: opponentRating,
    outcome,
    matchesPlayed: RP_RULES.placementMatches,
  }).ratingAfter;
}

export function teamAverageRating(ratings: number[]): number {
  if (ratings.length === 0) {
    return RP_RULES.startingRating;
  }
  return ratings.reduce((sum, value) => sum + value, 0) / ratings.length;
}

type TeamPlayer = { rating: number; matchesPlayed?: number; abandoned?: boolean; mvp?: boolean };

export function applyTeamMatchRatings(args: {
  winnerRatings?: number[];
  loserRatings?: number[];
  winners?: TeamPlayer[];
  losers?: TeamPlayer[];
  killsRecorded?: boolean;
}): { winnerDeltas: number[]; loserDeltas: number[] } {
  const winners = args.winners ?? (args.winnerRatings ?? []).map((rating) => ({ rating }));
  const losers = args.losers ?? (args.loserRatings ?? []).map((rating) => ({ rating }));
  const winnerAvg = teamAverageRating(winners.map((p) => p.rating));
  const loserAvg = teamAverageRating(losers.map((p) => p.rating));
  const run = (p: TeamPlayer, opponentAverage: number, outcome: MatchOutcome) =>
    playerMatchDelta({
      rating: p.rating,
      opponentAverage,
      outcome,
      matchesPlayed: p.matchesPlayed ?? RP_RULES.placementMatches,
      abandoned: p.abandoned,
      mvp: p.mvp,
      killsRecorded: args.killsRecorded,
    }).delta;
  return {
    winnerDeltas: winners.map((p) => run(p, loserAvg, "win")),
    loserDeltas: losers.map((p) => run(p, winnerAvg, "loss")),
  };
}

/** Wins needed at even odds (no losses) to go from one rating to another. Used by the published worked example. */
export function winsToReach(from: number, to: number): { total: number; byMultiplier: { gain: number; wins: number }[] } {
  let rating = from;
  let total = 0;
  const steps = new Map<number, number>();
  while (rating < to && total < 10_000) {
    const { delta, ratingAfter } = playerMatchDelta({
      rating,
      opponentAverage: rating,
      outcome: "win",
      matchesPlayed: RP_RULES.placementMatches,
    });
    steps.set(delta, (steps.get(delta) ?? 0) + 1);
    rating = ratingAfter;
    total += 1;
  }
  return { total, byMultiplier: [...steps.entries()].map(([gain, wins]) => ({ gain, wins })) };
}
