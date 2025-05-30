import { Box, Container, Grid, Typography } from "@mui/material";

const galleryImages = [
  "./assets/1.jpg",
  "./assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
  "/assets/5.jpg",
  "/assets/6.jpg",
];

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
              src={`url('${src}')`}
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
