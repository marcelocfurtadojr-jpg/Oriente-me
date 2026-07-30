import { db, type ContentCache, type GameState } from './db'
import type { ConceptProgress, Profile } from '../../types'
import { schedule, newCard, type RecallRating } from '../srs/scheduler'
import { masteryFromScore, XP_PER_CORRECT, XP_COMPLETE_BONUS } from '../game'

export const getProfile = async (): Promise<Profile | null> => (await db.profile.get('me')) ?? null
export const saveProfile = (p: Profile) => db.profile.put(p)

export const getProgress = (conceptId: string) => db.progress.get(conceptId)
export const getAllProgress = () => db.progress.toArray()
export const upsertProgress = (p: ConceptProgress) => db.progress.put(p)

export const getDue = (nowTs: number) =>
  db.progress.where('dueTs').belowOrEqual(nowTs).toArray()

export const cacheGet = (key: string) => db.content.get(key)
export const cacheSet = (v: Omit<ContentCache, 'createdAt'>) =>
  db.content.put({ ...v, createdAt: new Date().toISOString() })

export const getGame = async (): Promise<GameState> =>
  (await db.game.get('me')) ?? { id: 'me', xp: 0, streakDays: 0, lastStudyDate: '' }

/** Conclui uma fase: soma XP, atualiza ofensiva e deriva o domínio do conceito a partir da nota. */
export async function completeLesson(conceptId: string, correct: number, total: number) {
  const score = total > 0 ? correct / total : 0
  const now = new Date()
  const nowISO = now.toISOString()
  const today = nowISO.slice(0, 10)

  const g = await getGame()
  const gainedXp = correct * XP_PER_CORRECT + XP_COMPLETE_BONUS
  let streak = g.streakDays
  if (g.lastStudyDate !== today) {
    const yesterday = new Date(now.getTime() - 86_400_000).toISOString().slice(0, 10)
    streak = g.lastStudyDate === yesterday ? g.streakDays + 1 : 1
  }
  await db.game.put({ id: 'me', xp: g.xp + gainedXp, streakDays: streak, lastStudyDate: today })

  const existing = await db.progress.get(conceptId)
  const rating: RecallRating = score >= 0.85 ? 'easy' : score >= 0.6 ? 'good' : 'again'
  const card = schedule(existing?.srs ?? newCard(now), rating, now)
  await db.progress.put({
    conceptId,
    mastery: masteryFromScore(score),
    srs: card,
    dueTs: card.due.getTime(),
    seenAt: existing?.seenAt ?? nowISO,
    updatedAt: nowISO,
    quizBest: Math.max(existing?.quizBest ?? 0, score),
    lessonDone: true,
    notes: existing?.notes,
  })
  return { gainedXp, score }
}

export const getNote = (conceptId: string) => db.notes.get(conceptId)
export const saveNote = (conceptId: string, text: string) =>
  db.notes.put({ conceptId, text, updatedAt: new Date().toISOString() })

export async function resetAll() {
  await Promise.all([
    db.profile.clear(),
    db.progress.clear(),
    db.content.clear(),
    db.chats.clear(),
    db.game.clear(),
    db.notes.clear(),
  ])
}
