import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { BookOpen, GitBranch, RefreshCw, GraduationCap, Gavel, FileText, Settings, Home } from 'lucide-react'
import { useApp } from '../store/appStore'

const NAV = [
  { to: '/', label: 'Início', icon: Home, end: true },
  { to: '/arvore', label: 'Árvore', icon: GitBranch },
  { to: '/revisao', label: 'Revisão', icon: RefreshCw },
  { to: '/orientador', label: 'Orientador', icon: GraduationCap },
  { to: '/banca', label: 'Banca', icon: Gavel },
  { to: '/artigo', label: 'Artigo', icon: FileText },
  { to: '/ajustes', label: 'Ajustes', icon: Settings },
]

function ConnDot() {
  const getProvider = useApp((s) => s.getProvider)
  const model = useApp((s) => s.model)
  const [ok, setOk] = useState<boolean | null>(null)
  useEffect(() => {
    let alive = true
    getProvider()
      .health()
      .then((h) => alive && setOk(h))
      .catch(() => alive && setOk(false))
    return () => {
      alive = false
    }
  }, [getProvider, model])
  const color = ok === null ? 'bg-muted' : ok ? 'bg-good' : 'bg-bad'
  return (
    <div className="flex items-center gap-2 text-xs text-muted">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {ok === null ? 'verificando…' : ok ? model || 'sem modelo' : 'IA offline'}
    </div>
  )
}

export function Layout() {
  return (
    <div className="mx-auto flex min-h-full max-w-5xl flex-col">
      <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-accent" />
          <span className="font-semibold">Tutor de Pesquisa</span>
        </div>
        <ConnDot />
      </header>
      <nav className="flex gap-1 overflow-x-auto border-b border-border px-2 py-2">
        {NAV.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm ${
                isActive ? 'bg-accent text-[#0b1020] font-medium' : 'text-muted hover:bg-surface hover:text-ink'
              }`
            }
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>
      <main className="flex-1 px-4 py-5">
        <Outlet />
      </main>
    </div>
  )
}
