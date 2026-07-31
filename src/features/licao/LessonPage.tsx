import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  BookMarked, Check, X, Sparkles, ArrowRight, Lightbulb, FlaskConical, Clock, Network, Stethoscope, Scale,
} from 'lucide-react'
import { getConcept, articleById, masteryOf } from '../../lib/knowledge/graph'
import { getLesson } from '../../content/lessons'
import { getWorldOf } from '../../content/worlds'
import { completeLesson, getNote, saveNote } from '../../lib/db/repo'
import { useProgress } from '../../lib/hooks'
import { masteryFromScore } from '../../lib/game'
import { Card, Button, MasteryBadge, Pill } from '../../components/ui'
import { Markdown } from '../../components/Markdown'
import type { Article } from '../../types'
import type { Lesson } from '../../content/types'

const SECTIONS = [
  { key: 'intuicao', label: 'Intuição', icon: Lightbulb },
  { key: 'tecnico', label: 'Explicação técnica', icon: FlaskConical },
  { key: 'historia', label: 'História', icon: Clock },
  { key: 'relacoes', label: 'Relações', icon: Network },
  { key: 'aplicacoes', label: 'Aplicações e pesquisa', icon: Stethoscope },
  { key: 'criticas', label: 'Críticas e limitações', icon: Scale },
] as const

const MASTERY_LABEL = { unknown: 'Não iniciado', fragile: 'Frágil', partial: 'Parcial', mastered: 'Dominado' }

