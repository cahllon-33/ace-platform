import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "Mercado A.C.E.",
      description:
        "Cartões de armas como exemplo de prêmio. Não são itens da Valve, não são uma recompensa financiada, e o pagamento não cobra nenhum cartão.",
    },
    heroHonesty:
      "Os cartões de armas são exemplos de prêmio. Não são itens da Valve, não estão em um inventário, e o pagamento nesta página não cobra nenhum cartão.",
    prizeBanner: "🏆 EXEMPLO DE PRÊMIO DE TORNEIO — VITRINE DE RECOMPENSAS PREMIUM",
    notice:
      "Estas vitrines não têm valor em dinheiro. Nenhuma skin é entregue, nenhum prêmio é financiado, e o botão de inspecionar não inicia uma compra.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ DROPS SECRETOS DA CLASSIFICAÇÃO",
        price: "Apenas exemplo · sem valor em dinheiro",
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
        "Layout da central de ajuda da A.C.E. As centrais de Anti-Cheat, filas ranqueadas e cobrança não estão ativas. As solicitações de chamado não criam casos.",
    },
  },
  contact: {
    meta: {
      title: "Contato",
      description:
        "Terminal de contato corporativo da A.C.E. Os envios do formulário são simulações de teste e não enviam e-mail nem armazenam telemetria.",
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
