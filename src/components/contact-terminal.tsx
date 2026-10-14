"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "@/components/locale-provider";
import "./support-contact.css";
import type { MessageKey } from "@/lib/i18n";

const INQUIRIES: { id: string; key: MessageKey }[] = [
  { id: "sponsorship", key: "contactInquirySponsorship" },
  { id: "media", key: "contactInquiryMedia" },
  { id: "technical", key: "contactInquiryTechnical" },
  { id: "general", key: "contactInquiryGeneral" },
];

function ConfirmModal({ onClose }: { onClose: () => void }) {
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
        <p className="ace-desk-kicker">{t("contactKicker")}</p>
        <h2 id={titleId} className="ace-desk-dialog-title">
          {t("contactModalTitle")}
        </h2>
        <p className="ace-desk-copy">{t("contactModalBody")}</p>
        <button type="button" className="ace-desk-close" onClick={onClose}>
          {t("closeOverlay")}
        </button>
      </section>
    </div>,
    document.body,
  );
}

export function ContactTerminal() {
  const { t } = useI18n();
  const consentId = useId();
  const [name, setName] = useState("");
  const [steamId, setSteamId] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("general");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="ace-desk-hero">
        <p className="ace-desk-kicker">{t("contactKicker")}</p>
        <h1 className="ace-desk-title">{t("contactTitle")}</h1>
        <p className="ace-desk-lede">{t("contactLede")}</p>
      </header>
    <div className="ace-desk-split">
      <form
        className="ace-desk-form"
        onSubmit={(event) => {
          event.preventDefault();
          setError(null);
          if (!consent) {
            setError(t("contactConsent"));
            return;
          }
          setOpen(true);
        }}
      >
        <label className="ace-desk-label" htmlFor="contact-name">
          {t("contactName")}
        </label>
        <input
          id="contact-name"
          className="ace-desk-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          required
        />

        <label className="ace-desk-label" htmlFor="contact-steam">
          {t("contactSteamId")}
        </label>
        <input
          id="contact-steam"
          className="ace-desk-input"
          value={steamId}
          onChange={(event) => setSteamId(event.target.value)}
          autoComplete="off"
          inputMode="numeric"
        />

        <label className="ace-desk-label" htmlFor="contact-email">
          {t("contactEmail")}
        </label>
        <input
          id="contact-email"
          className="ace-desk-input"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
        />

        <label className="ace-desk-label" htmlFor="contact-inquiry">
          {t("contactInquiry")}
        </label>
        <select
          id="contact-inquiry"
          className="ace-desk-input"
          value={inquiry}
          onChange={(event) => setInquiry(event.target.value)}
        >
          {INQUIRIES.map((item) => (
            <option key={item.id} value={item.id}>
              {t(item.key)}
            </option>
          ))}
        </select>

        <label className="ace-desk-label" htmlFor="contact-message">
          {t("contactMessage")}
        </label>
        <textarea
          id="contact-message"
          className="ace-desk-textarea"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
          required
        />

        <label htmlFor={consentId} className="ace-desk-consent">
          <input
            id={consentId}
            type="checkbox"
            checked={consent}
            required
            aria-required="true"
            onChange={(event) => setConsent(event.target.checked)}
          />
          <span>{t("contactConsent")}</span>
        </label>

        <button type="submit" className="ace-desk-gold">
          {t("contactSend")}
        </button>
        {error ? <p className="ace-desk-error">{error}</p> : null}
      </form>

      <aside className="ace-desk-side">
        <p className="ace-desk-kicker">{t("contactKicker")}</p>
        <p className="ace-desk-corporate">{t("contactCorporate")}</p>
        <p className="ace-desk-copy">{t("contactDisclosure")}</p>
      </aside>
      {open ? <ConfirmModal onClose={() => setOpen(false)} /> : null}
    </div>
    </>
  );
}
