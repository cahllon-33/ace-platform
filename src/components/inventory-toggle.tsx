"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

/** R49b: owner-only hide/show switch for the Steam inventory showcase. */
export function InventoryToggle({ hidden, hideLabel, showLabel }: { hidden: boolean; hideLabel: string; showLabel: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  return (
    <button
      type="button"
      className="inv49-toggle"
      disabled={busy}
      aria-pressed={hidden}
      onClick={async () => {
        setBusy(true);
        await fetch("/api/profile/inventory", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ hidden: !hidden }) }).catch(() => null);
        setBusy(false);
        router.refresh();
      }}
    >
      {hidden ? showLabel : hideLabel}
    </button>
  );
}
