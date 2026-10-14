"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { LegalAcceptanceField } from "@/components/legal-acceptance";
import { SteamSignInButton } from "@/components/steam-sign-in-button";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/i18n";

const GATE_CSS = `
.ace-gate { margin-top: 1.4rem; border: 1px solid rgba(212,175,55,0.4); border-radius: 1.05rem; background: #101012; padding: 1.1rem 1rem 1.15rem; box-shadow: 0 16px 30px rgba(0,0,0,0.28); }
.ace-gate h2 { margin-top: 0.3rem; color: #ffd700; font-size: 1.35rem; font-weight: 800; }
.ace-gate p, .ace-gate li { color: #e7e2d6; line-height: 1.55; font-size: 0.92rem; }
.ace-gate-actions { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 0.9rem; }
.ace-gate-actions button, .ace-gate-submit { min-height: 2.7rem; border-radius: 999px; border: 1px solid #ffd700; background: #0b0b0c; color: #ffd700; font-weight: 800; letter-spacing: 0.06em; padding: 0 0.95rem; }
.ace-gate-actions button[aria-pressed="true"], .ace-gate-submit { background: linear-gradient(180deg, #ffe56a, #d4af37); color: #12100a; }
.ace-gate form { display: grid; gap: 0.65rem; margin-top: 1rem; }
.ace-gate label { color: #d4af37; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
.ace-gate input { min-height: 2.7rem; width: 100%; border: 1px solid rgba(255,215,0,0.4); border-radius: 0.55rem; background: #0b0b0c; color: #fffef8; padding: 0 0.75rem; }
.ace-gate-error { color: #ff8a8a; }
.ace-gate-ok { color: #f5f3ec; }
`;

export function FiveClanGate({
  fromPremium,
  signedIn,
  displayName,
  teamName,
}: {
  fromPremium: boolean;
  signedIn: boolean;
  displayName: string | null;
  teamName: string | null;
}) {
  const router = useRouter();
  const acceptId = useId();
  const copy = useText().teams.gate;
  const [answer, setAnswer] = useState<"yes" | "no" | null>(fromPremium ? null : null);
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(["", "", "", ""]);
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  return (
    <section className="ace-gate" aria-labelledby="ace-five-title">
      <style>{GATE_CSS}</style>
      <p className="ace-squad-kicker">{fromPremium ? copy.kickerPremium : copy.kickerDefault}</p>
      <h2 id="ace-five-title">{copy.title}</h2>
      <p>{copy.intro}</p>
      <div className="ace-gate-actions">
        <button type="button" aria-pressed={answer === "yes"} onClick={() => setAnswer("yes")}>
          {copy.yes}
        </button>
        <button type="button" aria-pressed={answer === "no"} onClick={() => setAnswer("no")}>
          {copy.no}
        </button>
      </div>

      {answer === "no" ? (
        <p style={{ marginTop: "0.8rem" }}>{copy.seatsOpen}</p>
      ) : null}

      {answer === "yes" && !signedIn ? (
        <div style={{ marginTop: "0.9rem" }}>
          <p>{copy.connectSteam}</p>
          <div style={{ marginTop: "0.7rem" }}>
            <SteamSignInButton i18nKey="connectProfile" variant="primary" next="squad" />
          </div>
        </div>
      ) : null}

      {answer === "yes" && signedIn && teamName ? (
        <p style={{ marginTop: "0.8rem" }}>
          {interpolate(copy.alreadyMember, { name: displayName ?? copy.thisAccount, team: teamName })}
        </p>
      ) : null}

      {answer === "yes" && signedIn && !teamName && !saved ? (
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            setMessage(null);
            if (!accepted) {
              setMessage(copy.acceptTerms);
              return;
            }
            try {
              const response = await fetch("/api/teams", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, seats }),
              });
              const data = (await response.json()) as { error?: string };
              if (!response.ok) throw new Error(data.error ?? copy.notStored);
              setSaved(true);
              router.refresh();
            } catch (error) {
              setMessage(error instanceof Error ? error.message : copy.notStored);
            }
          }}
        >
          <label htmlFor="ace-clan-name">{copy.clanName}</label>
          <input
            id="ace-clan-name"
            value={name}
            minLength={2}
            maxLength={32}
            required
            onChange={(event) => setName(event.target.value)}
          />
          <p>{interpolate(copy.captainSeat, { name: displayName ?? copy.signedInSteam })}</p>
          {seats.map((seat, index) => (
            <div key={index}>
              <label htmlFor={`ace-seat-${index}`}>{interpolate(copy.seatLabel, { seat: index + 2 })}</label>
              <input
                id={`ace-seat-${index}`}
                value={seat}
                required
                autoComplete="off"
                onChange={(event) => {
                  const next = [...seats];
                  next[index] = event.target.value;
                  setSeats(next);
                }}
              />
            </div>
          ))}
          <LegalAcceptanceField id={acceptId} checked={accepted} onChange={setAccepted} />
          <button className="ace-gate-submit" type="submit">
            {copy.submit}
          </button>
          {message ? <p className="ace-gate-error">{message}</p> : null}
        </form>
      ) : null}

      {saved ? (
        <p className="ace-gate-ok" style={{ marginTop: "0.8rem" }}>
          {copy.saved}
        </p>
      ) : null}
    </section>
  );
}
