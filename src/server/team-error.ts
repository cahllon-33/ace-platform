import type { TextBag } from "@/lib/i18n/text";
import { getText } from "@/server/locale";

export type TeamErrorCode = keyof TextBag["teams"]["errors"];

export class TeamError extends Error {
  constructor(readonly code: TeamErrorCode) {
    super(code);
    this.name = "TeamError";
  }
}

/** Returns the visitor-language message for a team error; unknown errors use `fallback` so internal details never reach the client. */
export async function teamErrorMessage(error: unknown, fallback: TeamErrorCode): Promise<string> {
  const errors = (await getText()).teams.errors;
  return errors[error instanceof TeamError ? error.code : fallback];
}
