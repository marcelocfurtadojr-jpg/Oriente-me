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

export interface GameState {
  id: 'me'
  xp: number
  streakDays: number
  /** YYYY-MM-DD do último dia de estudo (para a ofensiva). */
  lastStudyDate: string
}

export interface Note {
  conceptId: string
  text: string
  updatedAt: string
}

export class TutorDB extends Dexie {
  profile!: Table<Profile, string>
  progress!: Table<ConceptProgress, string>
  content!: Table<ContentCache, string>
  chats!: Table<ChatLog, number>
  game!: Table<GameState, string>
  notes!: Table<Note, string>

  constructor() {
    super('tutor-db')
    this.version(1).stores({
      profile: 'id',
      progress: 'conceptId, mastery, dueTs',
      content: 'key, conceptId, block',
      chats: '++id, mode, ref',
    })
    this.version(2).stores({
      game: 'id',
      notes: 'conceptId',
    })
  }
}

export const db = new TutorDB()
