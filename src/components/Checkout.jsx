import React, { useContext } from 'react';
import { CartContext } from '../cartcontext';
import ItemQuantitySelector from './ItemQuantitySelector';

const Checkout = () => {
  const { cartItems, clearCart, updateItemQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleFinalizePurchase = () => {
    alert('Compra finalizada');
    
    // Limpiar el carrito
    clearCart();
  };

  const handleQuantityChange = (id, quantity) => {
    updateItemQuantity(id, quantity); // Actualiza la cantidad en el carrito
  };

  return (
    <div className="container">
      <h3>Resumen de compra</h3>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="mb-2">
              <h5>{item.name}</h5>
              <p>Precio: ${item.price}</p>

              {/* Agregar el selector de cantidad */}
              <ItemQuantitySelector
                initialQuantity={item.quantity}
                id={item.id}
                onQuantityChange={handleQuantityChange}
              />
            </div>
          ))}
          <h4>Total: ${totalPrice}</h4>
          <button className="btn btn-success" onClick={handleFinalizePurchase}>
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
