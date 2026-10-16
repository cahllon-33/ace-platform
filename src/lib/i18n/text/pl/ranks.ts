import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "showcase": {
    "rankTier": "Poziom rangi {n}",
    "chip": "Premium",
    "artAlt": "Grafika rangi Premium {rank}"
  },
  "rpRules": {
    "kicker": "ZASADY RATING POINTS A.C.E",
    "title": "Jak zmieniają się Rating Points",
    "lede": "Wersja zasad {version}. Każdy nowy gracz zaczyna z {start} RP na poziomie 3, {tier}. Drabinka jest celowo powolna: każdy poziom powyżej środka wymaga więcej zwycięstw niż poprzedni.",
    "tableTitle": "Zasady",
    "colRule": "Zasada",
    "colValue": "Wartość",
    "rStart": "Rating startowy",
    "vStart": "{start} RP, poziom 3 ({tier})",
    "rWin": "Wygrana z równą drużyną",
    "vWin": "+{win} RP",
    "rLoss": "Przegrana z równą drużyną",
    "vLoss": "−{loss} RP",
    "rOdds": "Siła przeciwnika",
    "vOdds": "Twój rating jest porównywany ze średnim ratingiem drugiej drużyny (skala {scale}). Wygrana z silniejszą drużyną daje więcej, a przegrana kosztuje mniej; ze słabszą drużyną jest odwrotnie.",
    "rClamp": "Limity na mecz",
    "vClamp": "Wygrana daje od +{winMin} do +{winMax} RP. Przegrana kosztuje od −{lossMin} do −{lossMax} RP.",
    "rTier": "Wygrane na wysokich poziomach",
    "vTier": "Zyski za wygraną są mnożone przez {t7} na poziomach 7–9 i przez {t10} na poziomie 10 ({top}). Przegrane nigdy nie są zmniejszane.",
    "rMvp": "MVP meczu",
    "vMvp": "Gracz z największą liczbą zabójstw; przy remisie decydują większe obrażenia, potem mniej zgonów. +{mvp} RP przy wygranej i o {mvp} RP mniej straty przy przegranej, nigdy poza limity na mecz. Wkrótce: serwer jeszcze nie zapisuje zabójstw, więc dziś bonus MVP nie jest naliczany.",
    "rPlacement": "Kwalifikacje",
    "vPlacement": "Twoje pierwsze {n} meczów. W trakcie kwalifikacji rating nie może wzrosnąć powyżej poziomu {maxTier} ({cap} RP).",
    "rDraw": "Remis",
    "vDraw": "0 RP dla wszystkich.",
    "rAbandon": "Porzucenie lub opuszczenie meczu",
    "vAbandon": "−{abandon} RP niezależnie od wyniku i bez bonusu MVP.",
    "rLimits": "Zakres ratingu",
    "vLimits": "Od {floor} do {ceiling} RP",
    "rDecay": "Brak aktywności",
    "vDecay": "Brak spadku. Twój rating nie maleje, gdy nie grasz.",
    "rPaid": "Płatne plany",
    "vPaid": "Bez wpływu. Gracze Free, Plus i Premium podlegają dokładnie tym samym zasadom.",
    "tierTableTitle": "Na poziom, przeciwko równej drużynie",
    "colTier": "Poziom",
    "colFloor": "Od",
    "colWin": "Wygrana",
    "colLoss": "Przegrana",
    "examplesTitle": "Przykłady z obliczeniami",
    "ex1": "Z {start} do {elite} RP ({top}) przeciwko równym drużynom, tylko wygrywając: {w1} wygranych po +15 do poziomu 6, potem {w2} wygranych po +{win7} na poziomach 7–9. Razem {total} wygranych.",
    "ex2": "Każda przegrana po drodze dokłada kolejne wygrane. Na poziomach 7–9 wygrana daje +{win7}, ale przegrana nadal kosztuje −{loss}, więc musisz wygrywać co najmniej {breakEven}% wyrównanych meczów, aby dalej awansować.",
    "ex3": "Przeciwko drużynie o średnio 200 RP wyższym ratingu wygrana daje +{strongWin}, a przegrana kosztuje −{strongLoss}.",
    "ex4": "Przeciwko drużynie o średnio 200 RP niższym ratingu wygrana daje +{weakWin}, a przegrana kosztuje −{weakLoss}.",
    "note": "Te liczby oblicza ten sam kod, który nalicza zweryfikowany wynik meczu. To przykłady, a nie zapisane mecze."
  },
  "premiumCodex": {
    "kicker": "KODEKS RANG PREMIUM",
    "title": "Kodeks rang Premium",
    "lede": "Dziesięć ilustrowanych kryształowych emblematów, po jednym na rangę. To kosmetyczna grafika profilu na tej samej drabinie Rating Points co rangi standardowe. Nie zmienia ratingu, matchmakingu ani kolejki.",
    "cosmetic": "Grafika kosmetyczna · ta sama drabina RP · tylko A.C.E Premium 7 $/mies.",
    "imgAlt": "Grafika rangi Premium {name}, poziom {level}"
  },
  "premiumRanks": {
    "kicker": "RANGI PREMIUM",
    "plan": "A.C.E PREMIUM · tylko 7 $/mies.",
    "title": "Grafika rang Premium",
    "lede": "Oryginalny ilustrowany zestaw rang A.C.E.: dziesięć kryształowych emblematów z dywizjami III/II/I, protokół ratingu, karta szczegółów Legend i przeglądarka 3D obracana przeciąganiem. To grafika profilu dla członków Premium. Odczytuje tę samą drabinkę Rating Points co rangi standardowe i nie daje żadnej przewagi rywalizacyjnej.",
    "demo": "Wartości demonstracyjne: postęp, odsetek wygranych i dywizje na tej tablicy to przykłady, nie statystyki na żywo. Po zalogowaniu pokazany rating to twój zapisany rating.",
    "locked": "Wkrótce: płatności jeszcze nie istnieją, więc dziś żadne konto nie jest Premium. Serwer nakłada grafikę rang Premium na profil tylko wtedy, gdy jego zapisany plan to Premium.",
    "standardKicker": "RANGI STANDARDOWE",
    "standardNote": "Każde konto nosi te wektorowe emblematy 3D.",
    "legendTag": "PREMIUM",
    "pickerTitle": "Grafika rangi na twoim profilu",
    "pickerStandard": "Standardowa",
    "pickerPremium": "Premium",
    "pickerLocked": "Grafika rang Premium jest dla A.C.E Premium (7 $/mies.). Wkrótce: płatności jeszcze nie istnieją.",
    "pickerSaved": "Zapisano.",
    "pickerFailed": "Nie zapisano. Grafika rang Premium wymaga A.C.E Premium."
  },
  "meta": {
    "title": "Rangi turniejowe",
    "description": "Dziesięć rang A.C.E., od Iron Recruit do A.C.E. Legend, z dywizjami i progami rankingu."
  },
  "hero": {
    "kicker": "KALIBRACJA",
    "title": "Rangi turniejowe",
    "lede": "Dziesięć poziomów od Recruit do A.C.E. Legend, każdy z dywizjami {divisions}. Przeciągnij lub użyj strzałek, aby obrócić emblemat. Po zalogowaniu widzisz swój ranking, w przeciwnym razie próg każdego poziomu."
  },
  "codexLink": "Otwórz Kodeks kalibracji",
  "document": {
    "title": "Dokument kalibracji dziesięciu szczebli",
    "body": "Nazwy silnika to oficjalna drabinka. Kryształowe aliasy to grafika lobby. Wskaźniki procentu zwycięstw na tablicy to dane prezentacyjne do czasu uruchomienia matchmakingu rankingowego. Płatne elementy kosmetyczne nigdy nie przenoszą gracza między poziomami.",
    "level": "POZIOM {level} · {crystal}",
    "detail": "Minimalna ocena {rating}. Studium materiału: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "KALIBRACJA WEJŚCIOWA",
      "material": "Surowe żelazo / tekstura płyty z obsydianu"
    },
    "2": {
      "tagline": "AGENT POLOWY",
      "material": "Kryształowy rdzeń ze szczotkowanego brązu"
    },
    "3": {
      "tagline": "PRZEDNIA KRAWĘDŹ",
      "material": "Odłamki różowego złota z głęboką ciemnoczerwoną nutą"
    },
    "4": {
      "tagline": "PRECYZYJNE RZEMIOSŁO",
      "material": "Blok diamentowych odłamków z chromowanego srebra"
    },
    "5": {
      "tagline": "DOŚWIADCZONY RDZEŃ",
      "material": "Aura stopionego rdzenia z patynowanego mosiądzu"
    },
    "6": {
      "tagline": "ZŁOTY STANDARD",
      "material": "Rozbłysk kryształu z odłamków intensywnego złota"
    },
    "7": {
      "tagline": "CYJANOWE WZNIESIENIE",
      "material": "Kryształowa matryca z cyjanowej plazmy"
    },
    "8": {
      "tagline": "SZAFIROWA BURZA",
      "material": "Kryształowy rdzeń szafirowej błyskawicy o intensywnym blasku"
    },
    "9": {
      "tagline": "KORONA PUSTKI",
      "material": "Gwiezdny rdzeń z odłamków w głębokiej, kosmicznej purpurze pustki"
    },
    "10": {
      "tagline": "ELITA ELIT",
      "material": "Luksusowa konstrukcja korony z promiennego, stopionego złota"
    }
  },
  "board": {
    "selectEmblem": "Wybierz emblemat rangi A.C.E. {name}, poziom {level}",
    "emblemAlt": "Autorska kryształowa odznaka profilu A.C.E. 3D: emblemat {name} {crystal}, poziom {level}",
    "emblemAltLegend": "Autorska kryształowa odznaka profilu A.C.E. 3D: emblemat poziomu {level}",
    "premium": "NAJWYŻSZY POZIOM"
  },
  "division": {
    "label": "Dywizja {division}",
    "select": "Wybierz dywizję {division}",
    "summary": "Dywizje na rangę: {divisions} / poziomy łącznie: {levels}"
  },
  "card": {
    "rank": "Ranga {level}",
    "targetWinRate": "Docelowy procent wygranych: {winRate}",
    "floor": "Próg"
  },
  "turntable": {
    "stageLabel": "Orbitalny emblemat {name}. Przeciągnij, aby obrócić.",
    "dragToRotate": "PRZECIĄGNIJ, ABY OBRÓCIĆ",
    "rankSystem": "SYSTEM RANG"
  },
  "emblem": {
    "kicker": "Znak kalibracji",
    "rankLabel": "Ranga {level} · {name}"
  },
  "calibration": {
    "placementNote": "Wypełniono {complete} / {total} znaczników kalibracyjnych na podstawie zapisanych wygranych i przegranych. Te węzły nie rozpoczynają meczu."
  }
};
