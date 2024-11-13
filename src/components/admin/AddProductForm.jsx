import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContexts";
import {
  createTheme,
  ThemeProvider,
  Container,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#2c3e50",
      secondary: "#546e7a",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "1rem",
          width: "100%",
        },
      },
    },
  },
});

const AddProductForm = () => {
  const [errors, setErrors] = useState({});
  const { addProduct, categories } = useContext(ProductContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    categoryId: "",
    imageUrl: "",
    description: "",
  });

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

  const validateInputs = () => {
    const newErrors = {};

    if (!product.name) {
      newErrors.name = "Name is required";
    }

    if (!product.price) {
      newErrors.price = "Price is required";
    } else if (parseFloat(product.price) <= 0) {
      newErrors.price = "Price must be positive";
    }

    if (!product.categoryId) {
      newErrors.categoryId = "Category is required";
    }

    if (!product.description) {
      newErrors.description = "Description is required";
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
      const productData = {
        name: product.name,
        price: parseFloat(product.price),
        categoryId: product.categoryId,
        imageUrl: product.imageUrl,
        description: product.description,
      };

      const response = await addProduct(productData);
      navigate(`/admin/dashboard/admin-productslist`);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            mt: 4,
            borderRadius: 3,
            background: "linear-gradient(to right bottom, #ffffff, #fafafa)",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            color="primary"
            sx={{
              fontWeight: 600,
              mb: 4,
              borderBottom: "2px solid #1976d2",
              pb: 1,
              display: "inline-block",
            }}
          >
            New Product
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              label="Product Name"
              variant="outlined"
              name="name"
              value={product.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              required
            />

            <TextField
              label="Product Description"
              variant="outlined"
              name="description"
              value={product.description}
              onChange={handleChange}
              error={Boolean(errors.description)}
              helperText={errors.description}
              required
            />

            <TextField
              label="Price"
              variant="outlined"
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              error={Boolean(errors.price)}
              helperText={errors.price}
              required
            />

            <FormControl
              fullWidth
              error={Boolean(errors.categoryId)}
              sx={{ mt: 2 }}
            >
              <InputLabel>Category</InputLabel>
              <Select
                name="categoryId"
                value={product.categoryId}
                onChange={handleChange}
                label="Category"
                required
              >
                <MenuItem value="">Select Category</MenuItem>
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <MenuItem
                      key={category.categoryId}
                      value={category.categoryId}
                    >
                      {category.categoryName}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem disabled>No categories available</MenuItem>
                )}
              </Select>
              {errors.categoryId && (
                <FormHelperText>{errors.categoryId}</FormHelperText>
              )}
            </FormControl>

            <TextField
              label="Image URL"
              variant="outlined"
              name="imageUrl"
              value={product.imageUrl}
              onChange={handleImageChange}
              error={Boolean(errors.imageUrl)}
              helperText={errors.imageUrl}
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 4,
                px: 6,
                py: 1.8,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 500,
                boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "primary.dark",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 15px rgba(25, 118, 210, 0.4)",
                },
              }}
            >
              Add Product
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default AddProductForm;
