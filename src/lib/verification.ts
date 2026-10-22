/**
 * A.C.E verified mark. Honest definition — all must hold:
 *  1. a Steam account is linked (steamId present),
 *  2. the account is in good standing (status ACTIVE, i.e. not banned or suspended),
 *  3. an operator completed the manual review (verifiedAt set, audited).
 * The mark's finish follows the plan (silver / platinum / gold); the plan never grants verification.
 */
export type VerifyTier = "free" | "plus" | "premium";

export function isVerified(u: { steamId: string | null; accountStatus: string; verifiedAt: Date | string | null }): boolean {
  return Boolean(u.steamId) && u.accountStatus === "ACTIVE" && u.verifiedAt != null;
}

export function verifyTier(subscriptionTier: string): VerifyTier {
  return subscriptionTier === "PREMIUM" ? "premium" : subscriptionTier === "PLUS" ? "plus" : "free";
}
