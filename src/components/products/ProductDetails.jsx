import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProductsById } from "../../Services/ProductService";
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  Paper,
} from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await getAllProductsById(id);
        setProduct(response.data);
      } catch (error) {
        setError("Failed to load product details.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" color="error.main" minHeight="60vh">
        <Typography variant="h6">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          p: 4,
          backgroundColor: "background.paper",
          borderRadius: 2,
          boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
        }}
      >
        <Box
          component="img"
          src={product.imageUrl || "https://via.placeholder.com/300"}
          alt={product.name}
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
            objectFit: "cover",
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 600, color: "primary.dark" }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "success.dark",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mb: 2,
            }}
          >
            <span style={{ fontSize: "0.8em" }}>SAR</span> {product.price}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {product.description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            Category:{" "}
            <span style={{ color: "primary.main" }}>
              {product.categoryName}
            </span>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProductDetails;
