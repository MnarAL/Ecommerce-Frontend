import React from "react";

import { ProductProvider } from "./contexts/ProductContexts";
import Router from "./Router/Router";
import { CartProvider } from "./contexts/CartContext";



const App = () => {


  return (
    <CartProvider>
    <ProductProvider>
      <Router />
    </ProductProvider>
    </CartProvider>
  );
};

export default App;
