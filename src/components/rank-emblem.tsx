import { formatRankLabelWith, RANK_TIERS, rankArtAsset, type RankArt } from "@/lib/ranks";
import { getText } from "@/server/locale";

/** `art` must come from the server gate (effectiveRankArt), never from the client. */
export async function RankEmblem({ level, art = "standard", badgeColor = null }: { level: number; art?: RankArt; badgeColor?: string | null }) {
  const copy = (await getText()).ranks;
  const tier = RANK_TIERS.find((item) => item.level === level) ?? RANK_TIERS[0];
  return (
    <div
      className={`ace-rank-panel relative flex flex-col items-center justify-center px-6 py-8 text-center ${tier.toneClass} ${tier.level === 10 ? "ace-rank-legend" : ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={rankArtAsset(tier.level, art, badgeColor).stillSrc} alt="" className={`ace-emblem-hero${art === "premium" ? " is-illustrated" : ""}`} width={220} height={220} />
      <p className="text-xs uppercase tracking-[0.22em] text-white/55">{copy.emblem.kicker}</p>
      <p className="mt-2 text-xl font-semibold uppercase tracking-[0.1em] text-white">
        {formatRankLabelWith(copy.emblem.rankLabel, tier.level)}
      </p>
      <p className="mt-1 text-sm text-white/70">{copy.tiers[tier.level].material}</p>
    </div>
  );
}
