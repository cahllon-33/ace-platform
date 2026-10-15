import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  meta: {
    title: "Preise",
    description:
      "A.C.E.-Mitgliedschaft: Kostenlos {free}, Plus {plus}/Monat, Premium {premium}/Monat. Anzeigepreise als ganze Zahlen gesperrt.",
  },
  period: {
    monthly: "/Monat",
  },
  hero: {
    badge: "Mitgliedschaft",
    title: "Zugangsstufen",
    lede: "Kostenlos {free}. Plus {plus}/Monat. Premium {premium}/Monat. Diese Beträge sind als ganze Zahlen gesperrt. Bezahlte Pläne kaufen niemals Wertung oder leichtere Gegner.",
  },
  tiers: {
    free: {
      name: "KOSTENLOS",
      note: "Graphit",
      title: "Offener Zugang",
      points: [
        "Melde dich mit Steam OpenID an. A.C.E. fragt niemals nach einem Steam-Passwort.",
        "Eine gespeicherte Wertung beginnt bei 1,000. Kein Spielergebnis hat sie verändert.",
        "Alle öffentlichen Seiten: Spielen, Turniere, Rangliste, Teams und Regeln.",
      ],
    },
    plus: {
      name: "A.C.E. PLUS",
      note: "Plus",
      title: "Dankesbrief und Hilfe",
      points: [
        "Alles aus Free.",
        "Demnächst: Der Dankesbrief (was enthalten ist, was nicht, und support@ace-platform.gg) öffnet sich erst, wenn es einen Checkout gibt. Heute ist der Button deaktiviert.",
        "Kauft weder Wertung noch leichtere Gegner. Goldene Profilabzeichen stammen für jeden Spieler aus gespeicherten Matchdaten. Elite-Siegel und Sonderabzeichen erscheinen nur, wenn die gespeicherte Stufe bereits Premium ist.",
      ],
    },
    premium: {
      name: "A.C.E. PREMIUM",
      note: "Premium",
      title: "Dankesbrief und Kader mit fünf Spielern",
      points: [
        "Alles aus Free.",
        "Demnächst: Der Dankesbrief (was enthalten ist, was nicht, und support@ace-platform.gg) öffnet sich erst, wenn es einen Checkout gibt. Heute ist der Button deaktiviert.",
        "Demnächst: Nach dem Checkout führt der Brief weiter zu Squads, wo ein mit Steam angemeldeter Captain einen Fünf-Spieler-Clan speichern kann.",
        "Kein Preis, keine Waffe, keine laufende Warteschlange und kein Spielserver. Ein gespeicherter Clan ist kein Platz auf der Tafel mit 100 Mannschaften.",
      ],
    },
  },
  card: {
    elite: "ELITE",
    stayFree: "Beim kostenlosen Plan bleiben",
    freeNote: "Jetzt verfügbar",
    choose: "{plan} wählen",
    chooseAria: "{plan} für {price} pro Monat wählen",
  },
  billing: {
    kicker: "ZEITLEISTE DER ABRECHNUNG",
    title: "So wird die Abrechnung funktionieren, sobald es sie gibt",
    body: "Plus kostet genau {plus}/Monat. Premium kostet genau {premium}/Monat.",
    display: {
      label: "01 · ANZEIGE",
      body: "Kostenlos {free}. Plus {plus}/Monat. Premium {premium}/Monat. Bezahlte Stufen kaufen niemals Wertung oder leichtere Gegner.",
    },
    rolling: {
      label: "02 · LAUFENDER ZYKLUS",
      body: "Sobald es eine Abrechnung gibt, verlängern sich die Belastungen in einem laufenden Monatszyklus. Ein angebrochener Monat wird nicht erstattet. Eine Kündigung stoppt den nächsten Zyklus und löscht nicht den aktuellen, bereits bezahlten Zeitraum.",
    },
    today: {
      label: "03 · HEUTE",
    },
  },
  compare: {
    kicker: "Was A.C.E. heute versprechen kann",
    title: "Vergleich der Mitgliedschaften",
    note: "Jede Zeile gibt den heutigen Stand der Website wieder. Die Bezahlung folgt in Kürze, und ein bezahlter Plan öffnet nie eine Warteschlange und kauft keinen Vorteil.",
    caption: "Kostenlos, Plus und Premium im Vergleich danach, was die Website heute tut",
    includedToday: "Heute enthalten",
    columns: {
      free: "Kostenlos",
      plus: "Plus",
      premium: "Premium",
    },
    rows: {
      publicSite: {
        feature: "Öffentliche Website",
        detail: "Start, Spielen, Turniere, Rangliste, Teams, Regeln und Bedingungen.",
      },
      steamSignIn: {
        feature: "Steam-Anmeldung",
        detail: "Offizielles Steam OpenID. A.C.E. fragt niemals nach einem Steam-Passwort.",
      },
      startingRating: {
        feature: "Startwertung",
        detail: "Die Zahl, die auf einem neuen Konto vor jedem erfassten Spiel gespeichert ist.",
      },
      recordedMatches: {
        feature: "Erfasste Spiele",
        detail: "Siege und Niederlagen, die aus einem beendeten A.C.E.-Spiel geschrieben werden.",
      },
      rankedQueue: {
        feature: "Rangliste-Warteschlange",
        detail: "«SPIEL FINDEN» bleibt geschlossen, bis es eine echte Warteschlange gibt.",
      },
      cs2Servers: {
        feature: "CS2-Server",
        detail: "Diese Website sendet weder eine Serveradresse noch einen Verbindungslink.",
      },
      antiCheatClient: {
        feature: "Anti-Cheat-Client",
        detail: "Von dieser Website wird nichts heruntergeladen.",
      },
      charge: {
        feature: "Belastung",
        detail: "Die Wahl von Plus oder Premium belastet keine Karte.",
      },
      ratingForSale: {
        feature: "Käufliche Wertung",
        detail: "Ein bezahltes Etikett kauft niemals Wertung oder leichtere Gegner.",
      },
      prizeOrWeapon: {
        feature: "Preis oder Waffe",
        detail: "Es wird kein Skin, kein Messer und kein Preistopf ausgeliefert.",
      },
      goldEliteSeal: {
        feature: "Elite-Siegel & Sonderabzeichen",
        detail:
          "Nur Premium, ausgelesen aus der auf dem Server gespeicherten Stufe. Kosmetisch. Der Checkout setzt diese Stufe nicht.",
      },
    },
    cells: {
      open: "Offen",
      yes: "Ja",
      noneYet: "Noch keine",
      closed: "Geschlossen",
      notConnected: "Demnächst",
      notShipped: "Nicht ausgeliefert",
      noCharge: "Keine Belastung",
      notForSale: "Nicht käuflich",
      none: "Keine",
      no: "Nein",
      storedTierOnly: "Nur gespeicherte Stufe",
    },
  },
  receipt: {
    plus: {
      metaTitle: "Plus-Quittung",
      metaDescription:
        "Der A.C.E.-Plus-Brief, der auf dieser Website angezeigt wird. Die Kasse ist nicht in Betrieb, daher wird nichts berechnet und keine E-Mail gesendet.",
      planName: "A.C.E. Plus",
      nextLabel: "Weiter auf A.C.E.",
      nextBody:
        "Die öffentlichen Seiten bleiben offen. Diese Auswahl öffnet keine Warteschlange und ändert die gespeicherte Stufe nicht.",
    },
    premium: {
      metaTitle: "Premium-Quittung",
      metaDescription:
        "Der A.C.E.-Premium-Brief, der auf dieser Website angezeigt wird. Die Kasse ist nicht in Betrieb, daher wird nichts berechnet und keine E-Mail gesendet.",
      planName: "A.C.E. Premium",
      nextLabel: "Weiter zu den Kadern",
      nextBody:
        "Weiter zu den Kadern. Die Seite fragt, ob ihr ein Team aus fünf Spielern seid. Platz 1 ist das angemeldete Steam-Konto. Die Plätze 2 bis 5 sind die anderen Spieler. Auch das Speichern eines Clans berechnet diesen Preis nicht.",
    },
  },
  letter: {
    kicker: "{plan} · {price} pro Monat",
    title: "Danke für deine Auswahl",
    flag: "Dieser Brief wird auf der Website angezeigt. Es wurde keine E-Mail gesendet. Es wurde keine Karte belastet. Die Kasse ist nicht in Betrieb, und die gespeicherte Mitgliedsstufe wurde nicht geändert.",
    greeting: "Liebe Spielerin, lieber Spieler,",
    intro:
      "danke, dass du {plan} gewählt hast. Diese Seite ist die Quittung. Sie hält den Anzeigepreis fest, was diese Auswahl heute enthält, was sie nicht enthält, und die auf dieser Website veröffentlichte Hilfeadresse.",
    selected: {
      title: "Was gewählt wurde",
      items: [
        "Planname: {plan}.",
        "Anzeigepreis: {price} pro Monat. Der Betrag ist ein Etikett, keine Belastung.",
        "Zahlung: keine. Die Wahl dieses Plans belastet keine Karte.",
        "E-Mail: keine. A.C.E. sendet diesen Brief nicht in ein Postfach.",
        "Gespeicherte Stufe: unverändert. Sonderabzeichen und Elite-Siegel erscheinen nur, wenn das Konto bereits Premium gespeichert hat.",
        "Wertung: nicht käuflich. Ein neues Konto beginnt weiterhin bei 1,000.",
      ],
    },
    today: {
      title: "Was du heute nutzen kannst",
      items: [
        "Die öffentliche Website: Start, Spielen, Turniere, Rangliste, Teams, Regeln und Bedingungen.",
        "Steam-Anmeldung über das offizielle Steam OpenID. A.C.E. fragt niemals nach einem Steam-Passwort.",
        "Dieselben öffentlichen Seiten wie beim kostenlosen Plan. Dieser Preis öffnet keine eigene Warteschlange.",
      ],
    },
    excluded: {
      title: "Was diese Auswahl nicht enthält",
      items: [
        "Eine laufende Rangliste-Warteschlange. «SPIEL FINDEN» bleibt geschlossen.",
        "Einen Counter-Strike 2-Server, eine Serveradresse oder einen Verbindungslink.",
        "Ein Anti-Cheat-Download. A.C.E Shield ist in Entwicklung.",
        "Einen Preis, einen Skin, ein Messer oder einen Preistopf.",
        "Einen Platz auf der Tafel mit 100 Mannschaften. Diese Tafel zeigt weiterhin 0 registriert, bis eine Saison öffnet.",
        "Leichtere Gegner, eine gekaufte Wertung oder eine andere öffentliche Website als beim kostenlosen Plan.",
      ],
    },
    trouble: {
      title: "Wenn etwas nicht funktioniert",
      items: [
        "Du hast eine Belastung oder eine bezahlte Stufe erwartet. Es wurde keine angewendet. Das Konto bleibt, wie es war.",
        "Du hast diesen Brief in einem Postfach erwartet. Er existiert nur auf dieser Seite.",
        "Steam hat sich nicht verbunden. Nutze «Profil verbinden» und setze zuerst das Häkchen bei den Bedingungen. Gib niemals ein Steam-Passwort bei A.C.E. ein.",
        "Du brauchst Hilfe. Nutze die Hilfeadresse unten oder öffne die Hilfeseiten auf dieser Website.",
      ],
    },
    support: {
      title: "Hilfe",
      addressBefore: "Die auf dieser Website angegebene Hilfeadresse lautet ",
      addressAfter: ".",
      helpBefore: "Hilfe auf der Website: ",
      supportLink: "Hilfe",
      helpAnd: " und ",
      contactLink: "Kontakt",
      rulesBefore: ". Die Regeln stehen unter ",
      rulesLink: "Regeln",
      rulesAnd: " und ",
      termsLink: "Bedingungen",
      helpAfter:
        ". Eine Aufforderung auf der Hilfeseite eröffnet keine Anfrage, und auf der Kontaktseite eingegebener Text wird nicht zugestellt.",
    },
    next: {
      title: "Nächster Schritt",
    },
  },
  telemetry: {
    kicker: "PLUS / PREMIUM TELEMETRIE",
    copy: "TELEMETRIE DER ÜBERSICHT GESPERRT — Wechsle deinen Abonnementplan zu A.C.E. Plus oder Premium, um dynamische Statistikkurven in Echtzeit und Waffenspezialisierungs-Indizes freizuschalten.",
    cta: "Preistabellen öffnen",
  },
};
