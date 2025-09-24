import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // Estilos globales locales (sin Tailwind)
import FinancialTracker from './FinancialTracker'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FinancialTracker />
  </React.StrictMode>,
)
