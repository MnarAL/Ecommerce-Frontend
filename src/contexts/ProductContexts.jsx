import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../Services/productService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); //load products
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("name"); //set defual value
  const [sortOrder, setSortOrder] = useState("asc");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1); //create state + d v
  const [pageSize, setPageSize] = useState(2);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts(
          searchTerm,
          sortCriteria, //whithout set defualt value
          sortOrder,
          pageNumber,
          pageSize,
          totalPages
        ); //request the service

        setProducts(response.product.items);
        setTotalPages(Math.ceil(response.product.totalCount / pageSize));
      } catch (error) {
        setError(error);
        // console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [sortCriteria, sortOrder, pageNumber, pageSize]); // setOrder + setCriteria remove

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        sortCriteria,
        setSortCriteria,
        sortOrder,
        setSortOrder,
        pageNumber,
        setPageNumber,
        pageSize,
        setPageSize,
        totalPages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
