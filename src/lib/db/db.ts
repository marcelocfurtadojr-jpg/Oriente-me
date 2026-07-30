import Dexie, { type Table } from 'dexie'
import type { ConceptProgress, Profile } from '../../types'

export interface ContentCache {
  key: string
  conceptId: string
  block: string
  model: string
  content: string
  createdAt: string
}

export interface ChatLog {
  id?: number
  mode: string
  ref: string
  messages: { role: string; content: string }[]
  updatedAt: string
}

export class TutorDB extends Dexie {
  profile!: Table<Profile, string>
  progress!: Table<ConceptProgress, string>
  content!: Table<ContentCache, string>
  chats!: Table<ChatLog, number>

  constructor() {
    super('tutor-db')
    this.version(1).stores({
      profile: 'id',
      progress: 'conceptId, mastery, dueTs',
      content: 'key, conceptId, block',
      chats: '++id, mode, ref',
    })
  }
}

export const db = new TutorDB()
