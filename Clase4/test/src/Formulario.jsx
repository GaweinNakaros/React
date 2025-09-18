import { useState } from "react";

export function Formulario() {
  const [nombre, setNombre] = useState(""); // Estado para almacenar el nombre ingresado

  // Función para manejar el cambio en el campo de entrada

const manejarCambio = (evento) => {
    setNombre(evento.target.value); // Actualiza el estado con el valor ingresado
  }
  
  return (
    <div>
      <>
        Nombre: <input type="text" value={nombre} onChange={manejarCambio} placeholder="Ingrese su nombre " />
        <p>Hola, {nombre || "invitado"}!</p>
      </>
    </div>
  );
}
