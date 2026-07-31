import type { Lesson } from '../types'

/** Mundo 1 — Motivação, Escolha e Economia Comportamental (conteúdo curado, aprofundado). */
export const WORLD1_LESSONS: Record<string, Lesson> = {
  'operacoes-motivadoras': {
    conceptId: 'operacoes-motivadoras',
    intuicao: `Um prato de comida vale muito quando você está com fome e quase nada logo após o almoço. O prato é o mesmo — o que mudou foi **o valor dele para você**. Esse "quanto eu quero isto agora" é o território das **operações motivadoras (OMs)**.

Antes de tudo, dois lembretes da Análise do Comportamento. Um **operante** é um comportamento selecionado por suas consequências: se algo reforçador se segue, ele tende a se repetir. E um **estímulo discriminativo (S^D)** é uma pista de que, *naquele contexto*, o comportamento costuma funcionar (a geladeira sinaliza "aqui tem comida").

A OM é diferente do S^D — e essa diferença é o coração desta fase. O S^D diz **onde/quando** o reforço está disponível; a OM muda **o quanto aquele reforço vale** e, com isso, o quanto você age para consegui-lo. Fome não sinaliza onde há comida: ela aumenta o valor da comida e evoca procurá-la.

Na saúde isso é decisivo. A motivação para tomar o remédio, caminhar ou aderir ao tratamento **não é um traço fixo** — ela sobe e desce conforme operações motivadoras (privação, saciação, dor, efeitos colaterais, uma noite mal dormida).`,
    tecnico: `Uma **operação motivadora** é um evento ambiental com **dois efeitos** simultâneos (Michael, 1982, 1993; Laraway, Snycerski, Michael & Poling, 2003):

- **Efeito alterador de valor** (*value-altering*): altera a eficácia de algo como reforçador ou punidor.
- **Efeito alterador de comportamento** (*behavior-altering*): evoca ou abole o comportamento que, no passado, produziu aquele reforçador.

Dois subtipos (Laraway et al., 2003):
- **Operação Estabelecedora (OE)**: *aumenta* o valor do reforço e **evoca** o comportamento (ex.: privação de água; dor; calor).
- **Operação Abolidora (OA)**: *diminui* o valor e **abole** o comportamento (ex.: saciação; um analgésico que já removeu a dor reduz o valor de tomar mais analgésico).

Michael (1993) ainda distingue:
- **OMs incondicionadas (OMIs)**: o valor é alterado por história filogenética (privação de comida, água, sono, oxigênio; dor; temperatura).
- **OMs condicionadas (OMCs)**: o valor é alterado por aprendizagem — subtipos **substituta**, **reflexiva** e **transitiva**.

**Distinção crítica (cai em banca):** a OM altera o **valor** do reforço; o **S^D** sinaliza a **disponibilidade** do reforço. Trocar um pelo outro é um erro clássico apontado por Michael (1982). As OMs também sustentam o operante verbal **mando** (Skinner, 1957): é a privação ou a estimulação aversiva que estabelece o valor daquilo que se pede.`,
    historia: `A ideia de que **privação e saciação** afetam o comportamento é antiga em Skinner (a noção de estado de privação, "drive"). O termo **operação estabelecedora** aparece em **Keller e Schoenfeld (1950)**, em *Principles of Psychology*. Foi **Jack Michael (1982)** quem separou com nitidez a função **motivacional** da função **discriminativa** dos estímulos, resolvendo confusões conceituais persistentes; e **Michael (1993)** sistematizou as operações estabelecedoras e suas subcategorias. Por fim, **Laraway et al. (2003)** propuseram o termo guarda-chuva **operações motivadoras**, com os subtipos estabelecedora (OE) e abolidora (OA) — a terminologia usada hoje na pesquisa, em ABA e na análise funcional do comportamento‑problema.`,
    relacoes: `As OMs ligam a motivação ao **valor do reforço** — e é o valor que a **economia comportamental** vai quantificar (demanda, elasticidade). Também são o pano de fundo da **escolha**: o quanto uma alternativa "vale" agora depende de OMs em ação.

Mapa conceitual/autores:

Skinner (privação) → **Keller e Schoenfeld (1950)** → **Michael (1982, 1993)** → **Laraway et al. (2003)** → Economia Comportamental (valor e demanda) → Psicologia da Saúde (motivação para adesão).`,
    articleIds: ['michael1982', 'michael1993', 'laraway2003'],
    quiz: [
      {
        id: 'om-q1',
        prompt: 'A diferença essencial entre uma operação motivadora (OM) e um estímulo discriminativo (S^D) é que:',
        options: [
          'A OM altera o VALOR do reforço; o S^D sinaliza a DISPONIBILIDADE do reforço',
          'São sinônimos',
          'O S^D altera o valor; a OM sinaliza disponibilidade',
          'Ambos se aplicam apenas a reflexos',
        ],
        correct: 0,
        explanation:
          'Michael (1982) separou a função motivacional (valor) da função discriminativa (disponibilidade).',
      },
      {
        id: 'om-q2',
        prompt: 'Passar a noite em claro aumenta o valor reforçador da cafeína e evoca tomá-la. Isso é uma:',
        options: [
          'Operação estabelecedora (OE)',
          'Operação abolidora (OA)',
          'Punição',
          'Estímulo discriminativo',
        ],
        correct: 0,
        explanation:
          'A privação (de sono) aumenta o valor do reforço e evoca o comportamento — operação estabelecedora.',
      },
      {
        id: 'om-q3',
        prompt: 'Todo evento que funciona como OM produz dois efeitos. Quais?',
        options: [
          'Alterador de valor e alterador de comportamento',
          'Positivo e negativo',
          'Discriminativo e reflexo',
          'Filogenético e ontogenético',
        ],
        correct: 0,
        explanation:
          'Laraway et al. (2003): efeito alterador de valor (value-altering) e alterador de comportamento (behavior-altering).',
      },
      {
        id: 'om-q4',
        prompt:
          'Um analgésico já removeu a dor do paciente. Nesse momento, o valor reforçador de tomar mais analgésico:',
        options: [
          'Diminui — é uma operação abolidora (o estado aversivo foi removido)',
          'Aumenta — é uma operação estabelecedora',
          'Não muda',
          'Vira um estímulo discriminativo',
        ],
        correct: 0,
        explanation:
          'Removido o estado aversivo (dor), o reforço perde valor e o comportamento é abolido — operação abolidora.',
      },
    ],
  },

  'lei-igualacao': {
    conceptId: 'lei-igualacao',
    intuicao: `Imagine dois lagos lado a lado. Num deles os peixes mordem o dobro das vezes. Você não fica 100% no melhor lago nem divide o tempo igualmente — sem calcular nada, acaba passando **cerca do dobro** do tempo no lago que rende mais. Sua escolha acompanha, de forma **proporcional**, o retorno de cada opção.

Essa é a intuição da **lei da igualação**: escolha quase nunca é "tudo ou nada"; ela se distribui na proporção dos reforços que cada alternativa entrega. É um dos achados quantitativos mais robustos da área — e a ponte entre "comportamento" e "escolha", que sustenta tudo o que vem depois (alocação, autocontrole, economia comportamental).`,
    tecnico: `Em **esquemas concorrentes** (duas ou mais fontes de reforço disponíveis ao mesmo tempo), **Herrnstein (1961)** observou que a **proporção relativa de respostas** iguala a **proporção relativa de reforços obtidos**:

B1 / (B1 + B2) = r1 / (r1 + r2)

onde B = respostas (ou tempo) e r = reforços em cada alternativa. **Herrnstein (1970)** generalizou a formulação como uma versão quantitativa da **lei do efeito**, incorporando o reforço vindo de outras fontes do contexto.

**Baum (1974)** propôs a **lei da igualação generalizada**, hoje a forma mais usada:

log(B1/B2) = a · log(r1/r2) + log b

- **a (sensibilidade)**: o quanto a escolha responde às diferenças de reforço. **a = 1** é igualação perfeita; **a < 1** é **sub-igualação (undermatching)** — o desvio mais comum.
- **b (viés)**: preferência sistemática por uma alternativa, independente do reforço (posição, cor, menor esforço).

A igualação vale para a **taxa** de reforço, mas também para **magnitude, atraso e qualidade** — por isso funciona como um modelo geral de **valor**. Revisões abrangentes: Baum (1979) e Davison e McCarthy (1988).`,
    historia: `**Richard Herrnstein (1961)** publicou o estudo seminal com pombos em esquemas concorrentes de intervalo variável (JEAB), estabelecendo empiricamente a igualação. Em **Herrnstein (1970)**, "On the law of effect" (JEAB), generalizou-a e a ligou explicitamente à lei do efeito de Thorndike. **William Baum (1974)** introduziu a forma logarítmica generalizada (viés e sensibilidade), tornando a lei aplicável e mensurável em dados reais — um marco metodológico. A literatura posterior (p. ex., Davison e McCarthy, 1988) consolidou a igualação como um dos pilares quantitativos da análise da escolha.`,
    relacoes: `A igualação descreve **como** o comportamento se distribui — base da **alocação do comportamento** e do estudo do **autocontrole**. Ao incorporar magnitude e atraso, conversa diretamente com o **desconto do atraso** e a **economia comportamental**.

Mapa: Thorndike (lei do efeito) → **Herrnstein (1961, 1970)** → **Baum (1974)** → Alocação do Comportamento → Economia Comportamental.`,
    articleIds: ['herrnstein1961', 'herrnstein1970', 'baum1974'],
    quiz: [
      {
        id: 'li-q1',
        prompt: 'Segundo a lei da igualação, em duas alternativas concorrentes a proporção de respostas tende a:',
        options: [
          'Igualar a proporção de reforços obtidos em cada alternativa',
          'Ir 100% para a alternativa com mais reforço',
          'Ser aleatória',
          'Depender só do esforço físico',
        ],
        correct: 0,
        explanation: 'A proporção de respostas iguala a proporção relativa de reforços (Herrnstein, 1961).',
      },
      {
        id: 'li-q2',
        prompt: 'Na lei da igualação generalizada (Baum, 1974), a "sub-igualação" (undermatching) ocorre quando:',
        options: [
          'a < 1: a escolha é menos sensível às diferenças de reforço do que o previsto',
          'a preferência é total por uma alternativa',
          'o reforço é igual nas duas alternativas',
          'não há comportamento',
        ],
        correct: 0,
        explanation: 'Undermatching (a < 1) é o desvio mais comum: sensibilidade abaixo da igualação perfeita.',
      },
      {
        id: 'li-q3',
        prompt: 'Um pombo distribui 70% das respostas na tecla A e 30% na B. Pela igualação, a tecla A forneceu cerca de:',
        options: ['70% dos reforços obtidos', '30% dos reforços', 'Todos os reforços', 'Nenhum reforço'],
        correct: 0,
        explanation: 'A proporção de respostas (70/30) reflete a proporção de reforços obtidos.',
      },
      {
        id: 'li-q4',
        prompt: 'Na equação log(B1/B2) = a · log(r1/r2) + log b, o parâmetro b representa:',
        options: [
          'O viés (preferência sistemática, independente do reforço)',
          'A sensibilidade ao reforço',
          'O número total de respostas',
          'O atraso do reforço',
        ],
        correct: 0,
        explanation: 'b é o viés; a é a sensibilidade (Baum, 1974).',
      },
    ],
  },

  'alocacao-comportamento': {
    conceptId: 'alocacao-comportamento',
    intuicao: `Pense no seu tempo e esforço como um **orçamento** distribuído entre opções: academia ou sofá, cozinhar ou pedir delivery, estudar ou rolar o feed. O comportamento tende a fluir para onde o reforço é mais **rico** e mais **imediato**.

Aqui aparece o drama clássico da saúde: o reforço **imediato e menor** (descansar agora, o cigarro agora) costuma vencer o **maior e atrasado** (saúde daqui a anos). **Autocontrole** é conseguir escolher o reforço maior e adiado — muitas vezes **se comprometendo antes** de a tentação chegar (não deixar o doce em casa, agendar a consulta com antecedência).`,
    tecnico: `**Alocação do comportamento** é a distribuição das respostas (ou do tempo) entre alternativas ao longo do tempo — a face **molar** (agregada) da escolha, derivada da lei da igualação (Herrnstein, 1970; Baum, 1974).

Conceitos centrais:
- **Melhora local (melioration)** (Herrnstein): o organismo migra para a alternativa com maior **taxa local** de reforço, o que nem sempre maximiza o ganho no longo prazo.
- **Autocontrole por compromisso** (Rachlin e Green, 1972): diante de um reforço menor‑imediato vs. maior‑atrasado, é possível **se comprometer** antecipadamente para garantir a escolha melhor.
- **Reversão de preferência**: à medida que o reforço menor se aproxima no tempo, a preferência pode se inverter — fenômeno descrito pelo **desconto hiperbólico** (Ainslie, 1975), em que o valor cai muito com pequenos atrasos e mais suavemente com atrasos longos.

Essa dinâmica mostra por que "querer" mudar (uma OM) não basta: a **estrutura temporal** das consequências governa a escolha.`,
    historia: `A alocação nasce da própria lei da igualação (Herrnstein, 1970; Baum, 1974). **Rachlin e Green (1972)**, em experimento clássico (JEAB), demonstraram o **autocontrole por compromisso** em pombos, abrindo caminho para o estudo comportamental da impulsividade. **George Ainslie (1975)**, em "Specious reward" (Psychological Bulletin), articulou o **desconto hiperbólico** e a reversão de preferência — base do que hoje se estuda como impulsividade e autocontrole em humanos e em contextos de saúde.`,
    relacoes: `Alocação é a ponte entre a **igualação** (como o comportamento se reparte) e a **economia comportamental** (valor, desconto do atraso, demanda). O autocontrole liga tudo isso à **Psicologia da Saúde** (adesão, comportamentos de risco).

Mapa: Igualação (Herrnstein, Baum) → **Rachlin e Green (1972)** → **Ainslie (1975)** → Economia Comportamental / autocontrole → Saúde.`,
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
        explanation: 'Alocação é como o organismo reparte tempo/respostas entre as fontes de reforço.',
      },
      {
        id: 'al-q2',
        prompt:
          'Comprometer-se antecipadamente para escolher o reforço maior e atrasado (ex.: não deixar doce em casa) é o que Rachlin e Green (1972) chamaram de:',
        options: ['Autocontrole (por compromisso)', 'Extinção', 'Punição', 'Generalização'],
        correct: 0,
        explanation: 'Autocontrole por compromisso: arranjar a situação antes para garantir a escolha melhor.',
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
        explanation: 'É o padrão de escolha impulsiva — o cerne do problema do autocontrole em saúde.',
      },
      {
        id: 'al-q4',
        prompt:
          'A reversão de preferência (preferir de longe o reforço maior-atrasado, mas ceder ao menor quando ele fica iminente) é bem descrita por:',
        options: [
          'Desconto hiperbólico do valor com o atraso (Ainslie, 1975)',
          'Punição positiva',
          'Sub-igualação',
          'Operação abolidora',
        ],
        correct: 0,
        explanation:
          'No desconto hiperbólico, o valor cai acentuadamente com pequenos atrasos, gerando reversões de preferência (Ainslie, 1975).',
      },
    ],
  },

  'economia-comportamental': {
    conceptId: 'economia-comportamental',
    intuicao: `E se tratássemos cada reforçador como um **produto com preço**? O "preço" é o esforço/custo para consegui-lo; a "demanda" é o quanto você consome. Quando o preço sobe, alguns reforçadores você corta rápido (demanda **elástica**, como um doce supérfluo); outros você mantém quase a qualquer custo (demanda **inelástica**, algo que virou essencial).

Some a isso o **tempo**: um ganho hoje vale mais que o mesmo ganho daqui a um ano (**desconto do atraso**). Juntando preço e tempo, a economia comportamental vira uma lente potente para entender adesão, uso de substâncias e comportamento de risco — e por que o benefício distante da saúde tantas vezes perde para o custo imediato.`,
    tecnico: `A **economia comportamental** aplica conceitos econômicos ao comportamento operante (Hursh, 1980):

- **Curva de demanda**: consumo de um reforçador em função do seu preço (nº de respostas exigidas). Em geral o consumo cai à medida que o preço sobe.
- **Elasticidade da demanda**: sensibilidade do consumo ao preço. **Inelástica** = consumo persiste apesar do preço (valor alto); **elástica** = despenca.
- **Pmax / ponto de quebra (breakpoint)**: o preço em que o gasto de respostas é máximo / em que o consumo cai a zero.
- **Valor essencial** (Hursh e Silberberg, 2008): índice derivado do **modelo exponencial de demanda** que resume o quão essencial (inelástico) é um reforçador.
- **Desconto do atraso (delay discounting)**: queda do valor do reforço com o adiamento (Ainslie, 1975), medida típica de impulsividade.

Na saúde, Bickel et al. (2014) integram demanda e desconto no conceito de **patologia do reforço (reinforcer pathology)**: supervalorização de reforçadores imediatos (ex.: substância, comida) somada a um desconto acentuado do futuro — um modelo para dependência e para comportamentos de risco em doenças crônicas.`,
    historia: `**Steven Hursh (1980)**, em "Economic concepts for the analysis of behavior" (JEAB), importou formalmente demanda e elasticidade para a Análise do Comportamento. **Hursh e Silberberg (2008)**, na *Psychological Review*, propuseram o **modelo exponencial de demanda** e o **valor essencial**, dando à área uma métrica unificada. As raízes do estudo do autocontrole/desconto vêm de Rachlin e Green (1972) e Ainslie (1975). Mais recentemente, **Bickel et al. (2014)** consolidaram a aplicação clínica (patologia do reforço), aproximando a economia comportamental da Psicologia da Saúde.`,
    relacoes: `A economia comportamental herda o **valor do reforço** das operações motivadoras, quantifica a **escolha/alocação** e entrega ferramentas diretas para a **Psicologia da Saúde** (adesão, risco, dependência).

Mapa: Operações Motivadoras (valor) → Igualação/Alocação (escolha) → **Hursh (1980)** → **Hursh e Silberberg (2008)** → **Bickel et al. (2014)** → Doenças Crônicas / adesão.`,
    articleIds: ['hursh1980', 'hurshsilberberg2008', 'bickel2014', 'rachlingreen1972'],
    quiz: [
      {
        id: 'ec-q1',
        prompt: 'Na economia comportamental, "elasticidade da demanda" descreve:',
        options: [
          'O quanto o consumo cai quando o "preço" (custo/esforço) do reforço aumenta',
          'A velocidade da resposta',
          'O número de reforçadores',
          'A duração do estímulo',
        ],
        correct: 0,
        explanation: 'Demanda elástica cai muito com o preço; inelástica se mantém (Hursh, 1980).',
      },
      {
        id: 'ec-q2',
        prompt: 'O "valor essencial" (Hursh e Silberberg, 2008) de um reforçador é maior quando a demanda é:',
        options: [
          'Mais inelástica (persiste mesmo com preço alto)',
          'Mais elástica',
          'Nula',
          'Aleatória',
        ],
        correct: 0,
        explanation: 'Quanto mais inelástica a demanda, maior o valor essencial do reforçador.',
      },
      {
        id: 'ec-q3',
        prompt: 'Fumantes que mantêm o consumo mesmo com forte aumento de preço demonstram demanda:',
        options: ['Inelástica', 'Elástica', 'Sem valor essencial', 'Igualada'],
        correct: 0,
        explanation: 'Consumo que resiste ao aumento de preço = demanda inelástica, alto valor essencial.',
      },
      {
        id: 'ec-q4',
        prompt: 'No conceito de "patologia do reforço" (Bickel et al., 2014), a dependência combina:',
        options: [
          'Supervalorização do reforço imediato + desconto acentuado do futuro',
          'Baixa demanda + ausência de desconto',
          'Apenas punição',
          'Ausência de operações motivadoras',
        ],
        correct: 0,
        explanation:
          'Reinforcer pathology = demanda inelástica por um reforço imediato somada a forte desconto do atraso (Bickel et al., 2014).',
      },
    ],
  },
}
