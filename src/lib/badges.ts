import { RANK_TIERS } from "@/lib/ranks";

/**
 * Profile badges. Cosmetic only: no badge changes matchmaking, rating, eligibility, or prizes.
 *
 * - Gold badges are earned from stored player data and appear for every player.
 * - Special badges belong to A.C.E PREMIUM ($7/mo) only. Call this function on the server with
 *   the tier read from the database; never pass a tier that came from the client.
 */
export type BadgeKind = "gold" | "special";

export type PlayerBadge = {
  id: string;
  kind: BadgeKind;
  label: string;
  detail: string;
};

export type BadgeSource = {
  subscriptionTier: string | null | undefined;
  rankLevel: number;
  wins: number;
  losses: number;
  steamLinked: boolean;
};

export const PLACEMENT_MATCHES = 10;

export function isPremiumTier(tier: string | null | undefined): boolean {
  return tier === "PREMIUM";
}

export function goldBadges(source: BadgeSource): PlayerBadge[] {
  const level = Math.min(10, Math.max(1, Math.trunc(source.rankLevel) || 1));
  const tier = RANK_TIERS[level - 1];
  const played = Math.max(0, source.wins) + Math.max(0, source.losses);
  const badges: PlayerBadge[] = [
    {
      id: "rank",
      kind: "gold",
      label: `${tier.crystalName} · R${level}`,
      detail: `Rank ${level} ${tier.name}, from the stored ladder level.`,
    },
  ];
  if (source.steamLinked) {
    badges.push({
      id: "steam",
      kind: "gold",
      label: "STEAM LINKED",
      detail: "Signed in through Steam OpenID.",
    });
  }
  badges.push(
    played >= PLACEMENT_MATCHES
      ? {
          id: "placed",
          kind: "gold",
          label: "PLACED",
          detail: `${played} stored matches. Placement complete.`,
        }
      : {
          id: "placements",
          kind: "gold",
          label: `PLACEMENTS ${played}/${PLACEMENT_MATCHES}`,
          detail: "Placement matches stored so far.",
        },
  );
  if (source.wins >= 1) {
    badges.push({
      id: "first-win",
      kind: "gold",
      label: "FIRST WIN",
      detail: "At least one stored match win.",
    });
  }
  if (source.subscriptionTier === "PLUS") {
    badges.push({ id: "plus", kind: "gold", label: "A.C.E PLUS", detail: "Stored Plus membership." });
  }
  return badges;
}

export function specialBadges(source: Pick<BadgeSource, "subscriptionTier">): PlayerBadge[] {
  if (!isPremiumTier(source.subscriptionTier)) return [];
  return [
    {
      id: "premium",
      kind: "special",
      label: "A.C.E PREMIUM",
      detail: "Stored Premium membership. Cosmetic only.",
    },
    {
      id: "elite-seal",
      kind: "special",
      label: "ELITE SEAL",
      detail: "Premium-only crest. Cosmetic only.",
    },
  ];
}

export function playerBadges(source: BadgeSource): PlayerBadge[] {
  return [...specialBadges(source), ...goldBadges(source)];
}
