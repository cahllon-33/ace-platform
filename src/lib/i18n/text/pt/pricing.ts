import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  meta: {
    title: "Preços",
    description:
      "Subscrição A.C.E.: Gratuito {free}, Plus {plus}/mês, Premium {premium}/mês. Preços de apresentação fixados em valores inteiros.",
  },
  period: {
    monthly: "/mês",
  },
  hero: {
    badge: "Subscrição",
    title: "Níveis de acesso",
    lede: "Gratuito {free}. Plus {plus}/mês. Premium {premium}/mês. Estes valores estão fixados em inteiros. Os planos pagos nunca compram pontuação nem adversários mais fáceis.",
  },
  tiers: {
    free: {
      name: "GRATUITO",
      note: "Grafite",
      title: "Acesso aberto",
      points: [
        "Inicie sessão com o Steam OpenID. A A.C.E. nunca pede a palavra-passe da Steam.",
        "Uma pontuação guardada começa em 1000. Nenhum resultado de partida a alterou.",
        "Todas as páginas públicas: jogar, torneios, classificação, equipas e regras.",
      ],
    },
    plus: {
      name: "A.C.E. PLUS",
      note: "Plus",
      title: "Carta de agradecimento e suporte",
      points: [
        "Tudo o que o Grátis inclui.",
        "Em breve: a carta de agradecimento (o que inclui, o que não inclui e support@ace-platform.gg) só abre quando existir pagamento. Hoje o botão está desativado.",
        "Não compra classificação nem adversários mais fáceis. Os emblemas dourados do perfil resultam dos dados de jogo guardados de cada jogador. O selo de elite e os emblemas especiais só aparecem quando o nível guardado já é Premium.",
      ],
    },
    premium: {
      name: "A.C.E. PREMIUM",
      note: "Premium",
      title: "Carta de agradecimento e equipa de cinco jogadores",
      points: [
        "Tudo o que o Grátis inclui.",
        "Em breve: a carta de agradecimento (o que inclui, o que não inclui e support@ace-platform.gg) só abre quando existir pagamento. Hoje o botão está desativado.",
        "Em breve: após o pagamento, a carta leva ao Squads, onde um capitão com sessão Steam pode guardar um clã de cinco jogadores.",
        "Sem prémio, arma, fila ao vivo nem servidor de jogo. Um clã guardado não é um lugar no quadro de 100 equipas.",
      ],
    },
  },
  card: {
    elite: "ELITE",
    stayFree: "Continuar no Gratuito",
    freeNote: "Disponível agora",
    choose: "Escolher {plan}",
    chooseAria: "Escolher {plan} por {price} por mês",
  },
  billing: {
    kicker: "MATRIZ DO CALENDÁRIO DE FATURAÇÃO",
    title: "Como funcionará a faturação quando existir",
    body: "O Plus custa exatamente {plus}/mês. O Premium custa exatamente {premium}/mês.",
    display: {
      label: "01 · APRESENTAÇÃO",
      body: "Gratuito {free}. Plus {plus}/mês. Premium {premium}/mês. Os níveis pagos nunca compram pontuação nem adversários mais fáceis.",
    },
    rolling: {
      label: "02 · CICLO CONTÍNUO",
      body: "Quando existir faturação, as cobranças renovam-se num ciclo mensal contínuo. A utilização de um mês parcial não é reembolsável. O cancelamento interrompe o ciclo seguinte e não apaga o período pré-pago em curso.",
    },
    today: {
      label: "03 · HOJE",
    },
  },
  compare: {
    kicker: "O que a A.C.E. pode prometer hoje",
    title: "Comparação de subscrições",
    note: "Cada linha reflete o site atual. O pagamento estará disponível em breve, e um plano pago nunca abre uma fila nem compra vantagem.",
    caption: "Gratuito, Plus e Premium comparados pelo que o sítio faz hoje",
    includedToday: "Incluído hoje",
    columns: {
      free: "Gratuito",
      plus: "Plus",
      premium: "Premium",
    },
    rows: {
      publicSite: {
        feature: "Sítio público",
        detail: "Início, jogar, torneios, classificação, equipas, regras e termos.",
      },
      steamSignIn: {
        feature: "Início de sessão Steam",
        detail: "Steam OpenID oficial. A A.C.E. nunca pede a palavra-passe da Steam.",
      },
      startingRating: {
        feature: "Pontuação inicial",
        detail: "O número guardado numa conta nova antes de qualquer partida registada.",
      },
      recordedMatches: {
        feature: "Partidas registadas",
        detail: "Vitórias e derrotas escritas a partir de uma partida A.C.E. concluída.",
      },
      rankedQueue: {
        feature: "Fila ranqueada",
        detail: "ENCONTRAR PARTIDA continua fechado até existir uma fila real.",
      },
      cs2Servers: {
        feature: "Servidores CS2",
        detail: "Este sítio não envia um endereço de servidor nem uma ligação de acesso.",
      },
      antiCheatClient: {
        feature: "Cliente anti-cheat",
        detail: "Nada é transferido a partir deste sítio.",
      },
      charge: {
        feature: "Cobrança",
        detail: "Escolher Plus ou Premium não usa um cartão.",
      },
      ratingForSale: {
        feature: "Pontuação à venda",
        detail: "Uma etiqueta paga nunca compra pontuação nem adversários mais fáceis.",
      },
      prizeOrWeapon: {
        feature: "Prémio ou arma",
        detail: "Não é entregue nenhuma skin, faca ou prize pool.",
      },
      goldEliteSeal: {
        feature: "Selo de elite e emblemas especiais",
        detail:
          "Apenas Premium, lido a partir do nível guardado no servidor. Cosmético. O pagamento não define esse nível.",
      },
    },
    cells: {
      open: "Aberto",
      yes: "Sim",
      noneYet: "Ainda nenhum",
      closed: "Fechado",
      notConnected: "Em breve",
      notShipped: "Não disponibilizado",
      noCharge: "Sem cobrança",
      notForSale: "Não está à venda",
      none: "Nenhum",
      no: "Não",
      storedTierOnly: "Só a patente guardada",
    },
  },
  receipt: {
    plus: {
      metaTitle: "Recibo Plus",
      metaDescription:
        "A carta A.C.E. Plus apresentada neste sítio. O pagamento não está ativo, por isso nada é cobrado e nenhum e-mail é enviado.",
      planName: "A.C.E. Plus",
      nextLabel: "Continuar na A.C.E.",
      nextBody:
        "As páginas públicas continuam abertas. Esta seleção não abre uma fila e não altera a patente guardada.",
    },
    premium: {
      metaTitle: "Recibo Premium",
      metaDescription:
        "A carta A.C.E. Premium apresentada neste sítio. O pagamento não está ativo, por isso nada é cobrado e nenhum e-mail é enviado.",
      planName: "A.C.E. Premium",
      nextLabel: "Continuar para os Esquadrões",
      nextBody:
        "Continue para os Esquadrões. A página vai perguntar se são uma equipa de cinco. O lugar 1 é a conta Steam com sessão iniciada. Os lugares 2 a 5 são os outros jogadores. Guardar um clã continua a não cobrar este preço.",
    },
  },
  letter: {
    kicker: "{plan} · {price} por mês",
    title: "Obrigado pela sua escolha",
    flag: "Esta carta é apresentada no sítio. Não foi enviado nenhum e-mail. Nenhum cartão foi cobrado. O pagamento não está ativo, e a patente de subscrição guardada não foi alterada.",
    greeting: "Caro jogador,",
    intro:
      "Obrigado por escolher {plan}. Esta página é o recibo. Regista o preço apresentado, o que essa escolha inclui hoje, o que não inclui e o endereço de suporte publicado neste sítio.",
    selected: {
      title: "O que foi escolhido",
      items: [
        "Nome do plano: {plan}.",
        "Preço apresentado: {price} por mês. O valor é uma etiqueta, não uma cobrança.",
        "Pagamento: nenhum. Escolher este plano não usa um cartão.",
        "E-mail: nenhum. A A.C.E. não envia esta carta para uma caixa de correio.",
        "Nível guardado: inalterado. Os emblemas especiais e o selo de elite só aparecem quando a conta já tem Premium guardado.",
        "Pontuação: não está à venda. Uma conta nova continua a começar em 1000.",
      ],
    },
    today: {
      title: "O que pode usar hoje",
      items: [
        "O site público: início, jogar, torneios, classificação, equipas, regras e termos.",
        "Início de sessão Steam através do Steam OpenID oficial. A A.C.E. nunca pede a palavra-passe da Steam.",
        "As mesmas páginas públicas que o Gratuito. Este preço não abre uma fila separada.",
      ],
    },
    excluded: {
      title: "O que esta escolha não inclui",
      items: [
        "Uma fila ranqueada ao vivo. ENCONTRAR PARTIDA continua fechado.",
        "Um servidor de Counter-Strike 2, um endereço de servidor ou uma ligação de acesso.",
        "Uma transferência de anti-cheat. O A.C.E Shield está em desenvolvimento.",
        "Um prémio, uma skin, uma faca ou um prize pool.",
        "Um lugar no quadro de 100 equipas. Esse quadro continua a mostrar 0 registadas até abrir uma temporada.",
        "Adversários mais fáceis, uma pontuação comprada ou um sítio público diferente do Gratuito.",
      ],
    },
    trouble: {
      title: "Se algo não funcionar",
      items: [
        "Esperava uma cobrança ou uma patente paga. Nenhuma foi aplicada. A conta fica como estava.",
        "Esperava esta carta numa caixa de correio. Ela só existe nesta página.",
        "A Steam não ligou. Use Ligar perfil e aceite primeiro a caixa dos termos. Nunca escreva uma palavra-passe da Steam na A.C.E.",
        "Precisa de ajuda. Use o endereço de suporte abaixo ou abra as páginas de ajuda deste sítio.",
      ],
    },
    support: {
      title: "Suporte",
      addressBefore: "O endereço de suporte indicado neste sítio é ",
      addressAfter: ".",
      helpBefore: "Ajuda no sítio: ",
      supportLink: "Suporte",
      helpAnd: " e ",
      contactLink: "Contacto",
      rulesBefore: ". As regras estão em ",
      rulesLink: "Regras",
      rulesAnd: " e ",
      termsLink: "Termos",
      helpAfter:
        ". Um aviso em Suporte não abre um pedido, e o texto escrito em Contacto não é entregue.",
    },
    next: {
      title: "Próximo passo",
    },
  },
  telemetry: {
    kicker: "TELEMETRIA PLUS / PREMIUM",
    copy: "TELEMETRIA DO PAINEL BLOQUEADA — Atualize o seu plano de subscrição para A.C.E. Plus ou Premium para desbloquear curvas de estatísticas dinâmicas em tempo real e índices de especialidade de armas.",
    cta: "Abrir as tabelas de preços",
  },
};
