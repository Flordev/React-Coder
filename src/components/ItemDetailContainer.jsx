import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../cartcontext';  

import mockProducts from '../mockProducts';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addItemToCart } = useContext(CartContext);  

  useEffect(() => {
    setLoading(true);
    setError(null);

    const foundProduct = mockProducts.find((p) => p.id === itemId);

    if (foundProduct) {
      setProduct(foundProduct);
      setLoading(false);
    } else {
      setError('Producto no encontrado');
      setLoading(false);
    }
  }, [itemId]);

  if (loading) return <h2 className="text-center">Cargando producto...</h2>;
  if (error) return <h2 className="text-center text-danger">{error}</h2>;

  const handleAddToCart = () => {
    addItemToCart({ ...product, quantity: 1 });  
  };

  return (
    <div className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <img src={product.img} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description || 'Sin descripción'}</p>
          <p className="card-text"><strong>Precio:</strong> ${product.price}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
