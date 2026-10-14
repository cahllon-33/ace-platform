import { PLAN_COMPARE_COLUMNS, PLAN_COMPARE_ROWS, type PlanCell } from "@/lib/plan-compare";
import { getText } from "@/server/locale";

const COMPARE_CSS = `
.ace-compare { margin-top: 2.5rem; }
.ace-compare-kicker { font-size: 0.68rem; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: #d4af37; }
.ace-compare h2 { margin-top: 0.35rem; font-size: 1.6rem; font-weight: 700; color: #f5f3ec; }
.ace-compare-note { margin-top: 0.45rem; max-width: 42rem; font-size: 0.92rem; line-height: 1.5; color: #a9abb3; }
.ace-compare-scroll { margin-top: 1rem; overflow-x: auto; border: 1px solid rgba(212, 175, 55, 0.28); border-radius: 1rem; background: #0f0f11; }
.ace-compare table { width: 100%; min-width: 44rem; border-collapse: collapse; }
.ace-compare th, .ace-compare td { padding: 0.85rem 0.9rem; border-bottom: 1px solid rgba(255,255,255,0.08); text-align: start; vertical-align: top; }
.ace-compare thead th { font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; color: #ffd700; background: #121214; }
.ace-compare thead th strong { display: block; margin-top: 0.25rem; font-size: 1.05rem; letter-spacing: 0; text-transform: none; color: #f5f3ec; }
.ace-compare thead th small { font-size: 0.75rem; color: #a9abb3; }
.ace-compare tbody th span { display: block; font-size: 0.92rem; font-weight: 700; color: #f5f3ec; }
.ace-compare tbody th small { display: block; margin-top: 0.2rem; font-size: 0.75rem; font-weight: 500; line-height: 1.35; color: #a9abb3; }
.ace-compare td { font-size: 0.82rem; color: #e7e2d6; }
`;

function cell(row: (typeof PLAN_COMPARE_ROWS)[number], id: (typeof PLAN_COMPARE_COLUMNS)[number]["id"]) {
  if (id === "free") return row.free;
  if (id === "plus") return row.plus;
  return row.premium;
}

export async function PlanCompare() {
  const text = (await getText()).pricing;
  const compare = text.compare;

  function cellText(value: PlanCell) {
    return "label" in value ? compare.cells[value.label] : value.value;
  }

  return (
    <section className="ace-compare" aria-labelledby="ace-compare-title">
      <style>{COMPARE_CSS}</style>
      <p className="ace-compare-kicker">{compare.kicker}</p>
      <h2 id="ace-compare-title">{compare.title}</h2>
      <p className="ace-compare-note">{compare.note}</p>
      <div className="ace-compare-scroll">
        <table>
          <caption className="sr-only">{compare.caption}</caption>
          <thead>
            <tr>
              <th scope="col">{compare.includedToday}</th>
              {PLAN_COMPARE_COLUMNS.map((column) => (
                <th key={column.id} scope="col">
                  <span>{compare.columns[column.id]}</span>
                  <strong>
                    {column.price}
                    {column.monthly ? <small>{text.period.monthly}</small> : null}
                  </strong>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PLAN_COMPARE_ROWS.map((row) => (
              <tr key={row.id}>
                <th scope="row">
                  <span>{compare.rows[row.id].feature}</span>
                  <small>{compare.rows[row.id].detail}</small>
                </th>
                {PLAN_COMPARE_COLUMNS.map((column) => (
                  <td key={column.id}>{cellText(cell(row, column.id))}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
