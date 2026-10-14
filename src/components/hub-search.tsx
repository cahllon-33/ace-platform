"use client";

import { useRouter } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { useText } from "@/components/text-provider";

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function HubSearch() {
  const router = useRouter();
  const copy = useText().leaderboard.search;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const mounted = useHydrated();

  const expanded = mounted && open;

  return (
    <div className="relative" suppressHydrationWarning>
      <button
        type="button"
        className="ace-util-frame"
        aria-expanded={expanded}
        aria-controls="hub-search"
        aria-label={copy.openLabel}
        onClick={() => setOpen((value) => !value)}
        suppressHydrationWarning
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16.5 20.5 21" />
        </svg>
        <span className="sr-only">{copy.srLabel}</span>
      </button>
      {expanded ? (
        <form
          id="hub-search"
          className="absolute end-0 top-12 z-50 w-64 rounded-xl border border-[#D4AF37]/40 bg-[#08090D] p-3"
          suppressHydrationWarning
          onSubmit={(event) => {
            event.preventDefault();
            const next = query.trim();
            router.push(next ? `/leaderboard?q=${encodeURIComponent(next)}` : "/leaderboard");
            setOpen(false);
          }}
        >
          <label htmlFor="hub-q" className="text-[0.65rem] uppercase tracking-[0.16em] text-[#D4AF37]">
            {copy.fieldLabel}
          </label>
          <input
            id="hub-q"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-2 w-full rounded-md border border-[#D4AF37]/30 bg-[#121318] px-3 py-2 text-sm text-[#F5F3EC]"
            placeholder={copy.placeholder}
            autoComplete="off"
            suppressHydrationWarning
          />
        </form>
      ) : null}
    </div>
  );
}
