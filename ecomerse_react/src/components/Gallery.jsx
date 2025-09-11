import React from "react";

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
            <img key={index} src={src} alt={`Imagen ${index + 1}`} />
        ))}
      </section>
    </>
  );
}

export default Gallery;