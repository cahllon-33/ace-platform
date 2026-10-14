"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { LegalAcceptanceField } from "@/components/legal-acceptance";
import { useText } from "@/components/text-provider";

async function postJson(url: string, body: unknown, fallbackError: string) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await response.json()) as { error?: string };
  if (!response.ok) {
    throw new Error(data.error ?? fallbackError);
  }
}

export function CreateTeamForm() {
  const router = useRouter();
  const text = useText();
  const copy = text.account.forms;
  const acceptId = useId();
  const [name, setName] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={async (event) => {
        event.preventDefault();
        setMessage(null);
        if (!accepted) {
          setMessage(copy.createTeam.acceptRequired);
          return;
        }
        try {
          await postJson("/api/teams", { name }, copy.requestFailed);
          setName("");
          router.refresh();
        } catch (error) {
          setMessage(error instanceof Error ? error.message : copy.createTeam.failed);
        }
      }}
    >
      <label className="text-sm text-ace-muted" htmlFor="team-name">
        {copy.createTeam.nameLabel}
      </label>
      <input
        id="team-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="min-h-11 rounded-lg border border-ace-line bg-ace-void px-3 text-ace-text"
        maxLength={32}
        required
      />
      <LegalAcceptanceField id={acceptId} checked={accepted} onChange={setAccepted} />
      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-ace-gold px-4 text-sm font-semibold text-ace-void"
        aria-label={copy.createTeam.submitAria}
      >
        {copy.createTeam.submit}
      </button>
      {message ? <p className="text-sm text-ace-danger">{message}</p> : null}
    </form>
  );
}

export function InviteForm({ teamId }: { teamId: string }) {
  const router = useRouter();
  const text = useText();
  const copy = text.account.forms;
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  return (
    <form
      className="mt-4 flex flex-col gap-3"
      onSubmit={async (event) => {
        event.preventDefault();
        setMessage(null);
        try {
          await postJson(`/api/teams/${teamId}/invite`, { steamId: userId }, copy.requestFailed);
          setUserId("");
          router.refresh();
        } catch (error) {
          setMessage(error instanceof Error ? error.message : copy.invite.failed);
        }
      }}
    >
      <label className="text-sm text-ace-muted" htmlFor={`invite-${teamId}`}>
        {copy.invite.label}
      </label>
      <input
        id={`invite-${teamId}`}
        value={userId}
        onChange={(event) => setUserId(event.target.value)}
        className="min-h-11 rounded-lg border border-ace-line bg-ace-void px-3 text-ace-text"
        required
      />
      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center rounded-full border border-ace-gold/50 px-4 text-sm text-ace-gold-bright"
        aria-label={copy.invite.submitAria}
      >
        {copy.invite.submit}
      </button>
      {message ? <p className="text-sm text-ace-danger">{message}</p> : null}
    </form>
  );
}
