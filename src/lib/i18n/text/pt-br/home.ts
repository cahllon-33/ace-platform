import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  meta: {
    title: "A.C.E. — Plataforma competitiva de CS2",
    description:
      "A A.C.E. é uma plataforma competitiva de Counter-Strike 2 planejada para identidade de jogadores, calibração, equipes e torneios. Este site público é uma prévia. Pareamento ranqueado, Anti-Cheat, pagamentos e prêmios não estão ativos.",
  },
  opening: {
    dialogLabel: "Abertura da A.C.E.",
    line: "A.C.E: Anti-Cheat autônomo, calibração competitiva, jogadores de elite",
    enter: "Entrar no site",
  },
  hero: {
    logoAlt: "A.C.E. Anti-Cheat autônomo, calibração competitiva, jogadores de elite",
    arenaAlt:
      "Placa da arena A.C.E. Imagem original de palco, não é arte da Valve. A tela está identificada como televisão das partidas. A transmissão ao vivo está desligada.",
  },
  broadcast: {
    kicker: "ACOMPANHAMENTO DE TORNEIOS",
    title: "Mesa de transmissão",
    lede: "O pool de mapas competitivo fica nesta mesa: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis e Train. São placas originais. Nenhum torneio está no ar, e esta página não reproduz uma partida da Valve.",
    offAir: "FORA DO AR · {map}",
  },
  jumpNav: {
    label: "Categorias do início",
    play: "Jogar",
    prizes: "Prêmios",
    teams: "Equipes",
    leaderboard: "Classificação",
    ranks: "Ranks",
    systems: "Sistemas",
  },
  charter: {
    kicker: "ESPAÇO PRINCIPAL DO LOBBY",
    title: "LOBBY DE PAREAMENTO COMPETITIVO E CENTRAL DE DESPACHO A.C.E.",
    badge: "NENHUM SERVIDOR AO VIVO",
    lede: "Este lobby não atribui servidor, não inicia um cliente anti-cheat e não paga prêmios.",
    modules: [
      {
        kicker: "PARTIDA ENCONTRADA · 5v5",
        copy: "O quadro 5v5 desta página é uma fila fechada. Ele não atribui servidor.",
        chips: ["SEM SERVIDOR 128-TICK", "FILA FECHADA"],
      },
      {
        kicker: "RANKS 3D FIXOS",
        copy: "Dez patentes, de Recruit até A.C.E. Legend. Um rating salvo aparece depois do login com a Steam. Esta página não aplica resultados de partidas.",
        chips: ["REGRA DE RATING REGISTRADA", "GIRATÓRIO NESTA PÁGINA"],
      },
      {
        kicker: "RECOMPENSAS DE SKIN",
        copy: "Os cartões de skins são exemplos. Nenhuma arma é entregue e nenhum prêmio é financiado.",
        chips: ["NENHUM ITEM ENTREGUE", "SEM VERIFICAÇÃO DE DROP"],
      },
    ],
  },
  identity: {
    profilePlaceholder: "[Perfil_do_Jogador]",
    notAvailable: "n/d",
    elite: "ELITE",
  },
  membership: {
    compareLink: "Ver a tabela de comparação completa",
  },
  loot: {
    exampleCard: "Cartão de exemplo · não é um item da Valve",
    wear: {
      factoryNew: "Nova de Fábrica",
      minimalWear: "Pouco Usada",
    },
  },
  lootLadder: {
    banner: "COFRE DO SISTEMA — DROP DE LAYOUT",
    title: "ESCADA DE RECOMPENSAS A.C.E.",
    itemWithWear: "{item} ({wear})",
    clockLabel: "RELÓGIO DE LAYOUT",
    clockFormat: "{h}h {m}min {s}s",
    note: "Este relógio é um layout. O Premium não participa de sorteio de drops, e a Steam não verifica nem entrega itens a partir desta página.",
  },
  ribbon: {
    closeOverlay: "Fechar sobreposição",
    close: "Fechar",
    disclosure:
      "Simulação de teste: sem inventário, sem resgates, sem quadro de missões ao vivo e sem pagamento. Estas sobreposições são apenas amostras de layout.",
    rewards: {
      kicker: "Recompensas de acesso · amostra de layout",
      title: "Calendário de check-in Premium",
      day: "Dia {n}",
      featuredReward: "Recompensa do dia {n}: drop de caixa com chave",
      previewSlot: "Vaga de prévia",
    },
    missions: {
      kicker: "Missões táticas diárias · amostra de layout",
      title: "Desafios diários ativos",
      names: {
        headshot: "Especialista em headshot",
        utilityEntry: "Entrada com utilitários",
        clutch: "Protocolo de clutch",
      },
    },
    shop: {
      kicker: "Loja A.C.E. · simulação de teste",
      title: "Pagamento do inventário de armas",
      mockBadge: "SIMULAÇÃO DE TESTE",
      fullPreview: "Abrir a prévia completa do mercado",
      openAria: "Abrir a loja A.C.E.",
    },
  },
  serverHub: {
    badge: "NENHUM SERVIDOR DE JOGO AO VIVO",
    nodes: {
      fra: "Borda de Frankfurt",
      sto: "Núcleo de Estocolmo",
      tlv: "Retransmissor de Tel Aviv",
    },
    tileAria: "{name}. Bloco de layout. Nenhum servidor está conectado.",
    tileSample: "Amostra de layout {sample}. Nenhum servidor está conectado.",
    note: "Estes nomes e amostras de latência são um layout. Este site não tem servidor de jogo 128-tick nem nó regional.",
  },
  telemetry: {
    badge: "NÃO É UM CLIENTE AO VIVO",
    lines: [
      "AC-KERNEL: NÃO CONECTADO",
      "MATRIZ DE BANIMENTO DE HARDWARE: NENHUM IDENTIFICADOR É COLETADO",
      "LINK DO ESCUDO A.C.E.: NENHUM CLIENTE ESTÁ INSTALADO",
    ],
    note: "Este site não executa um cliente de kernel, não varre a memória e não aplica banimento de hardware.",
  },
  comingSoon: {
    badge: "NÃO DISPONÍVEL",
    body: "O cliente desktop da A.C.E. não está disponível para download. A temporada 1 neste site não instala software nem abre check-in.",
  },
  operative: {
    kicker: "Visão tática cinematográfica · ambiente original em CSS · não é arte da Valve",
    title: "Mergulhe fundo no CS2: a plataforma competitiva definitiva",
    lede: "Partidas mais justas, companheiros melhores. Ranks que importam, recompensas que contam.",
    note: "Texto de campanha. Filas ranqueadas, servidores ao vivo e prêmios não estão ativos.",
    hudLeft: "CT — BOMB A",
    hudRight: "T — AVANÇO PELO MEIO",
    hudCenter: "AMBIENTE DO ESQUADRÃO · LAYOUT",
    plannedReason: "O modo ranqueado continua fechado até uma integração real de Anti-Cheat ser implementada e verificada.",
  },
  howStatus: {
    label: "SUBSISTEMA DE CADASTRO A.C.E. — MOTOR DE CALIBRAÇÃO PRONTO",
    note: "Widget de status de layout. Filas ranqueadas, Anti-Cheat e calibração ao vivo não estão ativos.",
  },
  shell: {
    primaryNav: "Principal",
    mobileNav: "Celular",
    elite: "ELITE",
    notificationsTitle: "Nenhum feed de notificações ao vivo",
    notificationsAria: "Notificações. Nenhuma não lida.",
    connectProfileTitle: "Conectar perfil",
    openProfileAria: "Abrir o perfil no Painel de Comando",
    connectProfileAria: "Conectar perfil pelo Steam OpenID",
    signOutAria: "Sair da A.C.E.",
  },
  notFound: {
    kicker: "EXCEÇÃO DA GRADE",
    title: "ERRO 404 — TELEMETRIA DO RADAR PERDIDA",
    body: "A coordenada solicitada não existe na nossa grade de servidores ativa.",
    homeAria: "Voltar ao lobby da página inicial da A.C.E.",
    cta: "VOLTAR AO LOBBY",
  },
  error: {
    kicker: "Erro",
    title: "Algo deu errado",
    body: "Esta página pública não pôde ser exibida. Você pode tentar novamente. Nenhum dado de conta foi solicitado neste site de prévia.",
    retryAria: "Recarregar esta página",
    retry: "Tentar novamente",
  },
};
