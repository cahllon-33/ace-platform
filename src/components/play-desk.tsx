"use client";

import { useState } from "react";
import { QueueBoards } from "@/components/queue-boards";
import { RankedQueue } from "@/components/ranked-queue";
import type { QueueBoardId } from "@/lib/queue-boards";
import type { QueueView } from "@/server/queue-engine";

/** R48: the real ranked 5v5 solo queue (ready check, captain veto, DatHost match) above the queue boards. */
export function PlayDesk({ signedIn, initial }: { signedIn: boolean; initial: QueueView | null }) {
  const [board, setBoard] = useState<QueueBoardId>("calibration");
  return (
    <>
      <div id="ace-queue" style={{ scrollMarginTop: "5rem" }} />
      <RankedQueue signedIn={signedIn} initial={initial} />
      <div style={{ marginTop: "2rem" }}>
        <QueueBoards selected={board} onSelect={setBoard} />
      </div>
    </>
  );
}
