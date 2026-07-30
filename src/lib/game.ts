import type { MasteryLevel } from '../types'

export const XP_PER_CORRECT = 10
export const XP_COMPLETE_BONUS = 20
export const XP_PER_LEVEL = 100

export const levelFromXp = (xp: number) => Math.floor(xp / XP_PER_LEVEL) + 1
export const xpIntoLevel = (xp: number) => xp % XP_PER_LEVEL
export const xpToNext = (xp: number) => XP_PER_LEVEL - xpIntoLevel(xp)

/** Deriva o nível de domínio a partir da nota do quiz (0..1). */
export function masteryFromScore(score: number): MasteryLevel {
  if (score >= 0.85) return 'mastered'
  if (score >= 0.6) return 'partial'
  return 'fragile'
}
