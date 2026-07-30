import { orientadorSystem } from '../../lib/llm/prompts'
import { useProfile } from '../../lib/hooks'
import { profileSummary } from '../../lib/profile'
import { Chat } from '../chat/Chat'
import { Card } from '../../components/ui'

export function AdvisorPage() {
  const profile = useProfile()
  const sys = orientadorSystem(profileSummary(profile))
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Modo Orientador</h1>
        <p className="text-sm text-muted">
          Um orientador socrático: conduz seu raciocínio com perguntas, desafia e pede integração teórica.
        </p>
      </div>
      <Card>
        <Chat system={sys} placeholder="Traga sua dúvida, ideia ou trecho para discutir…" />
      </Card>
    </div>
  )
}
