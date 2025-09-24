
// Contenido de tarjeta
// Ruta: src/components/CardContent.jsx
import React from "react";
import "./CardContent.css";

/**
 * Área de contenido principal dentro de una tarjeta.
 * @param {object} props
 */
const CardContent = ({ children, ...props }) => (
	<div className="card-content" {...props}>
		{children}
	</div>
);

export default CardContent;
