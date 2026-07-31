import type { Lesson } from '../types'

/** Mundo 2 — Psicologia da Saúde (conteúdo curado, aprofundado). */
export const WORLD2_LESSONS: Record<string, Lesson> = {
  'psicologia-saude': {
    conceptId: 'psicologia-saude',
    intuicao: `Saúde não é só biologia. Boa parte do que determina adoecer ou se manter bem é **o que a pessoa faz todo dia**: como come, se movimenta, dorme, toma (ou não) a medicação e lida com o estresse. E comportamento é moldado por contingências.

Uma psicologia da saúde de base analítico-comportamental pergunta: *o que mantém* os comportamentos de saúde e de risco — e como rearranjar o ambiente para favorecer os saudáveis. Em vez de culpar a "falta de força de vontade", ela olha para **antecedentes e consequências**.`,
    tecnico: `A **Psicologia da Saúde** aplica a psicologia à promoção da saúde, à prevenção e ao manejo de doenças. Seu pano de fundo é o **modelo biopsicossocial** (Engel, 1977): saúde e doença resultam da interação de fatores biológicos, psicológicos e sociais — uma ampliação do modelo estritamente biomédico.

Na abordagem comportamental (parte da **medicina comportamental**), comportamentos de saúde — adesão, autocuidado, comportamento de risco — são **operantes**, analisados por sua **função** (antecedentes e consequências). Intervenções típicas:
- rearranjar **antecedentes** (lembretes, pistas, facilitação do ambiente);
- ajustar **consequências** (reforço dos comportamentos-alvo, feedback);
- manejar **operações motivadoras** (privação, saciação, estados aversivos) que alteram o valor dos reforçadores em jogo.

Matarazzo (1980) delimitou os campos de "saúde comportamental" e "medicina comportamental", firmando institucionalmente a área.`,
    historia: `A Psicologia da Saúde consolidou-se nas décadas de 1970-80. **Engel (1977)**, na *Science*, propôs o **modelo biopsicossocial**, desafiando o reducionismo biomédico. **Matarazzo (1980)**, no *American Psychologist*, definiu formalmente "behavioral health" e "behavioral medicine" e ajudou a institucionalizar a área (Divisão 38 da APA). A tradição analítico-comportamental contribuiu com a **análise funcional** dos comportamentos de saúde e com tecnologias de mudança de comportamento.`,
    relacoes: `Herda o **reforçamento** e as **operações motivadoras** e os aplica à saúde; abre caminho para o manejo de **doenças crônicas** e para a avaliação de **qualidade de vida**.

Mapa: Reforçamento / Operações Motivadoras → **Engel (1977)** (biopsicossocial) → **Matarazzo (1980)** → Doenças Crônicas → Qualidade de Vida.`,
    articleIds: ['engel1977'],
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
        prompt: 'Na abordagem analítico-comportamental da saúde, a adesão ao tratamento é entendida como:',
        options: [
          'Operante mantido por contingências (antecedentes e consequências)',
          'Traço fixo de personalidade',
          'Reflexo inato',
          'Escolha puramente racional',
        ],
        correct: 0,
        explanation: 'Comportamentos de saúde são operantes: a análise funcional permite rearranjar contingências.',
      },
      {
        id: 'ps-q3',
        prompt: 'Uma intervenção comportamental para aumentar a adesão a uma medicação atuaria principalmente em:',
        options: [
          'Antecedentes, consequências e operações motivadoras do comportamento',
          'Apenas na dose do remédio',
          'Na genética do paciente',
          'Em nada, pois adesão é força de vontade',
        ],
        correct: 0,
        explanation: 'Ajustar pistas (antecedentes), reforço/feedback (consequências) e OMs é a lógica comportamental.',
      },
      {
        id: 'ps-q4',
        prompt: 'Matarazzo (1980) é lembrado na área por:',
        options: [
          'Delimitar e institucionalizar "saúde comportamental" e "medicina comportamental"',
          'Criar o coeficiente alfa',
          'Formular a lei da igualação',
          'Propor o desconto hiperbólico',
        ],
        correct: 0,
        explanation: 'Matarazzo (1980) ajudou a definir os campos e a institucionalizar a Psicologia da Saúde.',
      },
    ],
  },

  'doencas-cronicas': {
    conceptId: 'doencas-cronicas',
    intuicao: `Uma doença crônica — como a **Hipertensão Arterial Pulmonar (HAP)** — não se resolve com um tratamento único: ela é manejada **todos os dias, por anos**. Isso a torna uma **maratona comportamental**: adesão à medicação, automonitoramento, mudanças de estilo de vida, manejo de sintomas e do humor.

São as pequenas contingências diárias, repetidas ao longo do tempo, que decidem o desfecho — e é aí que a Análise do Comportamento e a economia comportamental entram.`,
    tecnico: `**Doenças crônicas** são condições de longo curso que exigem manejo contínuo. Alvos comportamentais típicos: **adesão** ao tratamento, **automonitoramento**, mudança de **estilo de vida** e enfrentamento.

A **adesão** é um problema central: a OMS (WHO, 2003), em seu relatório sobre adesão a terapias de longo prazo, estima que apenas cerca de **50%** dos pacientes com doenças crônicas aderem adequadamente — com grande impacto clínico e econômico.

A **HAP** é crônica, progressiva e grave: dispneia, limitação funcional, tratamento complexo e forte impacto sobre a **qualidade de vida**. Um mecanismo comportamental-chave é o **desconto do atraso**: os **custos são imediatos** (efeitos colaterais, esforço, restrições) e os **benefícios são atrasados** e incertos (mais saúde no futuro), o que favorece a não adesão (Bickel et al., 2014). Intervenções eficazes tornam o benefício mais **imediato e saliente** e reduzem o **custo de resposta**.`,
    historia: `A **transição epidemiológica** do século XX — de doenças agudas/infecciosas para condições crônicas — colocou o **comportamento** no centro dos desfechos de saúde. O relatório da **OMS (2003)** sobre adesão consolidou o tema como prioridade de saúde pública, e a medicina comportamental desenvolveu tecnologias de adesão e autogestão.`,
    relacoes: `É a aplicação da **Psicologia da Saúde** a condições de longo curso; usa fortemente a **economia comportamental** (desconto do atraso) e desemboca na **qualidade de vida** como desfecho central.

Mapa: Psicologia da Saúde → Doenças Crônicas (ex.: HAP) → **Economia Comportamental** (Bickel et al., 2014) → Qualidade de Vida.`,
    articleIds: ['engel1977', 'bickel2014'],
    quiz: [
      {
        id: 'dc-q1',
        prompt: 'O que torna as doenças crônicas um desafio especialmente comportamental?',
        options: [
          'Exigem manejo diário e sustentado por longos períodos (adesão, automonitoramento, estilo de vida)',
          'São curadas rapidamente',
          'Não têm tratamento',
          'Independem do comportamento do paciente',
        ],
        correct: 0,
        explanation: 'Por serem de longo curso, dependem de comportamentos mantidos ao longo do tempo.',
      },
      {
        id: 'dc-q2',
        prompt: 'A Hipertensão Arterial Pulmonar (HAP) caracteriza-se por ser:',
        options: [
          'Crônica, progressiva e com forte impacto funcional e sobre a qualidade de vida',
          'Aguda e autolimitada',
          'Sem necessidade de tratamento contínuo',
          'Restrita a idosos',
        ],
        correct: 0,
        explanation: 'A HAP é crônica e grave, com grande carga sintomática/funcional — daí a centralidade da QV.',
      },
      {
        id: 'dc-q3',
        prompt: 'Segundo o relatório da OMS (WHO, 2003), a adesão a terapias de longo prazo em doenças crônicas gira em torno de:',
        options: ['Cerca de 50%', 'Praticamente 100%', 'Menos de 5%', 'Sempre acima de 90%'],
        correct: 0,
        explanation: 'A OMS (2003) estima adesão média de cerca de 50% em condições crônicas — um problema central.',
      },
      {
        id: 'dc-q4',
        prompt: 'Por que benefícios futuros à saúde muitas vezes perdem para custos imediatos (ex.: parar de fumar)?',
        options: [
          'Por desconto do atraso: o valor do reforço cai à medida que ele é adiado (Bickel et al., 2014)',
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
    intuicao: `Dois pacientes com os **mesmos exames** podem viver de formas muito diferentes: um ativo e esperançoso, outro limitado e sofrendo. **Qualidade de vida (QV)** captura essa **experiência vivida** — não apenas os marcadores da doença.

Em doenças crônicas como a HAP, medir QV é tão importante quanto medir a fisiologia: é a QV que traduz o que o tratamento significa para a vida da pessoa — e, muitas vezes, é o **desfecho** que mais importa ao paciente.`,
    tecnico: `**Qualidade de vida** é um construto **multidimensional e subjetivo**. A OMS, pelo grupo **WHOQOL (1995)**, define-a como a percepção do indivíduo sobre sua posição na vida, no contexto da cultura e do sistema de valores em que vive. Domínios usuais: **físico, psicológico, relações sociais e ambiente**.

Distinções importantes:
- **QV geral** × **qualidade de vida relacionada à saúde (HRQoL)** — esta recorta o impacto da saúde/doença e do tratamento.
- Instrumentos **genéricos** (comparam condições e populações; ex.: WHOQOL, SF-36) × **específicos por doença** (mais **sensíveis** a mudanças da condição-alvo; úteis na HAP).

Como a QV é subjetiva e **latente** (não se mede diretamente), ela só existe operacionalmente por meio de um **instrumento válido e confiável** — o que liga esta fase diretamente à psicometria. Referência metodológica: Fayers e Machin, *Quality of Life*.`,
    historia: `O **WHOQOL Group (1995)** operacionalizou a definição da OMS e desenvolveu instrumentos **transculturais** (WHOQOL-100 e, depois, o WHOQOL-BREF), consolidando o construto na pesquisa em saúde. A partir daí cresceu a área de **desfechos relatados pelo paciente (PROs)**, tornando a QV um desfecho central em ensaios clínicos e na avaliação de doenças crônicas.`,
    relacoes: `É o **desfecho** das doenças crônicas e o **construto-alvo** a ser medido — por isso conduz naturalmente à **psicometria** e ao **desenvolvimento de instrumentos**.

Mapa: Doenças Crônicas → **Qualidade de Vida** (WHOQOL, 1995) → Psicometria → Desenvolvimento de Instrumentos (escala de QV para HAP).`,
    articleIds: ['whoqol1995'],
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
        explanation: 'A definição da OMS é centrada na percepção do indivíduo, multidimensional e sensível à cultura.',
      },
      {
        id: 'qv-q2',
        prompt: 'A qualidade de vida relacionada à saúde (HRQoL) diferencia-se da QV geral porque:',
        options: [
          'Foca especificamente o impacto da saúde/doença e do tratamento na vida',
          'Ignora a saúde',
          'É apenas física',
          'Não pode ser medida',
        ],
        correct: 0,
        explanation: 'A HRQoL recorta o construto para o que se relaciona à saúde — útil em doenças crônicas como a HAP.',
      },
      {
        id: 'qv-q3',
        prompt: 'Instrumentos específicos por doença (vs genéricos) são preferíveis quando se quer:',
        options: [
          'Detectar mudanças finas ligadas àquela condição específica (ex.: HAP)',
          'Comparar populações muito diferentes',
          'Medir renda',
          'Evitar qualquer validação',
        ],
        correct: 0,
        explanation: 'Instrumentos específicos são mais sensíveis a aspectos e mudanças próprios da doença-alvo.',
      },
      {
        id: 'qv-q4',
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
    ],
  },
}
