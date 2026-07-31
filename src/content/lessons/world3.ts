import type { Lesson } from '../types'

/** Mundo 3 — Medida e Instrumentos (curado, nível de capítulo). */
export const WORLD3_LESSONS: Record<string, Lesson> = {
  psicometria: {
    conceptId: 'psicometria',
    intuicao: `Se você vai construir uma régua, precisa garantir duas coisas: que ela meça de forma **consistente** (medir duas vezes o mesmo objeto dá quase o mesmo número) e que ela realmente meça **comprimento** — não peso disfarçado. A **psicometria** é esse controle de qualidade, só que para coisas **invisíveis**: qualidade de vida, dor, ansiedade, depressão, adesão.

O problema é que não temos acesso direto a esses construtos. Só vemos **respostas a itens** ("nos últimos 7 dias, quanto a falta de ar limitou suas atividades?") e, a partir delas, **inferimos** o construto. Toda a psicometria existe para tornar essa inferência **defensável**. Duas perguntas a guiam: a medida é **consistente** (confiabilidade)? Ela mede **o que diz medir** (validade)? Sem isso, um "escore de qualidade de vida" pode ser apenas ruído com aparência de número — e conclusões construídas sobre ele desabam.`,
    tecnico: `### Duas grandes teorias
- **Teoria Clássica dos Testes (TCT)** (Lord e Novick, 1968): o escore observado é a soma do escore verdadeiro e do erro — **X = V + E**. Simples e útil, mas suas estatísticas (dificuldade, precisão) dependem da **amostra**.
- **Teoria de Resposta ao Item (TRI)** (Embretson e Reise, 2000): modela a **probabilidade** de cada resposta em função do **traço latente** da pessoa e de **parâmetros do item** (dificuldade, discriminação). Permite propriedades independentes da amostra e é o padrão em instrumentos modernos e testes adaptativos.

### Confiabilidade (consistência)
- **Consistência interna**: **alfa de Cronbach (1951)** e o **ômega de McDonald** (frequentemente preferível). Alfa não é "índice de unidimensionalidade" — é um mal-entendido comum.
- **Estabilidade**: teste-reteste.
- **Erro-padrão de medida (SEM)**: expressa a precisão na escala do escore.

### Validade (a medida representa o construto)
Historicamente separada em **conteúdo, critério e construto** (Cronbach e Meehl, 1955). A visão contemporânea é **unificada**: toda validade é validade de **construto** (Messick, 1995), e os *Standards* (AERA, APA e NCME) organizam **fontes de evidência**: conteúdo, processos de resposta, **estrutura interna**, relações com outras variáveis e **consequências** do uso.

### Estrutura interna
A **análise fatorial** — exploratória (AFE) e confirmatória (AFC) — testa se os itens se agrupam nos domínios teóricos esperados (ex.: os domínios físico, psicológico, social e ambiental da QV).`,
    historia: `As raízes vêm do início do século XX (Spearman e a análise fatorial). **Cronbach (1951)** formalizou o **alfa**; **Cronbach e Meehl (1955)** introduziram a **validade de construto**, reorientando o campo; **Lord e Novick (1968)** consolidaram a TCT e prepararam a TRI; **Messick (1995)** propôs a visão **unificada** de validade (incluindo consequências). A TRI amadureceu nas décadas seguintes (Embretson e Reise, 2000). Os *Standards for Educational and Psychological Testing* (AERA/APA/NCME) codificam esse consenso, hoje base do desenvolvimento de instrumentos de saúde.`,
    relacoes: `É a ponte entre **o que medir** (qualidade de vida) e **como medir bem**, e a base direta do **desenvolvimento de instrumentos**.

Mapa: Qualidade de Vida → **Cronbach (1951)** / **Cronbach e Meehl (1955)** → **Lord e Novick (1968)** → **Messick (1995)** / TRI (Embretson e Reise, 2000) → Desenvolvimento de Instrumentos.`,
    aplicacoes: `### Avaliar um instrumento de QV
Ao usar (ou adaptar) uma escala de QV para HAP, você reportará: **confiabilidade** (alfa/ômega por domínio; teste-reteste), **estrutura interna** (AFC confirmando os domínios), **relações com outras variáveis** (correlações com classe funcional, teste de caminhada de 6 minutos, sintomas) e, idealmente, **responsividade** (sensibilidade a mudança).

### TRI na prática
A TRI permite avaliar itens individualmente (quais discriminam melhor), construir versões curtas e **testes adaptativos** — útil para reduzir a carga de resposta em pacientes com dispneia.

### Para a sua dissertação
Definir de antemão **quais evidências de validade** você buscará (e como) evita o erro comum de "validar" um instrumento só com o alfa. Pense em termos das cinco fontes de evidência dos *Standards*.`,
    criticas: `### O mau uso do alfa
Sijtsma (2009) argumenta que o **alfa de Cronbach é frequentemente mal usado**: não mede unidimensionalidade, subestima ou superestima a confiabilidade conforme a estrutura, e o **ômega** costuma ser preferível. Reportar só o alfa é insuficiente.

### Limites da TCT
Na TCT, dificuldade e discriminação dependem da amostra, dificultando comparações entre estudos — uma das motivações para a TRI.

### Ameaças à validade
Duas clássicas (Messick): **sub-representação do construto** (o instrumento deixa de fora facetas importantes da QV) e **variância irrelevante ao construto** (mede outra coisa junto, como letramento ou desejabilidade social). Validade não é um "selo" que um teste tem para sempre — é um **argumento** sustentado por evidências para um **uso específico**.`,
    articleIds: ['cronbach1951', 'cronbachmeehl1955', 'messick1995', 'nunnally1978', 'lordnovick1968', 'embretson2000'],
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
        explanation: 'Confiabilidade = consistência/estabilidade; validade = representar o construto pretendido.',
      },
      {
        id: 'pm-q2',
        prompt: 'Na Teoria Clássica dos Testes (Lord e Novick, 1968), o escore observado é entendido como:',
        options: [
          'Escore verdadeiro + erro de medida (X = V + E)',
          'Apenas erro aleatório',
          'A média da população',
          'Um parâmetro de item da TRI',
        ],
        correct: 0,
        explanation: 'A TCT decompõe o escore observado em verdadeiro e erro.',
      },
      {
        id: 'pm-q3',
        prompt: 'Uma vantagem central da Teoria de Resposta ao Item (TRI) sobre a TCT é:',
        options: [
          'Modelar itens e pessoas com propriedades menos dependentes da amostra (e permitir testes adaptativos)',
          'Dispensar qualquer validação',
          'Eliminar a necessidade de itens',
          'Medir apenas confiabilidade',
        ],
        correct: 0,
        explanation: 'A TRI estima parâmetros de item e traço latente, com propriedades mais independentes da amostra.',
      },
      {
        id: 'pm-q4',
        prompt: 'Na visão unificada (Messick, 1995), a validade é entendida como:',
        options: [
          'Um argumento sustentado por várias fontes de evidência para um uso específico do teste',
          'Uma propriedade fixa que o teste tem para sempre',
          'O mesmo que confiabilidade',
          'Apenas a opinião de juízes',
        ],
        correct: 0,
        explanation: 'Validade é um argumento acumulado (conteúdo, estrutura interna, relações, consequências) para um uso definido.',
      },
      {
        id: 'pm-q5',
        prompt: 'Uma crítica frequente ao uso do alfa de Cronbach (Sijtsma, 2009) é que ele:',
        options: [
          'É mal usado — não indica unidimensionalidade e muitas vezes o ômega é preferível',
          'É sempre o melhor índice possível',
          'Mede validade de construto',
          'Substitui a análise fatorial',
        ],
        correct: 0,
        explanation: 'O alfa não mede unidimensionalidade; reportá-lo sozinho é insuficiente, e o ômega costuma ser melhor.',
      },
      {
        id: 'pm-q6',
        prompt: 'A análise fatorial confirmatória (AFC) de uma escala de QV serve para:',
        options: [
          'Testar se os itens se agrupam nos domínios teóricos esperados (estrutura interna)',
          'Medir o custo do estudo',
          'Traduzir o instrumento',
          'Calcular a idade dos respondentes',
        ],
        correct: 0,
        explanation: 'A AFC avalia a estrutura interna — uma das fontes de evidência de validade.',
      },
    ],
  },

  'desenvolvimento-instrumentos': {
    conceptId: 'desenvolvimento-instrumentos',
    intuicao: `Criar (ou adaptar) uma boa escala de qualidade de vida para HAP é como **projetar um instrumento de precisão**: você define exatamente o que quer medir, redige os itens, testa com especialistas e com pacientes, e **prova estatisticamente** que os itens se sustentam e significam o que deveriam.

O erro clássico é começar pelo fim — "escrever umas perguntas" e aplicar. Um instrumento científico é o oposto: cada etapa **gera evidências** de que a medida é confiável e válida para um uso específico. É trabalhoso de propósito; é isso que separa um questionário improvisado de um PRO defensável em banca e em publicação.`,
    tecnico: `### Um percurso típico (síntese de DeVellis; Boateng et al., 2018)
1. **Definir o construto** e seu domínio: o que é "qualidade de vida na HAP"? Que facetas? (Fundamento teórico primeiro.)
2. **Gerar itens**: literatura, entrevistas com pacientes, instrumentos existentes; escrever mais itens do que o necessário.
3. **Validade de conteúdo**: **juízes/especialistas** avaliam relevância e representatividade (ex.: **índice de validade de conteúdo, IVC**); **entrevistas cognitivas** com pacientes checam compreensão.
4. **Estudo piloto** e **análise de itens**: dificuldade, discriminação, correlação item-total, efeitos **teto/piso**.
5. **Validação estrutural**: **AFE** e depois **AFC** (a estrutura esperada se confirma?).
6. **Confiabilidade**: alfa/ômega por domínio; teste-reteste.
7. **Outras evidências de validade** (relações com variáveis externas) e **responsividade** (sensibilidade a mudança).
8. **Adaptação transcultural**, quando se traduz/importa (Beaton et al., 2000).

### Padrões de qualidade
O **COSMIN** (Mokkink et al., 2010) define **quais propriedades de medida** avaliar e como relatá-las; os *Standards* (AERA/APA/NCME) e Messick (1995) enquadram a validade; DeVellis e Boateng et al. (2018) detalham a prática.

### Adaptação transcultural (Beaton et al., 2000)
Traduzir **não é** validar. O processo inclui **tradução, retrotradução, comitê de especialistas e pré-teste**, buscando equivalência **semântica, idiomática, cultural e conceitual** — seguido de reavaliação das propriedades psicométricas na nova população.`,
    historia: `O campo reúne e padroniza décadas de prática psicométrica (Cronbach e Meehl, 1955; Nunnally, 1978; Messick, 1995). Nos anos 2000, duas frentes deram-lhe padronização prática: as **diretrizes de adaptação transcultural** de **Beaton et al. (2000)** e o consenso **COSMIN** (**Mokkink et al., 2010**), hoje referência para avaliar instrumentos de saúde e PROs. Guias contemporâneos como **Boateng et al. (2018)** sintetizam o passo a passo, e agências reguladoras (p. ex., a FDA, 2009) orientam o uso de PROs em ensaios.`,
    relacoes: `É a aplicação da **psicometria** para produzir a ferramenta que mede a **qualidade de vida** — exatamente o tipo de trabalho de uma dissertação sobre QV em HAP.

Mapa: Psicometria (Cronbach; Messick; Lord e Novick) → **Desenvolvimento de Instrumentos** (Beaton et al., 2000; Boateng et al., 2018; **COSMIN**, Mokkink et al., 2010) → escala de QV para HAP → pesquisa aplicada.`,
    aplicacoes: `### O roteiro da sua dissertação
Se você for **adaptar** um instrumento de QV para HAP ao português (ex.: um PRO específico de hipertensão pulmonar), o caminho é: **Beaton et al. (2000)** para a adaptação transcultural + reavaliação psicométrica (AFC da estrutura, confiabilidade, validade convergente com classe funcional e teste de caminhada). Se for **construir** um novo, o roteiro de **Boateng et al. (2018)** aplica-se do início ao fim.

### Relatar segundo o COSMIN
Planejar quais **propriedades de medida** (validade de conteúdo, estrutura, confiabilidade, validade de construto, responsividade, interpretabilidade) você avaliará — e relatá-las conforme o **COSMIN** (Mokkink et al., 2010) — fortalece a defesa e a publicação.

### Amarração com a trilha
O construto vem do Mundo 2 (qualidade de vida na doença crônica); os processos que explicam por que a doença afeta a vida vêm do Mundo 1 (OMs, desconto, economia comportamental). O instrumento é onde tudo isso vira **medida**.`,
    criticas: `### Tradução não é validação
O erro mais comum em pesquisa aplicada: usar uma tradução literal como se fosse um instrumento validado. Sem **adaptação transcultural** (Beaton et al., 2000) e **reavaliação psicométrica**, as propriedades não se transferem entre culturas.

### Tamanho de amostra e análise fatorial
A validação estrutural exige **amostras adequadas**; regras de bolso (n por item) são debatidas, e a estabilidade dos fatores depende de n, comunalidades e número de itens.

### Validade de conteúdo é subjetiva
Depende de **quem** são os juízes e de como se calcula o IVC; painéis mal compostos enviesam o resultado.

### "Jingle-jangle"
Cuidado com as falácias **jingle** (dois instrumentos com o mesmo nome medirem coisas diferentes) e **jangle** (nomes diferentes para o mesmo construto) — por isso a definição teórica do construto vem **antes** dos itens.`,
    articleIds: ['mokkink2010', 'cronbachmeehl1955', 'messick1995', 'beaton2000', 'boateng2018'],
    quiz: [
      {
        id: 'di-q1',
        prompt: 'Qual é uma sequência correta no desenvolvimento de um instrumento?',
        options: [
          'Definir construto → gerar itens → validade de conteúdo → piloto → validação estrutural/confiabilidade',
          'Publicar → coletar → definir construto',
          'Aplicar sem validar',
          'Calcular o alfa antes de escrever itens',
        ],
        correct: 0,
        explanation: 'Parte-se do construto e dos itens, seguindo para conteúdo, piloto e análises psicométricas.',
      },
      {
        id: 'di-q2',
        prompt: 'A validade de conteúdo costuma ser avaliada por:',
        options: [
          'Juízes/especialistas que julgam a representatividade dos itens (ex.: IVC) e entrevistas cognitivas',
          'Um único respondente',
          'O preço do estudo',
          'A cor do questionário',
        ],
        correct: 0,
        explanation: 'Especialistas avaliam a cobertura do construto; entrevistas cognitivas checam a compreensão.',
      },
      {
        id: 'di-q3',
        prompt: 'O COSMIN (Mokkink et al., 2010) serve para:',
        options: [
          'Padronizar quais propriedades de medida avaliar e como relatá-las em instrumentos de saúde',
          'Um software de estatística',
          'Uma escala de QV pronta',
          'Um modelo de negócio',
        ],
        correct: 0,
        explanation: 'O COSMIN define taxonomia e critérios de propriedades de medida.',
      },
      {
        id: 'di-q4',
        prompt: 'Ao usar um instrumento de QV criado em outro idioma/cultura, o passo essencial é:',
        options: [
          'Adaptação transcultural com diretrizes específicas (Beaton et al., 2000) e reavaliação psicométrica',
          'Apenas traduzir literalmente',
          'Ignorar diferenças culturais',
          'Reduzir o número de itens pela metade',
        ],
        correct: 0,
        explanation: 'A adaptação transcultural busca equivalência semântica, cultural e conceitual — tradução não é validação.',
      },
      {
        id: 'di-q5',
        prompt: 'A falácia "jangle" ocorre quando:',
        options: [
          'Nomes diferentes são usados para o mesmo construto (dando a impressão de coisas distintas)',
          'O mesmo nome cobre construtos diferentes',
          'O alfa é alto demais',
          'A amostra é pequena',
        ],
        correct: 0,
        explanation: 'Jangle = nomes diferentes, mesmo construto; jingle = mesmo nome, construtos diferentes. Daí a importância de definir o construto antes.',
      },
      {
        id: 'di-q6',
        prompt: 'Por que "tradução não é validação"?',
        options: [
          'Porque as propriedades psicométricas precisam ser reavaliadas na nova população após a adaptação',
          'Porque traduzir é proibido',
          'Porque o construto muda de nome',
          'Porque o alfa é universal',
        ],
        correct: 0,
        explanation: 'Equivalência linguística não garante equivalência de medida; é preciso reavaliar validade e confiabilidade.',
      },
    ],
  },
}
