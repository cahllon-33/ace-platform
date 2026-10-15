import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  translationNotice:
    "Diese Seite ist eine Übersetzung, die zur besseren Verständlichkeit bereitgestellt wird. Weichen die Übersetzung und der englische Text voneinander ab, gilt der englische Text.",
  terms: {
    meta: {
      title: "Nutzungsbedingungen",
      description:
        "Nutzungsbedingungen der A.C.E.-Website für diese Counter-Strike 2-Wettkampfseite. Ranglistenspiele, Zahlungen und Anti-Cheat sind nicht in Betrieb.",
    },
    kicker: "ACE-RECHTLICHES / NUTZUNGSBEDINGUNGEN",
    title: "Nutzungsbedingungen",
    lede: "Diese Bedingungen regeln die Nutzung der öffentlichen A.C.E.-Website und der verbundenen Konto-APIs. Spiellänge, Kartenpool, Kader-Sperre und Proteste sind im Wettkampfregelwerk unter /rules ausführlich beschrieben, das hiermit Bestandteil dieser Bedingungen ist.",
    sections: {
      operator: {
        title: "1. Betreiber und Unabhängigkeit",
        paragraphs: [
          "Der Dienst wird von der A.C.E. Competitions Ltd. betrieben (Handelsregisternummer wird veröffentlicht). Mit der Nutzung der Website akzeptierst du diese Bedingungen, die Datenschutzerklärung, die Cookie-Richtlinie und das Wettkampfregelwerk.",
        ],
      },
      eligibility: {
        title: "2. Teilnahmeberechtigung und Konten",
        paragraphs: [
          "Sie müssen in Ihrem Land alt genug sein, um Steam zu nutzen. Konten werden ausschließlich über das offizielle Steam OpenID erstellt. Sie dürfen ein Konto nicht teilen, um eine Einschränkung zu umgehen. A.C.E. fragt niemals nach einem Steam-Passwort.",
        ],
      },
      notActive: {
        title: "3. Was diese Website nicht ist",
        paragraphs: [
          "Ranglisten-Matchmaking, laufende CS2-Gameserver, ein funktionierender AI Anti-Cheat, Abrechnung und Preise sind nicht aktiv. Lobby-Uhren und Integritätspanels sind Vorschauen, sofern eine Seite nichts anderes angibt.",
        ],
      },
      subscriptions: {
        title: "4. Geplante Abonnements",
        paragraphs: [
          "Plus ($4/Monat) und Premium ($7/Monat) sind Anzeigepreise. Auf dieser Website gibt es noch keine Bezahlung, und die Plan-Schaltflächen zeigen „Demnächst“. Sobald die Abrechnung existiert, gilt die Kündigungsregel unter /pricing: monatlich verlängertes Abo, Kündigung in den Dashboard-Einstellungen, angebrochene Monate werden nicht erstattet.",
        ],
      },
      antiCheat: {
        title: "5. Anti-Cheat-Client (nicht ausgeliefert)",
        paragraphs: [
          "Auf dieser Website gibt es keinen herunterladbaren Anti-Cheat-Client. Der Wettkampfkodex unter /rules erfasst keine Hardware-Kennung und sperrt kein Gerät. Kontoteilung zur Umgehung einer Einschränkung ist verboten.",
        ],
      },
      liability: {
        title: "6. Haftungsbeschränkung",
        paragraphs: [
          "Soweit gesetzlich zulässig, haftet A.C.E. nicht für verlorenen Rang, verlorene Kosmetik, die niemals echte Gegenstände war, oder Ausfälle von Steam / CS2 durch Dritte. Zwingende Verbraucherrechte in Ihrem Land werden nicht ausgeschlossen, soweit auf sie nicht verzichtet werden kann.",
        ],
      },
      copyright: {
        title: "7. Urheberrecht an eigenem Website-Material",
        paragraphs: [
          "Originaltexte, Seitenlayout, Embleme und Grafiken, die für diese Website erstellt wurden, gehören A.C.E. Competitions Ltd. Sie dürfen dieses Originalmaterial ohne schriftliche Genehmigung nicht für ein anderes Produkt kopieren, erneut veröffentlichen oder automatisiert auslesen. Soweit das Gesetz es zulässt, kann A.C.E. dieses Recht durchsetzen, auch durch eine Klage. Dieser Hinweis leitet kein Verfahren ein, legt keinen Schadensersatz fest und garantiert kein Gerichtsergebnis.",
          "Counter-Strike 2, Steam und die Kartennamen Dust II, Mirage, Inferno, Nuke, Ancient, Anubis und Train gehören Valve. A.C.E. beansprucht sie nicht. Das Öffnen dieser Website hebt kein gesetzliches Recht auf und schließt keinen Vertrag.",
        ],
      },
      contact: {
        title: "8. Kontakt",
        paragraphs: [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — Handelsregisternummer wird veröffentlicht.",
        ],
      },
    },
  },
  privacy: {
    meta: {
      title: "Datenschutzrichtlinie",
      description:
        "Datenschutzrichtlinie von A.C.E.: nur unbedingt erforderliche Daten, ausschließlich Steam OpenID, keine Steam-Passwörter, kein Verkauf von Verhaltensdaten.",
    },
    kicker: "ACE-DATENSCHUTZ / DSGVO / UNBEDINGTE ERFORDERLICHKEIT",
    title: "Datenschutzrichtlinie",
    lede: "Diese Datenschutzrichtlinie erklärt, was A.C.E. Competitions Ltd. speichert, wenn Sie diese Website nutzen. Übersetzungen werden zur besseren Verständlichkeit bereitgestellt; maßgeblich ist die englische Fassung. Dies ist keine Behauptung, dass jede künftige Produktfläche bereits existiert.",
    strictNecessity: {
      title: "Grundsatz der unbedingten Erforderlichkeit",
      intro:
        "Wir erheben nur die minimalen Kontodaten, die erforderlich sind, um eine wettkampfspielende Person zu identifizieren und offensichtlichen Betrug in unserem eigenen Dienst zu verhindern. Wir sammeln keine unnötigen Protokolle, lesen kein privates Steam-Inventar aus und verkaufen keine Verhaltensdaten an Dritte.",
      storedIntro: "Derzeit nach einer erfolgreichen Anmeldung über Steam OpenID gespeichert:",
      stored: [
        {
          label: "Geprüfte 64-Bit-SteamID",
          body: "wird von der offiziellen OpenID-Bestätigung von Steam übermittelt und auf dem Server geprüft, bevor ein A.C.E.-Konto erstellt oder aktualisiert wird.",
        },
        {
          label: "Öffentlicher Steam-Anzeigename",
          body: "sofern ein Steam-Web-API-Schlüssel eingerichtet ist. Dies ist ein Profilname, kein E-Mail-Postfach.",
        },
        {
          label: "A.C.E.-Kontodaten",
          body: "etwa Rangstufe, Wertungspunkte, Siege/Niederlagen, Mannschaftszugehörigkeit und Hashwerte von Sitzungstoken.",
        },
      ],
      notCollected: {
        before: "E-Mail-Adressen und verschlüsselte Hardwareprofile werden",
        strong: "auf dieser Website derzeit nicht erfasst",
        after:
          ". Face-Scan- und HWID-Karten in der Lobby sind Designvorschauen. Sollte ein künftiger Anti-Cheat-Client oder Supportkanal eine E-Mail oder einen Hardware-Fingerabdruck benötigen, bleibt die Erhebung auf Betrugsprävention beschränkt, wird hier vorab offengelegt und nicht als Werbedaten verkauft.",
      },
    },
    neverCollect: {
      title: "Was wir niemals erheben",
      items: [
        "Steam-Passwörter. Die Anmeldung erfolgt ausschließlich über Steam OpenID / den offiziellen Ablauf von Steam.",
        "Zahlungskartennummern. Eine Kasse ist nicht umgesetzt.",
        "Kernel-Telemetrie. Mit dieser Website wird kein Anti-Cheat-Client ausgeliefert.",
      ],
    },
    steamBoundary: {
      title: "Einbettungen Dritter und die Grenze von Steam OpenID",
      callback: {
        before: "Bei der Anmeldung über Steam verlassen Sie A.C.E., authentifizieren sich bei Steam und kehren anschließend zu",
        after:
          " zurück. Der Server prüft die OpenID-Bestätigung (einschließlich der beanspruchten Identität und der signierten Parameter von Steam), bevor eine Sitzung angelegt wird. Für die Daten, die Steam speichert, gilt die Datenschutzrichtlinie von Steam. A.C.E. speichert nur die geprüfte SteamID und die öffentlichen Profilfelder, die für den Betrieb des Kontos erforderlich sind.",
      },
      footerLinks:
        "Die Symbole externer Netzwerke in der Fußzeile sind Verzeichnisverweise auf öffentliche Websites. Sie sind keine offiziellen A.C.E.-Konten und binden keine Tracking-Widgets ein.",
    },
    rights: {
      title: "Rechte nach Art der DSGVO",
      before:
        "Wenn Sie sich in einer Region mit Rechten an personenbezogenen Daten befinden, können Sie Auskunft, Berichtigung oder Löschung Ihrer A.C.E.-Kontodaten per E-Mail beantragen an",
      after:
        ". Anti-Cheat-Hardwaresperren für Ranglistenspiele sind nicht in Betrieb; die Löschung eines Website-Kontos ist kein Einspruch gegen einen CS2-VAC-Bann.",
    },
    cookies: {
      title: "Cookies",
      before: "Beachten Sie die",
      link: "Cookie-Richtlinie",
      after:
        "und die Einwilligungsleiste. Nach der Anmeldung sind notwendige Sitzungscookies erforderlich. Optionale Kategorien werden nicht genutzt, solange nicht tatsächlich ein Tracker hinzugefügt wird.",
    },
    controller: {
      title: "Verantwortlicher",
      body: "A.C.E. Competitions Ltd. Handelsregisternummer wird veröffentlicht. Kontakt: support@ace-platform.gg.",
    },
  },
  cookiePolicy: {
    meta: {
      title: "Cookie-Richtlinie",
      description:
        "Cookie- und Telemetrie-Datenschutzprüfung von A.C.E. Nur notwendige Sitzungscookies, sofern Sie nicht in reservierte optionale Kategorien einwilligen.",
    },
    kicker: "ACE-DATENSCHUTZ / COOKIES / TELEMETRIEPRÜFUNG",
    title: "Cookie-Richtlinie",
    lede: "Diese Seite ist die Telemetrie-Datenschutzprüfung für ace-platform.gg. Sie beschreibt die Cookies, die diese Website tatsächlich verwendet, die für später reservierten Kategorien und das, was nicht erhoben wird.",
    audit: {
      title: "Vollständige Telemetrieprüfung (aktueller Stand)",
      body: "A.C.E. setzt auf dieser öffentlichen Website keine Werbepixel, kein Google Analytics, kein Meta Pixel, keine Fingerprinting-SDKs und keine anderen Verhaltenstracker von Drittanbietern ein. Die optionalen „Analyse-Tracker“ und „Marketing-Tracker“ in der Einwilligungsleiste sind nur Kategorien. Wenn Sie sie aktivieren, wird derzeit kein Skript geladen. Wird später ein Tracker hinzugefügt, liest er zuerst die gespeicherte Einstellung und bleibt deaktiviert, sofern Sie nicht eingewilligt haben.",
    },
    essential: {
      title: "Notwendige Cookies [Erforderlich / Gesperrt]",
      session: {
        label: "Sitzungscookie",
        body: "— wird erst nach einem geprüften Steam-OpenID-Rückruf gesetzt. HttpOnly, für JavaScript auf der Seite nicht lesbar, dient dazu, Sie bei A.C.E. angemeldet zu halten.",
      },
      necessity:
        "Diese Cookies sind für den Betrieb eines authentifizierten Kontos unbedingt erforderlich. Sie sind keine Werbe-IDs.",
    },
    analytics: {
      title: "Analyse-Tracker [Optional]",
      before: "Reserviert. Es ist kein Anbieter für Produktanalysen eingerichtet. Ihre Wahl wird lokal unter",
      after: "gespeichert, damit eine künftige eigene Nutzungsmessung sie berücksichtigen kann.",
    },
    marketing: {
      title: "Marketing-Tracker [Optional]",
      body: "Reserviert. A.C.E. verkauft, vermietet oder vermittelt keine Verhaltensprofile. Auf dieser Website gibt es keinen Marketing-Tag-Manager.",
    },
    change: {
      title: "So ändern Sie Ihre Wahl",
      body: "Verwenden Sie die Cookie-Einstellungen in der Fußzeile oder löschen Sie die Websitedaten in Ihrem Browser. Das Ablehnen optionaler Kategorien blockiert niemals die Anmeldung über Steam.",
    },
  },
};
