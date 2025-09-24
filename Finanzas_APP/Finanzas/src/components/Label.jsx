
// Etiqueta reutilizable
// Ruta: src/components/Label.jsx
import React from "react";
import "./Label.css";

/**
 * Etiqueta para inputs y áreas de texto.
 * @param {object} props
 */
const Label = ({ children, ...props }) => (
	<label className="label" {...props}>
		{children}
	</label>
);

export default Label;
