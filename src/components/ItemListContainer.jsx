import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import mockProducts from '../mockProducts'; // Importamos los productos mockeados

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams(); // Captura la categoría desde la URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Filtra los productos según la categoría seleccionada en la URL
    const filteredProducts = categoryId
      ? mockProducts.filter(product => product.id === categoryId)
      : mockProducts;

    setProducts(filteredProducts);
    setLoading(false);
  }, [categoryId]);

  if (loading) return <div className="text-center">Cargando productos...</div>;

  return (
    <div className="container my-5">
      <h1 className="text-center text-white bg-dark p-3">{greeting}</h1>
      {products.length === 0 ? (
        <p className="text-center">No hay productos disponibles en esta categoría.</p>
      ) : (
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4">
              <div className="card">
                <img src={product.img} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text"><strong>${product.price}</strong></p>
                  <Link to={`/item/${product.id}`} className="btn btn-primary">Ver detalle</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
