import type { Lesson } from '../types'

/** Mundo 3 — Medida e Instrumentos (conteúdo curado, aprofundado). */
export const WORLD3_LESSONS: Record<string, Lesson> = {
  psicometria: {
    conceptId: 'psicometria',
    intuicao: `Se você vai construir uma régua, precisa garantir que ela meça de forma **consistente** e que realmente meça **comprimento** — não peso. A **psicometria** é esse controle de qualidade, mas para coisas **invisíveis**: qualidade de vida, dor, ansiedade, depressão.

Duas perguntas guiam tudo: a medida é **consistente** (confiabilidade)? E mede **o que diz medir** (validade)? Sem isso, um "escore de qualidade de vida" pode ser apenas ruído com aparência de número.`,
    tecnico: `A **psicometria** reúne teoria e métodos para medir construtos psicológicos. Dois grandes referenciais:
- **Teoria Clássica dos Testes (TCT)** (Lord e Novick, 1968): o escore observado é o escore verdadeiro mais o erro (X = V + E).
- **Teoria de Resposta ao Item (TRI)** (Embretson e Reise, 2000): modela a probabilidade de resposta a cada item em função do traço latente e de parâmetros do item (dificuldade, discriminação).

**Confiabilidade** (consistência da medida):
- consistência interna — **alfa de Cronbach (1951)** (e alternativas como o ômega);
- estabilidade — teste-reteste.

**Validade** (a medida representa o construto):
- de **conteúdo**, de **critério** e, sobretudo, de **construto** (Cronbach e Meehl, 1955);
- na visão contemporânea **unificada**, toda validade é validade de construto e inclui as **consequências** do uso do teste (Messick, 1995).

A **análise fatorial** (exploratória e confirmatória) examina a **estrutura interna** do instrumento. Referência didática clássica: Nunnally (1978).`,
    historia: `**Cronbach (1951)** formalizou o coeficiente **alfa** (confiabilidade). **Cronbach e Meehl (1955)** introduziram a **validade de construto**, reorientando o campo. **Lord e Novick (1968)** consolidaram a Teoria Clássica dos Testes; e **Messick (1995)** propôs a visão **unificada** de validade, incluindo aspectos consequenciais. Esses marcos estruturam a psicometria usada hoje no desenvolvimento de instrumentos de saúde.`,
    relacoes: `É a ponte entre **o que medir** (qualidade de vida) e **como medir bem**, e a base direta do **desenvolvimento de instrumentos**.

Mapa: Qualidade de Vida → **Cronbach (1951)** / **Cronbach e Meehl (1955)** → **Lord e Novick (1968)** → **Messick (1995)** → Desenvolvimento de Instrumentos.`,
    articleIds: ['cronbach1951', 'cronbachmeehl1955', 'messick1995', 'nunnally1978'],
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
        prompt: 'O alfa de Cronbach (1951) é um índice de:',
        options: [
          'Consistência interna (confiabilidade)',
          'Validade de conteúdo',
          'Tamanho do efeito',
          'Significância estatística',
        ],
        correct: 0,
        explanation: 'O alfa estima a consistência interna dos itens — uma forma de confiabilidade.',
      },
      {
        id: 'pm-q3',
        prompt: 'A validade de construto (Cronbach e Meehl, 1955) diz respeito a:',
        options: [
          'Se o instrumento realmente mede o construto teórico pretendido',
          'Ao preço do teste',
          'Ao número de itens',
          'À ordem das perguntas',
        ],
        correct: 0,
        explanation: 'Avalia se as inferências sobre o construto teórico são sustentadas pelas evidências.',
      },
      {
        id: 'pm-q4',
        prompt: 'Na Teoria Clássica dos Testes (Lord e Novick, 1968), o escore observado é entendido como:',
        options: [
          'Escore verdadeiro + erro de medida',
          'Apenas erro aleatório',
          'A média da população',
          'Um parâmetro de item da TRI',
        ],
        correct: 0,
        explanation: 'Na TCT, X = V + E: o escore observado combina o escore verdadeiro e o erro de medida.',
      },
    ],
  },

  'desenvolvimento-instrumentos': {
    conceptId: 'desenvolvimento-instrumentos',
    intuicao: `Criar uma boa escala de qualidade de vida para HAP é como **projetar um instrumento de precisão**: você define exatamente o que quer medir, redige os itens, testa com especialistas e com pacientes, e **prova estatisticamente** que os itens se sustentam e significam o que deveriam.

Não é "inventar perguntas": cada etapa gera **evidências** de que a medida é confiável e válida — e é isso que separa um instrumento científico de um questionário improvisado.`,
    tecnico: `Um percurso típico de **desenvolvimento e validação** de um instrumento:
1. **Definir o construto** e seu domínio (o que é "qualidade de vida na HAP"?).
2. **Gerar itens** (revisão de literatura, entrevistas com pacientes, instrumentos existentes).
3. **Validade de conteúdo**: juízes/especialistas avaliam relevância e representatividade (ex.: índice de validade de conteúdo, IVC); entrevistas cognitivas com pacientes.
4. **Estudo piloto** e **análise de itens** (dificuldade, discriminação, efeitos teto/piso).
5. **Validação estrutural** (análise fatorial exploratória e confirmatória) e **confiabilidade** (alfa/ômega, teste-reteste).
6. **Evidências adicionais de validade** de construto (relações com outras variáveis), na chave unificada de Messick (1995).
7. **Adaptação transcultural**, quando se traduz/importa um instrumento (Beaton et al., 2000).

O **COSMIN** (Mokkink et al., 2010) oferece o consenso internacional sobre **quais propriedades de medida** avaliar e como relatá-las. Referência prática clássica: DeVellis, *Scale Development*.`,
    historia: `O campo reúne e padroniza décadas de prática psicométrica (Cronbach e Meehl, 1955; Nunnally, 1978; Messick, 1995). Duas iniciativas recentes deram-lhe padronização: as **diretrizes de adaptação transcultural** de **Beaton et al. (2000)** e o consenso **COSMIN** (**Mokkink et al., 2010**), hoje referência para avaliar instrumentos de saúde e desfechos relatados pelo paciente.`,
    relacoes: `É a aplicação da **psicometria** para produzir a ferramenta que mede a **qualidade de vida** — exatamente o tipo de trabalho de uma dissertação sobre QV em HAP.

Mapa: Psicometria (Cronbach; Messick) → **Desenvolvimento de Instrumentos** (Beaton et al., 2000; **COSMIN**, Mokkink et al., 2010) → escala de QV para HAP → pesquisa aplicada.`,
    articleIds: ['mokkink2010', 'cronbachmeehl1955', 'messick1995'],
    quiz: [
      {
        id: 'di-q1',
        prompt: 'Qual é uma sequência típica no desenvolvimento de um instrumento?',
        options: [
          'Definir construto → gerar itens → validade de conteúdo → piloto → validação estrutural/confiabilidade',
          'Publicar → coletar → definir construto',
          'Aplicar sem validar',
          'Apenas calcular o alfa',
        ],
        correct: 0,
        explanation: 'Parte-se do construto e dos itens, seguindo para validade de conteúdo, piloto e análises psicométricas.',
      },
      {
        id: 'di-q2',
        prompt: 'A validade de conteúdo costuma ser avaliada por:',
        options: [
          'Juízes/especialistas que julgam a representatividade dos itens (ex.: IVC)',
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
          'Consenso sobre as propriedades de medida a avaliar em instrumentos de saúde',
          'Um software de estatística',
          'Uma escala de QV pronta',
          'Um modelo de negócio',
        ],
        correct: 0,
        explanation: 'O COSMIN padroniza taxonomia e critérios para avaliar propriedades de medida.',
      },
      {
        id: 'di-q4',
        prompt: 'Ao traduzir e usar um instrumento de QV criado em outro idioma/cultura, o passo essencial é:',
        options: [
          'Adaptação transcultural com diretrizes específicas (Beaton et al., 2000)',
          'Apenas traduzir literalmente',
          'Ignorar diferenças culturais',
          'Reduzir o número de itens pela metade',
        ],
        correct: 0,
        explanation: 'A adaptação transcultural (Beaton et al., 2000) vai além da tradução: equivalência semântica, cultural e de mensuração.',
      },
    ],
  },
}
