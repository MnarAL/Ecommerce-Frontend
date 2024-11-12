import React, { useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../../contexts/ProductContexts";
import Search from "../Search";
import Sort from "../Sort";
import PaginationComp from "../PaginationComp";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
    <Container>
      <Box mb={3}>
        <Typography variant="h4" component="h2" gutterBottom>
          Products List
        </Typography>
      </Box>

      <Box display="flex" gap={2} mb={3}>
        <Sort />
        <Search onHandleSearch={handleSearch} />
      </Box>

      <Grid container spacing={4}>
        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Box>
                <ProductCard product={product} />
              </Box>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1" color="textSecondary">
              No products found
            </Typography>
          </Grid>
        )}
      </Grid>

      <Box mt={4} display="flex" justifyContent="center">
        <PaginationComp />
      </Box>
    </Container>
  );
};

export default ProductsList;
