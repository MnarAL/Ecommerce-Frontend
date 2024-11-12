import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContexts";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Search = ({ onHandleSearch }) => {
  const { searchTerm, setSearchTerm } = useContext(ProductContext);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onHandleSearch(value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mb: 2 }}
      />
    </Box>
  );
};

export default Search;
