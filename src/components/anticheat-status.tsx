import Image from "next/image";
import Link from "next/link";
import { readSessionUser } from "@/server/session";
import { getPrisma } from "@/server/db";
import "./anticheat-status.css";

type State = { kind: "signed-out" } | { kind: "banned" } | { kind: "active"; at: Date; version: string } | { kind: "inactive"; at: Date | null };

/** Active = the signed-in player's A.C.E app sent a valid heartbeat in the last 2 minutes (interval is 15 s). */
async function readState(): Promise<State | null> {
  const me = await readSessionUser().catch(() => null);
  if (!me) return { kind: "signed-out" };
  try {
    const p = getPrisma();
    const [u, s] = await Promise.all([
      p.user.findUnique({ where: { id: me.id }, select: { accountStatus: true } }),
      p.anticheatSession.findFirst({ where: { userId: me.id, revokedAt: null }, orderBy: { lastHeartbeatAt: { sort: "desc", nulls: "last" } }, select: { lastHeartbeatAt: true, clientVersion: true } }),
    ]);
    if (u?.accountStatus === "BANNED") return { kind: "banned" };
    const at = s?.lastHeartbeatAt ?? null;
    if (at && Date.now() - at.getTime() < 120_000) return { kind: "active", at, version: s?.clientVersion ?? "" };
    return { kind: "inactive", at };
  } catch {
    return null;
  }
}

/** R62 player-facing anti-cheat status card (English only). */
export async function AnticheatStatus() {
  const st = await readState();
  const dot = st?.kind === "active" ? "on" : st?.kind === "banned" ? "off" : st?.kind === "inactive" ? "off" : "idle";
  const label = !st ? "Status unavailable" : st.kind === "active" ? "Anti-cheat is ACTIVE" : st.kind === "banned" ? "Account permanently banned" : st.kind === "inactive" ? "Anti-cheat is NOT active" : "Sign in to see your status";
  return (
    <section className="acs62" aria-labelledby="acs62-h">
      <div className="acs62-head">
        <Image src="/images/ace-entrance-logo.jpg" alt="A.C.E" width={64} height={64} className="acs62-logo" />
        <div>
          <p className="acs62-kicker">A.C.E ANTI-CHEAT</p>
          <h2 id="acs62-h" className="acs62-label"><i className={`acs62-dot is-${dot}`} aria-hidden="true" />{label}</h2>
          <p className="acs62-sub">
            {st?.kind === "active" ? `Last heartbeat ${st.at.toISOString().slice(11, 19)} UTC${st.version ? ` · app ${st.version}` : ""}` :
              st?.kind === "inactive" ? (st.at ? `Last seen ${st.at.toISOString().slice(0, 16).replace("T", " ")} UTC. Open the A.C.E app and activate anti-cheat.` : "No A.C.E app has connected for this account yet.") :
              st?.kind === "signed-out" ? "Anti-cheat runs in the A.C.E desktop app for Windows." : st?.kind === "banned" ? "This account and its hardware are banned from A.C.E matches." : ""}
          </p>
        </div>
        <div className="acs62-cta">
          {st?.kind !== "banned" ? <a href="ace://anti-cheat" className="acs62-btn">{st?.kind === "active" ? "Open in app" : "Activate"}</a> : null}
          <Link href="/download" className="acs62-link">Get the A.C.E app</Link>
        </div>
      </div>
      <ul className="acs62-facts">
        <li><b>Required for matches</b><span>You can only join A.C.E matches while anti-cheat is active.</span></li>
        <li><b>User-mode, Windows</b><span>Runs inside the A.C.E app. No kernel driver.</span></li>
        <li><b>Live heartbeat</b><span>A signed heartbeat every 15 seconds keeps your status green.</span></li>
      </ul>
      <p className="acs62-warn" role="note"><strong>Warning:</strong> any detected cheat results in an <strong>automatic permanent ban</strong> of your account and hardware. There are no second chances.</p>
    </section>
  );
}
