/**
 * A.C.E Rating Points rules: the ONE config the rating engine reads.
 * Every number published on /ranks and in the rulebook rating chapter comes from here.
 * Paid plans are not an input anywhere: Free, Plus and Premium move by the same rules.
 */
const ACE_RP_V4 = {
  version: "ace-rp-v4",
  /** New accounts: tier 3 (Vanguard / SILVER). */
  startingRating: 1200,
  startingTier: 3,
  floor: 100,
  ceiling: 3000,
  /** Even odds: kFactor x (1 - 0.5) = 15 RP. */
  kFactor: 30,
  scale: 400,
  /** Non-MVP winners: +8..+20. */
  win: { min: 8, max: 20 },
  loss: { min: 8, max: 23 },
  /** Absolute max gain per match, MVP bonus included. Only the MVP can reach it. */
  maxGainWithMvp: 22,
  /** Win gains only. Losses are never reduced. */
  tierWinMultiplier: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 0.8, 8: 0.8, 9: 0.8, 10: 0.7 } as Record<number, number>,
  /** v5 only: symmetric multiplier on wins AND losses. All 1 in v4. */
  tierKMultiplier: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1 } as Record<number, number>,
  /** Most kills; ties: more damage, then fewer deaths. Applied only when the server recorded kills. */
  mvpBonus: 2,
  mvpLive: false,
  placementMatches: 10,
  placementMaxTier: 5,
  /** v5 only: K multiplier during placement. */
  placementKMultiplier: 1,
  draw: 0,
  /** v4: flat penalty. v5: double the normal loss, never less than abandonPenalty. */
  abandonMode: "flat" as "flat" | "double",
  abandonPenalty: 50,
  /** No inactivity decay. */
  decayPerWeek: 0,
};

/**
 * ace-rp-v5 (R41 proposal; NEEDS OWNER APPROVAL before deploy). See /workspace/ace/r41-rp-research.md.
 * Symmetric gains/losses at every tier (50% record holds rank), faster placement, leaver = double loss.
 */
const ACE_RP_V5: typeof ACE_RP_V4 = {
  ...ACE_RP_V4,
  version: "ace-rp-v5",
  /** Even odds: 40 x 0.5 = 20 RP. */
  kFactor: 40,
  win: { min: 10, max: 30 },
  loss: { min: 10, max: 30 },
  maxGainWithMvp: 32,
  tierWinMultiplier: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1 },
  tierKMultiplier: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 0.85, 8: 0.85, 9: 0.85, 10: 0.75 },
  placementKMultiplier: 1.5,
  abandonMode: "double",
  abandonPenalty: 30,
};

/** ONE-LINE SWITCH: set to ACE_RP_V4 to restore the decided v4 rules. */
export const RP_RULES = ACE_RP_V5;
export const RP_RULESETS = { v4: ACE_RP_V4, v5: ACE_RP_V5 } as const;
