import { UI_EN, type Ui } from "./en";
import { UI_LOCALES } from "./locales";

export type { Ui } from "./en";

export function uiFor(localeId: string | null | undefined): Ui {
  return (localeId && UI_LOCALES[localeId]) || UI_EN;
}
