import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { RefreshCw, GraduationCap, Gavel, FileText, ArrowRight } from 'lucide-react'
import { getDue } from '../../lib/db/repo'
import { useProfile, useProgress } from '../../lib/hooks'
import { recommendedNext, masteryOf } from '../../lib/knowledge/graph'
import { Card, Button, MasteryBadge, Pill } from '../../components/ui'

export function Home() {
  const nav = useNavigate()
  const profile = useProfile()
  const progress = useProgress()
  const due = useLiveQuery(() => getDue(Date.now()), [], [])

  useEffect(() => {
    if (profile === null) nav('/onboarding')
  }, [profile, nav])

  if (profile === undefined) return <p className="text-muted">Carregando…</p>
  if (profile === null) return null

  const recs = recommendedNext(progress, 4)
  const dueList = due.filter((d) => d.srs)

  return (
    <div className="flex flex-col gap-6">
      <section>
        <h1 className="text-xl font-semibold">Plano de hoje</h1>
        <p className="text-sm text-muted">Compreender, não decorar. Um conceito de cada vez.</p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <div className="mb-2 flex items-center gap-2">
            <RefreshCw className="h-4 w-4 text-accent" />
            <h2 className="font-medium">Revisões pendentes</h2>
          </div>
          {dueList.length === 0 ? (
            <p className="text-sm text-muted">Nada para revisar agora. 👌</p>
          ) : (
            <>
              <p className="mb-3 text-sm text-muted">{dueList.length} conceito(s) aguardando revisão espaçada.</p>
              <Button onClick={() => nav('/revisao')}>
                Revisar agora <ArrowRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </Card>
        <Card>
          <div className="mb-2 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-accent" />
            <h2 className="font-medium">Modos de estudo</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="soft" onClick={() => nav('/orientador')}>
              <GraduationCap className="h-4 w-4" /> Orientador
            </Button>
            <Button variant="soft" onClick={() => nav('/banca')}>
              <Gavel className="h-4 w-4" /> Banca
            </Button>
            <Button variant="soft" onClick={() => nav('/artigo')}>
              <FileText className="h-4 w-4" /> Artigo
            </Button>
          </div>
        </Card>
      </div>

      <section>
        <h2 className="mb-3 font-medium">Recomendados para você</h2>
        <div className="flex flex-col gap-3">
          {recs.map((c) => (
            <Link key={c.id} to={`/conceito/${c.id}`}>
              <Card className="transition hover:border-accent">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">{c.title}</span>
                      <MasteryBadge level={masteryOf(c.id, progress)} />
                    </div>
                    <p className="mt-1 text-sm text-muted">{c.short}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      <Pill>{c.area}</Pill>
                      {c.prereqs.length > 0 && <Pill>{c.prereqs.length} pré-requisito(s)</Pill>}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
