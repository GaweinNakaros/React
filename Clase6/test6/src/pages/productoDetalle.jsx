import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';


const DetalleProducto = () => {
    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.prod;

    if (!producto) {
        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h2>Producto no encontrado</h2>
                <Link to="/productos">
                    <button style={{
                        padding: "10px 20px",
                        backgroundColor: "#4299e1",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                    }}>
                        Volver a productos
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div style={{ 
            maxWidth: "800px", 
            margin: "20px auto", 
            padding: "20px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            borderRadius: "8px"
        }}>
            <div style={{ display: "flex", gap: "20px", alignItems: "start" }}>
                <img
                    src={producto.imagen ? encodeURI(producto.imagen) : 'https://placehold.co/400x300'}
                    alt={producto.nombre}
                    style={{ 
                        width: "400px",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        backgroundColor: "#f5f5f5"
                    }}
                    onError={(e) => {
                        e.target.src = 'https://placehold.co/400x300';
                    }}
                />
                <div>
                    <h2 style={{ marginTop: 0 }}>{producto.nombre}</h2>
                    <p style={{ fontSize: "1.1em", color: "#666" }}>{producto.descripcion}</p>
                    <p style={{ fontSize: "1.5em", fontWeight: "bold", color: "#2c5282" }}>
                        ${producto.precio}
                    </p>
                    <Link to="/productos">
                        <button style={{
                            padding: "10px 20px",
                            backgroundColor: "#4299e1",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}>
                            Volver a productos
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DetalleProducto;