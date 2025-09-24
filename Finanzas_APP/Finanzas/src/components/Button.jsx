
// Componente botón reutilizable
// Ruta: src/components/Button.jsx
import React from "react";
import "./Button.css";

/**
 * Botón reutilizable estilizado.
 * @param {object} props
 */
const Button = ({ children, ...props }) => (
	<button className="btn" {...props}>
		{children}
	</button>
);

export default Button;
