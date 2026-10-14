export const RATING_CONFIG = {
  version: "ace-elo-v1",
  startingRating: 1000,
  kFactor: 32,
  scale: 400,
  minRating: 100,
  maxRating: 3000,
} as const;

export type MatchScore = 0 | 0.5 | 1;

export function expectedScore(playerRating: number, opponentRating: number): number {
  return 1 / (1 + 10 ** ((opponentRating - playerRating) / RATING_CONFIG.scale));
}

export function nextRating(
  playerRating: number,
  opponentRating: number,
  score: MatchScore,
): number {
  const expected = expectedScore(playerRating, opponentRating);
  const raw = playerRating + RATING_CONFIG.kFactor * (score - expected);
  return Math.round(
    Math.min(RATING_CONFIG.maxRating, Math.max(RATING_CONFIG.minRating, raw)),
  );
}

export function teamAverageRating(ratings: number[]): number {
  if (ratings.length === 0) {
    return RATING_CONFIG.startingRating;
  }
  return ratings.reduce((sum, value) => sum + value, 0) / ratings.length;
}

export function applyTeamMatchRatings(args: {
  winnerRatings: number[];
  loserRatings: number[];
}): { winnerDeltas: number[]; loserDeltas: number[] } {
  const winnerAvg = teamAverageRating(args.winnerRatings);
  const loserAvg = teamAverageRating(args.loserRatings);

  return {
    winnerDeltas: args.winnerRatings.map((rating) => nextRating(rating, loserAvg, 1) - rating),
    loserDeltas: args.loserRatings.map((rating) => nextRating(rating, winnerAvg, 0) - rating),
  };
}
