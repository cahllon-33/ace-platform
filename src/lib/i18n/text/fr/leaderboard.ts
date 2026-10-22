import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  "meta": {
    "title": "Classement",
    "description": "Tableau compétitif A.C.E. Les comptes Steam enregistrés apparaissent en premier. Les places vides restent des lignes de vitrine."
  },
  "hero": {
    "kicker": "CLASSEMENT",
    "title": "Tableau compétitif",
    "note": "Tant que les joueurs n'ont pas lié Steam et obtenu un classement, ce tableau affiche des places de vitrine. Leur pays et leur arme mise en avant sont illustratifs. Les rendus d'armes sont des créations originales du studio A.C.E, pas des skins Valve. Les éliminations ne sont pas encore enregistrées : l'arme mise en avant n'est donc pas une statistique de meilleur fragger."
  },
  "facts": {
    "seats": "Places",
    "storedAccounts": "Comptes enregistrés",
    "killsStored": "Éliminations enregistrées",
    "none": "Aucune"
  },
  "empty": "Aucune place de vitrine ne correspond à ce nom.",
  "podiumLabel": "Trois premières places",
  "boardLabel": "Tableau compétitif",
  "table": {
    "rank": "Rang",
    "player": "Joueur",
    "country": "Pays",
    "tier": "Palier",
    "leadWeapon": "Arme principale",
    "rating": "Cote"
  },
  "tags": {
    "stored": "Compte enregistré",
    "showcase": "Vitrine"
  },
  "weapon": {
    "sampleRender": "Arme emblématique",
    "notStored": "Non enregistré",
    "noKillSaved": "Aucune élimination enregistrée",
    "alt": "{name}"
  },
  "countries": {
    "il": "Israël",
    "us": "États-Unis",
    "de": "Allemagne",
    "ua": "Ukraine",
    "se": "Suède",
    "fr": "France",
    "pl": "Pologne",
    "br": "Brésil",
    "jp": "Japon",
    "kr": "Corée du Sud"
  },
  "search": {
    "openLabel": "Ouvrir la recherche de joueurs",
    "srLabel": "Rechercher dans le classement",
    "fieldLabel": "Rechercher des joueurs",
    "placeholder": "Nom d'affichage"
  }
};
