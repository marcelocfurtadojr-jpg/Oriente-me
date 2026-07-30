import type { LlmMessage } from '../../types'

export interface GenerateOptions {
  system?: string
  messages: LlmMessage[]
  temperature?: number
  signal?: AbortSignal
  /** Chamado a cada fragmento de texto recebido (streaming). */
  onToken?: (delta: string) => void
}

/** Interface comum a qualquer motor de IA (Ollama hoje; Claude/OpenAI no futuro). */
export interface LlmProvider {
  id: string
  health(): Promise<boolean>
  listModels(): Promise<string[]>
  generate(opts: GenerateOptions): Promise<string>
}
