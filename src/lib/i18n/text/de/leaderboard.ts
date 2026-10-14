import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  meta: {
    title: "Rangliste",
    description:
      "Wettkampf-Rangliste von A.C.E. Gespeicherte Steam-Konten erscheinen zuerst. Leere Plätze bleiben Schau-Zeilen.",
  },
  hero: {
    kicker: "RANGLISTE",
    title: "Wettkampf-Rangliste",
    note: "Schau-Plätze füllen diese Rangliste, bis ein Steam-Konto gespeichert ist. Eine gespeicherte Wertung ersetzt sie. Land und Hauptwaffe sind Beispiele. Die Waffenbilder sind eigene Studiobilder von A.C.E., keine Skins von Valve. Diese Website speichert keine Kills, daher ist die Waffe keine erfasste Top-Frag-Waffe.",
  },
  facts: {
    seats: "Plätze",
    storedAccounts: "Gespeicherte Konten",
    killsStored: "Gespeicherte Kills",
    none: "Keine",
  },
  empty: "Kein Schau-Platz passt zu diesem Namen.",
  podiumLabel: "Die ersten drei Plätze",
  boardLabel: "Wettkampf-Rangliste",
  table: {
    rank: "Rang",
    player: "Spieler",
    country: "Land",
    tier: "Stufe",
    leadWeapon: "Hauptwaffe",
    rating: "Wertung",
  },
  tags: {
    stored: "Gespeichertes Konto",
    showcase: "Schau",
  },
  weapon: {
    sampleRender: "Beispielbild",
    notStored: "Nicht gespeichert",
    noKillSaved: "Kein Kill gespeichert",
    alt: "Beispielbild {name}",
  },
  countries: {
    il: "Israel",
    us: "Vereinigte Staaten",
    de: "Deutschland",
    ua: "Ukraine",
    se: "Schweden",
    fr: "Frankreich",
    pl: "Polen",
    br: "Brasilien",
    jp: "Japan",
    kr: "Südkorea",
  },
  search: {
    openLabel: "Spielersuche öffnen",
    srLabel: "Rangliste durchsuchen",
    fieldLabel: "Spieler suchen",
    placeholder: "Anzeigename",
  },
  seasonPreview: {
    banner: "LEITER DER SAISON 1 — LAYOUT",
    noteLive:
      "Mit Steam verknüpfte Namen sind gespeicherte Konten. Leere Plätze bleiben als Schau markiert. K/D wird nicht gespeichert, daher ist diese Anzeige ein Layout.",
    noteSample:
      "Layout-Beispiel. 0 laufende Ranglisteneinträge. Diese Zahlen sind kein Saisonergebnis, und K/D wird nicht gespeichert.",
  },
  playerCard: {
    kicker: "Vorschau der authentifizierten Karte · Scheinwerte",
    title: "Spielerakte",
    badge: "Premium",
    note: "Nur Layout. Diese Zahlen sind keine laufende Saison, kein laufendes Elo und kein angemeldetes Konto. Die Rangliste-Spielersuche ist nicht aktiv.",
    currentRank: "Aktueller Rang",
    rankValue: "A.C.E. Legend (Division I)",
    competitiveRating: "Wettkampfwertung",
    seasonRank: "Saisonrang",
    seasonTop: "(Top {percent})",
  },
};
