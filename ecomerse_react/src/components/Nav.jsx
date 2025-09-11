import React from "react";
import { MiBoton } from "../MiBoton";

function Nav() {
  return (
    <nav style= {{ backgroundColor: "#333", color: "white", padding: "10px" }}>
      <ul style={{ listStyleType: "none", display: "flex", justifyContent: "space-around", margin: 0}}>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Inicio</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Productos</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Acerca de</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
