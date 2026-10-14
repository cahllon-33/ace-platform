"use client";

import Link from "next/link";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { translate, useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { interpolate, type MessageKey } from "@/lib/i18n";
import { MARKET_ITEMS } from "@/lib/marketplace";

type RibbonPanel = "rewards" | "missions" | "shop";

const MISSIONS = [
  { id: "headshot", progress: "0/25" },
  { id: "utilityEntry", progress: "0/10" },
  { id: "clutch", progress: "0/3" },
] as const;

const SHOP_ITEMS = MARKET_ITEMS.slice(0, 3);

function RibbonOverlay({
  panel,
  onClose,
}: {
  panel: RibbonPanel;
  onClose: () => void;
}) {
  const titleId = useId();
  const text = useText();
  const copy = text.home.ribbon;
  const drawer = panel === "missions";

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className={`ace-ribbon-root ${drawer ? "is-drawer" : ""}`} role="presentation">
      <button
        type="button"
        className="ace-ribbon-backdrop"
        aria-label={copy.closeOverlay}
        onClick={onClose}
        suppressHydrationWarning
      />
      <section
        className={`ace-ribbon-panel ${drawer ? "ace-ribbon-drawer" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        {panel === "rewards" ? (
          <>
            <p className="ace-ribbon-kicker">{copy.rewards.kicker}</p>
            <h2 id={titleId} className="ace-ribbon-title">
              {copy.rewards.title}
            </h2>
            <ol className="ace-ribbon-calendar">
              {Array.from({ length: 7 }, (_, index) => {
                const day = index + 1;
                const featured = day === 7;
                return (
                  <li key={day} className={featured ? "is-featured" : ""}>
                    <span>{interpolate(copy.rewards.day, { n: day })}</span>
                    <strong>
                      {featured
                        ? interpolate(copy.rewards.featuredReward, { n: day })
                        : copy.rewards.previewSlot}
                    </strong>
                  </li>
                );
              })}
            </ol>
          </>
        ) : null}

        {panel === "missions" ? (
          <>
            <p className="ace-ribbon-kicker">{copy.missions.kicker}</p>
            <h2 id={titleId} className="ace-ribbon-title">
              {copy.missions.title}
            </h2>
            <ul className="ace-ribbon-missions">
              {MISSIONS.map((mission) => (
                <li key={mission.id}>
                  <span>{copy.missions.names[mission.id]}</span>
                  <strong>{mission.progress}</strong>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {panel === "shop" ? (
          <>
            <p className="ace-ribbon-kicker">{copy.shop.kicker}</p>
            <h2 id={titleId} className="ace-ribbon-title">
              {copy.shop.title}
            </h2>
            <ul className="ace-ribbon-shop">
              {SHOP_ITEMS.map((item) => (
                <li key={item.id}>
                  <span className="ace-ribbon-mock">{copy.shop.mockBadge}</span>
                  <strong>{text.desk.shop.items[item.id].name}</strong>
                  <em>{text.desk.shop.items[item.id].tag}</em>
                </li>
              ))}
            </ul>
            <p className="ace-ribbon-note">
              <Link href="/shop">{copy.shop.fullPreview}</Link>
            </p>
          </>
        ) : null}

        <p className="ace-ribbon-note">{copy.disclosure}</p>
        <button type="button" className="ace-ribbon-close" onClick={onClose} suppressHydrationWarning>
          {copy.close}
        </button>
      </section>
    </div>
  );
}

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function LobbyRibbon() {
  const { t } = useI18n();
  const copy = useText().home.ribbon;
  const [panel, setPanel] = useState<RibbonPanel | null>(null);
  const mounted = useHydrated();

  function label(key: MessageKey) {
    return mounted ? t(key) : translate("en", key);
  }

  return (
    <>
      <div className="ace-ribbon-actions" suppressHydrationWarning>
        <button
          type="button"
          className="ace-ribbon-cta"
          aria-haspopup="dialog"
          aria-expanded={mounted && panel === "rewards"}
          onClick={() => setPanel("rewards")}
          suppressHydrationWarning
        >
          {label("loginRewards")}
        </button>
        <button
          type="button"
          className="ace-ribbon-cta"
          aria-haspopup="dialog"
          aria-expanded={mounted && panel === "missions"}
          onClick={() => setPanel("missions")}
          suppressHydrationWarning
        >
          {label("dailyMissions")}
        </button>
        <button
          type="button"
          className="ace-ribbon-cta"
          aria-haspopup="dialog"
          aria-expanded={mounted && panel === "shop"}
          aria-label={copy.shop.openAria}
          onClick={() => setPanel("shop")}
          suppressHydrationWarning
        >
          {label("aceShop")}
        </button>
      </div>
      {panel ? <RibbonOverlay panel={panel} onClose={() => setPanel(null)} /> : null}
    </>
  );
}
