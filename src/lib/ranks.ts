import { interpolate } from "@/lib/i18n";

export type RankTier = {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  name: string;
  /** Visual crystal badge label for the lobby strip. Engine name stays `name`. */
  crystalName: string;
  material: string;
  minRating: number;
  /** Template showcase only — not live telemetry. */
  targetWinRate: string;
  mockProgress: number;
  toneClass: string;
};

/** Original A.C.E. ladder. Rank 1 is the default for new Steam-linked accounts. */
export const RANK_TIERS: RankTier[] = [
  {
    level: 1,
    name: "Recruit",
    crystalName: "IRON",
    material: "Raw Iron / Obsidian plate texture",
    minRating: 0,
    targetWinRate: "42%",
    mockProgress: 18,
    toneClass: "ace-rank-tone-1",
  },
  {
    level: 2,
    name: "Operative",
    crystalName: "BRONZE",
    material: "Brushed Bronze crystal core",
    minRating: 1100,
    targetWinRate: "45%",
    mockProgress: 26,
    toneClass: "ace-rank-tone-2",
  },
  {
    level: 3,
    name: "Vanguard",
    crystalName: "SILVER",
    material: "Rose Gold shards with dark deep red undertones",
    minRating: 1200,
    targetWinRate: "48%",
    mockProgress: 34,
    toneClass: "ace-rank-tone-3",
  },
  {
    level: 4,
    name: "Specialist",
    crystalName: "GOLD",
    material: "Chrome Silver diamond shard block",
    minRating: 1300,
    targetWinRate: "50%",
    mockProgress: 42,
    toneClass: "ace-rank-tone-4",
  },
  {
    level: 5,
    name: "Veteran",
    crystalName: "PLATINUM",
    material: "Aged Brass molten core aura",
    minRating: 1400,
    targetWinRate: "52%",
    mockProgress: 50,
    toneClass: "ace-rank-tone-5",
  },
  {
    level: 6,
    name: "Elite",
    crystalName: "DIAMOND",
    material: "Vibrant Gold shard crystal flare",
    minRating: 1500,
    targetWinRate: "54%",
    mockProgress: 58,
    toneClass: "ace-rank-tone-6",
  },
  {
    level: 7,
    name: "Master",
    crystalName: "MASTER",
    material: "Cyan Blue Plasma crystal matrix",
    minRating: 1600,
    targetWinRate: "56%",
    mockProgress: 66,
    toneClass: "ace-rank-tone-7",
  },
  {
    level: 8,
    name: "Grandmaster",
    crystalName: "GRANDMASTER",
    material: "Sapphire Blue hyper-glowing lightning crystal core",
    minRating: 1700,
    targetWinRate: "58%",
    mockProgress: 74,
    toneClass: "ace-rank-tone-8",
  },
  {
    level: 9,
    name: "Sovereign",
    crystalName: "IMMORTAL",
    material: "Deep Cosmic Void Purple stellar shard core",
    minRating: 1800,
    targetWinRate: "60%",
    mockProgress: 82,
    toneClass: "ace-rank-tone-9",
  },
  {
    level: 10,
    name: "A.C.E. Legend",
    crystalName: "ACE ELITE",
    material: "Luxury Molten Radiant Gold Crown framework",
    minRating: 1950,
    targetWinRate: "62%",
    mockProgress: 94,
    toneClass: "ace-rank-tone-10",
  },
];

export function rankFromRating(ratingPoints: number): RankTier {
  let current = RANK_TIERS[0];
  for (const tier of RANK_TIERS) {
    if (ratingPoints >= tier.minRating) {
      current = tier;
    }
  }
  return current;
}

export function formatRankLabel(level: number): string {
  const tier = RANK_TIERS.find((item) => item.level === level) ?? RANK_TIERS[0];
  return `Rank ${tier.level} · ${tier.name}`;
}

/** `template` uses `{level}` and `{name}` placeholders, e.g. `text.ranks.emblem.rankLabel`. */
export function formatRankLabelWith(template: string, level: number): string {
  const tier = RANK_TIERS.find((item) => item.level === level) ?? RANK_TIERS[0];
  return interpolate(template, { level: tier.level, name: tier.name });
}

const EMBLEM_FILES = [
  "01-recruit",
  "02-operative",
  "03-vanguard",
  "04-specialist",
  "05-veteran",
  "06-elite",
  "07-master",
  "08-grandmaster",
  "09-sovereign",
  "10-legend",
] as const;

export type RankEmblemAsset = {
  stillSrc: string;
  heroSrc: string;
  /** Set when a studio GLTF exists. The turntable will load it instead of the still. */
  gltfSrc: string | null;
};

export function rankEmblemAsset(level: number): RankEmblemAsset {
  const file = EMBLEM_FILES[Math.min(9, Math.max(0, level - 1))];
  return {
    // Layered vector emblems (scripts/generate-rank-emblems.mjs): sharp at any size, animated sheen.
    stillSrc: `/ranks/emblems/${file}.svg`,
    heroSrc: `/ranks/emblems/${file}.svg`,
    gltfSrc: null,
  };
}

const RATING_CEILING_DISPLAY = 3000;

export function nextRankCeiling(ratingPoints: number): number {
  const current = rankFromRating(ratingPoints);
  const next = RANK_TIERS.find((tier) => tier.level === current.level + 1);
  return next?.minRating ?? RATING_CEILING_DISPLAY;
}

export type RankDivision = "I" | "II" | "III";

/** Layout-only calibration samples. Not live matchmaking data. */
export function divisionShowcaseMetrics(tier: RankTier, division: RankDivision) {
  const baseWin = Number.parseInt(tier.targetWinRate, 10);
  const next = RANK_TIERS.find((item) => item.level === tier.level + 1);
  const span = Math.max(80, (next?.minRating ?? tier.minRating + 150) - tier.minRating);

  if (division === "III") {
    return {
      winRate: `${Math.max(30, baseWin - 4)}%`,
      ratingTarget: tier.minRating,
      progress: Math.max(6, tier.mockProgress - 20),
    };
  }

  if (division === "II") {
    return {
      winRate: `${baseWin}%`,
      ratingTarget: tier.minRating + Math.round(span * 0.5),
      progress: tier.mockProgress,
    };
  }

  return {
    winRate: `${Math.min(78, baseWin + 5)}%`,
    ratingTarget: next ? next.minRating - 1 : tier.minRating + span,
    progress: Math.min(98, tier.mockProgress + 14),
  };
}
