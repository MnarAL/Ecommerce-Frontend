// const baseUrl = "https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/products" ?pageNumber=${pageNumber}&pageSize=${pageSize}

export const getAllProducts = async (
  searchTerm = "",
  sortCriteria = "name", //set defualt value
  sortOrder = "asc",
  pageNumber = 1,
  pageSize = 2
) => {
  //fun to get tha data
  //"https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/products??Search=${searchTerm}&sortBy=${sortCriteria}&sortOrder=${sortOrder}"
  try {
    const response = await fetch(
      `https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/products?&pageNumber=${pageNumber}&pageSize=${pageSize}&Search=${searchTerm}&sortBy=${sortCriteria}&sortOrder=${sortOrder}` //change the link then sort + search are done
    );
    // "baseUrl?Search={searchTerm}"store the data in response
    const data = await response.json(); //store the response in data
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getAllProductsById = async (id) => {
  try {
    const response = await fetch(
      `https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/products/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const handleAddProduct = async (product) => {
  try {
    const response = await fetch("http://localhost:5125/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    // return response;

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Server error: ${errorMessage}`);
    }
    const addedProduct = await response.json();
    console.log("Parsed response from backend:", addedProduct);
    return addedProduct;
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

//   const data = await response.json();
//   return data;
// } catch (error) {
//   console.error("Error adding product:", error);
//   throw error;
// }
// };

export const handleDeleteProduct = async (id) => {
  try {
    const response = await fetch(
      `https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/products/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete product");
    }

    console.log("Product deleted successfully");
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

// ProductsService.js

export const handleEditProduct = async (id, updatedProduct) => {
  try {
    const response = await fetch(
      `http://localhost:5125/api/v1/products/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    );

    if (response.ok) {
      const updatedProductData = await response.json();
      return updatedProductData;
    } else {
      throw new Error("Failed to update product");
    }
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};
