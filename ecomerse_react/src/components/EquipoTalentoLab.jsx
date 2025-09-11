import React from "react";

export function EquipoTalentoLab() {

    const equipo = [
        { nombre: "Silvia", rol: "Producto Owner", imagen: "https://picsum.photos/200" },
        { nombre: "Luis", rol: "Diseñador Ux/UI", imagen: "https://picsum.photos/201" },
        { nombre: "Matias", rol: "Desarrolador", imagen: "https://picsum.photos/202" },
        { nombre: "Sabrina", rol: "Desarrolladora", imagen: "https://picsum.photos/203" },
    ];

  return (
    <>
      <h2 className="subtitulo">Lista de Equipos</h2>
      <ul>
        {equipo.map((miembro, index) => (
            <li key={index}>
                {miembro.nombre} - {miembro.rol} - <img src={miembro.imagen} alt={`Miembro ${index + 1}`} />
            </li>
        ))}
      </ul>
    </>
  );
}
