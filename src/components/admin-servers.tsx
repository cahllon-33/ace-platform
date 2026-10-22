"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useTransition } from "react";
import { useAdminI18n } from "@/components/admin-locale";
import { serverAction, type ServerActionResult, type ServerSnapshot } from "@/server/dathost-actions";
import { SERVERS_EN, SERVERS_HE, type ServersKey } from "@/lib/admin-servers-i18n";
import { AdminServerTools, JoinServerButton, WatchLiveButton } from "@/components/admin-server-tools";
import "./admin-command.css";
import "./admin-servers.css";

export type RecentMatch = { id: string; externalId: string | null; map: string | null; scoreA: number; scoreB: number; state: string; ratingApplied: boolean; at: string; players: number };

const mapLabel = (m: string) => m.replace(/^de_/, "").replace(/^dust2$/, "Dust II").replace(/^\w/, (c) => c.toUpperCase());

export function AdminServersPanel({ owner, initial, matches, maps }: { owner: boolean; initial: ServerActionResult | null; matches: RecentMatch[]; maps: string[] }) {
  const { dir, lang, hebrew } = useAdminI18n();
  const t = (k: ServersKey) => (hebrew ? SERVERS_HE : SERVERS_EN)[k];
  const [snap, setSnap] = useState<ServerSnapshot | null>(initial?.ok ? initial.snapshot : null);
  const [error, setError] = useState<string | null>(initial && !initial.ok ? initial.error : null);
  const [map, setMap] = useState(maps[0]);
  const [cmd, setCmd] = useState("");
  const [copied, setCopied] = useState(false);
  const [pending, start] = useTransition();
  const logRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [snap?.log]);

  const run = (kind: Parameters<typeof serverAction>[0], arg?: string) =>
    start(async () => {
      const res = await serverAction(kind, arg);
      if (res.ok) { setSnap(res.snapshot); setError(null); } else setError(res.error);
    });

  if (!owner) {
    return (
      <div className="ace-admin-shell acx asv" dir={dir} lang={lang}>
        <section className="acx-card asv-locked"><p className="acx-card-title">{t("kicker")}</p><p>{t("ownerOnly")}</p></section>
      </div>
    );
  }

  const s = snap?.server;
  const state = !s ? "offline" : s.booting ? "booting" : s.online ? "online" : "offline";
  const players = s ? (snap?.status.humans ?? s.players) : 0;

  return (
    <div className="ace-admin-shell acx asv" dir={dir} lang={lang} suppressHydrationWarning>
      <header className="asv-top">
        <div>
          <p className="ace-admin-kicker">{t("kicker")}</p>
          <h1 className="acx-title">{t("title")}</h1>
        </div>
        <Link href="/admin/dashboard" className="acx-btn asv-back">← {t("back")}</Link>
      </header>

      {error ? <p className="asv-error" role="alert">{error}</p> : null}

      {s ? (
        <section className={`acx-card asv-server is-${state}`} aria-busy={pending}>
          <div className="asv-head">
            <div className="asv-id">
              <span className={`asv-state is-${state}`}><span className="asv-dot" aria-hidden="true" />{t(state as ServersKey)}</span>
              <h2 className="asv-name">{s.name}</h2>
              <p className="asv-sub">{s.id}</p>
            </div>
            <div className="asv-actions">
              <JoinServerButton />
              <WatchLiveButton />
              <button type="button" className="acx-btn is-gold" disabled={pending || s.online} onClick={() => run("start")}>{t("start")}</button>
              <button type="button" className="acx-btn" disabled={pending || !s.online} onClick={() => run("restart")}>{t("restart")}</button>
              <button type="button" className="acx-btn is-danger" disabled={pending || !s.online} onClick={() => window.confirm(t("confirmStop")) && run("stop")}>{t("stop")}</button>
              <button type="button" className="acx-btn" disabled={pending} onClick={() => run("refresh")}>{pending ? t("working") : t("refresh")}</button>
            </div>
          </div>

          <dl className="asv-stats">
            <div><dt>{t("map")}</dt><dd>{snap?.status.map ?? s.map ?? t("unknown")}</dd></div>
            <div><dt>{t("players")}</dt><dd>{players} / {s.slots}{snap?.status.bots ? <small> · {snap.status.bots} {t("bots")}</small> : null}</dd></div>
            <div><dt>{t("location")}</dt><dd className="asv-cap">{s.location}</dd></div>
            <div className="asv-addr">
              <dt>{t("address")}</dt>
              <dd>
                <code>{s.address}</code>
                <button type="button" className="acx-btn" onClick={() => { void navigator.clipboard?.writeText(s.address); setCopied(true); setTimeout(() => setCopied(false), 1500); }}>{copied ? t("copied") : t("copy")}</button>
                <a className="acx-btn is-gold" href={s.connectUrl}>{t("connect")}</a>
              </dd>
            </div>
          </dl>

          <form className="asv-map" onSubmit={(e) => { e.preventDefault(); run("map", map); }}>
            <label htmlFor="asv-map">{t("changeMap")}</label>
            <div className="asv-maps" role="radiogroup" aria-label={t("changeMap")}>
              {maps.map((m) => (
                <button key={m} type="button" role="radio" aria-checked={map === m} className={`asv-chip${map === m ? " is-on" : ""}${(snap?.status.map ?? s.map) === m ? " is-current" : ""}`} onClick={() => setMap(m)}>{mapLabel(m)}</button>
              ))}
            </div>
            <select id="asv-map" className="asv-sr" value={map} onChange={(e) => setMap(e.target.value)}>{maps.map((m) => <option key={m} value={m}>{m}</option>)}</select>
            <button type="submit" className="acx-btn is-gold" disabled={pending || !s.online}>{t("apply")}</button>
          </form>
          {!s.metamod ? <p className="asv-note">{t("metamod")}</p> : null}
        </section>
      ) : null}

      <AdminServerTools maps={maps} />

      <div className="asv-grid">
        <section className="acx-card asv-matches">
          <p className="acx-card-title">{t("matches")}</p>
          {matches.length === 0 ? (
            <p className="acx-muted">{t("noMatches")}</p>
          ) : (
            <ul>
              {matches.map((m) => (
                <li key={m.id}>
                  <strong>{m.map ? mapLabel(m.map) : "—"}</strong>
                  <span className="asv-score">{m.scoreA} : {m.scoreB}</span>
                  <span className="acx-muted">{m.players} · {new Date(m.at).toLocaleString(lang)}</span>
                  <span className={`asv-pill${m.ratingApplied ? " is-ok" : ""}`}>{t("rp")}: {m.ratingApplied ? t("yes") : t("no")}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
