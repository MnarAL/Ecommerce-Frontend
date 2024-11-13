import React, { useEffect, useState, createContext } from "react";

import PropTypes from "prop-types";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage);

 
  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      let updatedCart;

      if (existingProductIndex >= 0) {
 
        updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
      } else {
     
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      saveCartToLocalStorage(updatedCart); 
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => item.id !== id
      );
      saveCartToLocalStorage(updatedCart); 
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); 
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(1, quantity) }; 
        }
        return item;
      });

      saveCartToLocalStorage(updatedCart); 
      return updatedCart;
    });
  };


  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  console.log(cart);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
