import Link from "next/link";
import { PrestigeEmblem } from "@/components/prestige-emblem";
import { interpolate } from "@/lib/i18n";
import { PRESTIGE_LEVELS } from "@/lib/prestige";
import type { Ui } from "@/lib/i18n/ui";
import "./ranks-prestige.css";

/** Public /ranks: the five prestige badges after Legend, Plus platinum and Premium gold fire side by side. */
export function RanksPrestige({ ui }: { ui: Ui }) {
  const t = ui.r45;
  const pr = ui.r41c.pr;
  return (
    <section id="prestige" className="rpx" aria-labelledby="rpx-title">
      <div className="rpx-head">
        <p className="ace-ranks-section-kicker">{pr.kicker}</p>
        <h2 id="rpx-title" className="rpx-title">{t.title}</h2>
        <p className="rpx-lede">{t.lede}</p>
        <div className="rpx-legend" aria-hidden="true">
          <span className="rpx-chip is-plus">{t.plus}</span>
          <span className="rpx-chip is-premium">{t.premium}</span>
        </div>
      </div>
      <ol className="rpx-grid">
        {PRESTIGE_LEVELS.map((p) => (
          <li key={p.slug} data-v3d="prestige" data-slug={p.slug} data-range={interpolate(pr.from, { rp: p.minRp.toLocaleString("en-US") })} title="View in 3D" className={`rpx-card is-l${p.level}`}>
            <p className="rpx-step">{String(p.level).padStart(2, "0")} / 05</p>
            <h3 className="rpx-name">{p.name}</h3>
            <p className="rpx-rp">{interpolate(pr.from, { rp: p.minRp.toLocaleString("en-US") })}</p>
            <div className="rpx-pair">
              <figure className="rpx-fig is-plus" data-v3d-var="plus">
                <PrestigeEmblem badge={{ level: p.level, set: "plus", name: p.name, slug: p.slug }} size={112} label={t.plus} />
                <figcaption>{t.plus}</figcaption>
              </figure>
              <figure className="rpx-fig is-premium" data-v3d-var="premium">
                <PrestigeEmblem badge={{ level: p.level, set: "premium", name: p.name, slug: p.slug }} size={112} label={t.premium} />
                <figcaption>{t.premium}</figcaption>
              </figure>
            </div>
          </li>
        ))}
      </ol>
      <div className="rpx-notes">
        <p className="rpx-note is-fair"><strong>RP</strong> {t.fair}</p>
        <p className="rpx-note">{t.finish}</p>
        <Link href="/badges" className="rpx-link">{t.link} →</Link>
      </div>
    </section>
  );
}
