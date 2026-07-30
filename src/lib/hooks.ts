import { useLiveQuery } from 'dexie-react-hooks'
import { getAllProgress, getGame, getProfile } from './db/repo'
import type { GameState } from './db/db'
import { progressMap } from './knowledge/graph'

const DEFAULT_GAME: GameState = { id: 'me', xp: 0, streakDays: 0, lastStudyDate: '' }

/** Mapa reativo de progresso (conceptId -> ConceptProgress). */
export function useProgress() {
  const list = useLiveQuery(() => getAllProgress(), [], [])
  return progressMap(list)
}

/** Perfil reativo: undefined = carregando, null = não preenchido, objeto = perfil. */
export function useProfile() {
  return useLiveQuery(() => getProfile(), [])
}

export function useGame(): GameState {
  return useLiveQuery(() => getGame(), [], DEFAULT_GAME)
}
