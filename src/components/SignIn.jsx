import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { login } from "../Services/UserService";


const SignIn = () => {
 const [errors, setErrors] = useState({})
 const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

   const validateInput = () => {
    const newErrors = {};
  if (!user.email.trim()) newErrors.email = "Email is required";
  if (!user.password.trim()) newErrors.password = "password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setUser((prevUser) => {
        return { ...prevUser, [name]: value };
      });
    };

    const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateInput()){
      console.log("Valid Input")
      try {
    const data = await login(user);
    console.log(data);
    
    
     localStorage.setItem("token", data.token || "null");
     localStorage.setItem("name", data.userName || "null");
     localStorage.setItem("id", data.userId || "null");
      localStorage.setItem("admin", data.admin || false);
      localStorage.setItem("login", true );
     
    if (data) {
     
      console.log("Successfully signed in");
      navigate("/productList", { state: data.user }); //May be I change the comp..to profile or home
    } else {
      setErrors({ form: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    setErrors({ form: "An error occurred. Please try again later." });
  }
}; }
    


    // if (user.email === userData.email && user.password === userData.password) {
    //   console.log('successfully signed in');
    //   navigate("/productList", { state: userData }); //may be i change the comp..
    // } else {
    //   setErrors({ form: "Invalid email or password" });
    // }}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange} required
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>

        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );

}
export default SignIn 