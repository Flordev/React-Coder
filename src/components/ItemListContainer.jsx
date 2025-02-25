import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../cartcontext';  
import mockProducts from '../mockProducts';
import ItemList from './ItemList';  

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addItemToCart } = useContext(CartContext);  

  useEffect(() => {
    setLoading(true);

    const filteredProducts = categoryId
      ? mockProducts.filter((product) => product.id === categoryId)  
      : mockProducts;

    setProducts(filteredProducts);
    setLoading(false);
  }, [categoryId]);

  const handleAddToCart = (product) => {
    addItemToCart({ ...product, quantity: 1 });
  };

  if (loading) return <div className="text-center">Cargando productos...</div>;

  return (
    <div className="container my-5">
      <h1 className="text-center">{greeting}</h1>
      {products.length === 0 ? (
        <p className="text-center">No hay productos disponibles en esta categoría.</p>
      ) : (
        <ItemList products={products} onAddToCart={handleAddToCart} /> 
      )}
    </div>
  );
};

export default ItemListContainer;
