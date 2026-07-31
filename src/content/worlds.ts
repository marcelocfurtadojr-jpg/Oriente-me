import type { World } from './types'

export const WORLDS: World[] = [
  {
    id: 'w1',
    title: 'Motivação, Escolha e Economia Comportamental',
    subtitle: 'Das operações motivadoras à igualação, alocação e demanda',
    conceptIds: [
      'operacoes-motivadoras',
      'lei-igualacao',
      'alocacao-comportamento',
      'economia-comportamental',
    ],
    status: 'ready',
  },
  {
    id: 'w2',
    title: 'Psicologia da Saúde',
    subtitle: 'Comportamento, doença crônica e qualidade de vida',
    conceptIds: ['psicologia-saude', 'doencas-cronicas', 'qualidade-vida'],
    status: 'ready',
  },
  {
    id: 'w3',
    title: 'Medida e Instrumentos',
    subtitle: 'Psicometria e desenvolvimento de escalas',
    conceptIds: ['psicometria', 'desenvolvimento-instrumentos'],
    status: 'ready',
  },
]

export const getWorldOf = (conceptId: string) =>
  WORLDS.find((w) => w.conceptIds.includes(conceptId))
