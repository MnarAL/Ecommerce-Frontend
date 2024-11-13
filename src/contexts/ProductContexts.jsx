import { createContext, useEffect, useState } from "react";
import { getAllProducts, handleCategories } from "../Services/ProductService";
import {
  handleAddProduct,
  handleDeleteProduct,
  handleEditProduct,
} from "../Services/ProductService";
// import { getAllProducts } from "../Services/productService";

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
   const [categories, setCategories] = useState([]);
  // const [product , setProduct ] = useState({name : "" , price: 0 ,})

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
  useEffect(() => {
    fetchProducts();
  }, [sortCriteria, sortOrder, pageNumber, pageSize]); // setOrder + setCriteria remove

  const addProduct = async (newProduct) => {
    try {
      const response = await handleAddProduct(newProduct);
      if (response) {
        setProducts([...products, response.data.data]);
      }
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const fetchCategoriesData = await handleCategories();
        setCategories(fetchCategoriesData.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategoriesData();
  }, []);

  const deleteProduct = async (id) => {
    try {
       console.log("Deleting product with ID:", id);
      const success = await handleDeleteProduct(id);
      if (success) {
        setProducts(products.filter((product) => product.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

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
        addProduct,
        deleteProduct,
        fetchProducts,
        categories,
        setCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
