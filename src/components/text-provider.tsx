"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { ClientText } from "@/lib/i18n/text";

const TextContext = createContext<ClientText | null>(null);

export function TextProvider({ text, children }: { text: ClientText; children: ReactNode }) {
  return <TextContext.Provider value={text}>{children}</TextContext.Provider>;
}

export function useText(): ClientText {
  const text = useContext(TextContext);
  if (!text) throw new Error("useText must be used inside TextProvider");
  return text;
}
