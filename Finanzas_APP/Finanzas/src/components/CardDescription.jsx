
// Descripción de tarjeta
// Ruta: src/components/CardDescription.jsx
import React from "react";
import "./CardDescription.css";

/**
 * Descripción secundaria para tarjetas.
 * @param {object} props
 */
const CardDescription = ({ children, ...props }) => (
	<p className="card-description" {...props}>
		{children}
	</p>
);

export default CardDescription;
