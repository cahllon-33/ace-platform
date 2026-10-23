import type { Metadata } from "next";
import { PlanCards } from "@/components/plan-cards";
import { PlanCompare } from "@/components/plan-compare";
import { LegalDisclaimer } from "@/components/legal-document";
import { Badge } from "@/components/ui/badge";
import { interpolate } from "@/lib/i18n";
import { FREE_PRICE, PLUS_PRICE, PREMIUM_PRICE } from "@/lib/pricing";
import { getText } from "@/server/locale";
import Link from "next/link";
import { PremiumProfileCardPreview } from "@/components/premium-profile-card";

const PRICES = { free: FREE_PRICE, plus: PLUS_PRICE, premium: PREMIUM_PRICE };

export async function generateMetadata(): Promise<Metadata> {
  const text = (await getText()).pricing;
  return {
    title: text.meta.title,
    description: interpolate(text.meta.description, PRICES),
  };
}

export default async function PricingPage() {
  const all = await getText();
  const text = all.pricing;

  return (
    <main className="ace-lobby relative px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="pg41-hero">
        <Badge>{text.hero.badge}</Badge>
        <h1 className="pg41-h1 mt-4">
          {text.hero.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-ace-muted">
          {interpolate(text.hero.lede, PRICES)}
        </p>
        <div className="mt-6 max-w-3xl">
          <LegalDisclaimer />
        </div>
        </header>

        <PlanCompare />

        <div className="mt-12">
          <PlanCards />
        </div>

        <section className="ace-premium-ranks" aria-labelledby="premium-card-preview">
          <div className="ace-premium-ranks-head">
            <p id="premium-card-preview" className="ace-ranks-section-kicker">{text.tiers.premium.name}</p>
            <span className="ace-premium-ranks-plan">{all.ranks.premiumRanks.plan}</span>
          </div>
          <PremiumProfileCardPreview text={all} />
          <Link className="ace-codex-entry" href="/premium-terms">
            {text.premiumExtras.terms.pricingLink}
          </Link>
        </section>

        <section className="mt-14 rounded-3xl border border-[#C9A24A]/30 bg-[#121212] p-6 sm:p-8">
          <p className="text-xs tracking-[0.18em] text-[#C9A24A]">{text.billing.kicker}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{text.billing.title}</h2>
          <p className="mt-4 text-sm leading-7 text-[#A9ABB3]">
            {interpolate(text.billing.body, PRICES)}
          </p>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            <li className="rounded-2xl border border-[#C9A24A]/20 p-4">
              <p className="text-xs tracking-[0.14em] text-[#C9A24A]">{text.billing.display.label}</p>
              <p className="mt-2 text-sm leading-6 text-[#F5F3EC]">
                {interpolate(text.billing.display.body, PRICES)}
              </p>
            </li>
            <li className="rounded-2xl border border-[#C9A24A]/20 p-4">
              <p className="text-xs tracking-[0.14em] text-[#C9A24A]">{text.billing.rolling.label}</p>
              <p className="mt-2 text-sm leading-6 text-[#F5F3EC]">{text.billing.rolling.body}</p>
            </li>
            <li className="rounded-2xl border border-[#C9A24A]/20 p-4">
              <p className="text-xs tracking-[0.14em] text-[#C9A24A]">{text.billing.today.label}</p>
              <p className="mt-2 text-sm leading-6 text-[#F5F3EC]">{text.billing.today.body}</p>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
