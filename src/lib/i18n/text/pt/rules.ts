import type { TextBag } from "../types";

export const rules: TextBag["rules"] = {
  meta: {
    title: "Regulamento Competitivo",
    description:
      "Código de competição da A.C.E. para uma árvore de Counter-Strike 2 com 100 clãs. MR12, prolongamento, dinheiro, pausas e a isenção da Ronda 1. As inscrições estão fechadas. Nenhum prémio está financiado.",
  },
  document: {
    header: {
      kicker: "CÓDIGO DE COMPETIÇÃO A.C.E.",
      title: "Regulamento competitivo",
      lede: "A duração das partidas, o dinheiro, o relógio e as pausas seguem as definições competitivas públicas do Counter-Strike 2. A árvore de 100 clãs, a isenção da Ronda 1 e a ordem de vetos são regras da A.C.E. para este layout. O código só produz efeitos para um clã depois de esse clã ser aceite. As inscrições estão fechadas.",
      notice:
        "A A.C.E. não opera nenhum servidor de Counter-Strike 2. O início de sessão com a Steam utiliza apenas Steam OpenID. Esta página não atribui nenhum prémio e não altera nenhum rating.",
    },
    articleLabel: "ARTIGO {code}",
    articles: [
      {
        title: "Âmbito",
        paragraphs: [
          "Este é o código de competição da A.C.E. Aplica-se a um clã apenas depois de a A.C.E. aceitar esse clã num evento. As inscrições estão fechadas: 0 de 100. As filas classificativas, os servidores de partidas, os pagamentos, os prémios e um cliente anti-cheat para transferir não estão ativos. Um clique no navegador não é uma ronda ganha, e uma captura de ecrã não é um resultado.",
        ],
      },
      {
        title: "O mapa",
        paragraphs: [
          "Uma partida opõe cinco jogadores contra cinco. O tempo regulamentar dura no máximo 24 rondas. O primeiro lado a ganhar 13 rondas vence o mapa, e o mapa termina nesse momento. Os lados trocam após 12 rondas. Na primeira ronda da nova metade, cada jogador começa com $800.",
        ],
      },
      {
        title: "O relógio",
        paragraphs: [
          "Uma ronda dura 1 minuto e 55 segundos. O temporizador da bomba é de 40 segundos. Um desarme demora 10 segundos, ou 5 segundos com kit. O menu de compras fica aberto durante 20 segundos a partir do início da ronda, e só é possível comprar na zona de spawn. Os jogos competitivos oficiais congelam a ronda durante 20 segundos no início. O aquecimento dura 2 minutos, ou 15 segundos assim que os dez jogadores estiverem ligados.",
        ],
      },
      {
        title: "Dinheiro",
        paragraphs: [
          "Um jogador não pode ter mais de $16.000. Num mapa de bomba, a equipa recebe $3.250 por uma vitória por eliminação ou por tempo, $3.500 por uma vitória por detonação e $3.500 por uma vitória por desarme. Quem planta recebe $300. Quem desarma recebe $300. Um lado derrotado que tenha plantado recebe mais $600.",
          "Uma ronda perdida paga $1.400 mais $500 por cada derrota já acumulada na sequência desse lado. A definição competitiva começa a sequência em 1, pelo que a primeira ronda perdida paga $1.900. O bónus sobe depois para $2.400 e $2.900, até um máximo de $3.400. Uma ronda ganha reinicia a sequência. Uma eliminação paga a recompensa definida para essa arma. Quando a arma não define uma recompensa especial, a eliminação paga $300. O fogo amigo está ativo, e uma bala que atinja um colega de equipa causa 33 por cento do seu dano.",
        ],
      },
      {
        title: "Prolongamento",
        paragraphs: [
          "Um mapa empatado 12–12 vai a prolongamento. Um bloco tem seis rondas. Os lados trocam após três. O primeiro lado a ganhar quatro rondas no bloco vence o mapa. Um bloco que termine 3–3 dá início a outro bloco, e os blocos continuam até um lado vencer um deles. Cada jogador começa cada metade do prolongamento com $10.000. O matchmaking competitivo oficial pode parar após um bloco e registar um empate. Esta árvore não regista empates.",
        ],
      },
      {
        title: "Pausas",
        paragraphs: [
          "Estas pausas só se aplicam quando existir um servidor de partidas. Não existe nenhum neste site. Cada lado pode pedir três pausas táticas de 30 segundos por mapa, e não pode pedir uma durante a pausa do outro lado. Está disponível uma pausa tática no início do primeiro bloco de prolongamento. Cada lado pode ainda pedir uma pausa técnica de 120 segundos por mapa. Se um jogador cair, o capitão pode usar essa pausa técnica nos 30 segundos seguintes à queda para que o jogador possa voltar a ligar-se. Se o jogador não tiver regressado quando a pausa terminar, o mapa continua. Pedir uma pausa para arrastar uma ronda perdida é uma infração de conduta.",
        ],
      },
      {
        title: "O quadro e a isenção da Ronda 1",
        paragraphs: [
          "O layout do campeonato é uma árvore de eliminação direta para 100 clãs. Um clã que perca uma série é eliminado. Os nomes que ocupam vagas abertas são exemplos de layout, não clãs aceites.",
          "Quando as inscrições abrirem, os clãs são numerados pela ordem em que a A.C.E. os aceitar. Os primeiros 28 clãs aceites recebem uma isenção. A isenção dispensa apenas a Ronda 1 e coloca o clã na Ronda 2. É uma passagem na chave. Não é um bilhete pago nem um prémio. Os clãs 29 a 100 jogam a Ronda 1. Se duas aceitações tiverem o mesmo registo temporal, fica à frente o plantel de cinco titulares completado primeiro. Um clã que desista antes do bloqueio do plantel perde a isenção, e o clã aceite seguinte na ordem fica com ela.",
        ],
      },
      {
        title: "Duração das séries",
        paragraphs: [
          "A Ronda 1, a ronda de 64 e a ronda de 32 jogam-se num só mapa. A ronda de 16, os quartos de final e as duas meias-finais são à melhor de três. A grande final é à melhor de cinco.",
        ],
      },
      {
        title: "Mapas e vetos",
        paragraphs: [
          "O conjunto de mapas é a lista competitiva pública: Ancient, Anubis, Cache, Dust II, Inferno, Mirage e Nuke. Se essa lista pública mudar antes de as inscrições abrirem, a lista de substituição é publicada nesta página antes do primeiro veto.",
          "Num só mapa, os capitães banem um mapa de cada vez até restar um. O número de inscrição mais baixo bane primeiro. Numa melhor de três, cada capitão bane uma vez, depois cada um escolhe um mapa, depois cada um bane mais uma vez, e o último mapa é o decisivo. O número de inscrição mais baixo bane primeiro e o outro capitão escolhe primeiro. Numa melhor de cinco, cada capitão bane uma vez, depois alternam escolhas até estarem escolhidos quatro mapas, e o mapa restante é o decisivo. O número de inscrição mais baixo bane primeiro e escolhe em terceiro. Num mapa escolhido por um capitão, o outro capitão escolhe o lado inicial. No último mapa restante, o número de inscrição mais baixo escolhe o lado inicial. Um capitão que fique em silêncio durante dez minutos após a abertura do veto passa o banimento ou a escolha seguinte ao adversário. Hoje não está aberto nenhum veto.",
        ],
      },
      {
        title: "Plantel",
        paragraphs: [
          "Um clã indica cinco titulares e pode designar dois suplentes. Cada titular precisa de uma conta A.C.E. associada através do Steam OpenID. A A.C.E. nunca pede a palavra-passe da Steam. Um único capitão fala pelo clã nos vetos, nas pausas e nos protestos. Um suplente só pode entrar entre mapas. São proibidos a partilha de contas, as contas emprestadas e o mesmo jogador em dois clãs da mesma árvore. Este site não recolhe identificadores de hardware e não executa nenhum cliente anti-cheat.",
        ],
      },
      {
        title: "Prontidão",
        paragraphs: [
          "Estes horários só se aplicam quando existir uma partida. Os cinco titulares têm de estar prontos 15 minutos antes do início publicado. Um lado que não esteja pronto 15 minutos após o início publicado perde a série por falta de comparência. Se ambos os lados faltarem, ambos são retirados e a organização regista o resultado da vaga. Um clã que comece um mapa com menos de cinco titulares elegíveis, e não tenha nenhum suplente que possa entrar, perde esse mapa por falta de comparência. Nada neste site atribui derrotas por falta de comparência automaticamente.",
        ],
      },
      {
        title: "Conduta",
        paragraphs: [
          "Assédio, discurso de ódio, viciação de resultados, apostas na própria série, ghosting e atrasos deliberados são infrações. Uma infração comprovada pode retirar o clã da árvore. Esta página não analisa nenhum jogador e não declara nenhum jogador limpo.",
        ],
      },
      {
        title: "O resultado registado",
        paragraphs: [
          "O capitão pode apresentar um protesto antes do início do mapa seguinte. O protesto indica o mapa, a ronda e o artigo. Este site não armazena demos e não opera servidores de jogo. A organização escreve o resultado da série na chave. Esse resultado escrito é o resultado que a A.C.E. mostra. Não constitui renúncia a nenhum direito legal. Um resultado de layout não é uma partida disputada.",
        ],
      },
      {
        title: "O que não está em funcionamento",
        paragraphs: [
          "As inscrições estão fechadas. Nenhum servidor de partidas, transmissão, envio de correio ou fundo de prémios está em funcionamento. Nenhum dinheiro, skin ou token é atribuído a partir desta página. Os resultados na árvore ficam a 0 até ser registada uma série real.",
        ],
      },
    ],
  },
  tournament: {
    roadmap: {
      kicker: "Roteiro do campeonato",
      title: "Calendário de lançamento do torneio",
      stageLabel: "Fase {n}",
      stages: [
        {
          title: "Inscrições abertas",
          status: "FECHADAS · 0 DE 100",
          body: "Os primeiros 28 clãs aceites quando as inscrições abrirem recebem uma isenção da Ronda 1 e avançam para a Ronda 2. Os outros 72 jogam a Ronda 1. Este site não envia nenhum e-mail de inscrição.",
        },
        {
          title: "Chaves regionais de calibração",
          status: "BLOQUEADO",
          body: "Da ronda de 64 até à ronda de 16. Um só mapa até à ronda de 16, depois à melhor de três. Não está em curso nenhum calendário de transmissões.",
        },
        {
          title: "Quartos de final Elite Pro",
          status: "BLOQUEADO",
          body: "Os quartos de final e as meias-finais são à melhor de três, com o veto de mapas do código abaixo. Não está em curso nenhuma transmissão ao vivo.",
        },
        {
          title: "Grande Final Apex",
          status: "BLOQUEADO",
          body: "A grande final é à melhor de cinco. Nenhum prémio em dinheiro, skin ou token está financiado.",
        },
      ],
    },
    code: {
      kicker: "Código de competição",
      title: "Código da eliminatória de 100 clãs",
      lede: "Regras escritas para a árvore de 100 clãs. Originais da A.C.E. As inscrições estão fechadas, nenhuma partida está a ser jogada e nenhum prémio está financiado. Uma regra sobre um lobby, uma pausa ou uma derrota por falta de comparência só se aplica quando existir uma série real.",
      articleLabel: "Artigo {id}",
      articles: [
        {
          title: "Quadro",
          body: "O campeonato é uma árvore de eliminação direta para 100 clãs. Cada clã entra num dos lados da ala dupla. Um clã que perca uma série é eliminado. A árvore continua a ser um layout até a A.C.E. abrir as inscrições e registar resultados reais. Os nomes provisórios nas vagas abertas não são clãs aceites.",
        },
        {
          title: "Ordem de inscrição e a isenção da Ronda 1",
          body: "As inscrições estão fechadas: 0 de 100. Quando as inscrições abrirem, os clãs são numerados pela ordem em que a A.C.E. os aceitar. Os primeiros 28 clãs aceites recebem uma isenção. Essa isenção dispensa apenas a Ronda 1 e coloca o clã na Ronda 2. É uma passagem na chave, não um bilhete pago nem um prémio. Os clãs 29 a 100 jogam a Ronda 1. Se duas aceitações tiverem o mesmo registo temporal, fica à frente o plantel de cinco titulares completado primeiro. Um clã que desista antes do bloqueio do plantel perde a isenção, e o clã aceite seguinte na ordem fica com ela.",
        },
        {
          title: "Plantel",
          body: "Um clã indica cinco titulares e pode designar dois suplentes. Cada titular precisa de uma conta A.C.E. associada através do Steam OpenID. Um único capitão fala pelo clã nos vetos, nas pausas e nos protestos. Os suplentes só podem entrar entre mapas. São proibidos a partilha de contas, as contas emprestadas e um jogador em dois clãs da mesma árvore. Este site não recolhe identificadores de hardware e não executa nenhum cliente anti-cheat.",
        },
        {
          title: "Duração das séries",
          body: "A Ronda 1, a ronda de 64 e a ronda de 32 jogam-se num só mapa. A ronda de 16, os quartos de final e as duas meias-finais são à melhor de três. A grande final é à melhor de cinco. Um mapa é ganho pelo primeiro lado a chegar às 13 rondas. Com 12–12, o mapa vai a prolongamento: vence quem chegar primeiro a 4 rondas ganhas, os lados trocam após 3 rondas e cada lado começa o prolongamento com 10.000 de dinheiro. Um prolongamento empatado volta a jogar-se segundo a mesma regra.",
        },
        {
          title: "Conjunto de mapas e vetos",
          body: "O conjunto de mapas é Ancient, Anubis, Cache, Dust II, Inferno, Mirage e Nuke. Num só mapa, os capitães banem um mapa de cada vez até restar um, e o número de inscrição mais baixo bane primeiro. Numa melhor de três, cada capitão bane uma vez, depois cada um escolhe um mapa, depois cada um bane mais uma vez, e o último mapa é o decisivo. O número de inscrição mais baixo bane primeiro e o outro capitão escolhe primeiro. Numa melhor de cinco, cada capitão bane uma vez, depois alternam escolhas até estarem escolhidos quatro mapas, e o mapa restante é o decisivo. O número de inscrição mais baixo bane primeiro e escolhe em terceiro. Num mapa escolhido, o outro capitão escolhe o lado inicial. No último mapa restante, o número de inscrição mais baixo escolhe o lado inicial. Um capitão que fique em silêncio durante dez minutos após a abertura do veto passa o banimento ou a escolha seguinte ao adversário. O código completo das partidas está em /rules.",
        },
        {
          title: "Início, pausas e desconexões",
          body: "Estes horários só se aplicam quando existir uma partida. Não estão em funcionamento neste site, e nenhum lobby está aberto. Os cinco titulares têm de estar prontos 15 minutos antes do início publicado. Cada lado pode pedir três pausas táticas de 30 segundos por mapa e uma pausa técnica de 120 segundos. Está disponível uma pausa tática no início do primeiro bloco de prolongamento. Um jogador que caia pode voltar a ligar-se durante uma pausa técnica pedida nos 30 segundos seguintes à queda. Se o jogador não tiver regressado quando essa pausa terminar, o mapa continua sem ele. Nada neste site atribui derrotas por falta de comparência automaticamente. O código completo das partidas está em /rules.",
        },
        {
          title: "Ausência",
          body: "Um lado que não esteja pronto 15 minutos após o início publicado perde a série por falta de comparência. Se ambos os lados faltarem, ambos são retirados e a vaga seguinte fica aberta até a organização registar um resultado. Um clã que apresente menos de cinco titulares elegíveis no início, e não tenha nenhum suplente que possa entrar, perde esse mapa por falta de comparência.",
        },
        {
          title: "Conduta",
          body: "Assédio, discurso de ódio, viciação de resultados, apostas na própria série e atrasos deliberados são infrações. Uma infração comprovada retira o clã da árvore. O chat durante uma série ao vivo, quando existirem partidas, limita-se à formação, às pausas e ao resultado. Esta página não analisa jogadores e não afirma que um jogador esteja limpo.",
        },
        {
          title: "Protestos",
          body: "O capitão apresenta um protesto no canal da partida antes do início do mapa seguinte. O protesto indica o mapa, a ronda e o artigo do regulamento. A organização pode pedir aos dois capitães uma demo que os jogadores tenham guardado. Este site não armazena demos e não opera servidores de jogo. O árbitro principal escreve o resultado da série na chave. Esse resultado escrito é o resultado que a A.C.E. mostra. Não constitui renúncia a nenhum direito legal e não transforma um resultado de layout numa partida disputada.",
        },
        {
          title: "O que esta página não faz",
          body: "As inscrições estão fechadas. Nenhum servidor de partidas, transmissão, envio de correio ou fundo de prémios está em funcionamento. Nenhum dinheiro, skin ou token é atribuído a partir desta página. Os resultados na árvore ficam a 0 até ser registada uma série real. O código acima é a regra escrita para o layout de 100 clãs. Só produz efeitos para um clã depois de esse clã ser efetivamente aceite.",
        },
      ],
    },
  },
};
