import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RankCodexArticle } from "@/components/rank-codex-article";
import { interpolate } from "@/lib/i18n";
import { CODEX_ENTRIES, codexArticle } from "@/lib/rank-guide";
import { getText } from "@/server/locale";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CODEX_ENTRIES.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const text = await getText();
  const article = codexArticle(text, slug);
  if (!article) {
    return { title: text.codex.meta.title };
  }
  return {
    title: interpolate(text.codex.meta.articleTitle, { title: article.title }),
    description: article.lede,
  };
}

export default async function RankGuideArticlePage({ params }: Props) {
  const { slug } = await params;
  const text = await getText();
  const article = codexArticle(text, slug);
  if (!article) notFound();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <RankCodexArticle article={article} text={text} />
    </main>
  );
}
