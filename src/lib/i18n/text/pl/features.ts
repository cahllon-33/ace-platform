import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  "page": {
    "meta": {
      "title": "Funkcje",
      "description": "Specyfikacja architektury jądra antycheatu A.C.E., biometrycznego powiązania skanu twarzy i dziesięciu szczebli kalibracji umiejętności. Te systemy nie działają na tej stronie."
    },
    "header": {
      "kicker": "ACE-FUNKCJE / JĄDRO / SKAN-TWARZY / KALIBRACJA",
      "title": "Specyfikacja funkcji platformy",
      "lede": "Ta strona to techniczna mapa klasy produkcyjnej dla trzech planowanych systemów A.C.E.: autonomicznego jądra antycheatu, biometrycznego powiązania skanu twarzy oraz dziesięciostopniowej drabiny kalibracji umiejętności. Nic na tej stronie nie jest działającym jądrem, działającym produktem z kamerą ani działającą kolejką rankingową. Steam OpenID, drużyny 5v5, układy drabinek i obliczenia oceny w stylu Elo istnieją w tym repozytorium. Dedykowanych serwerów CS2, płatności, nagród ani klienta integralności do pobrania — nie ma."
    },
    "kernel": {
      "title": "Architektura jądra antycheatu",
      "paragraphs": [
        "Wyspecyfikowana Autonomiczna Bezpieczna Powłoka to powiązany ze sprzętem klient integralności, który działałby obok Counter-Strike 2 na komputerze gracza i zgłaszał podpisany stan ALLOW lub DENY do serwerów zarządzanych przez A.C.E. Projekt jądra działa na zasadzie domyślnej odmowy: jeśli klienta brakuje, jest zatrzymany, nieaktualny, podrobiony lub niezweryfikowany, wstęp do gier rankingowych jest odmawiany. Przeglądarka nigdy nie rozstrzyga o uprawnieniach. Z tego powodu rankingowe ZNAJDŹ MECZ na tej stronie już teraz pozostaje zamknięte.",
        "Planowane warstwy jądra obejmują uzgadnianie w trybie użytkownika, które wiąże zweryfikowany 64-bitowy SteamID z kontem A.C.E., powierzchnię poświadczania identyfikatora sprzętu (HWID), listę obserwowanych sygnatur znanych rodzin cheatów oraz trasę uprawnień serwer–serwer chronioną wspólnym sekretem. Potwierdzona sygnatura cheatu, odmowa kontroli integralności lub podrobiony identyfikator urządzenia mają zgodnie ze specyfikacją powodować natychmiastową zmianę statusu konta na BANNED lub PERM_BANNED oraz, gdy powstanie produkt rozliczeniowy, całkowity przepadek opłaconego z góry czasu subskrypcji bez żadnego obowiązku zwrotu. Żaden taki klient nie jest dostarczany z tą stroną. Karty pobierania «Wkrótce» to tylko układ."
      ],
      "stats": [
        {
          "label": "STAN JĄDRA",
          "value": "W przygotowaniu"
        },
        {
          "label": "KOLEJKA RANKINGOWA",
          "value": "Domyślnie zamknięta"
        },
        {
          "label": "MAGAZYN HWID",
          "value": "Niezbierane na tej stronie"
        }
      ]
    },
    "faceScan": {
      "title": "Biometryczne powiązanie skanu twarzy",
      "paragraphs": [
        "Skan twarzy to wyspecyfikowana przyszła warstwa wiązania tożsamości, a nie produkt z kamerą na tej stronie. Planowany projekt — wyłącznie po wyraźnej zgodzie i osobnej analizie prawnej — wiązałby szablon twarzy sprawdzony testem żywotności z tym samym kontem A.C.E., które ma już zweryfikowany przez serwer SteamID. Celem jest przeciwdziałanie udostępnianiu kont w celu obejścia wcześniejszego ograniczenia. A.C.E. nie zbiera dziś zdjęć twarzy, wektorów cech twarzy, adresów e-mail ani odcisków sprzętu. Obecna zasada prywatności to ścisła niezbędność: wyłącznie zweryfikowany 64-bitowy SteamID i publiczna nazwa wyświetlana Steam.",
        "Jeśli Face Scan kiedykolwiek powstanie, nie zastąpi Steam OpenID, nie będzie służył do sprzedaży reklam behawioralnych i sam nie odblokuje kolejek rankingowych. Dostęp do gier rankingowych nadal wymaga zweryfikowanej ścieżki Anti-Cheat. Dopóki taka weryfikacja nie powstanie, każdy panel Face Scan w lobby jest podglądem projektu."
      ]
    },
    "calibration": {
      "title": "Dziesięć szczebli kalibracji umiejętności",
      "intro": "Competitive Calibration korzysta z opublikowanych zasad Rating Points A.C.E (wersja {version}: krok {kFactor}, skala {scale}). Nowe konta zaczynają od rangi 3 (Vanguard), subskrypcji FREE, statusu ACTIVE i {startingRating} ratingu rankingowego. Nazwy kryształów w lobby to aliasy wizualne. Płatne kosmetyki nigdy nie kupują ratingu, łatwiejszych przeciwników, serwerów 128-tick ani pierwszeństwa w kolejce. Nie ma w sprzedaży aktywnego produktu 128-tick.",
      "table": {
        "level": "Poziom",
        "engineName": "Nazwa w silniku",
        "crystalAlias": "Kryształowy alias",
        "minRating": "Min. ocena"
      },
      "divisions": {
        "before": "Dywizje I, II i III w poczekalni to pokazowe żetony. Zmieniają tylko metryki układu. Dobieranie meczów według dywizji nie istnieje. Zobacz ",
        "middle": ", aby obejrzeć obrotowy stół 3D, oraz ",
        "after": ", aby przeczytać wiążący tekst rozgrywek."
      }
    }
  },
  "loot": {
    "kicker": "Kosmetyki · wkrótce",
    "title": "ARCHITEKTURA ŁUPÓW A.C.E. — ZRZUTY BRONI",
    "lede": "Oryginalne wykończenia A.C.E., dostępne wraz ze sklepem. Kosmetyki nigdy nie wpływają na rywalizację.",
    "checkout": "Płatność · wkrótce"
  },
  "identityPreview": {
    "badge": "Podgląd — niepotwierdzone",
    "cards": {
      "faceScan": {
        "title": "Skan twarzy na żywo potwierdzony",
        "copy": "Wykrywanie żywotności to planowana weryfikacja u dostawcy. Dziś nie zbieramy danych biometrycznych."
      },
      "hardwareId": {
        "title": "Identyfikator sprzętu powiązany",
        "copy": "Powiązanie urządzenia to planowany sygnał uczciwości. Dziś nie zbieramy identyfikatorów sprzętu."
      }
    }
  },
  "preview": {
    "fallbackTitle": "Podgląd",
    "kicker": "Wkrótce",
    "returnHome": "Wróć na stronę główną",
    "pages": {
      "support": {
        "title": "Pomoc",
        "body": "Nasze publiczne wsparcie ruszy wraz z betą rywalizacji."
      },
      "anti-cheat": {
        "title": "Przegląd antycheatu",
        "body": "A.C.E. nie ma działającego produktu antycheatu. Dobieranie rankingowe pozostaje zamknięte, dopóki nie powstanie prawdziwa integracja."
      },
      "download-client": {
        "title": "Pobierz klienta",
        "body": "Nie ma klienta desktopowego A.C.E. do pobrania. Natywny klient nie należy do obecnego etapu strony internetowej."
      },
      "mobile-app": {
        "title": "Aplikacja mobilna",
        "body": "Aplikacja mobilna A.C.E. jest w planach rozwoju."
      },
      "news": {
        "title": "Aktualności",
        "body": "Biuro prasowe A.C.E. ruszy wkrótce."
      },
      "about": {
        "title": "O nas",
        "body": "A.C.E. to niezależny serwis rozgrywek Counter-Strike 2 w fazie publicznego podglądu strony. Nie jest powiązany z Valve."
      },
      "advertising": {
        "title": "Reklama",
        "body": "Zapytania o partnerstwa i reklamę wkrótce."
      },
      "developers": {
        "title": "Deweloperzy",
        "body": "Nie ma jeszcze publicznego programu dla deweloperów. Interfejsy API uprawnień serwerów w tym repozytorium to wewnętrzne adaptery, a nie SDK dla partnerów."
      },
      "press": {
        "title": "Prasa",
        "body": "Zestaw prasowy pojawi się wkrótce."
      },
      "jobs": {
        "title": "Praca",
        "body": "Oferty pracy pojawią się tutaj."
      },
      "terms": {
        "title": "Warunki korzystania z usługi",
        "body": "Obowiązujące Warunki korzystania z usługi są opublikowane pod adresem /terms. Regulamin turniejowy znajduje się pod adresem /rules."
      },
      "privacy": {
        "title": "Polityka prywatności",
        "body": "Polityka prywatności jest opublikowana pod adresem /privacy. Steam OpenID to jedyna ścieżka logowania; hasła Steam nigdy nie są zbierane."
      },
      "eula": {
        "title": "EULA antycheatu",
        "body": "Nie ma EULA antycheatu, ponieważ antycheat nie jest aktywny. Gry rankingowe pozostają domyślnie zamknięte."
      }
    }
  }
};
