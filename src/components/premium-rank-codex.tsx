import { interpolate } from "@/lib/i18n";
import { RANK_TIERS, rankLevelKicker, rankIllustratedAsset } from "@/lib/ranks";
import { PremiumCodexPick } from "@/components/premium-codex-pick";
import type { getText } from "@/server/locale";

type Text = Awaited<ReturnType<typeof getText>>;

/** Premium rank codex: the illustrated rank set as a document. Cosmetic only; same RP floors as the standard ladder. */
export function PremiumRankCodex({ text, headingId = "premium-rank-codex" }: { text: Text; headingId?: string }) {
  const copy = text.ranks;
  const codex = copy.premiumCodex;
  return (
    <section className="ace-pcodex" aria-labelledby={headingId}>
      <div className="ace-pcodex-head">
        <p className="ace-ranks-section-kicker">{codex.kicker}</p>
        <span className="ace-premium-ranks-plan">{codex.cosmetic}</span>
      </div>
      <h2 id={headingId} className="mt-2 text-xl font-semibold text-white">{codex.title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#A9ABB3]">{codex.lede}</p>
      <ol className="ace-pcodex-grid">
        {RANK_TIERS.map((tier) => (
          <li key={tier.level} className="ace-pcodex-card">
            <PremiumCodexPick level={tier.level} label={interpolate(copy.board.selectEmblem, { name: tier.name, level: tier.level })}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={rankIllustratedAsset(tier.level).stillSrc}
              alt={interpolate(codex.imgAlt, { name: tier.name, level: tier.level })}
              width={96}
              height={96}
              loading="lazy"
            />
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
            </PremiumCodexPick>
          </li>
        ))}
      </ol>
    </section>
  );
}
