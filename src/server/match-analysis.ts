import type { SubscriptionTier } from "@prisma/client";
import type { MatchAnalysisData } from "@/lib/match-analysis";
import { isPremiumPlan } from "@/server/rank-art";

export type AnalysisAccess = "signed-out" | "locked" | "premium";

export function analysisAccess(user: { subscriptionTier: SubscriptionTier } | null): AnalysisAccess {
  if (!user) return "signed-out";
  return isPremiumPlan(user.subscriptionTier) ? "premium" : "locked";
}

/**
 * Server-gated loader. Returns null for anyone without the stored PREMIUM plan.
 * Demo parsing does not exist yet, so it also returns null for Premium: no stats are invented.
 */
export async function loadMatchAnalysis(user: { id: string; subscriptionTier: SubscriptionTier } | null): Promise<MatchAnalysisData | null> {
  if (analysisAccess(user) !== "premium") return null;
  return null;
}
