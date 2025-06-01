import { Box, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{ mt: 8, p: 4, py: 6, backgroundColor: "#122949", color: "#DADAD2" }}
    >
      <Grid container spacing={4} justifyContent='space-between'>
        <Grid sx={{ xs: 12, md: 6 }}>
          <Typography variant='h6' gutterBottom>
            Cortez Cafe
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Link
              component={RouterLink}
              to='/'
              color='inherit'
              underline='hover'
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to='/menu'
              color='inherit'
              underline='hover'
            >
              Menu
            </Link>
            <Link
              component={RouterLink}
              to='/about-us'
              color='inherit'
              underline='hover'
            >
              About
            </Link>
            <Link
              component={RouterLink}
              to='/gallery'
              color='inherit'
              underline='hover'
            >
              Gallery
            </Link>
            <Link
              component={RouterLink}
              to='/contact-us'
              color='inherit'
              underline='hover'
            >
              Contact
            </Link>
            <Link
              component={RouterLink}
              to='/accessibility'
              color='inherit'
              underline='hover'
            >
              Accessibility
            </Link>
          </Box>
        </Grid>

        <Grid sx={{ xs: 12, md: 6 }} textAlign={{ xs: "left", md: "right" }}>
          <Typography variant='body2'>
            Made with ❤️ by{" "}
            <Link
              href='https://www.maryelenius.com'
              target='_blank'
              rel='noopener'
              color='secondary'
            >
              Mary Elenius
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
