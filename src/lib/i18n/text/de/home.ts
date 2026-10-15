import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  meta: {
    title: "A.C.E. — Wettkampfplattform für CS2",
    description:
      "A.C.E. ist eine geplante Wettkampfplattform für Counter-Strike 2 mit Spieleridentität, Kalibrierung, Mannschaften und Turnieren. Diese öffentliche Website ist eine Vorschau. Rangliste-Spielersuche, Anti-Cheat, Zahlungen und Preise sind nicht aktiv.",
  },
  opening: {
    dialogLabel: "A.C.E.-Eröffnung",
    line: "A.C.E: Autonomes Anti-Cheat, kompetitive Kalibrierung, Elite-Spieler",
    enter: "Website betreten",
  },
  hero: {
    logoAlt: "A.C.E. Autonomes Anti-Cheat, kompetitive Kalibrierung, Elite-Spieler",
    arenaAlt:
      "A.C.E.-Arenatafel. Eigenes Bühnenbild, keine Grafik von Valve. Der Bildschirm ist als Spielübertragung beschriftet. Die Liveübertragung ist aus.",
  },
  broadcast: {
    kicker: "TURNIERBLICK",
    title: "Übertragungspult",
    lede: "Der Wettkampf-Kartenpool liegt auf diesem Pult: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis und Train. Das sind eigene Tafeln. Kein Turnier ist auf Sendung, und diese Seite spielt kein Valve-Spiel ab.",
    offAir: "NICHT AUF SENDUNG · {map}",
  },
  jumpNav: {
    label: "Kategorien der Startseite",
    play: "Spielen",
    prizes: "Preise",
    teams: "Mannschaften",
    leaderboard: "Rangliste",
    ranks: "Ränge",
    systems: "Systeme",
  },
  charter: {
    kicker: "HAUPTARBEITSBEREICH DES WARTERAUMS",
    title: "A.C.E.-WARTERAUM FÜR WETTKAMPF-SPIELERSUCHE UND EINSATZZENTRALE",
    badge: "KEIN LAUFENDER SERVER",
    lede: "Dieser Warteraum weist keinen Server zu, startet keinen Anti-Cheat-Client und zahlt keinen Preis aus.",
    modules: [
      {
        kicker: "SPIEL GEFUNDEN · 5v5",
        copy: "Der 5v5-Rahmen auf dieser Seite ist eine geschlossene Warteschlange. Er weist keinen Server zu.",
        chips: ["KEIN 128-TAKT-SERVER", "WARTESCHLANGE GESCHLOSSEN"],
      },
      {
        kicker: "FESTE DREIDIMENSIONALE RÄNGE",
        copy: "Zehn Stufen von Recruit bis A.C.E. Legend. Eine gespeicherte Wertung erscheint nach der Steam-Anmeldung. Diese Seite wendet kein Spiel an.",
        chips: ["WERTUNGSREGEL HINTERLEGT", "DREHTELLER AUF DIESER SEITE"],
      },
      {
        kicker: "SKIN-BELOHNUNGEN",
        copy: "Skin-Karten sind Beispiele. Es wird keine Waffe ausgeliefert und kein Preis finanziert.",
        chips: ["KEIN GEGENSTAND AUSGELIEFERT", "KEINE FUNDPRÜFUNG"],
      },
    ],
  },
  identity: {
    profilePlaceholder: "[Spielerprofil]",
    notAvailable: "k. A.",
    elite: "ELITE",
  },
  membership: {
    compareLink: "Vollständige Vergleichstabelle ansehen",
  },
  loot: {
    exampleCard: "Beispielkarte · kein Valve-Gegenstand",
    wear: {
      factoryNew: "Fabrikneu",
      minimalWear: "Minimale Gebrauchsspuren",
    },
  },
  serverHub: {
    badge: "KEINE LAUFENDEN SPIELSERVER",
    nodes: {
      fra: "Frankfurt Edge",
      sto: "Stockholm Core",
      tlv: "Tel Aviv Relay",
    },
    tileAria: "{name}. Layout-Kachel. Es ist kein Server verbunden.",
    tileSample: "Layout-Beispiel {sample}. Es ist kein Server verbunden.",
    note: "Diese Namen und Latenzbeispiele sind ein Layout. Diese Website hat keinen 128-Takt-Spielserver und keinen regionalen Knoten.",
  },
  telemetry: {
    badge: "KEIN LAUFENDER CLIENT",
    lines: [
      "AC-KERN: NICHT VERBUNDEN",
      "MATRIX DER HARDWARE-SPERREN: ES WIRD KEINE KENNUNG ERFASST",
      "A.C.E.-SCHILD-VERBINDUNG: ES IST KEIN CLIENT INSTALLIERT",
    ],
    note: "Diese Website führt keinen Kern-Client aus, durchsucht keinen Speicher und verhängt keine Hardware-Sperre.",
  },
  comingSoon: {
    badge: "NICHT VERFÜGBAR",
    body: "Der A.C.E.-Desktop-Client wird nicht zum Herunterladen angeboten. Saison 1 auf dieser Website installiert keine Software und öffnet keine Anmeldung.",
  },
  operative: {
    kicker: "Filmisches taktisches Sichtfenster · eigene CSS-Umgebung · keine Grafik von Valve",
    title: "Tiefer in CS2 eintauchen: die ultimative Wettkampfplattform",
    lede: "Fairere Spiele, bessere Mitspieler. Ränge, die zählen, Belohnungen, die etwas bedeuten.",
    note: "Kampagnentext. Rangliste-Warteschlangen, laufende Server und Preise sind nicht aktiv.",
    hudLeft: "CT — BOMBENPLATZ A",
    hudRight: "T — VORSTOSS MITTE",
    hudCenter: "KADERUMGEBUNG · LAYOUT",
    plannedReason: "Ranglistenspiele bleiben geschlossen, bis eine echte Anti-Cheat-Anbindung umgesetzt und geprüft ist.",
  },
  howStatus: {
    label: "A.C.E.-REGISTRIERUNGSSYSTEM — KALIBRIERUNGSMASCHINE BEREIT",
    note: "Layout-Statusanzeige. Rangliste-Warteschlangen, Anti-Cheat und laufende Kalibrierung sind nicht aktiv.",
  },
  shell: {
    primaryNav: "Hauptnavigation",
    mobileNav: "Mobile Navigation",
    elite: "ELITE",
    notificationsTitle: "Kein laufender Benachrichtigungs-Feed",
    notificationsAria: "Benachrichtigungen. Null ungelesen.",
    connectProfileTitle: "Profil verbinden",
    openProfileAria: "Profil im Befehlsstand öffnen",
    connectProfileAria: "Profil über Steam OpenID verbinden",
    signOutAria: "Von A.C.E. abmelden",
  },
  notFound: {
    kicker: "RASTERFEHLER",
    title: "FEHLER 404 — RADAR-TELEMETRIE VERLOREN",
    body: "Die angeforderte Koordinate existiert nicht in unserem aktiven Serverraster.",
    homeAria: "Zurück zum Warteraum der A.C.E.-Startseite",
    cta: "ZURÜCK ZUM WARTERAUM",
  },
  error: {
    kicker: "Fehler",
    title: "Etwas ist schiefgelaufen",
    body: "Diese öffentliche Seite konnte nicht angezeigt werden. Du kannst es erneut versuchen. Auf dieser Vorschau-Website wurden keine Kontodaten angefordert.",
    retryAria: "Diese Seite neu laden",
    retry: "Erneut versuchen",
  },
};
