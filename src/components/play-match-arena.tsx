"use client";

import { FormEvent, useEffect, useState } from "react";
import { useI18n } from "@/components/locale-provider";
import { ConnectedCount } from "@/components/connected-count";
import { useText } from "@/components/text-provider";
import { PlannedButton } from "@/components/ui/button";
import { interpolate } from "@/lib/i18n";

const MAPS = ["DUST II", "Mirage", "Inferno", "Nuke", "Ancient", "Anubis", "Train"] as const;

type RosterRow = {
  callsign: string;
  role: string;
  rank: string;
  ping: string;
  skin: number;
};

const TEAM_A_REST: RosterRow[] = [
  { callsign: "Zyro", role: "AWP", rank: "DIAMOND I", ping: "28ms", skin: 1 },
  { callsign: "Kane", role: "Entry", rank: "DIAMOND I", ping: "35ms", skin: 2 },
  { callsign: "Frost", role: "Lurk", rank: "PLATINUM II", ping: "41ms", skin: 3 },
  { callsign: "Vex", role: "Support", rank: "PLATINUM II", ping: "22ms", skin: 4 },
];

const TEAM_B: RosterRow[] = [
  { callsign: "Razor", role: "IGL", rank: "DIAMOND I", ping: "31ms", skin: 0 },
  { callsign: "Ghost", role: "AWP", rank: "DIAMOND II", ping: "44ms", skin: 1 },
  { callsign: "Viper", role: "Entry", rank: "PLATINUM III", ping: "39ms", skin: 2 },
  { callsign: "Hawk", role: "Lurk", rank: "PLATINUM III", ping: "51ms", skin: 3 },
  { callsign: "Sable", role: "Support", rank: "GOLD I", ping: "36ms", skin: 4 },
];

const SAMPLE_CHAT_HANDLES = ["Zyro", "Kane", "Vex"] as const;

function findMap(lockedMap?: string) {
  if (!lockedMap) return undefined;
  return MAPS.find((name) => name.toLowerCase() === lockedMap.toLowerCase());
}

