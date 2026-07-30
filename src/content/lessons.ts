import type { Lesson } from './types'

/**
 * Conteúdo curado manualmente (autoral, verificado) do Mundo 1.
 * A IA NÃO gera este conteúdo — ele é fixo, correto e instantâneo.
 * Fatos históricos e referências são reais; confira na fonte antes de citar.
 */
export const LESSONS: Record<string, Lesson> = {
  'analise-comportamento': {
    conceptId: 'analise-comportamento',
    intuicao: `Imagine que você quer entender por que uma pessoa **toma o remédio todo dia** — ou por que **deixa de tomar**. A Análise do Comportamento não procura a resposta "dentro da cabeça" (força de vontade, personalidade), e sim na **relação entre a pessoa e o ambiente**: o que acontece *antes* (o lembrete na mesa, o horário), o que a pessoa *faz*, e o que acontece *depois* (alívio do sintoma, um elogio, atenção).

É como entender um jogo observando as **jogadas e seus resultados**, em vez de tentar adivinhar o que se passa na mente do jogador. Mude as consequências e você muda o comportamento.`,
    tecnico: `A **Análise do Comportamento** é a ciência que estuda o comportamento como fenômeno próprio, explicado por sua **relação funcional** com o ambiente (variáveis antecedentes e consequentes) — não por causas mentais internas.

Tem três ramos:
- **Behaviorismo radical** — a filosofia da ciência.
- **Análise Experimental do Comportamento (AEC)** — a pesquisa básica.
- **Análise do Comportamento Aplicada (ABA)** — a aplicação a problemas socialmente relevantes.

A unidade de análise é a **contingência** (relação entre estímulos e respostas), não estruturas hipotéticas internas.`,
    historia: `Surgiu como reação ao **mentalismo** e à introspecção. **John B. Watson (1913)** propôs um behaviorismo que estudava apenas comportamento observável. **B. F. Skinner**, a partir de *The Behavior of Organisms* (1938), fundou a análise do comportamento centrada no **comportamento operante** (selecionado por consequências), distinto do reflexo respondente estudado por **Pavlov**. Mais tarde, a abordagem se expandiu para a aplicação (ABA) e para o comportamento humano complexo (*Science and Human Behavior*, 1953).`,
    relacoes: `É a base de tudo o que vem depois nesta trilha.

**Análise do Comportamento → Behaviorismo Radical → Seleção pelas Consequências → Contingências → Reforçamento…**`,
    articleIds: ['skinner1953'],
    quiz: [
      {
        id: 'ac-q1',
        prompt: 'Na Análise do Comportamento, a explicação de um comportamento é buscada principalmente:',
        options: [
          'Em traços de personalidade e força de vontade',
          'Na relação funcional entre o comportamento e o ambiente',
          'Em estruturas cerebrais inatas',
          'Em conflitos inconscientes',
        ],
        correct: 1,
        explanation:
          'O foco é a relação funcional (antecedentes e consequências), não causas internas hipotéticas.',
      },
      {
        id: 'ac-q2',
        prompt: 'Quais são os três ramos da Análise do Comportamento?',
        options: [
          'Behaviorismo radical, Análise Experimental (AEC) e Análise Aplicada (ABA)',
          'Psicanálise, cognição e comportamento',
          'Pavlov, Watson e Skinner',
          'Filogenia, ontogenia e cultura',
        ],
        correct: 0,
        explanation:
          'Behaviorismo radical (filosofia), Análise Experimental do Comportamento (básica) e Análise do Comportamento Aplicada (ABA).',
      },
      {
        id: 'ac-q3',
        prompt: 'A unidade de análise da área é:',
        options: [
          'O reflexo inato',
          'A contingência (relação entre antecedente, resposta e consequência)',
          'O traço de temperamento',
          'O processo mental inconsciente',
        ],
        correct: 1,
        explanation:
          'A contingência é a unidade — a relação de dependência entre eventos ambientais e comportamento.',
      },
    ],
  },

  'behaviorismo-radical': {
    conceptId: 'behaviorismo-radical',
    intuicao: `Há um mal-entendido comum: "behaviorismo ignora pensamentos e sentimentos". Isso descreve o behaviorismo *metodológico* (de Watson). O **behaviorismo radical** de Skinner faz o oposto: ele **inclui** pensar, sentir e lembrar — mas os trata como **comportamento** (eventos privados), sujeitos às mesmas leis, e não como *causas* mágicas que explicam o resto.

Analogia: sentir dor não é a *causa* de você gritar — dor e grito são dois efeitos de uma mesma situação (você se queimou). O behaviorismo radical evita trocar a explicação real (a queimadura) por um nome interno ("a dor mandou gritar").`,
    tecnico: `O **behaviorismo radical** é a **filosofia** da Análise do Comportamento. Suas teses centrais:
- **Monismo**: não há dualismo mente–corpo; eventos privados (pensamentos, emoções) são comportamento, observáveis apenas pelo próprio indivíduo.
- **Antimentalismo**: rejeita explicações que apelam a causas internas autônomas (mente, ego) — um *erro explicativo*.
- **Selecionismo**: o comportamento é causado por sua história de seleção pelo ambiente.`,
    historia: `Skinner usou o termo em *Behaviorism at Fifty* (1963) e o desenvolveu ao longo da obra (notadamente em *About Behaviorism*, 1974), distinguindo-o do **behaviorismo metodológico** de **Watson**, que excluía os eventos privados do estudo. "Radical" significa "da raiz": leva o behaviorismo às últimas consequências, incluindo o mundo privado como comportamento.`,
    relacoes: `**Watson (metodológico) → Skinner (radical) → Seleção pelas Consequências.**

É a lente filosófica que justifica por que estudamos contingências, e não a "mente".`,
    articleIds: [],
    quiz: [
      {
        id: 'br-q1',
        prompt: 'A principal diferença do behaviorismo radical para o metodológico é que o radical:',
        options: [
          'Nega a existência de pensamentos e sentimentos',
          'Considera eventos privados (pensar, sentir) como comportamento a ser explicado',
          'Só aceita dados de questionários',
          'Explica o comportamento por traços internos',
        ],
        correct: 1,
        explanation:
          'O radical inclui os eventos privados como comportamento; o metodológico (Watson) os excluía do estudo.',
      },
      {
        id: 'br-q2',
        prompt: 'Dizer "ele bebe porque tem uma personalidade ansiosa" é, para o behaviorismo radical:',
        options: [
          'Uma explicação funcional correta',
          'Um erro mentalista (recorrer a uma causa interna autônoma)',
          'Uma análise de contingências',
          'Um exemplo de seleção cultural',
        ],
        correct: 1,
        explanation:
          'Atribuir a causa a uma entidade interna ("personalidade ansiosa") troca a explicação ambiental por um rótulo — o erro mentalista.',
      },
      {
        id: 'br-q3',
        prompt: '"Radical", em behaviorismo radical, refere-se a:',
        options: [
          'Extremismo político',
          'Ir à raiz, incluindo o mundo privado como comportamento',
          'Rejeição de toda pesquisa',
          'Uso de punição severa',
        ],
        correct: 1,
        explanation: 'Radical = da raiz; leva o behaviorismo a incluir também os eventos privados.',
      },
    ],
  },

  'selecao-consequencias': {
    conceptId: 'selecao-consequencias',
    intuicao: `Por que existem comportamentos tão bem "ajustados" ao mundo, sem que ninguém os tenha projetado? A resposta de Skinner é a mesma ideia de Darwin, aplicada ao comportamento: **seleção**. Assim como o ambiente "seleciona" os organismos mais aptos ao longo das gerações, as **consequências selecionam comportamentos** ao longo da vida.

Comportamentos que "funcionam" (produzem consequências favoráveis) tendem a se repetir; os que não funcionam, minguam. Ninguém precisa planejar — o ambiente esculpe.`,
    tecnico: `**Seleção pelas consequências** é o modo causal proposto por Skinner, operando em **três níveis**:
1. **Filogenético** — seleção natural (a espécie).
2. **Ontogenético** — condicionamento operante (o indivíduo, ao longo da vida).
3. **Cultural** — seleção de práticas culturais (o grupo).

É um modelo **selecionista** (não mecanicista): a causa do comportamento está em sua **história de consequências**, análoga — mas não idêntica — à seleção natural.`,
    historia: `Formalizada no artigo **Skinner (1981), *Selection by consequences* (Science)**, que uniu biologia, comportamento e cultura sob um mesmo princípio causal, consolidando décadas de trabalho experimental sobre o operante iniciado em 1938.`,
    relacoes: `**Darwin (seleção natural) → Skinner (seleção pelas consequências) → Reforçamento (o mecanismo ontogenético) → Práticas culturais.**`,
    articleIds: ['skinner1981'],
    quiz: [
      {
        id: 'sc-q1',
        prompt: 'Os três níveis de seleção pelas consequências são:',
        options: [
          'Sensório, motor e cognitivo',
          'Filogenético, ontogenético e cultural',
          'Positivo, negativo e neutro',
          'Antecedente, resposta e consequência',
        ],
        correct: 1,
        explanation: 'Filogenia (espécie), ontogenia (indivíduo/operante) e cultura (práticas do grupo).',
      },
      {
        id: 'sc-q2',
        prompt: 'O nível ontogenético corresponde a:',
        options: [
          'Seleção natural das espécies',
          'Condicionamento operante ao longo da vida do indivíduo',
          'Evolução das práticas culturais',
          'Reflexos inatos',
        ],
        correct: 1,
        explanation: 'Ontogenia = história de reforçamento do indivíduo (o operante).',
      },
      {
        id: 'sc-q3',
        prompt: 'A seleção pelas consequências é análoga a qual ideia biológica?',
        options: [
          'Hereditariedade mendeliana',
          'Seleção natural darwiniana',
          'Homeostase',
          'Mutação aleatória',
        ],
        correct: 1,
        explanation: 'Skinner propôs um modelo selecionista análogo à seleção natural de Darwin.',
      },
    ],
  },

  contingencias: {
    conceptId: 'contingencias',
    intuicao: `Contingência é um termo técnico para uma ideia simples: **"se… então…"**. É a relação de dependência entre o que você faz e o que acontece. "SE eu apertar o interruptor, ENTÃO a luz acende."

Mas atenção: não basta as coisas acontecerem *juntas* (contiguidade). O que importa é a **dependência** — o comportamento realmente *muda a probabilidade* da consequência. Superstições nascem quando confundimos coincidência com contingência.`,
    tecnico: `A **tríplice contingência** é a unidade de análise do comportamento operante:

**Antecedente (S^D) → Resposta (R) → Consequência (C)**

- **Antecedente**: o contexto/estímulo que sinaliza a ocasião.
- **Resposta**: o comportamento.
- **Consequência**: o evento que segue e afeta a probabilidade futura da resposta.

Contingência descreve a **relação de dependência** (probabilística) entre esses termos — distinta de mera **contiguidade** (proximidade no tempo).`,
    historia: `A noção de três termos organiza o trabalho de Skinner sobre o operante desde *The Behavior of Organisms* (1938) e é sistematizada em *Science and Human Behavior* (1953). Refina a "lei do efeito" de **Thorndike** ao especificar o papel do antecedente.`,
    relacoes: `**Seleção pelas Consequências → Contingência (A→R→C) → Reforçamento / Punição / Controle de Estímulos.**`,
    articleIds: [],
    quiz: [
      {
        id: 'ct-q1',
        prompt: 'A tríplice contingência é composta por:',
        options: [
          'Estímulo, organismo e resposta',
          'Antecedente, resposta e consequência',
          'Reforço, punição e extinção',
          'Filogenia, ontogenia e cultura',
        ],
        correct: 1,
        explanation: 'A→R→C: antecedente (ocasião), resposta (comportamento) e consequência.',
      },
      {
        id: 'ct-q2',
        prompt: 'A diferença entre contingência e contiguidade é que a contingência envolve:',
        options: [
          'Apenas proximidade no tempo',
          'Dependência (o comportamento altera a probabilidade da consequência)',
          'Um reforço inato',
          'Ausência de antecedente',
        ],
        correct: 1,
        explanation:
          'Contingência = dependência; contiguidade = mera proximidade temporal. Confundi-las gera comportamento supersticioso.',
      },
      {
        id: 'ct-q3',
        prompt: 'No comportamento operante, o antecedente:',
        options: [
          'Causa a resposta de forma reflexa',
          'Sinaliza a ocasião em que a resposta produz certa consequência',
          'É a mesma coisa que a consequência',
          'Não tem função',
        ],
        correct: 1,
        explanation:
          'O antecedente (S^D) sinaliza quando a resposta será reforçada — não elicia reflexamente, como no respondente.',
      },
    ],
  },

  reforcamento: {
    conceptId: 'reforcamento',
    intuicao: `Reforçar não é "recompensar" no sentido do senso comum. **Reforço é qualquer consequência que faz um comportamento acontecer mais no futuro** — definido pelo *efeito*, não pela intenção.

Exemplo de saúde: uma paciente com dor crônica recebe muita atenção da família quando se queixa. Se as queixas aumentam, a atenção está **reforçando** o queixar-se — ainda que ninguém queira isso. O que define o reforço é o efeito sobre a frequência, não a boa intenção.`,
    tecnico: `**Reforçamento** é o processo em que uma consequência **aumenta a probabilidade futura** da resposta que a produziu.
- **Positivo (R+)**: a *apresentação* de um estímulo aumenta a resposta (ganhar atenção).
- **Negativo (R−)**: a *remoção/adiamento* de um estímulo aversivo aumenta a resposta (tomar analgésico remove a dor → tomar analgésico se fortalece).

É definido pela **função** (efeito na frequência), nunca pela topografia ou por ser "agradável". Os **esquemas de reforçamento** (razão/intervalo, fixo/variável) determinam padrões de resposta.`,
    historia: `Raízes na **lei do efeito** de **Thorndike** (1898/1911). **Skinner** (1938) isolou experimentalmente o operante; e *Schedules of Reinforcement* (**Ferster & Skinner, 1957**) mapeou como diferentes esquemas produzem padrões característicos de resposta.`,
    relacoes: `**Thorndike (lei do efeito) → Skinner (operante) → Reforçamento → Esquemas → Extinção / Controle de Estímulos / Economia Comportamental.**`,
    articleIds: ['skinner1953'],
    quiz: [
      {
        id: 'rf-q1',
        prompt: 'Um comportamento é reforçado quando a consequência:',
        options: [
          'É agradável para quem observa',
          'Aumenta a probabilidade futura da resposta',
          'Ocorre imediatamente',
          'Envolve comida',
        ],
        correct: 1,
        explanation: 'Reforço se define pelo efeito: aumentar a frequência futura da resposta.',
      },
      {
        id: 'rf-q2',
        prompt: 'Tomar um analgésico REMOVE a dor e, por isso, você passa a tomá-lo mais. Isso é:',
        options: [
          'Reforçamento positivo',
          'Reforçamento negativo',
          'Punição positiva',
          'Extinção',
        ],
        correct: 1,
        explanation:
          'A remoção de um estímulo aversivo (dor) que aumenta a resposta (tomar o remédio) é reforçamento negativo.',
      },
      {
        id: 'rf-q3',
        prompt: 'A família dá atenção sempre que o paciente se queixa de dor, e as queixas aumentam. Funcionalmente, a atenção é:',
        options: [
          'Punição',
          'Um reforçador das queixas',
          'Uma operação de extinção',
          'Irrelevante',
        ],
        correct: 1,
        explanation:
          'Se as queixas aumentam, a atenção está funcionando como reforçador — independentemente da intenção da família.',
      },
    ],
  },

  punicao: {
    conceptId: 'punicao',
    intuicao: `Punição é o espelho do reforço: **consequências que fazem um comportamento acontecer menos no futuro**. De novo, é definida pelo *efeito*, não pela intenção de "punir".

Exemplo: uma criança leva um choque leve ao tocar a tomada e para de tocar → o comportamento diminuiu, houve punição. Mas cuidado: gritar com alguém pode *parecer* punição e, se a pessoa continua igual (ou pior), não foi punição alguma — foi uma consequência ineficaz (às vezes até reforçadora, pela atenção).`,
    tecnico: `**Punição** é o processo em que uma consequência **reduz a probabilidade futura** da resposta.
- **Positiva (P+)**: a *apresentação* de um estímulo reduz a resposta (levar uma multa).
- **Negativa (P−)**: a *remoção* de um estímulo reduz a resposta (perder o celular).

A punição tem **efeitos colaterais** bem documentados: respostas emocionais, fuga/esquiva do agente punidor e **contracontrole**. Por isso a área prioriza o **reforçamento diferencial** de alternativas.`,
    historia: `Estudada por Skinner e, de forma sistemática, por **Azrin & Holz** ("Punishment", em *Operant Behavior*, org. Honig, 1966), que documentaram parâmetros e efeitos colaterais. A ênfase em alternativas ao controle aversivo é tema central de Skinner (ex.: *Beyond Freedom and Dignity*, 1971).`,
    relacoes: `**Contingência → Punição (P+ / P−) ⇄ Reforçamento diferencial de alternativas → Controle aversivo.**`,
    articleIds: ['skinner1953'],
    quiz: [
      {
        id: 'pn-q1',
        prompt: 'Punição, funcionalmente, é a consequência que:',
        options: [
          'Aumenta a resposta futura',
          'Reduz a probabilidade futura da resposta',
          'É sempre física',
          'Remove um reforçador positivo',
        ],
        correct: 1,
        explanation: 'Como o reforço, define-se pelo efeito — aqui, a redução da frequência futura.',
      },
      {
        id: 'pn-q2',
        prompt: 'Perder o celular (remoção de algo) e, com isso, xingar menos, é:',
        options: ['Punição positiva', 'Punição negativa', 'Reforçamento negativo', 'Extinção'],
        correct: 1,
        explanation: 'Remoção de um estímulo que reduz a resposta = punição negativa.',
      },
      {
        id: 'pn-q3',
        prompt: 'Um motivo pelo qual a AC prioriza reforçamento em vez de punição é:',
        options: [
          'Punição nunca funciona',
          'A punição tem efeitos colaterais (emocionais, fuga, contracontrole)',
          'Punição é ilegal',
          'Reforço é mais barato',
        ],
        correct: 1,
        explanation:
          'A punição pode suprimir respostas, mas gera efeitos colaterais; reforçar alternativas é mais construtivo e durável.',
      },
    ],
  },

  extincao: {
    conceptId: 'extincao',
    intuicao: `O que acontece quando um comportamento que sempre "funcionava" **para de funcionar**? Pense no elevador: você aperta o botão e ele não acende. O que você faz? Aperta de novo, mais forte, várias vezes (um "surto"), talvez fique irritado — e, se nada acontece, para de apertar.

Isso é **extinção**: quando o reforço que mantinha o comportamento deixa de vir, o comportamento diminui — mas antes costuma dar aquele "suspiro" de aumento e frustração.`,
    tecnico: `**Extinção** é a queda na frequência de uma resposta operante quando o **reforço que a mantinha deixa de ser fornecido**.

Fenômenos típicos:
- **Pico de extinção (burst)** — aumento temporário na frequência/intensidade.
- **Aumento da variabilidade** e **respostas emocionais** (frustração, agressão).
- **Recuperação espontânea** — a resposta pode reaparecer após um intervalo.

Extinção **não é** esquecimento (efeito do tempo) nem punição (apresentar/remover estímulo): é a **suspensão da contingência de reforço**.`,
    historia: `Descrita por **Skinner** desde *The Behavior of Organisms* (1938) e integrada ao estudo dos esquemas (Ferster & Skinner, 1957), que mostraram como a história de reforçamento afeta a **resistência à extinção** (esquemas intermitentes extinguem mais devagar).`,
    relacoes: `**Reforçamento → (suspensão do reforço) → Extinção → Recuperação espontânea.**

Base de intervenções clínicas (ex.: não reforçar queixas mantidas por atenção).`,
    articleIds: [],
    quiz: [
      {
        id: 'ex-q1',
        prompt: 'A extinção operante ocorre quando:',
        options: [
          'Aplica-se um estímulo aversivo',
          'O reforço que mantinha a resposta deixa de ocorrer',
          'Passa muito tempo sem praticar',
          'Troca-se o antecedente',
        ],
        correct: 1,
        explanation: 'Extinção = suspender o reforço que mantinha a resposta.',
      },
      {
        id: 'ex-q2',
        prompt: 'O "pico de extinção" (burst) é:',
        options: [
          'O desaparecimento imediato da resposta',
          'Um aumento temporário da resposta logo após o reforço cessar',
          'A volta do reforço',
          'Uma forma de punição',
        ],
        correct: 1,
        explanation:
          'No início da extinção, a resposta costuma aumentar em frequência/intensidade antes de cair.',
      },
      {
        id: 'ex-q3',
        prompt: 'Extinção difere de esquecimento porque:',
        options: [
          'São exatamente iguais',
          'Extinção é a suspensão ativa da contingência de reforço, não a mera passagem do tempo',
          'O esquecimento aumenta a resposta',
          'Extinção só ocorre com punição',
        ],
        correct: 1,
        explanation:
          'Esquecimento é efeito do tempo sem prática; extinção é a resposta cair porque o reforço parou.',
      },
    ],
  },

  'controle-estimulos': {
    conceptId: 'controle-estimulos',
    intuicao: `Você fala alto no estádio, mas sussurra na biblioteca. O comportamento é o mesmo (falar), mas o **contexto** sinaliza quando ele "funciona". Esses sinais do ambiente que dizem "agora vale a pena" são o **controle de estímulos**.

Um S^D é como o **sinal verde**: na sua presença, o comportamento costuma ser reforçado. Aprendemos a responder diferente conforme o sinal — é isso que deixa o comportamento tão afinado ao ambiente.`,
    tecnico: `**Controle de estímulos** é o fenômeno em que a probabilidade de uma resposta varia conforme os **estímulos antecedentes** presentes.
- **Estímulo discriminativo (S^D)**: sinaliza que a resposta **será** reforçada.
- **S-delta**: sinaliza que a resposta **não será** reforçada.

Envolve **discriminação** (responder diferente a estímulos diferentes) e **generalização** (responder de modo semelhante a estímulos parecidos). **Michael (1982)** alertou para não confundir a função **discriminativa** (disponibilidade do reforço) com a função **motivacional** (valor do reforço).`,
    historia: `Central desde os estudos de discriminação de Skinner (1938) e sistematizado em *Science and Human Behavior* (1953). O artigo de **Michael (1982)** é um marco por separar o controle discriminativo do controle motivacional, preparando o conceito de operação motivadora.`,
    relacoes: `**Reforçamento → Controle de Estímulos (S^D / S-delta) → Operações Motivadoras (Michael, 1982).**`,
    articleIds: ['michael1982', 'skinner1953'],
    quiz: [
      {
        id: 'ce-q1',
        prompt: 'Um estímulo discriminativo (S^D):',
        options: [
          'Elicia a resposta reflexamente',
          'Sinaliza que a resposta será reforçada',
          'Remove o reforço',
          'É o mesmo que reforçador',
        ],
        correct: 1,
        explanation:
          'O S^D sinaliza a ocasião em que a resposta costuma ser reforçada — não elicia, como no respondente.',
      },
      {
        id: 'ce-q2',
        prompt: 'Falar baixo na biblioteca e alto no estádio é exemplo de:',
        options: [
          'Extinção',
          'Controle de estímulos (discriminação)',
          'Punição negativa',
          'Operação motivadora',
        ],
        correct: 1,
        explanation: 'O contexto (biblioteca/estádio) controla discriminativamente a intensidade da fala.',
      },
      {
        id: 'ce-q3',
        prompt: 'Michael (1982) destacou que não se deve confundir a função discriminativa com a função:',
        options: [
          'Motivacional (valor do reforço)',
          'Respondente',
          'Cultural',
          'Genética',
        ],
        correct: 0,
        explanation:
          'O S^D sinaliza a disponibilidade do reforço; a função motivacional (OM) altera o valor do reforço — são distintas.',
      },
    ],
  },

  'operacoes-motivadoras': {
    conceptId: 'operacoes-motivadoras',
    intuicao: `Um prato de comida vale muito quando você está com fome — e quase nada logo depois do almoço. **A comida não mudou; o que mudou foi o valor dela para você.** Isso é uma **operação motivadora (OM)**: um evento que altera o quanto algo funciona como reforço e, com isso, o quanto você se comporta para consegui-lo.

É diferente de um "sinal". A geladeira (S^D) sinaliza *onde* tem comida; a privação de comida (OM) muda *o quanto você quer* comida.`,
    tecnico: `**Operações motivadoras (OMs)** são eventos que produzem dois efeitos:
- **Alterador de valor** (*value-altering*): mudam a eficácia de algo como reforçador/punidor.
- **Alterador de comportamento** (*behavior-altering*): evocam ou abolem o comportamento relacionado.

Dois subtipos:
- **Operação Estabelecedora (OE)**: *aumenta* o valor do reforço e evoca o comportamento (ex.: privação de água).
- **Operação Abolidora (OA)**: *diminui* o valor e abole o comportamento (ex.: saciação).

**Distinção-chave:** a OM altera o **valor** do reforço; o **S^D** sinaliza a **disponibilidade** do reforço.`,
    historia: `**Michael (1982)** separou a função motivacional da discriminativa e, em **Michael (1993)**, formalizou a *operação estabelecedora*. **Laraway, Snycerski, Michael & Poling (2003)** propuseram o termo guarda-chuva **operações motivadoras**, com os subtipos estabelecedora e abolidora — a terminologia usada hoje.`,
    relacoes: `**Controle de Estímulos → Michael (1982/1993) → Laraway et al. (2003) → Operações Motivadoras (OE/OA) → Economia Comportamental (valor, demanda).**`,
    articleIds: ['michael1982', 'michael1993', 'laraway2003'],
    quiz: [
      {
        id: 'om-q1',
        prompt: 'A diferença central entre uma operação motivadora e um estímulo discriminativo é:',
        options: [
          'A OM altera o VALOR do reforço; o S^D sinaliza a DISPONIBILIDADE do reforço',
          'Não há diferença',
          'A OM é sempre inata',
          'O S^D altera o valor do reforço',
        ],
        correct: 0,
        explanation:
          'A OM muda o quanto o reforço vale; o S^D sinaliza que o reforço está disponível.',
      },
      {
        id: 'om-q2',
        prompt: 'Ficar horas sem beber água aumenta o valor reforçador da água e evoca procurá-la. Isso é uma:',
        options: [
          'Operação abolidora',
          'Operação estabelecedora',
          'Punição',
          'Extinção',
        ],
        correct: 1,
        explanation:
          'A privação é uma OE: aumenta o valor do reforço (água) e evoca o comportamento de buscá-la.',
      },
      {
        id: 'om-q3',
        prompt: 'Os dois efeitos de toda OM são:',
        options: [
          'Positivo e negativo',
          'Alterador de valor e alterador de comportamento',
          'Discriminativo e respondente',
          'Filogenético e cultural',
        ],
        correct: 1,
        explanation:
          'Toda OM altera o valor do reforçador (value-altering) e evoca/abole o comportamento (behavior-altering).',
      },
    ],
  },
}

export const getLesson = (conceptId: string): Lesson | undefined => LESSONS[conceptId]

export const hasLesson = (conceptId: string): boolean => conceptId in LESSONS
