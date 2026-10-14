import { RATING_CONFIG } from "@/lib/rating";
import { getPrisma } from "@/server/db";
import type { SteamProfile } from "@/server/steam-openid";

export async function upsertSteamUser(steamId: string, profile: SteamProfile) {
  const prisma = getPrisma();
  return prisma.user.upsert({
    where: { steamId },
    create: {
      steamId,
      username: profile.displayName,
      displayName: profile.displayName,
      avatarUrl: profile.avatarUrl,
      accountStatus: "ACTIVE",
      subscriptionTier: "FREE",
      rankLevel: 1,
      competitiveRating: RATING_CONFIG.startingRating,
      wins: 0,
      losses: 0,
    },
    update: {
      username: profile.displayName,
      displayName: profile.displayName,
      avatarUrl: profile.avatarUrl,
    },
  });
}
