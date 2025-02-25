import React, { createContext, useState } from 'react';

// Creamos el contexto del carrito
export const CartContext = createContext();

// Componente proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const updateItemQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCartItems([]); // Vaciar el carrito
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, updateItemQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
