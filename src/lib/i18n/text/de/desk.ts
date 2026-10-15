import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "A.C.E.-Marktplatz",
      description:
        "Meisterschafts-Belohnungskarten. Shop und Belohnungen öffnen bald.",
    },
    heroHonesty:
      "Ein erster Blick auf kommende Meisterschaftsbelohnungen. Der Shop öffnet bald; heute wird nichts berechnet.",
    prizeBanner: "🏆 MEISTERSCHAFTSBELOHNUNGEN · DEMNÄCHST",
    notice:
      "Diese Schaustücke sind Vorschauen ohne Geldwert. Es wird nichts geliefert oder berechnet, und die Ansehen-Schaltfläche startet keinen Kauf.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ VERDECKTE RANGLISTEN-FUNDE",
        price: "Demnächst",
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
        price: "Demnächst",
      },
      shimmer: {
        name: "Goldener Laserschimmer fürs Profil",
        tag: "Chat-Anpassung",
        price: "Demnächst",
      },
      pass: {
        name: "Turnier-Goldpass",
        tag: "Liga-Zugangsmarke",
        price: "Demnächst",
      },
    },
  },
  support: {
    meta: {
      title: "Hilfe",
      description:
        "A.C.E.-Hilfecenter. Support für Anti-Cheat, Ranglisten und Abrechnung startet mit der Wettkampf-Beta.",
    },
  },
  contact: {
    meta: {
      title: "Kontakt",
      description:
        "Kontakt zu A.C.E. Das Online-Formular öffnet bald.",
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
