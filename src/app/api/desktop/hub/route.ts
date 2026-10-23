import { statsAccess } from "@/server/player-stats";
import { connection } from "next/server";
import { readSessionUser } from "@/server/session";
import * as hub from "@/server/desktop-hub";
import * as v2 from "@/server/desktop-v2";
import * as r53 from "@/server/desktop-r53";
import { readIsSteamOwner } from "@/server/admin-gate";
import { getPrisma } from "@/server/db";

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
        const viewer = await readSessionUser();
        if (id && !(await v2.profileReadable(id, viewer?.id ?? null, await readIsSteamOwner()))) return json({ error: "private" }, 403);
        const p = id ? await hub.hubPlayer(id) : null;
        return p ? json(p) : json({ error: "not-found" }, 404);
      }
      // R52 (desktop v2) public sections; personalised when signed in.
      case "arena": case "squads": case "clans": case "clan": case "ladder": case "intel": case "contracts": case "armory": case "news": case "circuit": case "membership": case "search": {
        const me = await readSessionUser();
        const q = (k: string) => (u.searchParams.get(k) ?? "").slice(0, 64) || undefined;
        if (section === "arena") return json(await v2.arena(me?.id ?? null));
        if (section === "squads") return json(await v2.squadFinder(me?.id ?? null, { filter: q("filter"), language: q("language") }));
        if (section === "clans") return json({ rows: await v2.clans({ q: q("q"), region: q("region"), language: q("language") }) });
        if (section === "clan") { const c = await v2.clan(q("id") ?? "", me?.id ?? null); return c ? json(c) : json({ error: "not-found" }, 404); }
        if (section === "ladder") return json(await v2.ladder({ region: q("region"), country: q("country"), period: q("period") }));
        if (section === "intel") {
          const id = q("id") ?? me?.id;
          if (!id) return json({ error: "sign-in" }, 401);
          if (!(await v2.profileReadable(id, me?.id ?? null, await readIsSteamOwner()))) return json({ error: "private" }, 403);
          const r = await v2.intel(id, { range: q("range"), map: q("map"), type: q("type") });
          if (!r) return json({ error: "not-found" }, 404);
          // Rating movement is a PLUS/PREMIUM feature on the site; the desktop app follows the same rule.
          if (statsAccess(me) !== "unlocked") r.rating = { band: [], highest: null, lowest: null, locked: true };
          return json(r);
        }
        if (section === "contracts") return json({ rows: await v2.contracts(me?.id ?? null) });
        if (section === "armory") return json({ rows: await v2.armory(me?.id ?? null) });
        if (section === "news") return json({ rows: await v2.news(20) });
        if (section === "circuit") return json(await v2.circuit(me?.id ?? null));
        if (section === "membership") return json(await v2.membership(me?.id ?? null));
        return json({ rows: await v2.searchPlayers(q("q") ?? "") });
      }
      case "comms": case "thread": {
        const me = await readSessionUser();
        if (!me) return json({ error: "sign-in" }, 401);
        if (section === "comms") return json(await v2.comms(me.id));
        const t = await v2.thread(me.id, (u.searchParams.get("with") ?? "").slice(0, 40));
        return t ? json({ rows: t }) : json({ error: "friends-only" }, 403);
      }
      case "me": case "party": case "notifications": {
        const me = await readSessionUser();
        if (!me) return json({ error: "sign-in" }, 401);
        if (section === "me") return json(await hub.hubPlayer(me.id));
        if (section === "party") return json({ rows: await hub.hubParty(me.id) });
        return json({ rows: await hub.hubNotifications(me.id) });
      }
      // R53 (desktop 1.3.0)
      case "progress": case "privacy": case "session": {
        const me = await readSessionUser();
        if (!me) return json({ error: "sign-in" }, 401);
        if (section === "progress") return json(await r53.progress(me.id));
        if (section === "privacy") return json(await r53.readPrivacy(me.id));
        // Owner flag only decides whether the Command entry is shown; every Command API re-checks on the server.
        const row = await getPrisma().user.findUnique({ where: { id: me.id }, select: { discordId: true, steamId: true } });
        return json({ id: me.id, owner: await readIsSteamOwner(), discordLinked: !!row?.discordId, steamLinked: !!row?.steamId });
      }
      case "dossier": {
        const me = await readSessionUser();
        const id = (u.searchParams.get("id") ?? "").slice(0, 64) || me?.id;
        if (!id) return json({ error: "sign-in" }, 401);
        const d = await r53.dossier(id, me?.id ?? null, await readIsSteamOwner());
        return d ? json(d) : json({ error: "not-found" }, 404);
      }
      default: return json({ error: "unknown-section" }, 400);
    }
  } catch {
    return json({ error: "unavailable" }, 503);
  }
}
