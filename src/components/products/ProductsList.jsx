import React from 'react'
import ProductCard from './ProductCard';

 const ProductsList = ({ products }) => {
   return (
     <div className="prducts">
       <div className="products-header">
         <h2>Products List</h2>
       </div>

       {products.map((product) => (
         <ProductCard
           key={product.id}
           title={product.title}
           price={product.price}
         />
       ))}
     </div>
   );
};

 

export default ProductsList;