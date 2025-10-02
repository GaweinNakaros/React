import React from "react";
import { Link } from "react-router-dom";

function Servicios() {
  return (
    <div>
      <h1>Servicios</h1>
      <hr />
      <p>Estos son nuestros servicios.</p>
      <Link to="/"><button>Volver a Inicio</button></Link>
    </div>
  );
}

export default Servicios;
