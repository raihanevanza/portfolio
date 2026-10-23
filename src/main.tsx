import { ThemeProvider } from '@rupa-ui/react'
import '@rupa-ui/react/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultBrand="mono" defaultMode="system" storageKey="theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
