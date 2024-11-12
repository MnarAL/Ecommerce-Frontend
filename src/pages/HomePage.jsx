// HomePage.js

import React, { useContext } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ProductContext } from "../contexts/ProductContexts";
import ProductList from "../components/products/ProductsList";


const HomePage = () => {
  const { isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <Typography variant="h6">products are loading...</Typography>;
  }

  if (error) {
    return  <Typography color="error">{error.message}</Typography>;
  }

  return (
    <Container>
      <ProductList />
    </Container>
  );
};

export default HomePage;
