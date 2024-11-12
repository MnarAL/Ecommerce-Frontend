import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../Services/ProductService";
import { handleAddProduct , handleDeleteProduct , handleEditProduct } from "../Services/ProductService";
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

    const addProduct = async (newProduct) => {
      try {
        const addedProduct = await handleAddProduct(newProduct);
         if (addedProduct) {
          setProducts([...products, newProduct]);
         }
        
      } catch (error) {
        console.error("Failed to add product:", error);
      }
    };
const deleteProduct = async (id) => {
  try {
    const success = await handleDeleteProduct(id);
    if (success) {
      setProducts(products.filter((product) => product.id !== id));
    }
  } catch (error) {
    console.error("Failed to delete product:", error);
  }
};

const editProduct = async (updatedProduct) => {
    try {
      const updatedProductData = await handleEditProduct(
        updatedProduct.id,
        updatedProduct
      );
       if (updatedData) {
      setProducts(
        products.map((product) =>
          product.id === updatedProductData.id ? updatedProductData : product
        )
      );}
    }
     catch (error) {
      console.error("Failed to update product:", error);
    }
  }


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
        editProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

