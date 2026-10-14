import { describe, expect, it } from "vitest";
import { applyTeamMatchRatings, expectedScore, nextRating, RATING_CONFIG } from "@/lib/rating";
import { rankFromRating } from "@/lib/ranks";

describe("rating", () => {
  it("gives 0.5 expected score to equal ratings", () => {
    expect(expectedScore(1500, 1500)).toBe(0.5);
  });

  it("awards the same delta magnitude on a win versus a loss against the same opponent", () => {
    const win = nextRating(1400, 1400, 1);
    const loss = nextRating(1400, 1400, 0);
    expect(win - 1400).toBe(RATING_CONFIG.kFactor / 2);
    expect(1400 - loss).toBe(RATING_CONFIG.kFactor / 2);
  });

  it("never drops below the configured floor", () => {
    expect(nextRating(100, 3000, 0)).toBe(RATING_CONFIG.minRating);
  });

  it("assigns Rank 1 Recruit at the starting rating", () => {
    const rank = rankFromRating(RATING_CONFIG.startingRating);
    expect(rank.level).toBe(1);
    expect(rank.name).toBe("Recruit");
  });

  it("assigns Rank 10 only at the Legend threshold", () => {
    expect(rankFromRating(1949).level).toBe(9);
    expect(rankFromRating(1950).level).toBe(10);
  });

  it("applies team-average opponents so every winner moves the same K-path", () => {
    const result = applyTeamMatchRatings({
      winnerRatings: [1000, 1000],
      loserRatings: [1000, 1000],
    });
    expect(result.winnerDeltas).toEqual([16, 16]);
    expect(result.loserDeltas).toEqual([-16, -16]);
  });
});
