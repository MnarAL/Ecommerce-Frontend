import React, { useContext } from "react";

import Pagination from "@mui/material/Pagination";
import { ProductContext } from "../contexts/ProductContexts";

const PaginationComp = () => {
  const { pageSize, totalPages, pageNumber, setPageNumber } =
    useContext(ProductContext);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <div>
      <Pagination
        count={totalPages || 0}
        page={pageNumber}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{ marginTop: 3 }}
      />
      <p style={{ marginTop: "10px", textAlign: "center" }}>
       
      </p>
    </div>
  );
};

export default PaginationComp;
