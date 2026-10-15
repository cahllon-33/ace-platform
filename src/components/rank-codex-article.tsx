import Link from "next/link";
import { interpolate } from "@/lib/i18n";
import {
  CODEX_WORKED_EXAMPLE_SLUG,
  codexArticles,
  codexByGroup,
  codexEmblem,
  codexNeighbors,
  type CodexArticle,
  type CodexText,
} from "@/lib/rank-guide";
import { nextRating } from "@/lib/rating";

const EXAMPLES = [
  { you: 1200, them: 1200, score: 1 as const, result: "win" as const },
  { you: 1200, them: 1200, score: 0 as const, result: "loss" as const },
  { you: 1200, them: 1200, score: 0.5 as const, result: "draw" as const },
  { you: 1200, them: 1400, score: 1 as const, result: "win" as const },
  { you: 1200, them: 1400, score: 0 as const, result: "loss" as const },
];

export function RankCodexArticle({ article, text }: { article: CodexArticle; text: CodexText }) {
  const copy = text.codex.article;
  const articles = codexArticles(text);
  const emblem = article.rankLevel ? codexEmblem(article.rankLevel) : null;
  const neighbors = codexNeighbors(articles, article.slug);
  const related = codexByGroup(articles, article.group).filter((item) => item.slug !== article.slug);

  return (
    <article className="ace-codex-article">
      <p className="ace-codex-kicker">
        <Link href="/ranks/guide">{copy.breadcrumb}</Link>
      </p>
      <h1>{article.title}</h1>
      <p className="ace-codex-lede">{article.lede}</p>
      <p className="ace-codex-status">{copy.status}</p>

      <div className="ace-codex-layout">
        <div>
          {emblem ? (
            <figure className="ace-codex-emblem">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={emblem.asset.stillSrc}
                alt={interpolate(copy.emblemAlt, {
                  name: emblem.tier.name,
                  level: emblem.tier.level,
                })}
              />
              <figcaption>
                {interpolate(copy.emblemCaption, {
                  level: emblem.tier.level,
                  name: emblem.tier.name,
                  crystal: emblem.tier.crystalName,
                })}
              </figcaption>
            </figure>
          ) : null}

          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          {article.slug === CODEX_WORKED_EXAMPLE_SLUG ? (
            <section>
              <h2>{copy.examples.heading}</h2>
              <p>{copy.examples.intro}</p>
              <div className="ace-codex-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>{copy.examples.columns.yourPoints}</th>
                      <th>{copy.examples.columns.otherSide}</th>
                      <th>{copy.examples.columns.result}</th>
                      <th>{copy.examples.columns.storedAfter}</th>
                      <th>{copy.examples.columns.change}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EXAMPLES.map((row) => {
                      const after = nextRating(row.you, row.them, row.score);
                      const delta = after - row.you;
                      return (
                        <tr key={`${row.them}-${row.result}`}>
                          <td>{row.you.toLocaleString("en-US")}</td>
                          <td>{row.them.toLocaleString("en-US")}</td>
                          <td>{copy.examples.results[row.result]}</td>
                          <td>{after.toLocaleString("en-US")}</td>
                          <td>{delta > 0 ? `+${delta}` : delta}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}

          <nav className="ace-codex-turn" aria-label={copy.turnLabel}>
            {neighbors.previous ? (
              <Link href={`/ranks/guide/${neighbors.previous.slug}`}>
                <span>{copy.previous}</span>
                {neighbors.previous.title}
              </Link>
            ) : (
              <span />
            )}
            {neighbors.next ? (
              <Link href={`/ranks/guide/${neighbors.next.slug}`}>
                <span>{copy.next}</span>
                {neighbors.next.title}
              </Link>
            ) : null}
          </nav>
        </div>

        <aside>
          <p className="ace-codex-kicker">{copy.alsoIn}</p>
          <ul>
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/ranks/guide/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <p className="ace-codex-aside-foot">
            <Link href="/ranks">{copy.backToBoard}</Link>
          </p>
        </aside>
      </div>
    </article>
  );
}
