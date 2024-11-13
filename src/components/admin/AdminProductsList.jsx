import React, { useContext, useEffect, useState } from "react";
import ProductCardAdmin from "./ProductCardAdmin";
import PaginationComp from "../PaginationComp";
import Pagination from "materialui-pagination-component";

import Search from "../Search";
import { ProductContext } from "../../contexts/ProductContexts";
import { useNavigate } from "react-router-dom";
import { handleDeleteProduct } from "../../Services/ProductService";
import Sort from "../Sort";
import AddProductForm from "./AddProductForm";
import {
  Container,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


const AdminProductsList = () => {
  const { deleteProduct, editProduct } = useContext(ProductContext);
  const { products, setProducts } = useContext(ProductContext);
  const [filterProducts, setFilterProducts] = useState(products);
  const navigate = useNavigate();

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
    <Container maxWidth="100%">
      <Paper elevation={3} sx={{ p: 3, my: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            color="primary.main"
            fontWeight="bold"
          >
            Products List
          </Typography>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate(`/admin/dashboard/add-product`)}
            sx={{
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.dark" },
              px: 3,
            }}
          >
            Add Product
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Search onHandleSearch={handleSearch} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Sort />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          {filterProducts.length > 0 ? (
            <Grid container spacing={2}>
              {filterProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <ProductCardAdmin
                    product={product}
                    onDelete={deleteProduct}
                    onEdit={editProduct}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Paper
              elevation={1}
              sx={{
                p: 4,
                textAlign: "center",
                bgcolor: "grey.100",
              }}
            >
              <Typography variant="h6" color="text.secondary">
                No products found
              </Typography>
            </Paper>
          )}
        </Box>
        <Grid item xs={12} md={4}>
          <PaginationComp />
        </Grid>
      </Paper>
    </Container>
  );
};

export default AdminProductsList;
