"use client";

import { useEffect, useState } from "react";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/interpolate";

const MAPS = [
  { name: "Dust II", plate: "/images/map-dust.jpg" },
  { name: "Mirage", plate: "/images/map-mirage.jpg" },
  { name: "Inferno", plate: "/images/map-inferno.jpg" },
  { name: "Nuke", plate: "/images/map-nuke.jpg" },
  { name: "Ancient", plate: "/images/map-ancient.jpg" },
  { name: "Anubis", plate: "/images/map-anubis.jpg" },
  { name: "Train", plate: "/images/map-train.jpg" },
] as const;

type Notice = { kind: "ban" | "lock"; map: string } | null;

function noticeAfterBan(nextBanned: string[], map: string): Notice {
  const left = MAPS.filter((entry) => !nextBanned.includes(entry.name));
  return left.length === 1 ? { kind: "lock", map: left[0].name } : { kind: "ban", map };
}

export function MapVeto({ onLocked }: { onLocked?: (map: string) => void }) {
  const copy = useText().play.veto;
  const [banned, setBanned] = useState<string[]>([]);
  const [notice, setNotice] = useState<Notice>(null);

  const remaining = MAPS.filter((map) => !banned.includes(map.name));
  const yourTurn = banned.length < MAPS.length - 1 && banned.length % 2 === 0;
  const decider = remaining.length === 1 ? remaining[0].name : null;

  useEffect(() => {
    if (!decider) return;
    onLocked?.(decider);
  }, [decider, onLocked]);

  useEffect(() => {
    if (banned.length >= MAPS.length - 1 || banned.length % 2 === 0) return;
    const left = MAPS.filter((map) => !banned.includes(map.name));
    const pick = left[left.length - 1]?.name;
    if (!pick) return;
    const id = window.setTimeout(() => {
      const next = [...banned, pick];
      setBanned(next);
      setNotice(noticeAfterBan(next, pick));
    }, 700);
    return () => window.clearTimeout(id);
  }, [banned]);

  function ban(name: string) {
    if (!yourTurn || banned.includes(name)) return;
    const next = [...banned, name];
    setBanned(next);
    setNotice(noticeAfterBan(next, name));
  }

  return (
    <section className="ace-veto" aria-labelledby="ace-veto-title">
      <p className="ace-veto-kicker">{copy.kicker}</p>
      <h1 id="ace-veto-title" className="ace-veto-title">
        {copy.title}
      </h1>
      <p className="ace-veto-lede">{copy.lede}</p>
      <p className="ace-veto-turn" role="status">
        {decider ? interpolate(copy.mapSelected, { map: decider }) : yourTurn ? copy.yourBan : copy.opponentBan}
      </p>
      <ul className="ace-veto-grid">
        {MAPS.map((map) => {
          const isBanned = banned.includes(map.name);
          const isDecider = decider === map.name;
          return (
            <li key={map.name}>
              <button
                type="button"
                className={`ace-veto-map${isBanned ? " is-banned" : ""}${isDecider ? " is-selected" : ""}`}
                disabled={!yourTurn || isBanned || Boolean(decider)}
                onClick={() => ban(map.name)}
              >
                <img src={map.plate} alt="" loading="lazy" decoding="async" width={320} height={180} />
                <span className="ace-veto-name">{map.name}</span>
                <span className="ace-veto-action">
                  {isDecider ? copy.selected : isBanned ? copy.declined : copy.decline}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="ace-veto-reset"
        onClick={() => {
          setBanned([]);
          setNotice(null);
        }}
      >
        {copy.reset}
      </button>
      {notice?.kind === "ban" ? (
        <p className="ace-veto-toast" role="status">
          {interpolate(copy.declinedToast, { map: notice.map })}
        </p>
      ) : null}
      {notice?.kind === "lock" ? (
        <div className="ace-veto-modal" role="dialog" aria-modal="true" aria-labelledby="ace-veto-lock">
          <div className="ace-veto-modal-card">
            <p className="ace-veto-kicker">{copy.lockKicker}</p>
            <h2 id="ace-veto-lock">{interpolate(copy.lockTitle, { map: notice.map })}</h2>
            <p>{copy.lockBody}</p>
            <button type="button" onClick={() => setNotice(null)}>
              {copy.close}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
