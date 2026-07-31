import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { TrilhaPage } from './features/trilha/TrilhaPage'
import { LessonPage } from './features/licao/LessonPage'
import { BibliotecaPage } from './features/biblioteca/BibliotecaPage'
import { ReviewPage } from './features/review/ReviewPage'
import { AdvisorPage } from './features/modes/AdvisorPage'
import { QualificationPage } from './features/modes/QualificationPage'
import { ArticlePage } from './features/modes/ArticlePage'
import { SettingsPage } from './features/settings/SettingsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TrilhaPage />} />
        <Route path="/licao/:id" element={<LessonPage />} />
        <Route path="/biblioteca" element={<BibliotecaPage />} />
        <Route path="/revisao" element={<ReviewPage />} />
        <Route path="/orientador" element={<AdvisorPage />} />
        <Route path="/banca" element={<QualificationPage />} />
        <Route path="/artigo" element={<ArticlePage />} />
        <Route path="/ajustes" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}
