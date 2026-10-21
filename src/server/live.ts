import { prisma } from "@/lib/db";
import { parseBroadcastEmbed } from "@/lib/broadcast";

export type LiveFeed = { id: string; title: string; provider: "twitch" | "youtube"; embedUrl: string };
export type UpcomingTournament = { id: string; name: string; status: string; teams: number };

/** Public live data. Only feeds an operator switched on; nothing is inferred or invented. */
export async function loadLive(): Promise<{ feeds: LiveFeed[]; upcoming: UpcomingTournament[] }> {
  try {
    const [rows, tours] = await Promise.all([
      prisma.broadcastFeed.findMany({ where: { isLive: true }, orderBy: { createdAt: "asc" }, take: 4 }),
      prisma.tournament.findMany({
        where: { status: { in: ["REGISTRATION", "LOCKED", "IN_PROGRESS"] } },
        orderBy: { createdAt: "asc" },
        take: 6,
        include: { _count: { select: { entries: true } } },
      }),
    ]);
    const feeds = rows.flatMap((r) => {
      const p = parseBroadcastEmbed(r.embedUrl);
      return p ? [{ id: r.id, title: r.title, ...p }] : [];
    });
    return { feeds, upcoming: tours.map((t) => ({ id: t.id, name: t.name, status: t.status, teams: t._count.entries })) };
  } catch {
    return { feeds: [], upcoming: [] };
  }
}

export function requestHost(h: Headers) {
  return (h.get("x-forwarded-host") ?? h.get("host") ?? "localhost").split(",")[0]!.trim().replace(/:\d+$/, "");
}
