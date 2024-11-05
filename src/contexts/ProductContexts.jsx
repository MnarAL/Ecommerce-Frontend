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
  // const [pageNumber, setPageNumber] = useState(1);
  // const [pageSize, setPageSize] = useState(2);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts(
          searchTerm,
          sortCriteria, //whithout set defualt value
          sortOrder,
        
        ); //request the service
        console.log("Fetch Data :", response);
        setProducts(response.product.items);
        console.log("Fetched products:", response.product.items);
      } catch (error) {
        setError(error);
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [sortCriteria, sortOrder]); // setOrder + setCriteria remove

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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
