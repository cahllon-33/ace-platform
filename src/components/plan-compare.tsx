import { PLAN_COMPARE_COLUMNS, PLAN_MATRIX, type MatrixCell } from "@/lib/plan-compare";
import { getText } from "@/server/locale";

const COMPARE_CSS = `
.ace-compare { margin-top: 2.5rem; }
.ace-compare-kicker { font-size: 0.68rem; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: #d4af37; }
.ace-compare h2 { margin-top: 0.35rem; font-size: 1.6rem; font-weight: 700; color: #f5f3ec; }
.ace-compare-note { margin-top: 0.45rem; max-width: 46rem; font-size: 0.92rem; line-height: 1.5; color: #a9abb3; }
.ace-compare-scroll { margin-top: 1rem; overflow-x: auto; border: 1px solid rgba(212, 175, 55, 0.28); border-radius: 1rem; background: linear-gradient(180deg,#131315,#0c0c0e); box-shadow: 0 18px 40px rgba(0,0,0,0.45); }
.ace-compare table { width: 100%; min-width: 36rem; border-collapse: collapse; }
.ace-compare th, .ace-compare td { padding: 0.8rem 0.9rem; border-bottom: 1px solid rgba(255,255,255,0.07); text-align: start; vertical-align: middle; }
.ace-compare tbody tr:last-child th, .ace-compare tbody tr:last-child td { border-bottom: 0; }
.ace-compare tbody tr:hover { background: rgba(212, 175, 55,0.03); }
.ace-compare thead th { font-size: 0.74rem; letter-spacing: 0.12em; text-transform: uppercase; color: #a9abb3; background: #121214; }
.ace-compare thead th.ace-compare-col { text-align: center; color: #ffd76a; }
.ace-compare thead th.ace-compare-col strong { display: block; margin-top: 0.2rem; font-size: 1.05rem; letter-spacing: 0; text-transform: none; color: #f5f3ec; }
.ace-compare thead th small { font-size: 0.72rem; color: #a9abb3; }
.ace-compare tbody th { font-size: 0.9rem; font-weight: 600; color: #f5f3ec; }
.ace-compare td { text-align: center; width: 8.5rem; }
.ace-mx-yes { display: inline-grid; place-items: center; width: 1.6rem; height: 1.6rem; border-radius: 999px; background: radial-gradient(circle at 35% 30%, #fff1a8, #d4af37 60%, #8a6a14); box-shadow: 0 0 0 1px rgba(212, 175, 55,0.35), 0 4px 10px rgba(212,175,55,0.25); }
.ace-mx-yes svg { width: 0.95rem; height: 0.95rem; }
.ace-mx-no { display: inline-block; width: 0.9rem; height: 2px; border-radius: 2px; background: #4a4a50; vertical-align: middle; }
.ace-mx-soon { display: inline-flex; flex-direction: column; align-items: center; gap: 0.25rem; }
.ace-mx-soon .ace-mx-yes { opacity: 0.45; }
.ace-mx-tag { font-size: 0.6rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #ffd76a; border: 1px solid rgba(212, 175, 55,0.4); border-radius: 999px; padding: 0.05rem 0.45rem; white-space: nowrap; }
.ace-compare-legend { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 0.75rem; font-size: 0.78rem; color: #a9abb3; align-items: center; }
.ace-compare-legend span { display: inline-flex; align-items: center; gap: 0.4rem; }
.ace-compare-checkout { margin-top: 0.6rem; font-size: 0.8rem; color: #a9abb3; }
`;

function Check() {
  return (
    <span className="ace-mx-yes">
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" fill="none" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export async function PlanCompare() {
  const text = (await getText()).pricing;
  const m = text.matrix;

  function Cell({ value }: { value: MatrixCell }) {
    if (value === "yes") {
      return (
        <>
          <Check />
          <span className="sr-only">{m.included}</span>
        </>
      );
    }
    if (value === "soon") {
      return (
        <span className="ace-mx-soon">
          <Check />
          <span className="ace-mx-tag">{m.soon}</span>
        </span>
      );
    }
    return (
      <>
        <span className="ace-mx-no" aria-hidden="true" />
        <span className="sr-only">{m.notIncluded}</span>
      </>
    );
  }

  return (
    <section className="ace-compare" aria-labelledby="ace-compare-title">
      <style>{COMPARE_CSS}</style>
      <p className="ace-compare-kicker">{m.kicker}</p>
      <h2 id="ace-compare-title">{m.title}</h2>
      <p className="ace-compare-note">{m.note}</p>
      <div className="ace-compare-legend" aria-hidden="true">
        <span><Check /> {m.included}</span>
        <span><span className="ace-mx-no" /> {m.notIncluded}</span>
        <span><span className="ace-mx-tag">{m.soon}</span></span>
      </div>
      <div className="ace-compare-scroll">
        <table>
          <caption className="sr-only">{m.title}</caption>
          <thead>
            <tr>
              <th scope="col">{m.feature}</th>
              {PLAN_COMPARE_COLUMNS.map((column) => (
                <th key={column.id} scope="col" className="ace-compare-col">
                  <span>{text.tiers[column.id].name}</span>
                  <strong>
                    {column.price}
                    {column.monthly ? <small>{text.period.monthly}</small> : null}
                  </strong>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PLAN_MATRIX.map((row) => (
              <tr key={row.id}>
                <th scope="row">{m.rows[row.id]}</th>
                <td><Cell value={row.free} /></td>
                <td><Cell value={row.plus} /></td>
                <td><Cell value={row.premium} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="ace-compare-checkout">{m.checkout}</p>
    </section>
  );
}
