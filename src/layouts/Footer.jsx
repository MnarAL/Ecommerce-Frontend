import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1976d2",
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            © {new Date().getFullYear()} All rights reserved.
          </Typography>

          <Stack direction="row" spacing={2}>
            <IconButton color="inherit" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
