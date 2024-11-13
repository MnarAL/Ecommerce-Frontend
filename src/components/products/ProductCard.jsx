import React, { useContext } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContexts';

const ProductCard = ({product}) => {
  const { isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <Typography variant="h6">products are loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error.message}</Typography>;
  }

  const { cart, addToCart } = useContext(CartContext);

  // Check if the product is already in the cart
  const isInCart = cart.some((item) => item.id === product.id);
   const navigate = useNavigate();

   const handleDetailsClick = () => {
     navigate(`/productdetails/${product.id}`);
   };
   const handleAddToCart = () => {
    addToCart(product);
   };
  return (
    <div>
      <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Product Image */}
        <CardMedia
          component="img"
          height="180"
          image={product.image || "https://via.placeholder.com/150"}
          alt={product.name}
          sx={{ objectFit: "cover" }}
        />

        <CardContent
          sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        >
          {/* Product Name */}
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            color="primary"
            fontWeight="bold"
          >
            {product.name}
          </Typography>

      
         

          {/* Product Price */}
          <Typography
            variant="subtitle1"
            color="text.primary"
            fontWeight="medium"
          >
            Price: ${product.price.toFixed(2)}
          </Typography>

          

          {/* Add To Cart Button
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ marginTop: "16px" }}
            onClick={() => addToCart(product)}
           // Disable button if product is in cart
          >
            {isInCart ? "Already in Cart" : "Add To Cart"}
          </Button> */}
        </CardContent>
      </Card>
      <li key={product.id}>
        <img src={product.imageUrl} alt="pro" />
        <h3>{product.name}</h3>
        <p>Prics: {product.price} SAR</p>
        <button onClick={handleDetailsClick}>more deatils</button>
        <button onClick={handleAddToCart}>Add to catr</button>
      </li>
    </div>
  );
}

export default ProductCard
