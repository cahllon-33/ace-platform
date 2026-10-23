import type { Metadata } from "next";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { readIsSteamOwner } from "@/server/admin-gate";
import { loadAnticheatAdmin } from "@/server/anticheat";
import { requireAnticheatNow } from "@/server/anticheat";

export const instant = false;
export const metadata: Metadata = { title: "A.C.E Anti-cheat", robots: { index: false, follow: false } };

/** Owner-only (ACE_ADMIN_STEAM_IDS). Admin chrome is English, like the other owner tools. */
export default async function AdminAnticheatPage() {
  await connection();
  if (!(await readIsSteamOwner())) notFound();
  const data = await loadAnticheatAdmin().catch(() => null);
  const cell = { padding: "6px 10px", borderBottom: "1px solid rgba(255,215,106,0.12)", textAlign: "start" as const, fontSize: 13 };
  return (
    <main className="ace-admin-page" style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <h1 style={{ color: "#FFD76A", fontSize: 24, fontWeight: 700 }}>A.C.E Anti-cheat</h1>
      <p style={{ opacity: 0.75, marginBottom: 16 }}>Queue enforcement (ACE_REQUIRE_ANTICHEAT, owner override in the desktop Command area): <b>{(await requireAnticheatNow()) ? "ON" : "OFF"}</b>. User-mode client only; no kernel driver.</p>
      {!data ? <p>Anti-cheat data is unavailable (migration not applied?).</p> : (
        <>
          <h2 style={{ fontSize: 18, margin: "16px 0 8px" }}>Active clients (last 10 min): {data.sessions.length}</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}><thead><tr>{["Player", "SteamID", "Version", "CS2", "Status", "Last heartbeat"].map((h) => <th key={h} style={cell}>{h}</th>)}</tr></thead>
            <tbody>{data.sessions.map((s) => <tr key={s.id}><td style={cell}>{s.user.displayName}</td><td style={cell}>{s.user.steamId ?? ""}</td><td style={cell}>{s.clientVersion}</td><td style={cell}>{s.cs2Running ? "running" : "-"}</td><td style={cell}>{s.status}</td><td style={cell}>{s.lastHeartbeatAt?.toISOString() ?? ""}</td></tr>)}</tbody></table>
          <h2 style={{ fontSize: 18, margin: "24px 0 8px" }}>Events (latest 200)</h2>
          {data.events.length === 0 ? <p style={{ opacity: 0.7 }}>No events yet.</p> : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}><thead><tr>{["Time (UTC)", "Player", "SteamID", "Kind", "Severity", "Detail"].map((h) => <th key={h} style={cell}>{h}</th>)}</tr></thead>
              <tbody>{data.events.map((e) => <tr key={e.id}><td style={cell}>{e.createdAt.toISOString()}</td><td style={cell}>{e.user.displayName}</td><td style={cell}>{e.user.steamId ?? ""}</td><td style={cell}>{e.kind}</td><td style={cell}>{e.severity}</td><td style={cell}>{e.detail}</td></tr>)}</tbody></table>
          )}
        </>
      )}
    </main>
  );
}
