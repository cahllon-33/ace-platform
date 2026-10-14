/**
 * Public i18n surface. The menu, html lang, and dictionaries all read SITE_LOCALES.
 *
 * Complete native MessageBags live under `src/lib/i18n/{locale}.ts`.
 * Every public route (home, tournaments, shop, teams, rules, support,
 * contact) reads this dictionary. Hebrew, Arabic, and Egyptian Arabic
 * are RTL via SITE_LOCALES dir flags.
 *
 * Admin chrome is English + Hebrew only. Import `@/lib/admin-i18n`
 * (or the admin helpers re-exported below). Never put admin keys on
 * the public MessageBag. Any locale except `he` falls back to English LTR
 * inside the admin shell.
 */
export {
  DICTIONARIES,
  EN,
  interpolate,
  type MessageBag,
  type MessageKey,
} from "@/lib/i18n";

export {
  adminDir,
  adminLang,
  adminLocaleId,
  translateAdmin,
  type AdminMessageKey,
} from "@/lib/admin-i18n";
