import { prisma } from "@/lib/db";
import {
  PLACEHOLDER_GEAR,
  type LayoutTeam,
} from "@/lib/tournament-layout";
import { padRosterSlots, type FreeAgentView, type SquadSlotView } from "@/lib/squad-workspace";

const ROLES = ["Apex", "Anchor", "Entry", "Support", "Lurk"] as const;

export type TeamRosterCard = {
  id: string;
  name: string;
  tag: string;
  slots: SquadSlotView[];
  layout: LayoutTeam;
};

function winRate(wins: number, losses: number) {
  const played = wins + losses;
  if (played === 0) return "0%";
  return `${Math.round((wins / played) * 100)}%`;
}

export async function listTeamRosters(): Promise<{
  teams: TeamRosterCard[];
  agents: FreeAgentView[];
  unavailable: boolean;
}> {
  try {
    const [teams, agents] = await Promise.all([
      prisma.team.findMany({
        orderBy: { name: "asc" },
        include: {
          captain: true,
          members: {
            include: { user: true },
            orderBy: { joinedAt: "asc" },
          },
        },
      }),
      prisma.user.findMany({
        where: { teamMemberships: { none: {} } },
        orderBy: { competitiveRating: "desc" },
        take: 24,
      }),
    ]);

    return {
      unavailable: false,
      agents: agents.map((user) => ({
        id: user.id,
        username: user.username || user.displayName,
        rankLevel: user.rankLevel,
        rankLabel: `Rank ${user.rankLevel}`,
        kd: `${user.wins}-${user.losses}`,
        rating: user.competitiveRating,
        role: "Support",
      })),
      teams: teams.map((team) => {
        const members = team.members.map((member) => member.user);
        const wins = members.reduce((sum, user) => sum + user.wins, 0);
        const losses = members.reduce((sum, user) => sum + user.losses, 0);
        const tag = team.tag || team.clanTag;
        const slots = padRosterSlots(
          members.map((user) => ({
            username: user.username || user.displayName,
            rating: user.competitiveRating,
            avatarUrl: user.avatarUrl || null,
          })),
        );
        const layout: LayoutTeam = {
          id: team.id,
          tag,
          name: team.name,
          score: 0,
          matchesPlayed: wins + losses,
          winRate: winRate(wins, losses),
          streak: team.activeStreak,
          players: members.slice(0, 5).map((user, index) => ({
            id: user.id,
            username: user.username || user.displayName,
            name: user.displayName || user.username,
            role: ROLES[index] ?? "Player",
            tag,
            level: user.rankLevel,
            matches: user.wins + user.losses,
            winRate: winRate(user.wins, user.losses),
            kd: `${user.wins}-${user.losses}`,
            headshot: "—",
            winStreak: 0,
            wins: user.wins,
            losses: user.losses,
            rating: user.competitiveRating,
            gear: PLACEHOLDER_GEAR,
          })),
        };
        return { id: team.id, name: team.name, tag, slots, layout };
      }),
    };
  } catch {
    return { teams: [], agents: [], unavailable: true };
  }
}
