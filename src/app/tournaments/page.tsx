import type { Metadata } from "next";
import { Suspense } from "react";
import { connection } from "next/server";
import { TournamentBracketPreview } from "@/components/tournament-bracket-preview";
import { TournamentLocaleIntro, TournamentLocaleLoading } from "@/components/tournament-locale-intro";
import { TournamentRulebook } from "@/components/tournament-rulebook";
import { getText } from "@/server/locale";
import { listTeamRosters } from "@/server/rosters";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.teams.tournaments.meta.title,
    description: text.teams.tournaments.meta.description,
  };
}

async function TournamentField() {
  await connection();
  const rosters = await listTeamRosters();
  return (
    <TournamentBracketPreview
      teams={rosters.teams.map((team) => team.layout)}
      unavailable={rosters.unavailable}
    />
  );
}

export default function TournamentsPage() {
  return (
    <main className="ace-tourney-arena mx-auto w-full max-w-7xl overflow-x-hidden px-2 py-14">
      <TournamentLocaleIntro />
      <Suspense fallback={<TournamentLocaleLoading />}>
        <TournamentField />
      </Suspense>
      <TournamentRulebook />
    </main>
  );
}
