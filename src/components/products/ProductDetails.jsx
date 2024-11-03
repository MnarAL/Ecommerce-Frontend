import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getAllProductsById } from "../../Services/ProductService";

const ProductDetails = () => {
  const { id } = useParams();
  const [ product, setProduct ] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getAllProductsById(id);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;
  
  return (
    <div>
      <ul>
        <li key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Prics: {product.price} SAR</p>
          <p>Category:{product.categoryName}</p>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetails;
