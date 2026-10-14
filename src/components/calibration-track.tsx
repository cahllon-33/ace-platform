"use client";

import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/i18n";

export function CalibrationTrack({ played }: { played: number }) {
  const { t } = useI18n();
  const text = useText();
  const complete = Math.min(10, Math.max(0, played));

  return (
    <div className="ace-cal-track">
      <div className="ace-cal-head">
        <p className="ace-widget-kicker">{t("calibrationStatus")}</p>
        <p className="ace-cal-count">{t("placementCount", { complete })}</p>
      </div>
      <ol className="ace-cal-nodes" aria-label={t("placementCount", { complete })}>
        {Array.from({ length: 10 }, (_, index) => (
          <li
            key={index}
            className={`ace-cal-node ${index < complete ? "ace-cal-node-on" : ""}`}
          >
            <span className="sr-only">
              {index < complete
                ? t("matchLogged", { n: index + 1 })
                : t("matchNotPlayed", { n: index + 1 })}
            </span>
          </li>
        ))}
      </ol>
      <p className="ace-hub-note">
        {interpolate(text.ranks.calibration.placementNote, { complete, total: 10 })}
      </p>
    </div>
  );
}
