import React, { useState } from "react"; 


import { useNavigate } from "react-router-dom"; 
import { register } from "../Services/UserService"; 
import {  
  Container,  
  Paper,  
  TextField,  
  Button,  
  Typography,  
  Box, 
  createTheme, 
  ThemeProvider 
} from '@mui/material'; 
 
const theme = createTheme({ 
  palette: { 
    primary: { 
      main: '#2196f3', 
      light: '#64b5f6', 
      dark: '#1976d2', 
    }, 
    background: { 
      default: '#f5f5f5', 
    }, 
  }, 
}); 
 
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
 

 
  return ( 
    <ThemeProvider theme={theme}> 
      <Container component="main" maxWidth="xs"> 
        <Box 
          sx={{ 
            marginTop: 8, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
          }} 
        > 
          <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 2 }}> 
            <Typography component="h1" variant="h4" sx={{ mb: 3, textAlign: 'center', color: 'primary.main' }}> 
              Sign Up 
            </Typography> 
            <form onSubmit={handleSubmit}> 
              <TextField 
                margin="normal" 
                required 
                fullWidth 
                id="name" 
                label="Name" 
                name="name" 
                autoComplete="name" 
                value={user.name} 
                onChange={handleChange} 
                error={!!errors.name} 
                helperText={errors.name} 
                sx={{ mb: 2 }} 
              /> 
              <TextField 
                margin="normal" 
                required 
                fullWidth 
                id="email" 
                label="Email Address" 
                name="email" 
                autoComplete="email" 
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
                autoComplete="new-password" 
                value={user.password} 
                onChange={handleChange} 
                error={!!errors.password} 
                helperText={errors.password} 
                sx={{ mb: 3 }} 
              /> 
              <Button 
                type="submit" 
                fullWidth 
                variant="contained" 
                sx={{ 
                  mt: 2, 
                  mb: 2, 
                  py: 1.5, 
                  bgcolor: 'primary.main', 
                  '&:hover': { 
                    bgcolor: 'primary.dark', 
                  }, 
                }} 
              > 
                Register 
              </Button> 
            </form> 
          </Paper> 
        </Box> 
      </Container> 
    </ThemeProvider> 
  ); 
}; 
 
export default SignUp;