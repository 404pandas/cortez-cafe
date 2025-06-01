import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import hero from "../assets/hero.jpg";

const Home = () => {
  return (
    <Container maxWidth='lg' sx={{ mt: 8, mb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "60vh",
          borderRadius: 3,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxShadow: 3,
        }}
      >
        {/* Background Image Layer */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) brightness(0.8)",
            transition: "filter 0.5s ease",
            zIndex: 1,
            "&:hover": {
              filter: "grayscale(0%) brightness(1)",
            },
          }}
          className='hero-image-layer'
        />

        {/* Overlay Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            variant='h2'
            component='h1'
            sx={{ fontWeight: 700 }}
            color='secondary'
          >
            Welcome to Cortez Cafe
          </Typography>
          <Typography variant='h5' sx={{ mt: 2 }} color='info'>
            Locally loved. Family owned. Serving homemade breakfasts & lunch
            daily.
          </Typography>
          <Button
            component={Link}
            to='/menu'
            variant='contained'
            color='secondary'
            sx={{
              mt: 4,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
            }}
          >
            View Menu
          </Button>
        </Box>
      </Box>
      {/* About Snippet */}
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant='h4' gutterBottom>
          A Taste of Cortez Since the 70s
        </Typography>
        <Typography variant='body1' maxWidth='md' mx='auto'>
          Cortez Cafe has been a staple in the Cortez community for decades,
          known for its generous portions, friendly service, and fresh
          home-cooked meals. Whether you're starting your day with a hearty
          breakfast or stopping in for lunch, you'll feel right at home.
        </Typography>
        <Button
          className='button'
          component={Link}
          to='/about-us'
          variant='outlined'
          sx={{ mt: 3 }}
        >
          Learn More
        </Button>
      </Box>
      {/* Gallery Teaser */}
      <Box sx={{ mt: 12, textAlign: "center" }}>
        <Typography variant='h4' gutterBottom>
          From the Griddle to Your Table
        </Typography>
        <Typography variant='body2' maxWidth='md' mx='auto'>
          Check out some of our fan-favorite dishes in the photo gallery.
        </Typography>
        <Button component={Link} to='/gallery' variant='text' sx={{ mt: 2 }}>
          Browse Gallery →
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
