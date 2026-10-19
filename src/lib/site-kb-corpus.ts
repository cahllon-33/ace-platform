import { DICTIONARIES } from "@/lib/i18n";
import { textFor } from "@/lib/i18n/text";
import { uiFor } from "@/lib/i18n/ui";
import { rulebookFor } from "@/lib/rulebook-i18n";
import { answerFrom, buildDocs, buildIndex, type KbAnswer, type KbIndex } from "@/lib/site-kb";

const cache = new Map<string, KbIndex>();

/** Index of every public string for one locale (page text, UI, messages, rulebook). Built once per process. */
export function kbIndexFor(localeId: string): KbIndex {
  const id = DICTIONARIES[localeId] ? localeId : "en";
  let idx = cache.get(id);
  if (!idx) {
    const docs = [
      ...buildDocs(textFor(id), "text"),
      ...buildDocs(uiFor(id), "ui"),
      ...buildDocs(DICTIONARIES[id], "msg"),
      ...buildDocs(rulebookFor(id), "rules"),
    ];
    // Untranslated copies of English strings would answer a Hebrew question in English: drop them
    // (the English index still covers that content, and the answer then comes from the English doc).
    const en = id === "en" ? null : new Map(kbIndexFor("en").docs.map((d) => [d.id, d.answer]));
    const own = en ? docs.filter((d) => en.get(d.id) !== d.answer || !/[a-z]{3}/i.test(d.answer) || d.answer.length > 140) : docs;
    idx = buildIndex(own);
    cache.set(id, idx);
  }
  return idx;
}

export function kbAnswer(question: string, localeId: string): KbAnswer {
  return answerFrom(question, kbIndexFor(localeId), kbIndexFor("en"));
}
