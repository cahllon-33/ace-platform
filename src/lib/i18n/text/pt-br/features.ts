import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  page: {
    meta: {
      title: "Recursos",
      description:
        "Especificação da arquitetura do Kernel Anti-Cheat da A.C.E., do vínculo biométrico por Face Scan e das dez patentes de calibração de habilidade. Esses sistemas não estão ativos neste site.",
    },
    header: {
      kicker: "ACE-RECURSOS / KERNEL / FACE-SCAN / CALIBRAÇÃO",
      title: "Especificação dos recursos da plataforma",
      lede: "Esta página é o mapa técnico de nível de produção de três sistemas previstos da A.C.E.: o Kernel Anti-Cheat autônomo, o vínculo biométrico por Face Scan e a escada de calibração de habilidade em dez patentes. Nada nesta página é um kernel ao vivo, um produto de câmera ao vivo ou uma fila ranqueada ao vivo. Steam OpenID, equipes 5v5, layouts de chave e o cálculo de rating no estilo Elo existem neste repositório. Servidores dedicados de CS2, pagamentos, prêmios e um cliente de integridade para download não existem.",
    },
    kernel: {
      title: "Arquitetura do Kernel Anti-Cheat",
      paragraphs: [
        "O Invólucro Seguro Autônomo especificado é um cliente de integridade vinculado ao hardware que rodaria ao lado do Counter-Strike 2 no computador do jogador e informaria um estado assinado de ALLOW ou DENY aos servidores geridos pela A.C.E. O projeto do kernel fecha em caso de falha: se o cliente estiver ausente, parado, desatualizado, falsificado ou não verificado, a admissão ranqueada é negada. O navegador nunca decide a elegibilidade. ENCONTRAR PARTIDA ranqueado neste site já fecha em caso de falha por esse motivo.",
        "As camadas previstas do kernel incluem um aperto de mão em modo usuário que vincula o SteamID de 64 bits verificado à conta A.C.E., uma superfície de atestação do identificador de hardware (HWID), uma lista de assinaturas de famílias de cheats conhecidas e uma rota de elegibilidade servidor a servidor protegida por um segredo compartilhado. Uma validação de assinatura de cheat, uma verificação de integridade recusada ou um identificador de dispositivo falsificado está especificado para produzir uma mudança imediata do status da conta para BANNED ou PERM_BANNED e, quando existir um produto cobrado, a perda total do tempo de assinatura pré-pago, sem nenhuma obrigação de reembolso. Nenhum cliente assim é entregue com este site. Os cartões de download Em breve são apenas layout.",
      ],
      stats: [
        { label: "ESTADO DO KERNEL", value: "Não implantado" },
        { label: "FILA RANQUEADA", value: "Fechada em caso de falha" },
        { label: "ARMAZENAMENTO DE HWID", value: "Não coletado neste site" },
      ],
    },
    faceScan: {
      title: "Vínculo biométrico por Face Scan",
      paragraphs: [
        "O Face Scan é uma camada futura especificada de vínculo de identidade, não um produto de câmera neste site. O projeto previsto, somente após consentimento explícito e uma revisão jurídica separada, vincularia um modelo facial com prova de vida à mesma conta A.C.E. que já tem um SteamID verificado pelo servidor. O objetivo é impedir o compartilhamento de contas usado para fugir de uma restrição anterior. A A.C.E. não coleta imagens faciais, representações faciais, endereços de e-mail nem impressões de hardware hoje. A postura de privacidade atual continua sendo a Estrita Necessidade: apenas o SteamID de 64 bits verificado e o nome de exibição público da Steam.",
        "Se o Face Scan algum dia for implementado, ele não vai substituir o Steam OpenID, não será usado para vender publicidade comportamental e não vai liberar filas ranqueadas sozinho. A admissão ranqueada continua exigindo um caminho de Anti-Cheat verificado. Até essa revisão existir, qualquer painel de Face Scan no lobby é um marcador de layout.",
      ],
    },
    calibration: {
      title: "Dez patentes de calibração de habilidade",
      intro:
        "A Calibração Competitiva usa uma fórmula documentada no estilo Elo (versão {version}, fator K {kFactor}, escala {scale}). Contas novas começam no Rank 1 (Recruit), assinatura GRATUITA, status ATIVO e {startingRating} de rating competitivo. Os rótulos de cristal no lobby são apelidos visuais. Cosméticos pagos nunca compram rating, adversários mais fáceis, servidores 128-tick nem prioridade na fila. Não existe nenhum produto 128-tick ao vivo à venda.",
      table: {
        level: "Nível",
        engineName: "Nome no motor",
        crystalAlias: "Apelido de cristal",
        minRating: "Rating mín.",
      },
      divisions: {
        before:
          "As divisões I, II e III no lobby são fichas de vitrine. Elas só mudam métricas de layout. Não existe pareamento ao vivo por divisão. Veja ",
        middle: " para o giratório 3D e ",
        after: " para o texto de competição vinculante.",
      },
    },
  },
  loot: {
    kicker: "Cosméticos de teste · pagamento simulado",
    title: "ARQUITETURA DE RECOMPENSAS A.C.E. — DROPS DE ARMAS",
    lede: "Nomes de acabamento originais da A.C.E. em tipos de armas do CS2. Não são itens da Valve, não são skins trocáveis e não são prêmios reais. Os pagamentos são simulados.",
    mockDrop: "Drop simulado",
    multiplierLabel: "Requisitos do multiplicador de taxa de vitórias",
    ladderLabel: "Drops semanais da escada",
    multiplierValue: "Modelo {multiplier}×",
    ladderValue: "Vaga semanal · simulada",
    checkout: "Pagamento simulado",
  },
  communityRail: {
    kicker: "Feed de layout · não é ao vivo",
    newsTitle: "Últimas notícias da escada",
    newsItems: [
      "A chave continua vazia — 0 de 100 equipes.",
      "A busca ranqueada continua fechada até o Anti-Cheat existir.",
    ],
    prizesTitle: "Prêmios diários de skins",
    prizesBody:
      "Nenhum prêmio é distribuído. Os cartões de cosméticos neste site são simulações de teste. Os pagamentos são simulados.",
  },
  identityPreview: {
    badge: "Prévia — não confirmado",
    cards: {
      faceScan: {
        title: "Face Scan ao vivo verificado",
        copy: "A prova de vida da identidade é uma verificação planejada por um provedor. Este cartão é uma prévia de layout. Nenhuma varredura foi realizada e nenhum dado biométrico é armazenado.",
      },
      hardwareId: {
        title: "ID de hardware vinculado",
        copy: "O vínculo do dispositivo é um sinal de integridade planejado. Este cartão é uma prévia de layout. Nenhuma impressão de hardware foi coletada.",
      },
    },
  },
  preview: {
    fallbackTitle: "Prévia",
    kicker: "Destino de layout · não é um produto ao vivo",
    returnHome: "Voltar ao início",
    pages: {
      support: {
        title: "Suporte",
        body: "Ainda não há uma central de suporte pública com atendimento. Este link é um destino provisório do rodapé.",
      },
      "anti-cheat": {
        title: "Visão geral do Anti-Cheat",
        body: "A A.C.E. não tem um produto de Anti-Cheat funcional. O pareamento ranqueado continua fechado até existir uma integração real.",
      },
      "download-client": {
        title: "Baixar cliente",
        body: "Não há cliente desktop da A.C.E. para baixar. Um cliente nativo não faz parte da etapa web atual.",
      },
      "mobile-app": {
        title: "Aplicativo móvel",
        body: "Não existe aplicativo móvel da A.C.E. Este é apenas um link de layout do rodapé.",
      },
      news: {
        title: "Notícias",
        body: "Não há redação de notícias ao vivo. Este é apenas um link de layout do rodapé.",
      },
      about: {
        title: "Sobre nós",
        body: "A A.C.E. é um site independente de competições de Counter-Strike 2 em prévia pública. Não é afiliada à Valve.",
      },
      advertising: {
        title: "Publicidade",
        body: "Não há espaço publicitário à venda. Este é apenas um link de layout do rodapé.",
      },
      developers: {
        title: "Desenvolvedores",
        body: "Ainda não existe um programa público para desenvolvedores. As APIs de elegibilidade de servidor deste repositório são adaptadores internos, não um SDK para parceiros.",
      },
      press: {
        title: "Imprensa",
        body: "Não há kit de imprensa nem sala de imprensa. Este é apenas um link de layout do rodapé.",
      },
      jobs: {
        title: "Vagas",
        body: "Não há vagas de emprego publicadas. Este é apenas um link de layout do rodapé.",
      },
      terms: {
        title: "Termos de Serviço",
        body: "Os Termos de Serviço vigentes estão publicados em /terms. O regulamento dos torneios está em /rules.",
      },
      privacy: {
        title: "Política de Privacidade",
        body: "A Política de Privacidade está publicada em /privacy. O Steam OpenID é a única forma de login; senhas da Steam nunca são coletadas.",
      },
      eula: {
        title: "EULA do Anti-Cheat",
        body: "Não existe EULA do Anti-Cheat porque o Anti-Cheat não está ativo. O modo ranqueado continua fechado em caso de falha.",
      },
    },
  },
};
