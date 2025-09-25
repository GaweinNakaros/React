import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EcommerceSimple from './CarritoSimple.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <hr />
    <EcommerceSimple />
  </StrictMode>
)
