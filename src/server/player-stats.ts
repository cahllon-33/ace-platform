import type { RatingPoint } from "@/lib/player-dossier";
import { telemetryUnlocked } from "@/lib/pricing";
import { getPrisma } from "@/server/db";

export type StatsAccess = "signedOut" | "locked" | "unlocked";

export function statsAccess(user: { subscriptionTier: string } | null): StatsAccess {
  if (!user) return "signedOut";
  return telemetryUnlocked(user.subscriptionTier) ? "unlocked" : "locked";
}

/** Real rating movement from stored RatingHistory rows. Only read for PLUS or PREMIUM. */
export async function loadRatingMovement(user: { id: string; subscriptionTier: string } | null): Promise<RatingPoint[] | null> {
  if (statsAccess(user) !== "unlocked" || !user) return null;
  const rows = await getPrisma().ratingHistory.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 30,
    select: { ratingBefore: true, ratingAfter: true },
  });
  if (rows.length === 0) return [];
  const ordered = rows.reverse();
  return [
    { match: 0, rating: ordered[0].ratingBefore },
    ...ordered.map((row, index) => ({ match: index + 1, rating: row.ratingAfter })),
  ];
}
