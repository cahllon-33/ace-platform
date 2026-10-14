"use client";

import { useEffect, useRef, useState } from "react";
import { setLocaleId, useI18n } from "@/components/locale-provider";
import { LocaleFlag } from "@/components/locale-flag";
import { SITE_LOCALES } from "@/lib/languages";

export function LanguageMenu() {
  const { locale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointer(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  return (
    <div className="ace-lang-menu" ref={rootRef}>
      <button
        type="button"
        className="ace-lang-trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        <LocaleFlag code={locale.flag} />
        <span>{locale.native}</span>
      </button>
      {open ? (
        <ul className="ace-lang-drop" role="listbox" aria-label={t("languagesKicker")}>
          {SITE_LOCALES.map((option) => (
            <li key={option.id}>
              <button
                type="button"
                role="option"
                aria-selected={option.id === locale.id}
                lang={option.code}
                dir={option.dir}
                onClick={() => {
                  setLocaleId(option.id);
                  setOpen(false);
                }}
              >
                <LocaleFlag code={option.flag} />
                <span>{option.native}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
