
import './App.css'
import { MiBoton } from './MiBoton.jsx'
import { Tarjeta } from './Tarjeta.jsx'

function App() {

  return (

    <>  
      
      {/* Para mas de un elemento se usa un fragment.*/}
      <h1 className="titulo">E-commerce App con Vite + React</h1>
      <h2 className="subtitulo">Hola Mundo</h2>
      <MiBoton text="Comprar" color="green"/>
      <MiBoton text="Cancelar" color="red"/>
    
    </>
  )
} export default App

function Subtitulo() {

  return (

    <>
      <h2>Componente reactivo de manera nombrada</h2>
    </>
  )
} export {Subtitulo}

function Button() {

  return (

    <>
      <button onClick={() => alert('Botón presionado!')}>Click</button>
    </>
  )
} export {Button}