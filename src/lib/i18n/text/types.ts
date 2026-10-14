import type { TEXT_EN } from "./en";

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { readonly [K in keyof T]: Widen<T[K]> };

/** Shape every locale must match. Derived from the English source in `./en`. */
export type TextBag = Widen<typeof TEXT_EN>;

/** Long documents rendered on the server only. Client components receive them as props. */
export const SERVER_ONLY_AREAS = ["rules", "legalDocs", "codex"] as const;

export type ClientText = Omit<TextBag, (typeof SERVER_ONLY_AREAS)[number]>;
