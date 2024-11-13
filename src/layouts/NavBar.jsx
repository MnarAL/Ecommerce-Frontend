import React from "react";

import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
    },
  },
});

const NavBar = () => {
  const isAdmin = localStorage.getItem("admin") === "true";
  const isSignedIn = localStorage.getItem("login") === "true";

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(45deg, #1976d2 30%, #1565c0 90%)",
          boxShadow: "0 3px 5px 2px rgba(33, 150, 243, .3)",
        }}
      >
        <Toolbar>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
          >
            FitNest App
          </Typography> */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "scale(1.05)",
                  transition: "all 0.2s",
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/signin"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "scale(1.05)",
                  transition: "all 0.2s",
                },
              }}
            >
              Sign In
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/signup"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "scale(1.05)",
                  transition: "all 0.2s",
                },
              }}
            >
              Sign Up
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/cart"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "scale(1.05)",
                  transition: "all 0.2s",
                },
              }}
            >
              Cart
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/productList"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "scale(1.05)",
                  transition: "all 0.2s",
                },
              }}
            >
              Products List
            </Button>
            {isAdmin && (
              <Button
                color="primary"
                variant="contained"
                component={Link}
                to="/admin/dashboard"
                sx={{
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "all 0.2s",
                  },
                }}
              >
                Admin Dashboard
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
