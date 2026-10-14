export type LocaleOption = {
  id: string;
  code: string;
  native: string;
  english: string;
  dir: "ltr" | "rtl";
  flag: string;
};

/** Single source for the public language menu, html lang, and dictionaries. */
export const SITE_LOCALES: LocaleOption[] = [
  { id: "he", code: "he", native: "עברית", english: "Hebrew", dir: "rtl", flag: "il" },
  { id: "en", code: "en", native: "English", english: "English", dir: "ltr", flag: "us" },
  { id: "ko", code: "ko", native: "한국어", english: "Korean", dir: "ltr", flag: "kr" },
  { id: "pl", code: "pl", native: "Polski", english: "Polish", dir: "ltr", flag: "pl" },
  { id: "ru", code: "ru", native: "Русский", english: "Russian", dir: "ltr", flag: "ru" },
  { id: "es", code: "es", native: "Español", english: "Spanish", dir: "ltr", flag: "es" },
  { id: "pt", code: "pt", native: "Português", english: "Portuguese", dir: "ltr", flag: "pt" },
  { id: "pt-BR", code: "pt-BR", native: "Português Brasileiro", english: "Brazilian Portuguese", dir: "ltr", flag: "br" },
  { id: "cs", code: "cs", native: "Čeština", english: "Czech", dir: "ltr", flag: "cz" },
  { id: "de", code: "de", native: "Deutsch", english: "German", dir: "ltr", flag: "de" },
  { id: "fr", code: "fr", native: "Français", english: "French", dir: "ltr", flag: "fr" },
  { id: "fi", code: "fi", native: "Suomi", english: "Finnish", dir: "ltr", flag: "fi" },
  { id: "sv", code: "sv", native: "Svenska", english: "Swedish", dir: "ltr", flag: "se" },
  { id: "zh", code: "zh", native: "中文", english: "Chinese", dir: "ltr", flag: "cn" },
  { id: "tr", code: "tr", native: "Türkçe", english: "Turkish", dir: "ltr", flag: "tr" },
  { id: "id", code: "id", native: "Bahasa Indonesia", english: "Indonesian", dir: "ltr", flag: "id" },
  { id: "th", code: "th", native: "ไทย", english: "Thai", dir: "ltr", flag: "th" },
  { id: "ja", code: "ja", native: "日本語", english: "Japanese", dir: "ltr", flag: "jp" },
  { id: "ar", code: "ar", native: "العربية", english: "Arabic", dir: "rtl", flag: "sa" },
  { id: "hu", code: "hu", native: "Magyar", english: "Hungarian", dir: "ltr", flag: "hu" },
  { id: "hr", code: "hr", native: "Hrvatski", english: "Croatian", dir: "ltr", flag: "hr" },
  { id: "mk", code: "mk", native: "Македонски", english: "Macedonian", dir: "ltr", flag: "mk" },
  { id: "uk", code: "uk", native: "Українська", english: "Ukrainian", dir: "ltr", flag: "ua" },
  { id: "hi", code: "hi", native: "हिन्दी", english: "Hindi", dir: "ltr", flag: "in" },
  { id: "arz", code: "ar-EG", native: "مصرى", english: "Egyptian Arabic", dir: "rtl", flag: "eg" },
  { id: "ro", code: "ro", native: "Română", english: "Romanian", dir: "ltr", flag: "ro" },
];
