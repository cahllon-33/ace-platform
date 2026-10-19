"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { useText } from "@/components/text-provider";
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  saveConsent,
  subscribeConsent,
} from "@/lib/consent";

export function CookieSettings() {
  const [open, setOpen] = useState(false);
  const analyticsId = useId();
  const marketingId = useId();
  const essentialId = useId();
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getServerConsentSnapshot);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const text = useText();
  const settings = text.consent.settings;
  const categories = text.consent.categories;

  return (
    <>
      <button
        type="button"
        className="text-white/55 hover:text-ace-gold-bright"
        aria-label={settings.openLabel}
        onClick={() => {
          setAnalytics(consent?.analytics ?? false);
          setMarketing(consent?.marketing ?? false);
          setOpen(true);
        }}
      >
        {settings.open}
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
        >
          <div className="max-w-md rounded-2xl border border-[#FFD76A]/40 bg-[#0B0B0C] p-6">
            <h2 id="cookie-title" className="text-lg font-semibold text-white">
              {settings.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-ace-muted">
              {settings.body}{" "}
              <a href="/cookie-policy" className="text-[#FFD76A]">
                {settings.cookiePolicyLink}
              </a>
            </p>
            <fieldset className="mt-4 space-y-2">
              <legend className="sr-only">{categories.legend}</legend>
              <label htmlFor={essentialId} className="ace-cookie-option">
                <input id={essentialId} type="checkbox" checked disabled aria-disabled="true" />
                <span>
                  {categories.essential}
                  <em>{categories.required}</em>
                </span>
              </label>
              <label htmlFor={analyticsId} className="ace-cookie-option">
                <input
                  id={analyticsId}
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                />
                <span>
                  {categories.analytics}
                  <em>{categories.optional}</em>
                </span>
              </label>
              <label htmlFor={marketingId} className="ace-cookie-option">
                <input
                  id={marketingId}
                  type="checkbox"
                  checked={marketing}
                  onChange={(event) => setMarketing(event.target.checked)}
                />
                <span>
                  {categories.marketing}
                  <em>{categories.optional}</em>
                </span>
              </label>
            </fieldset>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                className="ace-cookie-accept min-h-11 px-4"
                aria-label={settings.saveLabel}
                onClick={() => {
                  saveConsent({ analytics, marketing });
                  setOpen(false);
                }}
              >
                {settings.save}
              </button>
              <button
                type="button"
                className="rounded-full border border-[#FFD76A]/50 px-4 py-2 text-sm text-[#FFD76A]"
                aria-label={settings.closeLabel}
                onClick={() => setOpen(false)}
              >
                {settings.close}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
