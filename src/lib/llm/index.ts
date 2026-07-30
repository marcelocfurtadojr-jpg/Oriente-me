import { OllamaProvider } from './ollama'
import type { LlmProvider } from './provider'

export type ProviderType = 'ollama' // futuro: | 'claude'

export interface LlmSettings {
  provider: ProviderType
  ollamaBaseUrl: string
  model: string
}

export function makeProvider(s: LlmSettings): LlmProvider {
  // Ponto único de troca de motor. Para adicionar Claude:
  //   if (s.provider === 'claude') return new ClaudeProvider(...)
  return new OllamaProvider(s.ollamaBaseUrl, s.model)
}

export type { LlmProvider }
