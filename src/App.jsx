import React from "react";

import { ProductProvider } from "./contexts/ProductContexts";
import Router from "./Router/Router";



const App = () => {


  return (
    <ProductProvider>
      <Router />
    </ProductProvider>
  );
};

export default App;
