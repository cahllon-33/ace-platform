/**
 * A.C.E Rating Points rules: the ONE config the rating engine reads.
 * Every number published on /ranks and in the rulebook rating chapter comes from here.
 * Paid plans are not an input anywhere: Free, Plus and Premium move by the same rules.
 */
export const RP_RULES = {
  version: "ace-rp-v2",
  /** New accounts: tier 3 (Vanguard / SILVER). */
  startingRating: 1200,
  startingTier: 3,
  floor: 100,
  ceiling: 3000,
  /** Even odds: kFactor x (1 - 0.5) = 25 RP. */
  kFactor: 50,
  scale: 400,
  win: { min: 10, max: 40 },
  loss: { min: 10, max: 40 },
  /** Win gains only. Losses are never reduced. */
  tierWinMultiplier: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 0.8, 8: 0.8, 9: 0.8, 10: 0.7 } as Record<number, number>,
  /** Most kills; ties: more damage, then fewer deaths. Applied only when the server recorded kills. */
  mvpBonus: 3,
  mvpLive: false,
  placementMatches: 10,
  placementMaxTier: 5,
  draw: 0,
  abandonPenalty: 50,
  /** No inactivity decay. */
  decayPerWeek: 0,
} as const;
