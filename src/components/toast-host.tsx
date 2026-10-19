"use client";

import { useEffect, useState } from "react";
import { useUi } from "@/components/use-ui";
import { dismissToast, subscribeToasts, type ToastItem } from "@/lib/toast-store";

/** Single toast region for the whole site: dark panel, gold accent, aria-live. */
export function ToastHost() {
  const ui = useUi();
  const [items, setItems] = useState<ToastItem[]>([]);
  useEffect(() => subscribeToasts(setItems), []);
  return (
    <div className="ace-toast-region" role="region" aria-label={ui.r38.toast.region}>
      <div aria-live="polite" aria-atomic="false" className="ace-toast-stack">
        {items.map((t) => (
          <div key={t.id} className={`ace-toast is-${t.kind}`} role={t.kind === "error" ? "alert" : "status"}>
            <span className="ace-toast-mark" aria-hidden="true" />
            <p>{t.message}</p>
            <button type="button" onClick={() => dismissToast(t.id)} aria-label={ui.r38.toast.dismiss}>
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
