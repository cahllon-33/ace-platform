"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { useText } from "@/components/text-provider";
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  saveConsent,
  subscribeConsent,
} from "@/lib/consent";

function subscribeReady() {
  return () => {};
}

export function CookieConsentBanner() {
  const analyticsId = useId();
  const marketingId = useId();
  const essentialId = useId();
  const ready = useSyncExternalStore(subscribeReady, () => true, () => false);
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getServerConsentSnapshot);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const text = useText();
  const banner = text.consent.banner;
  const categories = text.consent.categories;

  // R39: rendered on the server too, so it paints with the HTML instead of after hydration (LCP).
  // Visitors who already chose are hidden before paint by the inline `ace-consented` class (layout.tsx).
  if (ready && consent) return null;

  return (
    <div
      className="ace-cookie-tray"
      role="dialog"
      aria-modal="false"
      aria-labelledby="ace-cookie-title"
      aria-describedby="ace-cookie-copy"
    >
      <div className="ace-cookie-tray-inner">
        <div className="min-w-0 flex-1">
          <p id="ace-cookie-title" className="font-mono text-[0.65rem] tracking-[0.2em] text-[#FFD76A]">
            {banner.kicker}
          </p>
          <p id="ace-cookie-copy" className="mt-2 max-w-3xl text-sm leading-6 text-[#F5F3EC]">
            {banner.copy.before}{" "}
            <a href="/terms" className="text-[#FFD76A] underline-offset-2 hover:underline">
              {banner.copy.termsLink}
            </a>
            {banner.copy.afterTerms}{" "}
            <a href="/rules" className="text-[#FFD76A] underline-offset-2 hover:underline">
              {banner.copy.rulesLink}
            </a>
            {banner.copy.afterRules}{" "}
            <a href="/cookie-policy" className="text-[#FFD76A] underline-offset-2 hover:underline">
              {banner.copy.cookiePolicyLink}
            </a>{" "}
            {banner.copy.after}
          </p>
          <fieldset className="mt-4 grid gap-2 sm:grid-cols-3">
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
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:min-w-[12.5rem]">
          <button
            type="button"
            className="ace-cookie-accept"
            aria-label={banner.acceptLabel}
            onClick={() => saveConsent({ analytics: true, marketing: true })}
          >
            {banner.accept}
          </button>
          <button
            type="button"
            className="ace-cookie-reject"
            aria-label={banner.rejectLabel}
            onClick={() => saveConsent({ analytics: false, marketing: false })}
          >
            {banner.reject}
          </button>
        </div>
      </div>
    </div>
  );
}
