import type { Article } from '../types'

/**
 * Biblioteca de referências FUNDADORAS, curada manualmente e verificada.
 * A IA é instruída a citar SOMENTE itens desta lista. Ainda assim, confira na fonte
 * antes de citar em trabalhos acadêmicos (volumes/páginas podem exigir conferência).
 */
export const LIBRARY: Article[] = [
  {
    id: 'skinner1953',
    authors: 'Skinner, B. F.',
    year: 1953,
    title: 'Science and Human Behavior',
    venue: 'Macmillan',
    keyIdea:
      'Estende os princípios do condicionamento operante (reforço, punição, controle de estímulos) à análise do comportamento humano e social.',
    whyFoundational:
      'Consolida a aplicação da análise experimental do comportamento ao comportamento humano.',
    relatedConceptIds: ['reforcamento', 'punicao', 'controle-estimulos', 'analise-comportamento'],
  },
  {
    id: 'skinner1981',
    authors: 'Skinner, B. F.',
    year: 1981,
    title: 'Selection by consequences',
    venue: 'Science, 213(4507), 501–504',
    keyIdea:
      'O comportamento é selecionado por consequências em três níveis: filogenético (seleção natural), ontogenético (operante) e cultural.',
    whyFoundational:
      'Formaliza a "seleção pelas consequências" como princípio causal central do behaviorismo radical.',
    relatedConceptIds: ['selecao-consequencias', 'behaviorismo-radical'],
  },
  {
    id: 'michael1982',
    authors: 'Michael, J.',
    year: 1982,
    title: 'Distinguishing between discriminative and motivational functions of stimuli',
    venue: 'Journal of the Experimental Analysis of Behavior, 37(1), 149–155',
    keyIdea:
      'Separa a função discriminativa (sinaliza disponibilidade de reforço) da função motivacional (altera o valor do reforço).',
    whyFoundational: 'Origem conceitual das operações motivadoras na Análise do Comportamento.',
    relatedConceptIds: ['operacoes-motivadoras', 'controle-estimulos'],
  },
  {
    id: 'michael1993',
    authors: 'Michael, J.',
    year: 1993,
    title: 'Establishing operations',
    venue: 'The Behavior Analyst, 16(2), 191–206',
    keyIdea:
      'Define a operação estabelecedora e seus efeitos: alterar o valor do reforçador (value-altering) e evocar o comportamento (behavior-altering).',
    whyFoundational: 'Sistematiza as operações estabelecedoras como conceito próprio.',
    relatedConceptIds: ['operacoes-motivadoras'],
  },
  {
    id: 'laraway2003',
    authors: 'Laraway, S., Snycerski, S., Michael, J., & Poling, A.',
    year: 2003,
    title: 'Motivating operations and terms to describe them: some further refinements',
    venue: 'Journal of Applied Behavior Analysis, 36(3), 407–414',
    keyIdea:
      'Propõe o termo guarda-chuva "operações motivadoras" (OMs), com os subtipos estabelecedoras (EO) e abolidoras (AO).',
    whyFoundational: 'Consolida a terminologia moderna de operações motivadoras usada até hoje.',
    relatedConceptIds: ['operacoes-motivadoras'],
  },
  {
    id: 'herrnstein1961',
    authors: 'Herrnstein, R. J.',
    year: 1961,
    title:
      'Relative and absolute strength of response as a function of frequency of reinforcement',
    venue: 'Journal of the Experimental Analysis of Behavior, 4(3), 267–272',
    keyIdea:
      'Em esquemas concorrentes, a proporção de respostas iguala a proporção de reforços obtidos — a lei da igualação.',
    whyFoundational: 'Origem empírica da lei da igualação.',
    relatedConceptIds: ['lei-igualacao'],
  },
  {
    id: 'herrnstein1970',
    authors: 'Herrnstein, R. J.',
    year: 1970,
    title: 'On the law of effect',
    venue: 'Journal of the Experimental Analysis of Behavior, 13(2), 243–266',
    keyIdea:
      'Generaliza a igualação e formaliza quantitativamente a lei do efeito, incluindo reforço contextual.',
    whyFoundational: 'Base da quantificação da escolha e da alocação do comportamento.',
    relatedConceptIds: ['lei-igualacao', 'alocacao-comportamento'],
  },
  {
    id: 'baum1974',
    authors: 'Baum, W. M.',
    year: 1974,
    title: 'On two types of deviation from the matching law: bias and undermatching',
    venue: 'Journal of the Experimental Analysis of Behavior, 22(1), 231–242',
    keyIdea:
      'Introduz a lei da igualação generalizada, com parâmetros de sensibilidade (a) e viés (b).',
    whyFoundational: 'Torna a lei da igualação um modelo quantitativo aplicável a dados reais de escolha.',
    relatedConceptIds: ['lei-igualacao', 'alocacao-comportamento'],
  },
  {
    id: 'rachlingreen1972',
    authors: 'Rachlin, H., & Green, L.',
    year: 1972,
    title: 'Commitment, choice and self-control',
    venue: 'Journal of the Experimental Analysis of Behavior, 17(1), 15–22',
    keyIdea:
      'Autocontrole como escolha por compromisso prévio diante de reforçadores maiores e atrasados versus menores e imediatos.',
    whyFoundational:
      'Liga escolha/igualação ao autocontrole, com desdobramentos diretos para saúde e adesão.',
    relatedConceptIds: ['alocacao-comportamento', 'economia-comportamental'],
  },
  {
    id: 'hursh1980',
    authors: 'Hursh, S. R.',
    year: 1980,
    title: 'Economic concepts for the analysis of behavior',
    venue: 'Journal of the Experimental Analysis of Behavior, 34(2), 219–238',
    keyIdea:
      'Importa conceitos econômicos (demanda, elasticidade, bens abertos e fechados) para a análise do comportamento.',
    whyFoundational: 'Introduz formalmente a economia comportamental na Análise do Comportamento.',
    relatedConceptIds: ['economia-comportamental'],
  },
  {
    id: 'hurshsilberberg2008',
    authors: 'Hursh, S. R., & Silberberg, A.',
    year: 2008,
    title: 'Economic demand and essential value',
    venue: 'Psychological Review, 115(1), 186–198',
    keyIdea:
      'Propõe o modelo exponencial de demanda e o conceito de "valor essencial" derivado da elasticidade.',
    whyFoundational:
      'Base quantitativa moderna da economia comportamental (curvas de demanda e valor essencial).',
    relatedConceptIds: ['economia-comportamental'],
  },
  {
    id: 'engel1977',
    authors: 'Engel, G. L.',
    year: 1977,
    title: 'The need for a new medical model: a challenge for biomedicine',
    venue: 'Science, 196(4286), 129–136',
    keyIdea:
      'Propõe o modelo biopsicossocial: saúde e doença resultam da interação de fatores biológicos, psicológicos e sociais.',
    whyFoundational: 'Marco que amplia o modelo biomédico e fundamenta a Psicologia da Saúde.',
    relatedConceptIds: ['psicologia-saude'],
  },
  {
    id: 'whoqol1995',
    authors: 'The WHOQOL Group',
    year: 1995,
    title:
      'The World Health Organization Quality of Life assessment (WHOQOL): position paper from the World Health Organization',
    venue: 'Social Science & Medicine, 41(10), 1403–1409',
    keyIdea:
      'Define qualidade de vida como a percepção do indivíduo sobre sua posição na vida, no contexto de sua cultura e valores, e propõe medida multidimensional e transcultural.',
    whyFoundational: 'Referência da definição e medida de qualidade de vida em saúde.',
    relatedConceptIds: ['qualidade-vida'],
  },
  {
    id: 'cronbach1951',
    authors: 'Cronbach, L. J.',
    year: 1951,
    title: 'Coefficient alpha and the internal structure of tests',
    venue: 'Psychometrika, 16(3), 297–334',
    keyIdea:
      'Formaliza o coeficiente alfa como índice de consistência interna (confiabilidade) de um teste.',
    whyFoundational: 'Base clássica da confiabilidade em psicometria.',
    relatedConceptIds: ['psicometria'],
  },
  {
    id: 'cronbachmeehl1955',
    authors: 'Cronbach, L. J., & Meehl, P. E.',
    year: 1955,
    title: 'Construct validity in psychological tests',
    venue: 'Psychological Bulletin, 52(4), 281–302',
    keyIdea:
      'Introduz a validade de construto: em que medida um teste realmente mede o construto teórico pretendido.',
    whyFoundational: 'Fundamento do conceito moderno de validade.',
    relatedConceptIds: ['psicometria', 'desenvolvimento-instrumentos'],
  },
  {
    id: 'mokkink2010',
    authors: 'Mokkink, L. B., et al.',
    year: 2010,
    title:
      'The COSMIN study reached international consensus on taxonomy, terminology, and definitions of measurement properties for health-related patient-reported outcomes',
    venue: 'Journal of Clinical Epidemiology, 63(7), 737–745',
    keyIdea:
      'Estabelece consenso internacional (COSMIN) sobre taxonomia e definições das propriedades de medida de instrumentos em saúde.',
    whyFoundational: 'Padrão de referência para avaliar e desenvolver instrumentos de medida em saúde.',
    relatedConceptIds: ['desenvolvimento-instrumentos'],
  },
  {
    id: 'bickel2014',
    authors: 'Bickel, W. K., Johnson, M. W., Koffarnus, M. N., MacKillop, J., & Murphy, J. G.',
    year: 2014,
    title: 'The behavioral economics of substance use disorders: reinforcer pathology and its repair',
    venue: 'Annual Review of Clinical Psychology, 10, 641–677',
    keyIdea:
      'Reúne demanda e desconto do atraso no conceito de "patologia do reforço" (reinforcer pathology) e discute como repará-la — ponte direta entre economia comportamental e saúde.',
    whyFoundational: 'Aplica a economia comportamental a problemas clínicos e de saúde de forma integradora.',
    relatedConceptIds: ['economia-comportamental', 'doencas-cronicas'],
  },
  {
    id: 'messick1995',
    authors: 'Messick, S.',
    year: 1995,
    title:
      "Validity of psychological assessment: validation of inferences from persons' responses and performances as scientific inquiry into score meaning",
    venue: 'American Psychologist, 50(9), 741–749',
    keyIdea:
      'Propõe a validade como um conceito unificado (centrado na validade de construto), incluindo aspectos consequenciais da interpretação e uso dos escores.',
    whyFoundational: 'Consolida a visão contemporânea e unificada de validade.',
    relatedConceptIds: ['psicometria', 'desenvolvimento-instrumentos'],
  },
  {
    id: 'nunnally1978',
    authors: 'Nunnally, J. C.',
    year: 1978,
    title: 'Psychometric Theory (2nd ed.)',
    venue: 'McGraw-Hill',
    keyIdea:
      'Manual clássico de teoria psicométrica: confiabilidade, validade, construção de itens e escalas.',
    whyFoundational: 'Referência didática fundamental da psicometria clássica.',
    relatedConceptIds: ['psicometria'],
  },
]
