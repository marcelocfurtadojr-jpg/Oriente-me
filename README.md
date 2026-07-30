# Tutor de Pesquisa

Tutor inteligente e adaptativo para pós-graduação — foco em **domínio conceitual profundo** (não memorização),
inspirado em Duolingo, Brilliant, Anki e Khan Academy, mas voltado a pesquisadores.

Domínio inicial semeado: **Análise do Comportamento → Psicologia da Saúde** (Skinner, Michael, Herrnstein,
Baum, Rachlin, Hursh; operações motivadoras, lei da igualação, economia comportamental, qualidade de vida,
psicometria e desenvolvimento de instrumentos).

## Stack

- **PWA web** (React 18 + TypeScript + Vite + Tailwind v4) — roda no navegador do PC e do celular.
- **Dados local-first** no navegador (IndexedDB via Dexie).
- **Repetição espaçada** com o algoritmo **FSRS** (`ts-fsrs`).
- **Motor de IA plugável** — atualmente **Ollama** (modelo local). O provider é abstrato, então dá para
  adicionar um provider da API do Claude depois sem reescrever o app.

## Pré-requisitos

- Node.js LTS (já instalado)
- [Ollama](https://ollama.com) rodando localmente com pelo menos um modelo baixado, por exemplo:
  ```bash
  ollama pull qwen2.5:3b
  ```

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado (por padrão http://localhost:5173).

### Usar no celular (mesma Wi-Fi)

1. Descubra o IP do PC na rede (ex.: `192.168.0.10`).
2. No celular, acesse `http://192.168.0.10:5173`.
3. Em **Ajustes**, aponte a URL do Ollama para `http://192.168.0.10:11434`.
4. Libere o CORS/host do Ollama iniciando-o com a variável:
   `OLLAMA_ORIGINS=*` (e `OLLAMA_HOST=0.0.0.0` para aceitar conexões da rede).

> ⚠️ As referências bibliográficas da biblioteca-semente são curadas, mas **confira sempre na fonte**
> antes de citar em trabalhos acadêmicos. A IA é instruída a **nunca inventar** referências.
