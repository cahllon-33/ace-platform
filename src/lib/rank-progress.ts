import { RANK_TIERS, rankFromRating, type RankDivision, type RankTier } from "@/lib/ranks";
import { RP_RULES } from "@/lib/rp-rules";

/**
 * ONE source of truth for a player's displayed rank: the stored RP (competitiveRating), read through the
 * published rank table. The rating engine writes rankLevel from the same function, so the two agree for
 * every recorded result; display code must not read the stored rankLevel directly.
 */
export function rankLevelFromRp(rp: number): RankTier["level"] {
  return rankFromRating(rp).level;
}

export type RankProgress = {
  rp: number;
  tier: RankTier;
  division: RankDivision;
  /** RP floor of the current division. */
  divisionFloor: number;
  /** Next step (same tier next division, or next tier Division III). null at the top. */
  next: { tier: RankTier; division: RankDivision; floor: number } | null;
  rpToNext: number;
  /** 0–100 progress inside the current division. */
  percent: number;
};

/** Division bands: each tier's RP band is split into thirds — III (low), II (middle), I (high). */
function divisionFloors(tier: RankTier): Record<RankDivision, number> {
  const nextTier = RANK_TIERS.find((t) => t.level === tier.level + 1);
  const lo = Math.max(tier.minRating, RP_RULES.floor);
  const hi = nextTier ? nextTier.minRating : RP_RULES.ceiling;
  const span = hi - lo;
  return { III: lo, II: lo + Math.round(span / 3), I: lo + Math.round((2 * span) / 3) };
}

export function rankProgress(rawRp: number): RankProgress {
  const rp = Math.max(RP_RULES.floor, Math.min(RP_RULES.ceiling, Math.round(rawRp)));
  const tier = rankFromRating(rp);
  const floors = divisionFloors(tier);
  const division: RankDivision = rp >= floors.I ? "I" : rp >= floors.II ? "II" : "III";
  const nextTier = RANK_TIERS.find((t) => t.level === tier.level + 1);
  let next: RankProgress["next"] = null;
  if (division === "III") next = { tier, division: "II", floor: floors.II };
  else if (division === "II") next = { tier, division: "I", floor: floors.I };
  else if (nextTier) next = { tier: nextTier, division: "III", floor: divisionFloors(nextTier).III };
  const floor = floors[division];
  const ceiling = next ? next.floor : RP_RULES.ceiling;
  const percent = next ? Math.max(0, Math.min(100, Math.round(((rp - floor) / Math.max(1, ceiling - floor)) * 100))) : 100;
  return { rp, tier, division, divisionFloor: floor, next, rpToNext: next ? Math.max(0, next.floor - rp) : 0, percent };
}
