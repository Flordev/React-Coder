import React from 'react';
import { Link } from 'react-router-dom';
import AddItemButton from './AddItemButton';  // Si decides usar el componente de botón separado

const ItemList = ({ products, onAddToCart }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4">
          <div className="card">
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text"><strong>${product.price}</strong></p>
              <AddItemButton product={product} onAddToCart={onAddToCart} />
              <Link to={`/item/${product.id}`} className="btn btn-secondary mt-2">
                Ver Detalle
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
