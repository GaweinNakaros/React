import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Formulario } from './Formulario.jsx'
import Formulario_envio from './Formulario_envio.jsx'
import Mouse_detect from './Mouse_detect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Formulario />
    <Mouse_detect />
    <Formulario_envio />
  </StrictMode>,
)
