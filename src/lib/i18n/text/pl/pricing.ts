import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  meta: {
    title: "Ceny",
    description:
      "Członkostwo A.C.E.: Darmowy {free}, Plus {plus}/mies., Premium {premium}/mies. Wyświetlane ceny są zablokowane jako liczby całkowite.",
  },
  period: {
    monthly: "/mies.",
  },
  hero: {
    badge: "Członkostwo",
    title: "Poziomy dostępu",
    lede: "Darmowy {free}. Plus {plus}/mies. Premium {premium}/mies. Te kwoty są zablokowane jako liczby całkowite. Płatne plany nigdy nie kupują oceny ani łatwiejszych przeciwników.",
  },
  tiers: {
    free: {
      name: "DARMOWY",
      note: "Grafit",
      title: "Otwarty dostęp już dziś",
      points: [
        "Logowanie przez Steam OpenID. A.C.E. nigdy nie prosi o hasło Steam.",
        "Zapisana ocena zaczyna się od 1000. Żaden wynik meczu jej nie zmienił.",
        "Wszystkie strony publiczne: gra, turnieje, ranking, drużyny i zasady.",
      ],
    },
    plus: {
      name: "A.C.E. PLUS",
      note: "Plus",
      title: "List z podziękowaniem i wsparcie",
      points: [
        "Wszystko z planu Darmowego. Płatności ruszą wkrótce; dziś nic nie jest pobierane.",
        "Otwiera na tej stronie list z podziękowaniem: co obejmuje, czego nie obejmuje, oraz adres support@ace-platform.gg.",
        "Nie kupuje rankingu ani łatwiejszych rywali. Złote odznaki profilu pochodzą z zapisanych danych meczowych każdego gracza. Pieczęć elity i odznaki specjalne pojawiają się tylko, gdy zapisany poziom to już Premium.",
      ],
    },
    premium: {
      name: "A.C.E. PREMIUM",
      note: "Premium",
      title: "List z podziękowaniem i skład pięciu graczy",
      points: [
        "Taki sam dostęp jak w planie Darmowym. Kasa nie działa, więc ta cena nie jest pobierana.",
        "Otwiera na tej stronie list z podziękowaniem: co obejmuje, czego nie obejmuje, oraz adres support@ace-platform.gg.",
        "Następnie otwiera Składy: kapitan zalogowany przez Steam może zapisać klan pięciu graczy.",
        "Bez nagrody, broni, żywej kolejki i serwera gry. Zapisany klan nie jest miejscem w tabeli 100 drużyn.",
      ],
    },
  },
  card: {
    elite: "ELITA",
    stayFree: "Zostań przy darmowym",
    freeNote: "Dostępny teraz · bez płatności",
    choose: "Wybierz {plan}",
    chooseAria: "Wybierz {plan} za {price} miesięcznie",
  },
  billing: {
    kicker: "HARMONOGRAM ROZLICZEŃ",
    title: "Jak będą działać rozliczenia, gdy powstaną",
    body: "Plus kosztuje dokładnie {plus}/mies. Premium kosztuje dokładnie {premium}/mies. Płatności online pojawią się wkrótce. Wybór Plus lub Premium pokazuje podgląd potwierdzenia; karta nie jest obciążana, a e-mail nie jest wysyłany.",
    display: {
      label: "01 · WYŚWIETLANIE",
      body: "Darmowy {free}. Plus {plus}/mies. Premium {premium}/mies. Płatne poziomy nigdy nie kupują oceny ani łatwiejszych przeciwników.",
    },
    rolling: {
      label: "02 · CYKL ODNAWIALNY",
      body: "Gdy rozliczenia powstaną, opłaty będą odnawiane w miesięcznym cyklu. Częściowo wykorzystany miesiąc nie podlega zwrotowi. Anulowanie zatrzymuje następny cykl i nie kasuje bieżącego, już opłaconego okresu.",
    },
    today: {
      label: "03 · DZIŚ",
    },
  },
  compare: {
    kicker: "Co A.C.E. może dziś obiecać",
    title: "Porównanie członkostwa",
    note: "Każdy wiersz odzwierciedla obecny stan strony. Płatności pojawią się wkrótce, a płatny plan nigdy nie otwiera kolejki ani nie daje przewagi.",
    caption: "Darmowy, Plus i Premium w porównaniu według tego, co strona robi dziś",
    includedToday: "Dostępne dziś",
    columns: {
      free: "Darmowy",
      plus: "Plus",
      premium: "Premium",
    },
    rows: {
      publicSite: {
        feature: "Strona publiczna",
        detail: "Strona główna, gra, turnieje, ranking, drużyny, zasady i regulamin.",
      },
      steamSignIn: {
        feature: "Logowanie przez Steam",
        detail: "Oficjalny Steam OpenID. A.C.E. nigdy nie prosi o hasło Steam.",
      },
      startingRating: {
        feature: "Ocena początkowa",
        detail: "Liczba zapisana na nowym koncie przed jakimkolwiek zarejestrowanym meczem.",
      },
      recordedMatches: {
        feature: "Zarejestrowane mecze",
        detail: "Wygrane i przegrane zapisane z zakończonego meczu A.C.E.",
      },
      rankedQueue: {
        feature: "Kolejka rankingowa",
        detail: "ZNAJDŹ MECZ pozostaje zamknięte, dopóki nie powstanie prawdziwa kolejka.",
      },
      cs2Servers: {
        feature: "Serwery CS2",
        detail: "Ta strona nie wysyła adresu serwera ani linku do połączenia.",
      },
      antiCheatClient: {
        feature: "Klient antycheatu",
        detail: "Z tej strony nic nie jest pobierane.",
      },
      charge: {
        feature: "Opłata",
        detail: "Wybranie Plus lub Premium nie pobiera opłaty z karty.",
      },
      ratingForSale: {
        feature: "Ocena na sprzedaż",
        detail: "Płatna etykieta nigdy nie kupuje oceny ani łatwiejszych przeciwników.",
      },
      prizeOrWeapon: {
        feature: "Nagroda lub broń",
        detail: "Nie jest dostarczana żadna skórka, nóż ani pula nagród.",
      },
      goldEliteSeal: {
        feature: "Pieczęć elity i odznaki specjalne",
        detail:
          "Tylko Premium, odczytywane z poziomu zapisanego na serwerze. Kosmetyczne. Płatność nie ustawia tego poziomu.",
      },
    },
    cells: {
      open: "Otwarte",
      yes: "Tak",
      noneYet: "Jeszcze brak",
      closed: "Zamknięte",
      notConnected: "Wkrótce",
      notShipped: "Niedostarczony",
      noCharge: "Bez opłaty",
      notForSale: "Nie na sprzedaż",
      none: "Brak",
      no: "Nie",
      storedTierOnly: "Tylko zapisany poziom",
    },
  },
  receipt: {
    plus: {
      metaTitle: "Potwierdzenie Plus",
      metaDescription:
        "List A.C.E. Plus wyświetlany na tej stronie. Kasa nie działa, więc nic nie jest pobierane i nie jest wysyłany żaden e-mail.",
      planName: "A.C.E. Plus",
      nextLabel: "Kontynuuj w A.C.E.",
      nextBody:
        "Strony publiczne pozostają otwarte. Ten wybór nie otwiera kolejki i nie zmienia zapisanego poziomu.",
    },
    premium: {
      metaTitle: "Potwierdzenie Premium",
      metaDescription:
        "List A.C.E. Premium wyświetlany na tej stronie. Kasa nie działa, więc nic nie jest pobierane i nie jest wysyłany żaden e-mail.",
      planName: "A.C.E. Premium",
      nextLabel: "Przejdź do Składów",
      nextBody:
        "Przejdź do Składów. Strona zapyta, czy jesteście drużyną pięciu graczy. Miejsce 1 to zalogowane konto Steam. Miejsca od 2 do 5 to pozostali gracze. Zapisanie klanu nadal nie pobiera tej ceny.",
    },
  },
  letter: {
    kicker: "{plan} · {price} miesięcznie",
    title: "Dziękujemy za Twój wybór",
    flag: "Ten list jest wyświetlany na stronie. Nie wysłano żadnego e-maila. Nie obciążono żadnej karty. Kasa nie działa, a zapisany poziom członkostwa nie został zmieniony.",
    greeting: "Drogi graczu,",
    intro:
      "Dziękujemy za wybranie planu {plan}. Ta strona jest potwierdzeniem. Zapisuje wyświetlaną cenę, co ten wybór obejmuje dziś, czego nie obejmuje, oraz adres pomocy opublikowany na tej stronie.",
    selected: {
      title: "Co zostało wybrane",
      items: [
        "Nazwa planu: {plan}.",
        "Wyświetlana cena: {price} miesięcznie. Ta kwota to etykieta, a nie opłata.",
        "Płatność: brak. Wybranie tego planu nie pobiera opłaty z karty.",
        "E-mail: brak. A.C.E. nie wysyła tego listu do skrzynki.",
        "Zapisany poziom: bez zmian. Odznaki specjalne i pieczęć elity pojawiają się tylko, gdy konto ma już zapisany Premium.",
        "Ocena: nie na sprzedaż. Nowe konto nadal zaczyna od 1000.",
      ],
    },
    today: {
      title: "Z czego możesz korzystać dziś",
      items: [
        "Strona publiczna: strona główna, gra, turnieje, ranking, drużyny, zasady i regulamin.",
        "Logowanie przez oficjalny Steam OpenID. A.C.E. nigdy nie prosi o hasło Steam.",
        "Te same strony publiczne co w planie Darmowym. Ta cena nie otwiera osobnej kolejki.",
      ],
    },
    excluded: {
      title: "Czego ten wybór nie obejmuje",
      items: [
        "Żywej kolejki rankingowej. ZNAJDŹ MECZ pozostaje zamknięte.",
        "Serwera Counter-Strike 2, adresu serwera ani linku do połączenia.",
        "Pobieranie anti-cheatu. A.C.E Shield jest w przygotowaniu.",
        "Nagrody, skórki, noża ani puli nagród.",
        "Miejsca w tabeli 100 drużyn. Ta tabela nadal pokazuje 0 zarejestrowanych, dopóki nie otworzy się sezon.",
        "Łatwiejszych przeciwników, kupionej oceny ani innej strony publicznej niż w planie Darmowym.",
      ],
    },
    trouble: {
      title: "Jeśli coś nie działa",
      items: [
        "Spodziewasz się opłaty lub płatnego poziomu. Nic takiego nie zostało zastosowane. Konto pozostaje bez zmian.",
        "Spodziewasz się tego listu w skrzynce. Istnieje on tylko na tej stronie.",
        "Steam się nie połączył. Użyj przycisku Połącz profil i najpierw zaznacz pole akceptacji warunków. Nigdy nie wpisuj hasła Steam w A.C.E.",
        "Potrzebujesz pomocy. Skorzystaj z adresu pomocy poniżej lub otwórz strony pomocy na tej stronie.",
      ],
    },
    support: {
      title: "Pomoc",
      addressBefore: "Adres pomocy podany na tej stronie to ",
      addressAfter: ".",
      helpBefore: "Pomoc na stronie: ",
      supportLink: "Pomoc",
      helpAnd: " i ",
      contactLink: "Kontakt",
      rulesBefore: ". Zasady znajdziesz na stronach ",
      rulesLink: "Zasady",
      rulesAnd: " i ",
      termsLink: "Warunki",
      helpAfter:
        ". Zgłoszenie na stronie Pomoc nie otwiera sprawy, a tekst wpisany na stronie Kontakt nie jest dostarczany.",
    },
    next: {
      title: "Następny krok",
    },
  },
  telemetry: {
    kicker: "TELEMETRIA PLUS / PREMIUM",
    copy: "TELEMETRIA PANELU ZABLOKOWANA — Przejdź na plan A.C.E. Plus lub Premium, aby odblokować dynamiczne krzywe statystyk w czasie rzeczywistym i wskaźniki specjalizacji w broniach.",
    cta: "Otwórz tabele cen",
  },
};
