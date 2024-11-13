import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContexts";
import { TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ onHandleSearch }) => {
  const { searchTerm, setSearchTerm } = useContext(ProductContext);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onHandleSearch(value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "primary.main",
          },
          "&.Mui-focused fieldset": {
            borderColor: "primary.main",
          },
        },
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        label="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "primary.main" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 2,
          "& .MuiOutlinedInput-root": {
            backgroundColor: "background.paper",
            borderRadius: 2,
            boxShadow: 1,
          },
          "& .MuiInputLabel-root": {
            color: "text.secondary",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "primary.main",
          },
        }}
      />
    </Box>
  );
};

export default Search;
