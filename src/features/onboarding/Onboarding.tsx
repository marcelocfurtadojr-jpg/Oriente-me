import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { getProfile, saveProfile } from '../../lib/db/repo'
import { Button, Card } from '../../components/ui'

const FIELDS = [
  { key: 'formacao', label: 'Formação', ph: 'Ex.: Psicologia (graduação); mestrando em Psicologia da Saúde' },
  { key: 'nivel', label: 'Nível atual de conhecimento', ph: 'Ex.: Intermediário em Análise do Comportamento; iniciante em psicometria' },
  { key: 'objetivos', label: 'Objetivos acadêmicos', ph: 'Ex.: Qualificação de mestrado; desenvolver uma escala de QV para HAP' },
  { key: 'temas', label: 'Temas de interesse', ph: 'Ex.: Qualidade de Vida, HAP, economia comportamental' },
  { key: 'autores', label: 'Autores já estudados', ph: 'Ex.: Skinner, Michael, Herrnstein, Baum, Rachlin, Hursh' },
  { key: 'dificuldades', label: 'Dificuldades conceituais', ph: 'Ex.: Diferenciar OM de estímulo discriminativo; lei da igualação generalizada' },
] as const

const PREFILL: Record<string, string> = {
  temas:
    'Qualidade de Vida em Hipertensão Arterial Pulmonar; economia comportamental; operações motivadoras; alocação do comportamento; psicometria e desenvolvimento de instrumentos',
  autores: 'Skinner, Jack Michael, Steven Hursh, Herrnstein, William Baum, Howard Rachlin',
}

export function Onboarding() {
  const nav = useNavigate()
  const [form, setForm] = useState<Record<string, string>>({ ...PREFILL })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    getProfile().then((p) => {
      if (p) {
        setForm({
          formacao: p.formacao,
          nivel: p.nivel,
          objetivos: p.objetivos,
          temas: p.temas,
          autores: p.autores,
          dificuldades: p.dificuldades,
        })
      }
    })
  }, [])

  async function submit() {
    setSaving(true)
    const now = new Date().toISOString()
    const existing = await getProfile()
    await saveProfile({
      id: 'me',
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
      completed: true,
      formacao: form.formacao ?? '',
      nivel: form.nivel ?? '',
      objetivos: form.objetivos ?? '',
      temas: form.temas ?? '',
      autores: form.autores ?? '',
      dificuldades: form.dificuldades ?? '',
    })
    nav('/')
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-4 flex items-center gap-2">
        <BookOpen className="h-6 w-6 text-accent" />
        <h1 className="text-xl font-semibold">Seu perfil (opcional)</h1>
      </div>
      <p className="mb-5 text-sm text-muted">
        Isso só personaliza os modos <b>Orientador</b> e <b>Banca</b> — <b>não é obrigatório</b> para usar a
        trilha. Você pode pular agora e preencher depois em Ajustes.
      </p>
      <Card className="flex flex-col gap-4">
        {FIELDS.map((f) => (
          <label key={f.key} className="flex flex-col gap-1">
            <span className="text-sm font-medium">{f.label}</span>
            <textarea
              rows={2}
              placeholder={f.ph}
              value={form[f.key] ?? ''}
              onChange={(e) => setForm((s) => ({ ...s, [f.key]: e.target.value }))}
              className="resize-none rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </label>
        ))}
        <div className="flex flex-wrap gap-2">
          <Button onClick={submit} disabled={saving}>
            {saving ? 'Salvando…' : 'Salvar e começar'}
          </Button>
          <Button variant="ghost" onClick={() => nav('/')}>
            Pular por enquanto
          </Button>
        </div>
      </Card>
    </div>
  )
}
