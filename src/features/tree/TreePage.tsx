import { Link } from 'react-router-dom'
import { Lock } from 'lucide-react'
import { topoOrder, isUnlocked, masteryOf, AREAS } from '../../lib/knowledge/graph'
import { useProgress } from '../../lib/hooks'
import { MasteryBadge } from '../../components/ui'

export function TreePage() {
  const progress = useProgress()
  const ordered = topoOrder()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold">Árvore do conhecimento</h1>
        <p className="text-sm text-muted">
          Dos fundamentos à sua pesquisa. Um conceito libera quando os pré-requisitos ficam ao menos parciais.
        </p>
      </div>
      {AREAS.map((area) => (
        <section key={area}>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">{area}</h2>
          <div className="flex flex-col gap-2">
            {ordered
              .filter((c) => c.area === area)
              .map((c) => {
                const unlocked = isUnlocked(c, progress)
                return (
                  <Link
                    key={c.id}
                    to={`/conceito/${c.id}`}
                    className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2 transition ${
                      unlocked ? 'border-border bg-surface hover:border-accent' : 'border-border/60 bg-surface/40'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {!unlocked && <Lock className="h-3.5 w-3.5 shrink-0 text-muted" />}
                      <div>
                        <div className="text-sm font-medium">{c.title}</div>
                        <div className="text-xs text-muted">{c.short}</div>
                      </div>
                    </div>
                    <MasteryBadge level={masteryOf(c.id, progress)} />
                  </Link>
                )
              })}
          </div>
        </section>
      ))}
    </div>
  )
}
