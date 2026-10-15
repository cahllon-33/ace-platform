import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  premiumRanks: {
    kicker: "PREMIUMRANKER",
    plan: "A.C.E PREMIUM · endast 7 $/mån",
    title: "Premiumrankkonst",
    lede: "Den ursprungliga illustrerade A.C.E.-rankuppsättningen: tio kristallemblem med divisionerna III/II/I, ratingprotokollet, Legend-detaljkortet och 3D-visaren som roteras genom att dra. Det är profilkonst för Premium-medlemmar. Den läser samma Rating Points-stege som standardrankerna och ger ingen tävlingsfördel.",
    demo: "Demovärden: framsteg, vinstandel och divisioner på tavlan är exempel, inte live-statistik. När du är inloggad är den visade ratingen din sparade rating.",
    locked: "Kommer snart: kassan finns inte än, så inget konto är Premium i dag. Servern använder premiumrankkonst på en profil bara när dess sparade plan är Premium.",
    standardKicker: "STANDARDRANKER",
    standardNote: "Alla konton bär dessa 3D-vektoremblem.",
    legendTag: "PREMIUM",
    pickerTitle: "Rankkonst på din profil",
    pickerStandard: "Standard",
    pickerPremium: "Premium",
    pickerLocked: "Premiumrankkonst är för A.C.E Premium (7 $/mån). Kommer snart: kassan finns inte än.",
    pickerSaved: "Sparat.",
    pickerFailed: "Inte sparat. Premiumrankkonst kräver A.C.E Premium.",
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
    "calibrationTarget": "Kalibreringsmål",
    "floor": "Golv",
    "samplesNote": "Målsiffror för varje nivå.",
    "progressMockup": "Framsteg"
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
