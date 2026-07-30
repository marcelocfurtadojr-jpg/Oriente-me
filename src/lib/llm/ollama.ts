import type { GenerateOptions, LlmProvider } from './provider'

/** Provider para o Ollama local (http://localhost:11434 por padrão). */
export class OllamaProvider implements LlmProvider {
  id = 'ollama'
  constructor(
    private baseUrl: string,
    private model: string,
  ) {}

  private url(path: string) {
    return `${this.baseUrl.replace(/\/$/, '')}${path}`
  }

  async health(): Promise<boolean> {
    try {
      const r = await fetch(this.url('/api/tags'))
      return r.ok
    } catch {
      return false
    }
  }

  async listModels(): Promise<string[]> {
    const r = await fetch(this.url('/api/tags'))
    if (!r.ok) throw new Error(`Ollama /api/tags respondeu ${r.status}`)
    const data = (await r.json()) as { models?: { name: string }[] }
    return (data.models ?? []).map((m) => m.name)
  }

  async generate(opts: GenerateOptions): Promise<string> {
    if (!this.model) throw new Error('Nenhum modelo selecionado. Configure em Ajustes.')
    const messages = [
      ...(opts.system ? [{ role: 'system', content: opts.system }] : []),
      ...opts.messages,
    ]
    const r = await fetch(this.url('/api/chat'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: this.model,
        messages,
        stream: true,
        options: { temperature: opts.temperature ?? 0.6 },
      }),
      signal: opts.signal,
    })
    if (!r.ok || !r.body) throw new Error(`Ollama /api/chat respondeu ${r.status}`)

    const reader = r.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    let full = ''
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      let idx: number
      while ((idx = buffer.indexOf('\n')) >= 0) {
        const line = buffer.slice(0, idx).trim()
        buffer = buffer.slice(idx + 1)
        if (!line) continue
        try {
          const json = JSON.parse(line) as { message?: { content?: string }; done?: boolean; error?: string }
          if (json.error) throw new Error(json.error)
          const token = json.message?.content ?? ''
          if (token) {
            full += token
            opts.onToken?.(token)
          }
        } catch (e) {
          if (e instanceof SyntaxError) continue // linha JSON parcial
          throw e
        }
      }
    }
    return full
  }
}
