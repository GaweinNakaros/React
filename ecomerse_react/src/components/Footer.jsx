import React from "react";


// Es el lugar donde se muestra el pie de página de la página.
// Aquí se puede colocar información como derechos de autor, enlaces a políticas de privacidad, términos de servicio, o cualquier otra información relevante.


function Footer() {
  return (
    <footer style={{ backgroundColor: "#f1f1f1", padding: "10px", textAlign: "center", marginTop: "20px" }}>
      <p style={{ color: "gray" }}>&copy; 2025 Mi Tienda. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
