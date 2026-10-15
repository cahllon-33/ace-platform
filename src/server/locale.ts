import { uiFor, type Ui } from "@/lib/i18n/ui";
import { cookies } from "next/headers";
import { textFor, type TextBag } from "@/lib/i18n/text";
import { SITE_LOCALES, type LocaleOption } from "@/lib/languages";
import { isLocaleId, LOCALE_COOKIE } from "@/lib/locale-pref";

export async function getLocaleId(): Promise<string> {
  const jar = await cookies();
  const chosen = jar.get(LOCALE_COOKIE)?.value;
  return isLocaleId(chosen) ? chosen : "en";
}

export async function getLocale(): Promise<LocaleOption> {
  const id = await getLocaleId();
  return SITE_LOCALES.find((item) => item.id === id) ?? SITE_LOCALES.find((item) => item.id === "en")!;
}

export async function getText(): Promise<TextBag> {
  return textFor(await getLocaleId());
}

export async function getUi(): Promise<Ui> {
  return uiFor(await getLocaleId());
}
