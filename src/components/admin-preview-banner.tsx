"use client";

import { useAdminI18n } from "@/components/admin-locale";

export function AdminPreviewBanner() {
  const { t, dir } = useAdminI18n();
  return (
    <p role="note" dir={dir} className="ace-admin-preview-banner">
      {t("previewBanner")}
    </p>
  );
}
