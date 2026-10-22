import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "showcase": {
    "rankTier": "Nível de patente {n}",
    "chip": "Premium",
    "artAlt": "Arte de patente Premium {rank}"
  },
  "rpRules": {
    "kicker": "REGRAS DE RATING POINTS DA A.C.E",
    "title": "Como os Rating Points mudam",
    "lede": "Regras versão {version}. Cada novo jogador começa com {start} RP no escalão 3, {tier}. A escada é lenta de propósito: cada escalão acima do meio exige mais vitórias do que o anterior.",
    "tableTitle": "As regras",
    "colRule": "Regra",
    "colValue": "Valor",
    "rStart": "Pontuação inicial",
    "vStart": "{start} RP, escalão 3 ({tier})",
    "rWin": "Vitória contra uma equipa equilibrada",
    "vWin": "+{win} RP",
    "rLoss": "Derrota contra uma equipa equilibrada",
    "vLoss": "−{loss} RP",
    "rOdds": "Força do adversário",
    "vOdds": "A tua pontuação é comparada com a pontuação média da outra equipa (escala {scale}). Vencer uma equipa mais forte dá mais e perder contra ela custa menos; contra uma equipa mais fraca é o contrário.",
    "rClamp": "Limites por partida",
    "vClamp": "Uma vitória dá de +{winMin} a +{winMax} RP. Uma derrota custa de −{lossMin} a −{lossMax} RP.",
    "rTier": "Vitórias nos escalões altos",
    "vTier": "Os ganhos por vitória são multiplicados por {t7} nos escalões 7–9 e por {t10} no escalão 10 ({top}). As derrotas nunca são reduzidas.",
    "rMvp": "MVP da partida",
    "vMvp": "O jogador com mais abates; em caso de empate, mais dano e depois menos mortes. +{mvp} RP numa vitória e menos {mvp} RP perdidos numa derrota, nunca além dos limites por partida. Em breve: o servidor ainda não regista abates, por isso hoje não é aplicado nenhum bónus MVP.",
    "rPlacement": "Colocação",
    "vPlacement": "As tuas primeiras {n} partidas. Durante a colocação a tua pontuação não pode subir acima do escalão {maxTier} ({cap} RP).",
    "rDraw": "Empate",
    "vDraw": "0 RP para todos.",
    "rAbandon": "Abandonar ou sair de uma partida",
    "vAbandon": "−{abandon} RP, seja qual for o resultado, e sem bónus MVP.",
    "rLimits": "Intervalo de pontuação",
    "vLimits": "De {floor} a {ceiling} RP",
    "rDecay": "Inatividade",
    "vDecay": "Sem decaimento. A tua pontuação não desce enquanto estás ausente.",
    "rPaid": "Planos pagos",
    "vPaid": "Nenhum efeito. Jogadores Free, Plus e Premium seguem exatamente as mesmas regras.",
    "tierTableTitle": "Por escalão, contra uma equipa equilibrada",
    "colTier": "Escalão",
    "colFloor": "Desde",
    "colWin": "Vitória",
    "colLoss": "Derrota",
    "examplesTitle": "Exemplos práticos",
    "ex1": "De {start} a {elite} RP ({top}) contra equipas equilibradas, só com vitórias: {w1} vitórias a +{win} até ao escalão 6 e depois {w2} vitórias a +{win7} nos escalões 7–9. Ao todo, {total} vitórias.",
    "ex2": "Cada derrota pelo caminho acrescenta vitórias. Nos escalões 7–9 uma vitória dá +{win7}, mas uma derrota continua a custar −{loss}, por isso tens de vencer pelo menos {breakEven}% das partidas equilibradas para continuar a subir.",
    "ex3": "Contra uma equipa com mais 200 RP de média do que tu, uma vitória dá +{strongWin} e uma derrota custa −{strongLoss}.",
    "ex4": "Contra uma equipa com menos 200 RP de média do que tu, uma vitória dá +{weakWin} e uma derrota custa −{weakLoss}.",
    "note": "Estes números são calculados pelo mesmo código que aplica um resultado de partida verificado. São exemplos, não partidas guardadas."
  },
  "premiumCodex": {
    "kicker": "CÓDICE DE RANKS PREMIUM",
    "title": "Códice de ranks Premium",
    "lede": "Dez emblemas de cristal ilustrados, um por rank. É arte de perfil cosmética na mesma escada de Rating Points dos ranks padrão. Não altera o rating, o matchmaking nem a fila.",
    "cosmetic": "Arte cosmética · mesma escada RP · apenas A.C.E Premium US$ 7/mês",
    "imgAlt": "Arte de rank Premium {name}, nível {level}"
  },
  "premiumRanks": {
    "kicker": "RANKS PREMIUM",
    "plan": "A.C.E PREMIUM · apenas 7 $/mês",
    "title": "Arte de rank Premium",
    "lede": "O conjunto original ilustrado de ranks A.C.E: dez emblemas de cristal com divisões III/II/I, o protocolo de rating, o cartão de detalhe Legend e o visualizador 3D que roda ao arrastar. É arte de perfil para membros Premium. Lê a mesma escada de Rating Points dos ranks padrão e não dá qualquer vantagem competitiva.",
    "demo": "Valores de demonstração: progresso, taxa de vitórias e divisões neste painel são exemplos, não estatísticas em direto. Com sessão iniciada, o rating mostrado é o teu rating guardado.",
    "locked": "A arte de rank Premium faz parte do A.C.E Premium, comprado pelo checkout da Paddle. O servidor só a aplica a um perfil quando o plano guardado é Premium.",
    "standardKicker": "RANKS PADRÃO",
    "standardNote": "Todas as contas usam estes emblemas vetoriais 3D.",
    "legendTag": "PREMIUM",
    "pickerTitle": "Arte de rank no teu perfil",
    "pickerStandard": "Padrão",
    "pickerPremium": "Premium",
    "pickerLocked": "A arte de rank Premium é do A.C.E Premium (7 $/mês), disponível pelo checkout da Paddle.",
    "pickerSaved": "Guardado.",
    "pickerFailed": "Não guardado. A arte de rank Premium requer A.C.E Premium."
  },
  "meta": {
    "title": "Ranks competitivos",
    "description": "Os dez escalões A.C.E, de Iron Recruit a A.C.E Legend, com divisões e limites mínimos de classificação."
  },
  "hero": {
    "kicker": "CALIBRAÇÃO",
    "title": "Ranks competitivos",
    "lede": "Dez patamares de Recruit a A.C.E Legend, cada um com as divisões {divisions}. Arraste ou use as setas para rodar um emblema. Com sessão iniciada, vê a sua própria classificação; caso contrário, o limite mínimo de cada patamar."
  },
  "codexLink": "Abrir o Códice de Calibração",
  "document": {
    "title": "Documento de calibração em dez patentes",
    "body": "Os nomes do motor são a escada oficial. Os nomes de cristal são arte do lobby. As percentagens de vitória no quadro são valores de demonstração até ao lançamento do matchmaking classificativo. Os cosméticos pagos nunca movem um jogador entre estes patamares.",
    "level": "NÍVEL {level} · {crystal}",
    "detail": "Pontuação mínima {rating}. Estudo de material: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "CALIBRAÇÃO INICIAL",
      "material": "Textura de placa em ferro bruto / obsidiana"
    },
    "2": {
      "tagline": "OPERACIONAL DE CAMPO",
      "material": "Núcleo de cristal em bronze escovado"
    },
    "3": {
      "tagline": "LINHA DA FRENTE",
      "material": "Fragmentos de ouro rosa com subtons vermelho-escuros profundos"
    },
    "4": {
      "tagline": "OFÍCIO DE PRECISÃO",
      "material": "Bloco de fragmentos de diamante em prata cromada"
    },
    "5": {
      "tagline": "NÚCLEO EXPERIENTE",
      "material": "Aura de núcleo fundido em latão envelhecido"
    },
    "6": {
      "tagline": "PADRÃO DE OURO",
      "material": "Brilho de cristal em fragmentos de ouro vibrante"
    },
    "7": {
      "tagline": "ASCENSÃO CIANO",
      "material": "Matriz de cristal de plasma azul-ciano"
    },
    "8": {
      "tagline": "TEMPESTADE DE SAFIRA",
      "material": "Núcleo de cristal relampejante azul-safira de brilho intenso"
    },
    "9": {
      "tagline": "COROA DO VAZIO",
      "material": "Núcleo de fragmentos estelares em roxo do vazio cósmico profundo"
    },
    "10": {
      "tagline": "A ELITE DA ELITE",
      "material": "Estrutura de coroa de luxo em ouro fundido radiante"
    }
  },
  "board": {
    "selectEmblem": "Selecionar o emblema de rank A.C.E {name}, nível {level}",
    "emblemAlt": "Emblema de perfil A.C.E personalizado em cristal 3D, nível {level}, {crystal} {name}",
    "emblemAltLegend": "Emblema de perfil A.C.E personalizado em cristal 3D, nível {level}",
    "premium": "PATAMAR MÁXIMO"
  },
  "division": {
    "label": "Divisão {division}",
    "select": "Selecionar a divisão {division}",
    "summary": "{divisions} divisões cada / {levels} níveis no total"
  },
  "card": {
    "rank": "Rank {level}",
    "targetWinRate": "{winRate} de taxa de vitórias alvo",
    "floor": "Piso"
  },
  "turntable": {
    "stageLabel": "Emblema orbital {name}. Arraste para rodar.",
    "dragToRotate": "ARRASTE PARA RODAR",
    "rankSystem": "SISTEMA DE RANKS"
  },
  "emblem": {
    "kicker": "Marca de calibração",
    "rankLabel": "Rank {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} marcas de colocação preenchidas a partir das vitórias e derrotas guardadas. Estes nós não iniciam uma partida."
  }
};
