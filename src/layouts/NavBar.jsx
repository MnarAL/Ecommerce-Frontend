import React from "react";

import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavBar = () => {
  const isAdmin = localStorage.getItem("admin") === "true";
  const isSignedIn = localStorage.getItem("login") === "true";
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-commerce App
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/signin">
          Sign In
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Sign Up
        </Button>
        <Button color="inherit" component={Link} to="/productList">
          Products List
        </Button>
        {isAdmin && (
          <Button color="inherit" component={Link} to="/admin/dashboard">
            Admin Dashboard
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};


export default NavBar;
