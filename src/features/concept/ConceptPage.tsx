import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Loader2, RotateCcw, BookMarked, Lock } from 'lucide-react'
import { getConcept, prereqTitles, conceptArticles, masteryOf } from '../../lib/knowledge/graph'
import { BLOCK_LABELS, blockPrompt, discussionSystem, type BlockKey } from '../../lib/llm/prompts'
import { useApp } from '../../store/appStore'
import { cacheGet, cacheSet, getProgress, upsertProgress } from '../../lib/db/repo'
import { newCard, schedule, masteryFromCard, type RecallRating } from '../../lib/srs/scheduler'
import { useProgress } from '../../lib/hooks'
import { Card, Button, MasteryBadge, Pill } from '../../components/ui'
import { Markdown } from '../../components/Markdown'
import { Chat } from '../chat/Chat'

const BLOCKS: BlockKey[] = ['intuitivo', 'tecnico', 'historia', 'relacoes', 'exercicios']

function GenBlock({ conceptId, block }: { conceptId: string; block: BlockKey }) {
  const getProvider = useApp((s) => s.getProvider)
  const model = useApp((s) => s.model)
  const [text, setText] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const key = `${conceptId}:${block}:${model}`

  useEffect(() => {
    let alive = true
    setText(null)
    cacheGet(key).then((c) => {
      if (alive && c) setText(c.content)
    })
    return () => {
      alive = false
    }
  }, [key])

  async function gen() {
    const c = getConcept(conceptId)
    if (!c) return
    setBusy(true)
    setErr('')
    setText('')
    let acc = ''
    try {
      const { system, messages } = blockPrompt(block, c, prereqTitles(c), conceptArticles(c))
      await getProvider().generate({
        system,
        messages,
        onToken: (d) => {
          acc += d
          setText(acc)
        },
      })
      await cacheSet({ key, conceptId, block, model, content: acc })
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e))
    } finally {
      setBusy(false)
    }
  }

  return (
    <Card>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-medium">{BLOCK_LABELS[block]}</h3>
        {text !== null && !busy && (
          <Button variant="ghost" onClick={gen}>
            <RotateCcw className="h-3.5 w-3.5" /> Regerar
          </Button>
        )}
      </div>
      {err && <p className="mb-2 text-sm text-bad">⚠️ {err}</p>}
      {text === null ? (
        <Button variant="soft" onClick={gen} disabled={busy}>
          Gerar {BLOCK_LABELS[block].toLowerCase()}
        </Button>
      ) : text === '' && busy ? (
        <span className="flex items-center gap-2 text-sm text-muted">
          <Loader2 className="h-4 w-4 animate-spin" /> gerando…
        </span>
      ) : (
        <Markdown>{text}</Markdown>
      )}
    </Card>
  )
}

