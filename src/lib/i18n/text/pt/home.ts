import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  meta: {
    title: "A.C.E. — Plataforma competitiva de CS2",
    description:
      "A A.C.E. é uma plataforma competitiva de Counter-Strike 2 planeada para identidade de jogadores, calibração, equipas e torneios. Este sítio público é uma pré-visualização. O matchmaking ranqueado, o Anti-Cheat, os pagamentos e os prémios não estão ativos.",
  },
  opening: {
    dialogLabel: "Abertura da A.C.E.",
    line: "A.C.E: Anti-Cheat autónomo, calibração competitiva, jogadores de elite",
    enter: "Entrar no sítio",
  },
  hero: {
    logoAlt: "A.C.E. Anti-Cheat autónomo, calibração competitiva, jogadores de elite",
    arenaAlt:
      "Placa da arena A.C.E. Imagem de palco original, não é arte da Valve. O ecrã tem a etiqueta televisão das partidas. A transmissão ao vivo está desligada.",
  },
  broadcast: {
    kicker: "ACOMPANHAR TORNEIOS",
    title: "Mesa de transmissão",
    lede: "A pool de mapas competitiva está nesta mesa: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis e Train. São placas originais. Nenhum torneio está no ar, e esta página não reproduz uma partida da Valve.",
    offAir: "FORA DO AR · {map}",
  },
  jumpNav: {
    label: "Categorias do início",
    play: "Jogar",
    prizes: "Prémios",
    teams: "Equipas",
    leaderboard: "Classificação",
    ranks: "Ranks",
    systems: "Sistemas",
  },
  charter: {
    kicker: "ESPAÇO PRINCIPAL DO LOBBY",
    title: "LOBBY DE MATCHMAKING COMPETITIVO E CENTRO DE EXPEDIÇÃO A.C.E.",
    badge: "SEM SERVIDOR AO VIVO",
    lede: "Este lobby não atribui um servidor, não inicia um cliente anti-cheat e não paga prémios.",
    modules: [
      {
        kicker: "PARTIDA ENCONTRADA · 5v5",
        copy: "A moldura 5v5 nesta página é uma fila fechada. Não atribui um servidor.",
        chips: ["SEM SERVIDOR DE 128 TICKS", "FILA FECHADA"],
      },
      {
        kicker: "RANKS 3D FIXOS",
        copy: "Dez patentes, de Recruit a A.C.E. Legend. Uma pontuação guardada aparece após o início de sessão na Steam. Esta página não aplica uma partida.",
        chips: ["REGRA DE PONTUAÇÃO REGISTADA", "PLATAFORMA GIRATÓRIA NESTA PÁGINA"],
      },
      {
        kicker: "RECOMPENSAS DE SKINS",
        copy: "Os cartões de skins são exemplos. Nenhuma arma é entregue e nenhum prémio é financiado.",
        chips: ["NENHUM ITEM ENTREGUE", "SEM VERIFICAÇÃO DE DROP"],
      },
    ],
  },
  identity: {
    profilePlaceholder: "[Perfil_Jogador]",
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
    clockFormat: "{h}h {m}m {s}s",
    note: "Este relógio é um layout. O Premium não entra num sorteio de drops, e a Steam não verifica nem entrega nenhum item a partir desta página.",
  },
  ribbon: {
    closeOverlay: "Fechar sobreposição",
    close: "Fechar",
    disclosure:
      "Maqueta de teste: sem inventário, sem reivindicações, sem quadro de missões ao vivo e sem pagamento. Estas sobreposições são apenas amostras de layout.",
    rewards: {
      kicker: "Recompensas de acesso · amostra de layout",
      title: "Calendário de presença Premium",
      day: "Dia {n}",
      featuredReward: "Recompensa do dia {n}: drop de caixa com chave",
      previewSlot: "Vaga de pré-visualização",
    },
    missions: {
      kicker: "Missões táticas diárias · amostra de layout",
      title: "Desafios diários ativos",
      names: {
        headshot: "Especialista em headshots",
        utilityEntry: "Entrada com utilitários",
        clutch: "Protocolo de clutch",
      },
    },
    shop: {
      kicker: "Loja A.C.E. · maqueta de teste",
      title: "Pagamento do inventário de armas",
      mockBadge: "MAQUETA DE TESTE",
      fullPreview: "Abrir a pré-visualização completa do mercado",
      openAria: "Abrir a loja A.C.E.",
    },
  },
  serverHub: {
    badge: "NENHUM SERVIDOR DE JOGO AO VIVO",
    nodes: {
      fra: "Nó periférico de Frankfurt",
      sto: "Núcleo de Estocolmo",
      tlv: "Retransmissor de Telavive",
    },
    tileAria: "{name}. Mosaico de layout. Nenhum servidor está ligado.",
    tileSample: "Amostra de layout {sample}. Nenhum servidor está ligado.",
    note: "Estes nomes e amostras de latência são um layout. Este sítio não tem nenhum servidor de jogo de 128 ticks nem nenhum nó regional.",
  },
  telemetry: {
    badge: "NÃO É UM CLIENTE AO VIVO",
    lines: [
      "AC-KERNEL: NÃO LIGADO",
      "MATRIZ DE BANIMENTO DE HARDWARE: NENHUM IDENTIFICADOR É RECOLHIDO",
      "LIGAÇÃO A.C.E. SHIELD: NENHUM CLIENTE ESTÁ INSTALADO",
    ],
    note: "Este sítio não executa um cliente de kernel, não analisa a memória e não aplica banimentos de hardware.",
  },
  comingSoon: {
    badge: "NÃO DISPONÍVEL",
    body: "O cliente de computador da A.C.E. não está disponível para transferência. A Temporada 1 neste sítio não instala software nem abre um registo de presença.",
  },
  operative: {
    kicker: "Visor tático cinematográfico · ambiente CSS original · não é arte da Valve",
    title: "Vá mais fundo no CS2: a plataforma competitiva definitiva",
    lede: "Partidas mais justas, melhores colegas de equipa. Ranks que importam, recompensas que contam.",
    note: "Texto de campanha. As filas ranqueadas, os servidores ao vivo e os prémios não estão ativos.",
    hudLeft: "CT — BOMBSITE A",
    hudRight: "T — AVANÇO PELO MEIO",
    hudCenter: "AMBIENTE DE EQUIPA · LAYOUT",
    plannedReason: "O jogo ranqueado continua fechado até ser implementada e verificada uma integração Anti-Cheat real.",
  },
  howStatus: {
    label: "SUBSISTEMA DE REGISTO A.C.E. — MOTOR DE CALIBRAÇÃO PRONTO",
    note: "Widget de estado de layout. As filas ranqueadas, o Anti-Cheat e a calibração ao vivo não estão ativos.",
  },
  shell: {
    primaryNav: "Principal",
    mobileNav: "Móvel",
    elite: "ELITE",
    notificationsTitle: "Sem feed de notificações ao vivo",
    notificationsAria: "Notificações. Nenhuma por ler.",
    connectProfileTitle: "Ligar perfil",
    openProfileAria: "Abrir o perfil do Convés de Comando",
    connectProfileAria: "Ligar perfil através do Steam OpenID",
    signOutAria: "Terminar sessão na A.C.E.",
  },
  notFound: {
    kicker: "EXCEÇÃO DA GRELHA",
    title: "ERRO 404 — TELEMETRIA DE RADAR PERDIDA",
    body: "A coordenada que pediu não existe na nossa grelha de servidores ativa.",
    homeAria: "Voltar ao lobby da página inicial da A.C.E.",
    cta: "VOLTAR AO LOBBY",
  },
  error: {
    kicker: "Erro",
    title: "Algo correu mal",
    body: "Não foi possível apresentar esta página pública. Pode tentar novamente. Nenhum dado de conta foi pedido neste sítio de pré-visualização.",
    retryAria: "Recarregar esta página",
    retry: "Tentar novamente",
  },
};
