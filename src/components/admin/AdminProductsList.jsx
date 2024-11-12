import React, { useContext, useEffect, useState } from 'react'
import ProductCardAdmin from './ProductCardAdmin';
import PaginationComp from '../PaginationComp';
import Pagination from 'materialui-pagination-component';

import Search from '../Search';
import { ProductContext } from '../../contexts/ProductContexts';
import { useNavigate } from 'react-router-dom';
import { handleDeleteProduct } from '../../Services/ProductService';
import Sort from '../Sort';
import AddProductForm from './AddProductForm';
// import { handleDeleteProduct } from "../../Services/productService";

const AdminProductsList = () => {
   const { addProduct, deleteProduct , editProduct } = useContext(ProductContext);
  const { products, setProducts } = useContext(ProductContext);
  const [filterProducts, setFilterProducts] = useState(products);
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterProducts(filtered);
  };


  // const handleAddClick = () => {
  //   navigate(`/add-product`);
  // };


  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div>
      <AddProductForm onAdd={addProduct} />
      <button onClick={() => navigate(`admin/dashboard/add-product`)}>
        {" "}
        Add Product
      </button>
      <PaginationComp />
      <Sort />
      <Search onHandleSearch={handleSearch} />
      <div>
        <h2>Products List</h2>
      </div>
      <ul>
        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <ProductCardAdmin
              key={product.id}
              product={product}
              onDelete={deleteProduct}
              onEdit={editProduct} //ProductCardAdmin
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );
};

   

export default AdminProductsList
