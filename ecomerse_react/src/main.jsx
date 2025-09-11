
import { createRoot } from 'react-dom/client'
import './index.css' // Importación del archivo CSS global
import { Header } from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import App,{Subtitulo, Button} from './App.jsx'
import { ListaUsuarios } from './ListaUsuarios.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Gallery />
    <App />
    <Subtitulo />
    <Button />
    <ListaUsuarios />
  </>
)
