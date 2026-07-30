import { createEmptyCard, fsrs, generatorParameters, Rating, type Card } from 'ts-fsrs'
import type { MasteryLevel } from '../../types'

const engine = fsrs(generatorParameters({ enable_fuzz: true }))

export function newCard(now: Date = new Date()): Card {
  return createEmptyCard(now)
}

export type RecallRating = 'again' | 'hard' | 'good' | 'easy'

const RATING = {
  again: Rating.Again,
  hard: Rating.Hard,
  good: Rating.Good,
  easy: Rating.Easy,
} as const

/** Agenda a próxima revisão a partir do estado atual do cartão e da nota de recordação. */
export function schedule(card: Card, rating: RecallRating, now: Date = new Date()): Card {
  return engine.next(card, now, RATING[rating]).card
}

/** Traduz o desempenho em um nível de domínio para o modelo do aluno. */
export function masteryFromCard(card: Card, rating: RecallRating): MasteryLevel {
  if (rating === 'again') return 'fragile'
  if (rating === 'easy') return card.reps >= 2 ? 'mastered' : 'partial'
  if (rating === 'good') return card.reps >= 3 && card.stability >= 21 ? 'mastered' : 'partial'
  return 'partial' // hard: estudou, mas com dificuldade
}
