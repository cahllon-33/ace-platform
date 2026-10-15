import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  premium: {
    "tag": "PREMIUM",
    "sample": "PRZYKŁAD PREMIUM",
    "note": "Miejsca oznaczone jako Przykład Premium pokazują ilustrowaną grafikę rangi Premium wyłącznie poglądowo. To przykładowi gracze, nie subskrybenci. Grafika Premium jest wyłącznie kosmetyczna i nigdy nie zmienia rankingu ani doboru meczów.",
    "artAlt": "Ilustrowana grafika rangi Premium {rank}"
  },
  room: {
    "showcaseTag": "POKAZ · Przykładowi gracze, to nie jest mecz na żywo. Kolejka jest zamknięta.",
    "showcaseShort": "POKAZ",
    "queueClosed": "KOLEJKA ZAMKNIĘTA",
    "floorRp": "Próg rangi {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "Awatar {name}",
    "sampleChat": "Przykładowe wiadomości. Niewysłane, nie na żywo.",
    "sampleLine": "PRZYKŁAD",
    "operatorA": "Oryginalna grafika operatora A.C.E dla drużyny A: operator taktyczny w hełmie, grafitowy sprzęt ze złotymi akcentami",
    "operatorB": "Oryginalna grafika operatora A.C.E dla drużyny B: rebeliant w kapturze, grafitowy sprzęt ze złotymi akcentami",
    "artNote": "Oryginalna grafika postaci A.C.E. To nie są modele z gry."
  },
  meta: {
    title: "Graj",
    description: "Matchmaking rankingowy 5v5 ruszy, gdy anti-cheat A.C.E Shield zacznie działać.",
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
          "Używa zasady rankingu A.C.E. · wyszukiwanie wkrótce",
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
    lockKicker: "POKÓJ MECZOWY 5v5",
    lockTitle: "Pozostała mapa: {map}",
    lockBody:
      "Twój pokój meczowy. Mecze rywalizacyjne zaczną się tutaj po starcie bety rywalizacji.",
    close: "Zamknij",
  },
  arena: {
    ariaLabel: "Podgląd pokoju meczowego",
    captain: "Kapitan",
    ping: "Ping {ping}",
    mapPlates: "Plansze map",
    selectMap: "Wybierz {map}",
    settings: {
      region: "Region",
      mode: "Tryb",
      antiCheat: "Antycheat",
      simulator: "Podgląd",
    },
    chat: {
      title: "CZAT DRUŻYNY",
      kicker: "CZAT DRUŻYNY · WKRÓTCE",
      captainName: "{name} (kapitan)",
      layoutName: "{name}",
      samples: ["gl hf", "dawajmy", "dust 2 nam pasuje", "gotowy"],
      inputLabel: "Wiadomość na czacie drużyny",
      placeholder: "Wiadomość do drużyny…",
      send: "Wyślij",
    },
    tiles: {
      map: "Mapa",
      server: "Serwer",
      serverValue: "EU Zachód · wkrótce",
      mode: "Tryb",
    },
    identity: {
      title: "WERYFIKACJA TOŻSAMOŚCI",
      kicker: "WERYFIKACJA TOŻSAMOŚCI · WKRÓTCE",
      rows: [
        "Weryfikacja e-mail · wkrótce",
        "Weryfikacja telefonu · wkrótce",
        "Weryfikacja twarzy · wkrótce",
      ],
    },
    security: {
      title: "BEZPIECZEŃSTWO MECZU",
      kicker: "A.C.E SHIELD · W PRZYGOTOWANIU",
      rows: [
        "Ochrona anti-cheat · w przygotowaniu",
        "Kontrola integralności serwera · w przygotowaniu",
        "Szyfrowanie danych meczu · w przygotowaniu",
      ],
    },
    findMatchReason: "Matchmaking ruszy wraz z betą rywalizacji. Kolejki rankingowe jeszcze nie działają.",
  },
};
