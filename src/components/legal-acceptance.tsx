"use client";

import { useText } from "@/components/text-provider";

export function LegalAcceptanceField({
  id,
  checked,
  onChange,
}: {
  id: string;
  checked: boolean;
  onChange: (next: boolean) => void;
}) {
  const copy = useText().consent.acceptance;
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-start text-xs leading-5 text-[#A9ABB3]">
      <input
        id={id}
        type="checkbox"
        className="mt-0.5 h-4 w-4 shrink-0 accent-[#FFD76A]"
        checked={checked}
        required
        aria-required="true"
        onChange={(event) => onChange(event.target.checked)}
      />
      <span>
        {copy.label} {copy.readBefore}{" "}
        <a href="/terms" className="text-[#FFD76A] underline-offset-2 hover:underline">
          {copy.termsLink}
        </a>
        {copy.afterTerms}{" "}
        <a href="/rules" className="text-[#FFD76A] underline-offset-2 hover:underline">
          {copy.rulesLink}
        </a>
        {copy.afterRules}{" "}
        <a href="/privacy" className="text-[#FFD76A] underline-offset-2 hover:underline">
          {copy.privacyLink}
        </a>
        {copy.after}
      </span>
    </label>
  );
}
