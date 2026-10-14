"use client";

import { useState } from "react";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/i18n";

const NETWORKS = [
  { id: "steam", fallback: "https://steamcommunity.com/" },
] as const;

export function PlayerNetworkCards() {
  const text = useText();
  const copy = text.account.networks;
  const [links, setLinks] = useState<{ steam: string }>({
    steam: NETWORKS[0].fallback,
  });

  return (
    <div className="ace-dossier-networks">
      <p className="ace-dossier-note">{copy.note}</p>
      <div className="ace-dossier-network-grid">
        {NETWORKS.map((network) => (
          <div key={network.id} className="ace-dossier-network">
            <label className="ace-dossier-network-label" htmlFor={`network-${network.id}`}>
              {copy.labels[network.id]}
            </label>
            <input
              id={`network-${network.id}`}
              className="ace-dossier-network-input"
              value={links[network.id]}
              onChange={(event) =>
                setLinks((current) => ({ ...current, [network.id]: event.target.value }))
              }
              inputMode="url"
              autoComplete="off"
            />
            <a
              className="ace-dossier-network-link"
              href={links[network.id] || network.fallback}
              target="_blank"
              rel="noreferrer noopener"
            >
              {interpolate(copy.open, { label: copy.labels[network.id] })}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
