import Container from "@mui/material/Container";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#0d1b2a", 
      light: "#274060", 
      dark: "#1b263b",
    },
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Box sx={{ py: 4 }}>
          <Paper elevation={3} sx={{ p: 8, borderRadius: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  component="h1"
                  color="primary.main"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Welcome to FitNest Home Gym Store!
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    bgcolor: "primary.light",
                    color: "white",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    Our Products..
                  </Typography>
                  <Typography>
                    <ul style={{ paddingLeft: "1.2rem" }}>
                      <li>
                        Weights and dumbbells in different sizes to boost your
                        strength.
                      </li>
                      <li>
                        Resistance training tools that help you improve your
                        fitness and build muscle.
                      </li>
                      <li>
                        Exercise equipment such as exercise bikes and rowing
                        machines.
                      </li>
                      <li>
                        Yoga supplies for exercises that help you relax and
                        balance.
                      </li>
                      <li>Fitness trackers that support your daily goals.</li>
                    </ul>
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    bgcolor: "secondary.light",
                    color: "white",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    Why FitNest?
                  </Typography>
                  <Typography>
                    <ul style={{ paddingLeft: "1.2rem" }}>
                      <li>
                        High Quality: We select products with high performance
                        and excellent quality.
                      </li>
                      <li>
                        Shopping Convenience: Browse our products from anywhere,
                        anytime.
                      </li>
                      <li>
                        Excellent Customer Service: We guarantee you a smooth
                        shopping experience and full support every step of the
                        way.
                      </li>
                    </ul>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
