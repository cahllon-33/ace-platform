import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  meta: {
    title: "Zarządzanie składem A.C.E.",
    description:
      "Przestrzeń Twojego składu 5v5. Zaproszenia wymagają zweryfikowanej sesji Steam; kontrole anti-cheat pojawią się wraz z A.C.E Shield.",
  },
  hero: {
    kicker: "DRUŻYNY",
    title: "Składy",
    lede: "Pięć wolnych miejsc w rzędzie. Klan jest zapisywany dopiero po zalogowaniu przez Steam i utworzeniu drużyny.",
  },
  gate: {
    kickerPremium: "Wpis klanu po wyborze planu",
    kickerDefault: "Zapis klanu",
    title: "Czy jesteście drużyną pięciu graczy?",
    intro:
      "Miejsce 1 to gracz zalogowany przez Steam. Miejsca od 2 do 5 muszą już mieć konta A.C.E. Zapisanie klanu nie pobiera $7, nie wysyła e-maila i nie umieszcza klanu w tabeli 100 drużyn.",
    yes: "Tak, pięciu graczy",
    no: "Nie, zostaw miejsca wolne",
    seatsOpen: "Pięć miejsc pozostaje wolnych. Nic nie zostało zapisane.",
    connectSteam:
      "Najpierw połącz Steam. Przycisk wraca na tę stronę. A.C.E. nigdy nie prosi o hasło Steam.",
    alreadyMember: "{name} należy już do klanu {team}. Ten formularz nie tworzy drugiego klanu.",
    thisAccount: "To konto",
    acceptTerms: "Zaakceptuj warunki przed zapisaniem klanu.",
    notStored: "Klan nie został zapisany.",
    clanName: "Nazwa klanu",
    captainSeat: "Miejsce 1, kapitan: {name}",
    signedInSteam: "Zalogowane konto Steam",
    seatLabel: "Miejsce {seat}: SteamID lub identyfikator konta A.C.E.",
    submit: "Zapisz klan pięciu graczy",
    saved:
      "Nazwa klanu została zapisana, a cztery zaproszenia oczekują. Ci gracze nie są w składzie, dopóki nie zaakceptują. To nie jest miejsce w tabeli 100 drużyn. Nic nie zostało pobrane.",
  },
  squadDesk: {
    kicker: "Punkt informacyjny składu",
    title: "Pytania o spisane zasady",
    intro:
      "Ten punkt odczytuje tylko fakty opublikowane na tej stronie. Nie wykrywa cheatów, nie otwiera meczu i nie zmienia konta.",
    questionLabel: "Pytanie",
    placeholder: "Zapytaj o pięć miejsc, plany lub wsparcie",
    ask: "Zapytaj",
    fallback:
      "Ten punkt odpowiada tylko na podstawie zasad zapisanych na tej stronie: plany, pięć miejsc, Steam OpenID i wsparcie.",
    facts: {
      email: "Żaden e-mail nie jest wysyłany. Potwierdzenia planów pozostają na tej stronie.",
      charge:
        "Premium kosztuje $7 miesięcznie. Wkrótce: płatności jeszcze nie ma, więc nic nie jest pobierane.",
      board:
        "Zapisany klan to wpis składu. Nie jest umieszczany w tabeli 100 drużyn. Ta tabela nadal pokazuje 0 zarejestrowanych, dopóki nie otworzy się sezon.",
      steam:
        "Logowanie używa oficjalnego Steam OpenID. A.C.E. nigdy nie prosi o hasło Steam. Z tej strony Steam wraca tutaj.",
      roster:
        "Miejsce 1 to zalogowany kapitan. Miejsca od 2 do 5 muszą już mieć konta A.C.E. Zaproszenia oczekują, dopóki każdy gracz ich nie zaakceptuje.",
      badge:
        "Odznaki miejsc staną się prawdziwymi kontrolami A.C.E Shield po uruchomieniu anti-cheatu.",
      support:
        "Otwórz Pomoc lub Kontakt na tej stronie. Zgłoszenie w Pomocy nie otwiera sprawy, a tekst wpisany w Kontakcie nie jest dostarczany.",
      rating:
        "Nowa ocena zaczyna się od 1000. Ta strona nie sprzedaje oceny, nie otwiera kolejki, nie łączy z serwerem CS2 i nie dostarcza nagród.",
    },
  },
  squad: {
    roles: {
      awper: "AWPer",
      entryFragger: "Entry fragger",
      lurker: "Lurker",
      igl: "IGL",
      support: "Wsparcie",
    },
    rankLabel: "Ranga {level}",
    noAgents: "Nie zapisano jeszcze żadnych nieprzypisanych graczy.",
    notice:
      "Zaproszenia wysyła tylko zalogowany kapitan. Odznaka na miejscu nie jest działającą kontrolą antycheatu.",
  },
  tournaments: {
    meta: {
      title: "Mistrzostwa A.C.E. — elitarny turniej pucharowy 100 drużyn",
      description:
        "Turniej pucharowy na 100 drużyn. Kliknij klan, aby otworzyć jego skład, a potem profil każdego gracza. Zapisy ruszą wkrótce.",
    },
    intro: {
      title: "MISTRZOSTWA A.C.E. — ELITARNY TURNIEJ PUCHAROWY 100 DRUŻYN",
      lede: "Opublikowane pole to turniej pucharowy dla 100 drużyn. Poniższy graf przedstawia ten układ. Kliknięcie klanu otwiera panel ze składem. Rejestracja: 0 ze 100. Żadna nagroda pieniężna nie jest reklamowana ani finansowana.",
      formatValue: "Matryca drabinki 100 drużyn",
      briefTitle: "Skrót operacyjny dla 100 drużyn",
      briefBody:
        "Jeden układ turniejowy obejmuje całe pole 100 drużyn. Po otwarciu zapisów pierwsze 28 przyjętych klanów otrzymuje wolny los w 1. rundzie i awansuje do 2. rundy. Pozostałe 72 klany grają w 1. rundzie. Nazwy na wolnych miejscach to symbole zastępcze do czasu rejestracji klanów. Pełny regulamin znajduje się pod drabinką. Lobby meczowe ruszą wraz z betą rywalizacji, a nagrody są potwierdzane dla każdego wydarzenia.",
    },
    timeline: {
      ariaLabel: "Harmonogram startu turnieju",
      kicker: "PLAN MISTRZOSTW",
      title: "HARMONOGRAM STARTU TURNIEJU",
      stageLabel: "Etap {id}",
      stages: {
        registrations: { title: "Otwarte zapisy", state: "PULS PODGLĄDU" },
        calibration: { title: "Regionalne drabinki kalibracyjne", state: "ZABLOKOWANE" },
        quarterFinals: { title: "Elitarne ćwierćfinały pro", state: "ZABLOKOWANE" },
        finals: { title: "Wielki finał Apex", state: "ZABLOKOWANE" },
      },
      disclaimer:
        "Etap 01 rusza jako pierwszy po otwarciu zapisów. Następnie etapy 02–04. Pule nagród są potwierdzane na stronie wydarzenia po ogłoszeniu.",
    },
    bracket: {
      kicker: "Puchar 100 drużyn · wkrótce",
      title: "Matryca drabinki 100 drużyn",
      statusUnavailable:
        "Zapisy ruszą wkrótce. Do tego czasu drabinka pokazuje przykładowe klany.",
      statusEmpty:
        "Zapisy ruszą wkrótce. Do tego czasu drabinka pokazuje przykładowe klany.",
      statusStored:
        "Najpierw rozmieszczanych jest {count} zapisanych klanów. Pozostałe miejsca pokazują przykładowe klany. Kolejne rundy wypełniają się wraz z rejestrowaniem meczów.",
      openSlot: "Wolne miejsce",
      openCompetitorSlot: "Wolne miejsce uczestnika",
      openRoster: "Otwórz skład: {name}",
      bye: "👑 [WOLNY LOS — ROZSTAWIENIE W 2. RUNDZIE]",
      championStage: "SCENA MISTRZA",
      leftWing: "Lewe skrzydło",
      rightWing: "Prawe skrzydło",
      emptySlotNotice: "To miejsce uczestnika jest puste. Nie zapisano jeszcze żadnego klanu.",
      grandFinalNotice: "Wielki finał pozostaje otwarty, dopóki oba półfinały nie zostaną zarejestrowane.",
      rounds: {
        r128: "R1",
        r64: "R64",
        r32: "R32",
        r16: "R16",
        qf: "ĆF",
        sf: "PF",
      },
    },
    profile: {
      closeBackdrop: "Zamknij profil drużyny",
      kicker: "Profil mistrzowski · podgląd",
      matchesPlayed: "Rozegrane mecze",
      winRate: "Łączny procent wygranych",
      streak: "Aktywna seria turniejowa",
      rosterHeading: "Matryca składu 5 graczy",
      openSeat: "Wolne miejsce {seat}",
      noPlayer: "Nie zapisano gracza",
      previous: "Poprzedni klan",
      count: "Klan {index} z {total}",
      next: "Następny klan",
      close: "Zamknij profil",
      disclosure:
        "Sprzęt i ekwipunek graczy pojawią się tutaj, gdy zdecydują się je udostępnić. A.C.E. nie zbiera danych o sprzęcie.",
    },
    player: {
      level: "POZ. {level} · RP {rating}",
      record: "W–P {wins}–{losses}",
      kdNotStored: "K/D niezapisane",
      openProfileAria: "Otwórz profil gracza {name}",
      openProfile: "Otwórz profil",
      badge: "GOTOWY / ZGODNY Z ANTYCHEATEM",
      badgeNote: "Kontrola A.C.E Shield · wkrótce",
      gear: {
        processor: "CPU",
        gpu: "GPU",
        mouse: "Mysz",
        dpi: "DPI",
        keyboard: "Klawiatura",
        monitor: "Monitor",
        headset: "Słuchawki",
      },
    },
  },
  gearPlaceholder: {
    processor: "CPU · nie udostępniono",
    gpu: "GPU · nie udostępniono",
    mouse: "Mysz · nie udostępniono",
    dpi: "DPI · nie udostępniono",
    keyboard: "Nie udostępniono",
    monitor: "Odświeżanie · nie udostępniono",
    headset: "Nie udostępniono",
  },
  profileDisclosure:
    "A.C.E. nie przechowuje spisów sprzętu i nie uruchamia klienta antycheatu. Wykresy trendów wydajności i matryca walki wymagają sesji A.C.E. Plus lub Premium. Link do profilu Steam wpisany na tej stronie nie jest zapisywany i nie jest oficjalnym identyfikatorem.",
  errors: {
    signInRequired: "Wymagane zalogowanie.",
    nameLength: "Nazwa drużyny musi mieć od 2 do 32 znaków.",
    alreadyCaptain: "To konto jest już kapitanem drużyny.",
    nameTaken: "Drużyna o tej nazwie już istnieje.",
    idRequired: "Wymagany jest SteamID lub identyfikator konta A.C.E.",
    noAccountForToken: "Nie ma konta A.C.E. dla tego SteamID lub identyfikatora konta.",
    clanNeedsFour: "Klan pięciu graczy wymaga zalogowanego kapitana i czterech SteamID.",
    seatNeedsId: "Każde z czterech miejsc wymaga SteamID lub identyfikatora konta A.C.E.",
    seatsDistinct: "Każde miejsce wymaga innego gracza.",
    captainHoldsSeat: "Kapitan zajmuje już miejsce 1. Podaj czterech innych graczy.",
    fewerThanFour: "Te identyfikatory należą do mniej niż czterech kont.",
    selfInvite: "Kapitan nie może zaprosić własnego konta.",
    captainOnly: "Zaproszenia może wysyłać tylko wyznaczony kapitan.",
    rosterLimit: "Skład CS2 to pięciu graczy łącznie z kapitanem.",
    alreadyOnRoster: "Ten gracz jest już w składzie.",
    noAccountForId: "Nie ma konta A.C.E. o tym identyfikatorze.",
    inviteNotFound: "Nie znaleziono zaproszenia.",
    inviteNotPending: "To zaproszenie nie oczekuje już na odpowiedź.",
    rosterFull: "Skład jest już pełny.",
    createFailed: "Nie udało się utworzyć drużyny.",
    inviteFailed: "Zaproszenie nie powiodło się.",
    updateInviteFailed: "Nie udało się zaktualizować zaproszenia.",
  },
};
