import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "Mercado A.C.E.",
      description:
        "Cards de recompensas do campeonato. A loja e as recompensas abrem em breve.",
    },
    heroHonesty:
      "Uma primeira olhada nas próximas recompensas do campeonato. A loja abre em breve; nada é cobrado hoje.",
    prizeBanner: "🏆 RECOMPENSAS DO CAMPEONATO · EM BREVE",
    notice:
      "Estas vitrines são prévias sem valor monetário. Nada é entregue nem cobrado, e o botão de inspecionar não inicia uma compra.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ DROPS SECRETOS DA CLASSIFICAÇÃO",
        price: "Em breve",
      },
      jungle: {
        name: "M4A1-S | Welcome to the Jungle",
        tag: "★ NÍVEL DE MELHORIA CONFIDENCIAL",
        price: "Apenas exemplo · sem valor em dinheiro",
      },
      karambit: {
        name: "Karambit | Lore",
        tag: "★ DROP ESPECIAL SECRETO",
        price: "Apenas exemplo · sem valor em dinheiro",
      },
      crown: {
        name: "Moldura de avatar Coroa A.C.E.",
        tag: "Enfeite de perfil",
        price: "Incluído no plano Premium ou {rp} RP",
      },
      shimmer: {
        name: "Brilho laser dourado de perfil",
        tag: "Personalização do chat",
        price: "Incluído no plano Premium ou {rp} RP",
      },
      pass: {
        name: "Passe dourado de torneio Premium",
        tag: "Token de acesso à liga",
        price: "{rp} RP / Inscrição prioritária",
      },
    },
  },
  support: {
    meta: {
      title: "Suporte",
      description:
        "Central de ajuda A.C.E. O suporte de anti-cheat, ranqueadas e cobrança abre com a beta competitiva.",
    },
  },
  contact: {
    meta: {
      title: "Contato",
      description:
        "Fale com a A.C.E. O formulário online abre em breve.",
    },
  },
  contactEmail: {
    label: "DEFINIR E-MAIL DE TELEMETRIA VERIFICADO",
    hintSignedIn:
      "Salva apenas na conta conectada. Nenhuma mensagem de confirmação é enviada, então o endereço não é verificado.",
    hintSignedOut: "Entre com a Steam para salvar um e-mail de contato na sua conta.",
    saving: "SALVANDO",
    save: "SALVAR E-MAIL DE CONTATO",
    results: {
      signInFirst: "Entre com a Steam antes de salvar um e-mail de contato.",
      invalid: "Digite um único endereço de e-mail ou deixe o campo vazio para limpá-lo.",
      failed: "Esse endereço já está salvo em outra conta, ou o banco de dados está indisponível.",
      saved: "Endereço de contato salvo nesta conta. Nenhuma mensagem de confirmação foi enviada, então ele não é verificado.",
      cleared: "Endereço de contato removido.",
    },
  },
};
