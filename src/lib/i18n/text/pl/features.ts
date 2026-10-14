import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  page: {
    meta: {
      title: "Funkcje",
      description:
        "Specyfikacja architektury jądra antycheatu A.C.E., biometrycznego powiązania skanu twarzy i dziesięciu szczebli kalibracji umiejętności. Te systemy nie działają na tej stronie.",
    },
    header: {
      kicker: "ACE-FUNKCJE / JĄDRO / SKAN-TWARZY / KALIBRACJA",
      title: "Specyfikacja funkcji platformy",
      lede: "Ta strona to techniczna mapa klasy produkcyjnej dla trzech planowanych systemów A.C.E.: autonomicznego jądra antycheatu, biometrycznego powiązania skanu twarzy oraz dziesięciostopniowej drabiny kalibracji umiejętności. Nic na tej stronie nie jest działającym jądrem, działającym produktem z kamerą ani działającą kolejką rankingową. Steam OpenID, drużyny 5v5, układy drabinek i obliczenia oceny w stylu Elo istnieją w tym repozytorium. Dedykowanych serwerów CS2, płatności, nagród ani klienta integralności do pobrania — nie ma.",
    },
    kernel: {
      title: "Architektura jądra antycheatu",
      paragraphs: [
        "Wyspecyfikowana Autonomiczna Bezpieczna Powłoka to powiązany ze sprzętem klient integralności, który działałby obok Counter-Strike 2 na komputerze gracza i zgłaszał podpisany stan ALLOW lub DENY do serwerów zarządzanych przez A.C.E. Projekt jądra działa na zasadzie domyślnej odmowy: jeśli klienta brakuje, jest zatrzymany, nieaktualny, podrobiony lub niezweryfikowany, wstęp do gier rankingowych jest odmawiany. Przeglądarka nigdy nie rozstrzyga o uprawnieniach. Z tego powodu rankingowe ZNAJDŹ MECZ na tej stronie już teraz pozostaje zamknięte.",
        "Planowane warstwy jądra obejmują uzgadnianie w trybie użytkownika, które wiąże zweryfikowany 64-bitowy SteamID z kontem A.C.E., powierzchnię poświadczania identyfikatora sprzętu (HWID), listę obserwowanych sygnatur znanych rodzin cheatów oraz trasę uprawnień serwer–serwer chronioną wspólnym sekretem. Potwierdzona sygnatura cheatu, odmowa kontroli integralności lub podrobiony identyfikator urządzenia mają zgodnie ze specyfikacją powodować natychmiastową zmianę statusu konta na BANNED lub PERM_BANNED oraz, gdy powstanie produkt rozliczeniowy, całkowity przepadek opłaconego z góry czasu subskrypcji bez żadnego obowiązku zwrotu. Żaden taki klient nie jest dostarczany z tą stroną. Karty pobierania «Wkrótce» to tylko układ.",
      ],
      stats: [
        { label: "STAN JĄDRA", value: "Niewdrożone" },
        { label: "KOLEJKA RANKINGOWA", value: "Domyślnie zamknięta" },
        { label: "MAGAZYN HWID", value: "Niezbierane na tej stronie" },
      ],
    },
    faceScan: {
      title: "Biometryczne powiązanie skanu twarzy",
      paragraphs: [
        "Skan twarzy to wyspecyfikowana przyszła warstwa wiązania tożsamości, a nie produkt z kamerą na tej stronie. Planowany projekt — wyłącznie po wyraźnej zgodzie i osobnej analizie prawnej — wiązałby szablon twarzy sprawdzony testem żywotności z tym samym kontem A.C.E., które ma już zweryfikowany przez serwer SteamID. Celem jest przeciwdziałanie udostępnianiu kont w celu obejścia wcześniejszego ograniczenia. A.C.E. nie zbiera dziś zdjęć twarzy, wektorów cech twarzy, adresów e-mail ani odcisków sprzętu. Obecna zasada prywatności to ścisła niezbędność: wyłącznie zweryfikowany 64-bitowy SteamID i publiczna nazwa wyświetlana Steam.",
        "Jeśli skan twarzy kiedykolwiek zostanie wdrożony, nie zastąpi Steam OpenID, nie będzie używany do sprzedaży reklamy behawioralnej i sam nie odblokuje kolejek rankingowych. Wstęp do gier rankingowych nadal wymaga zweryfikowanej ścieżki antycheatu. Dopóki taka analiza nie powstanie, każdy panel skanu twarzy w poczekalni to wypełniacz układu.",
      ],
    },
    calibration: {
      title: "Dziesięć szczebli kalibracji umiejętności",
      intro:
        "Kalibracja konkurencyjna używa udokumentowanego wzoru w stylu Elo (wersja {version}, współczynnik K {kFactor}, skala {scale}). Nowe konta zaczynają od rangi 1 (Recruit), subskrypcji FREE, statusu ACTIVE i oceny turniejowej {startingRating}. Kryształowe etykiety w poczekalni to wizualne aliasy. Płatne kosmetyki nigdy nie kupują oceny, łatwiejszych przeciwników, serwerów 128 tick ani pierwszeństwa w kolejce. Nie ma działającego produktu 128 tick na sprzedaż.",
      table: {
        level: "Poziom",
        engineName: "Nazwa w silniku",
        crystalAlias: "Kryształowy alias",
        minRating: "Min. ocena",
      },
      divisions: {
        before:
          "Dywizje I, II i III w poczekalni to pokazowe żetony. Zmieniają tylko metryki układu. Dobieranie meczów według dywizji nie istnieje. Zobacz ",
        middle: ", aby obejrzeć obrotowy stół 3D, oraz ",
        after: ", aby przeczytać wiążący tekst rozgrywek.",
      },
    },
  },
  loot: {
    kicker: "Kosmetyki piaskownicy · płatność symulowana",
    title: "ARCHITEKTURA ŁUPÓW A.C.E. — ZRZUTY BRONI",
    lede: "Oryginalne nazwy wykończeń A.C.E. na typach broni z CS2. To nie są przedmioty Valve, nie są wymienialnymi skórkami i nie są prawdziwymi nagrodami. Płatności są symulowane.",
    mockDrop: "Pokazowy zrzut",
    multiplierLabel: "Wymagania mnożnika procentu wygranych",
    ladderLabel: "Cotygodniowe zrzuty z drabinki",
    multiplierValue: "Szablon {multiplier}×",
    ladderValue: "Cotygodniowe miejsce · makieta",
    checkout: "Płatność symulowana",
  },
  communityRail: {
    kicker: "Kanał układu · nie na żywo",
    newsTitle: "Najnowsze wieści z drabinki",
    newsItems: [
      "Pole drabinki pozostaje puste — 0 ze 100 drużyn.",
      "Wyszukiwanie rankingowe pozostaje zamknięte, dopóki nie powstanie antycheat.",
    ],
    prizesTitle: "Codzienne nagrody-skórki",
    prizesBody:
      "Żadne nagrody nie są przyznawane. Karty kosmetyków na tej stronie to makiety piaskownicy. Płatności są symulowane.",
  },
  identityPreview: {
    badge: "Podgląd — niepotwierdzone",
    cards: {
      faceScan: {
        title: "Skan twarzy na żywo potwierdzony",
        copy: "Test żywotności tożsamości to planowana kontrola dostawcy. Ta karta to podgląd układu. Nie wykonano żadnego skanu i nie są przechowywane żadne dane biometryczne.",
      },
      hardwareId: {
        title: "Identyfikator sprzętu powiązany",
        copy: "Powiązanie urządzenia to planowany sygnał integralności. Ta karta to podgląd układu. Nie zebrano żadnego odcisku sprzętu.",
      },
    },
  },
  preview: {
    fallbackTitle: "Podgląd",
    kicker: "Miejsce docelowe układu · to nie działający produkt",
    returnHome: "Wróć na stronę główną",
    pages: {
      support: {
        title: "Pomoc",
        body: "Publiczne biuro pomocy nie ma jeszcze obsługi. Ten link to wypełniacz miejsca docelowego w stopce.",
      },
      "anti-cheat": {
        title: "Przegląd antycheatu",
        body: "A.C.E. nie ma działającego produktu antycheatu. Dobieranie rankingowe pozostaje zamknięte, dopóki nie powstanie prawdziwa integracja.",
      },
      "download-client": {
        title: "Pobierz klienta",
        body: "Nie ma klienta desktopowego A.C.E. do pobrania. Natywny klient nie należy do obecnego etapu strony internetowej.",
      },
      "mobile-app": {
        title: "Aplikacja mobilna",
        body: "Nie ma aplikacji mobilnej A.C.E. To tylko link układu w stopce.",
      },
      news: {
        title: "Aktualności",
        body: "Nie ma działającej redakcji. To tylko link układu w stopce.",
      },
      about: {
        title: "O nas",
        body: "A.C.E. to niezależny serwis rozgrywek Counter-Strike 2 w fazie publicznego podglądu strony. Nie jest powiązany z Valve.",
      },
      advertising: {
        title: "Reklama",
        body: "Nie ma powierzchni reklamowej na sprzedaż. To tylko link układu w stopce.",
      },
      developers: {
        title: "Deweloperzy",
        body: "Nie ma jeszcze publicznego programu dla deweloperów. Interfejsy API uprawnień serwerów w tym repozytorium to wewnętrzne adaptery, a nie SDK dla partnerów.",
      },
      press: {
        title: "Prasa",
        body: "Nie ma zestawu prasowego ani redakcji. To tylko link układu w stopce.",
      },
      jobs: {
        title: "Praca",
        body: "Nie ma opublikowanych ofert pracy. To tylko link układu w stopce.",
      },
      terms: {
        title: "Warunki korzystania z usługi",
        body: "Obowiązujące Warunki korzystania z usługi są opublikowane pod adresem /terms. Regulamin turniejowy znajduje się pod adresem /rules.",
      },
      privacy: {
        title: "Polityka prywatności",
        body: "Polityka prywatności jest opublikowana pod adresem /privacy. Steam OpenID to jedyna ścieżka logowania; hasła Steam nigdy nie są zbierane.",
      },
      eula: {
        title: "EULA antycheatu",
        body: "Nie ma EULA antycheatu, ponieważ antycheat nie jest aktywny. Gry rankingowe pozostają domyślnie zamknięte.",
      },
    },
  },
};
