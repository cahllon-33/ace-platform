"use client";

import { useEffect, useState } from "react";
import { useText } from "@/components/text-provider";

type Gate = "play" | "still" | "skip";

function readGate(): Gate {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "still";
  if (sessionStorage.getItem("ace-open-seen") === "1") return "skip";
  return "play";
}

export function OpeningReel() {
  const copy = useText().home.opening;
  const [gate, setGate] = useState<Gate | null>(null);
  const [open, setOpen] = useState(true);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    setGate(readGate());
  }, []);

  useEffect(() => {
    if (!open || gate !== "play") return;
    const id = window.setTimeout(() => {
      sessionStorage.setItem("ace-open-seen", "1");
      setOpen(false);
    }, 8000);
    return () => window.clearTimeout(id);
  }, [gate, open]);

  if (!gate || !open || gate === "skip") return null;

  function close() {
    sessionStorage.setItem("ace-open-seen", "1");
    setOpen(false);
  }

  return (
    <div className="ace-open-film" role="dialog" aria-modal="false" aria-label={copy.dialogLabel}>
      {gate === "play" && videoOk ? (
        <video
          className="ace-open-video"
          src="/media/ace-open.mp4"
          autoPlay
          muted
          playsInline
          onEnded={close}
          onError={() => setVideoOk(false)}
        />
      ) : (
        <div className="ace-open-still" />
      )}
      <div className="ace-open-copy">
        <p className="ace-open-mark">A.C.E.</p>
        <p className="ace-open-line">{copy.line}</p>
      </div>
      <button type="button" className="ace-open-skip" onClick={close}>
        {copy.enter}
      </button>
    </div>
  );
}
