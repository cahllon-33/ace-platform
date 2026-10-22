"use client";

import { useState } from "react";
import { useUi } from "@/components/use-ui";
import { interpolate } from "@/lib/interpolate";
import { fmtUsd } from "@/lib/cosmetics";
import { CheckoutLegal, PaddleBuyButton } from "@/components/paddle-checkout";
import "./cosmetic-shop.css";

export type EntryEvent = { id: string; name: string; feeCents: number | null; entries: number; registeredTeamIds: string[] };

/** R49 paid tournament entry: the captain picks a team and pays; registration happens only on the verified webhook. */
export function TournamentEntry({ events, teams }: { events: EntryEvent[]; teams: { id: string; name: string }[] }) {
  const t = useUi().r49;
  if (!events.length) return null;
  return (
    <section className="te49" aria-labelledby="te49-t">
      <h2 id="te49-t" className="cs49-t">{t.entryTitle}</h2>
      <p className="cs49-note">{t.prizeNote}</p>
      <ul className="te49-list">{events.map((e) => <EntryRow key={e.id} e={e} teams={teams} />)}</ul>
      <CheckoutLegal />
    </section>
  );
}

function EntryRow({ e, teams }: { e: EntryEvent; teams: { id: string; name: string }[] }) {
  const t = useUi().r49;
  const open = teams.filter((x) => !e.registeredTeamIds.includes(x.id));
  const [team, setTeam] = useState(open[0]?.id ?? "");
  const done = teams.some((x) => e.registeredTeamIds.includes(x.id));
  return (
    <li className="te49-row" data-event={e.id}>
      <div>
        <p className="te49-name">{e.name}</p>
        <p className="te49-fee">{e.feeCents ? interpolate(t.entryFee, { price: fmtUsd(e.feeCents) }) : t.freeEntry}</p>
      </div>
      <div className="te49-act">
        {done ? <span className="cs49-owned">{t.registered}</span> : null}
        {e.feeCents ? (
          open.length ? (
            <>
              <select className="te49-sel" value={team} onChange={(ev) => setTeam(ev.target.value)} aria-label={t.team}>
                {open.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}
              </select>
              <PaddleBuyButton kind="TOURNAMENT_ENTRY" refId={e.id} teamId={team} label={t.payEnter} disabled={!team} />
            </>
          ) : !done ? <span className="cs49-note">{t.captainOnly}</span> : null
        ) : null}
      </div>
    </li>
  );
}
