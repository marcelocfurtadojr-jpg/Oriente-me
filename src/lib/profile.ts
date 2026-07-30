import type { Profile } from '../types'

export function profileSummary(p: Profile | null | undefined): string {
  if (!p) return 'Aluno de pós-graduação (perfil ainda não preenchido).'
  return [
    p.formacao && `Formação: ${p.formacao}`,
    p.nivel && `Nível: ${p.nivel}`,
    p.objetivos && `Objetivos: ${p.objetivos}`,
    p.temas && `Temas: ${p.temas}`,
    p.autores && `Autores estudados: ${p.autores}`,
    p.dificuldades && `Dificuldades: ${p.dificuldades}`,
  ]
    .filter(Boolean)
    .join('. ')
}
