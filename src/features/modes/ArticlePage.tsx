import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { articleAnalysisPrompt } from '../../lib/llm/prompts'
import { useApp } from '../../store/appStore'
import { Card, Button } from '../../components/ui'
import { Markdown } from '../../components/Markdown'

export function ArticlePage() {
  const getProvider = useApp((s) => s.getProvider)
  const [text, setText] = useState('')
  const [out, setOut] = useState('')
  const [busy, setBusy] = useState(false)

  async function analyze() {
    if (!text.trim()) return
    setBusy(true)
    setOut('')
    let acc = ''
    try {
      const { system, messages } = articleAnalysisPrompt(text)
      await getProvider().generate({
        system,
        messages,
        onToken: (d) => {
          acc += d
          setOut(acc)
        },
      })
    } catch (e) {
      setOut(`⚠️ ${e instanceof Error ? e.message : String(e)}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Modo Artigo</h1>
        <p className="text-sm text-muted">
          Cole o texto do artigo. A IA extrai resumo, hipótese, objetivos, métodos, resultados, limitações,
          contribuição, conceitos e críticas — baseando-se só no texto, sem inventar dados. (Upload de PDF chega
          na próxima fase.)
        </p>
      </div>
      <Card className="flex flex-col gap-3">
        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Cole aqui o texto do artigo (introdução, método, resultados…)"
          className="resize-none rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <Button onClick={analyze} disabled={busy || !text.trim()}>
          {busy ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Analisando…
            </>
          ) : (
            'Analisar artigo'
          )}
        </Button>
      </Card>
      {out && (
        <Card>
          <Markdown>{out}</Markdown>
        </Card>
      )}
    </div>
  )
}
