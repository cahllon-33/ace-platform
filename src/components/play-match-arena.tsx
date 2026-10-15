"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "@/components/locale-provider";
import { ConnectedCount } from "@/components/connected-count";
import { useText } from "@/components/text-provider";
import { PlannedButton } from "@/components/ui/button";
import { interpolate } from "@/lib/i18n";
import { FloatingEmblem, PlayerAvatar } from "@/components/floating-emblem";
import { RANK_TIERS, rankArtAsset, type RankArt } from "@/lib/ranks";

export type ArenaCaptain = { avatarUrl: string | null; rating: number; level: number; art: RankArt };

const MAPS = ["DUST II", "Mirage", "Inferno", "Nuke", "Ancient", "Anubis", "Train"] as const;

type RosterRow = {
  callsign: string;
  role: string;
  /** Rank level 1-10 for the showcase emblem. */
  level: number;
  skin: number;
  /** Real stored values for the signed-in captain only. */
  live?: { avatarUrl: string | null; rating: number; art: RankArt };
};

const TEAM_A_REST: RosterRow[] = [
  { callsign: "Zyro", role: "AWP", level: 6, skin: 1 },
  { callsign: "Kane", role: "Entry", level: 6, skin: 2 },
  { callsign: "Frost", role: "Lurk", level: 5, skin: 3 },
  { callsign: "Vex", role: "Support", level: 5, skin: 4 },
];

const TEAM_B: RosterRow[] = [
  { callsign: "Razor", role: "IGL", level: 6, skin: 0 },
  { callsign: "Ghost", role: "AWP", level: 6, skin: 1 },
  { callsign: "Viper", role: "Entry", level: 5, skin: 2 },
  { callsign: "Hawk", role: "Lurk", level: 5, skin: 3 },
  { callsign: "Sable", role: "Support", level: 4, skin: 4 },
];

const SAMPLE_CHAT_HANDLES = ["Zyro", "Kane", "Vex"] as const;

function findMap(lockedMap?: string) {
  if (!lockedMap) return undefined;
  return MAPS.find((name) => name.toLowerCase() === lockedMap.toLowerCase());
}

function LightningMark() {
  return (
    <svg className="ace-play-bolt" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6z" />
    </svg>
  );
}

function RosterCard({
  row,
  captain,
}: {
  row: RosterRow;
  captain?: boolean;
}) {
  const text = useText();
  const copy = text.play.arena;
  const room = text.play.room;
  const tier = RANK_TIERS[Math.min(10, Math.max(1, row.level)) - 1];
  const art: RankArt = row.live?.art ?? "standard";
  return (
    <li className="ace-play-slot ace-room-slot">
      <PlayerAvatar
        src={row.live?.avatarUrl ?? null}
        name={row.callsign}
        alt={interpolate(room.avatarAlt, { name: row.callsign })}
        size={44}
      />
      <div className="ace-play-slot-meta">
        <p className="ace-play-slot-name">
          {row.callsign}
          {captain ? <span className="ace-play-cap">{copy.captain}</span> : null}
        </p>
        <p className="ace-play-slot-rank">
          {row.role} · {tier.crystalName}
        </p>
        <p className="ace-room-rp">
          {row.live
            ? interpolate(room.yourRp, { rp: row.live.rating.toLocaleString("en-US") })
            : interpolate(room.floorRp, { rp: tier.minRating.toLocaleString("en-US") })}
        </p>
      </div>
      <FloatingEmblem src={rankArtAsset(tier.level, art).stillSrc} alt={tier.name} size={52} />
    </li>
  );
}

function OperatorArt({ side, alt }: { side: "guardian" | "rebel"; alt: string }) {
  return (
    <figure className="ace-room-operator" data-side={side}>
      <span className="ace-room-operator-glow" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/operators/operator-${side}-640.webp`}
        srcSet={`/operators/operator-${side}-640.webp 640w, /operators/operator-${side}-1280.webp 1280w, /operators/operator-${side}-2560.webp 2560w`}
        sizes="(min-width: 1280px) 30vw, 100vw"
        alt={alt}
        width={1280}
        height={720}
        loading="lazy"
      />
    </figure>
  );
}

export function PlayMatchArena({
  captainLabel,
  captain = null,
  lockedMap,
  boardName: boardNameProp,
}: {
  captainLabel: string;
  captain?: ArenaCaptain | null;
  lockedMap?: string;
  boardName?: string;
}) {
  const { t } = useI18n();
  const text = useText();
  const copy = text.play.arena;
  const boardName = boardNameProp ?? text.play.boards.items.calibration.name;
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
      level: captain?.level ?? 6,
      skin: 0,
      live: captain ? { avatarUrl: captain.avatarUrl, rating: captain.rating, art: captain.art } : undefined,
    },
    ...TEAM_A_REST,
  ];

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
      <p className="ace-room-showcase" role="note">{text.play.room.showcaseTag}</p>

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
              {copy.settings.simulator}
            </dd>
          </div>
        </dl>
      </header>

      <div className="ace-play-horizon">
        <OperatorArt side="guardian" alt={text.play.room.operatorA} />
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
        <OperatorArt side="rebel" alt={text.play.room.operatorB} />
      </div>

      <div className="ace-play-desk">
        <article className="ace-play-panel ace-play-chat">
          <h3>{copy.chat.title}</h3>
          <p className="ace-play-panel-kicker">{copy.chat.kicker}</p>
          <p className="ace-room-sample">{text.play.room.sampleChat}</p>
          <ul>
            {lines.map((line, index) => (
              <li key={`${line.who}-${index}`}>
                {index < copy.chat.samples.length ? <span className="ace-room-sample-tag">{text.play.room.sampleLine}</span> : null}
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
            <p className="ace-play-clock-label">{text.play.room.showcaseShort}</p>
            <p className="ace-play-clock">{text.play.room.queueClosed}</p>
            <p className="ace-play-clock-note">{t("loopingClock")}</p>
            <ul className="ace-play-tiles">
              <li>
                <span>{copy.tiles.map}</span>
                <strong>{map}</strong>
              </li>
              <li>
                <span>{copy.tiles.server}</span>
                <strong>{copy.tiles.serverValue}</strong>
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
                  <span className="ace-room-pending" aria-hidden="true" /> {row}
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
                  <span className="ace-room-pending" aria-hidden="true" /> {row}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <p className="ace-room-art-note">{text.play.room.artNote}</p>
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
