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
    note: "Bis Spieler Steam verknüpfen und eine Wertung erhalten, füllen Schauplätze diese Tafel. Land und hervorgehobene Waffe sind dort illustrativ. Die Waffenrenderings sind originale A.C.E.-Studiografiken, keine Valve-Skins. Kills werden noch nicht erfasst, daher ist die hervorgehobene Waffe keine Top-Frag-Statistik.",
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
    sampleRender: "Signaturwaffe",
    notStored: "Nicht gespeichert",
    noKillSaved: "Kein Kill gespeichert",
    alt: "{name}",
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
    banner: "SEASON-1-RANGLISTE",
    noteLive:
      "Mit Steam verknüpfte Namen sind A.C.E.-Konten. K/D erscheint, sobald Matchserver Kills erfassen.",
    noteSample:
      "Season-1-Ergebnisse erscheinen hier, sobald Ranglistenspiele gespielt werden.",
  },
  playerCard: {
    kicker: "Vorschau der Spielerkarte",
    title: "Spielerakte",
    badge: "Premium",
    note: "Deine Karte füllt sich mit echten Werten, sobald das Ranglisten-Matchmaking öffnet.",
    currentRank: "Aktueller Rang",
    rankValue: "A.C.E. Legend (Division I)",
    competitiveRating: "Wettkampfwertung",
    seasonRank: "Saisonrang",
    seasonTop: "(Top {percent})",
  },
};
