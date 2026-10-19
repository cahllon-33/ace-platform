"use client";

import { useMemo, useState } from "react";
import { useText } from "@/components/text-provider";

type FactId = "email" | "charge" | "board" | "steam" | "roster" | "badge" | "support" | "rating";

const FACTS: { test: RegExp; id: FactId }[] = [
  { test: /mail|email|inbox/i, id: "email" },
  { test: /charg|paid|card|\$7|dollar|buy/i, id: "charge" },
  { test: /100|board|bracket|tournament seat/i, id: "board" },
  { test: /steam|password|openid/i, id: "steam" },
  { test: /five|5|roster|seat|invite/i, id: "roster" },
  { test: /anti|cheat|badge/i, id: "badge" },
  { test: /support|help|contact|problem/i, id: "support" },
  { test: /rating|elo|prize|knife|server|queue/i, id: "rating" },
];

const DESK_CSS = `
.ace-desk { margin-top: 1.2rem; border: 1px solid rgba(212,175,55,0.35); border-radius: 1rem; background: #101012; padding: 1rem; }
.ace-desk h2 { color: #ffd76a; font-size: 1.15rem; font-weight: 800; }
.ace-desk p { margin-top: 0.4rem; color: #c8c4b8; line-height: 1.5; font-size: 0.88rem; }
.ace-desk form { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.8rem; }
.ace-desk input { min-height: 2.7rem; flex: 1 1 16rem; border: 1px solid rgba(212, 175, 55,0.4); border-radius: 0.55rem; background: #0b0b0c; color: #fffef8; padding: 0 0.75rem; }
.ace-desk button { min-height: 2.7rem; border-radius: 999px; border: 1px solid #ffd76a; background: #0b0b0c; color: #ffd76a; font-weight: 800; padding: 0 0.9rem; }
.ace-desk-answer { margin-top: 0.75rem; color: #f5f3ec; }
`;

export function SquadDesk() {
  const copy = useText().teams.squadDesk;
  const [question, setQuestion] = useState("");
  const [asked, setAsked] = useState("");
  const answer = useMemo(() => {
    const trimmed = asked.trim();
    if (!trimmed) return "";
    const fact = FACTS.find((entry) => entry.test.test(trimmed));
    return fact ? copy.facts[fact.id] : copy.fallback;
  }, [asked, copy]);

  return (
    <section className="ace-desk" aria-labelledby="ace-desk-title">
      <style>{DESK_CSS}</style>
      <p className="ace-squad-kicker">{copy.kicker}</p>
      <h2 id="ace-desk-title">{copy.title}</h2>
      <p>{copy.intro}</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setAsked(question);
        }}
      >
        <label className="sr-only" htmlFor="ace-desk-q">
          {copy.questionLabel}
        </label>
        <input
          id="ace-desk-q"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder={copy.placeholder}
        />
        <button type="submit">{copy.ask}</button>
      </form>
      {answer ? <p className="ace-desk-answer">{answer}</p> : null}
    </section>
  );
}
