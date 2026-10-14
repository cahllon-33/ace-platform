import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  translationNotice:
    "Ta strona jest tłumaczeniem udostępnionym dla wygody. W razie rozbieżności między tłumaczeniem a tekstem angielskim rozstrzygający jest tekst angielski.",
  terms: {
    meta: {
      title: "Warunki korzystania z usługi",
      description:
        "Warunki korzystania z usługi strony internetowej A.C.E., serwisu rozgrywek Counter-Strike 2. Rozgrywki rankingowe, płatności i anticheat nie działają.",
    },
    kicker: "ACE-PRAWO / WARUNKI KORZYSTANIA Z USŁUGI",
    title: "Warunki korzystania z usługi",
    lede: "Niniejsze Warunki regulują korzystanie z publicznej strony internetowej A.C.E. oraz powiązanych interfejsów API kont. Długość meczu, pula map, blokada składu i protesty są szczegółowo opisane w Regulaminie rozgrywek pod adresem /rules, który stanowi część niniejszych Warunków.",
    sections: {
      operator: {
        title: "1. Operator i niezależność",
        paragraphs: [
          "Usługę prowadzi A.C.E. Competitions Ltd. (tymczasowy identyfikator w rejestrze spółek: w toku nadawania). Korzystając ze strony, akceptujesz niniejsze Warunki, Politykę prywatności, Politykę plików cookie oraz Regulamin rozgrywek.",
        ],
      },
      eligibility: {
        title: "2. Uprawnienia i konta",
        paragraphs: [
          "Musisz osiągnąć wiek wymagany do korzystania ze Steam w swoim kraju. Konta są tworzone wyłącznie przez oficjalny Steam OpenID. Nie wolno udostępniać konta w celu obejścia ograniczenia. A.C.E. nigdy nie prosi o hasło Steam.",
        ],
      },
      notActive: {
        title: "3. Czym ta strona nie jest",
        paragraphs: [
          "Dobieranie rankingowe, serwery gry CS2 na żywo, działający anticheat oparty na SI, rozliczenia i nagrody nie są aktywne. Zegary poczekalni, drabiny łupów i panele integralności to podglądy układu, chyba że dana strona stanowi inaczej.",
        ],
      },
      subscriptions: {
        title: "4. Proponowane subskrypcje",
        paragraphs: [
          "Plus ($4.00/mies.) i Premium ($7.00/mies.) to ceny wyświetlane. Na tej stronie nie ma kasy. Przyciski planów otwierają na tej stronie potwierdzenie, a nie obciążenie, i nie wysyłają wiadomości e-mail. Gdy rozliczenia zaczną istnieć, zastosowanie będzie miała zasada anulowania opisana pod adresem /pricing: subskrypcja miesięczna odnawiana automatycznie, anulowanie w ustawieniach panelu, brak zwrotu za niepełne miesiące.",
        ],
      },
      antiCheat: {
        title: "5. Klient anticheatu (niedostarczony)",
        paragraphs: [
          "Na tej stronie nie ma klienta anticheatu do pobrania. Regulamin rozgrywek pod adresem /rules nie zbiera identyfikatora sprzętu i nie blokuje urządzeń. Udostępnianie konta w celu obejścia ograniczenia jest zabronione.",
        ],
      },
      liability: {
        title: "6. Ograniczenie odpowiedzialności",
        paragraphs: [
          "W zakresie dozwolonym przez prawo A.C.E. nie ponosi odpowiedzialności za utraconą rangę, utracone przedmioty kosmetyczne, które nigdy nie były prawdziwymi przedmiotami, ani za awarie zewnętrznych usług Steam / CS2. Bezwzględnie obowiązujące prawa konsumenta w Twoim kraju nie są wyłączone tam, gdzie nie można się ich zrzec.",
        ],
      },
      copyright: {
        title: "7. Prawa autorskie do oryginalnych materiałów strony",
        paragraphs: [
          "Oryginalne teksty, układ stron, emblematy i grafika stworzone dla tej strony należą do A.C.E. Competitions Ltd. Bez pisemnej zgody nie wolno kopiować, ponownie publikować ani automatycznie pobierać tych oryginalnych materiałów na potrzeby innego produktu. Tam, gdzie pozwala na to prawo, A.C.E. może dochodzić tego prawa, w tym w drodze powództwa. Niniejsza informacja nie wszczyna postępowania, nie określa wysokości odszkodowania i nie gwarantuje rozstrzygnięcia sądu.",
          "Counter-Strike 2, Steam oraz nazwy map Dust II, Mirage, Inferno, Nuke, Ancient, Anubis i Train należą do Valve. A.C.E. nie rości sobie do nich praw. Otwarcie tej strony nie znosi żadnego prawa i nie oznacza zawarcia umowy.",
        ],
      },
      contact: {
        title: "8. Kontakt",
        paragraphs: [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — Tymczasowy identyfikator w rejestrze spółek: w toku nadawania.",
        ],
      },
    },
  },
  privacy: {
    meta: {
      title: "Polityka prywatności",
      description:
        "Polityka prywatności A.C.E.: wyłącznie niezbędne dane, tylko Steam OpenID, żadnych haseł Steam, żadnej sprzedaży danych o zachowaniu.",
    },
    kicker: "ACE-PRYWATNOŚĆ / RODO / ŚCISŁA NIEZBĘDNOŚĆ",
    title: "Polityka prywatności",
    lede: "Niniejsza Polityka prywatności wyjaśnia, jakie dane A.C.E. Competitions Ltd. przechowuje, gdy korzystasz z tej strony. Tłumaczenia są udostępniane dla wygody; tekstem wzorcowym jest wersja angielska. Nie jest to twierdzenie, że wszystkie przyszłe elementy produktu już istnieją.",
    strictNecessity: {
      title: "Zasada ścisłej niezbędności",
      intro:
        "Zbieramy minimum danych konta potrzebnych do identyfikacji gracza rywalizującego w rozgrywkach i powstrzymania oczywistych nadużyć w naszej własnej usłudze. Nie gromadzimy zbędnych dzienników, nie pobieramy prywatnego ekwipunku Steam i nie sprzedajemy danych o zachowaniu podmiotom zewnętrznym.",
      storedIntro: "Obecnie po udanym logowaniu przez Steam OpenID przechowywane są:",
      stored: [
        {
          label: "Zweryfikowany 64-bitowy SteamID",
          body: "zwracany przez oficjalne potwierdzenie OpenID Steam i sprawdzany na serwerze przed utworzeniem lub aktualizacją konta A.C.E.",
        },
        {
          label: "Publiczna nazwa wyświetlana Steam",
          body: "gdy skonfigurowano klucz Steam Web API. Jest to nazwa profilu, a nie skrzynka e-mail.",
        },
        {
          label: "Zapisy konta A.C.E.",
          body: "takie jak poziom rangi, punkty oceny, wygrane/przegrane, przynależność do drużyny i skróty (hashe) tokenów sesji.",
        },
      ],
      notCollected: {
        before: "Adresy e-mail i zaszyfrowane profile sprzętu",
        strong: "nie są dziś zbierane na tej stronie",
        after:
          ". Karty skanu twarzy i HWID w poczekalni to wyłącznie układ. Jeśli przyszły klient anticheatu lub kanał pomocy będzie wymagał adresu e-mail albo odcisku sprzętu, zbieranie tych danych pozostanie ograniczone do zapobiegania nadużyciom, zostanie najpierw opisane tutaj i dane te nie będą sprzedawane jako dane reklamowe.",
      },
    },
    neverCollect: {
      title: "Czego nigdy nie zbieramy",
      items: [
        "Haseł Steam. Logowanie odbywa się wyłącznie przez Steam OpenID / oficjalny proces Steam.",
        "Numerów kart płatniczych. Kasa nie została wdrożona.",
        "Telemetrii jądra systemu. Z tą stroną nie jest dostarczany żaden klient anticheatu.",
      ],
    },
    steamBoundary: {
      title: "Granica osadzonych usług zewnętrznych i Steam OpenID",
      callback: {
        before: "Logowanie przez Steam opuszcza A.C.E., uwierzytelnia na Steam i wraca pod adres",
        after:
          ". Serwer weryfikuje potwierdzenie OpenID (w tym deklarowaną tożsamość i podpisane parametry Steam) przed zapisaniem sesji. Danymi przechowywanymi przez Steam rządzi polityka prywatności Steam. A.C.E. utrwala wyłącznie zweryfikowany SteamID i publiczne pola profilu potrzebne do obsługi konta.",
      },
      footerLinks:
        "Ikony sieci zewnętrznych w stopce to odnośniki katalogowe do publicznych stron internetowych. Nie są to oficjalne konta A.C.E. i nie osadzają widżetów śledzących.",
    },
    rights: {
      title: "Prawa na wzór RODO",
      before:
        "Jeśli przebywasz w regionie, w którym przysługują prawa dotyczące danych osobowych, możesz zażądać dostępu do danych swojego konta A.C.E., ich sprostowania lub usunięcia, pisząc na adres",
      after:
        ". Blokady sprzętowe rankingowego anticheatu nie działają; usunięcie konta na stronie nie jest odwołaniem od blokady VAC w CS2.",
    },
    cookies: {
      title: "Pliki cookie",
      before: "Zob.",
      link: "Politykę plików cookie",
      after:
        "oraz panel zgody. Niezbędne pliki cookie sesji są wymagane po zalogowaniu. Kategorie opcjonalne pozostają nieużywane, dopóki faktycznie nie zostanie dodane narzędzie śledzące.",
    },
    controller: {
      title: "Administrator danych",
      body: "A.C.E. Competitions Ltd. Tymczasowy identyfikator w rejestrze spółek: w toku nadawania. Kontakt: support@ace-platform.gg.",
    },
  },
  cookiePolicy: {
    meta: {
      title: "Polityka plików cookie",
      description:
        "Audyt prywatności plików cookie i telemetrii A.C.E. Wyłącznie niezbędne pliki cookie sesji, chyba że wyrazisz zgodę na zarezerwowane kategorie opcjonalne.",
    },
    kicker: "ACE-PRYWATNOŚĆ / COOKIE / AUDYT TELEMETRII",
    title: "Polityka plików cookie",
    lede: "Ta strona jest audytem prywatności telemetrii dla ace-platform.gg. Opisuje pliki cookie, których ta strona faktycznie używa, kategorie zarezerwowane na później oraz dane, które nie są zbierane.",
    audit: {
      title: "Audyt telemetrii w 100% (obecna wersja)",
      body: "A.C.E. nie uruchamia na tej publicznej stronie pikseli reklamowych, Google Analytics, Meta Pixel, pakietów SDK do tworzenia odcisków przeglądarki ani innych zewnętrznych narzędzi śledzących zachowanie. Opcjonalne kategorie „Narzędzia analityczne” i „Narzędzia marketingowe” w panelu zgody są jedynie kategoriami. Ich zaznaczenie nie ładuje dziś żadnego skryptu. Jeśli w przyszłości zostanie dodane narzędzie śledzące, najpierw odczyta zapisaną preferencję i pozostanie wyłączone, chyba że wyrazisz na nie zgodę.",
    },
    essential: {
      title: "Niezbędne pliki cookie [Wymagane / Zablokowane]",
      session: {
        label: "Plik cookie sesji",
        body: "— ustawiany wyłącznie po zweryfikowanym powrocie ze Steam OpenID. Ma flagę HttpOnly, nie jest dostępny dla JavaScriptu strony i służy do utrzymania zalogowania w A.C.E.",
      },
      necessity:
        "Te pliki cookie są ściśle niezbędne do obsługi uwierzytelnionego konta. Nie są identyfikatorami reklamowymi.",
    },
    analytics: {
      title: "Narzędzia analityczne [Opcjonalne]",
      before: "Kategoria zarezerwowana. Nie skonfigurowano żadnego dostawcy analityki produktu. Twój wybór jest zapisywany lokalnie w",
      after: "aby przyszły własny pomiar użytkowania mógł go uwzględnić.",
    },
    marketing: {
      title: "Narzędzia marketingowe [Opcjonalne]",
      body: "Kategoria zarezerwowana. A.C.E. nie sprzedaje, nie wynajmuje i nie pośredniczy w obrocie profilami zachowań. Na tej stronie nie ma menedżera tagów marketingowych.",
    },
    change: {
      title: "Jak zmienić swój wybór",
      body: "Użyj Ustawień plików cookie w stopce albo wyczyść dane strony w przeglądarce. Odrzucenie kategorii opcjonalnych nigdy nie blokuje logowania przez Steam.",
    },
  },
};