function Quiz({ lesson, onDone }: { lesson: Lesson; onDone: (correct: number, total: number) => void }) {
  const [i, setI] = useState(0)
  const [sel, setSel] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(0)
  const q = lesson.quiz[i]
  const isLast = i === lesson.quiz.length - 1

  function choose(idx: number) {
    if (answered) return
    setSel(idx)
    setAnswered(true)
    if (idx === q.correct) setCorrect((c) => c + 1)
  }
  function next() {
    if (isLast) return onDone(correct, lesson.quiz.length)
    setI(i + 1)
    setSel(null)
    setAnswered(false)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-xs text-muted">
        <span>Pergunta {i + 1} de {lesson.quiz.length}</span>
        <span>{correct} acerto(s)</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
        <div className="h-full bg-accent" style={{ width: `${((i + (answered ? 1 : 0)) / lesson.quiz.length) * 100}%` }} />
      </div>
      <p className="font-medium">{q.prompt}</p>
      <div className="flex flex-col gap-2">
        {q.options.map((opt, idx) => {
          const isCorrect = idx === q.correct
          const chosen = idx === sel
          let cls = 'border-border bg-surface-2 hover:border-accent'
          if (answered) {
            if (isCorrect) cls = 'border-good/60 bg-good/10'
            else if (chosen) cls = 'border-bad/60 bg-bad/10'
            else cls = 'border-border bg-surface-2 opacity-60'
          }
          return (
            <button
              key={idx}
              onClick={() => choose(idx)}
              disabled={answered}
              className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-sm transition ${cls}`}
            >
              <span>{opt}</span>
              {answered && isCorrect && <Check className="h-4 w-4 shrink-0 text-good" />}
              {answered && chosen && !isCorrect && <X className="h-4 w-4 shrink-0 text-bad" />}
            </button>
          )
        })}
      </div>
      {answered && (
        <Card className="bg-surface-2">
          <p className="text-sm">
            <span className={sel === q.correct ? 'font-medium text-good' : 'font-medium text-warn'}>
              {sel === q.correct ? 'Correto! ' : 'Quase. '}
            </span>
            {q.explanation}
          </p>
        </Card>
      )}
      {answered && (
        <Button onClick={next} className="self-end">
          {isLast ? 'Finalizar' : 'Próxima'} <ArrowRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

function NotesEditor({ conceptId }: { conceptId: string }) {
  const [text, setText] = useState('')
  const [saved, setSaved] = useState(true)
  useEffect(() => {
    getNote(conceptId).then((n) => setText(n?.text ?? ''))
  }, [conceptId])
  async function persist() {
    await saveNote(conceptId, text)
    setSaved(true)
  }
  return (
    <Card className="flex flex-col gap-2">
      <p className="text-sm text-muted">
        Desenvolva o tema com suas palavras: exemplos da sua pesquisa (ex.: HAP), dúvidas, conexões entre autores.
        Fica salvo só no seu navegador.
      </p>
      <textarea
        rows={10}
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          setSaved(false)
        }}
        onBlur={persist}
        className="resize-y rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm outline-none focus:border-accent"
      />
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted">{saved ? 'Salvo ✓' : 'Editando…'}</span>
        <Button variant="soft" onClick={persist}>Salvar</Button>
      </div>
    </Card>
  )
}

export function LessonPage() {
  const { id = '' } = useParams()
  const nav = useNavigate()
  const concept = getConcept(id)
  const lesson = getLesson(id)
  const progress = useProgress()
  const [tab, setTab] = useState<'estudo' | 'referencias' | 'quiz' | 'notas'>('estudo')
  const [result, setResult] = useState<{ correct: number; total: number; xp: number } | null>(null)

  if (!concept)
    return (
      <p>
        Conceito não encontrado. <Link to="/" className="text-accent">Voltar à trilha</Link>
      </p>
    )
  if (!lesson)
    return (
      <Card className="flex items-center gap-2 text-sm text-muted">
        <Sparkles className="h-4 w-4" /> Esta fase ainda não tem conteúdo curado — em breve.
      </Card>
    )

  const world = getWorldOf(id)
  const articles = lesson.articleIds
    .map((a) => articleById.get(a))
    .filter((a): a is Article => Boolean(a))
  const level = masteryOf(id, progress)

  async function finishQuiz(correct: number, total: number) {
    const { gainedXp } = await completeLesson(id, correct, total)
    setResult({ correct, total, xp: gainedXp })
  }

  const tabs = [
    ['estudo', 'Estudo'],
    ['referencias', `Referências (${articles.length})`],
    ['quiz', 'Quiz'],
    ['notas', 'Notas'],
  ] as const

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Link to="/" className="text-sm text-muted hover:text-ink">← Trilha</Link>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <h1 className="text-xl font-semibold">{concept.title}</h1>
          <MasteryBadge level={level} />
        </div>
        <p className="mt-1 text-sm text-muted">{concept.short}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {world && <Pill>{world.title}</Pill>}
          <Pill>{lesson.quiz.length} perguntas · {lesson.quiz.length * 10 + 20} XP</Pill>
        </div>
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-border">
        {tabs.map(([k, lbl]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`shrink-0 px-3 py-2 text-sm ${tab === k ? 'border-b-2 border-accent text-ink' : 'text-muted hover:text-ink'}`}
          >
            {lbl}
          </button>
        ))}
      </div>

      {tab === 'estudo' && (
        <div className="flex flex-col gap-3">
          {SECTIONS.filter((s) => lesson[s.key]).map(({ key, label, icon: Icon }) => (
            <Card key={key}>
              <div className="mb-1 flex items-center gap-2">
                <Icon className="h-4 w-4 text-accent" />
                <h3 className="font-medium">{label}</h3>
              </div>
              <Markdown>{lesson[key] ?? ''}</Markdown>
            </Card>
          ))}
          <Button onClick={() => setTab('quiz')} className="self-start">
            Fazer o quiz <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {tab === 'referencias' && (
        <div className="flex flex-col gap-3">
          {articles.length === 0 ? (
            <p className="text-sm text-muted">Sem artigos fundadores mapeados para esta fase.</p>
          ) : (
            articles.map((a) => (
              <Card key={a.id} className="border-l-4 border-l-accent">
                <div className="flex items-center gap-2">
                  <BookMarked className="h-4 w-4 text-accent" />
                  <span className="font-semibold">{a.authors} ({a.year})</span>
                </div>
                <p className="mt-1 font-medium">{a.title}</p>
                <p className="text-xs text-muted">{a.venue}</p>
                <p className="mt-2 text-sm"><span className="text-muted">Ideia central:</span> {a.keyIdea}</p>
                <p className="mt-1 text-sm"><span className="text-muted">Por que importa:</span> {a.whyFoundational}</p>
              </Card>
            ))
          )}
          {articles.length > 0 && (
            <p className="text-xs text-muted">⚠️ Referências reais e curadas; confira na fonte antes de citar.</p>
          )}
        </div>
      )}

      {tab === 'quiz' &&
        (result ? (
          <Card className="flex flex-col items-center gap-3 text-center">
            <div className="text-4xl">
              {result.correct === result.total ? '🏆' : result.correct / result.total >= 0.6 ? '✅' : '📚'}
            </div>
            <h3 className="text-lg font-semibold">{result.correct} de {result.total} corretas</h3>
            <p className="text-sm text-muted">
              +{result.xp} XP · domínio: <b>{MASTERY_LABEL[masteryFromScore(result.correct / result.total)]}</b>
            </p>
            {result.correct / result.total < 0.6 && (
              <p className="text-sm text-warn">Que tal rever o estudo e tentar de novo para desbloquear a próxima fase?</p>
            )}
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant="soft"
                onClick={() => {
                  setResult(null)
                  setTab('estudo')
                }}
              >
                Rever estudo
              </Button>
              <Button onClick={() => nav('/')}>
                Voltar à trilha <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ) : (
          <Quiz lesson={lesson} onDone={finishQuiz} />
        ))}

      {tab === 'notas' && <NotesEditor conceptId={id} />}
    </div>
  )
}
