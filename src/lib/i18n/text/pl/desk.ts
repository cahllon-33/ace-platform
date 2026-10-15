import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "Rynek A.C.E.",
      description:
        "Karty nagród mistrzowskich. Sklep i nagrody ruszą wkrótce.",
    },
    heroHonesty:
      "Pierwsze spojrzenie na nadchodzące nagrody mistrzowskie. Sklep ruszy wkrótce; dziś nic nie jest pobierane.",
    prizeBanner: "🏆 NAGRODY MISTRZOWSKIE · WKRÓTCE",
    notice:
      "Te prezentacje to podgląd bez wartości pieniężnej. Nic nie jest dostarczane ani pobierane, a przycisk podglądu nie rozpoczyna zakupu.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ TAJNE ZRZUTY Z TABELI",
        price: "Wkrótce",
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
        price: "Wkrótce",
      },
      shimmer: {
        name: "Złoty laserowy połysk profilu",
        tag: "Personalizacja czatu",
        price: "Wkrótce",
      },
      pass: {
        name: "Złota przepustka turniejowa",
        tag: "Token dostępu do ligi",
        price: "Wkrótce",
      },
    },
  },
  support: {
    meta: {
      title: "Pomoc",
      description:
        "Centrum pomocy A.C.E. Wsparcie dla anti-cheatu, gier rankingowych i płatności ruszy wraz z betą rywalizacji.",
    },
  },
  contact: {
    meta: {
      title: "Kontakt",
      description:
        "Kontakt z A.C.E. Formularz online ruszy wkrótce.",
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
