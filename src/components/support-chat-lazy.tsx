"use client";

import dynamic from "next/dynamic";

/** The chat widget is not needed for first paint: load its code after hydration. */
export const SupportChatLazy = dynamic(() => import("@/components/support-chat").then((m) => m.SupportChat), { ssr: false });
