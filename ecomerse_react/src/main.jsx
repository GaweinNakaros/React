
import { createRoot } from 'react-dom/client'
import './index.css' // Importación del archivo CSS global

import App,{Subtitulo, Button} from './App.jsx'
import { ListaUsuarios } from './ListaUsuarios.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Subtitulo />
    <Button />
    <ListaUsuarios />
  </>
)
