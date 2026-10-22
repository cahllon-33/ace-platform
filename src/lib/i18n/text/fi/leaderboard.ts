import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  "meta": {
    "title": "Tulostaulu",
    "description": "A.C.E:n kilpailutaulu. Tallennetut Steam-tilit näkyvät ensin. Tyhjät paikat pysyvät esittelyriveinä."
  },
  "hero": {
    "kicker": "TULOSTAULU",
    "title": "Kilpailutaulu",
    "note": "Esittelypaikat täyttävät taulun, kunnes pelaajat yhdistävät Steamin ja ansaitsevat luokituksen. Heidän maansa ja esitelty aseensa ovat havainnollisia. Aserenderöinnit ovat alkuperäistä A.C.E-studiotaidetta, eivät Valven skinejä. Tappoja ei vielä seurata, joten esitelty ase ei ole top-frag-tilasto."
  },
  "facts": {
    "seats": "Paikat",
    "storedAccounts": "Tallennetut tilit",
    "killsStored": "Tallennetut tapot",
    "none": "Ei yhtään"
  },
  "empty": "Mikään esittelypaikka ei vastaa nimeä.",
  "podiumLabel": "Kolme parasta paikkaa",
  "boardLabel": "Kilpailutaulu",
  "table": {
    "rank": "Sija",
    "player": "Pelaaja",
    "country": "Maa",
    "tier": "Taso",
    "leadWeapon": "Pääase",
    "rating": "Luokitus"
  },
  "tags": {
    "stored": "Tallennettu tili",
    "showcase": "Esittely"
  },
  "weapon": {
    "sampleRender": "Tunnusase",
    "notStored": "Ei tallennettu",
    "noKillSaved": "Tappoa ei ole tallennettu",
    "alt": "{name}"
  },
  "countries": {
    "il": "Israel",
    "us": "Yhdysvallat",
    "de": "Saksa",
    "ua": "Ukraina",
    "se": "Ruotsi",
    "fr": "Ranska",
    "pl": "Puola",
    "br": "Brasilia",
    "jp": "Japani",
    "kr": "Etelä-Korea"
  },
  "search": {
    "openLabel": "Avaa pelaajahaku",
    "srLabel": "Hae tulostaulusta",
    "fieldLabel": "Hae pelaajia",
    "placeholder": "Näyttönimi"
  }
};
