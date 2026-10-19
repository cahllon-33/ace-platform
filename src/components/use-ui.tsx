"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Ui } from "@/lib/i18n/ui/en";

/** Only the active locale's UI bag is sent to the client (server picks it in SiteShell). */
const UiContext = createContext<Ui | null>(null);

export function UiProvider({ ui, children }: { ui: Ui; children: ReactNode }) {
  return <UiContext.Provider value={ui}>{children}</UiContext.Provider>;
}

export function useUi(): Ui {
  const ui = useContext(UiContext);
  if (!ui) throw new Error("useUi must be used inside UiProvider");
  return ui;
}
