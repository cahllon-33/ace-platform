import { interpolate } from "@/lib/i18n";
import { rankProgress } from "@/lib/rank-progress";
import { RankNameTokens } from "@/components/rank-name-tokens";
import type { Ui } from "@/lib/i18n/ui";

/** "Your competitive journey": real RP → current division → next division, from the published rank table. */
export function CompetitiveJourney({ rp, ui }: { rp: number; ui: Ui }) {
  const j = ui.r38.journey;
  const divisionLabel = ui.r38.card.division;
  const p = rankProgress(rp);
  return (
    <section className="ace-journey" aria-labelledby="ace-journey-title">
      <header className="ace-journey-head">
        <h2 id="ace-journey-title">{j.title}</h2>
        <p className="ace-journey-rp">
          <span>{j.currentRp}</span>
          <strong>{p.rp.toLocaleString("en-US")} RP</strong>
        </p>
      </header>
      <div className="ace-journey-steps">
        <div>
          <span className="ace-journey-k">{j.current}</span>
          <RankNameTokens level={p.tier.level} division={p.division} divisionLabel={divisionLabel} />
        </div>
        <div className="is-next">
          <span className="ace-journey-k">{j.next}</span>
          {p.next ? (
            <RankNameTokens level={p.next.tier.level} division={p.next.division} divisionLabel={divisionLabel} />
          ) : (
            <span className="ace-journey-top">{j.top}</span>
          )}
        </div>
      </div>
      <div
        className="ace-journey-bar"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={p.percent}
        aria-label={j.title}
      >
        <span style={{ width: `${p.percent}%` }} />
      </div>
      <p className="ace-journey-foot">
        {p.next ? interpolate(j.toGo, { rp: p.rpToNext.toLocaleString("en-US") }) : j.top}
        <span className="ace-journey-basis"> · {j.basis}</span>
      </p>
    </section>
  );
}
