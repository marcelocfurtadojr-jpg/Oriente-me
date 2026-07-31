import type { World } from './types'

export const WORLDS: World[] = [
  {
    id: 'w1',
    title: 'Fundamentos da Análise do Comportamento',
    subtitle: 'Do princípio do comportamento às operações motivadoras',
    conceptIds: [
      'analise-comportamento',
      'behaviorismo-radical',
      'selecao-consequencias',
      'contingencias',
      'reforcamento',
      'punicao',
      'extincao',
      'controle-estimulos',
      'operacoes-motivadoras',
    ],
    status: 'ready',
  },
  {
    id: 'w2',
    title: 'Escolha e Economia Comportamental',
    subtitle: 'Igualação, alocação do comportamento e demanda',
    conceptIds: ['lei-igualacao', 'alocacao-comportamento', 'economia-comportamental'],
    status: 'ready',
  },
  {
    id: 'w3',
    title: 'Psicologia da Saúde',
    subtitle: 'Comportamento, doença crônica e qualidade de vida',
    conceptIds: ['psicologia-saude', 'doencas-cronicas', 'qualidade-vida'],
    status: 'ready',
  },
  {
    id: 'w4',
    title: 'Medida e Instrumentos',
    subtitle: 'Psicometria e desenvolvimento de escalas',
    conceptIds: ['psicometria', 'desenvolvimento-instrumentos'],
    status: 'ready',
  },
]

export const getWorldOf = (conceptId: string) =>
  WORLDS.find((w) => w.conceptIds.includes(conceptId))
