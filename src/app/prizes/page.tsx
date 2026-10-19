import type { Metadata } from "next";
import Link from "next/link";
import { ChampionshipLoot } from "@/components/championship-loot";
import { ComingSoon } from "@/components/coming-soon";
import { getUi } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const ui = await getUi();
  return { title: ui.prizes.title, description: ui.prizes.lede };
}

export default async function PrizesPage() {
  const ui = await getUi();
  const copy = ui.prizes;
  const facts = [
    { label: copy.facts.pool, value: null },
    { label: copy.facts.items, value: null },
    { label: copy.facts.delivery, value: null },
    { label: copy.facts.season, value: copy.factValues.season },
  ];
  return (
    <main className="mx-auto w-full max-w-[76rem] px-4 py-14 sm:px-6">
      <p className="text-xs tracking-[0.28em] text-[#FFD76A] uppercase">{copy.kicker}</p>
      <h1 className="mt-2 text-4xl font-semibold">{copy.title}</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#A9ABB3]">{copy.lede}</p>
      <Link href="/rules#s18" className="mt-3 inline-block text-sm text-[#FFD76A] underline underline-offset-4">
        {copy.rulebook}
      </Link>

      <dl className="ace-prize-facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value ?? <ComingSoon label={ui.soon.label} />}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <ChampionshipLoot />
      </div>
    </main>
  );
}
