import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContexts';

const Pagination = () => {
   const { PageSize, setPageSize, pageNumber, setpageNumber } =
     useContext(ProductContext);

const handlePageChange = (event, value) => {
  setPageNumber(value);
};

  return (
    <div
     count={4}
      page={pageNumber}
      onChange={handlePageChange}
    />
      
    
  );
}

export default Pagination
