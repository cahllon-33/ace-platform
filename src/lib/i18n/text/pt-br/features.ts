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
        { label: "ESTADO DO KERNEL", value: "Em desenvolvimento" },
        { label: "FILA RANQUEADA", value: "Fechada em caso de falha" },
        { label: "ARMAZENAMENTO DE HWID", value: "Não coletado neste site" },
      ],
    },
    faceScan: {
      title: "Vínculo biométrico por Face Scan",
      paragraphs: [
        "O Face Scan é uma camada futura especificada de vínculo de identidade, não um produto de câmera neste site. O projeto previsto, somente após consentimento explícito e uma revisão jurídica separada, vincularia um modelo facial com prova de vida à mesma conta A.C.E. que já tem um SteamID verificado pelo servidor. O objetivo é impedir o compartilhamento de contas usado para fugir de uma restrição anterior. A A.C.E. não coleta imagens faciais, representações faciais, endereços de e-mail nem impressões de hardware hoje. A postura de privacidade atual continua sendo a Estrita Necessidade: apenas o SteamID de 64 bits verificado e o nome de exibição público da Steam.",
        "Se o Face Scan algum dia for implementado, ele não substituirá o Steam OpenID, não será usado para vender publicidade comportamental e não liberará filas ranqueadas sozinho. A entrada nas ranqueadas continuará exigindo um caminho de Anti-Cheat verificado. Até essa revisão existir, qualquer painel de Face Scan no lobby é uma prévia de design.",
      ],
    },
    calibration: {
      title: "Dez patentes de calibração de habilidade",
      intro:
        "A Competitive Calibration usa as regras publicadas de Rating Points da A.C.E (versão {version}: passo {kFactor}, escala {scale}). As contas novas começam na patente 3 (Vanguard), assinatura FREE, estado ACTIVE e {startingRating} de pontuação competitiva. Os nomes de cristal no lobby são alias visuais. Os cosméticos pagos nunca compram pontuação, adversários mais fáceis, servidores de 128 ticks nem prioridade na fila. Não há nenhum produto de 128 ticks ativo à venda.",
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
    kicker: "Cosméticos · em breve",
    title: "ARQUITETURA DE RECOMPENSAS A.C.E. — DROPS DE ARMAS",
    lede: "Acabamentos originais A.C.E., que chegam com a loja. Cosméticos nunca afetam a competição.",
    mockDrop: "Em breve",
    multiplierLabel: "Requisitos do multiplicador de taxa de vitórias",
    ladderLabel: "Drops semanais da escada",
    multiplierValue: "Modelo {multiplier}×",
    ladderValue: "Vaga semanal · em breve",
    checkout: "Pagamento · em breve",
  },
  communityRail: {
    kicker: "Feed · em breve",
    newsTitle: "Últimas notícias da escada",
    newsItems: [
      "A chave continua vazia — 0 de 100 equipes.",
      "A busca ranqueada continua fechada até o Anti-Cheat existir.",
    ],
    prizesTitle: "Prêmios diários de skins",
    prizesBody:
      "Recompensas e pagamento abrem com a Temporada 1.",
  },
  identityPreview: {
    badge: "Prévia — não confirmado",
    cards: {
      faceScan: {
        title: "Face Scan ao vivo verificado",
        copy: "A prova de vida é uma verificação de provedor planejada. Nenhum dado biométrico é coletado hoje.",
      },
      hardwareId: {
        title: "ID de hardware vinculado",
        copy: "O vínculo de dispositivo é um sinal de integridade planejado. Nenhum identificador de hardware é coletado hoje.",
      },
    },
  },
  preview: {
    fallbackTitle: "Prévia",
    kicker: "Em breve",
    returnHome: "Voltar ao início",
    pages: {
      support: {
        title: "Suporte",
        body: "Nosso suporte público abre com a beta competitiva.",
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
        body: "O app móvel da A.C.E. está no roteiro.",
      },
      news: {
        title: "Notícias",
        body: "A sala de imprensa da A.C.E. abre em breve.",
      },
      about: {
        title: "Sobre nós",
        body: "A A.C.E. é um site independente de competições de Counter-Strike 2 em prévia pública. Não é afiliada à Valve.",
      },
      advertising: {
        title: "Publicidade",
        body: "Contatos sobre parcerias e publicidade abrem em breve.",
      },
      developers: {
        title: "Desenvolvedores",
        body: "Ainda não existe um programa público para desenvolvedores. As APIs de elegibilidade de servidor deste repositório são adaptadores internos, não um SDK para parceiros.",
      },
      press: {
        title: "Imprensa",
        body: "O kit de imprensa chega em breve.",
      },
      jobs: {
        title: "Vagas",
        body: "As vagas abertas serão listadas aqui.",
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
