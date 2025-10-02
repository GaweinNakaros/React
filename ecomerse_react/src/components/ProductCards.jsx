import React, { useState, useEffect } from 'react';
import './ProductCards.css';

// Mock data as fallback
const mockProductos = [
  {
    id: 1,
    nombre: 'Laptop Pro',
    descripcion: 'Laptop de alto rendimiento con 16GB RAM y 512GB SSD',
    precio: 1299.99,
    imagen: 'https://via.placeholder.com/300x200/4CAF50/ffffff?text=Laptop+Pro'
  },
  {
    id: 2,
    nombre: 'Smartphone X',
    descripcion: 'Teléfono inteligente con cámara de 48MP y pantalla OLED',
    precio: 799.99,
    imagen: 'https://via.placeholder.com/300x200/2196F3/ffffff?text=Smartphone+X'
  },
  {
    id: 3,
    nombre: 'Tablet Ultra',
    descripcion: 'Tablet con pantalla de 10.5 pulgadas y lápiz óptico incluido',
    precio: 499.99,
    imagen: 'https://via.placeholder.com/300x200/FF9800/ffffff?text=Tablet+Ultra'
  },
  {
    id: 4,
    nombre: 'Auriculares Wireless',
    descripcion: 'Auriculares inalámbricos con cancelación de ruido activa',
    precio: 199.99,
    imagen: 'https://via.placeholder.com/300x200/9C27B0/ffffff?text=Auriculares'
  },
  {
    id: 5,
    nombre: 'Smart Watch',
    descripcion: 'Reloj inteligente con monitor de frecuencia cardíaca',
    precio: 299.99,
    imagen: 'https://via.placeholder.com/300x200/F44336/ffffff?text=Smart+Watch'
  },
  {
    id: 6,
    nombre: 'Teclado Mecánico',
    descripcion: 'Teclado mecánico RGB para gaming con switches azules',
    precio: 149.99,
    imagen: 'https://via.placeholder.com/300x200/00BCD4/ffffff?text=Teclado'
  }
];

function ProductCards() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://68d482fa214be68f8c696bbd.mockapi.io/api/productos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar los productos');
        }
        return response.json();
      })
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(error => {
        console.warn('Error al cargar productos desde API, usando datos de respaldo:', error);
        // Use mock data as fallback
        setProductos(mockProductos);
        setLoading(false);
        setError(null); // Don't show error, just use fallback data
      });
  }, []);

  if (loading) {
    return <div className="loading">Cargando productos...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="product-cards-container">
      <h2 className="product-cards-title">Nuestros Productos</h2>
      <div className="product-cards-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="product-card">
            <div className="product-card-image">
              <img src={producto.imagen || 'https://via.placeholder.com/300x200'} alt={producto.nombre} />
            </div>
            <div className="product-card-content">
              <h3 className="product-card-name">{producto.nombre}</h3>
              <p className="product-card-description">{producto.descripcion}</p>
              <div className="product-card-footer">
                <span className="product-card-price">${producto.precio}</span>
                <button className="product-card-button">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
