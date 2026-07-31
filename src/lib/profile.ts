import type { Profile } from '../types'

export function profileSummary(p: Profile | null | undefined): string {
  if (!p)
    return 'Aluno de pós-graduação em Análise do Comportamento aplicada à Psicologia da Saúde, pesquisando Qualidade de Vida em Hipertensão Arterial Pulmonar (HAP).'
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
