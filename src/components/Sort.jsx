import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContexts';

const Sort = () => {
  // const [products] = useContext(ProductContext) ;
   const {sortCriteria, setSortCriteria, sortOrder, setSortOrder} =
     useContext(ProductContext);
   

   const handleSortOrderChange = (event) => {
     setSortOrder(event.target.value);
   };


   const handleSortChange = (event) => {
     setSortCriteria(event.target.value);
   };
  return (
    <div className="sort">
      <label htmlFor="sort">Sort By: </label>
      <select
        id="sort"
        value={sortCriteria}
        onChange={handleSortChange}
        className="sort-select"
        placeholder="Select sorting criteria"
      >
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>

      <label htmlFor="rating">Rating: </label>
      <select
        id="order"
        value={sortOrder}
        onChange={handleSortOrderChange}
        className="order-select"
      >
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
}

export default Sort
