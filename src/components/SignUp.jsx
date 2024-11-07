import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../Services/UserService";

const SignUp = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateInput = () => {
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = "Name is required";
    if (!user.email.trim()) newErrors.email = "Email is required";
    if (user.password.length <= 5)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateInput()) {
      //  console.log("Data being sent to server:", user);
      console.log("form data is valid");
      try {
        const response = await register(user);
        if (response.ok) {
          console.log("User registered successfully");
          navigate("/signin");
        } else {
          setErrors({ form: "An error occurred during registration." });
        }
      } catch (error) {
        console.error("Error registering:", error);
        setErrors({ form: "An error occurred. Please try again later." });
      }
    }
  };

  //     const newUser = {
  //       id: nanoid(),
  //       name: user.name,
  //       email: user.email,
  //       password: user.password
  //     };
  //     handleAddUser(newUser);
  //   }
  // };

  // const handleAddUser = (newUser) => {
  //   console.log("User added:", newUser);

  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">password:</label>
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
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
