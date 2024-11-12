import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleAddProduct } from "../../Services/ProductService";
// import { handleAddProduct } from "../Services/ProductService";

const AddProductForm = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    categoryId: "",
    imageUrl: "",
  });

  console.log("product ", product);

  const handleImageChange = (event) => {
    const imageUrl = event.target.value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      imageUrl,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const addProduct = (newProduct) => {
    setProduct((prevProducts) => [...prevProducts, newProduct]);
  };

  const validateInputs = () => {
    const newErrors = {};

    if (!product.name) {
      newErrors.name = "Name is required";
    }

    if (!product.price) {
      newErrors.price = "Price is required";
    } else if (parseFloat(product.Price) <= 0) {
      newErrors.price = "Price must be positive";
    }

    if (!product.categoryId) {
      newErrors.categoryId = "Category is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    try {
      const addedProduct = await handleAddProduct({
        name: product.name,
        price: parseFloat(product.price),
        categoryId: product.categoryId,
        imageUrl: product.imageUrl,
      });

      if (addedProduct) {
        setProduct({
          vame: "",
          price: "",
          categoryId: "",
          imageUrl: "",
        });
        addProduct(addedProduct);

        navigate(`/admin/dashboard/admin-productslist`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h2>New Product:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product name:</label>
          <input
            type="text"
            value={product.name}
            id="name"
            name="name"
            onChange={handleChange}
            required
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={product.price}
            id="price"
            name="price"
            onChange={handleChange}
            required
          />
          {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            id="category"
            name="categoryId"
            value={product.categoryId}
            onChange={handleChange}
            required
          />
          {errors.categoryId && (
            <p style={{ color: "red" }}>{errors.categoryId}</p>
          )}
        </div>
        <label htmlFor="imageUrl">Image:</label>
        <input
          type="text"
          placeholder="Image URL"
          id="image"
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleImageChange}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProductForm;
