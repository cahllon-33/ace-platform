import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { MatchAnalysisView } from "@/components/match-analysis-view";
import { getText } from "@/server/locale";
import { analysisAccess, loadMatchAnalysis } from "@/server/match-analysis";
import { readSessionUser } from "@/server/session";

/** Dynamic route: opt out of instant navigation prerender (reads request data). */
export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const copy = (await getText()).pricing.premiumExtras.analysis;
  return { title: copy.metaTitle, description: copy.metaDescription };
}

export default async function AnalysisPage() {
  await connection();
  const copy = (await getText()).pricing.premiumExtras.analysis;
  let user: Awaited<ReturnType<typeof readSessionUser>> = null;
  try {
    user = await readSessionUser();
  } catch {
    user = null;
  }
  const access = analysisAccess(user);
  const data = await loadMatchAnalysis(user);
  const gate = access === "premium" ? copy.premiumNote : access === "locked" ? copy.locked : copy.signIn;
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs tracking-[0.28em] text-[#FFD76A]">{copy.kicker}</p>
      <h1 className="mt-2 text-4xl font-semibold">{copy.title}</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#A9ABB3]">{copy.lede}</p>
      <p className="ace-analysis-gate">{gate}</p>
      {access !== "premium" ? (
        <Link className="ace-codex-entry" href="/pricing">
          {copy.plansLink}
        </Link>
      ) : null}
      <MatchAnalysisView data={data} labels={copy} />
    </main>
  );
}
