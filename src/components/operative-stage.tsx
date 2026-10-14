"use client";

import { LiveIntegrityCounter } from "@/components/live-integrity-counter";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { PlannedButton } from "@/components/ui/button";

export function OperativeStage() {
  const { t } = useI18n();
  const copy = useText().home.operative;

  return (
    <section className="ace-glass-laser ace-campaign ace-arena relative overflow-hidden px-5 py-12 sm:px-10 sm:py-16">
      <div className="ace-radar-mesh pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="ace-volume-smoke ace-volume-smoke-a" aria-hidden="true" />
      <div className="ace-volume-smoke ace-volume-smoke-b" aria-hidden="true" />
      <div className="ace-volume-smoke ace-smoke-c" aria-hidden="true" />
      <div className="ace-arena-laser pointer-events-none absolute inset-3" aria-hidden="true" />

      <p className="relative text-[0.65rem] uppercase tracking-[0.2em] text-[#FFD700]/70">{copy.kicker}</p>
      <div className="relative mt-4">
        <LiveIntegrityCounter />
      </div>
      <h2 className="relative mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {copy.title}
      </h2>
      <p className="relative mt-4 max-w-xl text-lg leading-8 text-white/80">{copy.lede}</p>
      <p className="relative mt-2 text-sm text-ace-muted">{copy.note}</p>

      <div className="ace-ops-viewport relative mt-10 min-h-[22rem] overflow-hidden rounded-2xl">
        <div className="ace-ops-scan" aria-hidden="true" />
        <div className="ace-ops-structure ace-ops-left" aria-hidden="true" />
        <div className="ace-ops-structure ace-ops-mid" aria-hidden="true" />
        <div className="ace-ops-structure ace-ops-right" aria-hidden="true" />
        <p className="ace-ops-hud ace-ops-hud-l">{copy.hudLeft}</p>
        <p className="ace-ops-hud ace-ops-hud-r">{copy.hudRight}</p>
        <p className="ace-ops-hud ace-ops-hud-c">{copy.hudCenter}</p>
      </div>

      <div className="relative mt-10">
        <PlannedButton look="foil" reason={copy.plannedReason}>
          <span className="ace-play-type inline-flex items-center gap-2">
            {t("playNow")}
            <span aria-hidden="true" className="text-lg leading-none">
              →
            </span>
          </span>
        </PlannedButton>
      </div>
    </section>
  );
}
