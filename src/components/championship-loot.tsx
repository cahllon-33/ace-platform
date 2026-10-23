"use client";

import { ComingSoon } from "@/components/coming-soon";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { useUi } from "@/components/use-ui";

/** Reward cards. The artwork is an original CSS plate, not a Valve render. */
const SKINS = [
  { weapon: "Butterfly Knife", finish: "Lore", wear: "factoryNew", slot: "first" },
  { weapon: "M4A1-S", finish: "Welcome to the Jungle", wear: "minimalWear", slot: "second" },
  { weapon: "Karambit", finish: "Lore", wear: "factoryNew", slot: "mvp" },
] as const;

export function ChampionshipLoot() {
  const { t } = useI18n();
  const wear = useText().home.loot.wear;
  const ui = useUi();

  return (
    <section className="ace-champ-loot" aria-label={t("championshipLoot")}>
      <p className="ace-widget-kicker">{ui.prizes.kicker}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-[0.12em] text-[#F5F3EC] sm:text-3xl">
        {t("championshipLoot")}
      </h2>
      <ul className="ace-champ-row">
        {SKINS.map((skin, index) => (
          <li key={`${skin.weapon}-${skin.finish}`} className="ace-champ-card">
            <div className={`ace-skin-stage ace-skin-stage-${index}`} aria-hidden="true">
              <div className="ace-skin-3d" />
              <div className="ace-skin-floor" />
            </div>
            <p className="text-[0.58rem] uppercase tracking-[0.18em] text-[#C9A24A]">{ui.prizes.cardKicker}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              {skin.weapon} <span className="text-[#C9A24A]">| {skin.finish}</span>
            </h3>
            <p className="mt-1 text-xs text-[#A9ABB3]">
              {wear[skin.wear]} · {ui.prizes.slots[skin.slot]}
            </p>
            <div className="mt-3">
              <ComingSoon label={ui.soon.label} size="md" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
