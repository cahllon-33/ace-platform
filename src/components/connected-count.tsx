"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/locale-provider";

type PresenceState = {
  count: number;
  unavailable: boolean;
};

export function ConnectedCount() {
  const { t } = useI18n();
  const [state, setState] = useState<PresenceState | null>(null);

  useEffect(() => {
    let stop = false;

    async function load() {
      try {
        const response = await fetch("/api/presence", { cache: "no-store" });
        if (!response.ok) throw new Error("presence");
        const data = (await response.json()) as PresenceState;
        if (!stop) setState(data);
      } catch {
        if (!stop) setState({ count: 0, unavailable: true });
      }
    }

    void load();
    const id = window.setInterval(() => void load(), 30_000);
    return () => {
      stop = true;
      window.clearInterval(id);
    };
  }, []);

  if (!state || state.unavailable) return <>{t("playersOnlineUnavailable")}</>;
  return <>{t("playersOnline", { count: state.count })}</>;
}
