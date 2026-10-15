import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "rpRules": {
    "kicker": "A.C.E REGLER FÖR RATING POINTS",
    "title": "Så rör sig Rating Points",
    "lede": "Regelversion {version}. Varje ny spelare börjar med {start} RP på nivå 3, {tier}. Stegen är långsam med avsikt: varje nivå ovanför mitten kräver fler vinster än den förra.",
    "tableTitle": "Reglerna",
    "colRule": "Regel",
    "colValue": "Värde",
    "rStart": "Startrating",
    "vStart": "{start} RP, nivå 3 ({tier})",
    "rWin": "Vinst mot ett jämnt lag",
    "vWin": "+{win} RP",
    "rLoss": "Förlust mot ett jämnt lag",
    "vLoss": "−{loss} RP",
    "rOdds": "Motståndarens styrka",
    "vOdds": "Din rating jämförs med det andra lagets genomsnittliga rating (skala {scale}). En vinst mot ett starkare lag ger mer och en förlust mot det kostar mindre; mot ett svagare lag är det tvärtom.",
    "rClamp": "Gränser per match",
    "vClamp": "En vinst ger +{winMin} till +{winMax} RP. En förlust kostar −{lossMin} till −{lossMax} RP.",
    "rTier": "Vinster på höga nivåer",
    "vTier": "Vinstpoäng multipliceras med {t7} på nivå 7–9 och med {t10} på nivå 10 ({top}). Förluster minskas aldrig.",
    "rMvp": "Matchens MVP",
    "vMvp": "Spelaren med flest kills; vid lika avgör mest skada och sedan minst antal dödsfall. +{mvp} RP vid vinst och {mvp} RP mindre förlust vid förlust, aldrig utöver gränserna per match. Kommer snart: servern registrerar inte kills ännu, så ingen MVP-bonus tillämpas i dag.",
    "rPlacement": "Placering",
    "vPlacement": "Dina första {n} matcher. Under placeringen kan din rating inte stiga över nivå {maxTier} ({cap} RP).",
    "rDraw": "Oavgjort",
    "vDraw": "0 RP för alla.",
    "rAbandon": "Att lämna eller överge en match",
    "vAbandon": "−{abandon} RP oavsett resultat, och ingen MVP-bonus.",
    "rLimits": "Ratingintervall",
    "vLimits": "{floor} till {ceiling} RP",
    "rDecay": "Inaktivitet",
    "vDecay": "Inget förfall. Din rating sjunker inte medan du är borta.",
    "rPaid": "Betalplaner",
    "vPaid": "Ingen effekt. Free-, Plus- och Premium-spelare rör sig efter exakt samma regler.",
    "tierTableTitle": "Per nivå, mot ett jämnt lag",
    "colTier": "Nivå",
    "colFloor": "Från",
    "colWin": "Vinst",
    "colLoss": "Förlust",
    "examplesTitle": "Räkneexempel",
    "ex1": "Från {start} till {elite} RP ({top}) mot jämna lag, bara med vinster: {w1} vinster à +15 till och med nivå 6, sedan {w2} vinster à +{win7} genom nivå 7–9. Totalt {total} vinster.",
    "ex2": "Varje förlust på vägen kräver fler vinster. På nivå 7–9 ger en vinst +{win7} men en förlust kostar fortfarande −{loss}, så du måste vinna minst {breakEven} % av jämna matcher för att fortsätta klättra.",
    "ex3": "Mot ett lag med i snitt 200 RP mer än du ger en vinst +{strongWin} och en förlust kostar −{strongLoss}.",
    "ex4": "Mot ett lag med i snitt 200 RP mindre än du ger en vinst +{weakWin} och en förlust kostar −{weakLoss}.",
    "note": "Siffrorna räknas fram av samma kod som tillämpar ett verifierat matchresultat. De är exempel, inte sparade matcher."
  },
  "premiumCodex": {
    "kicker": "PREMIUM-RANKKODEX",
    "title": "Premium-rankkodex",
    "lede": "Tio illustrerade kristallemblem, ett per rank. Detta är kosmetisk profilkonst på samma Rating Points-stege som standardrankerna. Den ändrar inte rating, matchmaking eller kö.",
    "cosmetic": "Kosmetisk konst · samma RP-stege · endast A.C.E Premium 7 $/mån",
    "imgAlt": "Premium-rankkonst för {name}, nivå {level}"
  },
  "premiumRanks": {
    "kicker": "PREMIUMRANKER",
    "plan": "A.C.E PREMIUM · endast 7 $/mån",
    "title": "Premiumrankkonst",
    "lede": "Den ursprungliga illustrerade A.C.E.-rankuppsättningen: tio kristallemblem med divisionerna III/II/I, ratingprotokollet, Legend-detaljkortet och 3D-visaren som roteras genom att dra. Det är profilkonst för Premium-medlemmar. Den läser samma Rating Points-stege som standardrankerna och ger ingen tävlingsfördel.",
    "demo": "Demovärden: framsteg, vinstandel och divisioner på tavlan är exempel, inte live-statistik. När du är inloggad är den visade ratingen din sparade rating.",
    "locked": "Kommer snart: kassan finns inte än, så inget konto är Premium i dag. Servern använder premiumrankkonst på en profil bara när dess sparade plan är Premium.",
    "standardKicker": "STANDARDRANKER",
    "standardNote": "Alla konton bär dessa 3D-vektoremblem.",
    "legendTag": "PREMIUM",
    "pickerTitle": "Rankkonst på din profil",
    "pickerStandard": "Standard",
    "pickerPremium": "Premium",
    "pickerLocked": "Premiumrankkonst är för A.C.E Premium (7 $/mån). Kommer snart: kassan finns inte än.",
    "pickerSaved": "Sparat.",
    "pickerFailed": "Inte sparat. Premiumrankkonst kräver A.C.E Premium."
  },
  "meta": {
    "title": "Tävlingsranker",
    "description": "A.C.E.:s tio ranker, från Iron Recruit till A.C.E. Legend, med divisioner och ratinggolv."
  },
  "hero": {
    "kicker": "KALIBRERING",
    "title": "Tävlingsranker",
    "lede": "Tio nivåer från Recruit till A.C.E. Legend, var och en med divisionerna {divisions}. Dra eller använd piltangenterna för att rotera ett emblem. Inloggad ser du din egen rating; annars varje nivås golv."
  },
  "codexLink": "Öppna kalibreringskodexen",
  "document": {
    "title": "Kalibreringsdokument med tio nivåer",
    "body": "Motornamnen är den officiella stegen. Kristallnamnen är lobbykonst. Vinstprocenten på tavlan är exempelsiffror tills rankad matchning lanseras. Betalda kosmetiska föremål flyttar aldrig en spelare mellan nivåerna.",
    "level": "NIVÅ {level} · {crystal}",
    "detail": "Lägsta rating {rating}. Materialstudie: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "INGÅNGSKALIBRERING",
      "material": "Plåttextur i råjärn / obsidian"
    },
    "2": {
      "tagline": "FÄLTAGENT",
      "material": "Kristallkärna i borstad brons"
    },
    "3": {
      "tagline": "FRÄMRE LINJEN",
      "material": "Roséguldsskärvor med djupröda undertoner"
    },
    "4": {
      "tagline": "PRECISIONSHANTVERK",
      "material": "Diamantskärvblock i kromsilver"
    },
    "5": {
      "tagline": "ERFAREN KÄRNA",
      "material": "Aura av smält kärna i patinerad mässing"
    },
    "6": {
      "tagline": "GULDSTANDARD",
      "material": "Strålande guldkristallflamma"
    },
    "7": {
      "tagline": "CYAN UPPSTIGNING",
      "material": "Kristallmatris av cyanblå plasma"
    },
    "8": {
      "tagline": "SAFIRSTORM",
      "material": "Kristallkärna av intensivt glödande safirblå blixt"
    },
    "9": {
      "tagline": "TOMRUMMETS KRONA",
      "material": "Stjärnkärna i djupt kosmiskt lila"
    },
    "10": {
      "tagline": "ELITENS ELIT",
      "material": "Lyxig kronram i strålande smält guld"
    }
  },
  "board": {
    "selectEmblem": "Välj A.C.E. {name}-rankemblem, nivå {level}",
    "emblemAlt": "A.C.E. 3D-kristallemblem nivå {level} {crystal} {name}, profilmärke",
    "emblemAltLegend": "A.C.E. 3D-kristallemblem nivå {level}, profilmärke",
    "premium": "HÖGSTA NIVÅ"
  },
  "division": {
    "label": "Division {division}",
    "select": "Välj division {division}",
    "summary": "{divisions} divisioner var / {levels} nivåer totalt"
  },
  "card": {
    "rank": "Rank {level}",
    "targetWinRate": "{winRate} målvinstprocent",
    "floor": "Golv"
  },
  "turntable": {
    "stageLabel": "{name} orbitalemblem. Dra för att rotera.",
    "dragToRotate": "DRA FÖR ATT ROTERA",
    "rankSystem": "RANKSYSTEM"
  },
  "emblem": {
    "kicker": "Kalibreringsmärke",
    "rankLabel": "Rank {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} placeringsmärken är ifyllda från sparade vinster och förluster. Dessa noder startar ingen match."
  }
};
