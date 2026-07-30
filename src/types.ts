import type { Card } from 'ts-fsrs'

export type MasteryLevel = 'unknown' | 'fragile' | 'partial' | 'mastered'

/** Nó da árvore de conhecimento. */
export interface Concept {
  id: string
  title: string
  short: string
  area: string
  prereqs: string[]
  articleIds: string[]
  /** Fatos verificados, curados manualmente, que ancoram a geração da IA (anti-alucinação). */
  anchors?: string[]
  tags?: string[]
}

/** Referência bibliográfica curada (nunca gerada pela IA). */
export interface Article {
  id: string
  authors: string
  year: number | string
  title: string
  venue?: string
  keyIdea: string
  whyFoundational: string
  relatedConceptIds?: string[]
}

/** Estado de aprendizagem do usuário para um conceito. */
export interface ConceptProgress {
  conceptId: string
  mastery: MasteryLevel
  srs: Card | null
  /** epoch ms da próxima revisão; MAX_SAFE_INTEGER quando ainda não agendado. */
  dueTs: number
  seenAt?: string
  updatedAt: string
  notes?: string
}

export interface Profile {
  id: 'me'
  createdAt: string
  updatedAt: string
  formacao: string
  nivel: string
  objetivos: string
  temas: string
  autores: string
  dificuldades: string
  completed: boolean
}

export type LlmRole = 'system' | 'user' | 'assistant'
export interface LlmMessage {
  role: LlmRole
  content: string
}
