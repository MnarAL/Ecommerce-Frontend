// HomePage.js

import React, { useContext } from "react"; 
import { ProductContext } from "../contexts/ProductContexts"; 
import ProductList from "../components/products/ProductsList"; 
import Pagination from "../components/Pagination";


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
    {/* <Pagination/> */}
      <ProductList />
      
    </>
  );
};

export default HomePage;