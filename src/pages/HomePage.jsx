// HomePage.js

import React, { useContext } from "react"; // تأكد من استيراد useContext
import { ProductContext } from "../contexts/ProductContexts"; // تأكد من استيراد ProductContext
import ProductList from "../components/products/ProductsList"; // استيراد ProductList إذا كان مطلوباً


const HomePage = () => {
  const { isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <p>products are loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <ProductList />
    </>
  );
};

export default HomePage;