import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { RankSystemBoard } from "@/components/rank-system-board";
import { interpolate } from "@/lib/i18n";
import { RANK_TIERS } from "@/lib/ranks";
import { RANK_DIVISIONS } from "@/lib/site";
import { getText } from "@/server/locale";
import { readSessionUser } from "@/server/session";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.ranks.meta.title,
    description: text.ranks.meta.description,
  };
}

export default async function RanksPage() {
  await connection();
  const text = await getText();
  const copy = text.ranks;
  let rating: number | null = null;
  try {
    const user = await readSessionUser();
    rating = user?.competitiveRating ?? null;
  } catch {
    rating = null;
  }

  return (
    <main className="mx-auto max-w-[90rem] px-4 py-14 sm:px-6">
      <p className="text-xs tracking-[0.28em] text-[#FFD700]">{copy.hero.kicker}</p>
      <h1 className="mt-2 text-4xl font-semibold">{copy.hero.title}</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#A9ABB3]">
        {interpolate(copy.hero.lede, { divisions: RANK_DIVISIONS.join(", ") })}
      </p>
      <Link className="ace-codex-entry" href="/ranks/guide">
        {copy.codexLink}
      </Link>
      <div className="mt-10">
        <RankSystemBoard liveRating={rating} />
      </div>
      <section className="mt-12 rounded-3xl border border-[#FFD700]/25 bg-[#121212] p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-white">{copy.document.title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#A9ABB3]">{copy.document.body}</p>
        <ol className="mt-6 grid gap-3 md:grid-cols-2">
          {RANK_TIERS.map((tier) => (
            <li key={tier.level} className="rounded-2xl border border-[#FFD700]/20 p-4">
              <p className="text-xs tracking-[0.14em] text-[#FFD700]">
                {interpolate(copy.document.level, { level: tier.level, crystal: tier.crystalName })}
              </p>
              <p className="mt-1 font-semibold text-[#F5F3EC]">{tier.name}</p>
              <p className="mt-1 text-sm text-[#A9ABB3]">
                {interpolate(copy.document.detail, {
                  rating: tier.minRating,
                  material: copy.tiers[tier.level].material,
                })}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
