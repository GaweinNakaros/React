import { useState } from "react";

function Formulario_envio() {
  const [formulario,setFormulario] = useState({ nombre: "", email: "" }); // Estado para almacenar el nombre ingresado

