import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

const ProductCardAdmin = ({ product, onDelete, onUpdate }) => {
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate(`/admin/dashboard/editproduct/${product.id}`);
  };

  const handleDeleteClick = () => {
    onDelete(product.id);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        transition: "all 0.3s ease-in-out",
        borderRadius: 2,
        backgroundColor: "background.paper",
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
        }}
      >
        <Typography
          variant="h6"
          component="div"
          gutterBottom
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

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Price: {product.price} SAR
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            minHeight: "4.5em",
          }}
        >
          Description: {product.description}
        </Typography>

        <Box display="flex" gap={1} mt={2}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handleUpdateClick}
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
            Edit
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleDeleteClick}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "secondary.dark",
                boxShadow: "0 8px 16px -8px rgba(0,0,0,0.4)",
              },
            }}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCardAdmin;
