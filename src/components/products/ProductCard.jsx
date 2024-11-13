import React, { useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContexts";

const ProductCard = ({ product }) => {
  const { isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <Typography variant="h6">products are loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error.message}</Typography>;
  }

  const { cart, addToCart } = useContext(CartContext);
  const isInCart = cart.some((item) => item.id === product.id);
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/productdetails/${product.id}`);
  };
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        borderRadius: 2,
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="280"
        image={product.imageUrl || "https://via.placeholder.com/150"}
        alt={product.name}
        sx={{
          objectFit: "cover",
          transition: "transform 0.3s ease-in-out",
          backgroundColor: "#f5f5f5",
          p: 2,
          zIndex: -1,
        }}
      />
      <CardContent
        sx={{
          backgroundColor: "background.paper",
          borderTop: "1px solid",
          borderColor: "divider",
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 600,
            color: "primary.dark",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            minHeight: "3.6em",
          }}
        >
          {product.name}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "success.dark",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <span style={{ fontSize: "0.8em" }}>SAR</span>
          {product.price}
        </Typography>

        <div style={{ display: "flex", gap: "8px", mt: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handleDetailsClick}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "primary.light",
                color: "white",
                borderColor: "primary.light",
              },
            }}
          >
            More Details
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddToCart}
            disabled={isInCart}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              background: isInCart ? "grey.300" : "primary.main",
              "&:hover": {
                background: isInCart ? "grey.400" : "primary.dark",
                boxShadow: "0 8px 16px -8px rgba(0,0,0,0.4)",
              },
            }}
          >
            {isInCart ? "In Cart" : "Add to Cart"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
