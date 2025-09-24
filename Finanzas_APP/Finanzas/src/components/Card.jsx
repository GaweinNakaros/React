
// Componente tarjeta contenedora
// Ruta: src/components/Card.jsx
import React from "react";
import "./Card.css";

/**
 * Componente contenedor de tarjeta para agrupar contenido visualmente.
 * @param {object} props
 */
const Card = ({ children, ...props }) => (
	<div className="card" {...props}>
		{children}
	</div>
);

export default Card;
