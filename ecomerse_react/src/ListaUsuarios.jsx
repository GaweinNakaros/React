
// metodo .map para renderizar una lista de usuarios 
// .map itera sobre un array y retorna un nuevo array con los elementos modificados
// en este caso, cada usuario se renderiza como un <li> con su nombre y correo electrónico  

import React from 'react';

export function ListaUsuarios() {

  const usuarios = [
    { id: 1, nombre: 'Juan', email: 'juan@example.com' },
    { id: 2, nombre: 'Maria', email: 'maria@example.com' },
    { id: 3, nombre: 'Pedro', email: 'pedro@example.com' },
  ];

  return (
    <>
    <div><h2>Lista de Usuarios</h2></div>
      
    <ul>
        {usuarios.map(usuario => (
            <li key={usuario.id}>
                <b>Nombre:</b> {usuario.nombre} <br /> 
                <b>Email:</b> {usuario.email}
            </li>
      ))} 
    </ul>
    </>
  );
}
