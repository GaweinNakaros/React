
// Título de tarjeta
// Ruta: src/components/CardTitle.jsx
import React from "react";
import "./CardTitle.css";

/**
 * Título destacado para tarjetas.
 * @param {object} props
 */
const CardTitle = ({ children, ...props }) => (
	<h2 className="card-title" {...props}>
		{children}
	</h2>
);

export default CardTitle;
