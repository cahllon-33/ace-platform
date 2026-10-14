"use client";

import { useCallback } from "react";
import { useI18n } from "@/components/locale-provider";
import {
  adminDir,
  adminLang,
  adminLocaleId,
  translateAdmin,
  type AdminMessageKey,
} from "@/lib/admin-i18n";

export function useAdminI18n() {
  const { locale } = useI18n();
  const localeId = adminLocaleId(locale.id);
  const t = useCallback(
    (key: AdminMessageKey, values?: Record<string, string | number>) =>
      translateAdmin(locale.id, key, values),
    [locale.id],
  );
  return {
    t,
    dir: adminDir(locale.id),
    lang: adminLang(locale.id),
    hebrew: localeId === "he",
  };
}
