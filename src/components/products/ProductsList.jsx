import React, { useContext, useState, useEffect } from "react"; 

import ProductCard from "./ProductCard"; 
import { ProductContext } from "../../contexts/ProductContexts"; 
import Search from "../Search"; 
import Sort from "../Sort"; 
import PaginationComp from "../PaginationComp"; 
import Container from "@mui/material/Container"; 
import Grid from "@mui/material/Grid"; 
import Typography from "@mui/material/Typography"; 
import Box from "@mui/material/Box"; 
 
const ProductsList = () => { 
  const { products } = useContext(ProductContext); 
  const [filterProducts, setFilterProducts] = useState(products); 
 
  const handleSearch = (searchTerm) => { 
    const filtered = products.filter((product) => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    ); 
    setFilterProducts(filtered); 
  }; 
 
  useEffect(() => { 
    setFilterProducts(products); 
  }, [products]); 
 
  return ( 
    
    <Container maxWidth="xl"> 
      <Box  
        mb={4}  
        pt={3} 
        sx={{ 
          borderBottom: 3, 
          borderColor: 'primary.main', 
          background: 'linear-gradient(120deg, rgba(25,118,210,0.05), rgba(25,118,210,0.15))', 
          padding: '2rem', 
          borderRadius: '8px 8px 0 0' 
        }} 
      > 
        <Typography  
          variant="h4"  
          component="h2"  
          gutterBottom 
          sx={{ 
            fontWeight: 800, 
            color: 'primary.dark', 
            textTransform: 'uppercase', 
            letterSpacing: '1px', 
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)', 
            position: 'relative', 
            '&::after': { 
              content: '""', 
              position: 'absolute', 
              bottom: '-8px', 
              left: '0', 
              width: '60px', 
              height: '4px', 
              backgroundColor: 'primary.main', 
              borderRadius: '2px' 
            } 
          }} 
        > 
          Products List 
        </Typography> 
      </Box> 
 
      <Box  
        display="flex"  
        gap={2}  
        mb={4} 
        sx={{ 
          flexDirection: { xs: 'column', sm: 'row' }, 
          alignItems: 'center', 
          backgroundColor: 'background.paper', 
          p: 3, 
          borderRadius: 2, 
          boxShadow: '0 8px 16px rgba(0,0,0,0.08)', 
          border: '1px solid', 
          borderColor: 'divider', 
          backdropFilter: 'blur(8px)', 
          '&:hover': { 
            boxShadow: '0 12px 24px rgba(25,118,210,0.12)', 
            transition: 'all 0.3s ease-in-out' 
          } 
        }} 
      > 
        <Sort /> 
        <Search onHandleSearch={handleSearch} /> 
      </Box> 
 
      <Grid container spacing={3}> 
        {filterProducts.length > 0 ? ( 
          filterProducts.map((product) => ( 
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}> 
              <Box  
                sx={{  
                  height: '100%', 
                  transition: 'all 0.3s ease-in-out', 
                  '&:hover': { 
                    transform: 'translateY(-8px)', 
                    '& > *': { 
                      boxShadow: '0 12px 24px rgba(25,118,210,0.15)' 
                    } 
                  } 
                }} 
              > 
                <ProductCard product={product} /> 
              </Box> 
            </Grid> 
          )) 
        ) : ( 
          <Grid item xs={12}> 
            <Box  
              sx={{ 
                textAlign: 'center', 
                py: 10, 
                backgroundColor: 'background.paper', 
                borderRadius: 2, 
                boxShadow: '0 8px 16px rgba(0,0,0,0.08)', 
                border: '1px solid', 
                borderColor: 'divider', 
                background: 'linear-gradient(145deg, #ffffff, #f5f5f5)' 
              }} 
            > 
              <Typography  
                variant="h6"  
                color="text.secondary" 
                sx={{  
                  fontWeight: 600, 
                  opacity: 0.9,


letterSpacing: '0.5px' 
                }} 
              > 
                No products found 
              </Typography> 
            </Box> 
          </Grid> 
        )} 
      </Grid> 
 
      <Box  
        mt={8}  
        mb={4}  
        display="flex"  
        justifyContent="center" 
        sx={{ 
          '& .MuiPagination-ul': { 
            gap: 1, 
            '& .MuiPaginationItem-root': { 
              transition: 'all 0.2s ease-in-out', 
              '&:hover': { 
                backgroundColor: 'primary.light', 
                color: 'primary.contrastText' 
              } 
            } 
          } 
        }} 
      > 
        <PaginationComp /> 
      </Box> 
    </Container> 
    
  ); 
}; 
 
export default ProductsList;