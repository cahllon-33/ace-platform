import type { TextBag } from "../types";

export const rules: TextBag["rules"] = {
  meta: {
    title: "Regulamento competitivo",
    description:
      "Código de competição da A.C.E. para uma chave de 100 clãs de Counter-Strike 2. MR12, prorrogação, dinheiro, pausas e a isenção da Rodada 1. As inscrições estão fechadas. Nenhum prêmio é financiado.",
  },
  document: {
    header: {
      kicker: "CÓDIGO DE COMPETIÇÃO A.C.E.",
      title: "Regulamento competitivo",
      lede: "A duração da partida, o dinheiro, o relógio e as pausas seguem as configurações competitivas públicas de Counter-Strike 2. A chave de 100 clãs, a isenção da Rodada 1 e a ordem de veto são regras da A.C.E. para este formato. O código só passa a valer para um clã depois que esse clã é aceito. As inscrições estão fechadas.",
      notice:
        "A A.C.E. não opera um servidor de Counter-Strike 2. O login pela Steam usa somente o Steam OpenID. Esta página não concede prêmio e não altera rating.",
    },
    articleLabel: "ARTIGO {code}",
    articles: [
      {
        title: "Abrangência",
        paragraphs: [
          "Este é o código de competição da A.C.E. Ele se aplica a um clã somente depois que a A.C.E. aceita esse clã em um evento. As inscrições estão fechadas: 0 de 100. Filas ranqueadas, servidores de partida, pagamentos, prêmios e um cliente de anti-cheat para download não estão ativos. Um clique no navegador não é uma rodada vencida, e uma captura de tela não é um placar.",
        ],
      },
      {
        title: "O mapa",
        paragraphs: [
          "Uma partida é de cinco jogadores contra cinco. O tempo regulamentar dura no máximo 24 rodadas. O primeiro lado a vencer 13 rodadas leva o mapa, e o mapa termina nesse momento. Os lados trocam depois de 12 rodadas. Na primeira rodada do novo tempo, cada jogador começa com $800.",
        ],
      },
      {
        title: "O relógio",
        paragraphs: [
          "Uma rodada dura 1 minuto e 55 segundos. O cronômetro da bomba é de 40 segundos. Um desarme leva 10 segundos, ou 5 segundos com kit. O menu de compra fica aberto por 20 segundos a partir do início da rodada, e só é permitido comprar na área de spawn. Partidas competitivas oficiais congelam a rodada por 20 segundos no início. O aquecimento dura 2 minutos, ou 15 segundos quando todos os dez jogadores estão conectados.",
        ],
      },
      {
        title: "Dinheiro",
        paragraphs: [
          "Um jogador não pode ter mais de $16.000. Em um mapa de bomba, a equipe recebe $3.250 por vitória por eliminação ou por tempo, $3.500 por vitória por detonação e $3.500 por vitória por desarme. Quem planta recebe $300. Quem desarma recebe $300. Um lado perdedor que plantou recebe $600 extras.",
          "Uma rodada perdida paga $1.400 mais $500 para cada derrota já acumulada na sequência desse lado. A configuração competitiva começa a sequência em 1, então a primeira rodada perdida paga $1.900. O bônus sobe depois para $2.400 e $2.900, até um teto de $3.400. Uma rodada vencida zera a sequência. Um abate paga a recompensa definida para aquela arma. Quando a arma não define recompensa especial, o abate paga $300. O fogo amigo está ativado, e um tiro que acerta um companheiro causa 33 por cento do dano.",
        ],
      },
      {
        title: "Prorrogação",
        paragraphs: [
          "Um mapa empatado em 12–12 vai para a prorrogação. Um bloco tem seis rodadas. Os lados trocam depois de três. O primeiro lado a vencer quatro rodadas no bloco leva o mapa. Um bloco que termina 3–3 dá início a outro bloco, e os blocos continuam até que um lado vença um deles. Cada jogador começa cada tempo da prorrogação com $10.000. O matchmaking competitivo oficial pode parar após um bloco e registrar empate. Esta chave não registra empate.",
        ],
      },
      {
        title: "Pausas",
        paragraphs: [
          "Estas pausas só se aplicam depois que existir um servidor de partida. Não existe nenhum neste site. Cada lado pode pedir três pausas táticas de 30 segundos por mapa, e não pode pedir uma durante a pausa do outro lado. Uma pausa tática fica disponível no início do primeiro bloco de prorrogação. Cada lado também pode pedir uma pausa técnica de 120 segundos por mapa. Se um jogador cair, o capitão pode usar essa pausa técnica em até 30 segundos após a queda para que o jogador se reconecte. Se o jogador não tiver voltado quando a pausa terminar, o mapa continua. Pedir pausa para arrastar uma rodada perdida é infração de conduta.",
        ],
      },
      {
        title: "O campo e a isenção da Rodada 1",
        paragraphs: [
          "O formato do campeonato é uma chave de eliminação simples para 100 clãs. Um clã que perde uma série está eliminado. Os nomes que ocupam vagas abertas são exemplos de layout, não clãs aceitos.",
          "Quando as inscrições abrirem, os clãs serão numerados na ordem em que a A.C.E. os aceitar. Os primeiros 28 clãs aceitos recebem uma isenção. A isenção pula apenas a Rodada 1 e coloca o clã na Rodada 2. É uma passagem na chave. Não é um ingresso pago nem um prêmio. Os clãs 29 a 100 jogam a Rodada 1. Se duas aceitações tiverem o mesmo horário, vem primeiro o clã que concluiu antes o elenco de cinco titulares. Um clã que desiste antes do travamento de elenco perde a isenção, e o próximo clã aceito na ordem fica com ela.",
        ],
      },
      {
        title: "Duração das séries",
        paragraphs: [
          "A Rodada 1, a fase de 64 e a fase de 32 são em mapa único. As oitavas de final, as quartas de final e as duas semifinais são melhor de três. A grande final é melhor de cinco.",
        ],
      },
      {
        title: "Mapas e o veto",
        paragraphs: [
          "O pool é a lista competitiva pública: Ancient, Anubis, Cache, Dust II, Inferno, Mirage e Nuke. Se essa lista pública mudar antes da abertura das inscrições, a lista substituta será publicada nesta página antes do primeiro veto.",
          "Em mapa único, os capitães banem um mapa por vez até restar um mapa. O menor número de inscrição bane primeiro. Em melhor de três, cada capitão bane uma vez, depois cada um escolhe um mapa, depois cada um bane mais uma vez, e o último mapa é o decisivo. O menor número de inscrição bane primeiro e o outro capitão escolhe primeiro. Em melhor de cinco, cada capitão bane uma vez, depois os dois alternam escolhas até que quatro mapas sejam definidos, e o mapa restante é o decisivo. O menor número de inscrição bane primeiro e escolhe em terceiro. Em um mapa escolhido por um capitão, o outro capitão define o lado inicial. No último mapa restante, o menor número de inscrição define o lado inicial. Um capitão que fica em silêncio por dez minutos depois da abertura do veto passa o próximo banimento ou escolha para o adversário. Nenhum veto está aberto hoje.",
        ],
      },
      {
        title: "Elenco",
        paragraphs: [
          "Um clã lista cinco titulares e pode indicar dois reservas. Todo titular precisa de uma conta A.C.E. vinculada pelo Steam OpenID. A A.C.E. nunca pede a senha da Steam. Um capitão fala pelo clã no veto, nas pausas e nos protestos. Um reserva só pode entrar entre mapas. Compartilhamento de conta, conta emprestada e o mesmo jogador em dois clãs da mesma chave são proibidos. Este site não coleta identificadores de hardware e não executa um cliente de anti-cheat.",
        ],
      },
      {
        title: "Prontidão",
        paragraphs: [
          "Estes horários só se aplicam depois que existir uma partida. Cinco titulares devem estar prontos 15 minutos antes do início publicado. Um lado que não estiver pronto 15 minutos depois do início publicado perde a série por W.O. Se os dois lados estiverem ausentes, ambos são removidos e a organização define a vaga. Um clã que começa um mapa com menos de cinco titulares elegíveis, e não tem reserva que possa entrar, perde esse mapa por W.O. Nada neste site aplica W.O. automático.",
        ],
      },
      {
        title: "Conduta",
        paragraphs: [
          "Assédio, discurso de ódio, manipulação de resultados, apostar na própria série, ghosting e atraso deliberado são infrações. Uma infração comprovada pode remover o clã da chave. Esta página não analisa jogadores e não declara um jogador liberado.",
        ],
      },
      {
        title: "O resultado registrado",
        paragraphs: [
          "O capitão pode registrar um protesto antes do início do próximo mapa. O protesto indica o mapa, a rodada e o artigo. Este site não armazena demos e não executa servidores de jogo. A organização registra o resultado da série na chave. Esse resultado registrado é o placar que a A.C.E. exibe. Ele não é renúncia a nenhum direito legal. Um placar de layout não é uma partida jogada.",
        ],
      },
      {
        title: "O que não está funcionando",
        paragraphs: [
          "As inscrições estão fechadas. Nenhum servidor de partida, transmissão, envio de e-mails ou premiação está em funcionamento. Nenhum dinheiro, skin ou token é concedido por esta página. Os placares da chave ficam em 0 até que uma série real seja registrada.",
        ],
      },
    ],
  },
  tournament: {
    roadmap: {
      kicker: "Roteiro do campeonato",
      title: "Cronograma de lançamento do torneio",
      stageLabel: "Etapa {n}",
      stages: [
        {
          title: "Inscrições abertas",
          status: "FECHADO · 0 DE 100",
          body: "Os primeiros 28 clãs aceitos quando as inscrições abrirem recebem isenção da Rodada 1 e avançam para a Rodada 2. Os outros 72 jogam a Rodada 1. Nenhum e-mail de inscrição é enviado por este site.",
        },
        {
          title: "Chaves regionais de calibração",
          status: "BLOQUEADO",
          body: "Da fase de 64 até as oitavas de final. Mapa único até as oitavas de final, depois melhor de três. Nenhuma agenda de transmissão está em funcionamento.",
        },
        {
          title: "Quartas de final Elite Pro",
          status: "BLOQUEADO",
          body: "As quartas de final e as semifinais são melhor de três, com o veto de mapas do código abaixo. Nenhuma transmissão ao vivo está em funcionamento.",
        },
        {
          title: "Grande final Apex",
          status: "BLOQUEADO",
          body: "A grande final é melhor de cinco. Nenhum prêmio em dinheiro, skin ou token é financiado.",
        },
      ],
    },
    code: {
      kicker: "Código de competição",
      title: "Código do mata-mata de 100 clãs",
      lede: "Regras escritas para a chave de 100 clãs. Originais da A.C.E. As inscrições estão fechadas, nenhuma partida está sendo jogada e nenhum prêmio é financiado. Uma regra sobre lobby, pausa ou W.O. só se aplica depois que existir uma série real.",
      articleLabel: "Artigo {id}",
      articles: [
        {
          title: "Campo",
          body: "O campeonato é uma chave de eliminação simples para 100 clãs. Cada clã entra em um lado da chave dupla. Um clã que perde uma série está eliminado. A chave continua sendo um layout até que a A.C.E. abra as inscrições e registre resultados reais. Os nomes provisórios em vagas abertas não são clãs aceitos.",
        },
        {
          title: "Ordem de inscrição e a isenção da Rodada 1",
          body: "As inscrições estão fechadas: 0 de 100. Quando as inscrições abrirem, os clãs serão numerados na ordem em que a A.C.E. os aceitar. Os primeiros 28 clãs aceitos recebem uma isenção. Essa isenção pula apenas a Rodada 1 e coloca o clã na Rodada 2. É uma passagem na chave, não um ingresso pago nem um prêmio. Os clãs 29 a 100 jogam a Rodada 1. Se duas aceitações tiverem o mesmo horário, vem primeiro o clã que concluiu antes o elenco de cinco titulares. Um clã que desiste antes do travamento de elenco perde a isenção, e o próximo clã aceito na ordem fica com ela.",
        },
        {
          title: "Elenco",
          body: "Um clã lista cinco titulares e pode indicar dois reservas. Todo titular precisa de uma conta A.C.E. vinculada pelo Steam OpenID. Um capitão fala pelo clã nos vetos, nas pausas e nos protestos. Os reservas só podem entrar entre mapas. Compartilhamento de conta, contas emprestadas e um jogador em dois clãs da mesma chave são proibidos. Este site não coleta identificadores de hardware e não executa um cliente de anti-cheat.",
        },
        {
          title: "Duração das séries",
          body: "A Rodada 1, a fase de 64 e a fase de 32 são em mapa único. As oitavas de final, as quartas de final e as duas semifinais são melhor de três. A grande final é melhor de cinco. Um mapa é vencido pelo primeiro lado a chegar a 13 rodadas. Em 12–12, o mapa vai para a prorrogação: vence quem fizer 4 rodadas primeiro, os lados trocam após 3 rodadas e cada lado começa a prorrogação com 10.000 de dinheiro. Uma prorrogação empatada é jogada de novo com a mesma regra.",
        },
        {
          title: "Pool de mapas e veto",
          body: "O pool é Ancient, Anubis, Cache, Dust II, Inferno, Mirage e Nuke. Em mapa único, os capitães banem um mapa por vez até restar um mapa, e o menor número de inscrição bane primeiro. Em melhor de três, cada capitão bane uma vez, depois cada um escolhe um mapa, depois cada um bane mais uma vez, e o último mapa é o decisivo. O menor número de inscrição bane primeiro e o outro capitão escolhe primeiro. Em melhor de cinco, cada capitão bane uma vez, depois os dois alternam escolhas até que quatro mapas sejam definidos, e o mapa restante é o decisivo. O menor número de inscrição bane primeiro e escolhe em terceiro. Em um mapa escolhido, o outro capitão define o lado inicial. No último mapa restante, o menor número de inscrição define o lado inicial. Um capitão que fica em silêncio por dez minutos depois da abertura do veto passa o próximo banimento ou escolha para o adversário. O código completo das partidas está em /rules.",
        },
        {
          title: "Início, pausa e desconexão",
          body: "Estes horários só se aplicam depois que existir uma partida. Eles não estão em funcionamento neste site, e nenhum lobby está aberto. Cinco titulares devem estar prontos 15 minutos antes do início publicado. Cada lado pode pedir três pausas táticas de 30 segundos por mapa e uma pausa técnica de 120 segundos. Uma pausa tática fica disponível no início do primeiro bloco de prorrogação. Um jogador que caiu pode se reconectar durante uma pausa técnica pedida em até 30 segundos após a queda. Se o jogador não tiver voltado quando essa pausa terminar, o mapa continua sem ele. Nada neste site aplica W.O. automático. O código completo das partidas está em /rules.",
        },
        {
          title: "Ausência",
          body: "Um lado que não estiver pronto 15 minutos depois do início publicado perde a série por W.O. Se os dois lados estiverem ausentes, ambos são removidos e a vaga seguinte fica aberta até que a organização registre um resultado. Um clã que entra com menos de cinco titulares elegíveis no início, e não tem reserva que possa entrar, perde esse mapa por W.O.",
        },
        {
          title: "Conduta",
          body: "Assédio, discurso de ódio, manipulação de resultados, apostar na própria série e atraso deliberado são infrações. Uma infração comprovada remove o clã da chave. O chat durante uma série ao vivo, quando existirem partidas, fica limitado a escalação, pausa e placar. Esta página não analisa jogadores e não afirma que um jogador está liberado.",
        },
        {
          title: "Protestos",
          body: "O capitão registra um protesto no canal da partida antes do início do próximo mapa. O protesto indica o mapa, a rodada e o artigo da regra. A organização pode pedir aos dois capitães uma demo que os jogadores salvaram. Este site não armazena demos e não executa servidores de jogo. O árbitro principal registra o resultado da série na chave. Esse resultado registrado é o placar que a A.C.E. exibe. Ele não é renúncia a nenhum direito legal e não transforma um placar de layout em uma partida jogada.",
        },
        {
          title: "O que esta página não faz",
          body: "As inscrições estão fechadas. Nenhum servidor de partida, transmissão, envio de e-mails ou premiação está em funcionamento. Nenhum dinheiro, skin ou token é concedido por esta página. Os placares da chave ficam em 0 até que uma série real seja registrada. O código acima é a regra escrita para o formato de 100 clãs. Ele só passa a valer para um clã depois que esse clã for de fato aceito.",
        },
      ],
    },
  },
};
