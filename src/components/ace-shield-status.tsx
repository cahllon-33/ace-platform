"use client";

import { useI18n } from "@/components/locale-provider";

export function AceShieldStatus() {
  const { t } = useI18n();

  return (
    <div className="ace-ops-slot">
      <article className="ace-shield ace-ops-card flex h-full flex-col" aria-label={t("shieldTitle")}>
        <p className="ace-widget-kicker">{t("integrity")}</p>
        <h2 className="ace-widget-title">{t("shieldTitle")}</h2>
        <p className="ace-shield-ai">{t("shieldAi")}</p>
        <p className="ace-shield-line">{t("shieldNeural")}</p>
        <dl className="ace-shield-list">
          <div>
            <dt>{t("shieldClient")}</dt>
            <dd>{t("shieldClientValue")}</dd>
          </div>
          <div>
            <dt>{t("shieldServer")}</dt>
            <dd>{t("shieldServerValue")}</dd>
          </div>
          <div>
            <dt>{t("shieldHardware")}</dt>
            <dd>{t("shieldHardwareValue")}</dd>
          </div>
        </dl>
        <p className="ace-hub-note mt-auto">{t("shieldNote")}</p>
      </article>
    </div>
  );
}
