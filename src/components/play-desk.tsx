"use client";

import { useState } from "react";
import { MapVeto } from "@/components/map-veto";
import { PlayMatchArena, type ArenaCaptain } from "@/components/play-match-arena";
import { QueueBoards } from "@/components/queue-boards";
import { useText } from "@/components/text-provider";
import type { QueueBoardId } from "@/lib/queue-boards";

export function PlayDesk({ captainLabel, captain = null }: { captainLabel: string; captain?: ArenaCaptain | null }) {
  const text = useText();
  const [map, setMap] = useState("Dust II");
  const [board, setBoard] = useState<QueueBoardId>("calibration");
  const boardName = text.play.boards.items[board].name;
  return (
    <>
      <QueueBoards selected={board} onSelect={setBoard} />
      <MapVeto onLocked={setMap} />
      <PlayMatchArena captainLabel={captainLabel} captain={captain} lockedMap={map} boardName={boardName} />
    </>
  );
}
