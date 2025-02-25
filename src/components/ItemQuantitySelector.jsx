import React, { useState, useEffect } from 'react';

const ItemQuantitySelector = ({ initialQuantity, onQuantityChange, id }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
    onQuantityChange(id, newQuantity); // Llamar a la función para actualizar la cantidad en el carrito
  };

  useEffect(() => {
    setQuantity(initialQuantity); // Sincronizar la cantidad si cambia el valor inicial
  }, [initialQuantity]);

  return (
    <div className="mb-3">
      <label htmlFor="quantity" className="form-label">Cantidad</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={handleChange}
        className="form-control"
        min="1"
      />
    </div>
  );
};

export default ItemQuantitySelector;
