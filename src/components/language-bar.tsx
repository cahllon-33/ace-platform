"use client";

import { setLocaleId, useI18n } from "@/components/locale-provider";
import { LocaleFlag } from "@/components/locale-flag";
import { SITE_LOCALES } from "@/lib/languages";

export function LanguageBar() {
  const { locale, t } = useI18n();

  return (
    <div className="ace-lang-bar">
      <div className="ace-lang-inner">
        <p className="ace-lang-kicker">{t("languagesKicker")}</p>
        <ul className="ace-lang-grid">
          {SITE_LOCALES.map((option) => {
            const selected = option.id === locale.id;
            return (
              <li key={option.id}>
                <button
                  type="button"
                  className={selected ? "is-active" : undefined}
                  lang={option.code}
                  dir={option.dir}
                  aria-pressed={selected}
                  aria-label={`${option.english}. ${option.native}`}
                  onClick={() => setLocaleId(option.id)}
                >
                  <LocaleFlag code={option.flag} />
                  <span>{option.native}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