function formatClock(total: number) {
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function LightningMark() {
  return (
    <svg className="ace-play-bolt" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6z" />
    </svg>
  );
}

function CheckMark() {
  return (
    <svg className="ace-play-check" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.4 8.2 6.1 12l7.5-8.4" />
    </svg>
  );
}

function OperativeMark({ skin, name }: { skin: number; name: string }) {
  const initial = name.replace(/[^A-Za-z0-9]/g, "").slice(0, 1).toUpperCase() || "A";
  return (
    <span className="ace-play-avatar" data-skin={skin} aria-hidden="true">
      {initial}
    </span>
  );
}

function RosterCard({
  row,
  captain,
}: {
  row: RosterRow;
  captain?: boolean;
}) {
  const { t } = useI18n();
  const copy = useText().play.arena;

  return (
    <li className="ace-play-slot">
      <OperativeMark skin={row.skin} name={row.callsign} />
      <div className="ace-play-slot-meta">
        <p className="ace-play-slot-name">
          {row.callsign}
          {captain ? <span className="ace-play-cap">{copy.captain}</span> : null}
        </p>
        <p className="ace-play-slot-rank">
          {row.role} · {row.rank}
        </p>
      </div>
      <div className="ace-play-slot-status">
        <p className="ace-play-ready">
          <CheckMark /> {t("ready")}
        </p>
        <p className="ace-play-ping">{interpolate(copy.ping, { ping: row.ping })}</p>
      </div>
    </li>
  );
}

export function PlayMatchArena({
  captainLabel,
  lockedMap,
  boardName: boardNameProp,
}: {
  captainLabel: string;
  lockedMap?: string;
  boardName?: string;
}) {
  const { t } = useI18n();
  const text = useText();
  const copy = text.play.arena;
  const boardName = boardNameProp ?? text.play.boards.items.calibration.name;
  const [remain, setRemain] = useState(24);
  const [map, setMap] = useState<(typeof MAPS)[number]>(() => findMap(lockedMap) ?? "DUST II");
  const [syncedLock, setSyncedLock] = useState(lockedMap);
  if (lockedMap !== syncedLock) {
    setSyncedLock(lockedMap);
    const next = findMap(lockedMap);
    if (next) setMap(next);
  }
  const [draft, setDraft] = useState("");
  const [added, setAdded] = useState<string[]>([]);
  const sampleWho = [interpolate(copy.chat.captainName, { name: captainLabel }), ...SAMPLE_CHAT_HANDLES];
  const lines = [
    ...copy.chat.samples.map((line, index) => ({ who: sampleWho[index] ?? "", text: line })),
    ...added.map((line) => ({ who: interpolate(copy.chat.layoutName, { name: captainLabel }), text: line })),
  ];

  const teamA: RosterRow[] = [
    {
      callsign: captainLabel,
      role: "IGL",
      rank: "ACE ELITE",
      ping: "32ms",
      skin: 0,
    },
    ...TEAM_A_REST,
  ];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const id = window.setInterval(() => {
      setRemain((value) => (value <= 0 ? 24 : value - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  function onChat(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = draft.trim();
    if (!message) return;
    setAdded((current) => [...current, message]);
    setDraft("");
  }

  return (
    <section className="ace-play-arena" aria-label={copy.ariaLabel}>
      <p className="ace-play-kicker">{t("playKicker")}</p>

      <header className="ace-play-banner">
        <div className="ace-play-title-row">
          <LightningMark />
          <h1>{t("matchFoundTitle")}</h1>
        </div>
        <div className="ace-play-maps" role="tablist" aria-label={copy.mapPlates}>
          {MAPS.map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={map === name}
              aria-label={interpolate(copy.selectMap, { map: name })}
              className={map === name ? "is-active" : undefined}
              onClick={() => setMap(name)}
            >
              <span className="ace-play-map-plate" data-map={name} />
              {name}
            </button>
          ))}
        </div>
        <dl className="ace-play-settings">
          <div>
            <dt>{copy.settings.region}</dt>
            <dd>EU</dd>
          </div>
          <div>
            <dt>{copy.settings.mode}</dt>
            <dd>{boardName}</dd>
          </div>
          <div>
            <dt>{copy.settings.antiCheat}</dt>
            <dd>
              <span className="ace-play-pulse" aria-hidden="true" />
              {copy.settings.simulator}
            </dd>
          </div>
        </dl>
      </header>

      <div className="ace-play-horizon">
        <article className="ace-play-team" data-side="a">
          <h2>{t("teamA")}</h2>
          <p className="ace-play-team-note">{t("teamANote")}</p>
          <ul>
            {teamA.map((row, index) => (
              <RosterCard key={row.callsign} row={row} captain={index === 0} />
            ))}
          </ul>
        </article>

        <div className="ace-play-vs" aria-hidden="true">
          <span>VS</span>
        </div>

        <article className="ace-play-team" data-side="b">
          <h2>{t("teamB")}</h2>
          <p className="ace-play-team-note">{t("teamBNote")}</p>
          <ul>
            {TEAM_B.map((row) => (
              <RosterCard key={row.callsign} row={row} />
            ))}
          </ul>
        </article>
      </div>

      <div className="ace-play-desk">
        <article className="ace-play-panel ace-play-chat">
          <h3>{copy.chat.title}</h3>
          <p className="ace-play-panel-kicker">{copy.chat.kicker}</p>
          <ul>
            {lines.map((line, index) => (
              <li key={`${line.who}-${index}`}>
                <strong>{line.who}:</strong> {line.text}
              </li>
            ))}
          </ul>
          <form className="ace-play-chat-bar" onSubmit={onChat}>
            <label className="sr-only" htmlFor="ace-play-chat-input">
              {copy.chat.inputLabel}
            </label>
            <input
              id="ace-play-chat-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={copy.chat.placeholder}
              autoComplete="off"
            />
            <button type="submit" aria-label={copy.chat.send}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 12h14M13 6l8 6-8 6" />
              </svg>
            </button>
          </form>
        </article>

        <article className="ace-play-panel ace-play-countdown">
          <div className="ace-play-dust" data-map={map} aria-hidden="true" />
          <div className="ace-play-countdown-copy">
            <p className="ace-play-clock-label">
              {t("gameStartsIn", { clock: "" }).replace(/\s+/g, " ").trim()}
            </p>
            <p className="ace-play-clock" key={remain} suppressHydrationWarning>
              {formatClock(remain)}
            </p>
            <p className="ace-play-clock-note">{t("loopingClock")}</p>
            <ul className="ace-play-tiles">
              <li>
                <span>{copy.tiles.map}</span>
                <strong>{map}</strong>
              </li>
              <li>
                <span>{copy.tiles.server}</span>
                <strong>{interpolate(copy.tiles.serverValue, { ping: "48ms" })}</strong>
              </li>
              <li>
                <span>{copy.tiles.mode}</span>
                <strong>{boardName}</strong>
              </li>
            </ul>
          </div>
        </article>

        <div className="ace-play-stack">
          <article className="ace-play-panel">
            <h3>{copy.identity.title}</h3>
            <p className="ace-play-panel-kicker">{copy.identity.kicker}</p>
            <ul className="ace-play-sec">
              {copy.identity.rows.map((row) => (
                <li key={row}>
                  <CheckMark /> {row}
                </li>
              ))}
            </ul>
          </article>
          <article className="ace-play-panel">
            <h3>{copy.security.title}</h3>
            <p className="ace-play-panel-kicker">{copy.security.kicker}</p>
            <ul className="ace-play-sec">
              {copy.security.rows.map((row) => (
                <li key={row}>
                  <CheckMark /> {row}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <footer className="ace-play-foot">
        <PlannedButton
          look="foil"
          reason={copy.findMatchReason}
        >
          {t("findMatch")} <span aria-hidden="true">›</span>
        </PlannedButton>
        <p className="ace-play-online">
          <ConnectedCount />
        </p>
      </footer>
    </section>
  );
}
