// Select reutilizable
// Ruta: src/components/Select.jsx
// Implementar select nativo o personalizado aquí
// Por ahora, exporta un select nativo
import React from "react";
import "./Select.css";
export default function Select(props) {
  return <select {...props}>{props.children}</select>;
}
