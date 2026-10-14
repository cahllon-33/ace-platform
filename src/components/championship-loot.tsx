"use client";

import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";

/** Preview cards only. The artwork is an original CSS plate, not a Valve render. */
const SKINS = [
  { weapon: "Butterfly Knife", finish: "Lore", wear: "factoryNew", slot: "1st place · per player" },
  { weapon: "M4A1-S", finish: "Welcome to the Jungle", wear: "minimalWear", slot: "2nd place · per player" },
  { weapon: "Karambit", finish: "Lore", wear: "factoryNew", slot: "MVP · single award" },
] as const;

export function ChampionshipLoot() {
  const { t } = useI18n();
  const copy = useText().home.loot;

  return (
    <section className="ace-champ-loot" aria-label={t("championshipLoot")}>
      <p className="ace-widget-kicker">{t("champKicker")}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-[0.12em] text-[#F5F3EC] sm:text-3xl">
        {t("championshipLoot")}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-[#A9ABB3]">{t("champBody")}</p>
      <ul className="ace-champ-row">
        {SKINS.map((skin, index) => (
          <li key={`${skin.weapon}-${skin.finish}`} className="ace-champ-card">
            <p className="ace-prize-status">Preview · not funded</p>
            <div className={`ace-skin-stage ace-skin-stage-${index}`} aria-hidden="true">
              <div className="ace-skin-3d" />
              <div className="ace-skin-floor" />
            </div>
            <p className="text-[0.58rem] uppercase tracking-[0.18em] text-[#FFD700]">{t("legendaryPreview")}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              {skin.weapon} <span className="text-[#FFD700]">| {skin.finish}</span>
            </h3>
            <p className="mt-1 text-xs text-[#A9ABB3]">
              {copy.wear[skin.wear]} · Proposed slot: {skin.slot}
            </p>
            <p className="ace-mock-checkout">{copy.exampleCard}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
