import { CONCEPTS } from '../../data/concepts'
import { LIBRARY } from '../../data/library'
import type { Article, Concept, ConceptProgress, MasteryLevel } from '../../types'

export const conceptById = new Map<string, Concept>(CONCEPTS.map((c) => [c.id, c]))
export const articleById = new Map<string, Article>(LIBRARY.map((a) => [a.id, a]))

export const getConcept = (id: string) => conceptById.get(id)

export function prereqTitles(c: Concept): string[] {
  return c.prereqs.map((p) => conceptById.get(p)?.title ?? p)
}

export function conceptArticles(c: Concept): Article[] {
  return c.articleIds
    .map((id) => articleById.get(id))
    .filter((a): a is Article => Boolean(a))
}

const RANK: Record<MasteryLevel, number> = { unknown: 0, fragile: 1, partial: 2, mastered: 3 }
export const masteryRank = (m: MasteryLevel) => RANK[m]

export function masteryOf(id: string, progress: Map<string, ConceptProgress>): MasteryLevel {
  return progress.get(id)?.mastery ?? 'unknown'
}

/** Um conceito está liberado quando todos os pré-requisitos estão ao menos 'partial'. */
export function isUnlocked(c: Concept, progress: Map<string, ConceptProgress>): boolean {
  return c.prereqs.every((p) => RANK[masteryOf(p, progress)] >= RANK.partial)
}

/** Ordem topológica (pré-requisitos antes dos dependentes). */
export function topoOrder(): Concept[] {
  const visited = new Set<string>()
  const out: Concept[] = []
  const visit = (id: string) => {
    if (visited.has(id)) return
    visited.add(id)
    const c = conceptById.get(id)
    if (!c) return
    c.prereqs.forEach(visit)
    out.push(c)
  }
  CONCEPTS.forEach((c) => visit(c.id))
  return out
}

/** Próximos recomendados: liberados e ainda não dominados, em ordem topológica. */
export function recommendedNext(progress: Map<string, ConceptProgress>, limit = 3): Concept[] {
  return topoOrder()
    .filter((c) => isUnlocked(c, progress) && masteryOf(c.id, progress) !== 'mastered')
    .slice(0, limit)
}

export function progressMap(list: ConceptProgress[]): Map<string, ConceptProgress> {
  return new Map(list.map((p) => [p.conceptId, p]))
}

export const AREAS = Array.from(new Set(CONCEPTS.map((c) => c.area)))
