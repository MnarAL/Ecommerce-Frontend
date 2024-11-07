import React, { useContext, useState, useEffect } from "react";

import ProductCard from "./ProductCard";
import { ProductContext } from "../../contexts/ProductContexts";
import Search from "../Search";
import Sort from "../sort";
import Pagination from "../PaginationComp";

const ProductsList = () => {
  const { products } = useContext(ProductContext);
  const [filterProducts, setFilterProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterProducts(filtered);
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div>
      <Pagination />
      <Sort />
      <Search onHandleSearch={handleSearch} />
      <div>
        <h2>Products List</h2>
      </div>
      <ul>
        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );
};

export default ProductsList;