export function ConceptPage() {
  const { id = '' } = useParams()
  const concept = getConcept(id)
  const progress = useProgress()
  const [tab, setTab] = useState<'estudo' | 'artigos' | 'discussao'>('estudo')

  if (!concept)
    return (
      <p>
        Conceito não encontrado.{' '}
        <Link className="text-accent" to="/arvore">
          Voltar à árvore
        </Link>
      </p>
    )

  const articles = conceptArticles(concept)
  const level = masteryOf(concept.id, progress)
  const lockedPrereqs = concept.prereqs.filter((p) => {
    const m = progress.get(p)?.mastery ?? 'unknown'
    return m === 'unknown' || m === 'fragile'
  })

  async function setMastery(rating: RecallRating) {
    if (!concept) return
    const existing = await getProgress(concept.id)
    const card = existing?.srs ?? newCard()
    const nextCard = schedule(card, rating)
    await upsertProgress({
      conceptId: concept.id,
      mastery: masteryFromCard(nextCard, rating),
      srs: nextCard,
      dueTs: nextCard.due.getTime(),
      seenAt: existing?.seenAt ?? new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
  }

  const tabs = [
    ['estudo', 'Estudo'],
    ['artigos', `Artigos (${articles.length})`],
    ['discussao', 'Discussão'],
  ] as const

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Link to="/arvore" className="text-sm text-muted hover:text-ink">
          ← Árvore do conhecimento
        </Link>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <h1 className="text-xl font-semibold">{concept.title}</h1>
          <MasteryBadge level={level} />
        </div>
        <p className="mt-1 text-sm text-muted">{concept.short}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          <Pill>{concept.area}</Pill>
          {prereqTitles(concept).map((t) => (
            <Pill key={t}>pré: {t}</Pill>
          ))}
        </div>
      </div>

      {lockedPrereqs.length > 0 && (
        <Card className="border-warn/40 bg-warn/5">
          <div className="flex items-start gap-2 text-sm">
            <Lock className="mt-0.5 h-4 w-4 shrink-0 text-warn" />
            <div>
              Este conceito tem pré-requisitos ainda frágeis. Recomendo firmá-los antes:
              <div className="mt-1 flex flex-wrap gap-2">
                {lockedPrereqs.map((p) => (
                  <Link key={p} to={`/conceito/${p}`} className="text-accent underline">
                    {getConcept(p)?.title ?? p}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}

      <div className="flex gap-1 border-b border-border">
        {tabs.map(([k, lbl]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`px-3 py-2 text-sm ${
              tab === k ? 'border-b-2 border-accent text-ink' : 'text-muted hover:text-ink'
            }`}
          >
            {lbl}
          </button>
        ))}
      </div>

      {tab === 'estudo' && (
        <div className="flex flex-col gap-3">
          {BLOCKS.map((b) => (
            <GenBlock key={b} conceptId={concept.id} block={b} />
          ))}
          <Card>
            <h3 className="mb-1 font-medium">Como está seu domínio deste conceito?</h3>
            <p className="mb-3 text-sm text-muted">
              Isso agenda a revisão espaçada (FSRS) e atualiza seu mapa de domínio.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="soft" onClick={() => setMastery('again')}>
                Ainda não entendi
              </Button>
              <Button variant="soft" onClick={() => setMastery('hard')}>
                Difícil
              </Button>
              <Button variant="soft" onClick={() => setMastery('good')}>
                Entendi
              </Button>
              <Button onClick={() => setMastery('easy')}>Domino</Button>
            </div>
          </Card>
        </div>
      )}

      {tab === 'artigos' && (
        <div className="flex flex-col gap-3">
          {articles.length === 0 ? (
            <p className="text-sm text-muted">
              Sem artigos fundadores mapeados para este conceito. (Não geramos referências automaticamente,
              para evitar citações inventadas.)
            </p>
          ) : (
            articles.map((a) => (
              <Card key={a.id}>
                <div className="flex items-center gap-2">
                  <BookMarked className="h-4 w-4 text-accent" />
                  <span className="font-medium">
                    {a.authors} ({a.year})
                  </span>
                </div>
                <p className="mt-1">
                  {a.title}. <span className="text-muted">{a.venue}</span>
                </p>
                <p className="mt-2 text-sm">
                  <span className="text-muted">Ideia central:</span> {a.keyIdea}
                </p>
                <p className="mt-1 text-sm">
                  <span className="text-muted">Por que é fundadora:</span> {a.whyFoundational}
                </p>
              </Card>
            ))
          )}
          {articles.length > 0 && (
            <p className="text-xs text-muted">⚠️ Referências curadas e verificadas, mas confira na fonte antes de citar.</p>
          )}
        </div>
      )}

      {tab === 'discussao' && (
        <Card>
          <p className="mb-3 text-sm text-muted">
            Discussão socrática: o tutor conduz por perguntas — não entrega a resposta pronta.
          </p>
          <Chat
            system={discussionSystem(concept, prereqTitles(concept), articles)}
            starter={`Quero discutir "${concept.title}". Faça a primeira pergunta para testar minha compreensão.`}
            placeholder="Responda ao tutor…"
          />
        </Card>
      )}
    </div>
  )
}
