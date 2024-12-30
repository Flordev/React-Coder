import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const [items, setItems] = useState(3); // Número inicial hardcodeado

  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={24} />
      <span className="badge bg-primary ms-2">{items}</span>
    </div>
  );
};

export default CartWidget;
