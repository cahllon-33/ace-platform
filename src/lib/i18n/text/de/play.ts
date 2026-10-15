import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  room: {
    "showcaseTag": "SHOWCASE · Beispielspieler, kein Live-Match. Die Warteschlange ist geschlossen.",
    "showcaseShort": "SHOWCASE",
    "queueClosed": "WARTESCHLANGE GESCHLOSSEN",
    "floorRp": "Rang-Untergrenze {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "Avatar von {name}",
    "sampleChat": "Beispielzeilen. Nicht gesendet, nicht live.",
    "sampleLine": "BEISPIEL",
    "operatorA": "Originale A.C.E-Operator-Art für Team A: ein behelmter taktischer Operator in anthrazitfarbener Ausrüstung mit Goldakzenten",
    "operatorB": "Originale A.C.E-Operator-Art für Team B: ein Rebellenkämpfer mit Kapuze in anthrazitfarbener Ausrüstung mit Goldakzenten",
    "artNote": "Originale A.C.E-Charakter-Art. Das sind keine Spielmodelle."
  },
  meta: {
    title: "Spielen",
    description: "Ranglisten-Matchmaking 5v5 öffnet, sobald der A.C.E Shield-Anti-Cheat live ist.",
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
          "Nutzt die A.C.E.-Wertungsregel · Suche demnächst",
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
    lockKicker: "5v5-MATCHRAUM",
    lockTitle: "{map} ist die verbleibende Karte",
    lockBody:
      "Dein Matchraum. Wettkampfspiele starten hier, sobald die Wettkampf-Beta öffnet.",
    close: "Schließen",
  },
  arena: {
    ariaLabel: "Vorschau des Matchraums",
    captain: "Kapitän",
    ping: "Ping {ping}",
    mapPlates: "Kartentafeln",
    selectMap: "{map} wählen",
    settings: {
      region: "Region",
      mode: "Modus",
      antiCheat: "Anti-Cheat",
      simulator: "Vorschau",
    },
    chat: {
      title: "MANNSCHAFTSCHAT",
      kicker: "TEAMCHAT · DEMNÄCHST",
      captainName: "{name} (Kapitän)",
      layoutName: "{name}",
      samples: ["gl hf", "los geht's", "Dust 2 liegt uns", "bereit"],
      inputLabel: "Teamchat-Nachricht",
      placeholder: "Nachricht an das Team…",
      send: "Senden",
    },
    tiles: {
      map: "Karte",
      server: "Server",
      serverValue: "EU West · demnächst",
      mode: "Modus",
    },
    identity: {
      title: "IDENTITÄTSPRÜFUNG",
      kicker: "IDENTITÄTSPRÜFUNG · DEMNÄCHST",
      rows: [
        "E-Mail-Verifizierung · demnächst",
        "Telefonverifizierung · demnächst",
        "Gesichtsprüfung · demnächst",
      ],
    },
    security: {
      title: "SPIELSICHERHEIT",
      kicker: "A.C.E SHIELD · IN ENTWICKLUNG",
      rows: [
        "Anti-Cheat-Schutz · in Entwicklung",
        "Server-Integritätsprüfung · in Entwicklung",
        "Verschlüsselung der Matchdaten · in Entwicklung",
      ],
    },
    findMatchReason: "Das Matchmaking startet mit der Wettkampf-Beta. Ranglisten-Warteschlangen laufen noch nicht.",
  },
};
