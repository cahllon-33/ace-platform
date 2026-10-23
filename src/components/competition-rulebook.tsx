import { interpolate } from "@/lib/i18n";
import { getLocaleId, getUi } from "@/server/locale";
import { rulebookFor } from "@/lib/rulebook-i18n";
import { PENALTY_TABLE, RULEBOOK, RULEBOOK_EFFECTIVE, RULEBOOK_VERSION } from "@/lib/rulebook";

export async function CompetitionRulebook() {
  const ui = await getUi();
  const copy = ui.rules;
  const text = rulebookFor(await getLocaleId());
  return (
    <article className="ace-rulebook mx-auto max-w-6xl">
      <header className="ace-rulebook-head pg41-hero">
        <p className="font-mono text-xs tracking-[0.2em] text-[#C9A24A] uppercase">{copy.kicker}</p>
        <h1 className="pg41-h1 mt-4">{copy.title}</h1>
        <p className="mt-3 text-xs tracking-[0.14em] text-[#A9ABB3] uppercase">
          {interpolate(copy.version, { version: RULEBOOK_VERSION, date: RULEBOOK_EFFECTIVE })}
        </p>
        <p className="mt-4 text-sm leading-7 text-[#A9ABB3]">{copy.intro}</p>
        {copy.englishNote ? (
          <p className="mt-3 border-s-2 border-[#C9A24A] ps-3 text-xs leading-6 text-[#C9CAD0]">{copy.englishNote}</p>
        ) : null}
      </header>

      <div className="ace-rulebook-layout">
        <nav className="ace-rulebook-toc" aria-label={copy.contents}>
          <p className="ace-rulebook-toc-title">{copy.contents}</p>
          <ol>
            {RULEBOOK.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  <span>{index + 1}.</span> {copy.sections[index] ?? section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="ace-rulebook-body">
          {RULEBOOK.map((section, index) => {
            const number = index + 1;
            return (
              <section key={section.id} id={section.id} className="ace-rule-section" aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`}>
                  <span>{number}.</span> {copy.sections[index] ?? section.title}
                </h2>
                {section.summary ? <p className="ace-rule-summary">{section.id === "s16" ? text.summary16 : section.summary}</p> : null}
                {section.id === "s16" ? <PenaltyTable labels={copy.penalties} rows={text.penalties} /> : null}
                <ol className="ace-rule-clauses">
                  {section.clauses.map((clause, clauseIndex) => (
                    <li key={`${section.id}-${clauseIndex}`}>
                      <span className="ace-rule-num">
                        {number}.{clauseIndex + 1}
                      </span>
                      <p>
                        {text.clauses[index]?.[clauseIndex] ?? clause.text}
                        {clause.pending ? <span className="ace-rule-pending">{copy.pending}</span> : null}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function PenaltyTable({
  labels,
  rows,
}: {
  labels: { offence: string; first: string; repeat: string; rule: string };
  rows: [string, string, string][];
}) {
  return (
    <div className="ace-penalty-wrap">
      <table className="ace-penalty-table">
        <caption className="sr-only">{labels.offence}</caption>
        <thead>
          <tr>
            <th scope="col">{labels.offence}</th>
            <th scope="col">{labels.first}</th>
            <th scope="col">{labels.repeat}</th>
            <th scope="col">{labels.rule}</th>
          </tr>
        </thead>
        <tbody>
          {PENALTY_TABLE.map((row, i) => (
            <tr key={row.section + i}>
              <th scope="row">{rows[i]?.[0] ?? row.offence}</th>
              <td>{rows[i]?.[1] ?? row.first}</td>
              <td>{rows[i]?.[2] ?? row.repeat}</td>
              <td>{row.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
