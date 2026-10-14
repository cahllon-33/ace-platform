import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  page: {
    meta: {
      title: "Funktionen",
      description:
        "Spezifizierte Architektur des A.C.E.-Anti-Cheat-Kerns, biometrische Gesichtsscan-Verknüpfung und zehn Stufen der Fähigkeitskalibrierung. Diese Systeme sind auf dieser Website nicht in Betrieb.",
    },
    header: {
      kicker: "ACE-FUNKTIONEN / KERN / GESICHTSSCAN / KALIBRIERUNG",
      title: "Spezifikation der Plattformfunktionen",
      lede: "Diese Seite ist die technische Karte in Produktionsqualität für drei geplante A.C.E.-Systeme: den autonomen Anti-Cheat-Kern, die biometrische Gesichtsscan-Verknüpfung und die Kalibrierungsleiter mit zehn Stufen. Nichts auf dieser Seite ist ein laufender Kern, ein laufendes Kameraprodukt oder eine laufende Rangliste-Warteschlange. Steam OpenID, 5v5-Mannschaften, Turnierbaum-Layouts und eine Wertungsberechnung nach Elo-Art existieren in diesem Repository. Eigene CS2-Server, Zahlungen, Preise und ein herunterladbarer Integritäts-Client existieren nicht.",
    },
    kernel: {
      title: "Architektur des Anti-Cheat-Kerns",
      paragraphs: [
        "Die spezifizierte autonome sichere Schale ist ein hardwaregebundener Integritäts-Client, der neben Counter-Strike 2 auf dem Rechner eines Spielers laufen und einen signierten Zustand ALLOW oder DENY an die von A.C.E. verwalteten Server melden würde. Der Kern ist ausfallsicher geschlossen entworfen: Fehlt der Client, ist er gestoppt, veraltet, gefälscht oder ungeprüft, wird die Ranglisten-Zulassung verweigert. Der Browser entscheidet niemals über die Zulassung. Die Rangliste-Schaltfläche «SPIEL FINDEN» auf dieser Website bleibt aus diesem Grund bereits geschlossen.",
        "Geplante Kernschichten umfassen einen Handshake im Benutzermodus, der die geprüfte 64-Bit-SteamID an das A.C.E.-Konto bindet, eine Bestätigungsfläche für die Hardware-Kennung (HWID), eine Signatur-Beobachtungsliste für bekannte Cheat-Familien und einen Server-zu-Server-Zulassungsweg, der durch ein gemeinsames Geheimnis geschützt ist. Eine bestätigte Cheat-Signatur, eine verweigerte Integritätsprüfung oder eine gefälschte Gerätekennung soll laut Spezifikation sofort den Kontostatus auf BANNED oder PERM_BANNED ändern und, sobald ein abgerechnetes Produkt besteht, zum vollständigen Verfall bereits bezahlter Abonnementzeit ohne jede Erstattungspflicht führen. Mit dieser Website wird kein solcher Client ausgeliefert. Download-Karten mit «Demnächst» sind nur Layout.",
      ],
      stats: [
        { label: "KERNSTATUS", value: "Nicht ausgerollt" },
        { label: "RANGLISTE-WARTESCHLANGE", value: "Ausfallsicher geschlossen" },
        { label: "HWID-SPEICHER", value: "Auf dieser Website nicht erfasst" },
      ],
    },
    faceScan: {
      title: "Biometrische Gesichtsscan-Verknüpfung",
      paragraphs: [
        "Der Gesichtsscan ist eine spezifizierte künftige Schicht zur Identitätsbindung, kein Kameraprodukt auf dieser Website. Der geplante Entwurf würde erst nach ausdrücklicher Einwilligung und einer gesonderten rechtlichen Prüfung eine auf Lebendigkeit geprüfte Gesichtsvorlage an dasselbe A.C.E.-Konto binden, das bereits eine vom Server geprüfte SteamID enthält. Der Zweck ist, Kontoteilung zur Umgehung einer früheren Einschränkung zu erschweren. A.C.E. erfasst heute keine Gesichtsbilder, keine Gesichts-Embeddings, keine E-Mail-Adressen und keine Hardware-Fingerabdrücke. Die laufende Datenschutzhaltung bleibt strikte Notwendigkeit: nur die geprüfte 64-Bit-SteamID und der öffentliche Steam-Anzeigename.",
        "Falls der Gesichtsscan je umgesetzt wird, ersetzt er Steam OpenID nicht, wird nicht zum Verkauf verhaltensbasierter Werbung genutzt und schaltet Rangliste-Warteschlangen nicht allein frei. Die Ranglisten-Zulassung verlangt weiterhin einen geprüften Anti-Cheat-Weg. Bis diese Prüfung besteht, ist jede Gesichtsscan-Tafel im Warteraum ein Layout-Platzhalter.",
      ],
    },
    calibration: {
      title: "Zehn Stufen der Fähigkeitskalibrierung",
      intro:
        "Die kompetitive Kalibrierung nutzt eine dokumentierte Formel nach Elo-Art (Version {version}, K-Faktor {kFactor}, Skala {scale}). Neue Konten beginnen bei Rang 1 (Recruit), mit KOSTENLOSEM Abonnement, Status ACTIVE und {startingRating} Wettkampfwertung. Kristallbezeichnungen im Warteraum sind optische Aliasnamen. Bezahlte Kosmetik kauft niemals Wertung, leichtere Gegner, 128-Takt-Server oder Vorrang in der Warteschlange. Es gibt kein laufendes 128-Takt-Produkt zu kaufen.",
      table: {
        level: "Stufe",
        engineName: "Maschinenname",
        crystalAlias: "Kristallname",
        minRating: "Mindestwertung",
      },
      divisions: {
        before:
          "Die Divisionen I, II und III im Warteraum sind Schau-Plaketten. Sie ändern nur Layout-Werte. Eine laufende Spielersuche nach Division existiert nicht. Siehe ",
        middle: " für den dreidimensionalen Drehteller und ",
        after: " für den verbindlichen Wettkampftext.",
      },
    },
  },
  loot: {
    kicker: "Sandkasten-Kosmetik · Kasse simuliert",
    title: "A.C.E.-BEUTEARCHITEKTUR — WAFFENFUNDE",
    lede: "Eigene A.C.E.-Lackierungsnamen auf CS2-Waffentypen. Das sind keine Gegenstände von Valve, keine handelbaren Skins und keine echten Preise. Die Kasse ist simuliert.",
    mockDrop: "Scheinfund",
    multiplierLabel: "Anforderungen an den Siegquoten-Multiplikator",
    ladderLabel: "Wöchentliche Leiterfunde",
    multiplierValue: "{multiplier}× Vorlage",
    ladderValue: "Wöchentlicher Platz · Muster",
    checkout: "Kasse simuliert",
  },
  communityRail: {
    kicker: "Layout-Feed · nicht live",
    newsTitle: "Neueste Ranglisten-Nachrichten",
    newsItems: [
      "Das Turnierfeld bleibt leer — 0 von 100 Mannschaften.",
      "Die Ranglisten-Suche bleibt geschlossen, bis es ein Anti-Cheat gibt.",
    ],
    prizesTitle: "Tägliche Skin-Preise",
    prizesBody:
      "Es werden keine Preise vergeben. Kosmetikkarten auf dieser Website sind Sandkasten-Attrappen. Die Kasse ist simuliert.",
  },
  identityPreview: {
    badge: "Vorschau — nicht bestätigt",
    cards: {
      faceScan: {
        title: "Live-Gesichtsscan bestätigt",
        copy: "Die Lebendigkeitsprüfung der Identität ist eine geplante Anbieterprüfung. Diese Karte ist eine Layout-Vorschau. Es wurde kein Scan durchgeführt, und es werden keine biometrischen Daten gespeichert.",
      },
      hardwareId: {
        title: "Hardware-ID verknüpft",
        copy: "Die Gerätebindung ist ein geplantes Integritätssignal. Diese Karte ist eine Layout-Vorschau. Es wurde kein Hardware-Fingerabdruck erfasst.",
      },
    },
  },
  preview: {
    fallbackTitle: "Vorschau",
    kicker: "Layout-Ziel · kein laufendes Produkt",
    returnHome: "Zurück zum Start",
    pages: {
      support: {
        title: "Hilfe",
        body: "Ein öffentlicher Hilfeschalter ist noch nicht besetzt. Dieser Link ist ein Platzhalter-Ziel in der Fußzeile.",
      },
      "anti-cheat": {
        title: "Anti-Cheat-Überblick",
        body: "A.C.E. hat kein funktionierendes Anti-Cheat-Produkt. Die Rangliste-Spielersuche bleibt geschlossen, bis eine echte Anbindung besteht.",
      },
      "download-client": {
        title: "Client herunterladen",
        body: "Es gibt keinen A.C.E.-Desktop-Client zum Herunterladen. Ein nativer Client gehört nicht zur aktuellen Web-Phase.",
      },
      "mobile-app": {
        title: "App für Mobilgeräte",
        body: "Es gibt keine mobile A.C.E.-App. Dies ist nur ein Layout-Link in der Fußzeile.",
      },
      news: {
        title: "Nachrichten",
        body: "Es gibt keine laufende Nachrichtenredaktion. Dies ist nur ein Layout-Link in der Fußzeile.",
      },
      about: {
        title: "Über uns",
        body: "A.C.E. ist eine unabhängige Wettkampfseite für Counter-Strike 2 in der öffentlichen Website-Vorschau. Sie ist nicht mit Valve verbunden.",
      },
      advertising: {
        title: "Werbung",
        body: "Es werden keine Werbeflächen verkauft. Dies ist nur ein Layout-Link in der Fußzeile.",
      },
      developers: {
        title: "Entwickler",
        body: "Es gibt noch kein öffentliches Entwicklerprogramm. Die Server-Zulassungs-APIs in diesem Repository sind interne Adapter, kein Partner-SDK.",
      },
      press: {
        title: "Presse",
        body: "Es gibt weder Pressemappe noch Nachrichtenredaktion. Dies ist nur ein Layout-Link in der Fußzeile.",
      },
      jobs: {
        title: "Jobs",
        body: "Es sind keine Stellenangebote veröffentlicht. Dies ist nur ein Layout-Link in der Fußzeile.",
      },
      terms: {
        title: "Nutzungsbedingungen",
        body: "Die geltenden Nutzungsbedingungen sind unter /terms veröffentlicht. Das Turnierreglement steht unter /rules.",
      },
      privacy: {
        title: "Datenschutzrichtlinie",
        body: "Die Datenschutzrichtlinie ist unter /privacy veröffentlicht. Steam OpenID ist der einzige Anmeldeweg; Steam-Passwörter werden niemals erfasst.",
      },
      eula: {
        title: "Anti-Cheat-EULA",
        body: "Es gibt keine Anti-Cheat-EULA, weil kein Anti-Cheat aktiv ist. Die Rangliste bleibt ausfallsicher geschlossen.",
      },
    },
  },
};
