"use client";
import { useEffect, useState } from "react";

const KEY = "ace.whatsnew.seen";

/** Unread dot for the header "What's New" link: shown when the newest entry is newer than the last one this browser saw. */
export function WhatsNewDot() {
  const [unread, setUnread] = useState(0);
  useEffect(() => {
    let live = true;
    fetch("/api/whats-new", { cache: "no-store" }).then((r) => r.json()).then((d: { rows?: { at: string }[] }) => {
      if (!live) return;
      const seen = Date.parse(localStorage.getItem(KEY) ?? "") || 0;
      setUnread((d.rows ?? []).filter((r) => Date.parse(r.at) > seen).length);
    }).catch(() => undefined);
    const onSeen = () => setUnread(0);
    window.addEventListener("ace-whatsnew-seen", onSeen);
    return () => { live = false; window.removeEventListener("ace-whatsnew-seen", onSeen); };
  }, []);
  return unread ? <span className="hx-wn-dot" aria-label={`${unread} new`}>{unread > 9 ? "9+" : unread}</span> : null;
}

export function MarkSeen({ latest }: { latest: string | null }) {
  useEffect(() => {
    if (!latest) return;
    localStorage.setItem(KEY, latest);
    window.dispatchEvent(new Event("ace-whatsnew-seen"));
  }, [latest]);
  return null;
}
