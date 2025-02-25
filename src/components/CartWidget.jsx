import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../cartcontext'; 

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);  
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={24} />
      <span className="badge bg-primary ms-2">{totalItems}</span>  
    </div>
  );
};

export default CartWidget;
