import React from 'react'; 
import { Box, Container, Typography, Paper, useTheme } from '@mui/material'; 
import NavbarAdmin from './NavbarAdmin'; 
import { Outlet } from 'react-router-dom'; 
 
const AdminDashboard = () => { 
  const theme = useTheme(); 
 
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100vw",
          bgcolor: theme.palette.grey[100],
          transition: "all 0.3s ease-in-out",
        }}
      >
        <NavbarAdmin />
        <Container
          maxWidth="100"
          sx={{
            mt: 4,
            mb: 4,
            flex: 1,
            animation: "fadeIn 0.5s ease-in",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              background: "linear-gradient(to right bottom, #ffffff, #fafafa)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              "&:hover": {
                boxShadow: "0 12px 48px rgba(0, 0, 0, 0.12)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                borderBottom: `2px solid ${theme.palette.primary.light}`,

                pb: 2,
                mb: 3,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  width: "60px",
                  height: "2px",
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            >
              Welcome ! Your gateway to access store data
              and statistics, product updates, and a seamless store management
              experience.
            </Typography>
            <Box
              sx={{
                mt: 3,
                position: "relative",
                "& > *": {
                  animation: "slideUp 0.5s ease-out",
                },
              }}
            >
              <Outlet />
            </Box>
          </Paper>
        </Container>

        <style>
          {` 
          @keyframes fadeIn { 
            from { opacity: 0; } 
            to { opacity: 1; } 
          } 
          @keyframes slideUp { 
            from { transform: translateY(20px); opacity: 0; } 
            to { transform: translateY(0); opacity: 1; } 
          } 
        `}
        </style>
      </Box>
    </>
  ); 
}; 
 
export default AdminDashboard;