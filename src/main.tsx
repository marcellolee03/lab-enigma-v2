import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.tsx'
import { TimerProvider } from './context/TimerContext.tsx'
import { SecretCodeProvider } from './context/SecretCodeContext.tsx'
import Success from './Success.tsx'
import { ToastProvider } from './lib/Toast.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <TimerProvider>
          <SecretCodeProvider>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/success" element={<Success/>} />
            </Routes>
          </SecretCodeProvider>
        </TimerProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
)
