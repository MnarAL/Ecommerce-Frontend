import React from "react";
import { Badge, IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCart from "../../hooks/useCart";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "relative",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.1)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    fontWeight: "bold",
    minWidth: "20px",
    height: "20px",
    padding: "0 4px",
    fontSize: "0.75rem",
  },
}));

const CartIcon = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <StyledIconButton
      aria-label="shopping cart"
      sx={{
        mr: 2,
      }}
    >
      <StyledBadge badgeContent={itemCount} max={99} overlap="circular">
        <ShoppingCartIcon
          sx={{
            color: "white",
            fontSize: "1.75rem",
            filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
          }}
        />
      </StyledBadge>
    </StyledIconButton>
  );
};

export default CartIcon;
