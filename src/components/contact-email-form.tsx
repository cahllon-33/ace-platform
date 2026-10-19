"use client";

import { useState } from "react";
import { useText } from "@/components/text-provider";
import { updateOwnContactEmail } from "@/server/contact-email";

export function ContactEmailForm({
  signedIn,
  initialEmail,
}: {
  signedIn: boolean;
  initialEmail: string | null;
}) {
  const [email, setEmail] = useState(initialEmail ?? "");
  const [message, setMessage] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const copy = useText().desk.contactEmail;

  return (
    <form
      className="mt-6 rounded-2xl border border-[#FFD76A] bg-[#0B0B0C] p-5 shadow-[0_0_24px_rgba(212, 175, 55,0.12)]"
      onSubmit={(event) => {
        event.preventDefault();
        if (!signedIn || pending) return;
        setPending(true);
        void updateOwnContactEmail(email).then((result) => {
          setMessage(result.message);
          setPending(false);
        });
      }}
    >
      <label className="text-xs font-extrabold tracking-[0.14em] text-[#FFD76A]" htmlFor="ace-contact-email">
        {copy.label}
      </label>
      <input
        id="ace-contact-email"
        className="mt-3 w-full rounded-lg border border-[#FFD76A]/50 bg-[#020203] px-3 py-2 text-sm text-[#f5f3ec] outline-none"
        type="email"
        autoComplete="email"
        maxLength={254}
        value={email}
        disabled={!signedIn || pending}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p className="mt-3 text-sm leading-6 text-[#c8c4b8]">
        {signedIn ? copy.hintSignedIn : copy.hintSignedOut}
      </p>
      {signedIn ? (
        <button
          type="submit"
          className="mt-4 rounded-full border border-[#FFD76A] px-4 py-2 text-xs font-extrabold tracking-[0.12em] text-[#FFD76A]"
          disabled={pending}
        >
          {pending ? copy.saving : copy.save}
        </button>
      ) : null}
      {message ? <p className="mt-3 text-sm text-[#fff6c2]">{message}</p> : null}
    </form>
  );
}
