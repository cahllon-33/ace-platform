"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import type { Srv48Key } from "@/lib/admin-servers-r48-i18n";
import {
  banPlayerAction, cancelMatchAction, forceEndAction, kickQueueAction, kickServerAction, opsSnapshotAction, replacePlayerAction, revokeBanAction, saveHealthAction,
} from "@/server/queue-actions";

export type OpsTabId = "matches" | "moderation" | "health" | "history" | "audit";
type Snap = Extract<Awaited<ReturnType<typeof opsSnapshotAction>>, { ok: true }>["data"];
const mapLabel = (m: string | null) => (!m ? "—" : m === "de_dust2" ? "Dust II" : m.replace(/^de_/, "").replace(/^\w/, (c) => c.toUpperCase()));

/** R48b owner ops: live scoreboards, moderation, health, history (demos/GOTV), audit log. Refreshes every 5 s. */
export function OpsTab({ tab, t, lang, onError }: { tab: OpsTabId; t: (k: Srv48Key) => string; lang: string; onError: (e: string | null) => void }) {
  const [snap, setSnap] = useState<Snap | null>(null);
  const [pending, start] = useTransition();
  const load = useCallback(async () => { const r = await opsSnapshotAction(); if (r.ok) setSnap(r.data); else onError(r.error); }, [onError]);
  useEffect(() => {
    const pull = () => void opsSnapshotAction().then((r) => (r.ok ? setSnap(r.data) : onError(r.error)));
    pull();
    const i = setInterval(() => { if (!document.hidden) pull(); }, 5000);
    return () => clearInterval(i);
  }, [onError]);
  const run = (fn: () => Promise<{ ok: boolean; error?: string }>) => start(async () => { const r = await fn(); if (!r.ok) onError(r.error ?? "failed"); else { onError(null); await load(); } });
  const when = (iso: string | null) => (iso ? new Date(iso).toLocaleString(lang) : "—");
  if (!snap) return <p className="acx-muted">…</p>;

  if (tab === "matches") return <MatchesTab snap={snap} t={t} run={run} pending={pending} />;
  if (tab === "moderation") return <ModerationTab snap={snap} t={t} run={run} pending={pending} when={when} />;
  if (tab === "health") return <HealthTab snap={snap} t={t} run={run} pending={pending} when={when} />;
  if (tab === "history") {
    const h = snap.history;
    return (
      <div className="s48-ops-wrap">
        <p className="acx-card-title">{t("gotvLive")}</p>
        <p>{h.gotv ? <code className="s48-path">connect {h.gotv}</code> : <span className="acx-muted">{t("gotvOff")}</span>}</p>
        <p className="acx-card-title">{t("demos")}</p>
        {h.demos.length ? (
          <ul className="s48-list">{h.demos.map((d) => <li key={d.path}><span className="s48-fname">{d.path}</span><span className="acx-muted">{Math.round(d.size / 1e6)} MB</span><a className="acx-btn" href={`/api/admin/dathost/file?path=${encodeURIComponent(d.path)}`}>⤓</a></li>)}</ul>
        ) : <p className="acx-muted">{t("noDemos")}</p>}
        <div className="s48-table-wrap">
          <table className="s48-table">
            <thead><tr><th>{t("when")}</th><th>{t("state")}</th><th>Map</th><th>{t("score")}</th><th>{t("rpApplied")}</th></tr></thead>
            <tbody>{h.rows.map((r) => <tr key={r.id}><td>{when(r.at)}</td><td>{r.state}{r.isTest ? " · TEST" : ""}{r.error ? <small> {r.error}</small> : null}</td><td>{mapLabel(r.map)}</td><td>{r.scoreA ?? "—"} : {r.scoreB ?? "—"}</td><td>{r.ratingApplied ? "✓" : "—"}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    );
  }
  return (
    <div className="s48-table-wrap">
      <table className="s48-table">
        <thead><tr><th>{t("when")}</th><th>{t("actor")}</th><th>{t("action")}</th><th>{t("value")}</th></tr></thead>
        <tbody>{snap.audit.map((a) => <tr key={a.id}><td>{when(a.at)}</td><td>{a.actor}</td><td><code>{a.action}</code></td><td>{a.value}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

type Run = (fn: () => Promise<{ ok: boolean; error?: string }>) => void;
type Sub = { snap: Snap; t: (k: Srv48Key) => string; run: Run; pending: boolean };

function MatchesTab({ snap, t, run, pending }: Sub) {
  const [sub, setSub] = useState<Record<string, string>>({});
  if (!snap.live.length) return <p className="acx-muted">{t("noLive")}</p>;
  return (
    <div className="s48-ops-wrap">
      {snap.live.map(({ lobby, players }) => (
        <article key={lobby.id} className="s48-match">
          <header className="s48-row">
            <span className="asv-pill is-ok">{lobby.state}</span>
            <strong>{mapLabel(lobby.map)}</strong>
            <span className="s48-big">{lobby.scoreA ?? 0} : {lobby.scoreB ?? 0}</span>
            {lobby.rounds != null ? <span className="acx-muted">{t("round")} {lobby.rounds}</span> : null}
            <span className="s48-grow" />
            <button type="button" className="acx-btn" disabled={pending || lobby.state !== "LIVE"} onClick={() => window.confirm(t("confirmForce")) && run(() => forceEndAction(lobby.id))}>{t("forceEnd")}</button>
            <button type="button" className="acx-btn is-danger" disabled={pending} onClick={() => window.confirm(t("confirmCancel")) && run(() => cancelMatchAction(lobby.id))}>{t("cancelDh")}</button>
          </header>
          <div className="s48-table-wrap">
            <table className="s48-table">
              <thead><tr><th>Player</th><th>Team</th><th>K</th><th>D</th><th>A</th><th>DMG</th><th>MVP</th><th>{t("connected")}</th><th /></tr></thead>
              <tbody>
                {(players.length ? players : lobby.players.map((p) => ({ steamId: p.userId, name: p.name, team: p.team, connected: false, left: false, kills: null, deaths: null, assists: null, damage: null, mvps: null }))).map((p) => {
                  const seat = lobby.players.find((x) => x.name === p.name);
                  return (
                    <tr key={p.steamId}>
                      <td><bdi>{p.name}</bdi></td><td>{p.team === "team1" ? "A" : "B"}</td><td>{p.kills ?? "—"}</td><td>{p.deaths ?? "—"}</td><td>{p.assists ?? "—"}</td><td>{p.damage ?? "—"}</td><td>{p.mvps ?? "—"}</td>
                      <td>{p.left ? t("left") : p.connected ? "✓" : "—"}</td>
                      <td>{seat ? (
                        <span className="s48-row">
                          <input className="s48-input s48-narrow" placeholder={t("replaceWith")} value={sub[seat.userId] ?? ""} onChange={(e) => setSub({ ...sub, [seat.userId]: e.target.value })} />
                          <button type="button" className="acx-btn" disabled={pending || !/^7656119\d{10}$/.test(sub[seat.userId] ?? "")} onClick={() => run(() => replacePlayerAction(lobby.id, seat.userId, sub[seat.userId]))}>{t("replace")}</button>
                        </span>
                      ) : null}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </article>
      ))}
    </div>
  );
}

function ModerationTab({ snap, t, run, pending, when }: Sub & { when: (s: string | null) => string }) {
  const [steam, setSteam] = useState("");
  const [reason, setReason] = useState("");
  const [mins, setMins] = useState("");
  const [kickName, setKickName] = useState("");
  return (
    <div className="s48-ops-wrap">
      <p className="acx-card-title">{t("queueNow")} ({snap.queue.length})</p>
      <ul className="s48-list">
        {snap.queue.map((q) => <li key={q.userId}><span className="s48-fname"><bdi>{q.name}</bdi> · {q.rp} RP</span><span className="acx-muted">{when(q.joinedAt)}</span><button type="button" className="acx-btn" disabled={pending} onClick={() => run(() => kickQueueAction(q.userId))}>{t("kickQueue")}</button></li>)}
      </ul>
      <div className="s48-row">
        <input className="s48-input" placeholder={t("kickServer")} value={kickName} onChange={(e) => setKickName(e.target.value)} aria-label={t("kickServer")} />
        <button type="button" className="acx-btn is-danger" disabled={pending || !kickName.trim()} onClick={() => run(() => kickServerAction(kickName))}>{t("kick")}</button>
      </div>
      <fieldset className="s48-ban"><legend>{t("banTitle")}</legend>
        <label className="s48-field"><span>{t("banSteam")}</span><input className="s48-input" value={steam} onChange={(e) => setSteam(e.target.value)} inputMode="numeric" /></label>
        <label className="s48-field"><span>{t("banReason")}</span><input className="s48-input" value={reason} onChange={(e) => setReason(e.target.value)} maxLength={200} /></label>
        <label className="s48-field"><span>{t("banMinutes")}</span><input className="s48-input" value={mins} onChange={(e) => setMins(e.target.value.replace(/\D/g, ""))} inputMode="numeric" /></label>
        <button type="button" className="acx-btn is-danger" disabled={pending || !/^7656119\d{10}$/.test(steam) || !reason.trim()} onClick={() => run(() => banPlayerAction(steam, reason, mins ? Number(mins) : null))}>{t("banBtn")}</button>
      </fieldset>
      <p className="acx-muted">{t("penaltiesNote")}</p>
      <p className="acx-card-title">{t("bans")}</p>
      <div className="s48-table-wrap">
        <table className="s48-table">
          <thead><tr><th>Player</th><th>{t("kind")}</th><th>{t("banReason")}</th><th>{t("until")}</th><th>{t("state")}</th><th /></tr></thead>
          <tbody>{snap.bans.map((b) => <tr key={b.id}><td><bdi>{b.name}</bdi><small> {b.steamId}</small></td><td>{b.kind}</td><td>{b.reason}</td><td>{b.until ? when(b.until) : t("permanent")}</td><td>{b.active ? t("active") : t("expired")}</td><td>{b.active ? <button type="button" className="acx-btn" disabled={pending} onClick={() => run(() => revokeBanAction(b.id))}>{t("revoke")}</button> : null}</td></tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

function HealthTab({ snap, t, run, pending, when }: Sub & { when: (s: string | null) => string }) {
  const [auto, setAuto] = useState(snap.health.autoRestart);
  const [hour, setHour] = useState(snap.health.restartHour);
  return (
    <div className="s48-ops-wrap">
      <div className="s48-row">
        <label className="s48-check"><input type="checkbox" checked={auto} onChange={(e) => setAuto(e.target.checked)} /> {t("autoRestart")}</label>
        <label className="s48-field s48-inline"><span>{t("restartHour")}</span><input className="s48-input s48-narrow" value={hour} onChange={(e) => setHour(e.target.value.replace(/\D/g, "").slice(0, 2))} inputMode="numeric" /></label>
        <button type="button" className="acx-btn is-gold" disabled={pending} onClick={() => run(() => saveHealthAction(auto, hour))}>{t("saveHealth")}</button>
      </div>
      <p className="acx-muted">{t("healthNote")}</p>
      <p className="acx-card-title">{t("alerts")}</p>
      {snap.health.alerts.length ? (
        <ul className="s48-list">{snap.health.alerts.map((a) => <li key={a.id} className={a.open ? "is-alert" : ""}><span className="s48-fname"><code>{a.kind}</code> {a.message}</span><span className="acx-muted">{when(a.at)}</span><span className={`asv-pill${a.open ? "" : " is-ok"}`}>{a.open ? t("alertOpen") : t("resolved")}</span></li>)}</ul>
      ) : <p className="acx-muted">{t("noAlerts")}</p>}
    </div>
  );
}
