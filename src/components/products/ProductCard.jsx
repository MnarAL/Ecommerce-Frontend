import React from 'react'

import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
   const navigate = useNavigate();

   const handleDetailsClick = () => {
     navigate(`/productdetails/${product.id}`);
   };
  return (
    <div>
      <li key={product.id}>
        <img src={product.imageUrl} alt="pro" />
        <h3>{product.name}</h3>
        <p>Prics: {product.price} SAR</p>
        <button onClick={handleDetailsClick}>more deatils</button>
        {/* <button onClick={() => onAddToCart(product)}>
        
        </button>{" "}
    ة */}
      </li>
    </div>
  );
}

export default ProductCard
