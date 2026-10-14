import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  meta: {
    title: "Tabela",
    description:
      "Tabela turniejowa A.C.E. Zapisane konta Steam pojawiają się jako pierwsze. Puste miejsca pozostają wierszami pokazowymi.",
  },
  hero: {
    kicker: "TABELA",
    title: "Tabela turniejowa",
    note: "Pokazowe miejsca wypełniają tę tabelę, dopóki nie zostanie zapisane konto Steam. Zapisana ocena je zastępuje. Kraj i główna broń to próbki. Rendery broni to oryginalne obrazy studia A.C.E., a nie skórki Valve. Ta strona nie zapisuje zabójstw, więc pokazana broń nie jest zarejestrowaną bronią z największą liczbą fragów.",
  },
  facts: {
    seats: "Miejsca",
    storedAccounts: "Zapisane konta",
    killsStored: "Zapisane zabójstwa",
    none: "Brak",
  },
  empty: "Żadne pokazowe miejsce nie pasuje do tej nazwy.",
  podiumLabel: "Trzy pierwsze miejsca",
  boardLabel: "Tabela turniejowa",
  table: {
    rank: "Miejsce",
    player: "Gracz",
    country: "Kraj",
    tier: "Ranga",
    leadWeapon: "Główna broń",
    rating: "Ocena",
  },
  tags: {
    stored: "Zapisane konto",
    showcase: "Witryna",
  },
  weapon: {
    sampleRender: "Przykładowy render",
    notStored: "Nie zapisano",
    noKillSaved: "Nie zapisano żadnego zabójstwa",
    alt: "Przykładowy render: {name}",
  },
  countries: {
    il: "Izrael",
    us: "Stany Zjednoczone",
    de: "Niemcy",
    ua: "Ukraina",
    se: "Szwecja",
    fr: "Francja",
    pl: "Polska",
    br: "Brazylia",
    jp: "Japonia",
    kr: "Korea Południowa",
  },
  search: {
    openLabel: "Otwórz wyszukiwanie graczy",
    srLabel: "Szukaj w tabeli",
    fieldLabel: "Szukaj graczy",
    placeholder: "Nazwa wyświetlana",
  },
  seasonPreview: {
    banner: "DRABINKA SEZONU 1 — UKŁAD",
    noteLive:
      "Nazwy powiązane ze Steam to zapisane konta. Puste miejsca pozostają oznaczone jako «witryna». K/D nie jest zapisywane, więc ten wskaźnik to tylko układ.",
    noteSample:
      "Próbka układu. 0 żywych wyników rankingowych. Te liczby nie są wynikiem sezonu, a K/D nie jest zapisywane.",
  },
  playerCard: {
    kicker: "Podgląd karty uwierzytelnionego gracza · liczby z makiety",
    title: "Dossier operatora",
    badge: "Premium",
    note: "Tylko układ. Te liczby nie są żywym sezonem, żywym Elo ani zalogowanym kontem. Dobieranie rankingowe nie jest aktywne.",
    currentRank: "Obecna ranga",
    rankValue: "A.C.E. Legend (Dywizja I)",
    competitiveRating: "Ocena turniejowa",
    seasonRank: "Miejsce w sezonie",
    seasonTop: "(najlepsze {percent})",
  },
};
