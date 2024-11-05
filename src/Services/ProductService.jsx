// const baseUrl = "https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/products" ?pageNumber=${pageNumber}&pageSize=${pageSize}

export const getAllProducts = async (
  searchTerm = "",
  sortCriteria = "name", //set defualt value  https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/products?sortBy=price&sortOrder=des
  sortOrder = "asc"
) => {
  //fun to get tha data
  //"https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/products??Search=${searchTerm}&sortBy=${sortCriteria}&sortOrder=${sortOrder}"
  try {
    const response = await fetch(
      `https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/products?Search=${searchTerm}&sortBy=${sortCriteria}&sortOrder=${sortOrder}` //change the link then sort + search are done
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
