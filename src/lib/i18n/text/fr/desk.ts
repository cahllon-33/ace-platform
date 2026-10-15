import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "Marché A.C.E.",
      description:
        "Cartes de récompenses de championnat. La boutique et les récompenses ouvriront bientôt.",
    },
    heroHonesty:
      "Un premier aperçu des prochaines récompenses de championnat. La boutique ouvrira bientôt ; rien n'est débité aujourd'hui.",
    prizeBanner: "🏆 RÉCOMPENSES DE CHAMPIONNAT · BIENTÔT",
    notice:
      "Ces vitrines sont des aperçus sans valeur monétaire. Rien n'est livré ni facturé, et le bouton d'inspection ne lance aucun achat.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ DROPS SECRETS DU CLASSEMENT",
        price: "Bientôt",
      },
      jungle: {
        name: "M4A1-S | Welcome to the Jungle",
        tag: "★ PALIER D'AMÉLIORATION CLASSIFIÉ",
        price: "Exemple uniquement · aucune valeur monétaire",
      },
      karambit: {
        name: "Karambit | Lore",
        tag: "★ DROP SPÉCIAL SECRET",
        price: "Exemple uniquement · aucune valeur monétaire",
      },
      crown: {
        name: "Cadre d'avatar Couronne A.C.E.",
        tag: "Ornement de profil",
        price: "Bientôt",
      },
      shimmer: {
        name: "Scintillement laser doré du profil",
        tag: "Personnalisation du chat",
        price: "Bientôt",
      },
      pass: {
        name: "Pass doré de tournoi",
        tag: "Jeton d'accès à la ligue",
        price: "Bientôt",
      },
    },
  },
  support: {
    meta: {
      title: "Assistance",
      description:
        "Centre d'aide A.C.E. Le support anti-triche, classé et facturation ouvrira avec la bêta compétitive.",
    },
  },
  contact: {
    meta: {
      title: "Contact",
      description:
        "Contacter A.C.E. Le formulaire en ligne ouvrira bientôt.",
    },
  },
  contactEmail: {
    label: "DÉFINIR L'E-MAIL DE TÉLÉMÉTRIE VÉRIFIÉ",
    hintSignedIn:
      "Enregistre uniquement sur le compte connecté. Aucun message de confirmation n'est envoyé, donc l'adresse n'est pas vérifiée.",
    hintSignedOut: "Connectez-vous avec Steam pour enregistrer un e-mail de contact sur votre compte.",
    saving: "ENREGISTREMENT",
    save: "ENREGISTRER L'E-MAIL DE CONTACT",
    results: {
      signInFirst: "Connectez-vous avec Steam avant d'enregistrer un e-mail de contact.",
      invalid: "Saisissez une seule adresse e-mail, ou laissez le champ vide pour l'effacer.",
      failed: "Cette adresse est déjà enregistrée sur un autre compte, ou la base de données est indisponible.",
      saved: "Adresse de contact enregistrée sur ce compte. Aucun message de confirmation n'a été envoyé, elle n'est donc pas vérifiée.",
      cleared: "Adresse de contact effacée.",
    },
  },
};
