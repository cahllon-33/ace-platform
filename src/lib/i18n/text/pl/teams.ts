import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  meta: {
    title: "Zarządzanie składem A.C.E.",
    description:
      "Koncepcyjna przestrzeń składu 5v5. Składy, wolni agenci i odznaki antycheatu to układy podglądu. Zaproszenia na żywo wymagają zweryfikowanej sesji Steam.",
  },
  hero: {
    kicker: "DRUŻYNY",
    title: "Składy",
    lede: "Pięć wolnych miejsc w rzędzie. Klan jest zapisywany dopiero po zalogowaniu przez Steam i utworzeniu drużyny.",
  },
  gate: {
    kickerPremium: "Po liście Premium",
    kickerDefault: "Zapis klanu",
    title: "Czy jesteście drużyną pięciu graczy?",
    intro:
      "Miejsce 1 to gracz zalogowany przez Steam. Miejsca od 2 do 5 muszą już mieć konta A.C.E. Zapisanie klanu nie pobiera $7.00, nie wysyła e-maila i nie umieszcza klanu w tabeli 100 drużyn.",
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
    placeholder: "Zapytaj o pięć miejsc, list za $7 lub pomoc",
    ask: "Zapytaj",
    fallback:
      "Ten punkt odpowiada wyłącznie na podstawie spisanych zasad na tej stronie: listu Premium, pięciu miejsc, Steam OpenID i pomocy.",
    facts: {
      email: "Nie jest wysyłany żaden e-mail. List Premium pozostaje pod adresem /premium/receipt.",
      charge:
        "Nic nie jest pobierane. Premium za $7.00 miesięcznie to cena wyświetlana. Kasa nie działa, a zapisany poziom się nie zmienia.",
      board:
        "Zapisany klan to wpis składu. Nie jest umieszczany w tabeli 100 drużyn. Ta tabela nadal pokazuje 0 zarejestrowanych, dopóki nie otworzy się sezon.",
      steam:
        "Logowanie używa oficjalnego Steam OpenID. A.C.E. nigdy nie prosi o hasło Steam. Z tej strony Steam wraca tutaj.",
      roster:
        "Miejsce 1 to zalogowany kapitan. Miejsca od 2 do 5 muszą już mieć konta A.C.E. Zaproszenia oczekują, dopóki każdy gracz ich nie zaakceptuje.",
      badge:
        "Odznaka na miejscu to próbka układu. To nie jest działająca kontrola antycheatu i nic nie jest pobierane.",
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
        "Układ turnieju pucharowego dla 100 drużyn. Kliknij klan, aby otworzyć jego skład, a następnie otwórz profil każdego gracza. Rejestracja: 0 ze 100.",
    },
    intro: {
      title: "MISTRZOSTWA A.C.E. — ELITARNY TURNIEJ PUCHAROWY 100 DRUŻYN",
      lede: "Opublikowane pole to turniej pucharowy dla 100 drużyn. Poniższy graf przedstawia ten układ. Kliknięcie klanu otwiera panel ze składem. Rejestracja: 0 ze 100. Żadna nagroda pieniężna nie jest reklamowana ani finansowana.",
      formatValue: "Matryca drabinki 100 drużyn",
      briefTitle: "Skrót operacyjny dla 100 drużyn",
      briefBody:
        "Jeden układ rozgrywek obejmuje całe pole 100 drużyn. Gdy zapisy się otworzą, pierwsze 28 przyjętych klanów otrzyma wolny los w 1. rundzie i awansuje do 2. rundy. Pozostałe 72 klany grają w 1. rundzie. Nazwy na nieobsadzonych miejscach to etykiety robocze, a nie zarejestrowani uczestnicy. Pełny kod znajduje się pod drabinką. Żadna poczekalnia meczowa nie jest otwarta i żadna pula nagród nie jest finansowana.",
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
        "Etap 01 pulsuje jako podgląd układu. Zapisy nie są otwarte (0 ze 100). Etapy 02–04 są zablokowane. Wielki finał Apex zawiera wyłącznie koncepcyjną kwotę $50,000 — żadna pula nagród nie jest finansowana.",
    },
    bracket: {
      kicker: "Turniej pucharowy 100 drużyn · podgląd układu",
      title: "Matryca drabinki 100 drużyn",
      statusUnavailable:
        "PostgreSQL nie jest połączony. 100 miejsc dla uczestników używa roboczych nazw klanów, a nie zarejestrowanych drużyn. Wyniki serii pozostają na 0.",
      statusEmpty:
        "Nie zapisano jeszcze żadnych klanów. 100 nazw uczestników to roboczy układ. To nie jest pole zgłoszonych drużyn.",
      statusStored:
        "Klany z bazy danych ({count}) są umieszczane jako pierwsze. Pozostałe miejsca używają nazw roboczych. Kolejne rundy pozostają otwarte, dopóki mecze nie zostaną zarejestrowane.",
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
      kicker: "Główny profil mistrzostw · próbka układu",
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
        "Makieta piaskownicy: wszystkie konfiguracje systemów, ekwipunki graczy i zmienne bazy danych w tym profilu to koncepcyjne próbki układu sprzed rejestracji. Żaden klient antycheatu nie działa, żaden sprzęt nie jest zapisywany, a te liczby nie są wynikami meczów.",
    },
    player: {
      level: "POZ. {level} · RP {rating}",
      record: "W–P {wins}–{losses}",
      kdNotStored: "K/D niezapisane",
      openProfileAria: "Otwórz profil gracza {name}",
      openProfile: "Otwórz profil",
      badge: "GOTOWY / ZGODNY Z ANTYCHEATEM",
      badgeNote: "Próbka układu · to nie działająca kontrola",
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
    processor: "Wypełniacz · CPU niezbierane",
    gpu: "Wypełniacz · GPU niezbierane",
    mouse: "Wypełniacz · model myszy niezbierany",
    dpi: "Wypełniacz · DPI niezbierane",
    keyboard: "Wypełniacz · niezbierane",
    monitor: "Wypełniacz · Hz niezbierane",
    headset: "Wypełniacz · niezbierane",
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
