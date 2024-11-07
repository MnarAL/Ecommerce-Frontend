export const login = async (user) => {
  try {
    const response = await fetch(
      `http://localhost:5125/api/v1/auth/login`,

      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    return response;
    // const data = await response.json();
    // return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};



export const register = async (user) => {
  console.log(JSON.stringify(user));
  try {
    // http://localhost:5125/api/v1/auth/register
    const response = await fetch(`http://localhost:5125/api/v1/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

//  useEffect(() => {
//    const fetchUsers = async () => {
//      setIsLoading(true);
//      try {
//        const response = await login(userData);
//        console.log("Fetch Data :", response);
//        setUser(response.user.items);
//      }
//      catch {
//        setError(error);
//        console.error("Error fetching users:", error);
//      } finally {
//        setIsLoading(false);
//      }
//    };
//    fetchUsers();
//  }, [userData]);

//  useEffect(() => {
//    const fetchUsers = async () => {
//      setIsLoading(true);
//      try {
//        const response = await register(newUser);
//        console.log("Fetch Data :", response);
//        setUser(response.user.items);
//      } catch {
//        setError(error);
//        console.error("Error fetching users:", error);
//      } finally {
//        setIsLoading(false);
//      }
//    };
//    fetchUsers();
//  }, [newUser]);
