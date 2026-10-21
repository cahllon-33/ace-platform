"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "@/components/locale-provider";
import "./support-contact.css";

function TicketModal({ onClose }: { onClose: () => void }) {
  const { t } = useI18n();
  const titleId = useId();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className="ace-desk-modal" role="presentation">
      <button type="button" className="ace-desk-backdrop" aria-label={t("closeOverlay")} onClick={onClose} />
      <section className="ace-desk-dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <p className="ace-desk-kicker">{t("supportKicker")}</p>
        <h2 id={titleId} className="ace-desk-dialog-title">
          {t("supportTicketTitle")}
        </h2>
        <p className="ace-desk-copy">{t("supportTicketBody")}</p>
        <button type="button" className="ace-desk-close" onClick={onClose}>
          {t("closeOverlay")}
        </button>
      </section>
    </div>,
    document.body,
  );
}

export function SupportHub() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const cards = [
    { title: t("supportCat1Title"), body: t("supportCat1Body") },
    { title: t("supportCat2Title"), body: t("supportCat2Body") },
    { title: t("supportCat3Title"), body: t("supportCat3Body") },
  ];

  return (
    <>
      <header className="ace-desk-hero pg41-hero">
        <p className="ace-desk-kicker">{t("supportKicker")}</p>
        <h1 className="ace-desk-title pg41-h1">{t("supportTitle")}</h1>
        <p className="ace-desk-lede">{t("supportLede")}</p>
      </header>
      <ul className="ace-desk-grid">
        {cards.map((card, index) => (
          <li key={card.title} className="ace-desk-card">
            <div className="ace-desk-extrude" aria-hidden="true" />
            <article className="ace-desk-face backdrop-blur-xl">
              <p className="ace-desk-kicker">{t("supportCategory", { n: `0${index + 1}` })}</p>
              <h2 className="ace-desk-card-title">{card.title}</h2>
              <p className="ace-desk-copy">{card.body}</p>
            </article>
          </li>
        ))}
      </ul>
      <div className="ace-desk-actions">
        <button type="button" className="ace-desk-gold" onClick={() => setOpen(true)}>
          {t("supportTicket")}
        </button>
      </div>
      <aside className="ace-desk-notice" role="note">
        <p>{t("supportDisclosure")}</p>
      </aside>
      {open ? <TicketModal onClose={() => setOpen(false)} /> : null}
    </>
  );
}
