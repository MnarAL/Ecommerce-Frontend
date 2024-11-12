import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";

// إنشاء الـ Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // تحميل سلة الشراء من localStorage إذا كانت متاحة، وإلا يتركها كأريه فارغة
  const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage);

  // دالة لحفظ السلة في localStorage
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
        // إذا المنتج موجود، يزيد الكمية
        updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
      } else {
        // إضافة منتج جديد للسلة
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      saveCartToLocalStorage(updatedCart); // حفظ السلة المحدثة في localStorage
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => item.id !== id
      );
      saveCartToLocalStorage(updatedCart); // حفظ السلة المحدثة في localStorage
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // إزالة السلة من localStorage
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(1, quantity) }; // التأكد أن الكمية على الأقل تساوي 1
        }
        return item;
      });

      saveCartToLocalStorage(updatedCart); // حفظ السلة المحدثة في localStorage
      return updatedCart;
    });
  };

  // التزامن مع localStorage عند تغير السلة
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
