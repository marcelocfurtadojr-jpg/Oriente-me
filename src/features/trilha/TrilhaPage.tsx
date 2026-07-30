import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Lock, CheckCircle2, Sparkles } from 'lucide-react'
import { WORLDS } from '../../content/worlds'
import { hasLesson } from '../../content/lessons'
import { conceptById, isUnlocked, masteryOf } from '../../lib/knowledge/graph'
import { useProfile, useProgress } from '../../lib/hooks'
import { GameBar } from '../game/GameBar'
import { Card, MasteryBadge } from '../../components/ui'

export function TrilhaPage() {
  const nav = useNavigate()
  const profile = useProfile()
  const progress = useProgress()

  useEffect(() => {
    if (profile === null) nav('/onboarding')
  }, [profile, nav])

  if (profile === undefined) return <p className="text-muted">Carregando…</p>
  if (profile === null) return null

  return (
    <div className="flex flex-col gap-6">
      <GameBar />
      {WORLDS.map((world, wi) => (
        <section key={world.id}>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
              {wi + 1}
            </span>
            <div>
              <h2 className="font-semibold leading-tight">{world.title}</h2>
              <p className="text-xs text-muted">{world.subtitle}</p>
            </div>
          </div>

          {world.status === 'soon' ? (
            <Card className="flex items-center gap-2 text-sm text-muted">
              <Sparkles className="h-4 w-4" /> Em breve — conteúdo curado em produção.
            </Card>
          ) : (
            <div className="flex flex-col gap-2">
              {world.conceptIds.map((cid, i) => {
                const c = conceptById.get(cid)
                if (!c) return null
                const unlocked = isUnlocked(c, progress) && hasLesson(cid)
                const prog = progress.get(cid)
                const done = prog?.lessonDone
                const node = (
                  <div
                    className={`flex items-center gap-3 rounded-xl border px-3 py-3 ${
                      unlocked ? 'border-border bg-surface' : 'border-border/60 bg-surface/40'
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        done
                          ? 'bg-good/20 text-good'
                          : unlocked
                            ? 'bg-accent/20 text-accent'
                            : 'bg-surface-2 text-muted'
                      }`}
                    >
                      {!unlocked ? (
                        <Lock className="h-4 w-4" />
                      ) : done ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <span className="text-sm font-bold">{i + 1}</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-medium">{c.title}</div>
                      <div className="truncate text-xs text-muted">{c.short}</div>
                    </div>
                    {prog && <MasteryBadge level={masteryOf(cid, progress)} />}
                  </div>
                )
                return unlocked ? (
                  <Link key={cid} to={`/licao/${cid}`} className="transition hover:brightness-110">
                    {node}
                  </Link>
                ) : (
                  <div key={cid} title="Conclua a fase anterior para desbloquear">
                    {node}
                  </div>
                )
              })}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
