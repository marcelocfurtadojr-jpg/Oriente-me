import { Flame, Trophy } from 'lucide-react'
import { useGame } from '../../lib/hooks'
import { levelFromXp, xpIntoLevel, XP_PER_LEVEL } from '../../lib/game'

export function GameBar() {
  const game = useGame()
  const level = levelFromXp(game.xp)
  const into = xpIntoLevel(game.xp)
  const pct = Math.round((into / XP_PER_LEVEL) * 100)
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-3">
      <div className="flex items-center gap-1.5" title="Nível">
        <Trophy className="h-5 w-5 text-accent" />
        <span className="font-semibold">Nível {level}</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex justify-between text-xs text-muted">
          <span>{game.xp} XP</span>
          <span>{into}/{XP_PER_LEVEL}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
          <div className="h-full rounded-full bg-accent" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="flex items-center gap-1.5" title="Ofensiva (dias seguidos)">
        <Flame className={`h-5 w-5 ${game.streakDays > 0 ? 'text-[#fb923c]' : 'text-muted'}`} />
        <span className="font-semibold">{game.streakDays}</span>
      </div>
    </div>
  )
}
