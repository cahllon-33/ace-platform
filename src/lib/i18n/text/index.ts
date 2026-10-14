import { SITE_LOCALES } from "@/lib/languages";
import { TEXT_AR } from "./ar";
import { TEXT_ARZ } from "./arz";
import { TEXT_CS } from "./cs";
import { TEXT_DE } from "./de";
import { TEXT_EN } from "./en";
import { TEXT_ES } from "./es";
import { TEXT_FI } from "./fi";
import { TEXT_FR } from "./fr";
import { TEXT_HE } from "./he";
import { TEXT_HI } from "./hi";
import { TEXT_HR } from "./hr";
import { TEXT_HU } from "./hu";
import { TEXT_ID } from "./id";
import { TEXT_JA } from "./ja";
import { TEXT_KO } from "./ko";
import { TEXT_MK } from "./mk";
import { TEXT_PL } from "./pl";
import { TEXT_PT } from "./pt";
import { TEXT_PT_BR } from "./pt-br";
import { TEXT_RO } from "./ro";
import { TEXT_RU } from "./ru";
import { TEXT_SV } from "./sv";
import { TEXT_TH } from "./th";
import { TEXT_TR } from "./tr";
import { TEXT_UK } from "./uk";
import { TEXT_ZH } from "./zh";
import { SERVER_ONLY_AREAS, type ClientText, type TextBag } from "./types";

export type { ClientText, TextBag } from "./types";

/** Page text per SITE_LOCALES id. Same contract as DICTIONARIES in `@/lib/i18n`. */
export const TEXTS: Record<string, TextBag> = {
  en: TEXT_EN,
  he: TEXT_HE,
  ko: TEXT_KO,
  pl: TEXT_PL,
  ru: TEXT_RU,
  es: TEXT_ES,
  pt: TEXT_PT,
  "pt-BR": TEXT_PT_BR,
  cs: TEXT_CS,
  de: TEXT_DE,
  fr: TEXT_FR,
  fi: TEXT_FI,
  sv: TEXT_SV,
  zh: TEXT_ZH,
  tr: TEXT_TR,
  id: TEXT_ID,
  th: TEXT_TH,
  ja: TEXT_JA,
  ar: TEXT_AR,
  hu: TEXT_HU,
  hr: TEXT_HR,
  mk: TEXT_MK,
  uk: TEXT_UK,
  hi: TEXT_HI,
  arz: TEXT_ARZ,
  ro: TEXT_RO,
};

for (const locale of SITE_LOCALES) {
  if (!TEXTS[locale.id]) {
    throw new Error(`Missing page text for ${locale.id}`);
  }
}

export function textFor(localeId: string): TextBag {
  return TEXTS[localeId] ?? TEXT_EN;
}

export function clientText(bag: TextBag): ClientText {
  const copy: Record<string, unknown> = { ...bag };
  for (const area of SERVER_ONLY_AREAS) delete copy[area];
  return copy as ClientText;
}
