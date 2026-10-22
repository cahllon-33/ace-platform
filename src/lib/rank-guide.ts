import { interpolate } from "@/lib/interpolate";
import type { TextBag } from "@/lib/i18n/text";
import { RANK_TIERS, rankEmblemAsset, type RankTier } from "@/lib/ranks";
import { RATING_CONFIG } from "@/lib/rating";

export const CODEX_CATEGORY = "A.C.E";

export type CodexText = Pick<TextBag, "codex" | "ranks">;

export type CodexGroup = "ladder" | "points" | "ranks" | "desk";

export const CODEX_GROUPS: CodexGroup[] = ["ladder", "points", "ranks", "desk"];

/** The article that renders the worked-example table from `nextRating`. */
export const CODEX_WORKED_EXAMPLE_SLUG = "how-points-move";

export type CodexSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type CodexEntry = {
  slug: string;
  group: CodexGroup;
  rankLevel?: RankTier["level"];
};

export type CodexArticle = CodexEntry & {
  title: string;
  lede: string;
  sections: readonly CodexSection[];
};

/** Index card data passed to the client index. `search` holds every translated line of the article. */
export type CodexSummary = {
  slug: string;
  groupTitle: string;
  title: string;
  search: string;
};

type WrittenSlug = keyof CodexText["codex"]["articles"];
type RankSlug = keyof CodexText["codex"]["rankReads"];

const LADDER_AND_POINTS: { slug: WrittenSlug; group: CodexGroup }[] = [
  { slug: "what-a-rank-is", group: "ladder" },
  { slug: "official-name-and-crystal-name", group: "ladder" },
  { slug: "divisions-on-the-board", group: "ladder" },
  { slug: "what-cannot-move-a-rank", group: "ladder" },
  { slug: "what-rating-points-are", group: "points" },
  { slug: "where-a-new-account-starts", group: "points" },
  { slug: "how-points-move", group: "points" },
  { slug: "floor-ceiling-and-a-draw", group: "points" },
];

const MATCH_DESK: { slug: WrittenSlug; group: CodexGroup }[] = [
  { slug: "where-a-match-link-would-appear", group: "desk" },
  { slug: "what-the-ranked-desk-is", group: "desk" },
  { slug: "help-from-the-match-desk", group: "desk" },
  { slug: "waiting-for-ten-players", group: "desk" },
  { slug: "the-captain-on-the-desk", group: "desk" },
  { slug: "when-a-side-is-not-ready", group: "desk" },
  { slug: "entering-the-knockout", group: "desk" },
  { slug: "how-a-roster-is-assembled", group: "desk" },
];

function rankSlug(tier: RankTier): string {
  return `rank-${tier.level}-${tier.name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "")}`;
}

export const CODEX_ENTRIES: CodexEntry[] = [
  ...LADDER_AND_POINTS,
  ...RANK_TIERS.map((tier) => ({
    slug: rankSlug(tier),
    group: "ranks" as const,
    rankLevel: tier.level,
  })),
  ...MATCH_DESK,
];

function formatPoints(value: number): string {
  return value.toLocaleString("en-US");
}

const RATING_VALUES = {
  version: RATING_CONFIG.version,
  startingRating: formatPoints(RATING_CONFIG.startingRating),
  minRating: formatPoints(RATING_CONFIG.minRating),
  maxRating: formatPoints(RATING_CONFIG.maxRating),
};

function band(tier: RankTier): { from: number; to: number; next: number | null } {
  const following = RANK_TIERS.find((item) => item.level === tier.level + 1);
  return {
    from: tier.minRating,
    to: following ? following.minRating - 1 : RATING_CONFIG.maxRating,
    next: following ? following.minRating : null,
  };
}

function rankArticle(entry: CodexEntry, tier: RankTier, text: CodexText): CodexArticle {
  const span = band(tier);
  const read = text.codex.rankReads[entry.slug as RankSlug];
  const copy = text.codex.rankArticle;
  const values = {
    name: tier.name,
    level: tier.level,
    crystal: tier.crystalName,
    from: formatPoints(span.from),
    to: formatPoints(span.to),
    material: text.ranks.tiers[tier.level].material,
  };

  return {
    ...entry,
    title: interpolate(copy.title, values),
    lede: read.stance,
    sections: [
      {
        heading: copy.band.heading,
        paragraphs: [interpolate(copy.band.range, values), read.detail],
      },
      {
        heading: copy.code.heading,
        paragraphs: [
          interpolate(copy.code.hold, values),
          span.next
            ? interpolate(copy.code.gateNext, { next: formatPoints(span.next) })
            : copy.code.gateLast,
          copy.code.record,
          copy.code.emblem,
        ],
      },
      {
        heading: copy.emblem.heading,
        paragraphs: [interpolate(copy.emblem.material, values), copy.emblem.sample],
      },
    ],
  };
}

function resolveArticle(entry: CodexEntry, text: CodexText): CodexArticle {
  const tier = entry.rankLevel
    ? RANK_TIERS.find((item) => item.level === entry.rankLevel)
    : undefined;
  if (tier) return rankArticle(entry, tier, text);

  const written = text.codex.articles[entry.slug as WrittenSlug];
  return {
    ...entry,
    title: written.title,
    lede: written.lede,
    sections: written.sections.map((section) => ({
      heading: section.heading,
      paragraphs: section.paragraphs.map((paragraph) => interpolate(paragraph, RATING_VALUES)),
    })),
  };
}

export function codexArticles(text: CodexText): CodexArticle[] {
  return CODEX_ENTRIES.map((entry) => resolveArticle(entry, text));
}

export function codexArticle(text: CodexText, slug: string): CodexArticle | undefined {
  const entry = CODEX_ENTRIES.find((item) => item.slug === slug);
  return entry ? resolveArticle(entry, text) : undefined;
}

export function codexGroupTitle(text: CodexText, group: CodexGroup): string {
  return text.codex.groups[group].title;
}

export function codexSummaries(text: CodexText): CodexSummary[] {
  return codexArticles(text).map((article) => ({
    slug: article.slug,
    groupTitle: codexGroupTitle(text, article.group),
    title: article.title,
    search: [
      article.title,
      article.lede,
      ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ].join(" "),
  }));
}

export function codexByGroup(articles: CodexArticle[], group: CodexGroup): CodexArticle[] {
  return articles.filter((article) => article.group === group);
}

export function codexNeighbors(
  articles: CodexArticle[],
  slug: string,
): {
  previous: CodexArticle | null;
  next: CodexArticle | null;
} {
  const index = articles.findIndex((article) => article.slug === slug);
  if (index < 0) {
    return { previous: null, next: null };
  }
  return {
    previous: articles[index - 1] ?? null,
    next: articles[index + 1] ?? null,
  };
}

export function codexEmblem(level: number) {
  const tier = RANK_TIERS.find((item) => item.level === level) ?? RANK_TIERS[0];
  return { tier, asset: rankEmblemAsset(tier.level) };
}
