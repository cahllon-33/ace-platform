import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { RankSystemBoard } from "@/components/rank-system-board";
import { interpolate } from "@/lib/i18n";
import { RANK_TIERS, rankLevelKicker, rankEmblemAsset } from "@/lib/ranks";
import { RANK_DIVISIONS } from "@/lib/site";
import { getText } from "@/server/locale";
import { PremiumProfileCardPreview } from "@/components/premium-profile-card";
import { PremiumRankCodex } from "@/components/premium-rank-codex";
import { RpRulesSection } from "@/components/rp-rules-section";
import { readSessionUser } from "@/server/session";

export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.ranks.meta.title,
    description: text.ranks.meta.description,
  };
}

export default async function RanksPage() {
  await connection();
  const text = await getText();
  const copy = text.ranks;
  let rating: number | null = null;
  try {
    const user = await readSessionUser();
    rating = user?.competitiveRating ?? null;
  } catch {
    rating = null;
  }

  return (
    <main className="mx-auto max-w-[90rem] px-4 py-14 sm:px-6">
      <p className="text-xs tracking-[0.28em] text-[#FFD700]">{copy.hero.kicker}</p>
      <h1 className="mt-2 text-4xl font-semibold">{copy.hero.title}</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#A9ABB3]">
        {interpolate(copy.hero.lede, { divisions: RANK_DIVISIONS.join(", ") })}
      </p>
      <Link className="ace-codex-entry" href="/ranks/guide">
        {copy.codexLink}
      </Link>
      <section className="mt-10" aria-labelledby="standard-ranks">
        <p id="standard-ranks" className="ace-ranks-section-kicker">{copy.premiumRanks.standardKicker}</p>
        <p className="mt-1 text-sm text-[#A9ABB3]">{copy.premiumRanks.standardNote}</p>
        <div className="mt-4">
          <RankSystemBoard liveRating={rating} />
        </div>
      </section>
      <section id="premium" className="ace-premium-ranks" aria-labelledby="premium-ranks-title">
        <div className="ace-premium-ranks-head">
          <p className="ace-ranks-section-kicker">{copy.premiumRanks.kicker}</p>
          <span className="ace-premium-ranks-plan">{copy.premiumRanks.plan}</span>
        </div>
        <h2 id="premium-ranks-title" className="mt-2 text-2xl font-semibold text-white">{copy.premiumRanks.title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#A9ABB3]">{copy.premiumRanks.lede}</p>
        <p className="ace-premium-ranks-note">{copy.premiumRanks.demo}</p>
        <p className="ace-premium-ranks-note">{copy.premiumRanks.locked}</p>
        <PremiumProfileCardPreview text={text} />
        <div className="mt-6">
          <RankSystemBoard liveRating={rating} art="premium" />
        </div>
        <PremiumRankCodex text={text} />
      </section>
      <RpRulesSection text={text} />
      <section className="mt-12 rounded-3xl border border-[#FFD700]/25 bg-[#121212] p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-white">{copy.document.title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#A9ABB3]">{copy.document.body}</p>
        <ol className="mt-6 grid gap-3 md:grid-cols-2">
          {RANK_TIERS.map((tier) => (
            <li key={tier.level} className="ace-tier-row rounded-2xl border border-[#FFD700]/20 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={rankEmblemAsset(tier.level).smSrc} alt="" width={72} height={72} loading="lazy" />
              <div>
              <p className="text-xs tracking-[0.14em] text-[#FFD700]">
                {rankLevelKicker(copy.document.level, tier)}
              </p>
              <p className="mt-1 font-semibold text-[#F5F3EC]">{tier.name}</p>
              <p className="mt-1 text-sm text-[#A9ABB3]">
                {interpolate(copy.document.detail, {
                  rating: tier.minRating,
                  material: copy.tiers[tier.level].material,
                })}
              </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
