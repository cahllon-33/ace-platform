import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  "meta": {
    "title": "A.C.E. upravljanje odredom",
    "description": "Radni prostor tvog 5v5 odreda. Pozivnice zahtijevaju provjerenu Steam sesiju; anti-cheat provjere stižu s A.C.E Shieldom."
  },
  "hero": {
    "kicker": "TIMOVI",
    "title": "Squads",
    "lede": "Pet otvorenih mjesta u nizu. Klan se sprema tek nakon Steam prijave i stvorenog tima."
  },
  "gate": {
    "kickerPremium": "Zapis klana nakon odabira plana",
    "kickerDefault": "Zapis klana",
    "title": "Jeste li tim od pet?",
    "intro": "Mjesto 1 je igrač prijavljen putem Steama. Mjesta 2 do 5 moraju već imati A.C.E. račune. Spremanje klana ne naplaćuje 7 $, ne šalje e-poštu i ne stavlja klan na ploču od 100 timova.",
    "yes": "Da, pet igrača",
    "no": "Ne, ostavi mjesta otvorena",
    "seatsOpen": "Pet mjesta ostaje otvoreno. Ništa nije spremljeno.",
    "connectSteam": "Najprije poveži Steam. Gumb se vraća na ovu stranicu. A.C.E. nikad ne traži Steam lozinku.",
    "alreadyMember": "{name} već pripada timu {team}. Ovim obrascem ne stvara se drugi klan.",
    "thisAccount": "Ovaj račun",
    "acceptTerms": "Prihvati uvjete prije spremanja klana.",
    "notStored": "Klan nije spremljen.",
    "clanName": "Ime klana",
    "captainSeat": "Mjesto 1, kapetan: {name}",
    "signedInSteam": "Prijavljeni Steam račun",
    "seatLabel": "SteamID ili A.C.E. ID računa za mjesto {seat}",
    "submit": "Spremi klan od pet igrača",
    "saved": "Ime klana je spremljeno i četiri pozivnice čekaju. Ti igrači nisu u postavi dok ne prihvate. Ovo nije mjesto na ploči od 100 timova. Ništa nije naplaćeno."
  },
  "squadDesk": {
    "kicker": "Pult odreda",
    "title": "Pitanja iz pisanih pravila",
    "intro": "Ovaj pult čita samo činjenice objavljene na ovoj stranici. Ne otkriva varanje, ne otvara meč i ne mijenja račun.",
    "questionLabel": "Pitanje",
    "placeholder": "Pitaj o pet mjesta, planovima ili podršci",
    "ask": "Pitaj",
    "fallback": "Ovaj pult odgovara samo prema pisanim pravilima na ovoj stranici: planovi, pet mjesta, Steam OpenID i podrška.",
    "facts": {
      "email": "E-pošta se ne šalje. Potvrde planova ostaju na ovoj stranici.",
      "charge": "Premium stoji 7 $ mjesečno. Uskoro: plaćanje još ne postoji, pa se ništa ne naplaćuje.",
      "board": "Spremljeni klan je zapis postave. Ne stavlja se na ploču od 100 timova. Ta ploča i dalje pokazuje 0 prijavljenih dok sezona ne počne.",
      "steam": "Prijava koristi službeni Steam OpenID. A.C.E. nikad ne traži Steam lozinku. S ove stranice Steam se vraća ovdje.",
      "roster": "Mjesto 1 je prijavljeni kapetan. Mjesta 2 do 5 moraju već imati A.C.E. račune. Pozivnice čekaju dok svaki igrač ne prihvati.",
      "badge": "Značke mjesta postaju A.C.E Shield provjere uživo kad anti-cheat krene.",
      "support": "Otvori Podršku ili Kontakt na ovoj stranici. Upit podršci ne otvara zahtjev, a tekst upisan na Kontaktu ne dostavlja se.",
      "rating": "Novi rejting počinje od 1.200. Ova stranica ne prodaje rejting, ne otvara red, ne spaja CS2 poslužitelj i ne dodjeljuje nagrade."
    }
  },
  "squad": {
    "roles": {
      "awper": "AWPer",
      "entryFragger": "Entry Fragger",
      "lurker": "Lurker",
      "igl": "IGL",
      "support": "Support"
    },
    "rankLabel": "Rang {level}",
    "noAgents": "Još nema spremljenih igrača bez tima.",
    "notice": "Pozivnice šalje samo prijavljeni kapetan. Značka na mjestu nije anti-cheat provjera uživo."
  },
  "tournaments": {
    "meta": {
      "title": "A.C.E. prvenstvo — elitni nokaut 100 timova",
      "description": "Nokaut 100 timova. Klikni klan da otvoriš njegovu postavu, zatim profil svakog igrača. Prijave se otvaraju uskoro."
    },
    "intro": {
      "title": "A.C.E. PRVENSTVO — ELITNI NOKAUT 100 TIMOVA",
      "lede": "Objavljeno polje je nokaut 100 timova. Graf ispod je taj raspored. Klik na klan otvara ladicu s postavom. Prijavljeno 0 od 100. Novčana nagrada nije oglašena ni financirana.",
      "formatValue": "Matrica kostura 100 timova",
      "briefTitle": "Operativni sažetak 100 timova",
      "briefBody": "Jedan natjecateljski raspored pokriva cijelo polje od 100 timova. Kad se prijave otvore, prvih 28 prihvaćenih klanova dobiva slobodan prolaz u 1. kolu i ide u 2. kolo. Ostala 72 klana igraju 1. kolo. Imena na nepopunjenim mjestima privremena su dok se klanovi ne prijave. Cijeli pravilnik nalazi se ispod stabla. Predvorja mečeva otvaraju se s natjecateljskom betom, a nagrade se potvrđuju po događaju."
    },
    "bracket": {
      "kicker": "Nokaut 100 timova · uskoro",
      "title": "Matrica kostura 100 timova",
      "statusUnavailable": "Prijave se otvaraju uskoro. Do tada kostur prikazuje pregledne klanove.",
      "statusEmpty": "Prijave se otvaraju uskoro. Do tada kostur prikazuje pregledne klanove.",
      "statusStored": "{count} prijavljenih klanova smješta se prvo. Preostala mjesta prikazuju pregledne klanove. Kasnija kola popunjavaju se kako se mečevi bilježe.",
      "openSlot": "Otvoreno mjesto",
      "openCompetitorSlot": "Otvoreno natjecateljsko mjesto",
      "openRoster": "Otvori postavu za {name}",
      "bye": "👑 [SLOBODAN PROLAZ - NOSITELJ 2. KOLA]",
      "championStage": "PRVAČKA FAZA",
      "leftWing": "Lijevo krilo",
      "rightWing": "Desno krilo",
      "emptySlotNotice": "Ovo natjecateljsko mjesto je prazno. Još nema spremljenog klana.",
      "grandFinalNotice": "Veliko finale ostaje otvoreno dok se oba polufinala ne zabilježe.",
      "rounds": {
        "r128": "R1",
        "r64": "R64",
        "r32": "R32",
        "r16": "R16",
        "qf": "QF",
        "sf": "SF"
      }
    },
    "profile": {
      "closeBackdrop": "Zatvori profil tima",
      "kicker": "Profil prvenstva · pregled",
      "matchesPlayed": "Odigrani mečevi",
      "winRate": "Ukupni postotak pobjeda",
      "streak": "Aktivni turnirski niz",
      "rosterHeading": "Matrica postave od 5 igrača",
      "openSeat": "Otvoreno mjesto {seat}",
      "noPlayer": "Nema spremljenog igrača",
      "previous": "Prethodni klan",
      "count": "Klan {index} od {total}",
      "next": "Sljedeći klan",
      "close": "Zatvori profil",
      "disclosure": "Postavke i inventari igrača pojavljuju se ovdje kad ih igrači odluče podijeliti. A.C.E. ne prikuplja hardverske podatke."
    },
    "player": {
      "level": "RAZ {level} · RP {rating}",
      "record": "P–P {wins}–{losses}",
      "kdNotStored": "K/D nije spremljen",
      "openProfileAria": "Otvori profil za {name}",
      "openProfile": "Otvori profil",
      "badge": "SPREMAN / USKLAĐEN S ANTI-CHEATOM",
      "badgeNote": "A.C.E Shield provjera · uskoro",
      "gear": {
        "processor": "CPU",
        "gpu": "GPU",
        "mouse": "Miš",
        "dpi": "DPI",
        "keyboard": "Tipkovnica",
        "monitor": "Monitor",
        "headset": "Slušalice"
      }
    }
  },
  "gearPlaceholder": {
    "processor": "CPU · nije podijeljeno",
    "gpu": "GPU · nije podijeljeno",
    "mouse": "Miš · nije podijeljeno",
    "dpi": "DPI · nije podijeljeno",
    "keyboard": "Nije podijeljeno",
    "monitor": "Frekvencija osvježavanja · nije podijeljeno",
    "headset": "Nije podijeljeno"
  },
  "profileDisclosure": "A.C.E. ne sprema hardverske inventare i ne pokreće anti-cheat klijent. Grafovi trendova izvedbe i borbena matrica zahtijevaju A.C.E. Plus ili Premium sesiju. Poveznica Steam profila upisana na ovoj stranici ne sprema se i nije službeni identifikator.",
  "errors": {
    "signInRequired": "Potrebna je prijava.",
    "nameLength": "Ime tima mora imati između 2 i 32 znaka.",
    "alreadyCaptain": "Ovaj račun već je kapetan tima.",
    "nameTaken": "Tim s tim imenom već postoji.",
    "idRequired": "Potreban je SteamID ili A.C.E. ID računa.",
    "noAccountForToken": "Za taj SteamID ili ID računa ne postoji A.C.E. račun.",
    "clanNeedsFour": "Klan od pet igrača treba prijavljenog kapetana i četiri SteamID-a.",
    "seatNeedsId": "Svako od četiri mjesta treba SteamID ili A.C.E. ID računa.",
    "seatsDistinct": "Svako mjesto treba drugog igrača.",
    "captainHoldsSeat": "Kapetan već drži mjesto 1. Koristi četiri druga igrača.",
    "fewerThanFour": "Ti ID-jevi pripadaju manje od četiri računa.",
    "selfInvite": "Kapetan ne može pozvati vlastiti račun.",
    "captainOnly": "Samo imenovani kapetan može slati pozivnice.",
    "rosterLimit": "CS2 postava ima pet igrača uključujući kapetana.",
    "alreadyOnRoster": "Taj igrač je već u postavi.",
    "noAccountForId": "Za taj ID ne postoji A.C.E. račun.",
    "inviteNotFound": "Pozivnica nije pronađena.",
    "inviteNotPending": "Ova pozivnica više nije na čekanju.",
    "rosterFull": "Postava je već puna.",
    "createFailed": "Tim nije moguće stvoriti.",
    "inviteFailed": "Pozivnica nije uspjela.",
    "updateInviteFailed": "Pozivnicu nije moguće ažurirati."
  }
};
