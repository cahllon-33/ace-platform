import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  meta: {
    title: "Žebříček",
    description:
      "Soutěžní tabule A.C.E. Uložené účty Steam se zobrazují jako první. Prázdná místa zůstávají řádky z vitríny.",
  },
  hero: {
    kicker: "ŽEBŘÍČEK",
    title: "Soutěžní tabule",
    note: "Dokud není uložen účet Steam, vyplňují tuto tabuli místa z vitríny. Uložené hodnocení je nahradí. Země a hlavní zbraň jsou ukázky. Rendery zbraní jsou původní studiové obrázky A.C.E., ne skiny Valve. Tento web neukládá zabití, takže zbraň není zaznamenanou zbraní nejlepšího střelce.",
  },
  facts: {
    seats: "Místa",
    storedAccounts: "Uložené účty",
    killsStored: "Uložená zabití",
    none: "Žádná",
  },
  empty: "Tomuto jménu neodpovídá žádné místo z vitríny.",
  podiumLabel: "Tři nejlepší místa",
  boardLabel: "Soutěžní tabule",
  table: {
    rank: "Pořadí",
    player: "Hráč",
    country: "Země",
    tier: "Stupeň",
    leadWeapon: "Hlavní zbraň",
    rating: "Hodnocení",
  },
  tags: {
    stored: "Uložený účet",
    showcase: "Vitrína",
  },
  weapon: {
    sampleRender: "Ukázkový render",
    notStored: "Neuloženo",
    noKillSaved: "Žádné zabití není uloženo",
    alt: "Ukázkový render {name}",
  },
  countries: {
    il: "Izrael",
    us: "Spojené státy",
    de: "Německo",
    ua: "Ukrajina",
    se: "Švédsko",
    fr: "Francie",
    pl: "Polsko",
    br: "Brazílie",
    jp: "Japonsko",
    kr: "Jižní Korea",
  },
  search: {
    openLabel: "Otevřít vyhledávání hráčů",
    srLabel: "Hledat v žebříčku",
    fieldLabel: "Hledat hráče",
    placeholder: "Zobrazované jméno",
  },
  seasonPreview: {
    banner: "ŽEBŘÍČEK 1. SEZÓNY — ROZVRŽENÍ",
    noteLive:
      "Jména propojená se Steam jsou uložené účty. Prázdná místa zůstávají označená jako vitrína. K/D se neukládá, takže tento ukazatel je jen rozvržení.",
    noteSample:
      "Ukázka rozvržení. 0 živých rankingových záznamů. Tyto údaje nejsou výsledkem sezóny a K/D se neukládá.",
  },
  playerCard: {
    kicker: "Náhled karty ověřeného hráče · smyšlené údaje",
    title: "Složka operátora",
    badge: "Premium",
    note: "Pouze rozvržení. Tato čísla nejsou živou sezónou, živým Elo ani přihlášeným účtem. Rankingové párování není aktivní.",
    currentRank: "Aktuální hodnost",
    rankValue: "A.C.E. Legend (divize I)",
    competitiveRating: "Soutěžní hodnocení",
    seasonRank: "Pořadí v sezóně",
    seasonTop: "(Nejlepších {percent})",
  },
};
