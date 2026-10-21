/**
 * Prestige levels inside 2,000–3,000 RP (R41-D, final spec R41c): 2,150 / 2,350 / 2,550 / 2,750 / 2,950.
 * A.C.E. Legend (tier 10) spans 1,950–2,149; A.C.E. Paragon (2,950) is the final badge; RP cap stays 3,000.
 * never affecting matchmaking or rating. Plus and Premium show an animated prestige badge set;
 * Free players keep their normal tier badge plus a text milestone.
 * Names are original A.C.E. names (not taken from any other platform) and are not rank names.
 */
export type PrestigeSet = "plus" | "premium";
export type PrestigeLevel = { level: 1 | 2 | 3 | 4 | 5; name: string; slug: string; minRp: number };

export const PRESTIGE_LEVELS: readonly PrestigeLevel[] = [
  { level: 1, name: "A.C.E. Ascendant", slug: "ascendant", minRp: 2150 },
  { level: 2, name: "A.C.E. Inferno", slug: "inferno", minRp: 2350 },
  { level: 3, name: "A.C.E. Celestial", slug: "celestial", minRp: 2550 },
  { level: 4, name: "A.C.E. Supernova", slug: "supernova", minRp: 2750 },
  { level: 5, name: "A.C.E. Paragon", slug: "paragon", minRp: 2950 },
] as const;

export const PRESTIGE_MIN_RP = PRESTIGE_LEVELS[0].minRp;

export function prestigeForRp(rp: number): PrestigeLevel | null {
  let hit: PrestigeLevel | null = null;
  for (const p of PRESTIGE_LEVELS) if (rp >= p.minRp) hit = p;
  return hit;
}

/** Which badge set a plan shows. FREE gets no set (text milestone only). */
export function prestigeSetFor(plan: string | null | undefined): PrestigeSet | null {
  if (plan === "PREMIUM") return "premium";
  if (plan === "PLUS") return "plus";
  return null;
}

/** The prestige layer to render on a RankOrb, or null. */
export type PrestigeBadge = { level: number; set: PrestigeSet; name: string; slug: string };
export function prestigeBadge(rp: number, plan: string | null | undefined): PrestigeBadge | null {
  const p = prestigeForRp(rp);
  const set = prestigeSetFor(plan);
  return p && set ? { level: p.level, set, name: p.name, slug: p.slug } : null;
}
