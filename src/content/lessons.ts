import type { Lesson } from './types'
import { WORLD1_LESSONS } from './lessons/world1'
import { WORLD2_LESSONS } from './lessons/world2'
import { WORLD3_LESSONS } from './lessons/world3'

/**
 * Conteúdo curado (autoral, verificado, aprofundado) de todas as fases da trilha.
 * A IA NÃO gera este conteúdo — é fixo, instantâneo e com referências reais no texto.
 * Organizado por mundo em ./lessons/.
 */
export const LESSONS: Record<string, Lesson> = {
  ...WORLD1_LESSONS,
  ...WORLD2_LESSONS,
  ...WORLD3_LESSONS,
}

export const getLesson = (conceptId: string): Lesson | undefined => LESSONS[conceptId]

export const hasLesson = (conceptId: string): boolean => conceptId in LESSONS
