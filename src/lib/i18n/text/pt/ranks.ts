import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  meta: {
    title: "Ranks competitivos",
    description:
      "Dez ranks A.C.E. numa plataforma giratória 3D em CSS que se roda arrastando. Os modelos GLTF do estúdio podem substituir as imagens estáticas quando forem entregues.",
  },
  hero: {
    kicker: "CALIBRAÇÃO",
    title: "Ranks competitivos",
    lede: "De Recruit a A.C.E. Legend, divisões {divisions}. Cada emblema é uma imagem conceptual estática numa plataforma giratória 3D em CSS (arraste ou use as teclas de seta). Mais tarde, basta colocar um GLTF no espaço documentado — ainda não há ficheiros de modelo no repositório. Os valores de pontuação são os da sua conta real quando tem sessão iniciada; caso contrário, é o piso de calibração.",
  },
  codexLink: "Abrir o Códice de Calibração",
  document: {
    title: "Documento de calibração em dez patentes",
    body: "Os nomes do motor são a escada oficial. Os nomes de cristal são arte do lobby. As etiquetas de taxa de vitórias no quadro são amostras de montra, não matchmaking ao vivo. Os cosméticos pagos nunca movem um jogador entre estes patamares.",
    level: "NÍVEL {level} · {crystal}",
    detail: "Pontuação mínima {rating}. Estudo de material: {material}.",
  },
  tiers: {
    1: { tagline: "CALIBRAÇÃO INICIAL", material: "Textura de placa em ferro bruto / obsidiana" },
    2: { tagline: "OPERACIONAL DE CAMPO", material: "Núcleo de cristal em bronze escovado" },
    3: { tagline: "LINHA DA FRENTE", material: "Fragmentos de ouro rosa com subtons vermelho-escuros profundos" },
    4: { tagline: "OFÍCIO DE PRECISÃO", material: "Bloco de fragmentos de diamante em prata cromada" },
    5: { tagline: "NÚCLEO EXPERIENTE", material: "Aura de núcleo fundido em latão envelhecido" },
    6: { tagline: "PADRÃO DE OURO", material: "Brilho de cristal em fragmentos de ouro vibrante" },
    7: { tagline: "ASCENSÃO CIANO", material: "Matriz de cristal de plasma azul-ciano" },
    8: { tagline: "TEMPESTADE DE SAFIRA", material: "Núcleo de cristal relampejante azul-safira de brilho intenso" },
    9: { tagline: "COROA DO VAZIO", material: "Núcleo de fragmentos estelares em roxo do vazio cósmico profundo" },
    10: { tagline: "A ELITE DA ELITE", material: "Estrutura de coroa de luxo em ouro fundido radiante" },
  },
  board: {
    selectEmblem: "Selecionar o emblema de rank A.C.E. {name}, nível {level}",
    emblemAlt: "Emblema de perfil A.C.E. personalizado em cristal 3D, nível {level}, {crystal} {name}",
    emblemAltLegend: "Emblema de perfil A.C.E. personalizado em cristal 3D, nível {level}",
    premium: "PREMIUM",
  },
  division: {
    label: "Divisão {division}",
    select: "Selecionar a divisão {division}",
    summary: "{divisions} divisões cada / {levels} níveis no total",
  },
  card: {
    rank: "Rank {level}",
    targetWinRate: "{winRate} de taxa de vitórias alvo",
    calibrationTarget: "Meta de calibração",
    floor: "Piso",
    samplesNote: "Amostras de layout. Não é telemetria ao vivo.",
    progressMockup: "Maqueta de progresso",
  },
  turntable: {
    stageLabel: "Emblema orbital {name}. Arraste para rodar.",
    dragToRotate: "ARRASTE PARA RODAR",
    rankSystem: "SISTEMA DE RANKS",
  },
  emblem: {
    kicker: "Marca de calibração",
    rankLabel: "Rank {level} · {name}",
  },
  calibration: {
    placementNote:
      "{complete} / {total} marcas de colocação preenchidas a partir das vitórias e derrotas guardadas. Estes nós não iniciam uma partida.",
  },
};
