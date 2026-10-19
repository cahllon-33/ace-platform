import { guardDisplayName } from "@/lib/display-name-guard";
import type { Metadata } from "next";
import { connection } from "next/server";
import { FiveClanGate } from "@/components/five-clan-gate";
import { SquadDesk } from "@/components/squad-desk";
import { SquadWorkspace, TeamsLocaleHero } from "@/components/squad-workspace";
import { padRosterSlots } from "@/lib/squad-workspace";
import { getPrisma } from "@/server/db";
import { getText } from "@/server/locale";
import { listTeamRosters } from "@/server/rosters";
import { readSessionUser } from "@/server/session";

/** Dynamic route: opt out of instant navigation prerender (reads request data). */
export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.teams.meta.title,
    description: text.teams.meta.description,
  };
}

export default async function TeamsPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  await connection();
  const { from } = await searchParams;
  let user = null;
  try {
    user = await readSessionUser();
  } catch {
    user = null;
  }

  let slots = padRosterSlots([]);
  let teamId: string | null = null;
  let teamName: string | null = null;
  let teamTag: string | null = null;
  let isCaptain = false;

  const directory = await listTeamRosters();

  if (user) {
    try {
      const membership = await getPrisma().teamMember.findFirst({
        where: { userId: user.id },
        include: {
          team: { include: { members: { include: { user: true }, orderBy: { joinedAt: "asc" } } } },
        },
      });
      if (membership) {
        teamId = membership.team.id;
        teamName = membership.team.name;
        teamTag = membership.team.tag;
        isCaptain = membership.role === "CAPTAIN";
        slots = padRosterSlots(
          membership.team.members.map((member) => ({
            username: guardDisplayName(member.user.username || member.user.displayName, member.user.steamId),
            rating: member.user.competitiveRating,
            avatarUrl: member.user.avatarUrl,
          })),
        );
      }
    } catch {
      slots = padRosterSlots([]);
    }
  }

  return (
    <main className="ace-squad-page mx-auto w-full max-w-7xl overflow-x-hidden px-4 py-10">
      <TeamsLocaleHero />
      <FiveClanGate
        fromPremium={from === "premium"}
        signedIn={Boolean(user)}
        displayName={user ? guardDisplayName(user.displayName, user.steamId) : null}
        teamName={teamName}
      />
      <SquadWorkspace
        signedIn={Boolean(user)}
        displayName={user ? guardDisplayName(user.displayName, user.steamId) : null}
        teamId={teamId}
        teamName={teamName}
        teamTag={teamTag}
        isCaptain={isCaptain}
        slots={slots}
        rosters={directory.teams.map((team) => ({
          id: team.id,
          name: team.name,
          tag: team.tag,
          slots: team.slots,
        }))}
        agents={directory.agents}
      />
      <SquadDesk />
    </main>
  );
}
