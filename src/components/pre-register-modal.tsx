"use client";

import { useEffect, useId, useState } from "react";
import { useI18n } from "@/components/locale-provider";

export function PlanSelectButton({
  label,
  ariaLabel,
}: {
  label: string;
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="ace-plan-cta"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={ariaLabel ?? label}
        onClick={() => setOpen(true)}
      >
        {label}
      </button>
      {open ? <PreRegisterModal onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function PreRegisterModal({ onClose }: { onClose: () => void }) {
  const { t } = useI18n();
  const titleId = useId();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="ace-prereg-root" role="presentation" onClick={onClose}>
      <div
        className="ace-prereg-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="ace-prereg-grid" aria-hidden="true">
          {Array.from({ length: 16 }, (_, index) => (
            <span key={index} className="ace-prereg-token" style={{ animationDelay: `${index * 90}ms` }} />
          ))}
        </div>
        <h2 id={titleId} className="ace-prereg-title">
          {t("preRegisterTitle")}
        </h2>
        <p className="ace-prereg-body">{t("preRegisterBody")}</p>
        <button type="button" className="ace-prereg-close" aria-label={t("closeModal")} onClick={onClose}>
          {t("closeModal")}
        </button>
      </div>
    </div>
  );
}
