import type { RankArt as DbRankArt, SubscriptionTier } from "@prisma/client";
import type { RankArt } from "@/lib/ranks";
import { getPrisma } from "@/server/db";

export class PremiumRankArtRequired extends Error {
  constructor() {
    super("Premium rank art requires A.C.E Premium.");
    this.name = "PremiumRankArtRequired";
  }
}

/** True only when the stored plan (read on the server) is PREMIUM. Gates every Premium feature. */
export function isPremiumPlan(tier: SubscriptionTier): boolean {
  return tier === "PREMIUM";
}

/** Only an account whose stored plan is PREMIUM may wear Premium rank art. */
export function canUsePremiumRankArt(tier: SubscriptionTier): boolean {
  return tier === "PREMIUM";
}

/**
 * Read-side gate: a stored PREMIUM choice is ignored unless the plan is still PREMIUM,
 * so a downgrade or an edited row can never show Premium art on a profile.
 */
export function effectiveRankArt(user: { subscriptionTier: SubscriptionTier; rankArt: DbRankArt }): RankArt {
  return user.rankArt === "PREMIUM" && canUsePremiumRankArt(user.subscriptionTier) ? "premium" : "standard";
}

export function parseRankArt(value: unknown): RankArt | null {
  return value === "premium" || value === "standard" ? value : null;
}

/** Write-side gate: re-reads the plan from the database; the client cannot claim Premium. */
export async function setRankArt(userId: string, art: RankArt): Promise<RankArt> {
  const prisma = getPrisma();
  const user = await prisma.user.findUnique({ where: { id: userId }, select: { subscriptionTier: true } });
  if (!user) throw new PremiumRankArtRequired();
  if (art === "premium" && !canUsePremiumRankArt(user.subscriptionTier)) throw new PremiumRankArtRequired();
  await prisma.user.update({ where: { id: userId }, data: { rankArt: art === "premium" ? "PREMIUM" : "STANDARD" } });
  return art;
}
