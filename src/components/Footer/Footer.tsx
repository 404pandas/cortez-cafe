import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About Us", path: "/about-us" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact-us" },
  { label: "Accessibility", path: "/accessibility" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0D1B2A",
        borderTop: "3px solid #F2C800",
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              sx={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontStyle: "italic",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#F2C800",
                lineHeight: 1.1,
                mb: 1,
              }}
            >
              Cortez Café
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#a6c9e3", mb: 2.5, maxWidth: 290, lineHeight: 1.7 }}
            >
              A beloved gathering spot in the heart of Cortez, FL. Fresh
              breakfast and lunch served daily since the 1970s.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccessTimeIcon sx={{ color: "#F2C800", fontSize: 16 }} />
              <Typography variant="body2" sx={{ color: "#A0B4C4" }}>
                Open Daily: 6:30 AM – 2:00 PM
              </Typography>
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid size={{ xs: 6, md: 4 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#F2C800",
                display: "block",
                mb: 2,
                fontSize: "0.7rem",
              }}
            >
              Navigation
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {navLinks.map(({ label, path }) => (
                <Link
                  key={label}
                  component={RouterLink}
                  to={path}
                  sx={{
                    color: "#7A90A0",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontFamily: '"Lato", sans-serif',
                    transition: "color 0.2s ease",
                    "&:hover": { color: "#F2C800" },
                  }}
                >
                  {label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 6, md: 4 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#F2C800",
                display: "block",
                mb: 2,
                fontSize: "0.7rem",
              }}
            >
              Find Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                <LocationOnIcon
                  sx={{ color: "#0078B7", fontSize: 18, mt: 0.15, flexShrink: 0 }}
                />
                <Typography variant="body2" sx={{ color: "#A0B4C4", lineHeight: 1.6 }}>
                  12108 Cortez Rd W
                  <br />
                  Cortez, FL 34215
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <PhoneIcon
                  sx={{ color: "#0078B7", fontSize: 18, flexShrink: 0 }}
                />
                <Link
                  href="tel:9417920030"
                  sx={{
                    color: "#A0B4C4",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontFamily: '"Lato", sans-serif',
                    transition: "color 0.2s ease",
                    "&:hover": { color: "#F2C800" },
                  }}
                >
                  (941) 792-0030
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "#1A2A3A", my: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: "#2E4050" }}>
            &copy; {new Date().getFullYear()} Cortez Café. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: "#2E4050" }}>
            Made with &hearts; by{" "}
            <Link
              href="https://www.maryelenius.com"
              target="_blank"
              rel="noopener"
              sx={{
                color: "#F2C800",
                textDecoration: "none",
                "&:hover": { color: "#FFD800" },
              }}
            >
              Mary Elenius
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
