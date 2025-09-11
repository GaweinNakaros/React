import React from "react";
import { EquipoTalentoLab } from "../components/EquipoTalentoLab.jsx";

// Es el lugar donde se muestra el contenido principal de la página.
// Aqui se colocara inforcaion central, como texto, imagenes, productos, u otros componentes.
// Se puede estilizar con CSS para mejorar su apariencia y adaptarse al diseño general del sitio web.

function Main() {
  return (
    <main style= {{ padding: "20px" }}>
      <h2>Contenido Principal</h2>
      <p>Explora nuestros productos y disfruta de la mejor experiencia de compra.</p>
      <EquipoTalentoLab />
    </main>
  );
}

export default Main;
