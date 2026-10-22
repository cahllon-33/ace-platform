import type { Metadata } from "next";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { readIsSteamOwner } from "@/server/admin-gate";
import { getPrisma } from "@/server/db";
import { deleteMission, deleteNews, deleteSeason, saveMission, saveNews, saveSeason, toggleFeatured } from "@/server/desktop-admin";

export const instant = false;
export const metadata: Metadata = { title: "A.C.E Desktop content", robots: { index: false, follow: false } };

const box = { border: "1px solid rgba(255,215,106,0.2)", borderRadius: 8, padding: 12, margin: "8px 0", display: "flex", flexWrap: "wrap" as const, gap: 8, alignItems: "end" };
const inp = { background: "#0d0d10", color: "#eee", border: "1px solid #333", borderRadius: 4, padding: "4px 6px" };
const dt = (x: Date | null) => (x ? x.toISOString().slice(0, 16) : "");
const L = ({ t, children }: { t: string; children: React.ReactNode }) => <label style={{ display: "grid", fontSize: 12, gap: 2 }}>{t}{children}</label>;
const Btn = ({ children }: { children: React.ReactNode }) => <button style={{ ...inp, background: "#FFD76A", color: "#111", fontWeight: 700 }}>{children}</button>;

type P = ReturnType<typeof getPrisma>;
type Mission = Awaited<ReturnType<P["mission"]["findMany"]>>[number];
type Season = Awaited<ReturnType<P["leagueSeason"]["findMany"]>>[number];
type Item = Awaited<ReturnType<P["cosmeticItem"]["findMany"]>>[number];

function MissionForm({ m, items }: { m?: Mission; items: Item[] }) {
  return (
    <form action={saveMission} style={box}>
      {m && <input type="hidden" name="id" value={m.id} />}
      <L t="Title"><input name="title" defaultValue={m?.title} required style={inp} /></L>
      <L t="Description"><input name="description" defaultValue={m?.description} style={{ ...inp, width: 260 }} /></L>
      <L t="Metric"><select name="metric" defaultValue={m?.metric ?? "matches"} style={inp}>{["matches", "wins", "kills", "mvps", "headshots"].map((x) => <option key={x}>{x}</option>)}</select></L>
      <L t="Target"><input name="target" type="number" min={1} defaultValue={m?.target ?? 5} style={{ ...inp, width: 80 }} /></L>
      <L t="Starts (UTC)"><input name="startsAt" type="datetime-local" defaultValue={dt(m?.startsAt ?? null)} required style={inp} /></L>
      <L t="Ends (UTC)"><input name="endsAt" type="datetime-local" defaultValue={dt(m?.endsAt ?? null)} required style={inp} /></L>
      <L t="Cosmetic reward"><select name="rewardItemId" defaultValue={m?.rewardItemId ?? ""} style={inp}><option value="">none</option>{items.map((i) => <option key={i.id} value={i.id}>{i.kind}: {i.name}</option>)}</select></L>
      <L t="Active"><input name="active" type="checkbox" defaultChecked={m?.active ?? true} /></L>
      <Btn>{m ? "Save" : "Create contract"}</Btn>
    </form>
  );
}
function SeasonForm({ x, tours }: { x?: Season; tours: { id: string; name: string }[] }) {
  return (
    <form action={saveSeason} style={box}>
      {x && <input type="hidden" name="id" value={x.id} />}
      <L t="Name"><input name="name" defaultValue={x?.name} required style={inp} /></L>
      <L t="Status"><select name="status" defaultValue={x?.status ?? "DRAFT"} style={inp}>{["DRAFT", "UPCOMING", "REGISTRATION", "REGULAR", "PLAYOFFS", "FINISHED"].map((v) => <option key={v}>{v}</option>)}</select></L>
      <L t="Prize text"><input name="prizeText" defaultValue={x?.prizeText} style={inp} /></L>
      <L t="Tournament"><select name="tournamentId" defaultValue={x?.tournamentId ?? ""} style={inp}><option value="">none</option>{tours.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}</select></L>
      <L t="Description"><textarea name="description" defaultValue={x?.description} style={{ ...inp, width: 360 }} /></L>
      {(["registrationOpensAt", "registrationClosesAt", "regularStartsAt", "regularEndsAt", "playoffsStartsAt", "finalsAt", "nextSeasonAt"] as const).map((k) => (
        <L key={k} t={k + " (UTC)"}><input name={k} type="datetime-local" defaultValue={dt(x?.[k] ?? null)} style={inp} /></L>))}
      <Btn>{x ? "Save" : "Create season"}</Btn>
    </form>
  );
}

