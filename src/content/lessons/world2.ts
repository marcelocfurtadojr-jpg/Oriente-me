import type { Lesson } from '../types'

/** Mundo 2 — Psicologia da Saúde (curado, nível de capítulo). */
export const WORLD2_LESSONS: Record<string, Lesson> = {
  'psicologia-saude': {
    conceptId: 'psicologia-saude',
    intuicao: `Saúde não é só biologia. Boa parte do que determina adoecer ou se manter bem é **o que a pessoa faz todo dia**: como come, se movimenta, dorme, toma (ou não) a medicação e lida com o estresse. E comportamento é moldado por contingências.

O senso comum resolve isso com um rótulo: "falta de força de vontade". Mas "força de vontade" não explica — apenas renomeia o problema. A pergunta analítico-comportamental é outra: *quais contingências mantêm* os comportamentos de saúde e de risco, e *como rearranjá-las*?

**Um exemplo que atravessa esta trilha:** por que um paciente com HAP "sabe" que precisa caminhar e mesmo assim não caminha? Porque o comportamento de caminhar compete com alternativas mais imediatamente reforçadoras (descansar, evitar a dispneia), sob operações motivadoras que oscilam (dor, sono, humor). Enxergar isso como **problema de contingências** — e não de caráter — é o que torna a intervenção possível.`,
    tecnico: `### O modelo biopsicossocial (Engel, 1977)
A **Psicologia da Saúde** parte do **modelo biopsicossocial** (Engel, 1977): saúde e doença resultam da interação de fatores **biológicos, psicológicos e sociais** — uma ampliação do modelo estritamente biomédico, que reduzia a doença a alterações orgânicas.

### Saúde comportamental e medicina comportamental (Matarazzo, 1980)
Matarazzo (1980) delimitou dois campos: **saúde comportamental** (manutenção da saúde e prevenção em pessoas saudáveis) e **medicina comportamental** (aplicação de conhecimento comportamental à avaliação, tratamento e reabilitação de doenças).

### A leitura analítico-comportamental
Aqui, comportamentos de saúde (adesão, autocuidado, comportamento de risco) são **operantes**, analisados por sua **função**: antecedentes (pistas, contextos), consequências (alívio, aprovação, efeitos fisiológicos) e **operações motivadoras** (dor, privação, estados aversivos). Intervir significa:
- rearranjar **antecedentes** (lembretes, simplificação do ambiente, planos de ação);
- ajustar **consequências** (reforço do comportamento‑alvo, feedback, manejo de contingências);
- manejar **OMs** (reduzir estados aversivos que valorizam a esquiva).

### Diálogo com modelos sociocognitivos
Modelos populares (Crença em Saúde, Teoria do Comportamento Planejado) enfatizam **crenças e intenções**; a abordagem comportamental complementa apontando que **intenção não basta** — o que decide é a estrutura de contingências. As duas leituras podem coexistir, mas mudam onde se intervém.`,
    historia: `A Psicologia da Saúde consolidou-se nas décadas de 1970-80. **Engel (1977)**, na *Science*, propôs o modelo biopsicossocial, desafiando o reducionismo biomédico. **Matarazzo (1980)**, no *American Psychologist*, definiu formalmente os campos e ajudou a institucionalizar a área (Divisão 38 da APA; fundação da Society of Behavioral Medicine no final dos anos 1970). A tradição analítico-comportamental contribuiu com a **análise funcional** dos comportamentos de saúde e com tecnologias de mudança de comportamento (como o **manejo de contingências**).`,
    relacoes: `Herda o **reforçamento** e as **operações motivadoras** e os aplica à saúde; abre caminho para o manejo de **doenças crônicas** e para a avaliação de **qualidade de vida**.

Mapa: Reforçamento / Operações Motivadoras → **Engel (1977)** → **Matarazzo (1980)** → Doenças Crônicas → Qualidade de Vida.`,
    aplicacoes: `### Manejo de contingências
O **manejo de contingências (contingency management)** — reforçar diretamente comportamentos de saúde (abstinência verificada, comparecimento, adesão) — tem forte suporte empírico, sobretudo em dependência química (tradição de Higgins e de Petry). É a Análise do Comportamento aplicada à saúde em sua forma mais direta.

### Programas de autogestão e adesão
Intervenções eficazes combinam **antecedentes** (planos de ação, lembretes), **consequências** (feedback, reforço social) e **redução de custo de resposta**. A adesão melhora quando o comportamento‑alvo fica mais fácil e mais imediatamente reforçador que suas alternativas.

### Para a sua pesquisa
Em HAP, a psicologia da saúde de base comportamental oferece um vocabulário preciso para desenhar intervenções de adesão e para **interpretar a qualidade de vida** não como um traço, mas como resultado de padrões de comportamento em interação com a doença e o ambiente.`,
    criticas: `### Individualização do problema
A crítica mais importante: focar no **comportamento individual** pode obscurecer **determinantes sociais e estruturais** da saúde (renda, acesso, ambiente). Reforçar adesão sem considerar que o paciente não tem dinheiro para o remédio é ineficaz — e injusto.

### Integração com a medicina
Persistem desafios de integração real entre equipes de saúde e a ciência do comportamento, e de **medir** com rigor "comportamentos de saúde".

### Modelos concorrentes
O peso relativo de **crenças/intenções** (modelos sociocognitivos) versus **contingências** (abordagem comportamental) segue em debate — provavelmente ambos importam, em graus que dependem do comportamento e do contexto.`,
    articleIds: ['engel1977', 'matarazzo1980'],
    quiz: [
      {
        id: 'ps-q1',
        prompt: 'O modelo biopsicossocial (Engel, 1977) propõe que a saúde/doença resulta de:',
        options: [
          'Fatores biológicos, psicológicos e sociais em interação',
          'Apenas fatores biológicos',
          'Apenas fatores psicológicos',
          'Acaso',
        ],
        correct: 0,
        explanation: 'Engel (1977) ampliou o modelo biomédico para incluir dimensões psicológicas e sociais.',
      },
      {
        id: 'ps-q2',
        prompt: 'Na leitura analítico-comportamental, dizer que um paciente não adere "por falta de força de vontade":',
        options: [
          'Apenas renomeia o problema, sem explicá-lo (é um rótulo, não uma análise funcional)',
          'É a explicação funcional correta',
          'Identifica a operação motivadora',
          'Descreve a contingência de reforço',
        ],
        correct: 0,
        explanation: 'A análise funcional busca as contingências que mantêm (ou não) o comportamento, não rótulos internos.',
      },
      {
        id: 'ps-q3',
        prompt: 'Matarazzo (1980) é referência por:',
        options: [
          'Delimitar "saúde comportamental" e "medicina comportamental", firmando a Psicologia da Saúde',
          'Criar o coeficiente alfa',
          'Formular a lei da igualação',
          'Propor o desconto hiperbólico',
        ],
        correct: 0,
        explanation: 'Matarazzo (1980) definiu os campos e ajudou a institucionalizar a área.',
      },
      {
        id: 'ps-q4',
        prompt: 'O "manejo de contingências" (contingency management) consiste, essencialmente, em:',
        options: [
          'Reforçar diretamente comportamentos de saúde (ex.: adesão, abstinência verificada)',
          'Convencer o paciente com informação',
          'Aumentar a dose do medicamento',
          'Punir a não adesão',
        ],
        correct: 0,
        explanation: 'É uma aplicação direta do reforçamento à saúde, com forte suporte empírico.',
      },
      {
        id: 'ps-q5',
        prompt: 'Uma crítica central à Psicologia da Saúde centrada no indivíduo é que ela pode:',
        options: [
          'Obscurecer determinantes sociais e estruturais da saúde (renda, acesso, ambiente)',
          'Ser boa demais para ser verdade',
          'Ignorar a biologia por completo',
          'Não usar contingências',
        ],
        correct: 0,
        explanation: 'Focar só no comportamento individual arrisca negligenciar barreiras estruturais reais à saúde.',
      },
    ],
  },

  'doencas-cronicas': {
    conceptId: 'doencas-cronicas',
    intuicao: `Uma doença aguda tem um roteiro simples: adoeço, trato, curo. Uma doença **crônica** — como a **Hipertensão Arterial Pulmonar (HAP)** — quebra esse roteiro: ela é manejada **todos os dias, por anos**, sem "alta" definitiva. Isso a transforma numa **maratona comportamental**: adesão à medicação, automonitoramento, mudanças de estilo de vida, manejo de sintomas e do humor.

O ponto decisivo é temporal. Quase tudo o que a doença crônica exige tem **custo imediato** (esforço, efeitos colaterais, restrições) e **benefício distante e incerto** (mais saúde no futuro). É a receita perfeita para o comportamento "escorregar" para as alternativas imediatas — e é exatamente aqui que a economia comportamental (Mundo 1) entra na clínica.`,
    tecnico: `### O que define uma doença crônica
Condições de **longo curso**, geralmente sem cura, que exigem **manejo contínuo**. O desfecho depende menos de um ato pontual e mais de **comportamentos sustentados no tempo**.

### Adesão como comportamento
A **adesão** é o alvo comportamental central. O relatório da **OMS (WHO, 2003)** estima adesão média de **~50%** em doenças crônicas e propõe cinco dimensões de determinantes: fatores **socioeconômicos**, ligados à **equipe/sistema de saúde**, à **condição**, à **terapia** e ao **paciente**. Ou seja: adesão não é (só) "coisa do paciente".

### HAP em termos práticos
A **HAP** é crônica, progressiva e grave: **dispneia**, limitação funcional (classificada por classe funcional), tratamento complexo (por vezes infusões contínuas, oxigênio) e forte impacto sobre a **qualidade de vida**. Cada uma dessas características cria contingências: a dispneia é uma **OM** que valoriza o descanso; a complexidade do tratamento aumenta o **custo de resposta** da adesão.

### Mecanismos comportamentais
- **Desconto do atraso** (Bickel et al., 2014): custo hoje × benefício distante → viés pró-imediato.
- **Operações motivadoras**: dispneia, dor e efeitos colaterais alteram momento a momento o valor de cuidar-se vs. esquivar-se.
- **Autogestão (self-management)**: repertório de automonitoramento, resolução de problemas e ajuste de comportamento que pode ser **ensinado**.`,
    historia: `A **transição epidemiológica** do século XX — de doenças agudas/infecciosas para condições crônicas — colocou o **comportamento** no centro dos desfechos de saúde. O relatório da **OMS (2003)** consolidou a adesão como prioridade global e ofereceu o modelo multidimensional de determinantes. Paralelamente, modelos de **cuidado crônico** e programas de **autogestão** deslocaram o paciente de receptor passivo para agente do próprio tratamento — mudança que a Análise do Comportamento Aplicada ajuda a operacionalizar.`,
    relacoes: `É a aplicação da **Psicologia da Saúde** a condições de longo curso; usa fortemente a **economia comportamental** (desconto do atraso, valor) e desemboca na **qualidade de vida** como desfecho central.

Mapa: Psicologia da Saúde → Doenças Crônicas (ex.: HAP) → **Economia Comportamental** (Bickel et al., 2014) → Qualidade de Vida.`,
    aplicacoes: `### Intervenções de adesão
As mais eficazes atacam **múltiplos determinantes** (WHO, 2003): simplificar o regime (reduzir custo de resposta), lembretes (antecedentes), reforço/feedback (consequências), apoio social e enfrentamento de barreiras socioeconômicas. Abordagens de **manejo de contingências** e de **autogestão** têm suporte crescente.

### Trazer o futuro para perto
Como o problema é intertemporal, ajuda **aproximar o benefício**: metas curtas, feedback imediato (p. ex., autorregistro de sintomas/atividade), e técnicas como o *episodic future thinking* (Bickel), que reduzem o desconto do futuro.

### Para a sua pesquisa
Em HAP, faz sentido medir não só a adesão, mas os **processos comportamentais** por trás dela (desconto do atraso, barreiras, custo de resposta) — e usar a **qualidade de vida** como desfecho que integra o impacto da doença e do tratamento na vida do paciente.`,
    criticas: `### "Culpar o paciente"
Falar em adesão pode escorregar para responsabilizar o indivíduo por falhas que são, em boa parte, **do sistema** (acesso, custo, comunicação). O modelo da OMS (2003) existe justamente para evitar isso.

### Complexidade e multimorbidade
Pacientes crônicos reais frequentemente têm **várias condições** e regimes concorrentes; estudar um comportamento isolado simplifica demais.

### Medir adesão é difícil
Autorrelato superestima; contagem de comprimidos e registros eletrônicos têm limites. A **mensuração** confiável de adesão e de processos comportamentais é um problema aberto — e reforça a importância do Mundo 3 (psicometria e instrumentos).`,
    articleIds: ['who2003', 'bickel2014', 'engel1977'],
    quiz: [
      {
        id: 'dc-q1',
        prompt: 'O que torna as doenças crônicas um desafio especialmente comportamental?',
        options: [
          'Exigem comportamentos sustentados por anos (adesão, automonitoramento, estilo de vida), com custo imediato e benefício distante',
          'São curadas rapidamente',
          'Não têm tratamento',
          'Independem do comportamento do paciente',
        ],
        correct: 0,
        explanation: 'A estrutura temporal (custo hoje, benefício depois) é o cerne do desafio comportamental.',
      },
      {
        id: 'dc-q2',
        prompt: 'Segundo a OMS (2003), a adesão a terapias de longo prazo em doenças crônicas gira em torno de:',
        options: ['Cerca de 50%', 'Praticamente 100%', 'Menos de 5%', 'Sempre acima de 90%'],
        correct: 0,
        explanation: 'A OMS (2003) estima adesão média de ~50% em condições crônicas.',
      },
      {
        id: 'dc-q3',
        prompt: 'O modelo da OMS (2003) trata a adesão como determinada por cinco dimensões. Isso implica que:',
        options: [
          'A adesão não é só "coisa do paciente" — inclui fatores socioeconômicos, do sistema, da condição e da terapia',
          'A adesão depende apenas da força de vontade do paciente',
          'A adesão é puramente genética',
          'A adesão não pode ser modificada',
        ],
        correct: 0,
        explanation: 'São cinco dimensões (paciente, socioeconômica, sistema/equipe, condição e terapia) — não apenas o paciente.',
      },
      {
        id: 'dc-q4',
        prompt: 'Na HAP, a dispneia que valoriza o descanso e desvaloriza o esforço funciona, tecnicamente, como:',
        options: [
          'Uma operação motivadora (estado aversivo que altera o valor de reforços concorrentes)',
          'Um estímulo discriminativo',
          'Uma punição positiva do repouso',
          'Uma extinção',
        ],
        correct: 0,
        explanation: 'A dispneia é um estado aversivo (OM) que altera momentaneamente o valor de cuidar-se vs. esquivar-se.',
      },
      {
        id: 'dc-q5',
        prompt: 'Por que "aproximar o benefício" (metas curtas, feedback imediato) ajuda na adesão?',
        options: [
          'Porque contrapõe o desconto do atraso, reduzindo a vantagem das alternativas imediatas',
          'Porque elimina a doença',
          'Porque aumenta o custo de resposta',
          'Porque substitui o tratamento médico',
        ],
        correct: 0,
        explanation: 'Trazer o reforço para mais perto no tempo reduz o efeito do desconto do atraso sobre a escolha.',
      },
    ],
  },

  'qualidade-vida': {
    conceptId: 'qualidade-vida',
    intuicao: `Dois pacientes com os **mesmos exames** podem viver de formas radicalmente diferentes: um ativo, trabalhando e esperançoso; outro limitado, ansioso e isolado. Nenhum marcador fisiológico captura sozinho essa diferença — mas ela é, muitas vezes, o que **mais importa para o paciente**. É isso que a **qualidade de vida (QV)** tenta medir: a **experiência vivida** da saúde e da doença.

Em condições como a HAP, em que a cura nem sempre é possível, a QV deixa de ser um "extra" e vira um **desfecho central**: avalia se o tratamento está melhorando a vida, não apenas os números. E, por ser subjetiva e multidimensional, medir QV com rigor exige método — o que conecta esta fase diretamente ao Mundo 3.`,
    tecnico: `### Definição e dimensões
A OMS, pelo grupo **WHOQOL (1995)**, define QV como a **percepção do indivíduo** sobre sua posição na vida, no contexto da cultura e dos valores em que vive, em relação a seus objetivos e expectativas. É um construto **multidimensional**: domínios **físico, psicológico, relações sociais e ambiente**.

### QV geral vs qualidade de vida relacionada à saúde (HRQoL)
A **HRQoL** recorta o construto para o impacto da **saúde/doença e do tratamento** — é a mais usada em pesquisa clínica.

### Genéricos vs específicos por doença
- **Genéricos** (ex.: WHOQOL-BREF, SF-36): permitem **comparar** populações e condições.
- **Específicos por doença**: mais **sensíveis** a mudanças da condição-alvo. Em hipertensão pulmonar existem instrumentos dedicados, como o **CAMPHOR** e o **emPHasis-10** — diretamente relevantes à sua pesquisa.

### QV como construto latente e PROs
QV é um **construto latente** (não observável diretamente): existe operacionalmente **por meio de um instrumento**. É um exemplo maior de **desfecho relatado pelo paciente (PRO)** — daí a necessidade de validade e confiabilidade, tema do Mundo 3. Referência metodológica: Fayers e Machin, *Quality of Life*.`,
    historia: `O **WHOQOL Group (1995)** operacionalizou a definição da OMS e desenvolveu instrumentos **transculturais** (o WHOQOL-100 e o WHOQOL-BREF), consolidando o construto. A partir dos anos 1990-2000, o campo dos **desfechos relatados pelo paciente (PROs)** cresceu, e agências reguladoras passaram a orientar seu uso em ensaios clínicos (p. ex., a orientação da FDA sobre PROs, 2009). Instrumentos **específicos** para hipertensão pulmonar surgiram para captar aspectos que os genéricos não alcançam.`,
    relacoes: `É o **desfecho** das doenças crônicas e o **construto-alvo** a ser medido — por isso conduz naturalmente à **psicometria** e ao **desenvolvimento de instrumentos**.

Mapa: Doenças Crônicas → **Qualidade de Vida** (WHOQOL, 1995) → Psicometria → Desenvolvimento de Instrumentos (escala de QV para HAP).`,
    aplicacoes: `### QV como desfecho em pesquisa e clínica
Em ensaios e no acompanhamento, a QV/HRQoL é usada para avaliar o **valor** de tratamentos além da fisiologia. Em HAP, instrumentos como **CAMPHOR** e **emPHasis-10** capturam sintomas, funcionamento e impacto na vida com sensibilidade à condição.

### Para a sua dissertação
Se o objetivo é estudar (ou desenvolver/adaptar) um instrumento de QV em HAP, três decisões são centrais: (1) **geral vs HRQoL**; (2) **genérico vs específico** (ou os dois, em bateria); (3) garantir **propriedades de medida** adequadas (Mundo 3). A QV também dialoga com o Mundo 1: processos como desconto do atraso e operações motivadoras ajudam a **explicar** por que a doença afeta a vida — e onde intervir.`,
    criticas: `### Subjetividade e "response shift"
Como a QV é autoavaliada, ela é sensível ao **response shift** (Sprangers e Schwartz, 1999): com o tempo, o paciente muda seus padrões internos de comparação, valores e significado — de modo que a mesma "nota" pode não significar a mesma coisa antes e depois. Isso complica a interpretação de **mudanças** longitudinais.

### Comparabilidade e cultura
Comparar QV entre culturas exige **adaptação transcultural** cuidadosa (ver Mundo 3); traduções literais não garantem equivalência.

### Efeitos teto/piso e definição do construto
Instrumentos podem saturar (efeito teto) e "qualidade de vida" é definida de formas distintas por diferentes autores — o que exige clareza conceitual antes de medir.`,
    articleIds: ['whoqol1995', 'sprangers1999'],
    quiz: [
      {
        id: 'qv-q1',
        prompt: 'Qualidade de vida, na definição da OMS/WHOQOL (1995), é:',
        options: [
          'A percepção do indivíduo sobre sua posição na vida, no contexto de sua cultura e valores',
          'O resultado de exames laboratoriais',
          'A ausência de doença',
          'A renda do paciente',
        ],
        correct: 0,
        explanation: 'A definição é centrada na percepção do indivíduo, multidimensional e sensível à cultura.',
      },
      {
        id: 'qv-q2',
        prompt: 'Instrumentos específicos por doença (vs genéricos) são preferíveis quando se quer:',
        options: [
          'Detectar mudanças finas ligadas àquela condição específica (ex.: CAMPHOR/emPHasis-10 na HAP)',
          'Comparar populações muito diferentes',
          'Medir renda',
          'Evitar qualquer validação',
        ],
        correct: 0,
        explanation: 'Instrumentos específicos são mais sensíveis a aspectos e mudanças próprios da doença-alvo.',
      },
      {
        id: 'qv-q3',
        prompt: 'Por ser subjetiva e latente, a qualidade de vida, para ser estudada com rigor, depende de:',
        options: [
          'Um instrumento válido e confiável (psicometria)',
          'Apenas exames de imagem',
          'Uma única pergunta aberta',
          'Nada além da opinião do médico',
        ],
        correct: 0,
        explanation: 'Construtos latentes só existem operacionalmente por meio de instrumentos com boas propriedades psicométricas.',
      },
      {
        id: 'qv-q4',
        prompt: 'O "response shift" (Sprangers e Schwartz, 1999) é um desafio à medida de QV porque:',
        options: [
          'O paciente muda internamente padrões e valores ao longo do tempo, alterando o significado da mesma nota',
          'O instrumento perde itens',
          'A doença desaparece',
          'A QV vira objetiva',
        ],
        correct: 0,
        explanation: 'Mudanças internas de referência dificultam interpretar variações longitudinais de QV.',
      },
      {
        id: 'qv-q5',
        prompt: 'A diferença entre QV geral e qualidade de vida relacionada à saúde (HRQoL) é que a HRQoL:',
        options: [
          'Recorta o construto para o impacto da saúde/doença e do tratamento na vida',
          'Ignora a saúde',
          'É apenas física',
          'Não pode ser medida',
        ],
        correct: 0,
        explanation: 'A HRQoL foca o que se relaciona à saúde — a mais usada em pesquisa clínica.',
      },
    ],
  },
}
