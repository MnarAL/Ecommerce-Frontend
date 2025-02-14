import React, { useContext, useState } from "react";

import {
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  TextField,
  IconButton,
  Divider,
  Container,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";

import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);


  // Track address state
  const [address, setAddress] = useState("");
  const [addressEditing, setAddressEditing] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressUpdate = () => {
    setAddressEditing(false);
  };

  const increaseQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const decreaseQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  return (

    <Container maxWidth="100%"> 
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column: Cart Items */}
        <Grid size={{ xs: 12, md: 8 }}>
          {cart.length === 0 ? (
            <Typography variant="h6">Your cart is empty</Typography>
          ) : (
            <>
              {/* Clear Cart Button at the top */}
              <Button
                variant="contained"
                color="primary"
                onClick={clearCart}
                sx={{ marginBottom: 2 }}
              >
                Clear Cart
              </Button>

              {cart.map((item) => (
                <Card
                  sx={{ display: "flex", marginBottom: 2, padding: 2 }}
                  key={item.id}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 120,
                      height: 120,
                      objectFit: "cover",
                      borderRadius: 1,
                    }}
                    image={item.imageUrl} 
                    alt={item.name}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      paddingLeft: 2,
                      flex: 1,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2">
                      Price: ${item.price.toFixed(2)}
                    </Typography>
                    {/* Quantity Control */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 1,
                      }}
                    >
                      <IconButton
                        onClick={() => decreaseQuantity(item.id)}
                        color="primary"
                        size="small"
                      >
                        <Remove />
                      </IconButton>
                      <Typography variant="body2" sx={{ margin: "0 8px" }}>
                        Quantity: {item.quantity}
                      </Typography>
                      <IconButton
                        onClick={() => increaseQuantity(item.id)}
                        color="primary"
                        size="small"
                      >
                        <Add />
                      </IconButton>
                    </Box>
                    {/* Remove Button with Icon */}
                    <IconButton
                      variant="contained"
                      color="error"
                      onClick={() => removeFromCart(item.id)}
                      sx={{ marginTop: 2, alignSelf: "flex-start" }}
                    >
                      <Delete />
                    </IconButton>
                  </CardContent>
                </Card>
              ))}
            </>
          )}
        </Grid>

        {/* Right Column: Summary and Address */}
        <Grid size={{ xs: 12, md: 4 }}>
          {cart.length > 0 && (
            <Box sx={{ padding: 2, border: "1px solid #ddd", borderRadius: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Order Summary
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Total Price: ${totalPrice.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Proceed to Payment
              </Button>

              {/* Address Update Section */}
              <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Shipping Address
                </Typography>
                {addressEditing ? (
                  <Box sx={{ marginTop: 2 }}>
                    <TextField
                      fullWidth
                      label="Enter your address"
                      value={address}
                      onChange={handleAddressChange}
                      variant="outlined"
                      sx={{ marginBottom: 2 }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleAddressUpdate}
                    >
                      Update Address
                    </Button>
                  </Box>
                ) : (
                  <Box sx={{ marginTop: 2 }}>
                    <Typography variant="body1">
                      {address || "No address provided yet"}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ marginTop: 1 }}
                      onClick={() => setAddressEditing(true)}
                    >
                      Edit Address
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
    </Container> 
  );
};

export default Cart;
