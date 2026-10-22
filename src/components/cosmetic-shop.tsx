"use client";

import { useState } from "react";
import { useUi } from "@/components/use-ui";
import { interpolate } from "@/lib/interpolate";
import { cosmeticStyle, fmtUsd } from "@/lib/cosmetics";
import type { ShopItem } from "@/server/cosmetics";
import { CheckoutLegal, PaddleBuyButton } from "@/components/paddle-checkout";
import "./cosmetic-shop.css";

/** R49 cosmetic shop: real catalog from the DB, one-time Paddle checkout, equip owned items. Visual only. */
export function CosmeticShop({ items }: { items: ShopItem[] | null }) {
  const t = useUi().r49;
  const [list, setList] = useState(items ?? []);
  const kinds: Record<ShopItem["kind"], string> = { FRAME: t.kindFrame, BANNER: t.kindBanner, CARD_EFFECT: t.kindEffect, NAME_COLOR: t.kindName };
  const equip = async (it: ShopItem, on: boolean) => {
    const r = await fetch("/api/cosmetics/equip", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ itemId: it.id, equipped: on }) });
    if (r.ok) setList((l) => l.map((x) => (x.kind === it.kind ? { ...x, equipped: x.id === it.id ? on : on ? false : x.equipped } : x)));
  };
  return (
    <section className="cs49" aria-labelledby="cs49-t">
      <h2 id="cs49-t" className="cs49-t">{t.shopTitle}</h2>
      <p className="cs49-note">{t.cosmeticOnly}</p>
      {items === null ? <p className="cs49-empty">{t.shopDown}</p> : list.length === 0 ? <p className="cs49-empty" data-empty="1">{t.shopEmpty}</p> : (
        <ul className="cs49-grid">
          {list.map((it) => (
            <li key={it.id} className="cs49-card" data-kind={it.kind}>
              <div className="cs49-prev" aria-hidden="true">
                <span className="cs49-prev-card" style={it.kind === "BANNER" || it.kind === "CARD_EFFECT" ? cosmeticStyle(it.kind, it.color) : undefined}>
                  <span className="cs49-prev-av" style={it.kind === "FRAME" ? cosmeticStyle(it.kind, it.color) : undefined} />
                  <span className="cs49-prev-name" style={it.kind === "NAME_COLOR" ? cosmeticStyle(it.kind, it.color) : undefined}>Player</span>
                </span>
              </div>
              <p className="cs49-kind">{kinds[it.kind]}</p>
              <h3 className="cs49-name">{it.name}</h3>
              {it.description ? <p className="cs49-desc">{it.description}</p> : null}
              {it.owned ? (
                <button type="button" className={`pc49-buy${it.equipped ? " is-on" : ""}`} onClick={() => void equip(it, !it.equipped)}>{it.equipped ? t.unequip : t.equip}</button>
              ) : (
                <PaddleBuyButton kind="COSMETIC" refId={it.id} label={interpolate(t.buy, { price: fmtUsd(it.priceCents) })} />
              )}
              {it.owned ? <p className="cs49-owned">{t.owned}</p> : null}
            </li>
          ))}
        </ul>
      )}
      <CheckoutLegal />
    </section>
  );
}
