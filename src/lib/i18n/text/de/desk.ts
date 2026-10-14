import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "A.C.E.-Marktplatz",
      description:
        "Waffenkarten als Preisbeispiele. Keine Gegenstände von Valve, keine finanzierte Belohnung, und die Kasse belastet keine Karte.",
    },
    heroHonesty:
      "Die Waffenkarten sind Preisbeispiele. Sie sind keine Gegenstände von Valve, sie liegen in keinem Inventar, und die Kasse auf dieser Seite belastet keine Karte.",
    prizeBanner: "🏆 BEISPIEL FÜR EINEN TURNIERPREIS — SCHAU DER PREMIUM-BELOHNUNGEN",
    notice:
      "Diese Schaustücke haben keinen Geldwert. Es wird kein Skin ausgeliefert, kein Preis finanziert, und die Schaltfläche «Prüfen» startet keinen Kauf.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ VERDECKTE RANGLISTEN-FUNDE",
        price: "Nur Beispiel · kein Geldwert",
      },
      jungle: {
        name: "M4A1-S | Welcome to the Jungle",
        tag: "★ GEHEIME AUFWERTUNGSSTUFE",
        price: "Nur Beispiel · kein Geldwert",
      },
      karambit: {
        name: "Karambit | Lore",
        tag: "★ VERDECKTER SONDERFUND",
        price: "Nur Beispiel · kein Geldwert",
      },
      crown: {
        name: "A.C.E.-Kronen-Avatarrahmen",
        tag: "Profilschmuck",
        price: "Im Premium-Plan enthalten oder {rp} RP",
      },
      shimmer: {
        name: "Goldener Laserschimmer fürs Profil",
        tag: "Chat-Anpassung",
        price: "Im Premium-Plan enthalten oder {rp} RP",
      },
      pass: {
        name: "Goldener Premium-Turnierpass",
        tag: "Liga-Zugangsmarke",
        price: "{rp} RP / Vorrangige Anmeldung",
      },
    },
  },
  support: {
    meta: {
      title: "Hilfe",
      description:
        "Layout des A.C.E.-Hilfezentrums. Anti-Cheat, Rangliste-Warteschlangen und Abrechnungsschalter sind nicht in Betrieb. Anfrageaufforderungen legen keine Vorgänge an.",
    },
  },
  contact: {
    meta: {
      title: "Kontakt",
      description:
        "Firmen-Kontaktterminal von A.C.E. Formulareingaben sind Sandkasten-Attrappen und senden weder E-Mails noch speichern sie Telemetrie.",
    },
  },
  contactEmail: {
    label: "GEPRÜFTE TELEMETRIE-E-MAIL FESTLEGEN",
    hintSignedIn:
      "Speichert nur das angemeldete Konto. Es wird keine Bestätigungsnachricht gesendet, daher ist die Adresse nicht geprüft.",
    hintSignedOut: "Melde dich mit Steam an, um eine Kontakt-E-Mail in deinem Konto zu speichern.",
    saving: "WIRD GESPEICHERT",
    save: "KONTAKT-E-MAIL SPEICHERN",
    results: {
      signInFirst: "Melde dich mit Steam an, bevor du eine Kontakt-E-Mail speicherst.",
      invalid: "Gib eine einzelne E-Mail-Adresse ein oder lass das Feld leer, um sie zu löschen.",
      failed: "Diese Adresse ist bereits in einem anderen Konto gespeichert, oder die Datenbank ist nicht verfügbar.",
      saved: "Kontaktadresse in diesem Konto gespeichert. Es wurde keine Bestätigungsnachricht gesendet, daher ist sie nicht geprüft.",
      cleared: "Kontaktadresse gelöscht.",
    },
  },
};
