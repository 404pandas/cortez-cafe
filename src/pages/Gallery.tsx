import { Box, Container, Grid, Typography } from "@mui/material";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const galleryImages = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <Typography variant='h4' align='center' gutterBottom>
        📸 Our Cafe in Photos
      </Typography>
      <Typography
        variant='body1'
        align='center'
        color='text.primary'
        sx={{ mb: 5 }}
      >
        Take a peek inside the Cortez Cafe — our dishes, our space, and our
        community.
      </Typography>

      <Grid container spacing={4}>
        {galleryImages.map((src, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Box
              component='img'
              src={`${src}`}
              alt={`Gallery ${index + 1}`}
              sx={{
                width: "100%",
                height: 250,
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
