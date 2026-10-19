/**
 * Public i18n. Every SITE_LOCALES id has a complete MessageBag.
 * Adding a language means one row in languages.ts, one flag, and one bag here.
 * Admin chrome is not in this module — see `@/lib/admin-i18n` (English + Hebrew only).
 */
import { SITE_LOCALES } from "@/lib/languages";
import { EN, type MessageBag } from "@/lib/i18n/en";
import { HE } from "@/lib/i18n/he";
import { AR } from "@/lib/i18n/ar";
import { ARZ } from "@/lib/i18n/arz";
import { RU } from "@/lib/i18n/ru";
import { ES } from "@/lib/i18n/es";
import { PT } from "@/lib/i18n/pt";
import { PT_BR } from "@/lib/i18n/pt-br";
import { FR } from "@/lib/i18n/fr";
import { ZH } from "@/lib/i18n/zh";
import { JA } from "@/lib/i18n/ja";
import { HI } from "@/lib/i18n/hi";
import { SV } from "@/lib/i18n/sv";
import { DE } from "@/lib/i18n/de";
import { UK } from "@/lib/i18n/uk";
import { TH } from "@/lib/i18n/th";
import { RO } from "@/lib/i18n/ro";
import { TR } from "@/lib/i18n/tr";
import { PL } from "@/lib/i18n/pl";
import { KO } from "@/lib/i18n/ko";
import { CS } from "@/lib/i18n/cs";
import { FI } from "@/lib/i18n/fi";
import { ID } from "@/lib/i18n/id";
import { HU } from "@/lib/i18n/hu";
import { HR } from "@/lib/i18n/hr";
import { MK } from "@/lib/i18n/mk";

export { EN, type MessageBag, type MessageKey } from "@/lib/i18n/en";
export { HE } from "@/lib/i18n/he";
export { AR } from "@/lib/i18n/ar";
export { ARZ } from "@/lib/i18n/arz";
export { RU } from "@/lib/i18n/ru";
export { ES } from "@/lib/i18n/es";
export { PT } from "@/lib/i18n/pt";
export { FR } from "@/lib/i18n/fr";
export { ZH } from "@/lib/i18n/zh";
export { JA } from "@/lib/i18n/ja";
export { HI } from "@/lib/i18n/hi";
export { SV } from "@/lib/i18n/sv";
export { DE } from "@/lib/i18n/de";
export { UK } from "@/lib/i18n/uk";
export { TH } from "@/lib/i18n/th";
export { RO } from "@/lib/i18n/ro";
export { TR } from "@/lib/i18n/tr";
export { PL } from "@/lib/i18n/pl";

export const DICTIONARIES: Record<string, MessageBag> = {
  en: EN,
  he: HE,
  ar: AR,
  ru: RU,
  es: ES,
  pt: PT,
  "pt-BR": PT_BR,
  fr: FR,
  zh: ZH,
  ja: JA,
  hi: HI,
  arz: ARZ,
  sv: SV,
  de: DE,
  uk: UK,
  th: TH,
  ro: RO,
  tr: TR,
  pl: PL,
  ko: KO,
  cs: CS,
  fi: FI,
  id: ID,
  hu: HU,
  hr: HR,
  mk: MK,
};

for (const locale of SITE_LOCALES) {
  if (!DICTIONARIES[locale.id]) {
    throw new Error(`Missing dictionary for ${locale.id}`);
  }
}

export { interpolate } from "@/lib/interpolate";
