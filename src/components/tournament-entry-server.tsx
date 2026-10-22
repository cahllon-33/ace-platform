import { connection } from "next/server";
import { TournamentEntry, type EntryEvent } from "@/components/tournament-entry";
import { getPrisma } from "@/server/db";
import { readSessionUser } from "@/server/session";

/** Open events (REGISTRATION) with their entry fee; the viewer's captained teams for the paid checkout. */
export async function TournamentEntryServer() {
  await connection();
  let data: { events: EntryEvent[]; teams: { id: string; name: string }[] } | null = null;
  try {
    const prisma = getPrisma();
    const user = await readSessionUser().catch(() => null);
    const [rows, caps] = await Promise.all([
      prisma.tournament.findMany({ where: { status: "REGISTRATION" }, orderBy: { createdAt: "desc" }, take: 20, select: { id: true, name: true, entryFeeCents: true, _count: { select: { entries: true } }, entries: { select: { teamId: true } } } }),
      user ? prisma.teamMember.findMany({ where: { userId: user.id, role: "CAPTAIN" }, select: { team: { select: { id: true, name: true } } } }) : Promise.resolve([]),
    ]);
    const events: EntryEvent[] = rows.map((r) => ({ id: r.id, name: r.name, feeCents: r.entryFeeCents, entries: r._count.entries, registeredTeamIds: r.entries.map((x) => x.teamId) }));
    data = { events, teams: caps.map((c) => c.team) };
  } catch {
    data = null;
  }
  return data ? <TournamentEntry events={data.events} teams={data.teams} /> : null;
}
