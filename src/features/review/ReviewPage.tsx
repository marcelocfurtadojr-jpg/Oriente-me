import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { Eye } from 'lucide-react'
import { getDue, upsertProgress } from '../../lib/db/repo'
import { getConcept } from '../../lib/knowledge/graph'
import { getLesson } from '../../content/lessons'
import { schedule, masteryFromCard, newCard, type RecallRating } from '../../lib/srs/scheduler'
import { Card, Button, Pill } from '../../components/ui'
import { Markdown } from '../../components/Markdown'

export function ReviewPage() {
  const nav = useNavigate()
  const due = useLiveQuery(() => getDue(Date.now()), [], undefined)
  const [revealed, setRevealed] = useState(false)

  if (due === undefined) return <p className="text-muted">Carregando…</p>
  const queue = due.filter((d) => d.srs)
  if (queue.length === 0)
    return (
      <Card>
        <p className="text-sm">
          Nenhuma revisão pendente agora. Os conceitos voltam automaticamente conforme o esquecimento previsto. 🎉
        </p>
      </Card>
    )

  const item = queue[0]
  const concept = getConcept(item.conceptId)
  if (!concept) return null
  const lesson = getLesson(item.conceptId)

  async function rate(r: RecallRating) {
    const card = item.srs ?? newCard()
    const next = schedule(card, r)
    await upsertProgress({
      ...item,
      srs: next,
      mastery: masteryFromCard(next, r),
      dueTs: next.due.getTime(),
      updatedAt: new Date().toISOString(),
    })
    setRevealed(false)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Revisão</h1>
        <Pill>{queue.length} na fila</Pill>
      </div>
      <Card className="flex flex-col gap-3">
        <div>
          <h2 className="text-lg font-medium">{concept.title}</h2>
          <p className="text-sm text-muted">{concept.area}</p>
        </div>
        <p className="text-sm">Tente recordar: o que é, de onde vem e para que serve. Depois confira.</p>
        {!revealed ? (
          <Button variant="soft" onClick={() => setRevealed(true)}>
            <Eye className="h-4 w-4" /> Mostrar resumo
          </Button>
        ) : (
          <div className="rounded-lg border border-border bg-surface-2 p-3">
            <Markdown>{lesson?.intuicao ?? concept.short}</Markdown>
          </div>
        )}
        <div>
          <p className="mb-2 text-sm text-muted">Como foi sua recordação?</p>
          <div className="flex flex-wrap gap-2">
            <Button variant="soft" onClick={() => rate('again')}>Esqueci</Button>
            <Button variant="soft" onClick={() => rate('hard')}>Difícil</Button>
            <Button variant="soft" onClick={() => rate('good')}>Bem</Button>
            <Button onClick={() => rate('easy')}>Fácil</Button>
          </div>
        </div>
        <button onClick={() => nav(`/licao/${concept.id}`)} className="self-start text-sm text-accent">
          Abrir a fase completa →
        </button>
      </Card>
    </div>
  )
}
