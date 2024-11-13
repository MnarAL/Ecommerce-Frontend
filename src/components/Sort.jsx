import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContexts";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

const Sort = () => {
  const { sortCriteria, setSortCriteria, sortOrder, setSortOrder } =
    useContext(ProductContext);

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel htmlFor="sort">Sort By</InputLabel>
        <Select
          id="sort"
          value={sortCriteria}
          onChange={handleSortChange}
          label="Sort By"
          size="small"
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="price">Price</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel htmlFor="order">Order</InputLabel>
        <Select
          id="order"
          value={sortOrder}
          onChange={handleSortOrderChange}
          label="Order"
          size="small"
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
