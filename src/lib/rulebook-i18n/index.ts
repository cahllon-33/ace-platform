import { PENALTY_TABLE, RULEBOOK } from "@/lib/rulebook";
import type { RulebookText } from "./types";
import { RB_AR } from "./ar";
import { RB_ARZ } from "./arz";
import { RB_CS } from "./cs";
import { RB_DE } from "./de";
import { RB_ES } from "./es";
import { RB_FI } from "./fi";
import { RB_FR } from "./fr";
import { RB_HE } from "./he";
import { RB_HI } from "./hi";
import { RB_HR } from "./hr";
import { RB_HU } from "./hu";
import { RB_ID } from "./id";
import { RB_JA } from "./ja";
import { RB_KO } from "./ko";
import { RB_MK } from "./mk";
import { RB_PL } from "./pl";
import { RB_PT_BR } from "./pt-br";
import { RB_PT } from "./pt";
import { RB_RO } from "./ro";
import { RB_RU } from "./ru";
import { RB_SV } from "./sv";
import { RB_TH } from "./th";
import { RB_TR } from "./tr";
import { RB_UK } from "./uk";
import { RB_ZH } from "./zh";

export type { RulebookText } from "./types";

/** English text derived from the canonical RULEBOOK so it can never drift. */
export const RB_EN: RulebookText = {
  summary16: RULEBOOK[15]?.summary ?? "",
  clauses: RULEBOOK.map((section) => section.clauses.map((clause) => clause.text)),
  penalties: PENALTY_TABLE.map((row) => [row.offence, row.first, row.repeat]),
};

export const RULEBOOK_LOCALES: Record<string, RulebookText> = {
  en: RB_EN,
  "ar": RB_AR,
  "arz": RB_ARZ,
  "cs": RB_CS,
  "de": RB_DE,
  "es": RB_ES,
  "fi": RB_FI,
  "fr": RB_FR,
  "he": RB_HE,
  "hi": RB_HI,
  "hr": RB_HR,
  "hu": RB_HU,
  "id": RB_ID,
  "ja": RB_JA,
  "ko": RB_KO,
  "mk": RB_MK,
  "pl": RB_PL,
  "pt-BR": RB_PT_BR,
  "pt": RB_PT,
  "ro": RB_RO,
  "ru": RB_RU,
  "sv": RB_SV,
  "th": RB_TH,
  "tr": RB_TR,
  "uk": RB_UK,
  "zh": RB_ZH,
};

export function rulebookFor(localeId: string | null | undefined): RulebookText {
  return (localeId && RULEBOOK_LOCALES[localeId]) || RB_EN;
}
