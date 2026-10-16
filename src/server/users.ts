import { RATING_CONFIG } from "@/lib/rating";
import { RP_RULES } from "@/lib/rp-rules";
import { getPrisma } from "@/server/db";
import type { SteamProfile } from "@/server/steam-openid";

/** Fields to write when Steam answered. A placeholder (found === false) never overwrites a stored persona. */
export function steamProfileUpdate(profile: SteamProfile, now = new Date()) {
  if (profile.found === false) return {};
  return {
    username: profile.displayName,
    displayName: profile.displayName,
    avatarUrl: profile.avatarUrl,
    steamProfileUrl: profile.profileUrl ?? "",
    steamSyncedAt: now,
  };
}

export async function upsertSteamUser(steamId: string, profile: SteamProfile) {
  const prisma = getPrisma();
  const synced = profile.found === false ? {} : { steamProfileUrl: profile.profileUrl ?? "", steamSyncedAt: new Date() };
  return prisma.user.upsert({
    where: { steamId },
    create: {
      steamId,
      username: profile.displayName,
      displayName: profile.displayName,
      avatarUrl: profile.avatarUrl,
      ...synced,
      accountStatus: "ACTIVE",
      subscriptionTier: "FREE",
      rankLevel: RP_RULES.startingTier,
      competitiveRating: RATING_CONFIG.startingRating,
      wins: 0,
      losses: 0,
    },
    update: steamProfileUpdate(profile),
  });
}
