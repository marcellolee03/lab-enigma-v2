import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TimerProvider } from './context/TimerContext.tsx'
import Topbar from './components/topbar/Topbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TimerProvider>
      <Topbar />
      <App />
    </TimerProvider>
  </StrictMode>,
)
