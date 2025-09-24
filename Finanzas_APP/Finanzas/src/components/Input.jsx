
// Input reutilizable
// Ruta: src/components/Input.jsx
import React from "react";
import "./Input.css";

/**
 * Input de texto reutilizable.
 * @param {object} props
 */
const Input = (props) => (
	<input className="input" {...props} />
);

export default Input;
