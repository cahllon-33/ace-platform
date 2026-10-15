"use client";

import { useI18n } from "@/components/locale-provider";
import { uiFor } from "@/lib/i18n/ui";

export function useUi() {
  const { locale } = useI18n();
  return uiFor(locale.id);
}
