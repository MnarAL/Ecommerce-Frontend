import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../../contexts/ProductContexts";
import { useNavigate, useParams } from "react-router-dom";
import { handleEditProduct } from "../../Services/ProductService";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Container,
} from "@mui/material";

const UpdateProduct = () => {
  const { products, fetchProducts } = useContext(ProductContext);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: 0,
    imageUrl: "",
    description: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const findProduct = products.find((product) => product.id === id);
    if (findProduct) {
      setUpdatedProduct(findProduct);
    } else {
      console.log("Product not found with ID:", id);
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
    console.log("Updated Product Data:", updatedProduct);
    try {
      await handleEditProduct(id, updatedProduct);
      await fetchProducts();
      navigate(`/admin/dashboard/admin-productslist`);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          Update Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Product Name"
                name="name"
                value={updatedProduct.name || ""}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={updatedProduct.description || ""}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                value={updatedProduct.price || ""}
                onChange={handleChange}
                variant="outlined"
                type="number"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Image URL"
                name="imageUrl"
                value={updatedProduct.imageUrl || ""}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Update Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default UpdateProduct;
