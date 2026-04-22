import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './app/App.tsx'
import { TimerProvider } from './context/TimerContext.tsx'
import { SecretCodeProvider } from './context/SecretCodeContext.tsx'
import Success from './app/Success.tsx'
import { ToastProvider } from './lib/Toast.tsx'
import Home from './app/Home.tsx'
import FailurePage from './app/Fauilure.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <TimerProvider>
          <SecretCodeProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/app" element={<App />} />
              <Route path="/success" element={<Success/>} />
              <Route path="/failure" element={<FailurePage />} />
            </Routes>
          </SecretCodeProvider>
        </TimerProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
)
