import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  meta: {
    title: "Rangi turniejowe",
    description:
      "Dziesięć rang A.C.E. na obrotowym stole CSS 3D, który obracasz przeciągnięciem. Studyjne modele GLTF mogą zastąpić nieruchome obrazy, gdy zostaną dostarczone.",
  },
  hero: {
    kicker: "KALIBRACJA",
    title: "Rangi turniejowe",
    lede: "Od Recruit do A.C.E. Legend, dywizje {divisions}. Każdy emblemat to koncepcyjny obraz na obrotowym stole CSS 3D (przeciągnij lub użyj klawiszy strzałek). Plik GLTF można później umieścić w udokumentowanym miejscu — w repozytorium nie ma jeszcze żadnych plików modeli. Po zalogowaniu liczby oceny pochodzą z Twojego prawdziwego konta, w przeciwnym razie pokazują próg kalibracji.",
  },
  codexLink: "Otwórz Kodeks kalibracji",
  document: {
    title: "Dokument kalibracji dziesięciu szczebli",
    body: "Nazwy w silniku to oficjalna drabinka. Kryształowe aliasy to grafika poczekalni. Procenty wygranych na tablicy to próbki z witryny, a nie żywe dobieranie meczów. Płatne kosmetyki nigdy nie przenoszą gracza między tymi progami.",
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
    premium: "PREMIUM",
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
    samplesNote: "Próbki układu. To nie żywa telemetria.",
    progressMockup: "Makieta postępu",
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
