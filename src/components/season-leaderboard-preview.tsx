"use client";

import Link from "next/link";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import type { LadderPreviewRow } from "@/lib/ladder-preview";

export type { LadderPreviewRow };

function gaugeWidth(raw: string, scale: number) {
  const value = Number.parseFloat(raw.replace("%", ""));
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, (value / scale) * 100));
}

function Metric({
  label,
  tone,
  scale,
}: {
  label: string;
  tone: "gold" | "green";
  scale: number;
}) {
  return (
    <span className="ace-metric">
      <span>{label}</span>
      <span className="ace-gauge" aria-hidden="true">
        <span
          className={tone === "gold" ? "ace-gauge-gold" : "ace-gauge-green"}
          style={{ width: `${gaugeWidth(label, scale)}%` }}
        />
      </span>
    </span>
  );
}

export function SeasonLeaderboardPreview({ rows }: { rows: LadderPreviewRow[] }) {
  const { t } = useI18n();
  const copy = useText().leaderboard.seasonPreview;
  const anyLive = rows.some((row) => row.live);

  return (
    <section className="ace-ladder-preview overflow-x-hidden" aria-label={t("eliteLeaderboard")}>
      <header className="ace-ladder-head">
        <div>
          <p className="ace-vault-banner">{copy.banner}</p>
          <h2 className="ace-widget-title">{t("eliteLeaderboard")}</h2>
        </div>
        <Link href="/leaderboard" className="ace-how-btn">
          {t("fullBoard")}
        </Link>
      </header>
      <div className="ace-ladder-table" role="table">
        <div className="ace-ladder-cols" role="row">
          <span>#</span>
          <span>{t("username")}</span>
          <span>{t("winRate")}</span>
          <span>{t("kd")}</span>
          <span>{t("calPoints")}</span>
        </div>
        {rows.map((row) => (
          <div
            key={row.place}
            role="row"
            className={`ace-ladder-row ${row.place === 1 ? "ace-ladder-gold" : ""}`}
          >
            <span className="ace-ladder-place">
              {row.place === 1 ? <span className="ace-mini-crown" aria-hidden="true" /> : null}
              #{row.place}
            </span>
            <span className="ace-ladder-name">
              {row.name}
              {!row.live ? <em>{t("showcase")}</em> : null}
            </span>
            <Metric label={row.winRate} tone="gold" scale={100} />
            <Metric label={row.kd} tone="green" scale={2} />
            <span className="ace-ladder-rp">{row.rp}</span>
          </div>
        ))}
      </div>
      <p className="ace-hub-note">
        {anyLive ? copy.noteLive : copy.noteSample}
      </p>
    </section>
  );
}
