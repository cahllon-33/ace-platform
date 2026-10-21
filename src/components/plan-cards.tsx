"use client";

import "./plan-cards.css";
import { RankOrb } from "@/components/rank-orb";
import { PrestigeEmblem } from "@/components/prestige-emblem";
import { PRESTIGE_LEVELS } from "@/lib/prestige";
import { RANK_TIERS } from "@/lib/ranks";

import { FreeAccessPill } from "@/components/free-access-pill";
import { useText } from "@/components/text-provider";
import { useUi } from "@/components/use-ui";
import { interpolate } from "@/lib/interpolate";
import { FREE_PRICE, PLUS_PRICE, PREMIUM_PRICE } from "@/lib/pricing";

const TIERS = [
  { id: "free", price: FREE_PRICE, monthly: false, highlight: false },
  { id: "plus", price: PLUS_PRICE, monthly: true, highlight: false },
  { id: "premium", price: PREMIUM_PRICE, monthly: true, highlight: true },
] as const;

/**
 * R41b plan cards, shared by the home page and /pricing. Price, perks, the badge preview for that plan
 * and an honest CTA (checkout is not live: paid plans say so). Premium = refined gold, Plus = platinum.
 * Paid plans are cosmetic/convenience only; the no-pay-to-win line is part of every paid card.
 */
export function PlanCards({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const all = useText();
  const text = all.pricing;
  const pr = useUi().r41c.pr;
  const soon = text.compare.cells.notConnected;
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const legend = RANK_TIERS[9];
  const top = PRESTIGE_LEVELS[4];
  const first = PRESTIGE_LEVELS[0];

  return (
    <ul className="pc41">
      {TIERS.map((tier) => {
        const copy = text.tiers[tier.id];
        return (
          <li key={tier.id} className={`pc41-card is-${tier.id}`}>
            {tier.highlight ? <span className="pc41-flag">{copy.note}</span> : null}
            <div className="pc41-badge" aria-hidden="true">
              {tier.id === "free" ? (
                <RankOrb level={10} size={104} label={legend.name} />
              ) : (
                <PrestigeEmblem badge={{ ...(tier.id === "premium" ? top : first), set: tier.id }} size={120} label={pr.title} />
              )}
            </div>
            <Heading className="pc41-name">{copy.name}</Heading>
            <p className="pc41-title">{copy.title}</p>
            <p className="pc41-price">
              {tier.price}
              {tier.monthly ? <span>{text.period.monthly}</span> : null}
            </p>
            <ul className="pc41-perks">
              {copy.points.map((point) => <li key={point}>{point}</li>)}
              {tier.id !== "free" ? (
                <li className="is-prestige">
                  {pr.perk} · <a href="/badges">{tier.id === "premium" ? pr.premium : pr.plus}</a>
                </li>
              ) : (
                <li className="is-prestige">{legend.name} · <a href="/badges">{pr.open}</a></li>
              )}
            </ul>
            <div className="pc41-cta">
              {tier.id === "free" ? (
                <FreeAccessPill label={text.card.stayFree} note={text.card.freeNote} />
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="pc41-btn"
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
