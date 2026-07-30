import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './features/home/Home'
import { Onboarding } from './features/onboarding/Onboarding'
import { ConceptPage } from './features/concept/ConceptPage'
import { ReviewPage } from './features/review/ReviewPage'
import { TreePage } from './features/tree/TreePage'
import { AdvisorPage } from './features/modes/AdvisorPage'
import { QualificationPage } from './features/modes/QualificationPage'
import { ArticlePage } from './features/modes/ArticlePage'
import { SettingsPage } from './features/settings/SettingsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/onboarding" element={<Onboarding />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/arvore" element={<TreePage />} />
        <Route path="/conceito/:id" element={<ConceptPage />} />
        <Route path="/revisao" element={<ReviewPage />} />
        <Route path="/orientador" element={<AdvisorPage />} />
        <Route path="/banca" element={<QualificationPage />} />
        <Route path="/artigo" element={<ArticlePage />} />
        <Route path="/ajustes" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}
