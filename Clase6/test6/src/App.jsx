import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/navbar'
import Inicio from './pages/inicio'
import Servicios from './pages/servicios'
import Productos from './pages/productos'
import ProductoDetalle from './pages/productoDetalle'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
      </Routes>
    </>
  )
}

export default App
