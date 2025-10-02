// Importación de dependencias necesarias de React y React Router
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Importación de estilos
import './productos.css';

/**
 * Componente Productos
 * Muestra una lista de productos en un diseño de cuadrícula
 * Incluye manejo de estados de carga y errores
 */
function Productos() {
    // Estados para manejar los productos y el estado de la aplicación
    const [productos, setProductos] = useState([]); // Almacena la lista de productos
    const [loading, setLoading] = useState(true);   // Controla el estado de carga
    const [error, setError] = useState(null);       // Maneja los errores
    
    // useEffect para cargar los productos cuando el componente se monta
    useEffect(() => {
        // Función asíncrona para obtener los productos de la API
        const fetchProductos = async () => {
            try {
                // Realizar la petición a la API
                const response = await fetch("https://68d482fa214be68f8c696bbd.mockapi.io/api/productos");
                
                // Verificar si la respuesta es exitosa
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                
                // Convertir la respuesta a JSON y actualizar el estado
                const data = await response.json();
                setProductos(Array.isArray(data) ? data : []); // Asegurarse de que data sea un array
                setError(null); // Limpiar cualquier error previo
            } catch (error) {
                console.error('Error al cargar productos:', error);
                setError('Error al cargar los productos. Por favor, intente más tarde.');
                setProductos([]); // Limpiar productos en caso de error
            } finally {
                setLoading(false); // Indicar que la carga ha terminado
            }
        };

        // Ejecutar la función de fetch
        fetchProductos();
    }, []); // Array vacío significa que solo se ejecuta al montar el componente

    // Renderizado condicional para el estado de carga
    if (loading) {
        return (
            <div className="productos-container">
                <h2>Nuestros Productos</h2>
                <p>Cargando productos...</p>
            </div>
        );
    }

    // Renderizado condicional para el estado de error
    if (error) {
        return (
            <div className="productos-container">
                <h2>Nuestros Productos</h2>
                <p style={{ color: 'red' }}>{error}</p>
            </div>
        );
    }

    // Renderizado principal de la lista de productos
    return (
        <div className="productos-container">
            <h2>Nuestros Productos</h2>
            <div className="productos-grid">
                {/* Mapear cada producto a una tarjeta */}
                {productos.map((prod) => (
                    <div key={prod.id} className="producto-card">
                        {/* Imagen del producto con manejo de errores */}
                        <img
                            src={prod.imagen ? encodeURI(prod.imagen) : 'https://placehold.co/400x300'}
                            alt={prod.nombre}
                            className="producto-imagen"
                            onError={(e) => {
                                e.target.src = 'https://placehold.co/400x300';
                            }}
                        />
                        {/* Información del producto */}
                        <h3>{prod.nombre}</h3>
                        <p>{prod.descripcion}</p>
                        {/* Sección de precio y stock */}
                        <div className="producto-detalles">
                            <span className="precio">
                                ${parseFloat(prod.precio || 0).toFixed(2)}
                            </span>
                            <span className={`stock ${prod.stock > 0 ? 'stock-disponible' : 'stock-agotado'}`}>
                                {prod.stock > 0 ? `Stock: ${prod.stock}` : 'Sin stock'}
                            </span>
                        </div>
                        {/* Enlace a los detalles del producto */}
                        <Link to={`/productos/${prod.id}`} state={{prod}}>
                            <button className="btn-detalle">Ver detalles</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;