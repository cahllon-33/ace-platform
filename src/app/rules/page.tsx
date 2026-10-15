import type { Metadata } from "next";
import { getUi } from "@/server/locale";
import { CompetitionRulebook } from "@/components/competition-rulebook";

export async function generateMetadata(): Promise<Metadata> {
  const ui = await getUi();
  return { title: ui.rules.title, description: ui.rules.intro };
}

export default function RulesPage() {
  return (
    <main className="px-4 py-14 sm:px-6">
      <CompetitionRulebook />
    </main>
  );
}
