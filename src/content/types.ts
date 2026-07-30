/** Conteúdo curado (autoral) que alimenta a trilha de jogo. */

export interface QuizQuestion {
  id: string
  prompt: string
  options: string[]
  /** índice da alternativa correta em `options`. */
  correct: number
  /** feedback exibido após responder (grounded). */
  explanation: string
}

export interface Lesson {
  conceptId: string
  /** seções de estudo, em Markdown, curadas manualmente. */
  intuicao: string
  tecnico: string
  historia: string
  relacoes: string
  /** referências fundadoras (ids da biblioteca), destacadas na fase. */
  articleIds: string[]
  quiz: QuizQuestion[]
}

export interface World {
  id: string
  title: string
  subtitle: string
  /** conceitos (fases) na ordem da trilha. */
  conceptIds: string[]
  status: 'ready' | 'soon'
}
