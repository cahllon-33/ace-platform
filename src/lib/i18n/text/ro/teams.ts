import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  "meta": {
    "title": "Gestionarea echipei A.C.E",
    "description": "Spațiul de lucru al echipei tale 5v5. Invitațiile necesită o sesiune Steam verificată; verificările anti-cheat sosesc odată cu A.C.E Shield."
  },
  "hero": {
    "kicker": "ECHIPE",
    "title": "Squads",
    "lede": "Cinci locuri deschise pe un rând. Un clan este stocat doar după autentificarea Steam și crearea unei echipe."
  },
  "gate": {
    "kickerPremium": "Înregistrarea clanului după alegerea planului",
    "kickerDefault": "Înregistrare clan",
    "title": "Sunteți o echipă de cinci?",
    "intro": "Locul 1 este jucătorul autentificat cu Steam. Locurile 2–5 trebuie să aibă deja conturi A.C.E. Salvarea unui clan nu taxează 7 $, nu trimite e-mail și nu plasează clanul pe tabla de 100 de echipe.",
    "yes": "Da, cinci jucători",
    "no": "Nu, lasă locurile deschise",
    "seatsOpen": "Cele cinci locuri rămân deschise. Nimic nu a fost stocat.",
    "connectSteam": "Conectează mai întâi Steam. Butonul revine la această pagină. A.C.E nu cere niciodată parola Steam.",
    "alreadyMember": "{name} aparține deja echipei {team}. Din acest formular nu se creează un al doilea clan.",
    "thisAccount": "Acest cont",
    "acceptTerms": "Acceptă termenii înainte de a salva un clan.",
    "notStored": "Clanul nu a fost stocat.",
    "clanName": "Numele clanului",
    "captainSeat": "Locul 1, căpitan: {name}",
    "signedInSteam": "Contul Steam autentificat",
    "seatLabel": "SteamID sau ID de cont A.C.E pentru locul {seat}",
    "submit": "Stochează clanul de cinci jucători",
    "saved": "Numele clanului este stocat și patru invitații sunt în așteptare. Acei jucători nu sunt în lot până nu acceptă. Acesta nu este un loc pe tabla de 100 de echipe. Nu s-a taxat nimic."
  },
  "squadDesk": {
    "kicker": "Ghișeul echipei",
    "title": "Întrebări din regulile scrise",
    "intro": "Acest ghișeu citește doar faptele publicate pe această pagină. Nu detectează cheaturi, nu deschide un meci și nu modifică un cont.",
    "questionLabel": "Întrebare",
    "placeholder": "Întreabă despre cele cinci locuri, planuri sau suport",
    "ask": "Întreabă",
    "fallback": "Acest birou răspunde doar din regulile scrise pe această pagină: planuri, cele cinci locuri, Steam OpenID și suport.",
    "facts": {
      "email": "Nu se trimite niciun e-mail. Chitanțele planurilor rămân pe acest site.",
      "charge": "Premium costă 7 $ pe lună prin checkout-ul Paddle.",
      "board": "Un clan stocat este o înregistrare de lot. Nu este plasat pe tabla de 100 de echipe. Tabla arată încă 0 înscrise până se deschide un sezon.",
      "steam": "Autentificarea folosește Steam OpenID oficial. A.C.E nu cere niciodată parola Steam. De pe această pagină, Steam revine aici.",
      "roster": "Locul 1 este căpitanul autentificat. Locurile 2–5 trebuie să aibă deja conturi A.C.E. Invitațiile rămân în așteptare până când fiecare jucător acceptă.",
      "badge": "Insignele locurilor devin verificări A.C.E Shield live când se lansează anti-cheatul.",
      "support": "Deschide Asistență sau Contact pe acest site. O solicitare de asistență nu deschide un tichet, iar textul scris pe Contact nu este livrat.",
      "rating": "Un rating nou începe de la 1.200. Această pagină nu vinde rating, nu deschide o coadă, nu conectează un server CS2 și nu livrează premii."
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
    "noAgents": "Încă nu sunt stocați jucători fără echipă.",
    "notice": "Invitațiile se trimit doar de la un căpitan autentificat. Insigna de pe un loc nu este o verificare anti-cheat live."
  },
  "tournaments": {
    "meta": {
      "title": "Campionatul A.C.E — Eliminatorii de elită cu 100 de echipe",
      "description": "Eliminatoriile cu 100 de echipe. Apasă pe un clan pentru a-i deschide lotul, apoi fiecare profil de jucător. Înscrierile se deschid în curând."
    },
    "intro": {
      "title": "CAMPIONATUL A.C.E — ELIMINATORII DE ELITĂ CU 100 DE ECHIPE",
      "lede": "Câmpul publicat este o eliminatorie cu 100 de echipe. Graficul de mai jos este acea machetă. Apăsarea pe un clan deschide sertarul lotului. Înscrieri: 0 din 100. Nu se anunță și nu se finanțează un premiu în bani.",
      "formatValue": "Matricea tabloului cu 100 de echipe",
      "briefTitle": "Brief operațional pentru 100 de echipe",
      "briefBody": "O singură machetă competitivă acoperă întregul câmp de 100 de echipe. Când se deschid înscrierile, primele 28 de clanuri acceptate primesc bye în Runda 1 și avansează în Runda 2. Celelalte 72 de clanuri joacă Runda 1. Numele de pe locurile neocupate sunt substituenți până la înscrierea clanurilor. Regulamentul complet se află sub arbore. Lobby-urile de meci se deschid odată cu beta competitivă, iar premiile se confirmă pe eveniment."
    },
    "bracket": {
      "kicker": "Eliminatorii cu 100 de echipe · în curând",
      "title": "Matricea tabloului cu 100 de echipe",
      "statusUnavailable": "Înscrierile se deschid în curând. Până atunci tabloul arată clanuri de previzualizare.",
      "statusEmpty": "Înscrierile se deschid în curând. Până atunci, tabloul arată clanuri de previzualizare.",
      "statusStored": "{count} clanuri înscrise sunt plasate primele. Locurile rămase arată clanuri de previzualizare. Rundele următoare se completează pe măsură ce meciurile sunt înregistrate.",
      "openSlot": "Loc liber",
      "openCompetitorSlot": "Loc de competitor liber",
      "openRoster": "Deschide lotul pentru {name}",
      "bye": "👑 [BYE - CAP DE SERIE ÎN RUNDA 2]",
      "championStage": "ETAPA CAMPIONILOR",
      "leftWing": "Aripa stângă",
      "rightWing": "Aripa dreaptă",
      "emptySlotNotice": "Acest loc de competitor este gol. Încă nu este stocat niciun clan.",
      "grandFinalNotice": "Marea finală rămâne deschisă până când ambele semifinale sunt înregistrate.",
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
      "closeBackdrop": "Închide profilul echipei",
      "kicker": "Profil de campionat · previzualizare",
      "matchesPlayed": "Meciuri jucate",
      "winRate": "Rată combinată de victorii",
      "streak": "Serie activă în turneu",
      "rosterHeading": "Matricea lotului de 5 jucători",
      "openSeat": "Loc liber {seat}",
      "noPlayer": "Niciun jucător stocat",
      "previous": "Clanul anterior",
      "count": "Clanul {index} din {total}",
      "next": "Clanul următor",
      "close": "Închide profilul",
      "disclosure": "Configurațiile și inventarele jucătorilor apar aici când jucătorii aleg să le împărtășească. A.C.E nu colectează date hardware."
    },
    "player": {
      "level": "NIV {level} · RP {rating}",
      "record": "V–Î {wins}–{losses}",
      "kdNotStored": "K/D nestocat",
      "openProfileAria": "Deschide profilul lui {name}",
      "openProfile": "Deschide profilul",
      "badge": "PREGĂTIT / CONFORM ANTI-CHEAT",
      "badgeNote": "Verificare A.C.E Shield · în curând",
      "gear": {
        "processor": "CPU",
        "gpu": "GPU",
        "mouse": "Mouse",
        "dpi": "DPI",
        "keyboard": "Tastatură",
        "monitor": "Monitor",
        "headset": "Căști"
      }
    }
  },
  "gearPlaceholder": {
    "processor": "CPU · nedistribuit",
    "gpu": "GPU · nedistribuit",
    "mouse": "Mouse · nedistribuit",
    "dpi": "DPI · nedistribuit",
    "keyboard": "Nedistribuit",
    "monitor": "Rată de reîmprospătare · nedistribuit",
    "headset": "Nedistribuit"
  },
  "profileDisclosure": "A.C.E nu stochează inventare hardware și nu rulează un client anti-cheat. Graficele de tendință a performanței și matricea de luptă necesită o sesiune A.C.E Plus sau Premium. Un link de profil Steam scris pe această pagină nu este salvat și nu este un identificator oficial.",
  "errors": {
    "signInRequired": "Autentificare necesară.",
    "nameLength": "Numele echipei trebuie să aibă între 2 și 32 de caractere.",
    "alreadyCaptain": "Acest cont este deja căpitanul unei echipe.",
    "nameTaken": "Există deja o echipă cu acest nume.",
    "idRequired": "Este necesar un SteamID sau un ID de cont A.C.E.",
    "noAccountForToken": "Nu există niciun cont A.C.E pentru acel SteamID sau ID de cont.",
    "clanNeedsFour": "Un clan de cinci jucători are nevoie de căpitanul autentificat plus patru SteamID-uri.",
    "seatNeedsId": "Fiecare dintre cele patru locuri are nevoie de un SteamID sau ID de cont A.C.E.",
    "seatsDistinct": "Fiecare loc are nevoie de un jucător diferit.",
    "captainHoldsSeat": "Căpitanul ocupă deja locul 1. Folosește alți patru jucători.",
    "fewerThanFour": "Acele ID-uri aparțin la mai puțin de patru conturi.",
    "selfInvite": "Un căpitan nu își poate invita propriul cont.",
    "captainOnly": "Doar căpitanul desemnat poate trimite invitații.",
    "rosterLimit": "Un lot CS2 are cinci jucători, inclusiv căpitanul.",
    "alreadyOnRoster": "Acel jucător este deja în lot.",
    "noAccountForId": "Nu există niciun cont A.C.E pentru acel ID.",
    "inviteNotFound": "Invitația nu a fost găsită.",
    "inviteNotPending": "Această invitație nu mai este în așteptare.",
    "rosterFull": "Lotul este deja complet.",
    "createFailed": "Nu s-a putut crea echipa.",
    "inviteFailed": "Invitația a eșuat.",
    "updateInviteFailed": "Invitația nu a putut fi actualizată."
  }
};
