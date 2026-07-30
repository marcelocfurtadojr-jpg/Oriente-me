import type { ReactNode } from 'react'
import type { MasteryLevel } from '../types'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-xl border border-border bg-surface p-4 ${className}`}>{children}</div>
}

type Variant = 'primary' | 'soft' | 'ghost'

export function Button({
  children,
  onClick,
  disabled,
  variant = 'primary',
  type = 'button',
  className = '',
}: {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: Variant
  type?: 'button' | 'submit'
  className?: string
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed'
  const styles: Record<Variant, string> = {
    primary: 'bg-accent text-[#0b1020] hover:brightness-110',
    soft: 'bg-surface-2 text-ink border border-border hover:border-accent',
    ghost: 'text-muted hover:text-ink',
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  )
}

const MASTERY_UI: Record<MasteryLevel, { label: string; cls: string }> = {
  unknown: { label: 'Não iniciado', cls: 'bg-surface-2 text-muted border-border' },
  fragile: { label: 'Frágil', cls: 'bg-[#3a1620] text-[#f9a8b4] border-[#5b2230]' },
  partial: { label: 'Parcial', cls: 'bg-[#3a2f12] text-[#fcd34d] border-[#5b4a1f]' },
  mastered: { label: 'Dominado', cls: 'bg-[#12331f] text-[#86efac] border-[#1f5b34]' },
}

export function MasteryBadge({ level }: { level: MasteryLevel }) {
  const m = MASTERY_UI[level]
  return <span className={`inline-block rounded-full border px-2 py-0.5 text-xs ${m.cls}`}>{m.label}</span>
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-border bg-surface-2 px-2 py-0.5 text-xs text-muted">
      {children}
    </span>
  )
}
