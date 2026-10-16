import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  "liveStats": {
    "kicker": "AO VIVO",
    "online": "Online agora",
    "registered": "Jogadores registados",
    "earlyTitle": "Acesso antecipado",
    "earlyBody": "Junta-te aos primeiros jogadores da A.C.E. As contagens ao vivo aparecem aqui quando a comunidade crescer.",
    "unavailable": "As contagens ao vivo não estão disponíveis agora.",
    "note": "Números reais, atualizados a cada 30 segundos."
  },
  "ops": {
    "identityKicker": "CENTRAL DE IDENTIDADE",
    "signedOutTitle": "Entrar com a Steam",
    "signedOutBody": "Ligue-se com o Steam OpenID oficial para ver aqui o seu avatar da Steam, o seu emblema de rank e os seus Rating Points. A A.C.E. nunca pede a palavra-passe da Steam.",
    "connect": "Entrar com a Steam",
    "openDeck": "Abrir o Command Deck",
    "avatarAlt": "Avatar da Steam de {name}",
    "emblemAlt": "Emblema de rank {rank}",
    "rp": "Rating Points",
    "wins": "Vitórias",
    "losses": "Derrotas",
    "winRate": "Taxa de vitórias",
    "matches": "Partidas",
    "kd": "K/D",
    "na": "n/d",
    "kdNote": "O K/D mostra n/d porque a A.C.E. ainda não regista abates e mortes.",
    "shieldKicker": "A.C.E SHIELD",
    "shieldChip": "EM DESENVOLVIMENTO",
    "shieldTitle": "Estado de integridade",
    "shieldBody": "O A.C.E Shield está em desenvolvimento. Hoje nada é instalado, verificado ou monitorizado, por isso nenhuma conta tem um veredito de integridade.",
    "shieldClient": "Cliente anti-batota",
    "shieldClientValue": "Não lançado",
    "shieldServer": "Servidores de partida",
    "shieldServerValue": "Não ligados",
    "shieldHardware": "Verificação de hardware",
    "shieldHardwareValue": "Não recolhido",
    "shieldLink": "Como o A.C.E Shield vai funcionar",
    "seasonKicker": "TEMPORADA 1",
    "seasonChip": "DATAS NÃO ANUNCIADAS",
    "seasonTitle": "Acompanhamento da Temporada 1",
    "seasonBody": "A Temporada 1 ainda não tem data de início nem de fim, por isso não há contagem decrescente. As datas serão publicadas neste site antes do início da temporada.",
    "statsKicker": "AS SUAS ESTATÍSTICAS",
    "statsSignedOut": "Inicie sessão com a Steam para ver as suas estatísticas.",
    "statsEmpty": "Ainda não há partidas registadas. Vitórias e derrotas aparecem após a sua primeira partida A.C.E. registada.",
    "statsLive": "Vitórias e derrotas vêm da sua conta A.C.E. guardada.",
    "statsLink": "Abrir estatísticas de jogador"
  },
  "meta": {
    "title": "A.C.E. — Plataforma competitiva de CS2",
    "description": "A A.C.E. é uma plataforma competitiva de Counter-Strike 2 planeada para identidade de jogadores, calibração, equipas e torneios. Este sítio público é uma pré-visualização. O matchmaking ranqueado, o Anti-Cheat, os pagamentos e os prémios não estão ativos."
  },
  "opening": {
    "dialogLabel": "Abertura da A.C.E.",
    "line": "A.C.E: Anti-Cheat autónomo, calibração competitiva, jogadores de elite",
    "enter": "Entrar no sítio"
  },
  "hero": {
    "logoAlt": "A.C.E. Anti-Cheat autónomo, calibração competitiva, jogadores de elite",
    "arenaAlt": "Placa da arena A.C.E. Imagem de palco original, não é arte da Valve. O ecrã tem a etiqueta televisão das partidas. A transmissão ao vivo está desligada."
  },
  "broadcast": {
    "kicker": "ACOMPANHAR TORNEIOS",
    "title": "Mesa de transmissão",
    "lede": "A pool de mapas competitiva está nesta mesa: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis e Train. São placas originais. Nenhum torneio está no ar, e esta página não reproduz uma partida da Valve.",
    "offAir": "FORA DO AR · {map}"
  },
  "jumpNav": {
    "label": "Categorias do início",
    "play": "Jogar",
    "prizes": "Prémios",
    "teams": "Equipas",
    "leaderboard": "Classificação",
    "ranks": "Ranks",
    "systems": "Sistemas"
  },
  "charter": {
    "kicker": "ESPAÇO PRINCIPAL DO LOBBY",
    "title": "LOBBY DE MATCHMAKING COMPETITIVO E CENTRO DE EXPEDIÇÃO A.C.E.",
    "badge": "SERVIDORES · EM BREVE",
    "lede": "Este lobby não atribui um servidor, não inicia um cliente anti-cheat e não paga prémios.",
    "modules": [
      {
        "kicker": "PARTIDA ENCONTRADA · 5v5",
        "copy": "A moldura 5v5 nesta página é uma fila fechada. Não atribui um servidor.",
        "chips": [
          "SEM SERVIDOR DE 128 TICKS",
          "FILA FECHADA"
        ]
      },
      {
        "kicker": "RANKS 3D FIXOS",
        "copy": "Dez patentes, de Recruit a A.C.E. Legend. Uma pontuação guardada aparece após o início de sessão na Steam. Esta página não aplica uma partida.",
        "chips": [
          "REGRA DE PONTUAÇÃO REGISTADA",
          "PLATAFORMA GIRATÓRIA NESTA PÁGINA"
        ]
      },
      {
        "kicker": "RECOMPENSAS DE SKINS",
        "copy": "As recompensas do campeonato são anunciadas em cada evento.",
        "chips": [
          "NENHUM ITEM ENTREGUE",
          "SEM VERIFICAÇÃO DE DROP"
        ]
      }
    ]
  },
  "identity": {
    "elite": "ELITE"
  },
  "membership": {
    "compareLink": "Ver a tabela de comparação completa"
  },
  "loot": {
    "wear": {
      "factoryNew": "Nova de Fábrica",
      "minimalWear": "Pouco Usada"
    }
  },
  "serverHub": {
    "badge": "SERVIDORES DE JOGO · EM BREVE",
    "nodes": {
      "fra": "Nó periférico de Frankfurt",
      "sto": "Núcleo de Estocolmo",
      "tlv": "Retransmissor de Telavive"
    },
    "tileAria": "{name}. Servidor em breve.",
    "note": "Os servidores regionais de 128 ticks chegam com a beta competitiva."
  },
  "telemetry": {
    "badge": "PRÉ-VISUALIZAÇÃO · EM BREVE",
    "lines": [
      "A.C.E SHIELD: EM DESENVOLVIMENTO",
      "MATRIZ DE BANIMENTO DE HARDWARE: NENHUM IDENTIFICADOR É RECOLHIDO",
      "LIGAÇÃO A.C.E. SHIELD: NENHUM CLIENTE ESTÁ INSTALADO"
    ],
    "note": "Este sítio não executa um cliente de kernel, não analisa a memória e não aplica banimentos de hardware."
  },
  "comingSoon": {
    "badge": "NÃO DISPONÍVEL",
    "body": "O cliente de computador da A.C.E. não está disponível para transferência. A Temporada 1 neste sítio não instala software nem abre um registo de presença."
  },
  "operative": {
    "kicker": "Visor tático cinematográfico · ambiente CSS original · não é arte da Valve",
    "title": "Vá mais fundo no CS2: a plataforma competitiva definitiva",
    "lede": "Partidas mais justas, melhores colegas de equipa. Ranks que importam, recompensas que contam.",
    "note": "Texto de campanha. As filas ranqueadas, os servidores ao vivo e os prémios não estão ativos."
  },
  "howStatus": {
    "label": "SUBSISTEMA DE REGISTO A.C.E. — MOTOR DE CALIBRAÇÃO PRONTO",
    "note": "As filas classificativas abrem quando o A.C.E Shield e a calibração estiverem ativos."
  },
  "shell": {
    "primaryNav": "Principal",
    "mobileNav": "Móvel",
    "elite": "ELITE",
    "notificationsTitle": "Notificações · em breve",
    "notificationsAria": "Notificações. Nenhuma por ler.",
    "connectProfileTitle": "Ligar perfil",
    "openProfileAria": "Abrir o perfil do Convés de Comando",
    "connectProfileAria": "Ligar perfil através do Steam OpenID",
    "signOutAria": "Terminar sessão na A.C.E."
  },
  "notFound": {
    "kicker": "EXCEÇÃO DA GRELHA",
    "title": "ERRO 404 — TELEMETRIA DE RADAR PERDIDA",
    "body": "A coordenada que pediu não existe na nossa grelha de servidores ativa.",
    "homeAria": "Voltar ao lobby da página inicial da A.C.E.",
    "cta": "VOLTAR AO LOBBY"
  },
  "error": {
    "kicker": "Erro",
    "title": "Algo correu mal",
    "body": "Não foi possível apresentar esta página pública. Pode tentar novamente. Nenhum dado de conta foi pedido neste sítio de pré-visualização.",
    "retryAria": "Recarregar esta página",
    "retry": "Tentar novamente"
  }
};
