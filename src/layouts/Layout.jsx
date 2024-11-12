import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Main from './Main'
import Box from "@mui/material/Box";

 export const Layout = () => {
  return (
     <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar/>
      <Main/>
      <Footer/>
    </Box>
  )
}

export default Layout 
