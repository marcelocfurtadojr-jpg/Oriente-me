import { useEffect, useState } from 'react'
import { Check, X, Loader2, RefreshCw } from 'lucide-react'
import { useApp } from '../../store/appStore'
import { resetAll } from '../../lib/db/repo'
import { Card, Button } from '../../components/ui'

export function SettingsPage() {
  const { ollamaBaseUrl, model, setBaseUrl, setModel, getProvider } = useApp()
  const [url, setUrl] = useState(ollamaBaseUrl)
  const [models, setModels] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'testing' | 'ok' | 'fail'>('idle')

  async function test() {
    setStatus('testing')
    setBaseUrl(url)
    try {
      const list = await getProvider().listModels()
      setModels(list)
      setStatus('ok')
      if (list.length && !list.includes(model)) setModel(list[0])
    } catch {
      setStatus('fail')
    }
  }

  useEffect(() => {
    void test()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex max-w-2xl flex-col gap-4">
      <h1 className="text-xl font-semibold">Ajustes</h1>

      <Card className="flex flex-col gap-3">
        <h2 className="font-medium">Motor de IA (Ollama)</h2>
        <label className="text-sm">URL do servidor Ollama</label>
        <div className="flex gap-2">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm outline-none focus:border-accent"
          />
          <Button variant="soft" onClick={test}>
            {status === 'testing' ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            Testar
          </Button>
        </div>
        <div className="text-sm">
          {status === 'ok' && (
            <span className="flex items-center gap-1 text-good">
              <Check className="h-4 w-4" /> Conectado
            </span>
          )}
          {status === 'fail' && (
            <span className="flex items-center gap-1 text-bad">
              <X className="h-4 w-4" /> Não foi possível conectar. O Ollama está rodando?
            </span>
          )}
        </div>
        <label className="text-sm">Modelo</label>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm outline-none focus:border-accent"
        >
          {(models.length ? models : [model]).filter(Boolean).map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <p className="text-xs text-muted">
          No seu hardware, modelos pequenos (ex.: qwen2.5:3b) respondem mais rápido. Baixe outros com{' '}
          <code>ollama pull &lt;modelo&gt;</code>.
        </p>
      </Card>

      <Card className="flex flex-col gap-2">
        <h2 className="font-medium">Usar no celular</h2>
        <p className="text-sm text-muted">
          Na mesma Wi-Fi: acesse o PC pelo IP (ex.: http://192.168.0.10:5173) e aponte a URL do Ollama para
          http://SEU-IP:11434. Inicie o Ollama com <code>OLLAMA_HOST=0.0.0.0</code> e <code>OLLAMA_ORIGINS=*</code>{' '}
          para aceitar conexões da rede.
        </p>
      </Card>

      <Card className="flex flex-col gap-2">
        <h2 className="font-medium">Dados</h2>
        <p className="text-sm text-muted">Seu progresso fica só neste navegador (local-first).</p>
        <Button
          variant="soft"
          onClick={async () => {
            if (confirm('Apagar todo o progresso e conteúdo em cache?')) {
              await resetAll()
              location.reload()
            }
          }}
        >
          Apagar todos os dados
        </Button>
      </Card>
    </div>
  )
}
