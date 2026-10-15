import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  premiumRanks: {
    kicker: "RANGI PREMIUM",
    plan: "A.C.E PREMIUM · tylko 7 $/mies.",
    title: "Grafika rang Premium",
    lede: "Oryginalny ilustrowany zestaw rang A.C.E.: dziesięć kryształowych emblematów z dywizjami III/II/I, protokół ratingu, karta szczegółów Legend i przeglądarka 3D obracana przeciąganiem. To grafika profilu dla członków Premium. Odczytuje tę samą drabinkę Rating Points co rangi standardowe i nie daje żadnej przewagi rywalizacyjnej.",
    demo: "Wartości demonstracyjne: postęp, odsetek wygranych i dywizje na tej tablicy to przykłady, nie statystyki na żywo. Po zalogowaniu pokazany rating to twój zapisany rating.",
    locked: "Wkrótce: płatności jeszcze nie istnieją, więc dziś żadne konto nie jest Premium. Serwer nakłada grafikę rang Premium na profil tylko wtedy, gdy jego zapisany plan to Premium.",
    standardKicker: "RANGI STANDARDOWE",
    standardNote: "Każde konto nosi te wektorowe emblematy 3D.",
    legendTag: "PREMIUM",
    pickerTitle: "Grafika rangi na twoim profilu",
    pickerStandard: "Standardowa",
    pickerPremium: "Premium",
    pickerLocked: "Grafika rang Premium jest dla A.C.E Premium (7 $/mies.). Wkrótce: płatności jeszcze nie istnieją.",
    pickerSaved: "Zapisano.",
    pickerFailed: "Nie zapisano. Grafika rang Premium wymaga A.C.E Premium.",
  },
  meta: {
    title: "Rangi turniejowe",
    description:
      "Dziesięć rang A.C.E., od Iron Recruit do A.C.E. Legend, z dywizjami i progami rankingu.",
  },
  hero: {
    kicker: "KALIBRACJA",
    title: "Rangi turniejowe",
    lede: "Dziesięć poziomów od Recruit do A.C.E. Legend, każdy z dywizjami {divisions}. Przeciągnij lub użyj strzałek, aby obrócić emblemat. Po zalogowaniu widzisz swój ranking, w przeciwnym razie próg każdego poziomu.",
  },
  codexLink: "Otwórz Kodeks kalibracji",
  document: {
    title: "Dokument kalibracji dziesięciu szczebli",
    body: "Nazwy silnika to oficjalna drabinka. Kryształowe aliasy to grafika lobby. Wskaźniki procentu zwycięstw na tablicy to dane prezentacyjne do czasu uruchomienia matchmakingu rankingowego. Płatne elementy kosmetyczne nigdy nie przenoszą gracza między poziomami.",
    level: "POZIOM {level} · {crystal}",
    detail: "Minimalna ocena {rating}. Studium materiału: {material}.",
  },
  tiers: {
    1: { tagline: "KALIBRACJA WEJŚCIOWA", material: "Surowe żelazo / tekstura płyty z obsydianu" },
    2: { tagline: "AGENT POLOWY", material: "Kryształowy rdzeń ze szczotkowanego brązu" },
    3: { tagline: "PRZEDNIA KRAWĘDŹ", material: "Odłamki różowego złota z głęboką ciemnoczerwoną nutą" },
    4: { tagline: "PRECYZYJNE RZEMIOSŁO", material: "Blok diamentowych odłamków z chromowanego srebra" },
    5: { tagline: "DOŚWIADCZONY RDZEŃ", material: "Aura stopionego rdzenia z patynowanego mosiądzu" },
    6: { tagline: "ZŁOTY STANDARD", material: "Rozbłysk kryształu z odłamków intensywnego złota" },
    7: { tagline: "CYJANOWE WZNIESIENIE", material: "Kryształowa matryca z cyjanowej plazmy" },
    8: { tagline: "SZAFIROWA BURZA", material: "Kryształowy rdzeń szafirowej błyskawicy o intensywnym blasku" },
    9: { tagline: "KORONA PUSTKI", material: "Gwiezdny rdzeń z odłamków w głębokiej, kosmicznej purpurze pustki" },
    10: { tagline: "ELITA ELIT", material: "Luksusowa konstrukcja korony z promiennego, stopionego złota" },
  },
  board: {
    selectEmblem: "Wybierz emblemat rangi A.C.E. {name}, poziom {level}",
    emblemAlt: "Autorska kryształowa odznaka profilu A.C.E. 3D: emblemat {name} {crystal}, poziom {level}",
    emblemAltLegend: "Autorska kryształowa odznaka profilu A.C.E. 3D: emblemat poziomu {level}",
    premium: "NAJWYŻSZY POZIOM",
  },
  division: {
    label: "Dywizja {division}",
    select: "Wybierz dywizję {division}",
    summary: "Dywizje na rangę: {divisions} / poziomy łącznie: {levels}",
  },
  card: {
    rank: "Ranga {level}",
    targetWinRate: "Docelowy procent wygranych: {winRate}",
    calibrationTarget: "Cel kalibracji",
    floor: "Próg",
    samplesNote: "Wartości docelowe dla każdego poziomu.",
    progressMockup: "Postęp",
  },
  turntable: {
    stageLabel: "Orbitalny emblemat {name}. Przeciągnij, aby obrócić.",
    dragToRotate: "PRZECIĄGNIJ, ABY OBRÓCIĆ",
    rankSystem: "SYSTEM RANG",
  },
  emblem: {
    kicker: "Znak kalibracji",
    rankLabel: "Ranga {level} · {name}",
  },
  calibration: {
    placementNote:
      "Wypełniono {complete} / {total} znaczników kalibracyjnych na podstawie zapisanych wygranych i przegranych. Te węzły nie rozpoczynają meczu.",
  },
};
