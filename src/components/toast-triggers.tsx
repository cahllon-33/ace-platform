"use client";

import { useEffect } from "react";
import { useUi } from "@/components/use-ui";
import { toast } from "@/lib/toast-store";

const KEY = "ace:last-auth";

/**
 * Client-only sign-in / sign-out notices. Reads nothing from cookies and does not touch the
 * Steam OpenID flow: it compares the name the server rendered with the last one seen in this tab.
 */
export function AuthToastWatcher({ name }: { name: string | null }) {
  const ui = useUi();
  useEffect(() => {
    let prev: string | null = null;
    try {
      prev = sessionStorage.getItem(KEY);
      sessionStorage.setItem(KEY, name ?? "");
    } catch {
      return;
    }
    if (prev === null) return; // first page of this tab: nothing to compare
    if (name && prev === "") toast(ui.r38.toast.signedIn.replace("{name}", name), "success");
    else if (!name && prev) toast(ui.r38.toast.signedOut, "info");
  }, [name, ui]);
  return null;
}

/** Fire a toast once when mounted (e.g. Steam sign-in failure page). */
export function ToastOnMount({ kind }: { kind: "authFailed" }) {
  const ui = useUi();
  useEffect(() => {
    if (kind === "authFailed") toast(ui.r38.toast.authFailed, "error");
  }, [kind, ui]);
  return null;
}
