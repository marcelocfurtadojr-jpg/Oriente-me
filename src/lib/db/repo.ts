import { db, type ContentCache } from './db'
import type { ConceptProgress, Profile } from '../../types'

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

export async function resetAll() {
  await Promise.all([
    db.profile.clear(),
    db.progress.clear(),
    db.content.clear(),
    db.chats.clear(),
  ])
}
