"use client";

import { useEffect, useState } from "react";
import { ConnectedCount } from "@/components/connected-count";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/i18n";

const TEAM_A = [
  { name: "NEXsus_IGL", rank: "DIAMOND" },
  { name: "Cold_AWP", rank: "PLATINUM" },
  { name: "Nova_Entry", rank: "DIAMOND" },
  { name: "Viper_Lurk", rank: "GOLD" },
  { name: "Sable_Support", rank: "PLATINUM" },
] as const;

const TEAM_B = [
  { name: "Shadow_IGL", rank: "DIAMOND" },
  { name: "Shadow_AWP", rank: "DIAMOND" },
  { name: "Shadow_Entry", rank: "PLATINUM" },
  { name: "Shadow_Lurk", rank: "PLATINUM" },
  { name: "Shadow_Support", rank: "GOLD" },
] as const;

const CHAT_HANDLES = ["NEXsus_IGL", "Cold_AWP", "Shadow_IGL"] as const;

function formatClock(total: number) {
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function RankBadge({ rank }: { rank: string }) {
  const diamond = rank === "DIAMOND";
  return <span className={diamond ? "ace-rank-badge ace-rank-diamond" : "ace-rank-badge ace-rank-metal"}>{rank}</span>;
}

export function MatchFoundWorkspace({
  captainLabel,
}: {
  captainLabel: string;
}) {
  const { t } = useI18n();
  const copy = useText().play.matchFound;
  const [remain, setRemain] = useState(18);
  const [closedNotice, setClosedNotice] = useState(false);
  const signedIn = !captainLabel.startsWith("[");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      return;
    }
    const id = window.setInterval(() => {
      setRemain((value) => (value <= 0 ? 18 : value - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="ace-match-found overflow-x-hidden"
      aria-label={
        signedIn
          ? interpolate(copy.ariaSignedIn, { title: t("matchFoundTitle"), name: captainLabel })
          : t("matchFoundTitle")
      }
    >
      <div className="perspective-[1000px]">
        <div className="ace-match-frame transform-gpu backdrop-blur-2xl transition-all duration-500 hover:rotate-x-2 hover:rotate-y-2">
          <header className="ace-match-head">
            <div>
              <p className="ace-vault-banner">{copy.banner}</p>
              <h2>{t("matchFoundTitle")}</h2>
            </div>
            <p className="ace-match-map">{copy.mapPlate}</p>
          </header>

          <p className="ace-hub-note">{copy.rosterNote}</p>

          <div className="ace-match-grid">
            <article>
              <h3>{copy.teamA}</h3>
              <ul>
                {TEAM_A.map((row) => (
                  <li key={row.name} className="ace-match-slot">
                    <span>{row.name}</span>
                    <RankBadge rank={row.rank} />
                  </li>
                ))}
              </ul>
            </article>

            <div className="ace-match-center">
              <p className="ace-vs">{t("vs")}</p>
              <p className="ace-kickoff">
                {copy.clockLabel}
                <span key={remain} className="ace-clock-digits" suppressHydrationWarning>
                  {formatClock(remain)}
                </span>
              </p>
              <p className="ace-hub-note">{copy.clockNote}</p>
            </div>

            <article>
              <h3>{copy.teamB}</h3>
              <ul>
                {TEAM_B.map((row) => (
                  <li key={row.name} className="ace-match-slot">
                    <span>{row.name}</span>
                    <RankBadge rank={row.rank} />
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="ace-match-lower">
            <article className="ace-match-chat">
              <p className="ace-widget-kicker">{copy.chatKicker}</p>
              <ul>
                {CHAT_HANDLES.map((name, index) => (
                  <li key={name}>
                    <strong>{name}</strong>
                    {copy.chatLines[index]}
                  </li>
                ))}
              </ul>
              <p className="ace-chat-field">{copy.chatField}</p>
            </article>
            <article className="ace-match-id">
              <p className="ace-widget-kicker">{copy.identityKicker}</p>
              <ul>
                {copy.identityRows.map((row) => (
                  <li key={row}>{row}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button type="button" className="ace-find-match" onClick={() => setClosedNotice(true)}>
              {copy.findMatch} &gt;&gt;
            </button>
            <p className="text-sm text-[#FFD700]">
              <ConnectedCount />
            </p>
          </div>
          {closedNotice ? (
            <p className="ace-hub-note" role="status">
              {copy.closedNotice}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
