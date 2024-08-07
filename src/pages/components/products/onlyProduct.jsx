// ProductsList.js
import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig'; // Asegúrate de usar la ruta correcta

const ProductsList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosCollection = db.collection('productos');
        const productosSnapshot = await productosCollection.get();
        const productosList = productosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosList);
      } catch (error) {
        console.error('Error al obtener productos: ', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <img src={producto.imagen} alt={producto.nombre} style={{ width: '100px', height: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
