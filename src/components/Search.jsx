import React, { useContext, useState } from "react";

import { ProductContext } from "../contexts/ProductContexts";

const Search = ({ onHandleSearch }) => {
   const { searchTerm, setSearchTerm } = useContext(ProductContext);
  // const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) =>  {
    const { value } = event.target;
    setSearchTerm(value); 
    onHandleSearch(value); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search
