export const login = async (user) => {
  try {
    const response = await fetch(
      `https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/auth/login`,

      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
   
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};



export const register = async (user) => {
  console.log(JSON.stringify(user));
  try {
    
    const response = await fetch(
      `https://sda-3-onsite-backend-teamwork-7m2v.onrender.com/api/v1/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
