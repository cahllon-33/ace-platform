import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "statsConsole": {
    "metaTitle": "Statystyki gracza",
    "kicker": "STATYSTYKI GRACZA",
    "title": "Statystyki gracza",
    "lede": "Zmiany ratingu z Twoich zapisanych meczów A.C.E ze wskaźnikami % headshotów i celności. W zestawie A.C.E Plus (4 $/mies.) i A.C.E Premium (7 $/mies.).",
    "movementTitle": "Zmiany ratingu",
    "movementNote": "Każdy punkt to zmiana ratingu zapisana z meczu A.C.E.",
    "noMatches": "Brak zapisanych meczów, więc wykres jest pusty. Wypełni się po Twoim pierwszym zapisanym meczu A.C.E.",
    "currentLabel": "Obecny rating",
    "netLabel": "Zmiana netto",
    "changesLabel": "Zapisane zmiany",
    "hsTitle": "% headshotów",
    "accTitle": "Celność (trafienia / strzały)",
    "gaugeSoon": "Wkrótce: te wskaźniki wymagają analizy dem meczów, która jeszcze nie istnieje.",
    "soon": "Wkrótce",
    "sample": "PRZYKŁAD · tylko kształt, nie prawdziwe dane",
    "lockedTitle": "Statystyki gracza są częścią A.C.E Plus i Premium",
    "lockedBody": "Twój zapisany plan to Free. Plus (4 $/mies.) i Premium (7 $/mies.) odblokowują tę stronę. Wkrótce: płatności jeszcze nie ma.",
    "signIn": "Zaloguj się przez Steam, aby zobaczyć swoje statystyki.",
    "plansLink": "Zobacz plany",
    "rosterNote": "Przykładowy profil składu: ci gracze nie mają zapisanych meczów A.C.E, więc statystyki nie pokazują liczb.",
    "dashTitle": "Statystyki i analiza",
    "dashStats": "Otwórz statystyki gracza",
    "dashAnalysis": "Otwórz analizę meczów (Premium)",
    "chartAria": "Wykres zmian ratingu"
  },
  "dashboard": {
    "meta": {
      "title": "Pokład dowodzenia"
    },
    "kicker": "Uwierzytelniono",
    "title": "Pokład dowodzenia",
    "lede": "Zalogowano przez Steam OpenID. Sesja jest przechowywana w pliku cookie HttpOnly, a nie w localStorage. Wyszukiwanie rankingowe pozostaje zamknięte, dopóki antycheat nie będzie prawdziwy.",
    "eliteBadge": "ELITA",
    "stats": {
      "accountStatus": "Status konta",
      "subscription": "Subskrypcja",
      "rank": "Ranga A.C.E",
      "ratingPoints": "Punkty oceny",
      "wins": "Wygrane",
      "losses": "Przegrane",
      "accountId": "Wewnętrzny identyfikator konta"
    },
    "accountStatuses": {
      "ACTIVE": "Aktywne",
      "SUSPENDED": "Zawieszone",
      "BANNED": "Zablokowane",
      "TEMP_BANNED": "Tymczasowo zablokowane",
      "PERM_BANNED": "Trwale zablokowane",
      "UNDER_REVIEW": "W trakcie weryfikacji"
    },
    "tiers": {
      "FREE": "Darmowy",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "Kapitan",
      "PLAYER": "Gracz"
    },
    "settings": {
      "title": "USTAWIENIA PROFILU PANELU",
      "billingNotLive": "Każde konto jest na Free, dopóki nie będzie płatności.",
      "cancelReason": "Nie ma opłacanej subskrypcji do anulowania. Kasa nie została zaimplementowana.",
      "cancelButton": "Anuluj subskrypcję"
    },
    "rankedReason": "Dobieranie rankingowe jest odmawiane, dopóki nie powstanie zweryfikowana integracja antycheatu.",
    "rankedButton": "Znajdź mecz rankingowy",
    "roster": {
      "title": "Skład 5v5",
      "body": "Jeden kapitan. Cztery zaproszenia. Kapitanowie zapraszają inne identyfikatory kont A.C.E, które powstają wyłącznie po zweryfikowanym logowaniu przez Steam."
    },
    "pendingInvites": "Oczekujące zaproszenia"
  },
  "forms": {
    "requestFailed": "Żądanie nie powiodło się.",
    "createTeam": {
      "acceptRequired": "Zaakceptuj Warunki korzystania z usługi, EULA antycheatu i Politykę prywatności, aby kontynuować.",
      "failed": "Nie udało się utworzyć drużyny.",
      "nameLabel": "Nazwa nowej drużyny 5v5",
      "submitAria": "Załóż nową drużynę 5v5",
      "submit": "Załóż drużynę"
    },
    "invite": {
      "failed": "Zaproszenie nie powiodło się.",
      "label": "Zaproś wolnego agenta przez SteamID lub identyfikator konta A.C.E.",
      "submitAria": "Wyślij zaproszenie do drużyny",
      "submit": "Wyślij zaproszenie"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "Profil gracza",
      "title": "{name} · profil A.C.E.",
      "description": "Dossier gracza A.C.E. Sesje Plus i Premium odblokowują wykresy trendów telemetrii."
    },
    "kicker": "Tożsamość gracza",
    "bannerPlaceholder": "Baner profilu · wkrótce",
    "levelBadge": "POZIOM {level}",
    "rosterLevel": "Poziom w składzie: {level}.",
    "trend": {
      "title": "Trend wyników oceny turniejowej",
      "note": "Punkty oceny w kolejnych zapisach historii meczów."
    },
    "combat": {
      "title": "Szczegółowa matryca danych walki",
      "kills": "Łączne zabójstwa",
      "deaths": "Łączne zgony",
      "kd": "Obliczone K/D",
      "headshots": "Łączne trafienia w głowę",
      "headshotPct": "Zakres % trafień w głowę",
      "knifeKills": "Specjalne zabójstwa nożem"
    },
    "weapon": {
      "title": "Specjalizacja w broni popisowej",
      "note": "Główna skalibrowana platforma broni",
      "accuracy": "Ocena celności",
      "kills": "Łączne zabójstwa tą bronią"
    },
    "gear": {
      "title": "Specyfikacja komputera",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "Częstotliwość odświeżania monitora (Hz)",
      "mouse": "Model myszy",
      "dpi": "Aktywne ustawienie DPI"
    },
    "networksTitle": "Link do profilu Steam",
    "back": "Wróć do składu klanu"
  },
  "networks": {
    "note": "Link wpisany tutaj pozostaje w tej przeglądarce i nie jest zapisywany. A.C.E nigdy nie prosi o hasło Steam.",
    "labels": {
      "steam": "Profil Steam"
    },
    "open": "Otwórz {label} >"
  },
  "ratingTrend": {
    "chartAria": "Trend wyników oceny turniejowej",
    "pointAria": "Mecz {match}: ocena {rating}",
    "axisLabel": "M{match}",
    "idle": "Najedź na węzeł, aby obejrzeć zapis oceny.",
    "readout": "Mecz {match} · ocena {rating}"
  },
  "loginError": {
    "meta": {
      "title": "Błąd logowania"
    },
    "title": "Logowanie przez Steam nie zostało ukończone",
    "notConfigured": "Steam OpenID nie jest jeszcze skonfigurowany na tym serwerze. A.C.E nigdy nie prosi o hasło Steam.",
    "unavailable": "Steam nie odpowiedział na żądanie weryfikacji. Spróbuj ponownie za chwilę. A.C.E nigdy nie prosi o hasło Steam.",
    "unverified": "Nie udało się zweryfikować odpowiedzi OpenID na serwerze. A.C.E nigdy nie prosi o hasło Steam.",
    "returnHome": "Wróć na stronę główną"
  }
};
