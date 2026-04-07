import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TimerProvider } from './context/TimerContext.tsx'
import Topbar from './components/topbar/Topbar.tsx'
import { SecretCodeProvider } from './context/SecretCodeContext.tsx'
import Bottombar from './components/bottombar/Bottombar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TimerProvider>
      <SecretCodeProvider>
        <Topbar />
        <App />
        <Bottombar />
      </SecretCodeProvider>
    </TimerProvider>
  </StrictMode>,
)
