"use client";

import { useUi } from "@/components/use-ui";

type State = "available" | "inDevelopment" | "comingSoon";

const ROWS: { key: "steam" | "shield" | "servers" | "billing"; state: State }[] = [
  { key: "steam", state: "available" },
  { key: "shield", state: "inDevelopment" },
  { key: "servers", state: "comingSoon" },
  { key: "billing", state: "comingSoon" },
];

export function PlatformStatus() {
  const ui = useUi();
  return (
    <section className="ace-status-strip" aria-labelledby="ace-status-title">
      <h2 id="ace-status-title" className="sr-only">
        {ui.status.title}
      </h2>
      <ul>
        {ROWS.map((row) => (
          <li key={row.key} className={`is-${row.state}`}>
            <span className="ace-status-light" aria-hidden="true" />
            <span className="ace-status-name">{ui.status[row.key]}</span>
            <span className="ace-status-value">{ui.status[row.state]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
