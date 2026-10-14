"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import {
  MARKET_ITEMS,
  MARKET_TABS,
  type MarketCategory,
  type MarketItem,
} from "@/lib/marketplace";
import { interpolate, type MessageKey } from "@/lib/i18n";
import type { ClientText } from "@/lib/i18n/text";

function itemPrice(text: ClientText, item: MarketItem) {
  return interpolate(text.desk.shop.items[item.id].price, { rp: item.rp ?? "" });
}

const TAB_KEY: Record<MarketCategory, MessageKey> = {
  skins: "shopTabSkins",
  cosmetics: "shopTabCosmetics",
  access: "shopTabAccess",
};

export function ShopLocaleHero() {
  const { t } = useI18n();
  const text = useText();
  return (
    <header className="ace-market-hero">
      <p className="ace-market-kicker">{t("shopKicker")}</p>
      <h1 className="ace-market-title">{t("shopTitle")}</h1>
      <p className="ace-market-sub">{t("shopLede")}</p>
      <p className="ace-market-sub-note">{t("shopNote")}</p>
      <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-[#fff6c2]">
        {text.desk.shop.heroHonesty}
      </p>
    </header>
  );
}

function InspectModal({ item, onClose }: { item: MarketItem; onClose: () => void }) {
  const { t } = useI18n();
  const text = useText();
  const titleId = useId();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className="ace-market-modal" role="presentation">
      <button type="button" className="ace-market-backdrop" aria-label={t("closeOverlay")} onClick={onClose} />
      <section className="ace-market-dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <p className="ace-market-kicker">{t("shopInspectKicker")}</p>
        <h2 id={titleId} className="ace-market-dialog-title">
          {t("shopInspectTitle")}
        </h2>
        <p className="ace-market-dialog-name">{text.desk.shop.items[item.id].name}</p>
        <p className="ace-market-dialog-copy">{t("shopInspectCopy")}</p>
        <p className="ace-market-dialog-meta">{text.desk.shop.items[item.id].tag}</p>
        <p className="ace-market-dialog-meta">{itemPrice(text, item)}</p>
        <button type="button" className="ace-market-close" onClick={onClose}>
          {t("closeOverlay")}
        </button>
      </section>
    </div>,
    document.body,
  );
}

function AssetMark({ item }: { item: MarketItem }) {
  const { t } = useI18n();
  return (
    <div className="ace-market-plate" aria-hidden="true">
      <span className="ace-market-index">{t("shopItemIndex", { n: item.index })}</span>
      <svg
        viewBox="0 0 48 48"
        width={48}
        height={48}
        className="ace-market-glyph h-12 w-12 max-h-12 max-w-12 shrink-0"
      >
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#0B0B0C" stroke="#FFD700" strokeWidth="1.5" />
        <path
          d="M14 32 L24 12 L34 32 Z"
          fill="none"
          stroke="#FFD700"
          strokeWidth="1.6"
        />
        <circle cx="24" cy="28" r="3" fill="#FFD700" />
      </svg>
    </div>
  );
}

export function MarketplaceCatalog() {
  const { t } = useI18n();
  const text = useText();
  const [tab, setTab] = useState<MarketCategory>("skins");
  const [inspect, setInspect] = useState<MarketItem | null>(null);

  return (
    <>
      <nav className="ace-market-tabs" aria-label={t("shopTabsAria")}>
        {MARKET_TABS.map((entry) => (
          <button
            key={entry.id}
            type="button"
            className={`ace-market-tab ${tab === entry.id ? "is-active" : ""}`}
            aria-pressed={tab === entry.id}
            onClick={() => setTab(entry.id)}
          >
            {t(TAB_KEY[entry.id])}
          </button>
        ))}
      </nav>

      <ul className="ace-market-grid">
        {MARKET_ITEMS.map((item) => (
          <li
            key={item.id}
            className={`ace-market-card perspective-[1000px] ${item.category === tab ? "is-hot" : ""}`}
          >
            <div className="ace-market-extrude" aria-hidden="true" />
            <div
              className={`ace-market-face transform-gpu bg-[#020203] transition-all duration-500 hover:rotate-x-12 hover:rotate-y-12 ${
                item.category === "skins" ? "ace-prize-mesh" : ""
              }`}
            >
              <AssetMark item={item} />
              {item.category === "skins" ? (
                <p className="text-[0.68rem] font-extrabold leading-5 tracking-[0.06em] text-[#FFD700]">
                  {text.desk.shop.prizeBanner}
                </p>
              ) : null}
              <p className="ace-market-tag">{text.desk.shop.items[item.id].tag}</p>
              <h2 className="ace-market-name">{text.desk.shop.items[item.id].name}</h2>
              <p className="ace-market-price">{itemPrice(text, item)}</p>
              <p className="ace-market-stat">{t("shopVolatility")}</p>
              <p className="ace-market-stat">{t("shopDelivery")}</p>
              <button
                type="button"
                className="ace-market-inspect"
                onClick={() => setInspect(item)}
              >
                {t("shopInspect")}
              </button>
            </div>
          </li>
        ))}
      </ul>

      <aside className="ace-market-notice" role="note">
        <p>{text.desk.shop.notice}</p>
      </aside>
      {inspect ? <InspectModal item={inspect} onClose={() => setInspect(null)} /> : null}
    </>
  );
}
