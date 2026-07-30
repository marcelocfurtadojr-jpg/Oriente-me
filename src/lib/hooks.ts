import { useLiveQuery } from 'dexie-react-hooks'
import { getAllProgress, getProfile } from './db/repo'
import { progressMap } from './knowledge/graph'

/** Mapa reativo de progresso (conceptId -> ConceptProgress). */
export function useProgress() {
  const list = useLiveQuery(() => getAllProgress(), [], [])
  return progressMap(list)
}

/** Perfil reativo: undefined = carregando, null = não preenchido, objeto = perfil. */
export function useProfile() {
  return useLiveQuery(() => getProfile(), [])
}
