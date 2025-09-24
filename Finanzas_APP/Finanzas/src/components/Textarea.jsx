
// Área de texto reutilizable
// Ruta: src/components/Textarea.jsx
import React from "react";
import "./Textarea.css";

/**
 * Área de texto multi-línea reutilizable.
 * @param {object} props
 */
const Textarea = (props) => (
	<textarea className="input" {...props} />
);

export default Textarea;
