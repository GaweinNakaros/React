import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Productos() {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL =  " https://68d482fa214be68f8c696bbd.mockapi.io/api/productos ";
    
    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                setError("Error al cargar los productos");
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ marginBottom: "20px" }}>Nuestros Productos</h2>
            <div style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: "20px",
                justifyContent: "center"
            }}>
                {productos.map((prod) => (
                    <div
                        key={prod.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "16px",
                            width: "250px",
                            backgroundColor: "white",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        }}
                    >
                        <img
                            src={prod.imagen}
                            alt={prod.nombre}
                            style={{ 
                                width: "100%",
                                height: "150px",
                                objectFit: "cover",
                                borderRadius: "4px",
                                marginBottom: "12px"
                            }}
                        />
                        <h3 style={{ margin: "0 0 8px 0" }}>{prod.nombre}</h3>
                        <p style={{ 
                            color: "#666",
                            fontSize: "0.9em",
                            marginBottom: "12px"
                        }}>
                            {prod.descripcion}
                        </p>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "12px"
                        }}>
                            <span style={{ 
                                fontWeight: "bold",
                                fontSize: "1.2em",
                                color: "#2d3748"
                            }}>
                                ${prod.precio.toFixed(2)}
                            </span>
                            <span style={{
                                color: prod.stock > 0 ? "green" : "red",
                                fontSize: "0.9em"
                            }}>
                                {prod.stock > 0 ? `Stock: ${prod.stock}` : "Sin stock"}
                            </span>
                        </div>
                        <Link 
                            to={`/productos/${prod.id}`} 
                            state={{prod}}
                            style={{ textDecoration: "none" }}
                        >
                            <button style={{
                                width: "100%",
                                padding: "8px",
                                backgroundColor: "#007bff",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                transition: "background-color 0.2s"
                            }}>
                                Ver detalles
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;