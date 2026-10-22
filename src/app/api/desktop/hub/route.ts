import { connection } from "next/server";
import { readSessionUser } from "@/server/session";
import * as hub from "@/server/desktop-hub";

/** R51 native-screen data for the A.C.E desktop app. ?section=leaderboard|pros|teams|matches|player&id=|me|party|notifications */
export async function GET(request: Request) {
  await connection();
  if (request.headers.get("x-ace-desktop") !== "1") return Response.json({ error: "desktop-only" }, { status: 400 });
  const u = new URL(request.url);
  const section = u.searchParams.get("section") ?? "";
  const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "cache-control": "no-store" } });
  try {
    switch (section) {
      case "leaderboard": return json({ rows: await hub.hubLeaderboard() });
      case "pros": return json({ rows: await hub.hubPros() });
      case "teams": return json({ rows: await hub.hubTeams() });
      case "matches": return json({ rows: await hub.hubMatches() });
      case "player": {
        const id = (u.searchParams.get("id") ?? "").slice(0, 64);
        const p = id ? await hub.hubPlayer(id) : null;
        return p ? json(p) : json({ error: "not-found" }, 404);
      }
      case "me": case "party": case "notifications": {
        const me = await readSessionUser();
        if (!me) return json({ error: "sign-in" }, 401);
        if (section === "me") return json(await hub.hubPlayer(me.id));
        if (section === "party") return json({ rows: await hub.hubParty(me.id) });
        return json({ rows: await hub.hubNotifications(me.id) });
      }
      default: return json({ error: "unknown-section" }, 400);
    }
  } catch {
    return json({ error: "unavailable" }, 503);
  }
}
