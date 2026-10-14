import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  meta: {
    title: "A.C.E. — platforma rywalizacji CS2",
    description:
      "A.C.E. to planowana platforma rywalizacji w Counter-Strike 2 obejmująca tożsamość graczy, kalibrację, drużyny i turnieje. Ta publiczna strona to podgląd. Dobieranie rankingowe, antycheat, płatności i nagrody nie są aktywne.",
  },
  opening: {
    dialogLabel: "Otwarcie A.C.E.",
    line: "A.C.E: Autonomiczny Anticheat, kalibracja konkurencyjna, elitarni gracze",
    enter: "Wejdź na stronę",
  },
  hero: {
    logoAlt: "A.C.E. Autonomiczny Anticheat, kalibracja konkurencyjna, elitarni gracze",
    arenaAlt:
      "Płyta areny A.C.E. Oryginalny obraz sceny, a nie grafika Valve. Ekran jest podpisany jako telewizja meczów. Transmisja na żywo jest wyłączona.",
  },
  broadcast: {
    kicker: "OGLĄDANIE TURNIEJÓW",
    title: "Stanowisko transmisji",
    lede: "Na tym stanowisku leży pula map turniejowych: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis i Train. To oryginalne plansze. Żaden turniej nie jest nadawany, a ta strona nie odtwarza meczu Valve.",
    offAir: "POZA ANTENĄ · {map}",
  },
  jumpNav: {
    label: "Kategorie strony głównej",
    play: "Graj",
    prizes: "Nagrody",
    teams: "Drużyny",
    leaderboard: "Tabela",
    ranks: "Rangi",
    systems: "Systemy",
  },
  charter: {
    kicker: "GŁÓWNA PRZESTRZEŃ POCZEKALNI",
    title: "POCZEKALNIA DOBIERANIA MECZÓW I CENTRUM DYSPOZYTORSKIE A.C.E.",
    badge: "BRAK SERWERA NA ŻYWO",
    lede: "Ta poczekalnia nie przydziela serwera, nie uruchamia klienta antycheatu i nie wypłaca nagród.",
    modules: [
      {
        kicker: "ZNALEZIONO MECZ · 5v5",
        copy: "Ramka 5v5 na tej stronie to zamknięta kolejka. Nie przydziela serwera.",
        chips: ["BRAK SERWERA 128 TICK", "KOLEJKA ZAMKNIĘTA"],
      },
      {
        kicker: "NIERUCHOME RANGI 3D",
        copy: "Dziesięć szczebli od Recruit do A.C.E. Legend. Zapisana ocena pojawia się po zalogowaniu przez Steam. Ta strona nie zalicza żadnego meczu.",
        chips: ["ZASADA OCENY W DOKUMENTACJI", "STÓŁ OBROTOWY NA TEJ STRONIE"],
      },
      {
        kicker: "NAGRODY-SKÓRKI",
        copy: "Karty skórek to przykłady. Żadna broń nie jest dostarczana i żadna nagroda nie jest finansowana.",
        chips: ["ŻADEN PRZEDMIOT NIE DOSTARCZONY", "BRAK SPRAWDZANIA ZRZUTÓW"],
      },
    ],
  },
  identity: {
    profilePlaceholder: "[Profil_gracza]",
    notAvailable: "b.d.",
    elite: "ELITA",
  },
  membership: {
    compareLink: "Zobacz pełną tabelę porównania",
  },
  loot: {
    exampleCard: "Przykładowa karta · to nie przedmiot Valve",
    wear: {
      factoryNew: "Prosto z fabryki",
      minimalWear: "Lekko zużyty",
    },
  },
  lootLadder: {
    banner: "SKARBIEC SYSTEMU — ZRZUT UKŁADU",
    title: "DRABINA ŁUPÓW A.C.E.",
    itemWithWear: "{item} ({wear})",
    clockLabel: "ZEGAR UKŁADU",
    clockFormat: "{h} godz. {m} min {s} s",
    note: "Ten zegar to układ. Premium nie bierze udziału w loterii zrzutów, a Steam nie weryfikuje ani nie dostarcza przedmiotu z tej strony.",
  },
  ribbon: {
    closeOverlay: "Zamknij nakładkę",
    close: "Zamknij",
    disclosure:
      "Makieta piaskownicy: brak ekwipunku, brak odbiorów, brak działającej tablicy misji i brak kasy. Te nakładki to wyłącznie próbki układu.",
    rewards: {
      kicker: "Nagrody za logowanie · próbka układu",
      title: "Kalendarz meldunków Premium",
      day: "Dzień {n}",
      featuredReward: "Nagroda dnia {n}: zrzut skrzynki z kluczem",
      previewSlot: "Miejsce podglądu",
    },
    missions: {
      kicker: "Codzienne misje taktyczne · próbka układu",
      title: "Aktywne codzienne wyzwania",
      names: {
        headshot: "Specjalista od headshotów",
        utilityEntry: "Wejście z granatami",
        clutch: "Protokół clutcha",
      },
    },
    shop: {
      kicker: "Sklep A.C.E. · makieta piaskownicy",
      title: "Kasa ekwipunku broni",
      mockBadge: "MAKIETA PIASKOWNICY",
      fullPreview: "Otwórz pełny podgląd rynku",
      openAria: "Otwórz sklep A.C.E.",
    },
  },
  serverHub: {
    badge: "BRAK SERWERÓW GRY NA ŻYWO",
    nodes: {
      fra: "Węzeł brzegowy Frankfurt",
      sto: "Węzeł główny Sztokholm",
      tlv: "Przekaźnik Tel Awiw",
    },
    tileAria: "{name}. Kafelek układu. Żaden serwer nie jest połączony.",
    tileSample: "Próbka układu {sample}. Żaden serwer nie jest połączony.",
    note: "Te nazwy i próbki opóźnień to układ. Ta strona nie ma serwera gry 128 tick ani węzła regionalnego.",
  },
  telemetry: {
    badge: "TO NIE DZIAŁAJĄCY KLIENT",
    lines: [
      "JĄDRO AC: NIEPOŁĄCZONE",
      "MATRYCA BLOKAD SPRZĘTOWYCH: ŻADEN IDENTYFIKATOR NIE JEST ZBIERANY",
      "ŁĄCZE TARCZY A.C.E.: ŻADEN KLIENT NIE JEST ZAINSTALOWANY",
    ],
    note: "Ta strona nie uruchamia klienta jądra, nie skanuje pamięci i nie nakłada blokad sprzętowych.",
  },
  comingSoon: {
    badge: "NIEDOSTĘPNE",
    body: "Klient desktopowy A.C.E. nie jest oferowany do pobrania. Sezon 1 na tej stronie nie instaluje oprogramowania ani nie otwiera meldunku.",
  },
  operative: {
    kicker: "Kinowy widok taktyczny · oryginalne środowisko CSS · to nie grafika Valve",
    title: "Wejdź głębiej w CS2: najlepsza platforma rywalizacji",
    lede: "Uczciwsze mecze, lepsi koledzy z drużyny. Rangi, które mają znaczenie, nagrody, które się liczą.",
    note: "Tekst kampanii. Kolejki rankingowe, serwery na żywo i nagrody nie są aktywne.",
    hudLeft: "CT — PUNKT A",
    hudRight: "T — NACISK NA ŚRODEK",
    hudCenter: "ŚRODOWISKO SKŁADU · UKŁAD",
    plannedReason: "Gry rankingowe pozostają zamknięte, dopóki prawdziwa integracja antycheatu nie zostanie wdrożona i zweryfikowana.",
  },
  howStatus: {
    label: "PODSYSTEM REJESTRACJI A.C.E. — SILNIK KALIBRACJI GOTOWY",
    note: "Widżet statusu układu. Kolejki rankingowe, antycheat i kalibracja na żywo nie są aktywne.",
  },
  shell: {
    primaryNav: "Nawigacja główna",
    mobileNav: "Nawigacja mobilna",
    elite: "ELITA",
    notificationsTitle: "Brak kanału powiadomień na żywo",
    notificationsAria: "Powiadomienia. Zero nieprzeczytanych.",
    connectProfileTitle: "Połącz profil",
    openProfileAria: "Otwórz profil na pokładzie dowodzenia",
    connectProfileAria: "Połącz profil przez Steam OpenID",
    signOutAria: "Wyloguj się z A.C.E.",
  },
  notFound: {
    kicker: "WYJĄTEK SIATKI",
    title: "BŁĄD 404 — UTRACONO TELEMETRIĘ RADARU",
    body: "Żądana współrzędna nie istnieje w naszej aktywnej siatce serwerów.",
    homeAria: "Wróć do poczekalni na stronie głównej A.C.E.",
    cta: "WRÓĆ DO POCZEKALNI",
  },
  error: {
    kicker: "Błąd",
    title: "Coś poszło nie tak",
    body: "Nie udało się wyświetlić tej publicznej strony. Możesz spróbować ponownie. Ta strona podglądu nie żądała żadnych danych konta.",
    retryAria: "Odśwież tę stronę",
    retry: "Spróbuj ponownie",
  },
};
