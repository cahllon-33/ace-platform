import { formatRankLabelWith, RANK_TIERS, rankEmblemAsset } from "@/lib/ranks";
import { getText } from "@/server/locale";

export async function RankEmblem({ level }: { level: number }) {
  const copy = (await getText()).ranks;
  const tier = RANK_TIERS.find((item) => item.level === level) ?? RANK_TIERS[0];
  return (
    <div
      className={`ace-rank-panel relative flex flex-col items-center justify-center px-6 py-8 text-center ${tier.toneClass} ${tier.level === 10 ? "ace-rank-legend" : ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={rankEmblemAsset(tier.level).stillSrc} alt="" className="ace-emblem-hero" width={220} height={220} />
      <p className="text-xs uppercase tracking-[0.22em] text-white/55">{copy.emblem.kicker}</p>
      <p className="mt-2 text-xl font-semibold uppercase tracking-[0.1em] text-white">
        {formatRankLabelWith(copy.emblem.rankLabel, tier.level)}
      </p>
      <p className="mt-1 text-sm text-white/70">{copy.tiers[tier.level].material}</p>
    </div>
  );
}
