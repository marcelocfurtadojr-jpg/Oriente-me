import { useEffect, useRef, useState } from 'react'
import { Send, Loader2, Square } from 'lucide-react'
import { useApp } from '../../store/appStore'
import { Markdown } from '../../components/Markdown'
import { Button } from '../../components/ui'
import type { LlmMessage } from '../../types'

export function Chat({
  system,
  placeholder = 'Escreva sua resposta…',
  starter,
}: {
  system: string
  placeholder?: string
  /** Se definido, a IA inicia a conversa a partir deste pedido do aluno. */
  starter?: string
}) {
  const getProvider = useApp((s) => s.getProvider)
  const [messages, setMessages] = useState<LlmMessage[]>([])
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState('')
  const [busy, setBusy] = useState(false)
  const abortRef = useRef<AbortController | null>(null)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, streaming])

  async function run(history: LlmMessage[]) {
    setBusy(true)
    setStreaming('')
    const ctrl = new AbortController()
    abortRef.current = ctrl
    let acc = ''
    try {
      await getProvider().generate({
        system,
        messages: history,
        signal: ctrl.signal,
        onToken: (d) => {
          acc += d
          setStreaming(acc)
        },
      })
      setMessages([...history, { role: 'assistant', content: acc }])
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e)
      if (ctrl.signal.aborted) {
        if (acc) setMessages([...history, { role: 'assistant', content: acc }])
      } else {
        setMessages([...history, { role: 'assistant', content: `⚠️ Erro ao gerar: ${msg}` }])
      }
    } finally {
      setBusy(false)
      setStreaming('')
      abortRef.current = null
    }
  }

  async function send() {
    if (!input.trim() || busy) return
    const next: LlmMessage[] = [...messages, { role: 'user', content: input.trim() }]
    setMessages(next)
    setInput('')
    await run(next)
  }

  const canStart = messages.length === 0 && !!starter && !busy

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'max-w-[85%] self-end' : 'w-full max-w-[95%] self-start'}>
            <div
              className={
                m.role === 'user'
                  ? 'rounded-2xl rounded-br-sm border border-accent/30 bg-accent/15 px-3 py-2 text-sm'
                  : 'rounded-2xl rounded-bl-sm border border-border bg-surface px-3 py-2'
              }
            >
              {m.role === 'user' ? <p className="whitespace-pre-wrap">{m.content}</p> : <Markdown>{m.content}</Markdown>}
            </div>
          </div>
        ))}
        {busy && (
          <div className="w-full max-w-[95%] self-start">
            <div className="rounded-2xl rounded-bl-sm border border-border bg-surface px-3 py-2">
              {streaming ? (
                <Markdown>{streaming}</Markdown>
              ) : (
                <span className="flex items-center gap-2 text-sm text-muted">
                  <Loader2 className="h-4 w-4 animate-spin" /> pensando…
                </span>
              )}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {canStart ? (
        <Button onClick={() => run([{ role: 'user', content: starter as string }])}>Começar</Button>
      ) : (
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                void send()
              }
            }}
            placeholder={placeholder}
            rows={2}
            className="flex-1 resize-none rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm outline-none focus:border-accent"
          />
          {busy ? (
            <Button variant="soft" onClick={() => abortRef.current?.abort()}>
              <Square className="h-4 w-4" /> Parar
            </Button>
          ) : (
            <Button onClick={send} disabled={!input.trim()}>
              <Send className="h-4 w-4" /> Enviar
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
