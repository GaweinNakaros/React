
import './App.css'
import { ListaEquipos } from './ListaEquipos.jsx';
import { MiBoton } from './MiBoton.jsx'
import { Tarjeta } from './Tarjeta.jsx'


function App() {

   const equipos = [
    { id: 1, nombre: 'Equipo A', descripcion: 'Descripción del Equipo A' },
    { id: 2, nombre: 'Equipo B', descripcion: 'Descripción del Equipo B' },
    { id: 3, nombre: 'Equipo C', descripcion: 'Descripción del Equipo C' },
  ];

  return (

    <>  
      
      {/* Para mas de un elemento se usa un fragment.*/}
      <h1 className="titulo">E-commerce App con Vite + React</h1>
      <h2 className="subtitulo">Hola Mundo</h2>
      <MiBoton text="Comprar" color="green"/>
      <MiBoton text="Cancelar" color="red"/>
      <ListaEquipos equipos={equipos} />
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