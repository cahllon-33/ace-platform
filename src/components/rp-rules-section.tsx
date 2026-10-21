import { interpolate } from "@/lib/i18n";
import { nextRating, placementCap, winsToReach } from "@/lib/rating";
import { RANK_TIERS, rankLabelParts } from "@/lib/ranks";
import { RP_RULES } from "@/lib/rp-rules";
import type { getText, getUi } from "@/server/locale";

type Text = Awaited<ReturnType<typeof getText>>;
type Ui = Awaited<ReturnType<typeof getUi>>;

const fmt = (n: number) => n.toLocaleString("en-US");
const tier = (level: number) => RANK_TIERS.find((t) => t.level === level) ?? RANK_TIERS[0];
const label = (level: number) => [...rankLabelParts(tier(level))].reverse().join(" / ");

/** A.C.E Rating Points rules. Every number is read from RP_RULES or computed by the same engine that applies results. */
export function RpRulesSection({ text, ui }: { text: Text; ui: Ui }) {
  const v5 = RP_RULES.version === "ace-rp-v5";
  // v5 rewords only the rules that changed; v4 keeps its original strings (one-line switch in rp-rules.ts).
  const copy = v5 ? { ...text.ranks.rpRules, ...ui.r41c.v5 } : text.ranks.rpRules;
  const top = RANK_TIERS[RANK_TIERS.length - 1];
  const climb = winsToReach(RP_RULES.startingRating, top.minRating);
  const [early, late] = climb.byMultiplier;
  const delta = (them: number, score: 0 | 1, you = 1300) => nextRating(you, them, score) - you;
  const v = {
    version: RP_RULES.version,
    start: fmt(RP_RULES.startingRating),
    tier: label(RP_RULES.startingTier),
    win: delta(1300, 1),
    loss: -delta(1300, 0),
    scale: RP_RULES.scale,
    winMin: RP_RULES.win.min,
    winMax: `${RP_RULES.win.max} (MVP +${RP_RULES.maxGainWithMvp})`,
    lossMin: RP_RULES.loss.min,
    lossMax: RP_RULES.loss.max,
    t7: v5 ? RP_RULES.tierKMultiplier[7] : RP_RULES.tierWinMultiplier[7],
    t10: v5 ? RP_RULES.tierKMultiplier[10] : RP_RULES.tierWinMultiplier[10],
    pk: RP_RULES.placementKMultiplier,
    loss7: -delta(1700, 0, 1700),
    top: label(10),
    mvp: RP_RULES.mvpBonus,
    n: RP_RULES.placementMatches,
    maxTier: RP_RULES.placementMaxTier,
    cap: fmt(placementCap()),
    abandon: RP_RULES.abandonPenalty,
    floor: fmt(RP_RULES.floor),
    ceiling: fmt(RP_RULES.ceiling),
    elite: fmt(top.minRating),
    w1: early?.wins ?? 0,
    w2: late?.wins ?? 0,
    win7: late?.gain ?? 0,
    total: climb.total,
    breakEven: Math.ceil((100 * (-delta(1700, 0, 1700))) / (delta(1700, 1, 1700) - delta(1700, 0, 1700))),
    strongWin: delta(1500, 1),
    strongLoss: -delta(1500, 0),
    weakWin: delta(1100, 1),
    weakLoss: -delta(1100, 0),
  };
  const rows: [string, string][] = [
    [copy.rStart, copy.vStart],
    [copy.rWin, copy.vWin],
    [copy.rLoss, copy.vLoss],
    [copy.rOdds, copy.vOdds],
    [copy.rClamp, copy.vClamp],
    [copy.rTier, copy.vTier],
    [copy.rMvp, copy.vMvp],
    [copy.rPlacement, copy.vPlacement],
    [copy.rDraw, copy.vDraw],
    [copy.rAbandon, copy.vAbandon],
    [copy.rLimits, copy.vLimits],
    [copy.rDecay, copy.vDecay],
    [copy.rPaid, copy.vPaid],
  ];
  const examples = [copy.ex1, copy.ex2, copy.ex3, copy.ex4];

  return (
    <section id="rp-rules" className="ace-rp-rules" aria-labelledby="rp-rules-title">
      <p className="ace-ranks-section-kicker">{copy.kicker}</p>
      <h2 id="rp-rules-title" className="mt-2 text-2xl font-semibold text-white">{copy.title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#A9ABB3]">{interpolate(copy.lede, v)}</p>
      <div className="ace-rp-grid">
        <div className="ace-rp-card">
          <h3>{copy.tableTitle}</h3>
          <table className="ace-rp-table">
            <thead>
              <tr><th scope="col">{copy.colRule}</th><th scope="col">{copy.colValue}</th></tr>
            </thead>
            <tbody>
              {rows.map(([rule, value]) => (
                <tr key={rule}><th scope="row">{rule}</th><td>{interpolate(value, v)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ace-rp-card">
          <h3>{copy.tierTableTitle}</h3>
          <table className="ace-rp-table is-numeric">
            <thead>
              <tr>
                <th scope="col">{copy.colTier}</th>
                <th scope="col">{copy.colFloor}</th>
                <th scope="col">{copy.colWin}</th>
                <th scope="col">{copy.colLoss}</th>
              </tr>
            </thead>
            <tbody>
              {RANK_TIERS.map((t) => {
                const from = Math.max(t.minRating, RP_RULES.floor);
                // Sample a rating inside the band, clear of the floor clamp.
                const at = Math.max(t.minRating + 10, RP_RULES.floor + 100);
                return (
                  <tr key={t.level} className={t.level === RP_RULES.startingTier ? "is-start" : undefined}>
                    <th scope="row">{t.level} · {label(t.level)}</th>
                    <td>{fmt(from)}</td>
                    <td>+{nextRating(at, at, 1) - at}</td>
                    <td>{nextRating(at, at, 0) - at}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h3 className="mt-6">{copy.examplesTitle}</h3>
          <ol className="ace-rp-examples">
            {examples.map((example, index) => (
              <li key={index}>{interpolate(example, v)}</li>
            ))}
          </ol>
          <p className="ace-rp-note">{copy.note}</p>
        </div>
      </div>
    </section>
  );
}
