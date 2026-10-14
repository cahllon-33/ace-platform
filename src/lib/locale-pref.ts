import { SITE_LOCALES } from "@/lib/languages";

export const LOCALE_COOKIE = "ace_locale";
export const LOCALE_STORAGE_KEY = "ace-locale";

export function isLocaleId(value: string | null | undefined): value is string {
  return Boolean(value && SITE_LOCALES.some((item) => item.id === value));
}

export function localeFromAcceptLanguage(header: string | null): string {
  if (!header) return "en";
  const tags = header
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter((part): part is string => Boolean(part));

  for (const tag of tags) {
    const exact = SITE_LOCALES.find(
      (item) => item.code.toLowerCase() === tag || item.id === tag,
    );
    if (exact) return exact.id;
    const primary = tag.split("-")[0];
    if (primary === "ar") return "ar";
    if (primary === "zh") return "zh";
    if (primary === "pt") return "pt";
    const byPrimary = SITE_LOCALES.find((item) => item.id === primary);
    if (byPrimary) return byPrimary.id;
  }
  return "en";
}
