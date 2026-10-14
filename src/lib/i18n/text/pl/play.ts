import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  meta: {
    title: "Graj",
    description: "Rankingowe dobieranie 5v5 pozostaje domyślnie zamknięte, dopóki antycheat nie będzie prawdziwy.",
  },
  boards: {
    label: "Tablice kolejek",
    title: "Trzy tablice 5v5",
    note: "Wybór pozostaje na tej stronie. Wyszukiwanie rankingowe jest zamknięte, a wybranie tablicy nie szuka przeciwników.",
    items: {
      open: {
        name: "Tablica otwarta",
        rules: [
          "Grupa dowolnej wielkości, do pięciu osób",
          "Bez przedziału oceny",
          "Tożsamość sprawdza Steam OpenID",
          "Przewidziana do otwartego treningu, gdy powstanie kolejka",
        ],
      },
      calibration: {
        name: "Tablica kalibracji",
        rules: [
          "Solo, w duecie lub w trójce",
          "Planowany przedział {points} punktów oceny",
          "Profil Steam musi być już zapisany",
          "Używa zasady oceny A.C.E., bez wyszukiwania na żywo",
        ],
      },
      elite: {
        name: "Tablica elity",
        rules: [
          "Solo lub w duecie",
          "Planowany przedział {points} punktów oceny",
          "Zapisane członkostwo musi być Plus lub Premium",
          "Surowsze pisemne zasady wstępu. Nie jest dołączona żadna pula nagród",
        ],
      },
    },
  },
  veto: {
    kicker: "WETO MAP",
    title: "Wybierz mapę",
    lede: "Odrzucaj mapy, aż zostanie jedna. Ta poczekalnia nie uruchamia Counter-Strike 2 i nie otwiera serwera.",
    mapSelected: "Wybrana mapa: {map}",
    yourBan: "Twój ban",
    opponentBan: "Ban przeciwnika",
    selected: "Wybrana",
    declined: "Odrzucona",
    decline: "Odrzuć",
    reset: "Resetuj weto",
    declinedToast: "Mapa {map} została odrzucona. Ta strona nie otwiera serwera.",
    lockKicker: "UKŁAD 5v5",
    lockTitle: "Pozostała mapa: {map}",
    lockBody:
      "Skład poniżej to układ. Ta strona nie wczytuje meczu rywalizacyjnego, nie umieszcza graczy w grze i nie wysyła adresu serwera.",
    close: "Zamknij",
  },
  arena: {
    ariaLabel: "Podgląd układu znalezionego meczu",
    captain: "Kapitan",
    ping: "Ping {ping}",
    mapPlates: "Plansze map",
    selectMap: "Wybierz planszę mapy {map} w układzie",
    settings: {
      region: "Region",
      mode: "Tryb",
      antiCheat: "Antycheat",
      simulator: "Symulator",
    },
    chat: {
      title: "CZAT DRUŻYNY",
      kicker: "TERMINAL POKAZOWY · BEZ POŁĄCZENIA Z SIECIĄ",
      captainName: "{name} (kapitan)",
      layoutName: "{name} (układ)",
      samples: ["gl hf", "dawajmy", "dust 2 nam pasuje", "gotowy"],
      inputLabel: "Wiadomość czatu w układzie",
      placeholder: "Wiadomość do drużyny… (tylko układ)",
      send: "Dodaj linię czatu w układzie",
    },
    tiles: {
      map: "Mapa",
      server: "Serwer",
      serverValue: "Europa Zachodnia · {ping} (próbka)",
      mode: "Tryb",
    },
    identity: {
      title: "WERYFIKACJA TOŻSAMOŚCI",
      kicker: "KONTROLE UKŁADU · TO NIE PRAWDZIWI DOSTAWCY",
      rows: [
        "Kod poczty potwierdzony (układ)",
        "Kod SMS na telefon potwierdzony (układ)",
        "Skan twarzy na żywo potwierdzony (układ)",
      ],
    },
    security: {
      title: "BEZPIECZEŃSTWO MECZU",
      kicker: "SYMULATOR · SI NIEWDROŻONA",
      rows: [
        "Ochrona antycheat — puls układu",
        "Kontrola integralności serwera — makieta",
        "Szyfrowanie danych meczu — koncepcja",
      ],
    },
    findMatchReason: "ZNAJDŹ MECZ nie może otworzyć działającego serwera CS2. Gry rankingowe są domyślnie zamknięte. Populacja: 0.",
  },
  matchFound: {
    ariaSignedIn: "{title}. {name} nie jest umieszczony w tym składzie układu.",
    banner: "UKŁAD ARENY · BRAK MECZU NA ŻYWO",
    mapPlate: "PLANSZA MAPY · DUST II · BRAK SERWERA 128 TICK",
    rosterNote: "Znaki wywoławcze układu. To nie jest połączony skład.",
    teamA: "DRUŻYNA A · SOJUSZ TAKTYCZNY",
    teamB: "DRUŻYNA B · LEGION CIENIA",
    clockLabel: "ZEGAR UKŁADU",
    clockNote: "Ten zegar się zapętla. Kolejka jest zamknięta.",
    chatKicker: "CZAT DRUŻYNY",
    chatLines: [
      "Trzymamy układ, aż zegar się zresetuje.",
      "Dust II to na tej stronie tylko plansza mapy.",
      "Dla tego składu nie połączono żadnego serwera.",
    ],
    chatField: "Wiadomości nie są wysyłane.",
    identityKicker: "SIATKA TOŻSAMOŚCI",
    identityRows: [
      "Bilet meczowy nie jest wysyłany e-mailem.",
      "Żadna kontrola jądra nie działa.",
      "Nie połączono żadnego strumienia telemetrii na żywo.",
    ],
    findMatch: "ZNAJDŹ MECZ RYWALIZACYJNY",
    closedNotice: "Ten przycisk nie otwiera serwera. Kolejka rankingowa jest zamknięta. Populacja: 0.",
  },
};
