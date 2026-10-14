"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/i18n";

const SHOWCASE_SECONDS = 4 * 3600 + 12 * 60 + 34;

function formatClock(total: number, format: string) {
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return interpolate(format, { h: pad(hours), m: pad(minutes), s: pad(seconds) });
}

export function LootLadder() {
  const { t } = useI18n();
  const text = useText().home;
  const copy = text.lootLadder;
  const [remain, setRemain] = useState(SHOWCASE_SECONDS);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      return;
    }
    const id = window.setInterval(() => {
      setRemain((value) => (value <= 0 ? SHOWCASE_SECONDS : value - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <aside className="ace-loot-ladder overflow-x-hidden" aria-label={t("lootTitle")}>
      <p className="ace-vault-banner">{copy.banner}</p>
      <h2 className="ace-widget-title">{copy.title}</h2>
      <article className="ace-loot-skin perspective-[1000px]">
        <div className="ace-loot-face transform-gpu backdrop-blur-2xl transition-all duration-500 hover:rotate-y-6">
          <div className="ace-vault-stage" aria-hidden="true">
            <span className="ace-vault-halo" />
            <div className="ace-karambit" />
          </div>
          <p className="ace-loot-rarity">{t("legendaryPreview")}</p>
          <h3>{interpolate(copy.itemWithWear, { item: "Karambit | Lore", wear: text.loot.wear.factoryNew })}</h3>
          <p className="ace-loot-note">{t("lootNote")}</p>
        </div>
      </article>
      <p className="ace-loot-clock">
        {copy.clockLabel}
        <span key={remain} className="ace-clock-digits" suppressHydrationWarning>
          {formatClock(remain, copy.clockFormat)}
        </span>
      </p>
      <p className="ace-hub-note">{copy.note}</p>
    </aside>
  );
}
