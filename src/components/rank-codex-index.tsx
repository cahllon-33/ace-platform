"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { interpolate } from "@/lib/i18n";
import {
  CODEX_CATEGORY,
  type CodexSummary,
  type CodexText,
} from "@/lib/rank-guide";

const PAGE_SIZE = 9;

type IndexText = CodexText["codex"]["index"];

export function RankCodexIndex({
  articles,
  text,
}: {
  articles: CodexSummary[];
  text: IndexText;
}) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const needle = query.trim().toLowerCase().replace(/,/g, "");

  const visible = useMemo(() => {
    if (!needle) return articles;
    return articles.filter((article) => {
      const haystack = article.search.toLowerCase().replace(/,/g, "");
      return haystack.includes(needle);
    });
  }, [articles, needle]);

  return (
    <div className="ace-codex">
      <header className="ace-codex-hero">
        <p className="ace-codex-kicker">{CODEX_CATEGORY}</p>
        <h1>{text.title}</h1>
        <p>{text.lede}</p>
        <p className="ace-codex-status">{text.status}</p>
        <label className="ace-codex-search">
          <span>{text.searchLabel}</span>
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(0);
            }}
            placeholder={text.searchPlaceholder}
            type="search"
          />
        </label>
      </header>

      {visible.length === 0 ? (
        <p className="ace-codex-empty">{text.empty}</p>
      ) : (
        <CodexPages
          articles={visible}
          page={Math.min(page, Math.ceil(visible.length / PAGE_SIZE) - 1)}
          onPage={setPage}
          text={text}
        />
      )}
    </div>
  );
}

function CodexPages({
  articles,
  page,
  onPage,
  text,
}: {
  articles: CodexSummary[];
  page: number;
  onPage: (page: number) => void;
  text: IndexText;
}) {
  const pageCount = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const slice = articles.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const columns = [0, 1, 2].map((column) =>
    slice.filter((_, index) => index % 3 === column),
  );
  const atStart = page <= 0;
  const atEnd = page >= pageCount - 1;

  return (
    <>
      <div className="ace-codex-columns">
        {columns.map((rows, column) => (
          <section key={column} aria-label={interpolate(text.columnLabel, { n: column + 1 })}>
            <p className="ace-codex-kicker">{CODEX_CATEGORY}</p>
            <ul>
              {rows.map((article) => (
                <li key={article.slug}>
                  <Link href={`/ranks/guide/${article.slug}`}>
                    <span>{article.groupTitle}</span>
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <nav className="ace-codex-pager" aria-label={text.pagerLabel}>
        <button type="button" disabled={atStart} onClick={() => onPage(0)}>
          {text.first}
        </button>
        <button type="button" disabled={atStart} onClick={() => onPage(page - 1)}>
          {text.previous}
        </button>
        <p>{interpolate(text.pageOf, { n: page + 1, m: pageCount })}</p>
        <button type="button" disabled={atEnd} onClick={() => onPage(page + 1)}>
          {text.next}
        </button>
        <button type="button" disabled={atEnd} onClick={() => onPage(pageCount - 1)}>
          {text.last}
        </button>
      </nav>
    </>
  );
}
