"use client";

import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";

export function AntiCheatTelemetry() {
  const { t } = useI18n();
  const copy = useText().home.telemetry;

  return (
    <article className="ace-hwid" aria-label={t("telemetryTitle")}>
      <p className="text-xs font-extrabold tracking-[0.16em] text-[#FFD76A]">{copy.badge}</p>
      <h2 className="ace-widget-title">{t("telemetryTitle")}</h2>
      <ul className="ace-hwid-lines">
        {copy.lines.map((line, index) => (
          <li key={index}>
            <span className="ace-node-mark" aria-hidden="true" />
            {line}
          </li>
        ))}
      </ul>
      <p className="ace-hub-note">{copy.note}</p>
    </article>
  );
}
