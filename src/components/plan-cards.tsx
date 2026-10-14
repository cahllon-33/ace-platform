"use client";

import { EliteSeal } from "@/components/elite-seal";
import { FreeAccessPill } from "@/components/free-access-pill";
import { PremiumReceiptLink } from "@/components/premium-receipt-link";
import { useText } from "@/components/text-provider";
import { Badge } from "@/components/ui/badge";
import { interpolate } from "@/lib/i18n";
import { FREE_PRICE, PLUS_PRICE, PREMIUM_PRICE } from "@/lib/pricing";

const TIERS = [
  { id: "free", price: FREE_PRICE, monthly: false, highlight: false },
  { id: "plus", price: PLUS_PRICE, monthly: true, highlight: false },
  { id: "premium", price: PREMIUM_PRICE, monthly: true, highlight: true },
] as const;

export function PlanCards({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const all = useText();
  const text = all.pricing;
  const disclosure = all.consent.subscriptionDisclosure;
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <ul className="mt-8 grid gap-5 lg:grid-cols-3">
      {TIERS.map((tier) => {
        const copy = text.tiers[tier.id];
        return (
          <li
            key={tier.id}
            className={`ace-card-hover flex flex-col rounded-3xl p-8 ${
              tier.highlight ? "ace-plan-premium" : tier.id === "plus" ? "ace-plan-plus" : "ace-plan-free"
            }`}
          >
            {tier.id !== "free" ? (
              <>
                <EliteSeal floating />
                <p className="mb-4 text-[0.65rem] font-bold tracking-[0.22em] text-[#FFD700]">
                  {text.card.elite}
                </p>
              </>
            ) : null}
            <div className="flex items-center justify-between gap-3">
              <Heading className="text-2xl font-semibold text-white">{copy.name}</Heading>
              <Badge tone={tier.highlight ? "gold" : "muted"}>{copy.note}</Badge>
            </div>
            <p className="gold-text mt-6 text-5xl font-semibold">
              {tier.price}
              {tier.monthly ? (
                <span className="ms-1 text-base font-medium text-ace-muted">{text.period.monthly}</span>
              ) : null}
            </p>
            <p className="mt-4 text-sm font-semibold tracking-wide text-[#FFD700]">{copy.title}</p>
            <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm leading-6">
              {copy.points.map((point) => (
                <li key={point} className="flex gap-3 text-[#C8C4B8]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ace-gold" />
                  {point}
                </li>
              ))}
            </ul>
            {tier.id !== "free" ? (
              <p className="mt-6 border-t border-[#FFD700]/20 pt-4 text-xs leading-6 text-[#A9ABB3]">
                {disclosure}
              </p>
            ) : null}
            <div className="mt-8">
              {tier.id === "free" ? (
                <FreeAccessPill label={text.card.stayFree} note={text.card.freeNote} />
              ) : (
                <PremiumReceiptLink
                  href={tier.id === "plus" ? "/plus/receipt" : "/premium/receipt"}
                  label={interpolate(text.card.choose, { plan: copy.name })}
                  ariaLabel={interpolate(text.card.chooseAria, { plan: copy.name, price: tier.price })}
                />
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