/** Owner-only (ACE_ADMIN_STEAM_IDS). English admin chrome. Times are UTC. */
export default async function AdminDesktopPage() {
  await connection();
  if (!(await readIsSteamOwner())) notFound();
  const p = getPrisma();
  const data = await Promise.all([
    p.mission.findMany({ orderBy: { startsAt: "desc" } }), p.newsPost.findMany({ orderBy: { createdAt: "desc" } }), p.leagueSeason.findMany({ orderBy: { createdAt: "desc" } }),
    p.cosmeticItem.findMany({ orderBy: [{ kind: "asc" }, { createdAt: "asc" }] }), p.tournament.findMany({ orderBy: { createdAt: "desc" }, take: 40, select: { id: true, name: true } }),
  ]).catch(() => null);
  if (!data) return <main style={{ padding: 24 }}><p>Desktop content tables are unavailable (migration 20261023020000_desktop_social not applied?).</p></main>;
  const [missions, posts, seasons, items, tours] = data;
  return (
    <main className="ace-admin-page" style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <h1 style={{ color: "#FFD76A", fontSize: 24, fontWeight: 700 }}>A.C.E Desktop content</h1>
      <p style={{ opacity: 0.75 }}>Contracts reward cosmetics only. Nothing here affects gameplay or matchmaking.</p>

      <h2 style={{ fontSize: 18, marginTop: 24 }}>Contracts (missions)</h2>
      <MissionForm items={items} />
      {missions.map((m) => <div key={m.id}><MissionForm m={m} items={items} /><form action={deleteMission}><input type="hidden" name="id" value={m.id} /><button style={inp}>Delete “{m.title}”</button></form></div>)}

      <h2 style={{ fontSize: 18, marginTop: 24 }}>News</h2>
      {[undefined, ...posts].map((n) => (
        <div key={n?.id ?? "new"}>
          <form action={saveNews} style={box}>
            {n && <input type="hidden" name="id" value={n.id} />}
            <L t="Title"><input name="title" defaultValue={n?.title} required style={inp} /></L>
            <L t="Link (https)"><input name="url" defaultValue={n?.url} style={inp} /></L>
            <L t="Body"><textarea name="body" defaultValue={n?.body} style={{ ...inp, width: 400 }} /></L>
            <L t="Published"><input name="published" type="checkbox" defaultChecked={n?.published ?? true} /></L>
            <Btn>{n ? "Save" : "Post news"}</Btn>
          </form>
          {n && <form action={deleteNews}><input type="hidden" name="id" value={n.id} /><button style={inp}>Delete</button></form>}
        </div>))}

      <h2 style={{ fontSize: 18, marginTop: 24 }}>Circuit (league seasons)</h2>
      <SeasonForm tours={tours} />
      {seasons.map((x) => <div key={x.id}><SeasonForm x={x} tours={tours} /><form action={deleteSeason}><input type="hidden" name="id" value={x.id} /><button style={inp}>Delete “{x.name}”</button></form></div>)}

      <h2 style={{ fontSize: 18, marginTop: 24 }}>Armory weekly deals (featured items)</h2>
      {items.length === 0 ? <p style={{ opacity: 0.7 }}>No cosmetics yet. Add them in /admin/commerce.</p> :
        items.map((i) => (
          <form key={i.id} action={toggleFeatured} style={{ ...box, margin: "4px 0" }}>
            <input type="hidden" name="id" value={i.id} />
            <span style={{ minWidth: 300 }}>{i.kind} · {i.name} · ${(i.priceCents / 100).toFixed(2)}</span>
            <Btn>{i.featured ? "★ Featured (remove)" : "Feature this week"}</Btn>
          </form>))}
    </main>
  );
}
