"use client";

import Link from "next/link";
import { useState } from "react";
import { MapVeto } from "@/components/map-veto";
import { QueueBoards } from "@/components/queue-boards";
import { useUi } from "@/components/use-ui";
import type { QueueBoardId } from "@/lib/queue-boards";

/**
 * R41: the sample "match found" arena (invented teammates and chat) is no longer rendered.
 * Until match servers ship, Play shows the queue boards, the map veto and an honest server state.
 */
export function PlayDesk() {
  const ui = useUi();
  const [board, setBoard] = useState<QueueBoardId>("calibration");
  return (
    <>
      <QueueBoards selected={board} onSelect={setBoard} />
      <MapVeto onLocked={() => undefined} />
      <p className="pg41-hero" role="status" style={{ marginTop: "1.5rem" }}>
        <strong>{ui.r41.ss.match}</strong> · {ui.r41.ss.notLive} · <Link href="/status" style={{ color: "#FFD76A" }}>{ui.r41.ss.title} →</Link>
      </p>
    </>
  );
}
