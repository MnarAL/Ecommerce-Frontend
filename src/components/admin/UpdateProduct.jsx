import React, { useState, useEffect, useContext } from "react";

import { ProductContext } from "../../contexts/ProductContexts";
import { useParams } from "react-router-dom";
import { handleEditProduct } from "../../Services/ProductService";


const UpdateProduct = () => {
  const { products, fetchProducts } =
    useContext(ProductContext);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: 0,
    imageUrl: "",
    description: "",
  });
  const { id } = useParams();


  useEffect(() => {
    const FindProduct = products.find((product) => product.id === id);
    if (FindProduct) {
      setUpdatedProduct(FindProduct);
    }
  }, [id, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const imageUrl = event.target.value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      imageUrl,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleEditProduct(id , updatedProduct);
      await fetchProducts();
      // console.log("Product updated successfully");
    //  navigate(`/admin/dashboard/admin-productslist`);
    } catch (error) {
      console.error("Error updating product:", error);
    } }

    // const handleEditClick = (productId) =>
    //    {
    //      navigate(`/admin/dashboard/admin-productslist`);
    //    }

    return (
      <div>
        imageUrl: "", description: "",
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
            <label>Product description:</label>
            <input
              type="text"
              name="description"
              value={updatedProduct.description || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={updatedProduct.price || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>image:</label>
            <input
              type="text"
              name="imageUrl"
              value={updatedProduct.imageUrl || ""}
              onChange={handleImageChange}
            />
          </div>

          <button type="submit">Update</button>
        </form>
      </div>
    );

};

export default UpdateProduct;
