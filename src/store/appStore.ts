import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { makeProvider, type LlmProvider, type ProviderType } from '../lib/llm'

interface AppState {
  providerType: ProviderType
  ollamaBaseUrl: string
  model: string
  setModel: (m: string) => void
  setBaseUrl: (u: string) => void
  setProviderType: (p: ProviderType) => void
  getProvider: () => LlmProvider
}

export const useApp = create<AppState>()(
  persist(
    (set, get) => ({
      providerType: 'ollama',
      ollamaBaseUrl: 'http://localhost:11434',
      model: 'qwen2.5:3b',
      setModel: (m) => set({ model: m }),
      setBaseUrl: (u) => set({ ollamaBaseUrl: u }),
      setProviderType: (p) => set({ providerType: p }),
      getProvider: () =>
        makeProvider({
          provider: get().providerType,
          ollamaBaseUrl: get().ollamaBaseUrl,
          model: get().model,
        }),
    }),
    {
      name: 'tutor-settings',
      partialize: (s) => ({
        providerType: s.providerType,
        ollamaBaseUrl: s.ollamaBaseUrl,
        model: s.model,
      }),
    },
  ),
)
