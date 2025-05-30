import { Box, Container, Typography, Grid } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth='md' sx={{ py: 8 }}>
      <Typography variant='h4' align='center' gutterBottom>
        ☕ Contact Cortez Cafe
      </Typography>
      <Typography
        variant='body1'
        align='center'
        color='text.primary'
        sx={{ mb: 5 }}
      >
        We’re open every day and love seeing new faces. Feel free to stop by or
        give us a call.
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h6'>📍 Address</Typography>
          <Typography variant='body1' sx={{ mb: 2 }}>
            12108 Cortez Rd W
            <br />
            Cortez, FL 34215
          </Typography>

          <Typography variant='h6'>📞 Phone</Typography>
          <Typography variant='body1' sx={{ mb: 2 }}>
            (941) 792-0030
          </Typography>

          <Typography variant='h6'>⏰ Hours</Typography>
          <Typography variant='body1'>Open Daily: 6:30 AM – 2:00 PM</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              height: { xs: 250, md: 300 },
            }}
          >
            <iframe
              title='Google Map'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              loading='lazy'
              allowFullScreen
              referrerPolicy='no-referrer-when-downgrade'
              src={`https://www.google.com/maps/embed/v1/place?key=${
                import.meta.env.VITE_GOOGLE_MAPS_API_KEY
              }&q=12108+Cortez+Rd+W,Cortez,FL+34215`}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
