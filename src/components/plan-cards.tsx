"use client";

import { EliteSeal } from "@/components/elite-seal";
import { FreeAccessPill } from "@/components/free-access-pill";
import { ComingSoonPlate } from "@/components/coming-soon-plate";
import { useText } from "@/components/text-provider";
import { useUi } from "@/components/use-ui";
import { Badge } from "@/components/ui/badge";
import { interpolate } from "@/lib/interpolate";
import { FREE_PRICE, PLUS_PRICE, PREMIUM_PRICE } from "@/lib/pricing";

const TIERS = [
  { id: "free", price: FREE_PRICE, monthly: false, highlight: false },
  { id: "plus", price: PLUS_PRICE, monthly: true, highlight: false },
  { id: "premium", price: PREMIUM_PRICE, monthly: true, highlight: true },
] as const;

export function PlanCards({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const all = useText();
  const pr = useUi().r41c.pr;
  const text = all.pricing;
  const soon = text.compare.cells.notConnected;
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
                <p className="mb-4 text-[0.65rem] font-bold tracking-[0.22em] text-[#FFD76A]">
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
            <p className="mt-4 text-sm font-semibold tracking-wide text-[#FFD76A]">{copy.title}</p>
            <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm leading-6">
              {copy.points.map((point) => (
                <li key={point} className="flex gap-3 text-[#C8C4B8]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ace-gold" />
                  {point}
                </li>
              ))}
              {tier.id !== "free" ? (
                <li className="flex gap-3 text-[#C8C4B8]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ace-gold" />
                  <span>{pr.perk} · <a href="/badges" className="text-[#FFD76A] underline-offset-2 hover:underline">{tier.id === "premium" ? pr.premium : pr.plus}</a></span>
                </li>
              ) : null}
            </ul>
            {tier.id !== "free" ? (
              <div className="mt-6 border-t border-[#FFD76A]/20 pt-4">
                <ComingSoonPlate label={soon} size="md" />
              </div>
            ) : null}
            <div className="mt-8">
              {tier.id === "free" ? (
                <FreeAccessPill label={text.card.stayFree} note={text.card.freeNote} />
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="ace-soon-button"
                  aria-label={`${interpolate(text.card.chooseAria, { plan: copy.name, price: tier.price })} · ${soon}`}
                >
                  {soon}
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
