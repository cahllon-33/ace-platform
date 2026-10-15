import { PENALTY_TABLE, RULEBOOK, RULEBOOK_EFFECTIVE, RULEBOOK_VERSION } from "@/lib/rulebook";

export function CompetitionRulebook() {
  return (
    <article className="ace-rulebook mx-auto max-w-6xl">
      <header className="ace-rulebook-head">
        <p className="font-mono text-xs tracking-[0.2em] text-[#FFD700]">A.C.E. COMPETITION RULEBOOK</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#FFD700]">Competition rules</h1>
        <p className="mt-3 text-xs tracking-[0.14em] text-[#A9ABB3]">
          VERSION {RULEBOOK_VERSION} · EFFECTIVE {RULEBOOK_EFFECTIVE.toUpperCase()}
        </p>
        <p className="mt-4 text-sm leading-7 text-[#A9ABB3]">
          The rules every A.C.E. competition is played under. Clauses marked{" "}
          <span className="ace-rule-pending">Applies once deployed</span> depend on systems that are not live
          yet, such as match servers or the anti-cheat client, and take effect when those systems launch.
        </p>
      </header>

      <div className="ace-rulebook-layout">
        <nav className="ace-rulebook-toc" aria-label="Rulebook contents">
          <p className="ace-rulebook-toc-title">Contents</p>
          <ol>
            {RULEBOOK.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  <span>{index + 1}.</span> {section.title}
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
                  <span>{number}.</span> {section.title}
                </h2>
                {section.summary ? <p className="ace-rule-summary">{section.summary}</p> : null}
                {section.id === "s16" ? <PenaltyTable /> : null}
                <ol className="ace-rule-clauses">
                  {section.clauses.map((clause, clauseIndex) => (
                    <li key={clause.text}>
                      <span className="ace-rule-num">
                        {number}.{clauseIndex + 1}
                      </span>
                      <p>
                        {clause.text}
                        {clause.pending ? <span className="ace-rule-pending">Applies once deployed</span> : null}
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

function PenaltyTable() {
  return (
    <div className="ace-penalty-wrap">
      <table className="ace-penalty-table">
        <caption className="sr-only">Penalty guidelines</caption>
        <thead>
          <tr>
            <th scope="col">Offence</th>
            <th scope="col">First offence</th>
            <th scope="col">Repeat offence</th>
            <th scope="col">Rule</th>
          </tr>
        </thead>
        <tbody>
          {PENALTY_TABLE.map((row) => (
            <tr key={row.offence}>
              <th scope="row">{row.offence}</th>
              <td>{row.first}</td>
              <td>{row.repeat}</td>
              <td>{row.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
