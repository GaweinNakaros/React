
import './App.css'
import  Header from './components/Header.jsx';
import  Nav  from './components/Nav.jsx';
import  Main  from './components/Main.jsx';
import  Gallery  from './components/Gallery.jsx';
import  Footer  from './components/Footer.jsx';
import { ListaEquipos } from './ListaEquipos.jsx';
import { MiBoton } from './MiBoton.jsx'


function App() {

  return (

    <div> 
      <Header />
      <Nav />
      <Main />
      <Gallery />
      <Footer />
    </div> 
  )
} export default App

function Subtitulo() {

   const equipos = [
    { id: 1, nombre: 'Equipo A', descripcion: 'Descripción del Equipo A' },
    { id: 2, nombre: 'Equipo B', descripcion: 'Descripción del Equipo B' },
    { id: 3, nombre: 'Equipo C', descripcion: 'Descripción del Equipo C' },
  ];

  return (

    <>
      <h1 className="titulo">E-commerce App con Vite + React</h1>
      <h2 className="subtitulo">Componente reactivo de manera nombrada</h2>
      <MiBoton text="Comprar" color="green"/>
      <MiBoton text="Cancelar" color="red"/>
      <ListaEquipos equipos={equipos} />
    </>
  )
} export {Subtitulo}

function Button() {

  return (

    <>
      {/* Para mas de un elemento se usa un fragment.*/}
      <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => alert('Botón presionado!')}>Click</button>
    </>
  )
} export {Button}