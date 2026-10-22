"use client";

import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { STEAM_AUTH_HREF } from "@/lib/site";
import { useUi } from "@/components/use-ui";
import { useI18n } from "@/components/locale-provider";
import { discordStrings } from "@/lib/discord-i18n";
import { interpolate } from "@/lib/interpolate";
import { mapLabel } from "@/lib/queue";
import { PlayMatchArena } from "@/components/play-match-arena";
import { banMapAction, joinQueueAction, leaveQueueAction, pollQueue, readyAction, type QueueResult } from "@/server/queue-actions";
import type { QueueView } from "@/server/queue-engine";
import { notify, playBan, playLive, playMatchFound, playTick, unlockAudio } from "@/components/queue-alerts";
import { REGION_LABELS } from "@/lib/queue";
import { useAutoConnect } from "@/components/auto-connect";
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
  const ds = discordStrings(useI18n().locale.id);
  const [cmdCopied, setCmdCopied] = useState(false);
  const r = ui.r48;
  const [view, setView] = useState<QueueView | null>(initial);
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const [skew, setSkew] = useState(0);
  const [latency, setLatency] = useState<number | null>(null);
  const [sound, setSound] = useState(() => { try { return typeof window === "undefined" || localStorage.getItem("ace-queue-sound") !== "off"; } catch { return true; } });
  const [perm, setPerm] = useState<string>(() => (typeof window !== "undefined" && "Notification" in window ? Notification.permission : "default"));
  const [copied, setCopied] = useState(false);
  const [dismissed, setDismissed] = useState<string | null>(null);
  const prev = useRef<{ state: string | null; bans: number; tick: number }>({ state: null, bans: 0, tick: -1 });
  const b = ui.r48b;
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
      const t0 = performance.now();
      const res = await pollQueue();
      if (!live) return;
      setLatency(Math.round(performance.now() - t0));
      apply(res);
    }, POLL_MS);
    return () => { live = false; clearInterval(t); };
  }, [apply]);


  // Alerts: match found (sound + browser notification), last-5-second ticks, bans, server ready.
  const lobbyState = view?.lobby?.state ?? null;
  const banCount = view?.lobby?.bans.length ?? 0;
  const readyLeft = secondsLeft(view?.lobby?.readyDeadline ?? null, now);
  useEffect(() => {
    const p = prev.current;
    if (lobbyState === "READY" && p.state !== "READY") {
      if (sound) playMatchFound();
      if (document.hidden) notify(b.notifTitle, b.notifBody);
    }
    if (lobbyState === "LIVE" && p.state !== "LIVE" && sound) playLive();
    if (lobbyState === "VETO" && banCount > p.bans && sound) playBan();
    if (lobbyState === "READY" && readyLeft <= 5 && readyLeft > 0 && readyLeft !== p.tick && sound) playTick();
    prev.current = { state: lobbyState, bans: banCount, tick: readyLeft };
  }, [lobbyState, banCount, readyLeft, sound, b.notifTitle, b.notifBody]);

  const toggleSound = () => { unlockAudio(); setSound((v) => { try { localStorage.setItem("ace-queue-sound", v ? "off" : "on"); } catch { /* ignore */ } return !v; }); };
  const askNotify = async () => { unlockAudio(); if ("Notification" in window) setPerm(await Notification.requestPermission()); };

  const act = (fn: () => Promise<QueueResult>) => { unlockAudio(); start(async () => apply(await fn())); };
  const errText = error === "banned" ? b.errBanned : error === "cooldown" ? b.errCooldown : error ? (r.errors as Record<string, string>)[error] ?? r.errors.unavailable : null;
  const regionName = view?.region ? REGION_LABELS[view.region] ?? view.region : "";
  const restriction = view?.restriction ?? null;
  const restrictLeft = restriction?.until ? Math.max(0, Math.floor((new Date(restriction.until).getTime() - now) / 1000)) : null;
  const lobby = view?.lobby ?? null;
  const me = lobby?.players.find((p) => p.me);
  const t1 = lobby?.players.filter((p) => p.team === "team1") ?? [];
  const t2 = lobby?.players.filter((p) => p.team === "team2") ?? [];
  const teamName = (side: string | null) => (side === "team2" ? r.teamB : r.teamA);
  const activeLobby = lobby && ["READY", "VETO", "LAUNCHING", "LIVE"].includes(lobby.state) ? lobby : null;
  const c = ui.r48c;
  const autoPhase = useAutoConnect(activeLobby?.state === "LIVE" && activeLobby.connectUrl ? activeLobby.id : null, activeLobby?.state === "LIVE" ? activeLobby.connectUrl : null);

  return (
    <section className="r48" aria-labelledby="r48-title">
      <header className="r48-head">
        <p className="r48-kicker">{r.kicker}</p>
        <h1 id="r48-title" className="r48-title">{r.title}</h1>
        <p className="r48-lede">{r.lede}</p>
        <div className="r48-meta" suppressHydrationWarning>
          {regionName ? <span className="r48-chip">{interpolate(b.region, { region: regionName })}</span> : null}
          {latency != null ? <span className="r48-chip r48-chip-dim">{interpolate(b.latency, { ms: latency })}</span> : null}
          <button type="button" className="r48-chip r48-chip-btn" onClick={toggleSound} aria-pressed={sound} suppressHydrationWarning>{sound ? b.soundOn : b.soundOff}</button>
          {perm !== "granted" && perm !== "denied" ? <button type="button" className="r48-chip r48-chip-btn" onClick={askNotify}>{b.alertsOn}</button> : perm === "granted" ? <span className="r48-chip">{b.alertsActive}</span> : null}
        </div>
      </header>
      {activeLobby?.state === "LIVE" ? <p className="r48-banner" role="status"><strong>{b.activeMatch}</strong>{activeLobby.connectUrl ? <a className="r48-btn r48-btn-gold r48-btn-sm" href={activeLobby.connectUrl}>{b.reconnect}</a> : null}</p> : null}

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
          <p className="r48-sub">{view?.estimateSec != null ? interpolate(b.estimate, { time: clock(view.estimateSec) }) : b.estimateNone}</p>
          {restriction ? (
            <p className="r48-restrict" role="alert">
              {restriction.kind === "BAN"
                ? restriction.until ? interpolate(b.bannedUntil, { date: new Date(restriction.until).toLocaleString() }) : b.banned
                : interpolate(b.cooldown, { time: clock(restrictLeft ?? 0) })}
            </p>
          ) : null}
          {view?.serverBusy ? <p className="r48-note">{r.serverBusy}</p> : null}
          {lobby?.state === "CANCELLED" ? <p className="r48-note">{r.cancelled}</p> : null}
          {lobby?.state === "FAILED" ? <p className="r48-note">{r.failed}</p> : null}

          <div className="r48-actions">
            {!signedIn ? (
              <a className="r48-btn r48-btn-gold" href={STEAM_AUTH_HREF}>{r.signIn}</a>
            ) : view?.inQueue ? (
              <button type="button" className="r48-btn" disabled={pending} onClick={() => act(leaveQueueAction)}>{r.leave}</button>
            ) : (
              <button type="button" className="r48-btn r48-btn-gold" disabled={pending || (!!restriction && (restrictLeft == null || restrictLeft > 0))} onClick={() => act(joinQueueAction)}>{r.join}</button>
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
          <p className="r48-warn">{b.dodgeWarn}</p>
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
                <li key={m} className={ban ? `is-banned${ban.by === "auto" ? " is-auto" : ""}` : activeLobby.myTurn ? "is-pickable" : ""} style={{ ["--i" as string]: activeLobby.bans.findIndex((x) => x.map === m) }}>
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
          {t1.length && t2.length ? (
            <div className="r48-odds" aria-label={interpolate(b.winChance, { p: Math.round(activeLobby.winChance1 * 100) })}>
              <span>{interpolate(b.winChance, { p: Math.round(activeLobby.winChance1 * 100) })}</span>
              <div className="r48-odds-bar"><i style={{ width: `${Math.round(activeLobby.winChance1 * 100)}%` }} /></div>
              <span>{interpolate(b.winChance, { p: 100 - Math.round(activeLobby.winChance1 * 100) })}</span>
            </div>
          ) : null}
          {activeLobby.state === "LAUNCHING" ? <p className="r48-note r48-center" role="status">{r.launching}</p> : null}
          {activeLobby.state === "LIVE" ? (
            <div className="r48-score" aria-label={b.liveScore}>
              <span className="r48-score-n">{activeLobby.scoreA ?? 0}</span>
              <span className="r48-score-mid">{b.liveScore}{activeLobby.rounds ? <small>{interpolate(b.round, { n: activeLobby.rounds + 1 })}</small> : null}</span>
              <span className="r48-score-n">{activeLobby.scoreB ?? 0}</span>
            </div>
          ) : null}
          {activeLobby.state === "LIVE" && activeLobby.connectUrl ? (
            <div className="r48-connect">
              {autoPhase === "launching" ? <p className="r48-auto" role="status">{c.launching}</p> : null}
              <a className="r48-btn r48-btn-gold r48-btn-lg r48-join" href={activeLobby.connectUrl}>{c.join}</a>
              {activeLobby.watchUrl ? <a className="r48-btn r48-btn-sm r48-watch" href={activeLobby.watchUrl}>◉ {c.watch}</a> : null}
              {autoPhase === "hint" ? <p className="r48-warn" role="note">{c.hint}</p> : null}
              <p className="r48-sub">{r.connectNote}</p>
              {activeLobby.address ? (
                <p className="r48-mono">
                  <bdi>{interpolate(r.console, { address: activeLobby.address })}</bdi>{" "}
                  <button type="button" className="r48-btn r48-btn-sm" onClick={() => { void navigator.clipboard?.writeText(`connect ${activeLobby.address}`); setCopied(true); setTimeout(() => setCopied(false), 1500); }}>{copied ? b.copied : b.copyIp}</button>
                </p>
              ) : null}
              {activeLobby.voiceUrl || activeLobby.steamUrl ? (
                <div className="r50-match-links">
                  {activeLobby.voiceUrl ? <a className="r48-btn r48-btn-sm r50-voice" href={activeLobby.voiceUrl} target="_blank" rel="noopener noreferrer">🎧 {ds.voice}</a> : null}
                  {activeLobby.steamUrl ? <a className="r48-btn r48-btn-sm" href={activeLobby.steamUrl}>{ds.steam}</a> : null}
                </div>
              ) : null}
              {activeLobby.password && activeLobby.consoleLine ? (
                <p className="r48-mono">
                  <span>{ds.password}: </span><bdi dir="ltr">{activeLobby.password}</bdi>{" "}
                  <button type="button" className="r48-btn r48-btn-sm" onClick={() => { void navigator.clipboard?.writeText(activeLobby.consoleLine ?? ""); setCmdCopied(true); setTimeout(() => setCmdCopied(false), 1500); }}>{cmdCopied ? b.copied : ds.copyCmd}</button>
                </p>
              ) : null}
              <p className="r48-warn">{b.leaverWarn}</p>
            </div>
          ) : null}
        </PlayMatchArena>
      ) : null}

      {lobby?.state === "DONE" && lobby.result && dismissed !== lobby.id ? (
        <div className={`r48-card r48-result is-${lobby.result.won == null ? "draw" : lobby.result.won ? "win" : "loss"}${lobby.scoreA == null ? " is-pending" : ""}`}>
          <p className="r48-kicker">{b.resultsTitle}</p>
          <h2 className="r48-result-title">{lobby.scoreA == null || lobby.scoreB == null ? r.done : lobby.result.won == null ? b.draw : lobby.result.won ? b.win : b.loss}</h2>
          <p className="r48-result-score">{lobby.scoreA ?? 0} : {lobby.scoreB ?? 0}{lobby.map ? <small> · {mapLabel(lobby.map)}</small> : null}</p>
          {lobby.result.rpBefore != null && lobby.result.rpAfter != null ? (
            <p className="r48-result-rp">
              {interpolate(b.rpChange, { delta: `${lobby.result.rpAfter - lobby.result.rpBefore >= 0 ? "+" : "−"}${Math.abs(lobby.result.rpAfter - lobby.result.rpBefore)}` })}
              <small> {lobby.result.rpBefore.toLocaleString("en-US")} → {lobby.result.rpAfter.toLocaleString("en-US")}</small>
            </p>
          ) : <p className="r48-sub">{b.rpPending}</p>}
          <dl className="r48-stats">
            {([["kills", lobby.result.kills], ["deaths", lobby.result.deaths], ["assists", lobby.result.assists], ["damage", lobby.result.damage], ["mvps", lobby.result.mvps], ["hs", lobby.result.hs]] as const).map(([k, v]) => (
              <div key={k}><dt>{b[k]}</dt><dd>{v ?? "—"}</dd></div>
            ))}
          </dl>
          <button type="button" className="r48-btn" onClick={() => setDismissed(lobby.id)}>{r.join}</button>
        </div>
      ) : lobby?.state === "DONE" && dismissed !== lobby.id ? <p className="r48-note">{r.done}</p> : null}
    </section>
  );
}
