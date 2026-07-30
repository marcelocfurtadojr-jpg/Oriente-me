import { useState } from 'react'
import { bancaSystem } from '../../lib/llm/prompts'
import { useProfile } from '../../lib/hooks'
import { profileSummary } from '../../lib/profile'
import { Chat } from '../chat/Chat'
import { Card, Button } from '../../components/ui'

export function QualificationPage() {
  const profile = useProfile()
  const [topic, setTopic] = useState('')
  const [started, setStarted] = useState(false)

  if (!started) {
    return (
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-xl font-semibold">Modo Qualificação (Banca)</h1>
          <p className="text-sm text-muted">
            Uma banca simulada e rigorosa faz perguntas difíceis, relaciona autores e exige integração teórica.
          </p>
        </div>
        <Card className="flex flex-col gap-3">
          <label className="text-sm font-medium">Tema da qualificação</label>
          <textarea
            rows={3}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Ex.: Qualidade de vida em HAP analisada pela economia comportamental e operações motivadoras"
            className="resize-none rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm outline-none focus:border-accent"
          />
          <Button onClick={() => setStarted(true)} disabled={!topic.trim()}>
            Iniciar arguição
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Banca — {topic}</h1>
      <Card>
        <Chat
          system={bancaSystem(topic, profileSummary(profile))}
          starter="Estou pronto. Podem iniciar a arguição."
          placeholder="Responda à banca…"
        />
      </Card>
    </div>
  )
}
