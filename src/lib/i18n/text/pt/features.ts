import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  "page": {
    "meta": {
      "title": "Funcionalidades",
      "description": "Arquitetura especificada do Kernel Anti-Cheat da A.C.E., ligação biométrica por Face Scan e dez patentes de calibração de habilidade. Estes sistemas não estão ativos neste sítio."
    },
    "header": {
      "kicker": "ACE-FUNCIONALIDADES / KERNEL / FACE-SCAN / CALIBRAÇÃO",
      "title": "Especificação de funcionalidades da plataforma",
      "lede": "Esta página é o mapa técnico de nível de produção de três sistemas previstos da A.C.E.: o Kernel Anti-Cheat Autónomo, a ligação biométrica por Face Scan e a escada de calibração de habilidade em dez patentes. Nada nesta página é um kernel ativo, um produto de câmara ativo ou uma fila ranqueada ativa. O Steam OpenID, as equipas 5v5, os layouts de chaves e a matemática de pontuação ao estilo Elo existem neste repositório. Servidores CS2 dedicados, pagamentos, prémios e um cliente de integridade para transferir não existem."
    },
    "kernel": {
      "title": "Arquitetura do Kernel Anti-Cheat",
      "paragraphs": [
        "O Autonomous Secure Shell especificado é um cliente de integridade ligado ao hardware que correria ao lado do Counter-Strike 2 na máquina do jogador e comunicaria um estado assinado ALLOW ou DENY aos servidores geridos pela A.C.E. O desenho do kernel fecha em caso de falha: se o cliente estiver ausente, parado, desatualizado, falsificado ou não verificado, a admissão ranqueada é recusada. O navegador nunca é um oráculo de elegibilidade. ENCONTRAR PARTIDA ranqueado neste sítio já fecha em caso de falha por esse motivo.",
        "As camadas de kernel previstas incluem um handshake em modo de utilizador que associa o SteamID de 64 bits verificado à conta A.C.E., uma superfície de atestação de identificador de hardware (HWID), uma lista de vigilância de assinaturas para famílias de cheats conhecidas e uma rota de elegibilidade servidor-a-servidor protegida por um segredo partilhado. Uma validação de assinatura de cheat, uma verificação de integridade recusada ou um identificador de dispositivo falsificado está especificado para produzir uma alteração imediata do estado da conta para BANNED ou PERM_BANNED e, quando existir um produto de faturação, a perda total do tempo de subscrição pré-pago, sem qualquer obrigação de reembolso. Nenhum cliente deste tipo é disponibilizado com este sítio. Os cartões de transferência Em breve são apenas layout."
      ],
      "stats": [
        {
          "label": "ESTADO DO KERNEL",
          "value": "Em desenvolvimento"
        },
        {
          "label": "FILA RANQUEADA",
          "value": "Fechada em caso de falha"
        },
        {
          "label": "ARMAZENAMENTO DE HWID",
          "value": "Não recolhido neste sítio"
        }
      ]
    },
    "faceScan": {
      "title": "Ligação biométrica por Face Scan",
      "paragraphs": [
        "O Face Scan é uma camada futura e especificada de associação de identidade, não um produto de câmara neste sítio. O desenho previsto iria, apenas após consentimento explícito e uma revisão jurídica separada, associar um modelo facial com verificação de vivacidade à mesma conta A.C.E. que já tem um SteamID verificado pelo servidor. O objetivo é impedir a partilha de contas usada para contornar uma restrição anterior. Atualmente, a A.C.E. não recolhe imagens faciais, representações faciais, endereços de e-mail nem impressões digitais de hardware. A postura de privacidade em vigor continua a ser a Estrita Necessidade: apenas o SteamID de 64 bits verificado e o nome público de apresentação da Steam.",
        "Se o Face Scan alguma vez for implementado, não substituirá o Steam OpenID, não será usado para vender publicidade comportamental e não desbloqueará, por si só, filas classificativas. O acesso às classificativas continuará a exigir uma via Anti-Cheat verificada. Até essa revisão existir, qualquer painel de Face Scan no lobby é uma pré-visualização de design."
      ]
    },
    "calibration": {
      "title": "Dez patentes de calibração de habilidade",
      "intro": "A Competitive Calibration usa as regras publicadas de Rating Points da A.C.E (versão {version}: passo {kFactor}, escala {scale}). As contas novas começam na patente 3 (Vanguard), subscrição FREE, estado ACTIVE e {startingRating} de pontuação competitiva. Os nomes de cristal no lobby são alias visuais. Os cosméticos pagos nunca compram pontuação, adversários mais fáceis, servidores de 128 ticks nem prioridade na fila. Não há nenhum produto de 128 ticks ativo à venda.",
      "table": {
        "level": "Nível",
        "engineName": "Nome do motor",
        "crystalAlias": "Nome de cristal",
        "minRating": "Pontuação mín."
      },
      "divisions": {
        "before": "As divisões I, II e III no lobby são etiquetas de montra. Só alteram métricas de layout. Não existe matchmaking ao vivo por divisão. Consulte ",
        "middle": " para a plataforma giratória 3D e ",
        "after": " para o texto de competição vinculativo."
      }
    }
  },
  "loot": {
    "kicker": "Cosméticos · em breve",
    "title": "ARQUITETURA DE RECOMPENSAS A.C.E. — DROPS DE ARMAS",
    "lede": "Acabamentos originais A.C.E., que chegam com a loja. Os cosméticos nunca afetam a competição.",
    "checkout": "Pagamento · em breve"
  },
  "identityPreview": {
    "badge": "Pré-visualização — não confirmado",
    "cards": {
      "faceScan": {
        "title": "Face Scan ao vivo verificado",
        "copy": "A prova de vida é uma verificação de fornecedor prevista. Hoje não são recolhidos dados biométricos."
      },
      "hardwareId": {
        "title": "ID de hardware associado",
        "copy": "A associação de dispositivo é um sinal de integridade previsto. Hoje não são recolhidos identificadores de hardware."
      }
    }
  },
  "preview": {
    "fallbackTitle": "Pré-visualização",
    "kicker": "Em breve",
    "returnHome": "Voltar ao início",
    "pages": {
      "support": {
        "title": "Suporte",
        "body": "O nosso apoio público abre com a beta competitiva."
      },
      "anti-cheat": {
        "title": "Visão geral do Anti-Cheat",
        "body": "A A.C.E. não tem um produto Anti-Cheat funcional. O matchmaking ranqueado continua fechado até existir uma integração real."
      },
      "download-client": {
        "title": "Transferir cliente",
        "body": "Não existe nenhum cliente de computador da A.C.E. para transferir. Um cliente nativo não faz parte da fase web atual."
      },
      "mobile-app": {
        "title": "Aplicação móvel",
        "body": "A aplicação móvel da A.C.E. está no roteiro."
      },
      "news": {
        "title": "Notícias",
        "body": "A sala de imprensa da A.C.E. abre em breve."
      },
      "about": {
        "title": "Sobre nós",
        "body": "A A.C.E. é um sítio independente de competições de Counter-Strike 2 em pré-visualização pública. Não é afiliada à Valve."
      },
      "advertising": {
        "title": "Publicidade",
        "body": "Os contactos sobre parcerias e publicidade abrem em breve."
      },
      "developers": {
        "title": "Programadores",
        "body": "Ainda não existe um programa público para programadores. As APIs de elegibilidade de servidor neste repositório são adaptadores internos, não um SDK para parceiros."
      },
      "press": {
        "title": "Imprensa",
        "body": "O kit de imprensa chega em breve."
      },
      "jobs": {
        "title": "Emprego",
        "body": "As vagas abertas serão publicadas aqui."
      },
      "terms": {
        "title": "Termos de Serviço",
        "body": "Os Termos de Serviço aplicáveis estão publicados em /terms. O regulamento do torneio está em /rules."
      },
      "privacy": {
        "title": "Política de Privacidade",
        "body": "A Política de Privacidade está publicada em /privacy. O Steam OpenID é a única forma de iniciar sessão; as palavras-passe da Steam nunca são recolhidas."
      },
      "eula": {
        "title": "EULA do Anti-Cheat",
        "body": "Não existe um EULA do Anti-Cheat porque o Anti-Cheat não está ativo. O ranqueado continua fechado em caso de falha."
      }
    }
  }
};
