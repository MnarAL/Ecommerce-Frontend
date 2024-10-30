import React, { useState } from "react";
import ProductsList from "./ProductsList";

const ProductCard = ({ title, price}) => {

 

  return (
    <div>
      <h2>Title: {title}</h2>
      <h3>Price: ${price}</h3>
      
      {/* <ProductsList title={products.title} />
      <ProductsList price={products.price} /> */}
    </div>
  );
};





export default ProductCard ;