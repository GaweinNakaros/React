import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setContador((contador) => contador + 1)}>Sumar</button>
        <button onClick={() => setContador((contador) => contador - 1)}>Restar</button>
      </div>
      <div>Total: {contador}</div>
      <hr />
      <button onClick={() => setContador(0)}>Borrar</button>
    </>
  )
}export default App
  