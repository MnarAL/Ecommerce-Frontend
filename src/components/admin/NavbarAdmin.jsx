import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
  marginLeft: "20px",
});

const NavbarAdmin = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
      <Container>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "primary",
            }}
          >
            Admin Dashboard
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              component={StyledLink}
              to="/"
              startIcon={<HomeIcon />}
              sx={{
                backgroundColor: "#42a5f5",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              Home
            </Button>

            <Button
              component={StyledLink}
              to="/admin/dashboard/add-product"
              startIcon={<AddCircleIcon />}
              sx={{
                backgroundColor: "#42a5f5",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              Add Product
            </Button>

            <Button
              component={StyledLink}
              to="/admin/dashboard/admin-productslist"
              startIcon={<ListAltIcon />}
              sx={{
                backgroundColor: "#42a5f5",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              Products List
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarAdmin;
