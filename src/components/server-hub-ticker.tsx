"use client";

import { useState } from "react";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { useUi } from "@/components/use-ui";
import { interpolate } from "@/lib/i18n";

const NODES = [
  { id: "fra" },
  { id: "sto" },
  { id: "tlv" },
] as const;

export function ServerHubTicker() {
  const { t } = useI18n();
  const copy = useText().home.serverHub;
  const ui = useUi();
  const [selected, setSelected] = useState<(typeof NODES)[number]["id"]>("tlv");

  return (
    <section className="ace-server-hub" aria-label={t("serverHub")}>
      <p className="text-xs font-extrabold tracking-[0.16em] text-[#FFD76A]">{copy.badge}</p>
      <h2 className="ace-widget-title">{t("serverHub")}</h2>
      <ul className="ace-server-nodes mt-4 grid list-none gap-3 p-0 md:grid-cols-3">
        {NODES.map((node) => {
          const name = copy.nodes[node.id];
          return (
            <li key={node.id}>
              <button
                type="button"
                className={`ace-server-tile flex min-h-16 w-full items-center gap-3 border bg-[#020203] px-3 py-3 text-start ${
                  selected === node.id ? "border-[#FFD76A] shadow-[0_0_18px_rgba(212, 175, 55,0.35)]" : "border-[#FFD76A]/45"
                }`}
                aria-pressed={selected === node.id}
                aria-label={interpolate(copy.tileAria, { name })}
                onClick={() => setSelected(node.id)}
              >
                <span className="ace-node-mark" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-semibold text-[#F5F3EC]">{name}</span>
                  <span className="mt-1 block text-[0.72rem] leading-5 text-[#fff6c2]">
                    {ui.soon.label}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="ace-hub-note">{copy.note}</p>
    </section>
  );
}
