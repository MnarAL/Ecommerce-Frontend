import React, { useContext } from 'react'
import ProductCard from './ProductCard';
import { ProductContext } from '../../contexts/ProductContexts';

 const ProductsList = () => {
  const { products } = useContext(ProductContext);
   return (
     <div>
       <div>
         <h2>Products List</h2>
       </div>
       <ul>
         {products.map((product) => (
           <ProductCard key={product.id} product={product} />
         ))}
       </ul>
     </div>
   );
};

 

export default ProductsList;