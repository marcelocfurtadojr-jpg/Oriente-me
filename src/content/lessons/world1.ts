import type { Lesson } from '../types'

/** Mundo 1 — Motivação, Escolha e Economia Comportamental (curado, nível de capítulo). */
export const WORLD1_LESSONS: Record<string, Lesson> = {
  'operacoes-motivadoras': {
    conceptId: 'operacoes-motivadoras',
    intuicao: `Comece por uma cena banal: você passa em frente a uma padaria. Num dia comum, o cheiro de pão pode não produzir efeito nenhum; mas se você está há horas sem comer, o mesmo cheiro "puxa" você para dentro. O pão é o mesmo, a padaria é a mesma — o que mudou foi **o valor que o pão tem para você agora**. Esse "quanto isto vale neste momento" é o que as **operações motivadoras (OMs)** capturam.

Vale separar duas perguntas que o senso comum mistura:

- **"Onde/quando eu consigo isto?"** — respondida por pistas do ambiente (a geladeira, o horário do almoço, o restaurante aberto). Tecnicamente, são **estímulos discriminativos (S^D)**: sinais de que, *naquele contexto*, o comportamento costuma ser reforçado.
- **"O quanto eu quero isto agora?"** — respondida pelo seu **estado**: fome, sede, dor, sono, tédio. É aqui que entram as OMs.

A distinção parece sutil, mas é o **coração desta fase** — e é onde estudantes e clínicos mais escorregam. Fome não diz *onde* há comida; ela **aumenta o valor** da comida e faz você *procurá-la*. Um analgésico que já removeu sua dor não informa nada de novo sobre disponibilidade; ele **reduz o valor** de tomar mais analgésico.

**Uma cena clínica.** Duas terças-feiras seguidas, o mesmo paciente com HAP recebe a orientação de caminhar 15 minutos. Na primeira, dormiu bem, a dor está controlada: ele caminha. Na segunda, passou a noite dispneico e dolorido: a mesma orientação (mesmo S^D) não "pega". Nada mudou no ambiente de pistas — mudou o **estado motivacional**. Sem esse conceito, colocaríamos a diferença na conta da "falta de disciplina"; com ele, enxergamos uma **operação motivadora** em ação e sabemos onde intervir.

Guarde a ideia-chave: **motivação, aqui, não é um sentimento nem um traço — é um efeito de variáveis manipuláveis** (privação, saciação, dor, sono, contexto), e isso é uma boa notícia, porque o que é manipulável é passível de intervenção.`,
    tecnico: `### Definição e os dois efeitos
Uma **operação motivadora (OM)** é uma variável ambiental que produz **dois efeitos simultâneos** (Michael, 1982, 1993; Laraway, Snycerski, Michael & Poling, 2003):

1. **Efeito alterador de valor** (*value-altering*): muda momentaneamente a **eficácia reforçadora ou punidora** de um evento — o quanto ele funciona como consequência.
2. **Efeito alterador de comportamento**: **evoca** (aumenta a frequência atual — efeito *evocativo*) ou **abole** (reduz — efeito *abativo*) o comportamento que, na história do organismo, foi reforçado por aquele evento.

A OM age sobre a **consequência** (o valor do reforço) e, por tabela, sobre a **resposta** — diferentemente do S^D, que age sobre a **ocasião**. Vale para reforçadores **e** punidores (a dor intensa, por exemplo, aumenta a eficácia punidora de certos eventos).

### Os dois polos: OE e OA
- **Operação Estabelecedora (OE)**: *aumenta* o valor e *evoca*. Ex.: privação de água → água vira reforço potente → beber aumenta; a **dor** estabelece a própria remoção como reforço e evoca fuga.
- **Operação Abolidora (OA)**: *diminui* o valor e *abole*. Ex.: saciação (beber muito) → água perde valor; um analgésico que removeu a dor → tomar mais perde valor.

### A quádrupla contingência
A tríplice contingência é A→R→C (antecedente–resposta–consequência). A OM entra como **termo motivacional** que define se aquela C está "valendo" — e, portanto, se o S^D vai de fato evocar a resposta. Sem privação de comida, o S^D "restaurante" não evoca entrar e pedir.

### Taxonomia de Michael (1993)
- **OMs incondicionadas (OMIs/UMOs)** — valor alterado por história **filogenética**, sem aprendizagem: privação/saciação de comida, água, oxigênio, sono, atividade; temperatura; e estimulação **dolorosa**.
- **OMs condicionadas (OMCs/CMOs)** — valor alterado por **aprendizagem**:
  - **Substituta (CMO-S)**: estímulo pareado com uma OM passa a ter os efeitos dela (um horário associado à fome já evoca procurar comida).
  - **Reflexiva (CMO-R)**: estímulo que precede sistematicamente uma piora estabelece a **própria remoção** como reforço — a lógica da esquiva e ponte com a ansiedade (a "cara feia" do chefe antes da bronca).
  - **Transitiva (CMO-T)**: estímulo que torna **outro** estímulo reforçador (precisar da chave torna a chave reforçadora) — muito usada no ensino do mando.

### O teste OM × S^D (o ponto que "cai em banca")
O S^D sinaliza **disponibilidade diferencial** do reforço; a OM altera o **valor** do reforço (independe de disponibilidade). Teste: *mudar privação/saciação altera a força do comportamento?* → OM. *Mudar a pista de "tem reforço aqui" altera?* → S^D. Michael (1982) escreveu justamente para desfazer a confusão histórica entre as duas funções.

### OM no comportamento verbal e na clínica
No **mando** (Skinner, 1957) — o operante de "pedir" — é a OM que controla a resposta: pede-se água sob privação de água; por isso o ensino de mandos em ABA **captura/estabelece OMs**. E, na **análise funcional** do comportamento-problema (Iwata et al., 1982/1994; McGill, 1999), manipular a condição motivacional (p. ex., privação de atenção) é o que "liga" cada função testada.`,
    historia: `### Antecedentes: do "drive" às operações
A ideia de que **privação e saciação** governam o comportamento é antiga. No início do século XX aparecia como **"drive" (impulso)**, central na teoria de Clark Hull — mas "drive" era um estado interno hipotético, algo que a Análise do Comportamento evita. Skinner (já em *The Behavior of Organisms*, 1938) preferia falar em **operações observáveis** (horas de privação, quantidade ingerida), deslocando a explicação do "estado interno" para a **manipulação ambiental**. O termo **operação estabelecedora** aparece em **Keller e Schoenfeld (1950)**, *Principles of Psychology*.

### A virada de Michael
Foi **Jack Michael (1982)**, no JEAB, quem deu o passo decisivo: separou de forma rigorosa a **função discriminativa** da **função motivacional** dos estímulos — uma confusão que, à época, fazia tratar toda "motivação" como se fosse controle discriminativo. Em **Michael (1993)** ele sistematizou as operações estabelecedoras e propôs a taxonomia das OMCs.

### Consolidação e difusão
**Laraway et al. (2003)**, no JABA, mostraram que "operação estabelecedora" cobria só metade do fenômeno (o aumento de valor) e propuseram o termo guarda-chuva **operações motivadoras**, com os polos **OE** e **OA** — terminologia dominante hoje. No plano aplicado, **Vollmer e Iwata (1991)** demonstraram experimentalmente que privação e saciação alteram a eficácia de reforçadores; **McGill (1999)** revisou as implicações clínicas; e tutoriais como **Langthorne e McGill (2009)** difundiram o conceito na prática. As OMs tornaram-se peça central da **análise funcional** (tradição de Iwata et al., anos 1980) e do ensino de comportamento verbal.`,
    relacoes: `As OMs conectam **motivação** e **valor do reforço**:
- Para trás, distinguem-se do **controle de estímulos** (S^D = disponibilidade; OM = valor).
- Para frente, é o **valor do reforço** — estabelecido por OMs — que a **economia comportamental** quantifica como **demanda** e **elasticidade**: uma OE que eleva o valor tende a tornar a demanda mais **inelástica**.
- Ligam-se à **escolha/alocação**: o quanto uma alternativa "vale" agora depende das OMs em ação.
- Aterrissam na **Psicologia da Saúde**: motivação para adesão, apetite, dor, uso de substâncias.

Mapa conceitual/autores:

Hull (drive) → Skinner (1938; operações de privação) → **Keller e Schoenfeld (1950)** → **Michael (1982, 1993)** → **Laraway et al. (2003)** → Vollmer e Iwata (1991) / McGill (1999) / Iwata (análise funcional) / Skinner (1957, mando) → Economia Comportamental (valor → demanda) → Psicologia da Saúde.`,
    aplicacoes: `### Evidência experimental
**Vollmer e Iwata (1991)** mostraram, em delineamento experimental, que manipular **privação e saciação** altera a eficácia de reforçadores (comida, música, atenção) — uma demonstração direta do efeito alterador de valor.

### Análise funcional e tratamento
Na **análise funcional** (Iwata et al., 1982/1994), cada condição-teste embute uma OM: priva-se de atenção antes de testar a função "atenção"; interrompe-se a atividade para testar "fuga". No tratamento, a **manipulação de OMs** é uma tática de prevenção: saciação prévia (*noncontingent reinforcement*), oferta antecipada do reforço e redução do estado aversivo diminuem a probabilidade do comportamento-problema (McGill, 1999).

### Ensino de linguagem
O treino de **mandos** (Skinner, 1957) depende de capturar/estabelecer OMs: ensina-se a pedir quando o item está genuinamente estabelecido como reforço.

### Saúde — e a sua pesquisa
Na adesão em HAP, **dispneia** e **efeitos colaterais** são estados aversivos (OEs) que valorizam reforços concorrentes (descansar, evitar esforço); dor controlada, sono e suporte social operam como **OAs** sobre a esquiva. Intervenções eficazes frequentemente **manipulam OMs sem nomeá-las**: prescrever exercício só após controlar a dor; ancorar a medicação a uma rotina já reforçadora; reduzir custo de resposta e estado aversivo do autocuidado. **Fronteira:** ligar OMs a **operações econômicas** (como estados motivacionais deslocam curvas de demanda) e **mensurar** flutuações motivacionais em doenças crônicas — o que conecta esta fase ao Mundo 3.`,
    criticas: `### Circularidade e observabilidade
A crítica mais séria é o risco de **circularidade**: se inferimos a OM a partir do próprio efeito que ela deveria explicar ("comeu porque estava com fome; sabemos que estava com fome porque comeu"), o conceito vira rótulo. A defesa: ancorar a OM em **operações observáveis e manipuláveis** (horas de privação, dose administrada), não no "estado" inferido.

### Proliferação de subtipos
As OMCs — sobretudo **reflexiva** e **transitiva** — são debatidas quanto à necessidade e aos limites; parte da literatura discute se alguns casos não se explicariam melhor por história de reforço + estímulos já conhecidos, sem novos rótulos.

### Fronteira com o controle de estímulos
No dado real, um mesmo evento costuma ter funções **mistas** (motivacional e discriminativa); a separação limpa do uso didático nem sempre é nítida — algo que a própria literatura reconhece desde Michael (1982).

### Humanos verbais
Em humanos, **regras e comportamento governado por regras** podem sobrepor-se às OMs diretas (alguém adere "porque o médico mandou", não por uma OM momentânea), complicando a análise.

Essas limitações não invalidam o conceito: exigem **definições operacionais** e boa **mensuração** — exatamente a ponte com a psicometria, adiante na trilha.`,
    articleIds: ['michael1982', 'michael1993', 'laraway2003', 'skinner1957', 'mcgill1999', 'iwata1994'],
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
        explanation: 'Michael (1982) separou a função motivacional (valor) da função discriminativa (disponibilidade).',
      },
      {
        id: 'om-q2',
        prompt: 'Passar a noite em claro aumenta o valor reforçador da cafeína e evoca tomá-la. Isso é uma:',
        options: ['Operação estabelecedora (OE)', 'Operação abolidora (OA)', 'Punição', 'Estímulo discriminativo'],
        correct: 0,
        explanation: 'A privação (de sono) aumenta o valor do reforço e evoca o comportamento — operação estabelecedora.',
      },
      {
        id: 'om-q3',
        prompt: 'Os dois efeitos que definem toda OM são:',
        options: [
          'Alterador de valor e alterador de comportamento (evocativo/abativo)',
          'Positivo e negativo',
          'Discriminativo e reflexo',
          'Filogenético e ontogenético',
        ],
        correct: 0,
        explanation: 'Laraway et al. (2003): value-altering (muda o valor) e behavior-altering (evoca/abole).',
      },
      {
        id: 'om-q4',
        prompt: 'Um analgésico já removeu a dor do paciente. Nesse momento, o valor de tomar mais analgésico:',
        options: [
          'Diminui — operação abolidora (o estado aversivo foi removido)',
          'Aumenta — operação estabelecedora',
          'Não muda',
          'Vira um estímulo discriminativo',
        ],
        correct: 0,
        explanation: 'Removido o estado aversivo (dor), o reforço perde valor e o comportamento é abolido — OA.',
      },
      {
        id: 'om-q5',
        prompt: 'A privação de comida altera o valor do alimento sem depender de aprendizagem prévia. Trata-se de uma:',
        options: [
          'Operação motivadora incondicionada (OMI/UMO)',
          'Operação motivadora condicionada (OMC)',
          'Operação abolidora aprendida',
          'Função discriminativa',
        ],
        correct: 0,
        explanation: 'OMIs têm valor alterado por história filogenética (comida, água, sono, dor); OMCs dependem de aprendizagem (Michael, 1993).',
      },
      {
        id: 'om-q6',
        prompt: 'Numa análise funcional (Iwata et al.), por que se priva o paciente de atenção antes de testar a função "atenção"?',
        options: [
          'Para estabelecer a atenção como reforço naquele teste (criar a OM adequada)',
          'Para puni-lo',
          'Para extinguir a resposta',
          'Para apresentar um novo S^D',
        ],
        correct: 0,
        explanation: 'Cada condição-teste embute uma OM: a privação de atenção torna a atenção um reforço eficaz naquele teste.',
      },
      {
        id: 'om-q7',
        prompt: 'A principal crítica conceitual às OMs é o risco de:',
        options: [
          'Circularidade — inferir a OM a partir do próprio efeito que ela deveria explicar',
          'Serem observáveis demais',
          'Não terem relação com reforço',
          'Só existirem em animais',
        ],
        correct: 0,
        explanation: 'Por isso a boa prática ancora a OM em operações manipuláveis (privação/saciação), não no "estado" inferido.',
      },
    ],
  },

  'lei-igualacao': {
    conceptId: 'lei-igualacao',
    intuicao: `Imagine dois lagos lado a lado. Num deles os peixes mordem o dobro das vezes. Você não fica 100% no melhor lago nem divide o tempo igualmente — sem calcular nada, acaba passando **cerca do dobro** do tempo no lago que rende mais. Sua escolha acompanha, de forma **proporcional**, o retorno de cada opção.

Essa é a intuição da **lei da igualação**: escolha quase nunca é "tudo ou nada"; ela se distribui na proporção dos reforços que cada alternativa entrega. Parece óbvio depois de dito, mas foi um achado **quantitativo** e replicável — o momento em que a Análise do Comportamento passou a *medir* a escolha, e não só descrevê-la. É a ponte entre "comportamento" e "escolha" que sustenta a alocação, o autocontrole e a economia comportamental.`,
    tecnico: `### A forma simples (Herrnstein, 1961)
Em **esquemas concorrentes** (duas fontes de reforço disponíveis ao mesmo tempo), a **proporção relativa de respostas** iguala a **proporção relativa de reforços obtidos**:

B1 / (B1 + B2) = r1 / (r1 + r2)

### A lei do efeito quantitativa (Herrnstein, 1970)
Herrnstein generalizou a igualação para uma **única alternativa**, postulando que sempre há reforço de outras fontes (r0):

B = k · r / (r + r0)

— uma hipérbole que descreve como a taxa de resposta cresce e satura com a taxa de reforço. É a "lei do efeito" transformada em equação.

### A igualação generalizada (Baum, 1974)
A forma mais usada em dados reais:

log(B1/B2) = a · log(r1/r2) + log b

- **a (sensibilidade)**: **a = 1** é igualação perfeita; **a < 1** é **sub-igualação (undermatching)**, o desvio mais comum, atribuído a **discriminação imperfeita** entre as alternativas e à facilidade de alternar.
- **b (viés)**: preferência sistemática independente do reforço (posição, cor, menor esforço).

### Detalhes que importam
Para observar a igualação "limpa", usa-se um **atraso de mudança (COD, changeover delay)**, que penaliza a alternância impulsiva. A igualação vale não só para **taxa**, mas para **magnitude, imediatismo e qualidade** do reforço — por isso funciona como um modelo geral de **valor** (base para os esquemas concorrentes encadeados e para o estudo do autocontrole). Revisões: Baum (1979); de Villiers e Herrnstein (1976); Davison e McCarthy (1988).`,
    historia: `**Richard Herrnstein (1961)** publicou o estudo seminal com pombos em esquemas concorrentes de intervalo variável (JEAB), estabelecendo empiricamente a igualação. Em **Herrnstein (1970)**, "On the law of effect" (JEAB), generalizou-a e a ligou explicitamente à lei do efeito de Thorndike, propondo a hipérbole da alternativa única. **William Baum (1974)** introduziu a forma logarítmica generalizada (viés e sensibilidade), tornando a lei aplicável e mensurável em dados reais — um marco metodológico. Revisões como **de Villiers e Herrnstein (1976)** e **Davison e McCarthy (1988)** consolidaram a igualação como um dos pilares quantitativos da análise da escolha.`,
    relacoes: `A igualação descreve **como** o comportamento se distribui — base da **alocação** e do estudo do **autocontrole**. Ao incorporar magnitude e atraso, conversa diretamente com o **desconto do atraso** e a **economia comportamental** (o "valor" que a demanda quantifica).

Mapa: Thorndike (lei do efeito) → **Herrnstein (1961, 1970)** → **Baum (1974)** → Davison e McCarthy (1988) → Alocação → Economia Comportamental.`,
    aplicacoes: `### Da caixa experimental ao mundo
A igualação foi observada muito além do laboratório: na **distribuição de conversas em grupos**, em decisões esportivas (estudos clássicos sobre escolha de jogadas no futebol americano em função do retorno de cada tipo de jogada) e em padrões de **comportamento social**. Em contextos clínicos, a alocação de comportamento-problema entre "funções" concorrentes segue a lógica da igualação: reduz-se o problema **enriquecendo o reforço da alternativa apropriada** (a base do reforço diferencial).

### Para a sua área
Pensar adesão como **escolha concorrente** (cuidar-se vs. alternativas imediatas) sugere que não basta "insistir" no comportamento‑alvo: é preciso mudar as **proporções de reforço** entre as alternativas — tornar o autocuidado mais reforçador e/ou menos custoso relativamente às concorrentes.`,
    criticas: `### Descrição ou mecanismo?
A igualação é uma **descrição** notavelmente robusta, mas há um longo debate **molar × molecular**: ela seria uma lei fundamental ou o *resultado* de processos locais (como a **melhora local / melioration**, ou a maximização momentânea)? A questão segue em aberto.

### Undermatching onipresente
Como o desvio típico é a sub-igualação (a < 1), críticos apontam que a "igualação perfeita" é mais um caso-limite idealizado do que a regra empírica — daí a importância da forma **generalizada** de Baum.

### Generalização a humanos
Em humanos verbais, **regras** e instruções podem sobrepor-se à sensibilidade ao reforço, produzindo padrões que se afastam da igualação — um lembrete de que o modelo, embora geral, não é o único controle da escolha.`,
    articleIds: ['herrnstein1961', 'herrnstein1970', 'baum1974', 'davisonmccarthy1988'],
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
        prompt: 'Na igualação generalizada (Baum, 1974), a sub-igualação (undermatching) corresponde a:',
        options: [
          'a < 1: menor sensibilidade às diferenças de reforço do que o previsto',
          'preferência total por uma alternativa',
          'reforço igual nas duas alternativas',
          'ausência de comportamento',
        ],
        correct: 0,
        explanation: 'Undermatching (a < 1) é o desvio mais comum, ligado a discriminação imperfeita e à alternância.',
      },
      {
        id: 'li-q3',
        prompt: 'A equação B = k · r / (r + r0), de Herrnstein (1970), descreve:',
        options: [
          'A taxa de resposta a uma alternativa em função da taxa de reforço, saturando (hipérbole)',
          'O viés de posição',
          'A punição positiva',
          'A definição de operação motivadora',
        ],
        correct: 0,
        explanation: 'É a "lei do efeito quantitativa": a resposta cresce e satura com o reforço, considerando reforço de outras fontes (r0).',
      },
      {
        id: 'li-q4',
        prompt: 'O "atraso de mudança" (changeover delay, COD) é usado nos experimentos de igualação para:',
        options: [
          'Penalizar a alternância impulsiva e permitir observar a igualação de forma mais limpa',
          'Aumentar a punição',
          'Eliminar o reforço',
          'Medir a validade do teste',
        ],
        correct: 0,
        explanation: 'Sem COD, a alternância excessiva mascara a igualação; o COD estabiliza a escolha entre as alternativas.',
      },
      {
        id: 'li-q5',
        prompt: 'O debate "molar × molecular" sobre a igualação questiona se ela é:',
        options: [
          'Uma lei fundamental ou o resultado de processos locais (ex.: melhora local)',
          'Verdadeira apenas em humanos',
          'Um tipo de punição',
          'Uma medida de confiabilidade',
        ],
        correct: 0,
        explanation: 'Discute-se se a igualação é primitiva ou emerge de mecanismos locais como a melioration.',
      },
    ],
  },

  'alocacao-comportamento': {
    conceptId: 'alocacao-comportamento',
    intuicao: `Pense no seu tempo e esforço como um **orçamento** distribuído entre opções: academia ou sofá, cozinhar ou pedir delivery, estudar ou rolar o feed. O comportamento tende a fluir para onde o reforço é mais **rico** e mais **imediato**.

Aqui aparece o drama clássico da saúde: o reforço **imediato e menor** (descansar agora, o cigarro agora) costuma vencer o **maior e atrasado** (saúde daqui a anos). E há um detalhe cruel: mesmo quem "decide" de manhã cuidar-se pode **mudar de ideia** à noite, quando a tentação fica próxima. **Autocontrole** é conseguir sustentar a escolha do reforço maior e adiado — muitas vezes **se comprometendo antes** de a tentação chegar.`,
    tecnico: `### Da igualação à alocação
**Alocação do comportamento** é a distribuição das respostas (ou do tempo) entre alternativas ao longo do tempo — a face **molar** da escolha, derivada da lei da igualação (Herrnstein, 1970; Baum, 1974).

### Como o organismo "decide" alocar?
Há modelos concorrentes:
- **Melhora local (melioration)** (Herrnstein e Vaughan, 1980): desloca-se para a alternativa com maior **taxa local** de reforço — o que pode ser localmente ótimo e globalmente ruim.
- **Maximização** (otimização global): escolheria a combinação que maximiza o reforço total.
A evidência tende a favorecer a melhora local em muitos arranjos, o que ajuda a explicar escolhas "irracionais" de longo prazo (incluindo em saúde).

### Autocontrole e desconto do atraso
**Rachlin e Green (1972)** mostraram o **autocontrole por compromisso**: arranjar antecipadamente a situação (retirar a opção tentadora) para garantir a escolha maior‑atrasada. A **reversão de preferência** — preferir de longe o reforço maior, mas ceder ao menor quando ele fica iminente — é explicada pelo **desconto hiperbólico** (Ainslie, 1975), formalizado por Mazur (1987) como:

V = A / (1 + k·D)

onde V é o valor presente, A a magnitude, D o atraso e k a taxa de desconto (impulsividade). A forma **hiperbólica** (não exponencial) é o que gera as reversões: o valor cai muito com pequenos atrasos e mais devagar com atrasos longos.

Assim, "querer" mudar (uma OM) não basta: a **estrutura temporal** das consequências governa a escolha.`,
    historia: `A alocação nasce da lei da igualação (Herrnstein, 1970; Baum, 1974). **Rachlin e Green (1972)**, em experimento clássico (JEAB), demonstraram o autocontrole por compromisso em pombos, inaugurando o estudo comportamental da impulsividade. **George Ainslie (1975)**, em "Specious reward" (Psychological Bulletin), articulou o **desconto hiperbólico** e a reversão de preferência; **Mazur (1987)** deu-lhe a forma matemática hoje padrão. **Herrnstein e Vaughan (1980)** formalizaram a **melhora local**. Essa linha conecta a análise experimental da escolha à pesquisa contemporânea sobre impulsividade em humanos.`,
    relacoes: `Alocação é a ponte entre a **igualação** (como o comportamento se reparte) e a **economia comportamental** (valor, desconto, demanda). O autocontrole liga tudo à **Psicologia da Saúde** (adesão, comportamentos de risco).

Mapa: Igualação (Herrnstein, Baum) → melhora local (Herrnstein e Vaughan, 1980) → **Rachlin e Green (1972)** → **Ainslie (1975)** / Mazur (1987) → Economia Comportamental → Saúde.`,
    aplicacoes: `### Desconto do atraso como marcador comportamental
A taxa de desconto (k) tornou-se um **marcador transdiagnóstico**: descontos mais acentuados associam-se a dependência, obesidade, jogo e baixa adesão — um campo enorme desde Ainslie (1975) e revisado por Madden e Bickel (2010). Medir o desconto de um paciente é medir, comportamentalmente, sua "impulsividade" naquele domínio.

### Dispositivos de compromisso
A lógica de Rachlin e Green (1972) vira **tecnologia de intervenção**: retirar o alimento tentador de casa, agendar consultas com antecedência, contratos de contingência, poupança automática. São formas de o "eu de agora" amarrar o "eu de depois".

### Para a sua área
Adesão em doenças crônicas é, em boa medida, um problema de **alocação intertemporal**: o custo é hoje, o benefício é distante. Intervenções que **aproximam o benefício** (feedback imediato, metas curtas, reforço social) ou **elevam o custo imediato da não adesão** deslocam a alocação para o autocuidado.`,
    criticas: `### Molar × molecular (de novo)
Como a alocação deriva da igualação, herda o mesmo debate: ela é fundamental ou emerge de escolhas locais? A disputa **melhora local × maximização** ainda não está encerrada.

### Desconto: traço ou estado?
Discute-se se a taxa de desconto (k) é um **traço** estável do indivíduo ou um **estado** sensível ao contexto (humor, privação, enquadramento) — com implicações diretas para medi-la e para intervir.

### Do laboratório ao humano
Boa parte dos modelos vem de animais e de tarefas com dinheiro hipotético; a generalização para decisões de saúde reais, carregadas de **regras verbais** e emoção, exige cautela.`,
    articleIds: ['herrnstein1970', 'baum1974', 'rachlingreen1972', 'ainslie1975', 'davisonmccarthy1988'],
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
        explanation: 'Alocação é como o organismo reparte tempo/respostas entre as fontes de reforço (face molar da escolha).',
      },
      {
        id: 'al-q2',
        prompt: 'Comprometer-se antecipadamente (ex.: não deixar doce em casa) para garantir a escolha maior-atrasada é:',
        options: ['Autocontrole por compromisso (Rachlin e Green, 1972)', 'Extinção', 'Punição', 'Generalização'],
        correct: 0,
        explanation: 'É o autocontrole por compromisso: arranjar a situação antes de a tentação ficar iminente.',
      },
      {
        id: 'al-q3',
        prompt: 'A reversão de preferência é gerada especificamente pela forma ___ do desconto do valor com o atraso.',
        options: ['Hiperbólica (Ainslie, 1975; Mazur, 1987)', 'Linear', 'Exponencial constante', 'Aleatória'],
        correct: 0,
        explanation: 'No desconto hiperbólico, o valor cai muito com pequenos atrasos, gerando reversões — o que a forma exponencial não produz.',
      },
      {
        id: 'al-q4',
        prompt: 'Na fórmula V = A / (1 + k·D), o parâmetro k representa:',
        options: [
          'A taxa de desconto (grau de impulsividade)',
          'A magnitude do reforço',
          'O atraso em dias',
          'O viés de posição',
        ],
        correct: 0,
        explanation: 'k é a taxa de desconto: quanto maior, mais o valor cai com o atraso (mais impulsivo).',
      },
      {
        id: 'al-q5',
        prompt: 'Por que a adesão em doenças crônicas é um problema de alocação intertemporal?',
        options: [
          'Porque o custo do autocuidado é imediato e o benefício é atrasado, favorecendo a alternativa imediata',
          'Porque não envolve reforço',
          'Porque depende só de genética',
          'Porque a igualação não se aplica a humanos',
        ],
        correct: 0,
        explanation: 'Custo hoje vs. benefício distante: a estrutura temporal empurra a alocação para as alternativas imediatas.',
      },
    ],
  },

  'economia-comportamental': {
    conceptId: 'economia-comportamental',
    intuicao: `E se tratássemos cada reforçador como um **produto com preço**? O "preço" é o esforço/custo para consegui-lo; a "demanda" é o quanto você consome. Quando o preço sobe, alguns reforçadores você corta rápido (demanda **elástica**, como um doce supérfluo); outros você mantém quase a qualquer custo (demanda **inelástica**, algo que virou essencial).

Some a isso o **tempo**: um ganho hoje vale mais que o mesmo ganho daqui a um ano (**desconto do atraso**). Juntando **preço** e **tempo**, a economia comportamental vira uma lente potente — e mensurável — para entender adesão, uso de substâncias e comportamento de risco, e para explicar por que o benefício distante da saúde tantas vezes perde para o custo imediato.`,
    tecnico: `### Demanda e elasticidade
A economia comportamental aplica conceitos econômicos ao comportamento operante (Hursh, 1980):
- **Curva de demanda**: consumo (Q) de um reforçador em função do **preço** (custo/nº de respostas). Em geral cai com o preço.
- **Elasticidade**: sensibilidade do consumo ao preço. **Inelástica** = persiste apesar do preço (valor alto); **elástica** = despenca.
- **Pmax**: preço em que o *gasto* de respostas é máximo (a demanda passa de inelástica a elástica); **ponto de quebra (breakpoint)**: preço em que o consumo cai a zero.
- **Preço unitário**: integra número de respostas e magnitude do reforço num único índice.

### O modelo de valor essencial (Hursh e Silberberg, 2008)
Propuseram um **modelo exponencial de demanda** em que um único parâmetro, **α**, indexa a elasticidade. Deriva-se daí o **valor essencial (VE ∝ 1/α)**: quanto menor o α (demanda mais inelástica), maior o valor essencial do reforçador. Foi um avanço porque permite **comparar reforçadores diferentes** numa métrica comum.

### Desconto do atraso e patologia do reforço
O **desconto do atraso** (Ainslie, 1975; Mazur, 1987) mede a queda do valor com o adiamento. **Bickel et al. (2014)** integram demanda inelástica + desconto acentuado no conceito de **patologia do reforço (reinforcer pathology)**: um reforçador imediato supervalorizado e um futuro fortemente descontado — modelo para dependência e risco em doenças crônicas. Em humanos, esses parâmetros são estimados por **tarefas de compra hipotética** (hypothetical purchase tasks) e **tarefas de desconto**.`,
    historia: `**Steven Hursh (1980)** importou formalmente demanda e elasticidade para a Análise do Comportamento (JEAB); em trabalhos subsequentes desenvolveu a noção de **preço unitário**. **Hursh e Silberberg (2008)**, na *Psychological Review*, propuseram o **modelo exponencial de demanda** e o **valor essencial**, unificando a métrica. As raízes do desconto vêm de **Rachlin e Green (1972)** e **Ainslie (1975)**; a síntese aplicada à saúde/dependência foi consolidada por **Bickel et al. (2014)** e revisada, quanto ao desconto, por Madden e Bickel (2010).`,
    relacoes: `A economia comportamental herda o **valor do reforço** das operações motivadoras, quantifica a **escolha/alocação** e entrega ferramentas diretas para a **Psicologia da Saúde**.

Mapa: Operações Motivadoras (valor) → Igualação/Alocação (escolha) → **Hursh (1980)** → **Hursh e Silberberg (2008)** → **Bickel et al. (2014)** → Doenças Crônicas / adesão.`,
    aplicacoes: `### Medir "o quanto algo vale" sem esperar o comportamento real
As **tarefas de compra hipotética** estimam curvas de demanda de álcool, cigarro, comida ("quanto você consumiria se cada unidade custasse X?"), gerando índices (intensidade, Pmax, elasticidade, valor essencial) que **predizem gravidade e resposta a tratamento**. Combinadas a medidas de **desconto do atraso**, compõem o perfil de "patologia do reforço" (Bickel et al., 2014).

### Intervenções
Estratégias que **reduzem o desconto do futuro** (p. ex., *episodic future thinking* — imaginar vividamente o futuro) ou que **aumentam o custo/decrescem a disponibilidade** do reforçador problemático têm suporte crescente. O arcabouço também informa **políticas** (preço, impostos, disponibilidade).

### Para a sua pesquisa
A economia comportamental oferece **desfechos quantitativos** (elasticidade, valor essencial, k de desconto) que podem complementar a **qualidade de vida** como medidas de processo em HAP — e que dialogam com o Mundo 3 (como transformar esses construtos em instrumentos válidos).`,
    criticas: `### Hipotético × real
Muitos dados vêm de **compras e recompensas hipotéticas**; embora a correspondência com o comportamento real seja em geral boa, há limites, sobretudo em decisões de saúde de alto risco.

### Estimação e comparabilidade
A estimativa de parâmetros (α, k, Pmax) depende de **modelos e de decisões analíticas** (ajuste de curvas, tratamento de zeros); comparações entre estudos exigem padronização.

### Reducionismo?
Tratar reforçadores como "bens" ilumina muito, mas críticos alertam contra reduzir fenômenos sociais e clínicos complexos a curvas de demanda, ignorando história, contexto verbal e determinantes sociais da saúde.`,
    articleIds: ['hursh1980', 'hurshsilberberg2008', 'bickel2014', 'rachlingreen1972', 'ainslie1975'],
    quiz: [
      {
        id: 'ec-q1',
        prompt: 'Na economia comportamental, "elasticidade da demanda" descreve:',
        options: [
          'O quanto o consumo cai quando o preço (custo/esforço) do reforço aumenta',
          'A velocidade da resposta',
          'O número de reforçadores',
          'A duração do estímulo',
        ],
        correct: 0,
        explanation: 'Demanda elástica cai muito com o preço; inelástica se mantém (Hursh, 1980).',
      },
      {
        id: 'ec-q2',
        prompt: 'No modelo de Hursh e Silberberg (2008), quanto MENOR o parâmetro α:',
        options: [
          'Mais inelástica a demanda e MAIOR o valor essencial do reforçador',
          'Mais elástica a demanda e menor o valor essencial',
          'Maior o atraso do reforço',
          'Menor a magnitude do reforço',
        ],
        correct: 0,
        explanation: 'α indexa a elasticidade; valor essencial é proporcional a 1/α — menor α, maior valor essencial.',
      },
      {
        id: 'ec-q3',
        prompt: 'Fumantes que mantêm o consumo mesmo com forte aumento de preço demonstram demanda:',
        options: ['Inelástica', 'Elástica', 'Sem valor essencial', 'Igualada'],
        correct: 0,
        explanation: 'Consumo que resiste ao preço = demanda inelástica, alto valor essencial.',
      },
      {
        id: 'ec-q4',
        prompt: 'A "patologia do reforço" (Bickel et al., 2014) combina:',
        options: [
          'Demanda inelástica por um reforço imediato + desconto acentuado do futuro',
          'Baixa demanda + ausência de desconto',
          'Apenas punição',
          'Ausência de operações motivadoras',
        ],
        correct: 0,
        explanation: 'É a supervalorização do reforço imediato somada a um forte desconto do atraso.',
      },
      {
        id: 'ec-q5',
        prompt: 'As "tarefas de compra hipotética" são usadas para:',
        options: [
          'Estimar curvas de demanda (intensidade, Pmax, elasticidade) que predizem gravidade e resposta a tratamento',
          'Medir a confiabilidade de um teste',
          'Aplicar punição',
          'Definir o estímulo discriminativo',
        ],
        correct: 0,
        explanation: 'Elas geram índices de demanda em humanos sem exigir o consumo real, com valor preditivo clínico.',
      },
    ],
  },
}
