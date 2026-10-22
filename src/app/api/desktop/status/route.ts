import { connection } from "next/server";
import { readSessionUser } from "@/server/session";
import { readQueueView } from "@/server/queue-engine";
import { anticheatState } from "@/server/anticheat";

/**
 * R51 desktop app poll (session cookie from the app's webview). Returns only the caller's own state;
 * the server password / steam:// link are present only for that match's players while LIVE (lobbyView rule).
 */
export async function GET(request: Request) {
  await connection();
  if (request.headers.get("x-ace-desktop") !== "1") return Response.json({ error: "desktop-only" }, { status: 400 });
  const user = await readSessionUser().catch(() => null);
  if (!user) return Response.json({ signedIn: false }, { headers: { "cache-control": "no-store" } });
  const [view, ac] = await Promise.all([readQueueView(user.id).catch(() => null), anticheatState(user.id).catch(() => null)]);
  const l = view?.lobby ?? null;
  const me = l?.players.find((p) => p.me);
  return Response.json({
    signedIn: true, name: user.displayName, inQueue: view?.inQueue ?? false,
    lobby: l ? { id: l.id, state: l.state, readyDeadline: l.readyDeadline, accepted: me?.accepted ?? false, map: l.map, steamUrl: l.steamUrl, address: l.address, myTurn: l.myTurn } : null,
    anticheat: ac,
  }, { headers: { "cache-control": "no-store" } });
}
