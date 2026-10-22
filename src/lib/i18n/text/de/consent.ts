import type { TextBag } from "../types";

export const consent: TextBag["consent"] = {
  valveDisclaimer:
    "A.C.E ist eine unabhängige Wettkampfseite für Counter-Strike 2. Sie ist nicht mit der Valve Corporation verbunden und wird von ihr weder autorisiert noch unterstützt. Steam und Counter-Strike sind Marken ihrer Inhaber. Das Wettkampfreglement ist der eigene Text von A.C.E für dieses Spiel.",
  acceptance: {
    label: "Ich akzeptiere ausdrücklich die Nutzungsbedingungen, die Anti-Cheat-EULA und die Datenschutzrichtlinie.",
    readBefore: "Lies die",
    termsLink: "Bedingungen",
    afterTerms: ",",
    rulesLink: "Regeln / EULA",
    afterRules: " und den",
    privacyLink: "Datenschutz",
    after: ".",
  },
  categories: {
    legend: "Cookie-Kategorien",
    essential: "Notwendige Cookies",
    required: "Erforderlich / Gesperrt",
    analytics: "Analyse-Tracker",
    marketing: "Marketing-Tracker",
    optional: "Optional",
  },
  banner: {
    kicker: "HINWEIS DER A.C.E-WEBSITE",
    copy: {
      before:
        "«Akzeptieren» speichert die Cookie-Auswahl dieses Browsers. Es ist keine elektronische Unterschrift, erfasst keine Gerätetelemetrie, startet keinen Anti-Cheat-Client und öffnet keine Wettkampf-Warteschlange. Lies die",
      termsLink: "Nutzungsbedingungen",
      afterTerms: ", die",
      rulesLink: "Regeln",
      afterRules: " und die",
      cookiePolicyLink: "Cookie-Richtlinie",
      after: ", bevor du fortfährst.",
    },
    acceptLabel: "Cookie-Auswahl akzeptieren. Dadurch wird keine Warteschlange geöffnet und kein Anti-Cheat-Client gestartet.",
    accept: "COOKIE-AUSWAHL AKZEPTIEREN >",
    rejectLabel: "Optionale Analyse- und Marketing-Cookies ablehnen",
    reject: "OPTIONALE ABLEHNEN",
  },
  settings: {
    openLabel: "Cookie-Einstellungen öffnen",
    open: "Cookie-Einstellungen",
    title: "Cookie-Einstellungen",
    body: "Notwendige Sitzungs-Cookies sind für Steam OpenID erforderlich. Optionale Analyse- und Marketing-Markierungen werden nur hier gespeichert. Auf dieser Website laufen heute keine Werbe- oder Analyseskripte.",
    cookiePolicyLink: "Cookie-Richtlinie",
    saveLabel: "Cookie-Einstellungen speichern",
    save: "Speichern",
    closeLabel: "Cookie-Einstellungen schließen",
    close: "Schließen",
  },
  subscriptionDisclosure:
    "Abos laufen über den Paddle-Checkout als Monatsplan, bis du kündigst. Kündige jederzeit unter „Abo verwalten“; Erstattungen gemäß Erstattungsrichtlinie (14 Tage). Solange Zahlungen nicht eingerichtet sind, zeigt der Checkout-Button „Demnächst“.",
  planned: {
    fallbackLabel: "Geplante Aktion",
    badge: "Geplant — nicht verfügbar",
  },
};
