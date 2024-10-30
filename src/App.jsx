// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
import ProductsList from "./components/products/ProductsList";

const ProductsData = [
  {
    id: 1,
    title: "Product 1",
    price: 120,
  },
];

const App = () => {
  const [products, setProducts] = useState(ProductsData);

  useEffect(() => {
    fetch(
      "https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/products"
    )
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Router>
      <NavBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/productList"
            element={<ProductsList products={products} />}
          />
        </Routes>
      </NavBar>
    </Router>
  );
};

export default App;
