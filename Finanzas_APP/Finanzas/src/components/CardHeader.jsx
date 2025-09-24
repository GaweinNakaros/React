
// Encabezado de tarjeta
// Ruta: src/components/CardHeader.jsx
import React from "react";
import "./CardHeader.css";

/**
 * Encabezado de tarjeta para títulos o acciones principales.
 * @param {object} props
 */
const CardHeader = ({ children, ...props }) => (
	<div className="card-header" {...props}>
		{children}
	</div>
);

export default CardHeader;
