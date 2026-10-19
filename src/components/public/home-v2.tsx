import Link from "next/link";
import "./home-v2.css";
import type { ReactNode } from "react";
import type { Ui } from "@/lib/i18n/ui";
import { RANK_TIERS, rankEmblemAsset } from "@/lib/ranks";
import { FREE_PRICE, PLUS_PRICE, PREMIUM_PRICE } from "@/lib/pricing";

/**
 * R39 home: one strong hero (display type, two CTAs, four honest facts), then short, clearly separated
 * sections. No invented numbers: every figure here is a published rule or price.
 */
export function HomeHeroV2({ ui, actions, aside, signedIn }: { ui: Ui; actions: ReactNode; aside?: ReactNode; signedIn: boolean }) {
  const h = ui.r39.home;
  const showcase = [3, 6, 10].map((level) => ({ level, tier: RANK_TIERS[level - 1], src: rankEmblemAsset(level).mdSrc }));
  return (
    <section className="h39-hero" aria-labelledby="h39-title">
      <div className="h39-hero-bg" aria-hidden="true" />
      <div className="h39-hero-inner">
        <div className="h39-hero-copy">
          <p className="h39-kicker">
            <span className="h39-kicker-dot" aria-hidden="true" />
            {signedIn ? h.signedInKicker : h.kicker}
          </p>
          <h1 id="h39-title" className="h39-title">
            {h.h1a}
            <br />
            {h.h1b}
            <br />
            <span className="h39-title-gold">{h.h1c}</span>
          </h1>
          <p className="h39-sub">{h.sub}</p>
          <div className="h39-actions">{actions}</div>
        </div>
        <div className="h39-hero-aside">
          {aside ?? (
            <div className="h39-stack" aria-hidden="true">
              {showcase.map(({ level, src }, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={level} src={src} alt="" width={512} height={512} className={`h39-stack-badge is-${i}`} decoding="async" fetchPriority={i === 1 ? "high" : "low"} />
              ))}
              <span className="h39-stack-ring" />
            </div>
          )}
        </div>
      </div>
      <ul className="h39-trust">
        {[h.trust1, h.trust2, h.trust3, h.trust4].map((item) => (
          <li key={item}>
            <svg viewBox="0 0 20 20" aria-hidden="true" width="16" height="16"><path d="M4 10.5 8 14l8-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HomeStepsV2({ ui }: { ui: Ui }) {
  const h = ui.r39.home;
  const steps = [
    [h.step1t, h.step1b],
    [h.step2t, h.step2b],
    [h.step3t, h.step3b],
  ];
  return (
    <section className="h39-section" aria-labelledby="h39-steps">
      <p className="h39-eyebrow">{h.stepsKicker}</p>
      <h2 id="h39-steps" className="h39-h2">{h.stepsTitle}</h2>
      <ol className="h39-steps">
        {steps.map(([t, b], i) => (
          <li key={t}>
            <span className="h39-step-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <h3>{t}</h3>
            <p>{b}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function HomeRanksV2({ ui }: { ui: Ui }) {
  const h = ui.r39.home;
  return (
    <section className="h39-section h39-ranks" aria-labelledby="h39-ranks">
      <div className="h39-split">
        <div>
          <h2 id="h39-ranks" className="h39-h2">{h.ranksTitle}</h2>
          <p className="h39-lede">{h.ranksBody}</p>
        </div>
        <Link href="/ranks" className="h39-link">{h.ranksCta} →</Link>
      </div>
      <ul className="h39-ladder">
        {RANK_TIERS.map((tier) => (
          <li key={tier.level}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={rankEmblemAsset(tier.level).smSrc} alt="" width={96} height={96} loading="lazy" decoding="async" />
            <span className="h39-ladder-n">{tier.level}</span>
            <span className="h39-ladder-name">{tier.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HomePlansV2({ ui }: { ui: Ui }) {
  const h = ui.r39.home;
  const plans = [
    { name: h.free, price: FREE_PRICE, period: "" },
    { name: "A.C.E. Plus", price: PLUS_PRICE, period: h.perMonth },
    { name: "A.C.E. Premium", price: PREMIUM_PRICE, period: h.perMonth },
  ];
  return (
    <section className="h39-section" aria-labelledby="h39-plans">
      <div className="h39-split">
        <div>
          <h2 id="h39-plans" className="h39-h2">{h.plansTitle}</h2>
          <p className="h39-lede">{h.plansBody}</p>
        </div>
        <Link href="/pricing" className="h39-link">{h.plansCta} →</Link>
      </div>
      <ul className="h39-plans">
        {plans.map((p, i) => (
          <li key={p.name} className={i === 2 ? "is-top" : undefined}>
            <span className="h39-plan-name">{p.name}</span>
            <span className="h39-plan-price">
              {p.price}
              <small>{p.period}</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
