export type QueueBoardId = "open" | "calibration" | "elite";

export const QUEUE_BOARD_IDS: QueueBoardId[] = ["open", "calibration", "elite"];

/** Planned rating window per board, filled into `{points}` in the board rules text. */
export const QUEUE_BOARD_RATING_WINDOW: Partial<Record<QueueBoardId, number>> = {
  calibration: 250,
  elite: 200,
};
