import React, { useContext, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
// import { handleDeleteProduct } from "../../Services/productService";
import { ProductContext } from "../../contexts/ProductContexts";

const ProductCardAdmin = ({ product, onDelete, onUpdate }) => {
  
  // const { products } = useContext(ProductContext);
  const navigate = useNavigate();

    const handleUpdateClick = (id) => {
      navigate(`/admin/dashboard/editproduct/${id}`);
    };

 const { id } = useParams();
  

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div>
      <li key={product.id}>
        <img src={product.imageUrl} alt={product.imageUrl} />
        <h3>{product.name}</h3>
        <p>Prics: {product.price} SAR</p>
        <p>Descriptipn:{product.description}</p>

        <button onClick={handleUpdateClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
        {/* /* <button onClick={() => onAddToCart(product)}>
          
        </button>{" "} */}
      </li>
    </div>
  );
};

export default ProductCardAdmin;
