export const getAllProducts = async () => {
  try {
    const response = await fetch(
      "https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/products"
    );
    const data = await response.json();
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
