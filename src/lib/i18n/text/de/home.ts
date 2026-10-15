import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  "ops": {
    "identityKicker": "IDENTITÄTS-HUB",
    "signedOutTitle": "Mit Steam anmelden",
    "signedOutBody": "Verbinde dich über das offizielle Steam OpenID, um hier deinen Steam-Avatar, dein Rangemblem und deine Rating Points zu sehen. A.C.E. fragt nie nach einem Steam-Passwort.",
    "connect": "Mit Steam anmelden",
    "openDeck": "Command Deck öffnen",
    "avatarAlt": "Steam-Avatar von {name}",
    "emblemAlt": "Rangemblem {rank}",
    "rp": "Rating Points",
    "wins": "Siege",
    "losses": "Niederlagen",
    "winRate": "Siegquote",
    "matches": "Matches",
    "kd": "K/D",
    "na": "k. A.",
    "kdNote": "K/D zeigt k. A., weil A.C.E. noch keine Kills und Tode erfasst.",
    "shieldKicker": "A.C.E SHIELD",
    "shieldChip": "IN ENTWICKLUNG",
    "shieldTitle": "Integritätsstatus",
    "shieldBody": "A.C.E Shield ist in Entwicklung. Heute wird nichts installiert, gescannt oder überwacht, daher hat kein Konto ein Integritätsurteil.",
    "shieldClient": "Anti-Cheat-Client",
    "shieldClientValue": "Nicht veröffentlicht",
    "shieldServer": "Match-Server",
    "shieldServerValue": "Nicht verbunden",
    "shieldHardware": "Hardware-Scan",
    "shieldHardwareValue": "Nicht erfasst",
    "shieldLink": "So wird A.C.E Shield funktionieren",
    "seasonKicker": "SAISON 1",
    "seasonChip": "TERMINE NICHT ANGEKÜNDIGT",
    "seasonTitle": "Saison-1-Tracker",
    "seasonBody": "Saison 1 hat noch kein Start- oder Enddatum, daher gibt es keinen Countdown. Die Termine werden vor Saisonstart auf dieser Website veröffentlicht.",
    "statsKicker": "DEINE STATISTIKEN",
    "statsSignedOut": "Melde dich mit Steam an, um deine Statistiken zu sehen.",
    "statsEmpty": "Noch keine erfassten Matches. Siege und Niederlagen erscheinen nach deinem ersten erfassten A.C.E.-Match.",
    "statsLive": "Siege und Niederlagen stammen aus deinem gespeicherten A.C.E.-Konto.",
    "statsLink": "Spielerstatistiken öffnen"
  },
  "meta": {
    "title": "A.C.E. — Wettkampfplattform für CS2",
    "description": "A.C.E. ist eine geplante Wettkampfplattform für Counter-Strike 2 mit Spieleridentität, Kalibrierung, Mannschaften und Turnieren. Diese öffentliche Website ist eine Vorschau. Rangliste-Spielersuche, Anti-Cheat, Zahlungen und Preise sind nicht aktiv."
  },
  "opening": {
    "dialogLabel": "A.C.E.-Eröffnung",
    "line": "A.C.E: Autonomes Anti-Cheat, kompetitive Kalibrierung, Elite-Spieler",
    "enter": "Website betreten"
  },
  "hero": {
    "logoAlt": "A.C.E. Autonomes Anti-Cheat, kompetitive Kalibrierung, Elite-Spieler",
    "arenaAlt": "A.C.E.-Arenatafel. Eigenes Bühnenbild, keine Grafik von Valve. Der Bildschirm ist als Spielübertragung beschriftet. Die Liveübertragung ist aus."
  },
  "broadcast": {
    "kicker": "TURNIERBLICK",
    "title": "Übertragungspult",
    "lede": "Der Wettkampf-Kartenpool liegt auf diesem Pult: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis und Train. Das sind eigene Tafeln. Kein Turnier ist auf Sendung, und diese Seite spielt kein Valve-Spiel ab.",
    "offAir": "NICHT AUF SENDUNG · {map}"
  },
  "jumpNav": {
    "label": "Kategorien der Startseite",
    "play": "Spielen",
    "prizes": "Preise",
    "teams": "Mannschaften",
    "leaderboard": "Rangliste",
    "ranks": "Ränge",
    "systems": "Systeme"
  },
  "charter": {
    "kicker": "HAUPTARBEITSBEREICH DES WARTERAUMS",
    "title": "A.C.E.-WARTERAUM FÜR WETTKAMPF-SPIELERSUCHE UND EINSATZZENTRALE",
    "badge": "SERVER · DEMNÄCHST",
    "lede": "Dieser Warteraum weist keinen Server zu, startet keinen Anti-Cheat-Client und zahlt keinen Preis aus.",
    "modules": [
      {
        "kicker": "SPIEL GEFUNDEN · 5v5",
        "copy": "Der 5v5-Rahmen auf dieser Seite ist eine geschlossene Warteschlange. Er weist keinen Server zu.",
        "chips": [
          "KEIN 128-TAKT-SERVER",
          "WARTESCHLANGE GESCHLOSSEN"
        ]
      },
      {
        "kicker": "FESTE DREIDIMENSIONALE RÄNGE",
        "copy": "Zehn Stufen von Recruit bis A.C.E. Legend. Eine gespeicherte Wertung erscheint nach der Steam-Anmeldung. Diese Seite wendet kein Spiel an.",
        "chips": [
          "WERTUNGSREGEL HINTERLEGT",
          "DREHTELLER AUF DIESER SEITE"
        ]
      },
      {
        "kicker": "SKIN-BELOHNUNGEN",
        "copy": "Meisterschaftsbelohnungen werden mit jedem Event angekündigt.",
        "chips": [
          "KEIN GEGENSTAND AUSGELIEFERT",
          "KEINE FUNDPRÜFUNG"
        ]
      }
    ]
  },
  "identity": {
    "elite": "ELITE"
  },
  "membership": {
    "compareLink": "Vollständige Vergleichstabelle ansehen"
  },
  "loot": {
    "wear": {
      "factoryNew": "Fabrikneu",
      "minimalWear": "Minimale Gebrauchsspuren"
    }
  },
  "serverHub": {
    "badge": "GAMESERVER · DEMNÄCHST",
    "nodes": {
      "fra": "Frankfurt Edge",
      "sto": "Stockholm Core",
      "tlv": "Tel Aviv Relay"
    },
    "tileAria": "{name}. Server folgt in Kürze.",
    "note": "Regionale 128-Tick-Server kommen mit der Wettkampf-Beta."
  },
  "telemetry": {
    "badge": "VORSCHAU · DEMNÄCHST",
    "lines": [
      "A.C.E SHIELD: IN ENTWICKLUNG",
      "MATRIX DER HARDWARE-SPERREN: ES WIRD KEINE KENNUNG ERFASST",
      "A.C.E.-SCHILD-VERBINDUNG: ES IST KEIN CLIENT INSTALLIERT"
    ],
    "note": "Diese Website führt keinen Kern-Client aus, durchsucht keinen Speicher und verhängt keine Hardware-Sperre."
  },
  "comingSoon": {
    "badge": "NICHT VERFÜGBAR",
    "body": "Der A.C.E.-Desktop-Client wird nicht zum Herunterladen angeboten. Saison 1 auf dieser Website installiert keine Software und öffnet keine Anmeldung."
  },
  "operative": {
    "kicker": "Filmisches taktisches Sichtfenster · eigene CSS-Umgebung · keine Grafik von Valve",
    "title": "Tiefer in CS2 eintauchen: die ultimative Wettkampfplattform",
    "lede": "Fairere Spiele, bessere Mitspieler. Ränge, die zählen, Belohnungen, die etwas bedeuten.",
    "note": "Kampagnentext. Rangliste-Warteschlangen, laufende Server und Preise sind nicht aktiv."
  },
  "howStatus": {
    "label": "A.C.E.-REGISTRIERUNGSSYSTEM — KALIBRIERUNGSMASCHINE BEREIT",
    "note": "Ranglisten-Warteschlangen öffnen, sobald A.C.E Shield und Kalibrierung live sind."
  },
  "shell": {
    "primaryNav": "Hauptnavigation",
    "mobileNav": "Mobile Navigation",
    "elite": "ELITE",
    "notificationsTitle": "Benachrichtigungen · demnächst",
    "notificationsAria": "Benachrichtigungen. Null ungelesen.",
    "connectProfileTitle": "Profil verbinden",
    "openProfileAria": "Profil im Befehlsstand öffnen",
    "connectProfileAria": "Profil über Steam OpenID verbinden",
    "signOutAria": "Von A.C.E. abmelden"
  },
  "notFound": {
    "kicker": "RASTERFEHLER",
    "title": "FEHLER 404 — RADAR-TELEMETRIE VERLOREN",
    "body": "Die angeforderte Koordinate existiert nicht in unserem aktiven Serverraster.",
    "homeAria": "Zurück zum Warteraum der A.C.E.-Startseite",
    "cta": "ZURÜCK ZUM WARTERAUM"
  },
  "error": {
    "kicker": "Fehler",
    "title": "Etwas ist schiefgelaufen",
    "body": "Diese öffentliche Seite konnte nicht angezeigt werden. Du kannst es erneut versuchen. Auf dieser Vorschau-Website wurden keine Kontodaten angefordert.",
    "retryAria": "Diese Seite neu laden",
    "retry": "Erneut versuchen"
  }
};
