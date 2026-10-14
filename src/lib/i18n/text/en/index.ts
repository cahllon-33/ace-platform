import { rules } from "./rules";
import { legalDocs } from "./legalDocs";
import { codex } from "./codex";
import { consent } from "./consent";
import { ranks } from "./ranks";
import { leaderboard } from "./leaderboard";
import { pricing } from "./pricing";
import { features } from "./features";
import { home } from "./home";
import { play } from "./play";
import { teams } from "./teams";
import { account } from "./account";
import { desk } from "./desk";

/** English source for page text. Every locale folder mirrors these areas and keys. */
export const TEXT_EN = {
  rules,
  legalDocs,
  codex,
  consent,
  ranks,
  leaderboard,
  pricing,
  features,
  home,
  play,
  teams,
  account,
  desk,
} as const;
