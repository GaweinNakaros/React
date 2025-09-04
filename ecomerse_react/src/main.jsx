
import { createRoot } from 'react-dom/client'
import './index.css'
import App,{Subtitulo, Button} from './App.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Subtitulo />
    <Button />
  </>
)
