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

  'lei-igualacao': {
    conceptId: 'lei-igualacao',
    intuicao: `Imagine dois lagos para pescar, lado a lado. Num deles os peixes mordem o dobro das vezes. Você não fica 100% no melhor lago nem divide 50/50 — sem pensar, você acaba passando **mais ou menos o dobro** do tempo no lago que rende mais. Sua escolha acompanha, de forma proporcional, o retorno de cada opção.

Essa é a intuição da lei da igualação: a escolha raramente é "tudo ou nada". Ela se **distribui na proporção** dos reforços que cada alternativa entrega.`,
    tecnico: `A **lei da igualação** (Herrnstein, 1961) afirma que, em esquemas concorrentes, a proporção **relativa** de respostas iguala a proporção relativa de reforços obtidos:

B1 / (B1 + B2) = r1 / (r1 + r2)

A **lei da igualação generalizada** (Baum, 1974) acrescenta dois parâmetros:

log(B1/B2) = a · log(r1/r2) + log b

- **a (sensibilidade)**: quanto a escolha responde às diferenças de reforço; **a < 1** é a *sub-igualação* (undermatching), o desvio mais comum.
- **b (viés)**: preferência sistemática por uma alternativa, independente do reforço.`,
    historia: `**Herrnstein (1961)** derivou a igualação com pombos em esquemas concorrentes de intervalo variável; em **Herrnstein (1970)** generalizou-a como uma formulação quantitativa da lei do efeito. **Baum (1974)** propôs a forma generalizada (viés e sensibilidade), tornando-a aplicável a dados reais.`,
    relacoes: `**Reforçamento → esquemas concorrentes → Lei da Igualação (Herrnstein) → forma generalizada (Baum) → Alocação do Comportamento → Economia Comportamental.**`,
    articleIds: ['herrnstein1961', 'herrnstein1970', 'baum1974'],
    quiz: [
      {
        id: 'li-q1',
        prompt: 'Segundo a lei da igualação, em duas alternativas concorrentes a proporção de respostas tende a:',
        options: [
          'Ir 100% para a alternativa com mais reforço',
          'Igualar a proporção de reforços obtidos em cada alternativa',
          'Ser aleatória',
          'Depender só do esforço físico',
        ],
        correct: 1,
        explanation: 'A proporção de respostas iguala a proporção relativa de reforços (Herrnstein, 1961).',
      },
      {
        id: 'li-q2',
        prompt: 'Na lei da igualação generalizada (Baum, 1974), "sub-igualação" (undermatching) significa:',
        options: [
          'Sensibilidade menor que a igualação perfeita (a < 1): a escolha responde menos que o previsto às diferenças de reforço',
          'Preferência total por uma alternativa',
          'Reforço igual nas duas alternativas',
          'Ausência de comportamento',
        ],
        correct: 0,
        explanation:
          'Undermatching (a < 1) é o desvio mais comum: menor sensibilidade às diferenças de reforço do que a igualação perfeita.',
      },
      {
        id: 'li-q3',
        prompt: 'Um pombo distribui 70% das bicadas na tecla A e 30% na B. Pela igualação, a tecla A forneceu aproximadamente:',
        options: ['30% dos reforços', '70% dos reforços obtidos', 'Todos os reforços', 'Nenhum reforço'],
        correct: 1,
        explanation: 'A proporção de respostas (70/30) reflete a proporção de reforços obtidos — cerca de 70% na tecla A.',
      },
    ],
  },

  'alocacao-comportamento': {
    conceptId: 'alocacao-comportamento',
    intuicao: `Pense no seu tempo como um orçamento: você "gasta" comportamento entre as opções disponíveis — academia ou sofá, cozinhar ou pedir delivery. O comportamento tende a fluir para onde o reforço é mais rico e mais imediato.

E aqui mora um problema clássico da saúde: o reforço **imediato e menor** (descansar agora) muitas vezes vence o **maior e atrasado** (saúde no futuro). Autocontrole é justamente arranjar as coisas para escolher o reforço maior e adiado.`,
    tecnico: `**Alocação do comportamento** é a distribuição das respostas (ou do tempo) entre alternativas ao longo do tempo — a face "molar" da escolha, derivada da igualação.

Conceitos relacionados:
- **Autocontrole por compromisso** (Rachlin & Green, 1972): comprometer-se antecipadamente com a opção maior e atrasada.
- **Reversão de preferência**: à medida que o reforço menor e imediato se aproxima, a preferência pode se inverter.
- **Melhora local (melioration)**: tendência a migrar para a alternativa com maior taxa local de reforço, nem sempre ótima no longo prazo.`,
    historia: `Desdobra a igualação (Herrnstein, 1970; Baum, 1974) para o estudo da escolha. **Rachlin & Green (1972)** conectaram alocação, escolha e autocontrole, mostrando o papel do compromisso diante de reforçadores atrasados.`,
    relacoes: `**Lei da Igualação → Alocação do Comportamento → autocontrole/compromisso (Rachlin) → Economia Comportamental (desconto do atraso).**`,
    articleIds: ['herrnstein1970', 'baum1974', 'rachlingreen1972'],
    quiz: [
      {
        id: 'al-q1',
        prompt: 'Alocação do comportamento refere-se a:',
        options: [
          'Distribuir o comportamento entre alternativas ao longo do tempo',
          'Eliminar um comportamento',
          'Um reflexo inato',
          'A topografia da resposta',
        ],
        correct: 0,
        explanation: 'Alocação é como o organismo reparte tempo/respostas entre as fontes de reforço disponíveis.',
      },
      {
        id: 'al-q2',
        prompt:
          'Escolher um reforço maior e atrasado em vez de um menor e imediato, comprometendo-se antecipadamente, é o que Rachlin & Green (1972) estudaram como:',
        options: ['Extinção', 'Autocontrole (compromisso)', 'Punição', 'Generalização'],
        correct: 1,
        explanation:
          'Autocontrole por compromisso: arranjar antecipadamente a situação para escolher o reforço maior e atrasado.',
      },
      {
        id: 'al-q3',
        prompt:
          'Um paciente pula a caminhada (alívio imediato) apesar do benefício maior e futuro para a saúde. Isso ilustra:',
        options: [
          'Preferência pelo reforço imediato menor sobre o atrasado maior',
          'Ausência de contingências',
          'Reforçamento negativo do exercício',
          'Igualação perfeita',
        ],
        correct: 0,
        explanation:
          'É o padrão de escolha impulsiva: o reforço imediato (descanso) supera o maior e atrasado (saúde) — o cerne do autocontrole.',
      },
    ],
  },

  'economia-comportamental': {
    conceptId: 'economia-comportamental',
    intuicao: `E se tratássemos os reforçadores como **produtos com preço**? O "preço" é o esforço/custo para consegui-los, e a "demanda" é o quanto você consome. Quando o preço sobe, alguns reforçadores você corta rápido (demanda **elástica**, como um doce); outros você mantém quase a qualquer custo (demanda **inelástica**, como algo essencial).

Essa lente explica muita coisa em saúde: adesão, uso de substâncias, comportamento de risco — e por que o benefício distante perde para o custo imediato.`,
    tecnico: `A **economia comportamental** aplica conceitos econômicos ao comportamento:
- **Curva de demanda**: consumo em função do preço (respostas por reforço/custo).
- **Elasticidade**: sensibilidade do consumo ao preço; **Pmax/ponto de quebra (breakpoint)**.
- **Valor essencial** (Hursh & Silberberg, 2008): quanto mais inelástica a demanda, maior o valor essencial do reforçador.
- **Desconto do atraso (delay discounting)**: o valor de um reforço cai à medida que ele é adiado — base do autocontrole e de escolhas de saúde.`,
    historia: `**Hursh (1980)** introduziu formalmente conceitos econômicos (demanda, elasticidade) na análise do comportamento; **Hursh & Silberberg (2008)** propuseram o modelo exponencial de demanda e o valor essencial. As raízes em autocontrole/desconto vêm de **Rachlin & Green (1972)**.`,
    relacoes: `**Alocação + Operações Motivadoras → Economia Comportamental (demanda, elasticidade, desconto) → aplicações em Psicologia da Saúde (adesão, risco, doenças crônicas).**`,
    articleIds: ['hursh1980', 'hurshsilberberg2008', 'rachlingreen1972'],
    quiz: [
      {
        id: 'ec-q1',
        prompt: 'Na economia comportamental, "elasticidade da demanda" descreve:',
        options: [
          'O quanto o consumo de um reforço cai quando seu "preço" (custo/esforço) aumenta',
          'A velocidade da resposta',
          'O número de reforçadores',
          'A duração do estímulo',
        ],
        correct: 0,
        explanation: 'Demanda elástica cai muito com o aumento do preço; inelástica se mantém (Hursh, 1980).',
      },
      {
        id: 'ec-q2',
        prompt: 'O "valor essencial" (Hursh & Silberberg, 2008) de um reforçador é maior quando a demanda é:',
        options: [
          'Mais inelástica (persiste mesmo com preço alto)',
          'Mais elástica',
          'Nula',
          'Aleatória',
        ],
        correct: 0,
        explanation:
          'Quanto mais inelástica a demanda (persiste apesar do custo), maior o valor essencial do reforçador.',
      },
      {
        id: 'ec-q3',
        prompt: 'Fumantes que mantêm o consumo mesmo com forte aumento de preço demonstram uma demanda:',
        options: ['Elástica', 'Inelástica', 'Sem valor essencial', 'Igualada'],
        correct: 1,
        explanation:
          'Consumo que resiste ao aumento de preço = demanda inelástica, alto valor essencial — relevante à "patologia do reforço".',
      },
    ],
  },

  'psicologia-saude': {
    conceptId: 'psicologia-saude',
    intuicao: `Saúde não é só biologia. Boa parte do que determina adoecer ou se manter bem é **o que a pessoa faz todo dia**: como come, se movimenta, toma (ou não) a medicação, como lida com o estresse. E comportamento é moldado por contingências.

Uma psicologia da saúde de base analítico-comportamental pergunta: *o que mantém* os comportamentos de saúde e de risco — e como rearranjar o ambiente para favorecer os saudáveis.`,
    tecnico: `A **Psicologia da Saúde** aplica a psicologia à promoção da saúde, à prevenção e ao manejo de doenças. Adota o **modelo biopsicossocial** (Engel, 1977): o adoecer resulta da interação de fatores biológicos, psicológicos e sociais.

Na abordagem analítico-comportamental, comportamentos de saúde (adesão, autocuidado, comportamento de risco) são **operantes**, analisados funcionalmente; intervenções rearranjam **antecedentes e consequências**.`,
    historia: `Consolidou-se como campo nas décadas de 1970-80. O artigo de **Engel (1977)**, propondo o modelo biopsicossocial, é um marco por desafiar o modelo estritamente biomédico.`,
    relacoes: `**Reforçamento / Controle de Estímulos → Psicologia da Saúde → Doenças Crônicas → Qualidade de Vida.**`,
    articleIds: ['engel1977'],
    quiz: [
      {
        id: 'ps-q1',
        prompt: 'O modelo biopsicossocial (Engel, 1977) propõe que a saúde/doença resulta de:',
        options: [
          'Apenas fatores biológicos',
          'Fatores biológicos, psicológicos e sociais em interação',
          'Apenas fatores psicológicos',
          'Acaso',
        ],
        correct: 1,
        explanation: 'Engel (1977) ampliou o modelo biomédico para incluir dimensões psicológicas e sociais.',
      },
      {
        id: 'ps-q2',
        prompt: 'Na abordagem analítico-comportamental da saúde, a adesão ao tratamento é entendida como:',
        options: [
          'Traço fixo de personalidade',
          'Operante mantido por contingências (antecedentes e consequências)',
          'Reflexo inato',
          'Escolha puramente racional',
        ],
        correct: 1,
        explanation:
          'Comportamentos de saúde são operantes: analisá-los funcionalmente permite rearranjar contingências para promovê-los.',
      },
      {
        id: 'ps-q3',
        prompt: 'Para aumentar a adesão a uma medicação, uma intervenção comportamental atuaria principalmente em:',
        options: [
          'Antecedentes e consequências do comportamento de tomar o remédio',
          'Apenas na dose do remédio',
          'Na genética do paciente',
          'Em nada, pois adesão é força de vontade',
        ],
        correct: 0,
        explanation: 'Ajustar lembretes (antecedentes) e consequências (feedback, reforço) é a lógica comportamental da adesão.',
      },
    ],
  },

  'doencas-cronicas': {
    conceptId: 'doencas-cronicas',
    intuicao: `Uma doença crônica — como a **Hipertensão Arterial Pulmonar (HAP)** — não se resolve com um único tratamento: ela é manejada **todos os dias, por anos**. Isso a torna uma maratona comportamental: adesão, automonitoramento, mudanças de estilo de vida.

São as pequenas contingências diárias, repetidas no tempo, que decidem o desfecho — e é aí que a análise do comportamento e a economia comportamental entram.`,
    tecnico: `**Doenças crônicas** são condições de longo curso que exigem manejo contínuo. Alvos comportamentais típicos: **adesão** ao tratamento, **automonitoramento**, mudança de **estilo de vida**.

A **HAP** é crônica, progressiva e grave, com forte impacto funcional e sobre a qualidade de vida. O **desconto do atraso** ajuda a explicar por que custos imediatos (efeitos colaterais, esforço) frequentemente superam benefícios de saúde maiores, porém distantes.`,
    historia: `A transição epidemiológica do século XX — de doenças agudas/infecciosas para condições crônicas — colocou o comportamento no centro dos desfechos de saúde, motivando a Psicologia da Saúde e a análise comportamental aplicada à adesão.`,
    relacoes: `**Psicologia da Saúde → Doenças Crônicas (ex.: HAP) → Qualidade de Vida → medida (instrumentos de QV).**`,
    articleIds: [],
    quiz: [
      {
        id: 'dc-q1',
        prompt: 'O que torna as doenças crônicas um desafio especialmente comportamental?',
        options: [
          'São curadas rapidamente',
          'Exigem manejo diário e sustentado por longos períodos (adesão, automonitoramento, estilo de vida)',
          'Não têm tratamento',
          'Independem do comportamento do paciente',
        ],
        correct: 1,
        explanation: 'Por serem de longo curso, dependem de comportamentos mantidos ao longo do tempo — não de um ato único.',
      },
      {
        id: 'dc-q2',
        prompt: 'A Hipertensão Arterial Pulmonar (HAP) caracteriza-se por ser:',
        options: [
          'Aguda e autolimitada',
          'Crônica, progressiva e com forte impacto funcional e sobre a qualidade de vida',
          'Sem necessidade de tratamento contínuo',
          'Restrita a idosos',
        ],
        correct: 1,
        explanation: 'A HAP é crônica e grave, com grande carga sintomática/funcional — daí a centralidade da QV e da adesão.',
      },
      {
        id: 'dc-q3',
        prompt: 'Por que benefícios futuros à saúde muitas vezes perdem para custos imediatos (ex.: parar de fumar)?',
        options: [
          'Por desconto do atraso: o valor do reforço cai à medida que ele é adiado',
          'Porque não há contingências',
          'Porque o futuro não importa biologicamente',
          'Por reforçamento negativo do futuro',
        ],
        correct: 0,
        explanation: 'O desconto do atraso explica a preferência por ganhos imediatos frente a benefícios maiores e distantes.',
      },
    ],
  },

  'qualidade-vida': {
    conceptId: 'qualidade-vida',
    intuicao: `Dois pacientes com os **mesmos exames** podem viver de formas muito diferentes: um ativo e esperançoso, outro limitado e sofrendo. A qualidade de vida captura essa **experiência vivida** — não apenas os marcadores da doença.

Por isso, em doenças crônicas como a HAP, medir qualidade de vida é tão importante quanto medir a fisiologia: é ela que traduz o que o tratamento significa para a vida da pessoa.`,
    tecnico: `**Qualidade de vida (QV)** é um construto **multidimensional** (físico, psicológico, social, ambiental). A OMS/**WHOQOL (1995)** a define como a percepção do indivíduo sobre sua posição na vida, no contexto de sua cultura e valores.

Distinções importantes:
- **QV geral** × **qualidade de vida relacionada à saúde (HRQoL)**.
- Instrumentos **genéricos** (comparam populações) × **específicos por doença** (mais sensíveis a mudanças da condição-alvo, ex.: HAP).`,
    historia: `O **WHOQOL Group (1995)** operacionalizou a definição da OMS e desenvolveu medidas transculturais de qualidade de vida, consolidando o construto na pesquisa em saúde.`,
    relacoes: `**Doenças Crônicas → Qualidade de Vida (geral vs HRQoL) → Psicometria / Desenvolvimento de Instrumentos (como medir).**`,
    articleIds: ['whoqol1995'],
    quiz: [
      {
        id: 'qv-q1',
        prompt: 'Qualidade de vida, na definição da OMS/WHOQOL, é:',
        options: [
          'O resultado de exames laboratoriais',
          'A percepção do indivíduo sobre sua posição na vida, no contexto de sua cultura e valores',
          'A ausência de doença',
          'A renda do paciente',
        ],
        correct: 1,
        explanation: 'A definição da OMS é centrada na percepção do indivíduo, multidimensional e sensível à cultura.',
      },
      {
        id: 'qv-q2',
        prompt: 'A qualidade de vida relacionada à saúde (HRQoL) diferencia-se da QV geral porque:',
        options: [
          'Ignora a saúde',
          'Foca especificamente o impacto da saúde/doença e do tratamento na vida',
          'É apenas física',
          'Não pode ser medida',
        ],
        correct: 1,
        explanation: 'A HRQoL recorta o construto para o que se relaciona à saúde — útil em doenças crônicas como a HAP.',
      },
      {
        id: 'qv-q3',
        prompt: 'Instrumentos específicos por doença (vs genéricos) são preferíveis quando se quer:',
        options: [
          'Comparar populações muito diferentes',
          'Detectar mudanças finas ligadas àquela condição específica (ex.: HAP)',
          'Medir renda',
          'Evitar qualquer validação',
        ],
        correct: 1,
        explanation: 'Instrumentos específicos são mais sensíveis a aspectos e mudanças próprios da doença-alvo.',
      },
    ],
  },

  psicometria: {
    conceptId: 'psicometria',
    intuicao: `Se você vai construir uma régua, precisa garantir que ela meça comprimento de forma **consistente** e que realmente meça **comprimento** (e não peso). A psicometria é esse controle de qualidade — mas para coisas invisíveis, como qualidade de vida, ansiedade ou dor.

Duas perguntas guiam tudo: a medida é **consistente** (confiabilidade)? E mede **o que diz medir** (validade)?`,
    tecnico: `A **psicometria** reúne teoria e métodos para medir construtos psicológicos. Dois grandes referenciais: **Teoria Clássica dos Testes (TCT)** e **Teoria de Resposta ao Item (TRI)**.

- **Confiabilidade**: consistência da medida — consistência interna (**alfa de Cronbach**, 1951) e estabilidade (teste-reteste).
- **Validade**: evidências de que a medida representa o construto — de conteúdo, de estrutura interna e de relação com outras variáveis. A **validade de construto** (Cronbach & Meehl, 1955) é central.
- **Análise fatorial** (exploratória/confirmatória) examina a estrutura interna.`,
    historia: `**Cronbach (1951)** formalizou o coeficiente alfa (confiabilidade); **Cronbach & Meehl (1955)** introduziram a validade de construto — dois marcos que estruturam a psicometria moderna.`,
    relacoes: `**Qualidade de Vida (o que medir) → Psicometria (como medir bem: confiabilidade e validade) → Desenvolvimento de Instrumentos.**`,
    articleIds: ['cronbach1951', 'cronbachmeehl1955'],
    quiz: [
      {
        id: 'pm-q1',
        prompt: 'Confiabilidade e validade referem-se, respectivamente, a:',
        options: [
          'Consistência da medida e se ela mede o que pretende',
          'Custo e rapidez',
          'Tamanho da amostra e do teste',
          'Idade e sexo dos respondentes',
        ],
        correct: 0,
        explanation:
          'Confiabilidade = consistência/estabilidade; validade = a medida realmente representa o construto pretendido.',
      },
      {
        id: 'pm-q2',
        prompt: 'O alfa de Cronbach (1951) é um índice de:',
        options: [
          'Validade de conteúdo',
          'Consistência interna (confiabilidade)',
          'Tamanho do efeito',
          'Significância estatística',
        ],
        correct: 1,
        explanation: 'O alfa estima a consistência interna dos itens — uma forma de confiabilidade.',
      },
      {
        id: 'pm-q3',
        prompt: 'A validade de construto (Cronbach & Meehl, 1955) diz respeito a:',
        options: [
          'Se o instrumento realmente mede o construto teórico pretendido',
          'Ao preço do teste',
          'Ao número de itens',
          'À ordem das perguntas',
        ],
        correct: 0,
        explanation:
          'Validade de construto avalia se as inferências sobre o construto teórico são sustentadas pelas evidências.',
      },
    ],
  },

  'desenvolvimento-instrumentos': {
    conceptId: 'desenvolvimento-instrumentos',
    intuicao: `Criar uma boa escala de qualidade de vida para HAP é como **projetar um instrumento de precisão**: você define exatamente o que quer medir, redige os itens, testa com especialistas e pacientes, e prova estatisticamente que os itens se sustentam e significam o que deveriam.

Não se trata de "inventar perguntas": cada etapa gera evidências de que a medida é confiável e válida.`,
    tecnico: `O **desenvolvimento de instrumentos** costuma seguir etapas:
1. **Definir o construto** e seu domínio.
2. **Gerar itens**.
3. **Validade de conteúdo** (juízes/especialistas).
4. **Estudo piloto** e **análise de itens**.
5. **Validação estrutural** (análise fatorial) e de **confiabilidade**.
6. **Adaptação transcultural**, quando aplicável.

O **COSMIN** (Mokkink et al., 2010) oferece consenso sobre as propriedades de medida a avaliar e como relatá-las.`,
    historia: `Reúne e padroniza décadas de prática psicométrica. A iniciativa **COSMIN** (Mokkink et al., 2010) estabeleceu consenso internacional sobre taxonomia e critérios para propriedades de medida de instrumentos em saúde.`,
    relacoes: `**Psicometria → Desenvolvimento de Instrumentos (ex.: escala de QV para HAP) → pesquisa aplicada (sua dissertação).**`,
    articleIds: ['mokkink2010', 'cronbachmeehl1955'],
    quiz: [
      {
        id: 'di-q1',
        prompt: 'Qual é uma sequência típica no desenvolvimento de um instrumento?',
        options: [
          'Definir construto → gerar itens → validade de conteúdo → piloto → análise/validação',
          'Publicar → coletar → definir construto',
          'Aplicar sem validar',
          'Apenas calcular o alfa',
        ],
        correct: 0,
        explanation:
          'Parte-se da definição do construto e da geração de itens, seguida de validação de conteúdo, piloto e análises psicométricas.',
      },
      {
        id: 'di-q2',
        prompt: 'A validade de conteúdo costuma ser avaliada por:',
        options: [
          'Juízes/especialistas que julgam a representatividade dos itens',
          'Um único respondente',
          'O preço do estudo',
          'A cor do questionário',
        ],
        correct: 0,
        explanation: 'Especialistas avaliam se os itens cobrem adequadamente o construto (validade de conteúdo).',
      },
      {
        id: 'di-q3',
        prompt: 'O COSMIN (Mokkink et al., 2010) oferece:',
        options: [
          'Um software de estatística',
          'Padrões/consenso sobre propriedades de medida de instrumentos em saúde',
          'Uma escala de QV pronta',
          'Um modelo de negócio',
        ],
        correct: 1,
        explanation: 'O COSMIN padroniza taxonomia e critérios para avaliar propriedades de medida de instrumentos de saúde.',
      },
    ],
  },
}

export const getLesson = (conceptId: string): Lesson | undefined => LESSONS[conceptId]

export const hasLesson = (conceptId: string): boolean => conceptId in LESSONS
