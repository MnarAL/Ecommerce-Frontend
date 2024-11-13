import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { login } from "../Services/UserService"; 
import {  
  Container,  
  Paper,  
  TextField,  
  Button,  
  Typography,  
  Box, 
  Avatar, 
  createTheme, 
  ThemeProvider 
} from '@mui/material'; 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; 
 
const theme = createTheme({ 
  palette: { 
    primary: { 
      main: '#1976d2', 
      light: '#42a5f5', 
      dark: '#1565c0', 
    }, 
    secondary: { 
      main: '#9c27b0', 
      light: '#ba68c8', 
      dark: '#7b1fa2', 
    }, 
  }, 
}); 
 
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
     
  
  return ( 
    <ThemeProvider theme={theme}> 
      <Container component="main" maxWidth="xs"> 
        <Paper  
          elevation={3}  
          sx={{ 
            marginTop: 8, 
            padding: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
          }} 
        > 
          <Avatar sx={{  
            margin: 1,  
            bgcolor: 'primary.main', 
            width: 56, 
            height: 56 
          }}> 
            <LockOutlinedIcon fontSize="large" /> 
          </Avatar> 
 
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}> 
            Sign In 
          </Typography> 
 
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}> 
            <TextField 
              margin="normal" 
              required 
              fullWidth 
              id="email" 
              label="Email Address" 
              name="email" 
              autoComplete="email" 
              autoFocus 
              value={user.email} 
              onChange={handleChange} 
              error={!!errors.email} 
              helperText={errors.email} 
              sx={{ mb: 2 }} 
            /> 
 
            <TextField 
              margin="normal" 
              required 
              fullWidth 
              name="password" 
              label="Password" 
              type="password" 
              id="password" 
              autoComplete="current-password" 
              value={user.password} 
              onChange={handleChange} 
              error={!!errors.password} helperText={errors.password} 
              sx={{ mb: 3 }} 
            /> 
 
            {errors.form && ( 
              <Typography color="error" variant="body2" sx={{ mb: 2 }}> 
                {errors.form} 
              </Typography> 
            )} 
 
            <Button 
              type="submit" 
              fullWidth 
              variant="contained" 
              sx={{ 
                mt: 2, 
                mb: 2, 
                py: 1.5, 
                fontSize: '1.1rem', 
                fontWeight: 'bold', 
                '&:hover': { 
                  backgroundColor: 'primary.dark', 
                } 
              }} 
            > 
              Sign In 
            </Button> 
          </Box> 
        </Paper> 
      </Container> 
    </ThemeProvider> 
  ); 
 
} 
export default SignIn