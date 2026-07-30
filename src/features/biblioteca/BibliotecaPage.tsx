import { BookMarked } from 'lucide-react'
import { LIBRARY } from '../../data/library'
import { conceptById } from '../../lib/knowledge/graph'
import { Card } from '../../components/ui'

export function BibliotecaPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Biblioteca</h1>
        <p className="text-sm text-muted">
          Referências fundadoras, curadas e verificadas. A IA nunca inventa citações — tudo aqui é fixo. Ainda
          assim, confira na fonte antes de citar em trabalhos.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {LIBRARY.map((a) => (
          <Card key={a.id} className="border-l-4 border-l-accent">
            <div className="flex items-center gap-2">
              <BookMarked className="h-4 w-4 text-accent" />
              <span className="font-semibold">{a.authors} ({a.year})</span>
            </div>
            <p className="mt-1 font-medium">{a.title}</p>
            <p className="text-xs text-muted">{a.venue}</p>
            <p className="mt-2 text-sm"><span className="text-muted">Ideia central:</span> {a.keyIdea}</p>
            <p className="mt-1 text-sm"><span className="text-muted">Por que é fundadora:</span> {a.whyFoundational}</p>
            {a.relatedConceptIds && a.relatedConceptIds.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {a.relatedConceptIds.map((cid) => (
                  <span
                    key={cid}
                    className="rounded-full border border-border bg-surface-2 px-2 py-0.5 text-xs text-muted"
                  >
                    {conceptById.get(cid)?.title ?? cid}
                  </span>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
