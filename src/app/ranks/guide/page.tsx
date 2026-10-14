import type { Metadata } from "next";
import { RankCodexIndex } from "@/components/rank-codex-index";
import { codexSummaries } from "@/lib/rank-guide";
import { getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.codex.meta.title,
    description: text.codex.meta.description,
  };
}

export default async function RankGuidePage() {
  const text = await getText();
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <RankCodexIndex articles={codexSummaries(text)} text={text.codex.index} />
    </main>
  );
}
