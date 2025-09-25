import React from "react";

// Las imagenes se generan dinamicamente.
// Se utiliza un array para almacenar las URLs de las imagenes.
// Se usa el metodo map para recorrer el array y renderizar cada imagen dentro de un contenedor <section>.
// El contenedor utiliza Flexbox para alinear las imagenes horizontalmente con espacio entre ellas.
// Cada imagen tiene un tamaño fijo para mantener la uniformidad en la galería.
// Lo que hace al componente flexible y escalable, permitiendo agregar o quitar imagenes facilmente.

function Gallery() {

    const images = [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300"
    ];    

  return (
    <>
      <section style={{display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px"}}>
        {images.map((src, index) => (
            <img key={index} src={src} alt={`Imagen ${index + 1}`} style={{width: "150px", height: "150px" }} />
        ))}
      </section>
    </>
  );
}

export default Gallery;