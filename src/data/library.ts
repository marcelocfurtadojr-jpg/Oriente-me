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
  {
    id: 'skinner1957',
    authors: 'Skinner, B. F.',
    year: 1957,
    title: 'Verbal Behavior',
    venue: 'Appleton-Century-Crofts',
    keyIdea:
      'Análise funcional da linguagem: define operantes verbais como o mando (controlado por operação motivadora) e o tato (controlado por estímulo discriminativo).',
    whyFoundational: 'Base do comportamento verbal; o mando é o caso clássico de controle por OM.',
    relatedConceptIds: ['operacoes-motivadoras'],
  },
  {
    id: 'iwata1994',
    authors: 'Iwata, B. A., Dorsey, M. F., Slifer, K. J., Bauman, K. E., & Richman, G. S.',
    year: '1982/1994',
    title: 'Toward a functional analysis of self-injury',
    venue: 'Journal of Applied Behavior Analysis, 27(2), 197–209 (reimpressão)',
    keyIdea:
      'Introduz a metodologia da análise funcional experimental, manipulando condições (inclusive motivacionais) para identificar a função do comportamento.',
    whyFoundational: 'Fundou a análise funcional; as OMs são as condições manipuladas nos testes.',
    relatedConceptIds: ['operacoes-motivadoras'],
  },
  {
    id: 'mcgill1999',
    authors: 'McGill, P.',
    year: 1999,
    title: 'Establishing operations: implications for the assessment, treatment, and prevention of problem behavior',
    venue: 'Journal of Applied Behavior Analysis, 32(3), 393–418',
    keyIdea:
      'Revisa as operações estabelecedoras e suas implicações práticas para avaliar, tratar e prevenir o comportamento-problema.',
    whyFoundational: 'Ponte das OMs para a avaliação e a intervenção clínica.',
    relatedConceptIds: ['operacoes-motivadoras'],
  },
  {
    id: 'ainslie1975',
    authors: 'Ainslie, G.',
    year: 1975,
    title: 'Specious reward: a behavioral theory of impulsiveness and impulse control',
    venue: 'Psychological Bulletin, 82(4), 463–496',
    keyIdea:
      'Propõe o desconto hiperbólico do valor com o atraso e a reversão de preferência — base comportamental da impulsividade e do autocontrole.',
    whyFoundational: 'Fundamento do desconto do atraso e do estudo do autocontrole.',
    relatedConceptIds: ['alocacao-comportamento', 'economia-comportamental'],
  },
  {
    id: 'davisonmccarthy1988',
    authors: 'Davison, M., & McCarthy, D.',
    year: 1988,
    title: 'The Matching Law: A Research Review',
    venue: 'Lawrence Erlbaum',
    keyIdea: 'Revisão abrangente da lei da igualação, suas extensões (viés, sensibilidade) e a base empírica.',
    whyFoundational: 'Consolidação empírica e teórica da lei da igualação.',
    relatedConceptIds: ['lei-igualacao', 'alocacao-comportamento'],
  },
  {
    id: 'matarazzo1980',
    authors: 'Matarazzo, J. D.',
    year: 1980,
    title: 'Behavioral health and behavioral medicine: frontiers for a new health psychology',
    venue: 'American Psychologist, 35(9), 807–817',
    keyIdea:
      'Define e delimita os campos de "saúde comportamental" e "medicina comportamental", firmando a Psicologia da Saúde.',
    whyFoundational: 'Marco institucional da Psicologia da Saúde como campo.',
    relatedConceptIds: ['psicologia-saude'],
  },
  {
    id: 'who2003',
    authors: 'World Health Organization (WHO)',
    year: 2003,
    title: 'Adherence to long-term therapies: evidence for action',
    venue: 'Geneva: World Health Organization',
    keyIdea:
      'Relatório de referência sobre adesão a terapias de longo prazo; estima adesão média de ~50% em doenças crônicas e propõe determinantes multidimensionais.',
    whyFoundational: 'Consolidou a adesão como prioridade de saúde pública.',
    relatedConceptIds: ['doencas-cronicas'],
  },
  {
    id: 'sprangers1999',
    authors: 'Sprangers, M. A. G., & Schwartz, C. E.',
    year: 1999,
    title: 'Integrating response shift into health-related quality of life research: a theoretical model',
    venue: 'Social Science & Medicine, 48(11), 1507–1515',
    keyIdea:
      'Propõe o conceito de "response shift": mudanças internas de padrões, valores e significado que alteram a autoavaliação de qualidade de vida ao longo do tempo.',
    whyFoundational: 'Aponta um desafio central na medida longitudinal de qualidade de vida.',
    relatedConceptIds: ['qualidade-vida'],
  },
  {
    id: 'lordnovick1968',
    authors: 'Lord, F. M., & Novick, M. R.',
    year: 1968,
    title: 'Statistical Theories of Mental Test Scores',
    venue: 'Addison-Wesley',
    keyIdea:
      'Formaliza a Teoria Clássica dos Testes (escore observado = verdadeiro + erro) e apresenta as bases da teoria de resposta ao item.',
    whyFoundational: 'Obra fundadora da teoria psicométrica moderna.',
    relatedConceptIds: ['psicometria'],
  },
  {
    id: 'embretson2000',
    authors: 'Embretson, S. E., & Reise, S. P.',
    year: 2000,
    title: 'Item Response Theory for Psychologists',
    venue: 'Lawrence Erlbaum',
    keyIdea:
      'Introduz a Teoria de Resposta ao Item (TRI): modela a probabilidade de resposta a cada item em função do traço latente e de parâmetros do item.',
    whyFoundational: 'Referência didática da TRI para psicólogos.',
    relatedConceptIds: ['psicometria'],
  },
  {
    id: 'beaton2000',
    authors: 'Beaton, D. E., Bombardier, C., Guillemin, F., & Ferraz, M. B.',
    year: 2000,
    title: 'Guidelines for the process of cross-cultural adaptation of self-report measures',
    venue: 'Spine, 25(24), 3186–3191',
    keyIdea:
      'Estabelece etapas para adaptação transcultural de instrumentos (tradução, retrotradução, comitê, pré-teste), buscando equivalência semântica e cultural.',
    whyFoundational: 'Diretriz de referência para adaptar instrumentos entre idiomas/culturas.',
    relatedConceptIds: ['desenvolvimento-instrumentos'],
  },
  {
    id: 'boateng2018',
    authors: 'Boateng, G. O., Neilands, T. B., Frongillo, E. A., Melgar-Quiñonez, H. R., & Young, S. L.',
    year: 2018,
    title: 'Best practices for developing and validating scales for health, social, and behavioral research: a primer',
    venue: 'Frontiers in Public Health, 6:149',
    keyIdea:
      'Guia prático e atual das etapas de construção e validação de escalas (geração de itens, validade de conteúdo, análise fatorial, confiabilidade).',
    whyFoundational: 'Síntese contemporânea das melhores práticas de desenvolvimento de instrumentos.',
    relatedConceptIds: ['desenvolvimento-instrumentos'],
  },
]
