import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  meta: {
    title: "Classement",
    description:
      "Tableau compétitif A.C.E. Les comptes Steam enregistrés apparaissent en premier. Les places vides restent des lignes de vitrine.",
  },
  hero: {
    kicker: "CLASSEMENT",
    title: "Tableau compétitif",
    note: "Des places de vitrine remplissent ce tableau tant qu'aucun compte Steam n'est enregistré. Une cote enregistrée les remplace. Le pays et l'arme principale sont des échantillons. Les rendus d'armes sont des images originales du studio A.C.E., pas des skins Valve. Ce site n'enregistre pas les éliminations, donc l'arme n'est pas une arme de meilleur fragger enregistrée.",
  },
  facts: {
    seats: "Places",
    storedAccounts: "Comptes enregistrés",
    killsStored: "Éliminations enregistrées",
    none: "Aucune",
  },
  empty: "Aucune place de vitrine ne correspond à ce nom.",
  podiumLabel: "Trois premières places",
  boardLabel: "Tableau compétitif",
  table: {
    rank: "Rang",
    player: "Joueur",
    country: "Pays",
    tier: "Palier",
    leadWeapon: "Arme principale",
    rating: "Cote",
  },
  tags: {
    stored: "Compte enregistré",
    showcase: "Vitrine",
  },
  weapon: {
    sampleRender: "Rendu d'exemple",
    notStored: "Non enregistré",
    noKillSaved: "Aucune élimination enregistrée",
    alt: "Rendu d'exemple : {name}",
  },
  countries: {
    il: "Israël",
    us: "États-Unis",
    de: "Allemagne",
    ua: "Ukraine",
    se: "Suède",
    fr: "France",
    pl: "Pologne",
    br: "Brésil",
    jp: "Japon",
    kr: "Corée du Sud",
  },
  search: {
    openLabel: "Ouvrir la recherche de joueurs",
    srLabel: "Rechercher dans le classement",
    fieldLabel: "Rechercher des joueurs",
    placeholder: "Nom d'affichage",
  },
  seasonPreview: {
    banner: "ÉCHELLE DE LA SAISON 1 — MISE EN PAGE",
    noteLive:
      "Les noms liés à Steam sont des comptes enregistrés. Les places vides restent marquées vitrine. Le K/D n'est pas enregistré, donc cette jauge est une mise en page.",
    noteSample:
      "Échantillon de mise en page. 0 enregistrement classé en direct. Ces chiffres ne sont pas un résultat de saison, et le K/D n'est pas enregistré.",
  },
  playerCard: {
    kicker: "Aperçu de carte authentifiée · chiffres fictifs",
    title: "Dossier de l'opérateur",
    badge: "Premium",
    note: "Mise en page uniquement. Ces chiffres ne sont ni une saison en direct, ni un Elo en direct, ni un compte connecté. Le matchmaking classé n'est pas actif.",
    currentRank: "Rang actuel",
    rankValue: "A.C.E. Legend (Division I)",
    competitiveRating: "Classement compétitif",
    seasonRank: "Rang de saison",
    seasonTop: "(Top {percent})",
  },
};
