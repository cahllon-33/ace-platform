import type { Metadata } from "next";
import Link from "next/link";
import { ChampionshipLoot } from "@/components/championship-loot";

export const metadata: Metadata = {
  title: "Prizes",
  description:
    "A.C.E. championship prize previews. Concept cards only: no prize pool is funded and no item is held or delivered.",
};

const FACTS = [
  { label: "Prize pool", value: "Not funded" },
  { label: "Items held", value: "None" },
  { label: "Delivery", value: "Not available" },
  { label: "Status", value: "Concept preview" },
] as const;

export default function PrizesPage() {
  return (
    <main className="mx-auto w-full max-w-[76rem] px-4 py-14 sm:px-6">
      <p className="text-xs tracking-[0.28em] text-[#FFD700]">CHAMPIONSHIP PRIZES</p>
      <h1 className="mt-2 text-4xl font-semibold">Prizes</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#A9ABB3]">
        These cards show how a funded championship could reward its winners. Today they are previews only.
        A.C.E. does not hold these items, no prize pool is funded, and nothing on this page can be won,
        bought, or claimed. A prize is announced only after it is funded, under section 18 of the{" "}
        <Link href="/rules" className="text-[#FFD700] underline underline-offset-4">
          competition rulebook
        </Link>
        .
      </p>

      <dl className="ace-prize-facts">
        {FACTS.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <ChampionshipLoot />
      </div>

      <p className="mt-6 text-xs leading-6 text-[#7d7f87]">
        Counter-Strike, CS2, and in-game item names are trademarks of Valve Corporation; A.C.E. is not
        affiliated with or endorsed by Valve, and the card art above is original.
      </p>
    </main>
  );
}
