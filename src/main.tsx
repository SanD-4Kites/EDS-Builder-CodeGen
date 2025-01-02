import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BuilderPage from './builder-page.tsx'
import {ButtonCounter} from './components/buttonCounter/ButtonCounter.tsx'
import FigmaBuilderPage from './components/figma-imports.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/builder-demo" element={<BuilderPage />} />
        <Route path="/figma-imports" element={<FigmaBuilderPage />} />
        <Route path="/demo" element={<ButtonCounter />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
