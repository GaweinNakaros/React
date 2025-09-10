import React from "react";

export function ListaEquipos({equipos}) {

 
  return (
    <>
      <h2>Lista de Equipos</h2>
      <ul>
        {equipos.map(equipo => (
            <li key={equipo.id}>
                {equipo.nombre} - {equipo.descripcion}
            </li>
        ))}
      </ul>
    </>
  );
}
