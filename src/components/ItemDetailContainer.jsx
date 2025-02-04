import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Aquí importamos el mock de productos
import mockProducts from '../mockProducts'; // Asegúrate de que la ruta sea correcta

const ItemDetailContainer = () => {
  const { itemId } = useParams(); // Obtiene el ID del producto desde la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Buscamos el producto en el mock de productos
    const foundProduct = mockProducts.find(p => p.id === itemId);

    if (foundProduct) {
      setProduct(foundProduct);
      setLoading(false);
    } else {
      setError('Producto no encontrado');
      setLoading(false);
    }
  }, [itemId]);

  // Si está cargando, mostramos un mensaje
  if (loading) return <h2 className="text-center">Cargando producto...</h2>;

  // Si hay un error, lo mostramos
  if (error) return <h2 className="text-center text-danger">{error}</h2>;

  return (
    <div className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <img src={product.img} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description || 'Sin descripción'}</p>
          <p className="card-text"><strong>Precio:</strong> ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
