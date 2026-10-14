import { getPrisma } from "@/server/db";

/** A signed-in player counts as connected after a page load inside this window. */
export const PRESENCE_WINDOW_MS = 3 * 60 * 1000;
const TOUCH_GAP_MS = 45 * 1000;

export type ConnectedPlayer = {
  id: string;
  displayName: string;
  steamId: string;
};

export type PresenceSnapshot = {
  count: number;
  unavailable: boolean;
  /** `migration` means PostgreSQL is up but `lastSeenAt` has not been added yet. */
  reason: "ok" | "down" | "migration";
  players: ConnectedPlayer[];
};

const DOWN: PresenceSnapshot = { count: 0, unavailable: true, reason: "down", players: [] };

export async function touchPresence(sessionId: string, lastSeenAt: Date) {
  if (Date.now() - lastSeenAt.getTime() < TOUCH_GAP_MS) return;
  try {
    await getPrisma().userSession.update({
      where: { id: sessionId },
      data: { lastSeenAt: new Date() },
    });
  } catch {
    // The column or database may be missing until the presence migration is applied.
  }
}

export async function readPresence(): Promise<PresenceSnapshot> {
  try {
    const now = new Date();
    const since = new Date(now.getTime() - PRESENCE_WINDOW_MS);
    const sessions = await getPrisma().userSession.findMany({
      where: {
        revokedAt: null,
        expiresAt: { gt: now },
        lastSeenAt: { gt: since },
      },
      orderBy: { lastSeenAt: "desc" },
      include: {
        user: {
          select: { id: true, displayName: true, username: true, steamId: true },
        },
      },
    });

    const players: ConnectedPlayer[] = [];
    const seen = new Set<string>();
    for (const session of sessions) {
      if (seen.has(session.userId)) continue;
      seen.add(session.userId);
      const name = session.user.displayName || session.user.username;
      players.push({
        id: session.user.id,
        displayName: name,
        steamId: session.user.steamId ?? "—",
      });
    }

    return { count: players.length, unavailable: false, reason: "ok", players };
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (/lastSeenAt|P2022/i.test(message)) {
      return { count: 0, unavailable: true, reason: "migration", players: [] };
    }
    return DOWN;
  }
}
