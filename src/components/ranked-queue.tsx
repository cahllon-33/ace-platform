"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { STEAM_AUTH_HREF } from "@/lib/site";
import { useUi } from "@/components/use-ui";
import { interpolate } from "@/lib/interpolate";
import { mapLabel } from "@/lib/queue";
import { PlayMatchArena } from "@/components/play-match-arena";
import { banMapAction, joinQueueAction, leaveQueueAction, pollQueue, readyAction, type QueueResult } from "@/server/queue-actions";
import type { QueueView } from "@/server/queue-engine";
import "./ranked-queue.css";

const POLL_MS = 2000;

function useNow(active: boolean) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(t);
  }, [active]);
  return now;
}

const secondsLeft = (iso: string | null, now: number) => (iso ? Math.max(0, Math.ceil((new Date(iso).getTime() - now) / 1000)) : 0);
const clock = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export function RankedQueue({ signedIn, initial }: { signedIn: boolean; initial: QueueView | null }) {
  const ui = useUi();
  const r = ui.r48;
  const [view, setView] = useState<QueueView | null>(initial);
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const [skew, setSkew] = useState(0);
  const now = useNow(true) + skew;

  const apply = useCallback((res: QueueResult) => {
    if (res.view) {
      setSkew(new Date(res.view.now).getTime() - Date.now());
      setView(res.view);
    }
    setError(res.ok ? null : res.error);
  }, []);

  useEffect(() => {
    let live = true;
    const t = setInterval(async () => {
      if (document.hidden) return;
      const res = await pollQueue();
      if (live) apply(res);
    }, POLL_MS);
    return () => { live = false; clearInterval(t); };
  }, [apply]);

  const act = (fn: () => Promise<QueueResult>) => start(async () => apply(await fn()));
  const errText = error ? (r.errors as Record<string, string>)[error] ?? r.errors.unavailable : null;
  const lobby = view?.lobby ?? null;
  const me = lobby?.players.find((p) => p.me);
  const t1 = lobby?.players.filter((p) => p.team === "team1") ?? [];
  const t2 = lobby?.players.filter((p) => p.team === "team2") ?? [];
  const teamName = (side: string | null) => (side === "team2" ? r.teamB : r.teamA);
  const activeLobby = lobby && ["READY", "VETO", "LAUNCHING", "LIVE"].includes(lobby.state) ? lobby : null;

  return (
    <section className="r48" aria-labelledby="r48-title">
      <header className="r48-head">
        <p className="r48-kicker">{r.kicker}</p>
        <h1 id="r48-title" className="r48-title">{r.title}</h1>
        <p className="r48-lede">{r.lede}</p>
      </header>

      {errText ? <p className="r48-error" role="alert">{errText}</p> : null}

      {!activeLobby ? (
        <div className="r48-card r48-queue" data-state={view?.inQueue ? "in" : "out"}>
          <div className="r48-meter" role="status" aria-live="polite">
            <p className="r48-count">{interpolate(r.count, { n: view?.queued ?? 0, total: view?.needed ?? 10 })}</p>
            <div className="r48-pips" aria-hidden="true">
              {Array.from({ length: view?.needed ?? 10 }, (_, i) => <span key={i} className={i < (view?.queued ?? 0) ? "on" : ""} />)}
            </div>
            {view?.inQueue ? (
              <p className="r48-sub">
                {interpolate(r.waiting, { n: Math.max(0, (view.needed ?? 10) - view.queued) })} · {interpolate(r.elapsed, { time: clock(Math.max(0, Math.floor((now - new Date(view.joinedAt ?? now).getTime()) / 1000))) })}
              </p>
            ) : null}
          </div>
          {view?.serverBusy ? <p className="r48-note">{r.serverBusy}</p> : null}
          {lobby?.state === "CANCELLED" ? <p className="r48-note">{r.cancelled}</p> : null}
          {lobby?.state === "FAILED" ? <p className="r48-note">{r.failed}</p> : null}
          {lobby?.state === "DONE" ? <p className="r48-note">{r.done}</p> : null}
          <div className="r48-actions">
            {!signedIn ? (
              <a className="r48-btn r48-btn-gold" href={STEAM_AUTH_HREF}>{r.signIn}</a>
            ) : view?.inQueue ? (
              <button type="button" className="r48-btn" disabled={pending} onClick={() => act(leaveQueueAction)}>{r.leave}</button>
            ) : (
              <button type="button" className="r48-btn r48-btn-gold" disabled={pending} onClick={() => act(joinQueueAction)}>{r.join}</button>
            )}
          </div>
        </div>
      ) : null}

      {activeLobby?.state === "READY" ? (
        <div className="r48-card r48-ready" role="dialog" aria-labelledby="r48-ready-title">
          {activeLobby.isTest ? <span className="r48-tag">{r.testTag}</span> : null}
          <h2 id="r48-ready-title" className="r48-h2">{r.readyTitle}</h2>
          <p className="r48-sub">{interpolate(r.readyLede, { s: 20 })}</p>
          <div className="r48-timer" style={{ ["--p" as string]: secondsLeft(activeLobby.readyDeadline, now) / 20 }}>
            <span>{secondsLeft(activeLobby.readyDeadline, now)}</span>
          </div>
          <p className="r48-count">{interpolate(r.accepted, { n: activeLobby.acceptedCount, total: activeLobby.players.length })}</p>
          <div className="r48-pips" aria-hidden="true">
            {activeLobby.players.map((p) => <span key={p.userId} className={p.accepted ? "on" : ""} />)}
          </div>
          {me && !me.accepted ? (
            <div className="r48-actions">
              <button type="button" className="r48-btn r48-btn-gold" disabled={pending} onClick={() => act(() => readyAction(true))}>{r.accept}</button>
              <button type="button" className="r48-btn" disabled={pending} onClick={() => act(() => readyAction(false))}>{r.decline}</button>
            </div>
          ) : (
            <p className="r48-sub">{r.youAccepted}</p>
          )}
        </div>
      ) : null}

      {activeLobby?.state === "VETO" ? (
        <div className="r48-card r48-veto">
          {activeLobby.isTest ? <span className="r48-tag">{r.testTag}</span> : null}
          <h2 className="r48-h2">{r.vetoTitle}</h2>
          <p className="r48-sub">{r.vetoLede}</p>
          <p className="r48-turn" role="status">
            {activeLobby.myTurn ? <strong>{r.yourTurn}</strong> : interpolate(r.theirTurn, { team: teamName(activeLobby.vetoTurn) })}
            {" · "}{interpolate(r.turnLeft, { s: secondsLeft(activeLobby.vetoDeadline, now) })}
          </p>
          <ul className="r48-maps">
            {activeLobby.pool.map((m) => {
              const ban = activeLobby.bans.find((b) => b.map === m);
              return (
                <li key={m} className={ban ? "is-banned" : ""}>
                  <span className="ace-play-map-plate" data-map={mapLabel(m)} aria-hidden="true" />
                  <span className="r48-map-name">{mapLabel(m)}</span>
                  {ban ? (
                    <span className="r48-map-by">{ban.by === "auto" ? r.autoBan : interpolate(r.bannedBy, { team: teamName(ban.by) })}</span>
                  ) : activeLobby.myTurn ? (
                    <button type="button" className="r48-btn r48-btn-sm" disabled={pending} onClick={() => act(() => banMapAction(m))}>{r.ban}</button>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {activeLobby && (activeLobby.state === "LAUNCHING" || activeLobby.state === "LIVE" || activeLobby.state === "VETO" || activeLobby.state === "READY") ? (
        <PlayMatchArena team1={t1} team2={t2} map={activeLobby.map} title={activeLobby.state === "LIVE" ? r.liveTitle : r.readyTitle}>
          {activeLobby.state === "LAUNCHING" ? <p className="r48-note r48-center" role="status">{r.launching}</p> : null}
          {activeLobby.state === "LIVE" && activeLobby.connectUrl ? (
            <div className="r48-connect">
              <a className="r48-btn r48-btn-gold r48-btn-lg" href={activeLobby.connectUrl}>{r.connect}</a>
              <p className="r48-sub">{r.connectNote}</p>
              {activeLobby.address ? <p className="r48-mono"><bdi>{interpolate(r.console, { address: activeLobby.address })}</bdi></p> : null}
            </div>
          ) : null}
        </PlayMatchArena>
      ) : null}
    </section>
  );
}
