import React, { useState, useEffect, useContext } from "react";

import { ProductContext } from "../../contexts/ProductContexts";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { products, editProduct } = useContext(ProductContext);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: "",
  });
   const { id } = useParams();
   const navigate = useNavigate();


    useEffect(() => {
      const UpdateProduct = products.find(
        (product) => product.id === parseInt(id)
      );
      if (UpdateProduct) {
        setUpdatedProduct(UpdateProduct);
      }
    }, [id, products]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
       await editProduct(updatedProduct); 
       console.log("Product updated successfully");
       navigate(`admin-productslist`);
     } catch (error) {
       console.error("Error updating product:", error);
       
     }


  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={updatedProduct.name || ""}
            onChange={handleChange}
            
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={updatedProduct.price ||""}
            onChange={handleChange}
           
          />
        </div>

        <button type="submit">Update</button>
      </form>

      
    </div>
  ); 
};}

export default UpdateProduct
