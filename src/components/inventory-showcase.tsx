import { interpolate } from "@/lib/i18n";
import { steamIconUrl } from "@/lib/steam-inventory";
import type { Showcase } from "@/server/steam-inventory";
import type { Ui } from "@/lib/i18n/ui/en";
import { InventoryToggle } from "@/components/inventory-toggle";
import "./inventory-showcase.css";

/** R49b: public CS2 inventory showcase (display only: no selling, buying or trading). */
export function InventoryShowcase({ data, hidden, isOwner, t, locale }: { data: Showcase | null; hidden: boolean; isOwner: boolean; t: Ui["r49b"]; locale: string }) {
  if (hidden && !isOwner) return null;
  const toggle = isOwner ? <InventoryToggle hidden={hidden} hideLabel={t.hide} showLabel={t.show} /> : null;
  const head = (
    <header className="inv49-head">
      <h2 id="inv49-title">{t.title}</h2>
      {toggle}
    </header>
  );
  if (hidden) {
    return (
      <section className="inv49 is-hidden" aria-labelledby="inv49-title">
        {head}
        <p className="inv49-muted">{t.hiddenOwner}</p>
      </section>
    );
  }
  if (!data || data.status === "error") {
    return <section className="inv49" aria-labelledby="inv49-title">{head}<p className="inv49-muted">{t.unavailable}</p></section>;
  }
  if (data.status === "private") {
    return (
      <section className="inv49" aria-labelledby="inv49-title">
        {head}
        <p className="inv49-private"><strong>{t.private}</strong> <span>{t.privateBody}</span></p>
      </section>
    );
  }
  const anyPrice = data.items.some((i) => i.price);
  const rest = Math.max(0, data.total - data.items.reduce((n, i) => n + i.count, 0));
  return (
    <section className="inv49" aria-labelledby="inv49-title">
      {head}
      {data.items.length === 0 ? (
        <p className="inv49-muted">{t.empty}</p>
      ) : (
        <ul className="inv49-grid">
          {data.items.map((it) => (
            <li key={it.marketHashName} className="inv49-item" style={it.rarityColor ? ({ "--inv49-r": it.rarityColor } as React.CSSProperties) : undefined}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={steamIconUrl(it.icon)} alt="" width={128} height={96} loading="lazy" referrerPolicy="no-referrer" />
              <span className="inv49-name" title={it.marketHashName}>{it.name}{it.count > 1 ? ` ×${it.count}` : ""}</span>
              <span className="inv49-meta">{it.rarity || it.type}</span>
              {it.price ? <span className="inv49-price">{it.price}</span> : null}
            </li>
          ))}
        </ul>
      )}
      <footer className="inv49-foot">
        {rest > 0 ? <span>{interpolate(t.more, { n: rest })}</span> : null}
        {data.fetchedAt ? <span>{interpolate(t.updated, { date: new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" }).format(data.fetchedAt) })}</span> : null}
        {anyPrice ? <span>{t.priceSource}</span> : null}
        <span>{t.note}</span>
      </footer>
    </section>
  );
}

/** Small strip of the rarest items for the profile banner. */
export function InventoryBannerStrip({ data, label }: { data: Showcase | null; label: string }) {
  const top = data?.status === "public" ? data.items.slice(0, 3) : [];
  if (top.length === 0) return null;
  return (
    <a className="inv49-strip" href="#inv49-title" aria-label={label}>
      {top.map((it) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={it.marketHashName} src={steamIconUrl(it.icon, 96)} alt={it.name} title={it.name} width={64} height={48} referrerPolicy="no-referrer" style={it.rarityColor ? { borderColor: it.rarityColor } : undefined} />
      ))}
    </a>
  );
}
