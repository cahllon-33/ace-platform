import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  meta: {
    title: "A.C.E. — Plateforme CS2 compétitive",
    description:
      "A.C.E. est une plateforme compétitive Counter-Strike 2 prévue pour l'identité des joueurs, le calibrage, les équipes et les tournois. Ce site public est un aperçu. Le matchmaking classé, l'anti-triche, les paiements et les prix ne sont pas actifs.",
  },
  opening: {
    dialogLabel: "Ouverture d'A.C.E.",
    line: "A.C.E : Anti-Cheat autonome, calibrage compétitif, joueurs d'élite",
    enter: "Entrer sur le site",
  },
  hero: {
    logoAlt: "A.C.E. Anti-Cheat autonome, calibrage compétitif, joueurs d'élite",
    arenaAlt:
      "Plaque d'arène A.C.E. Image de scène originale, pas une illustration Valve. L'écran est intitulé télévision des matchs. La diffusion en direct est coupée.",
  },
  broadcast: {
    kicker: "SUIVI DES TOURNOIS",
    title: "Régie de diffusion",
    lede: "Le pool de cartes compétitif est posé sur cette régie : Dust II, Mirage, Inferno, Nuke, Ancient, Anubis et Train. Ce sont des plaques originales. Aucun tournoi n'est à l'antenne, et cette page ne diffuse aucun match Valve.",
    offAir: "HORS ANTENNE · {map}",
  },
  jumpNav: {
    label: "Catégories de l'accueil",
    play: "Jouer",
    prizes: "Prix",
    teams: "Équipes",
    leaderboard: "Classement",
    ranks: "Rangs",
    systems: "Systèmes",
  },
  charter: {
    kicker: "ESPACE PRINCIPAL DU LOBBY",
    title: "LOBBY DE MATCHMAKING COMPÉTITIF ET CENTRE DE RÉPARTITION A.C.E.",
    badge: "SERVEURS · BIENTÔT",
    lede: "Ce lobby n'attribue aucun serveur, ne lance aucun client anti-triche et ne verse aucun prix.",
    modules: [
      {
        kicker: "MATCH TROUVÉ · 5v5",
        copy: "Le cadre 5v5 de cette page est une file fermée. Il n'attribue aucun serveur.",
        chips: ["AUCUN SERVEUR 128-TICK", "FILE FERMÉE"],
      },
      {
        kicker: "RANGS 3D FIXES",
        copy: "Dix paliers, de Recruit jusqu'à A.C.E. Legend. Une cote enregistrée apparaît après la connexion Steam. Cette page n'applique aucun match.",
        chips: ["RÈGLE DE COTE ÉTABLIE", "PLATEAU TOURNANT SUR CETTE PAGE"],
      },
      {
        kicker: "RÉCOMPENSES DE SKINS",
        copy: "Les récompenses de championnat sont annoncées avec chaque événement.",
        chips: ["AUCUN OBJET LIVRÉ", "AUCUNE VÉRIFICATION DE DROP"],
      },
    ],
  },
  identity: {
    profilePlaceholder: "[Profil_Joueur]",
    notAvailable: "n.d.",
    elite: "ÉLITE",
  },
  membership: {
    compareLink: "Voir le tableau comparatif complet",
  },
  loot: {
    exampleCard: "Bientôt",
    wear: {
      factoryNew: "Neuve",
      minimalWear: "Très peu usée",
    },
  },
  serverHub: {
    badge: "SERVEURS DE JEU · BIENTÔT",
    nodes: {
      fra: "Périphérie de Francfort",
      sto: "Cœur de Stockholm",
      tlv: "Relais de Tel-Aviv",
    },
    tileAria: "{name}. Serveur bientôt disponible.",
    tileSample: "Bientôt · {sample}",
    note: "Les serveurs régionaux 128 ticks arriveront avec la bêta compétitive.",
  },
  telemetry: {
    badge: "APERÇU · BIENTÔT",
    lines: [
      "A.C.E SHIELD : EN DÉVELOPPEMENT",
      "MATRICE DE BAN MATÉRIEL : AUCUN IDENTIFIANT N'EST COLLECTÉ",
      "LIEN BOUCLIER A.C.E. : AUCUN CLIENT N'EST INSTALLÉ",
    ],
    note: "Ce site n'exécute aucun client noyau, n'analyse pas la mémoire et ne prononce aucun ban matériel.",
  },
  comingSoon: {
    badge: "NON DISPONIBLE",
    body: "Le client de bureau A.C.E. n'est pas proposé au téléchargement. La saison 1 sur ce site n'installe aucun logiciel et n'ouvre aucun enregistrement.",
  },
  operative: {
    kicker: "Vue tactique cinématique · environnement CSS original · pas une illustration Valve",
    title: "Allez plus loin dans CS2 : la plateforme compétitive ultime",
    lede: "Des matchs plus équitables, de meilleurs coéquipiers. Des rangs qui comptent, des récompenses qui comptent.",
    note: "Texte de campagne. Les files classées, les serveurs en direct et les prix ne sont pas actifs.",
    hudLeft: "CT — ZONE A",
    hudRight: "T — POUSSÉE MID",
    hudCenter: "ENVIRONNEMENT DE L'ESCOUADE",
    plannedReason: "Le jeu classé reste fermé tant qu'une vraie intégration anti-triche n'est pas mise en œuvre et vérifiée.",
  },
  howStatus: {
    label: "SOUS-SYSTÈME D'INSCRIPTION A.C.E. — MOTEUR DE CALIBRAGE PRÊT",
    note: "Les files classées ouvriront quand A.C.E Shield et la calibration seront actifs.",
  },
  shell: {
    primaryNav: "Principale",
    mobileNav: "Mobile",
    elite: "ÉLITE",
    notificationsTitle: "Notifications · bientôt",
    notificationsAria: "Notifications. Zéro non lue.",
    connectProfileTitle: "Connecter le profil",
    openProfileAria: "Ouvrir le profil du poste de commandement",
    connectProfileAria: "Connecter le profil via Steam OpenID",
    signOutAria: "Se déconnecter d'A.C.E.",
  },
  notFound: {
    kicker: "EXCEPTION DE GRILLE",
    title: "ERREUR 404 — TÉLÉMÉTRIE RADAR PERDUE",
    body: "Les coordonnées demandées n'existent pas dans notre grille de serveurs active.",
    homeAria: "Retourner au lobby de l'accueil A.C.E.",
    cta: "RETOUR AU LOBBY",
  },
  error: {
    kicker: "Erreur",
    title: "Un problème est survenu",
    body: "Cette page publique n'a pas pu être affichée. Vous pouvez réessayer. Aucune donnée de compte n'a été demandée sur ce site d'aperçu.",
    retryAria: "Recharger cette page",
    retry: "Réessayer",
  },
};
