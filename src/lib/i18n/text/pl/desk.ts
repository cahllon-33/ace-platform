import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "Rynek A.C.E.",
      description:
        "Przykładowe karty broni jako nagrody. To nie przedmioty Valve ani finansowana nagroda, a kasa nie obciąża karty.",
    },
    heroHonesty:
      "Karty broni to przykłady nagród. Nie są przedmiotami Valve, nie znajdują się w żadnym ekwipunku, a kasa na tej stronie nie obciąża karty.",
    prizeBanner: "🏆 PRZYKŁAD NAGRODY TURNIEJOWEJ — WITRYNA NAGRÓD PREMIUM",
    notice:
      "Te pokazowe przedmioty nie mają wartości pieniężnej. Żadna skórka nie jest dostarczana, żadna nagroda nie jest finansowana, a przycisk oględzin nie rozpoczyna zakupu.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ TAJNE ZRZUTY Z TABELI",
        price: "Tylko przykład · brak wartości pieniężnej",
      },
      jungle: {
        name: "M4A1-S | Welcome to the Jungle",
        tag: "★ UTAJNIONY POZIOM ULEPSZEŃ",
        price: "Tylko przykład · brak wartości pieniężnej",
      },
      karambit: {
        name: "Karambit | Lore",
        tag: "★ TAJNY ZRZUT SPECJALNY",
        price: "Tylko przykład · brak wartości pieniężnej",
      },
      crown: {
        name: "Ramka awatara Korona A.C.E.",
        tag: "Ozdoba profilu",
        price: "W planie Premium lub za {rp} RP",
      },
      shimmer: {
        name: "Złoty laserowy połysk profilu",
        tag: "Personalizacja czatu",
        price: "W planie Premium lub za {rp} RP",
      },
      pass: {
        name: "Złota przepustka turniejowa Premium",
        tag: "Token dostępu do ligi",
        price: "{rp} RP / priorytetowe zgłoszenie rejestracyjne",
      },
    },
  },
  support: {
    meta: {
      title: "Pomoc",
      description:
        "Układ centrum pomocy A.C.E. Antycheat, kolejki rankingowe i dział rozliczeń nie działają. Zgłoszenia nie tworzą spraw.",
    },
  },
  contact: {
    meta: {
      title: "Kontakt",
      description:
        "Korporacyjny terminal kontaktu A.C.E. Wysyłane formularze to makiety piaskownicy — nie wysyłają e-maili i nie zapisują telemetrii.",
    },
  },
  contactEmail: {
    label: "USTAW ZWERYFIKOWANY E-MAIL TELEMETRII",
    hintSignedIn:
      "Zapisuje adres tylko w zalogowanym koncie. Nie jest wysyłana wiadomość potwierdzająca, więc adres nie jest zweryfikowany.",
    hintSignedOut: "Zaloguj się przez Steam, aby zapisać e-mail kontaktowy na swoim koncie.",
    saving: "ZAPISYWANIE",
    save: "ZAPISZ E-MAIL KONTAKTOWY",
    results: {
      signInFirst: "Zaloguj się przez Steam przed zapisaniem e-maila kontaktowego.",
      invalid: "Wpisz jeden adres e-mail lub zostaw pole puste, aby go wyczyścić.",
      failed: "Ten adres jest już zapisany na innym koncie albo baza danych jest niedostępna.",
      saved: "Adres kontaktowy zapisany na tym koncie. Nie wysłano wiadomości potwierdzającej, więc nie jest zweryfikowany.",
      cleared: "Adres kontaktowy wyczyszczony.",
    },
  },
};
