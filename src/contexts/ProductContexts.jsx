import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts();
        console.log("Fetch Data :" , response);
        setProducts(response.product.items);
      } catch (error) {
        setError(error);
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, isLoading, error }}
    >
      {children}
    </ProductContext.Provider>
  );
};
