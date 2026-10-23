import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { RankSystemBoard } from "@/components/rank-system-board";
import { getText, getUi } from "@/server/locale";
import { PremiumProfileCardPreview } from "@/components/premium-profile-card";
import { PremiumRankCodex } from "@/components/premium-rank-codex";
import { RanksPrestige } from "@/components/ranks-prestige";
import { RpRulesSection } from "@/components/rp-rules-section";
import { readSessionUser } from "@/server/session";
import { RanksV2 } from "@/components/ranks-v2/ranks-v2";

export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.ranks.meta.title,
    description: text.ranks.meta.description,
  };
}

export default async function RanksPage({ searchParams }: { searchParams: Promise<{ season?: string; region?: string; country?: string }> }) {
  await connection();
  const [text, ui] = await Promise.all([getText(), getUi()]);
  const copy = text.ranks;
  const sp = await searchParams;
  const pick = (v?: string) => (v ?? "").slice(0, 64) || undefined;
  const filters = { season: pick(sp.season), region: pick(sp.region), country: pick(sp.country) };
  let rating: number | null = null;
  let meId: string | null = null;
  try {
    const user = await readSessionUser();
    rating = user?.competitiveRating ?? null;
    meId = user?.id ?? null;
  } catch {
    rating = null;
  }

  return (
    <main className="mx-auto max-w-[90rem] px-4 py-8 sm:px-6">
      <RanksV2 filters={filters} meId={meId} liveRating={rating} />
      <details className="rk2-more">
        <summary>
          <span className="rk2-label">How RP works</span>
          <span className="rk2-more-sub">RP rules, prestige and Premium rank art</span>
          <span className="rk2-more-chev" aria-hidden="true" />
        </summary>
        <div className="rk2-more-body">
          <Link className="ace-codex-entry" href="/ranks/guide">
            {copy.codexLink}
          </Link>
        <RanksPrestige ui={ui} />
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
        <RpRulesSection text={text} ui={ui} />
        <p className="mx-auto max-w-6xl px-4"><a href="/badges" className="font-bold text-[#C9A24A]">{ui.r41c.pr.open} →</a></p>
        </div>
      </details>
    </main>
  );
}
