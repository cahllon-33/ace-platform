import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  meta: {
    title: "Spielen",
    description: "Die Rangliste-Spielersuche 5v5 bleibt ausfallsicher geschlossen, bis das Anti-Cheat echt ist.",
  },
  boards: {
    label: "Warteschlangen-Tafeln",
    title: "Drei 5v5-Tafeln",
    note: "Die Auswahl bleibt auf dieser Seite. Die Ranglisten-Suche ist geschlossen, und die Wahl einer Tafel sucht keine Gegner.",
    items: {
      open: {
        name: "Offene Tafel",
        rules: [
          "Eine Gruppe beliebiger Größe, bis zu fünf",
          "Kein Wertungsfenster",
          "Steam OpenID ist die Identitätsprüfung",
          "Für offenes Training gedacht, sobald es eine Warteschlange gibt",
        ],
      },
      calibration: {
        name: "Kalibrierungstafel",
        rules: [
          "Allein, zu zweit oder zu dritt",
          "Ein geplantes Fenster von {points} Wertungspunkten",
          "Ein Steam-Profil muss bereits gespeichert sein",
          "Nutzt die A.C.E.-Wertungsregel, ohne laufende Suche",
        ],
      },
      elite: {
        name: "Elite-Tafel",
        rules: [
          "Allein oder zu zweit",
          "Ein geplantes Fenster von {points} Wertungspunkten",
          "Die gespeicherte Mitgliedschaft muss Plus oder Premium sein",
          "Strengere schriftliche Zulassung. Es ist kein Preistopf verbunden",
        ],
      },
    },
  },
  veto: {
    kicker: "KARTEN-VETO",
    title: "Wähle die Karte",
    lede: "Lehne Karten ab, bis eine übrig bleibt. Dieser Warteraum startet weder Counter-Strike 2 noch öffnet er einen Server.",
    mapSelected: "Gewählte Karte: {map}",
    yourBan: "Deine Sperre",
    opponentBan: "Gegnerische Sperre",
    selected: "Gewählt",
    declined: "Abgelehnt",
    decline: "Ablehnen",
    reset: "Veto zurücksetzen",
    declinedToast: "{map} wurde abgelehnt. Diese Seite öffnet keinen Server.",
    lockKicker: "5v5-LAYOUT",
    lockTitle: "{map} ist die verbleibende Karte",
    lockBody:
      "Die Aufstellung unten ist ein Layout. Diese Seite lädt kein Wettkampfspiel, bringt keine Spieler in ein Spiel und sendet keine Serveradresse.",
    close: "Schließen",
  },
  arena: {
    ariaLabel: "Layout-Vorschau «Spiel gefunden»",
    captain: "Kapitän",
    ping: "Ping {ping}",
    mapPlates: "Kartentafeln",
    selectMap: "Layout-Kartentafel {map} wählen",
    settings: {
      region: "Region",
      mode: "Modus",
      antiCheat: "Anti-Cheat",
      simulator: "Simulator",
    },
    chat: {
      title: "MANNSCHAFTSCHAT",
      kicker: "SCHEINTERMINAL · NICHT VERNETZT",
      captainName: "{name} (Kapitän)",
      layoutName: "{name} (Layout)",
      samples: ["gl hf", "los geht's", "Dust 2 liegt uns", "bereit"],
      inputLabel: "Layout-Chatnachricht",
      placeholder: "Nachricht an die Mannschaft… (nur Layout)",
      send: "Layout-Chatzeile hinzufügen",
    },
    tiles: {
      map: "Karte",
      server: "Server",
      serverValue: "EU West · {ping} (Beispiel)",
      mode: "Modus",
    },
    identity: {
      title: "IDENTITÄTSPRÜFUNG",
      kicker: "LAYOUT-PRÜFUNGEN · KEINE LAUFENDEN ANBIETER",
      rows: [
        "E-Mail-Code bestätigt (Layout)",
        "SMS-Code auf das Telefon bestätigt (Layout)",
        "Live-Gesichtsscan bestätigt (Layout)",
      ],
    },
    security: {
      title: "SPIELSICHERHEIT",
      kicker: "SIMULATOR · KI NICHT AUSGEROLLT",
      rows: [
        "Anti-Cheat-Schutz — Layout-Puls",
        "Prüfung der Serverintegrität — Muster",
        "Spieldaten verschlüsselt — konzeptionell",
      ],
    },
    findMatchReason: "«SPIEL FINDEN» kann keinen laufenden CS2-Server öffnen. Die Rangliste ist ausfallsicher geschlossen. Belegung: 0.",
  },
  matchFound: {
    ariaSignedIn: "{title}. {name} steht nicht in dieser Layout-Aufstellung.",
    banner: "ARENA-LAYOUT · KEIN LAUFENDES SPIEL",
    mapPlate: "KARTENTAFEL · DUST II · KEIN 128-TAKT-SERVER",
    rosterNote: "Layout-Rufnamen. Keine verbundene Aufstellung.",
    teamA: "MANNSCHAFT A · TAKTISCHE ALLIANZ",
    teamB: "MANNSCHAFT B · SCHATTENLEGION",
    clockLabel: "LAYOUT-UHR",
    clockNote: "Diese Uhr läuft in einer Schleife. Die Warteschlange ist geschlossen.",
    chatKicker: "MANNSCHAFTSCHAT",
    chatLines: [
      "Wir halten das Layout, bis die Uhr zurückspringt.",
      "Dust II ist auf dieser Seite nur eine Kartentafel.",
      "Für diese Aufstellung ist kein Server verbunden.",
    ],
    chatField: "Nachrichten werden nicht gesendet.",
    identityKicker: "IDENTITÄTSRASTER",
    identityRows: [
      "Es wird keine Spielticket-E-Mail gesendet.",
      "Es läuft keine Kernprüfung.",
      "Es ist kein laufender Telemetriestrom verbunden.",
    ],
    findMatch: "WETTKAMPFSPIEL FINDEN",
    closedNotice: "Diese Schaltfläche öffnet keinen Server. Die Rangliste-Warteschlange ist geschlossen. Belegung: 0.",
  },
};
