import type { Metadata } from "next";
import { CompetitionRulebook } from "@/components/competition-rulebook";

export const metadata: Metadata = {
  title: "Competition Rulebook",
  description:
    "The A.C.E. competition rulebook: eligibility, rosters, map veto, match procedure, pauses, conduct, integrity, disputes, penalties, broadcast, and prizes.",
};

export default function RulesPage() {
  return (
    <main className="px-4 py-14 sm:px-6">
      <CompetitionRulebook />
    </main>
  );
}
