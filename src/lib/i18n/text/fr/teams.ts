import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  "meta": {
    "title": "Gestion d'escouade A.C.E",
    "description": "Votre espace d'escouade 5v5. Les invitations exigent une session Steam vérifiée ; les contrôles anti-triche arriveront avec A.C.E Shield."
  },
  "hero": {
    "kicker": "ÉQUIPES",
    "title": "Escouades",
    "lede": "Cinq places libres alignées. Un clan n'est enregistré qu'après la connexion Steam et la création d'une équipe."
  },
  "gate": {
    "kickerPremium": "Fiche de clan après ton choix d’offre",
    "kickerDefault": "Fiche de clan",
    "title": "Formez-vous une équipe de cinq ?",
    "intro": "La place 1 est le joueur connecté avec Steam. Les places 2 à 5 doivent déjà avoir un compte A.C.E. Enregistrer un clan ne facture pas $7, n'envoie pas d'e-mail et ne place pas le clan sur le tableau de 100 équipes.",
    "yes": "Oui, cinq joueurs",
    "no": "Non, laisser les places libres",
    "seatsOpen": "Les cinq places restent libres. Rien n'a été enregistré.",
    "connectSteam": "Connectez d'abord Steam. Le bouton revient sur cette page. A.C.E ne demande jamais un mot de passe Steam.",
    "alreadyMember": "{name} appartient déjà à {team}. Ce formulaire ne crée pas de second clan.",
    "thisAccount": "Ce compte",
    "acceptTerms": "Acceptez les conditions avant d'enregistrer un clan.",
    "notStored": "Le clan n'a pas été enregistré.",
    "clanName": "Nom du clan",
    "captainSeat": "Place 1, capitaine : {name}",
    "signedInSteam": "Compte Steam connecté",
    "seatLabel": "SteamID ou ID de compte A.C.E de la place {seat}",
    "submit": "Enregistrer le clan de cinq joueurs",
    "saved": "Le nom du clan est enregistré et quatre invitations sont en attente. Ces joueurs ne font pas partie de l'effectif tant qu'ils n'ont pas accepté. Ce n'est pas une place sur le tableau de 100 équipes. Rien n'a été facturé."
  },
  "squadDesk": {
    "kicker": "Bureau d'escouade",
    "title": "Questions sur les règles écrites",
    "intro": "Ce bureau ne lit que les faits publiés sur cette page. Il ne détecte pas de triche, n'ouvre aucun match et ne modifie aucun compte.",
    "questionLabel": "Question",
    "placeholder": "Pose une question sur les cinq places, les offres ou le support",
    "ask": "Demander",
    "fallback": "Ce guichet répond uniquement à partir des règles écrites sur cette page : les offres, les cinq places, Steam OpenID et le support.",
    "facts": {
      "email": "Aucun e-mail n’est envoyé. Les reçus d’offre restent sur ce site.",
      "charge": "Premium coûte $7 par mois. Bientôt disponible : il n'y a pas encore de paiement, donc rien n'est facturé.",
      "board": "Un clan enregistré est une fiche d'effectif. Il n'est pas placé sur le tableau de 100 équipes. Ce tableau affiche toujours 0 inscrite tant qu'aucune saison n'est ouverte.",
      "steam": "La connexion utilise le Steam OpenID officiel. A.C.E ne demande jamais un mot de passe Steam. Depuis cette page, Steam vous ramène ici.",
      "roster": "La place 1 est le capitaine connecté. Les places 2 à 5 doivent déjà avoir un compte A.C.E. Les invitations restent en attente jusqu'à ce que chaque joueur accepte.",
      "badge": "Les badges de place deviendront de vrais contrôles A.C.E Shield au lancement de l'anti-triche.",
      "support": "Ouvrez Assistance ou Contact sur ce site. Une invite d'assistance n'ouvre pas de ticket, et le texte saisi dans Contact n'est pas transmis.",
      "rating": "Un nouveau classement commence à 1 200. Cette page ne vend pas de classement, n'ouvre pas de file, ne connecte pas de serveur CS2 et ne remet aucun prix."
    }
  },
  "squad": {
    "roles": {
      "awper": "AWPer",
      "entryFragger": "Entry fragger",
      "lurker": "Lurker",
      "igl": "IGL",
      "support": "Soutien"
    },
    "rankLabel": "Rang {level}",
    "noAgents": "Aucun joueur sans équipe n'est encore enregistré.",
    "notice": "Les invitations ne partent que pour un capitaine connecté. Le badge sur une place n'est pas un contrôle anti-triche en direct."
  },
  "tournaments": {
    "meta": {
      "title": "Championnat A.C.E — élimination directe élite à 100 équipes",
      "description": "Le tournoi à élimination de 100 équipes. Cliquez sur un clan pour ouvrir son effectif, puis chaque profil de joueur. Les inscriptions ouvriront bientôt."
    },
    "intro": {
      "title": "CHAMPIONNAT A.C.E — ÉLIMINATION DIRECTE ÉLITE À 100 ÉQUIPES",
      "lede": "Le plateau publié est une élimination directe à 100 équipes. Le graphique ci-dessous en est la maquette. Cliquer sur un clan ouvre le panneau d'effectif. Inscriptions : 0 sur 100. Aucun prix en argent n'est annoncé ni financé.",
      "formatValue": "Matrice de tableau à 100 équipes",
      "briefTitle": "Brief opérationnel à 100 équipes",
      "briefBody": "Un seul format compétitif couvre les 100 équipes. À l'ouverture des inscriptions, les 28 premiers clans acceptés sont exemptés du 1er tour et passent au 2e tour. Les 72 autres clans jouent le 1er tour. Les noms sur les places libres sont provisoires jusqu'à l'inscription des clans. Le règlement complet se trouve sous l'arbre. Les lobbies de match ouvriront avec la bêta compétitive, et les prix sont confirmés pour chaque événement."
    },
    "bracket": {
      "kicker": "Élimination à 100 équipes · bientôt",
      "title": "Matrice de tableau à 100 équipes",
      "statusUnavailable": "Les inscriptions ouvriront bientôt. D'ici là, l'arbre affiche des clans d'aperçu.",
      "statusEmpty": "Les inscriptions ouvriront bientôt. D'ici là, l'arbre affiche des clans d'aperçu.",
      "statusStored": "Les {count} clans inscrits sont placés en premier. Les places restantes affichent des clans d'aperçu. Les tours suivants se remplissent au fil des matchs enregistrés.",
      "openSlot": "Place libre",
      "openCompetitorSlot": "Place de concurrent libre",
      "openRoster": "Ouvrir l'effectif de {name}",
      "bye": "👑 [EXEMPTÉ - TÊTE DE SÉRIE AU TOUR 2]",
      "championStage": "SCÈNE DU CHAMPION",
      "leftWing": "Aile gauche",
      "rightWing": "Aile droite",
      "emptySlotNotice": "Cette place de concurrent est vide. Aucun clan n'est encore enregistré.",
      "grandFinalNotice": "La grande finale reste ouverte jusqu'à l'enregistrement des deux demi-finales.",
      "rounds": {
        "r128": "T1",
        "r64": "1/32",
        "r32": "1/16",
        "r16": "1/8",
        "qf": "1/4",
        "sf": "1/2"
      }
    },
    "profile": {
      "closeBackdrop": "Fermer le profil de l'équipe",
      "kicker": "Profil de championnat · aperçu",
      "matchesPlayed": "Matchs joués",
      "winRate": "Taux de victoire combiné",
      "streak": "Série de tournoi active",
      "rosterHeading": "Matrice d'effectif de 5 joueurs",
      "openSeat": "Place libre {seat}",
      "noPlayer": "Aucun joueur enregistré",
      "previous": "Clan précédent",
      "count": "Clan {index} sur {total}",
      "next": "Clan suivant",
      "close": "Fermer le profil",
      "disclosure": "Les configurations et inventaires des joueurs apparaîtront ici s'ils choisissent de les partager. A.C.E ne collecte aucune donnée matérielle."
    },
    "player": {
      "level": "NIV. {level} · RP {rating}",
      "record": "V–D {wins}–{losses}",
      "kdNotStored": "K/D non enregistré",
      "openProfileAria": "Ouvrir le profil de {name}",
      "openProfile": "Ouvrir le profil",
      "badge": "PRÊT / CONFORME ANTI-TRICHE",
      "badgeNote": "Contrôle A.C.E Shield · bientôt",
      "gear": {
        "processor": "CPU",
        "gpu": "GPU",
        "mouse": "Souris",
        "dpi": "DPI",
        "keyboard": "Clavier",
        "monitor": "Écran",
        "headset": "Casque"
      }
    }
  },
  "gearPlaceholder": {
    "processor": "CPU · non partagé",
    "gpu": "GPU · non partagé",
    "mouse": "Souris · non partagée",
    "dpi": "DPI · non partagé",
    "keyboard": "Non partagé",
    "monitor": "Taux de rafraîchissement · non partagé",
    "headset": "Non partagé"
  },
  "profileDisclosure": "A.C.E n'enregistre pas d'inventaires matériels et n'exécute aucun client anti-triche. Les graphiques de tendance de performance et la matrice de combat exigent une session A.C.E Plus ou Premium. Un lien de profil Steam saisi sur cette page n'est pas enregistré et n'est pas un identifiant officiel.",
  "errors": {
    "signInRequired": "Connexion requise.",
    "nameLength": "Les noms d'équipe doivent comporter entre 2 et 32 caractères.",
    "alreadyCaptain": "Ce compte est déjà capitaine d'une équipe.",
    "nameTaken": "Une équipe portant ce nom existe déjà.",
    "idRequired": "Un SteamID ou un ID de compte A.C.E est requis.",
    "noAccountForToken": "Aucun compte A.C.E n'existe pour ce SteamID ou cet ID de compte.",
    "clanNeedsFour": "Un clan de cinq joueurs nécessite le capitaine connecté plus quatre SteamID.",
    "seatNeedsId": "Chacune des quatre places nécessite un SteamID ou un ID de compte A.C.E.",
    "seatsDistinct": "Chaque place nécessite un joueur différent.",
    "captainHoldsSeat": "Le capitaine occupe déjà la place 1. Utilisez quatre autres joueurs.",
    "fewerThanFour": "Ces ID correspondent à moins de quatre comptes.",
    "selfInvite": "Un capitaine ne peut pas inviter son propre compte.",
    "captainOnly": "Seul le capitaine désigné peut envoyer des invitations.",
    "rosterLimit": "Un effectif CS2 compte cinq joueurs, capitaine compris.",
    "alreadyOnRoster": "Ce joueur fait déjà partie de l'effectif.",
    "noAccountForId": "Aucun compte A.C.E n'existe pour cet ID.",
    "inviteNotFound": "Invitation introuvable.",
    "inviteNotPending": "Cette invitation n'est plus en attente.",
    "rosterFull": "L'effectif est déjà complet.",
    "createFailed": "Impossible de créer l'équipe.",
    "inviteFailed": "L'invitation a échoué.",
    "updateInviteFailed": "Impossible de mettre à jour l'invitation."
  }
};
