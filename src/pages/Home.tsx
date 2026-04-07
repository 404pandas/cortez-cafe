import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import hero from "../assets/hero.jpg";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero — stagger headline, subline, buttons up from below
      gsap.fromTo(
        ".hero-content > *",
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.18, ease: "power3.out", delay: 0.2 }
      );

      // Info strip — fade each cell in with slight upward motion
      gsap.fromTo(
        ".strip-cell",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: stripRef.current, start: "top 90%" },
        }
      );

      // About section — image slides from right, text from left
      gsap.fromTo(
        ".about-text",
        { opacity: 0, x: -48 },
        {
          opacity: 1, x: 0, duration: 0.85, ease: "power2.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 82%" },
        }
      );
      gsap.fromTo(
        ".about-img",
        { opacity: 0, x: 48 },
        {
          opacity: 1, x: 0, duration: 0.85, ease: "power2.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 82%" },
        }
      );

      // Gallery — heading then images stagger
      gsap.fromTo(
        ".gallery-heading",
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: galleryRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".gallery-img",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 0.65, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: ".gallery-img", start: "top 88%" },
        }
      );
      gsap.fromTo(
        ".gallery-cta",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: ".gallery-cta", start: "top 92%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        ref={heroRef}
        sx={{
          position: "relative",
          minHeight: { xs: "72vh", md: "86vh" },
          display: "flex",
          alignItems: "flex-end",
          pb: { xs: 7, md: 11 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(1,3,2,0.90) 0%, rgba(1,3,2,0.50) 45%, rgba(1,3,2,0.15) 100%)",
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box className="hero-content">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.6rem", sm: "3.6rem", md: "4.8rem" },
                color: "#DADAD2",
                lineHeight: 1.1,
                maxWidth: 720,
                mb: 2,
              }}
            >
              A Taste of Cortez{" "}
              <Box component="span" sx={{ color: "#F2C800", fontStyle: "italic" }}>
                Since the 70s
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#8BAFC4",
                fontWeight: 300,
                fontFamily: '"Lato", sans-serif',
                maxWidth: 500,
                mb: 5,
                lineHeight: 1.6,
              }}
            >
              Fresh breakfast and lunch, served daily in the heart of Cortez, FL.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                component={Link}
                to="/menu"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ px: 4, py: 1.5, color: "#010302", fontWeight: 700, fontSize: "1rem" }}
              >
                View Our Menu
              </Button>
              <Button
                component={Link}
                to="/about-us"
                variant="outlined"
                size="large"
                sx={{
                  px: 4, py: 1.5, fontSize: "1rem",
                  borderColor: "rgba(255,255,255,0.35)", color: "#DADAD2",
                  "&:hover": { borderColor: "#F2C800", color: "#F2C800", backgroundColor: "transparent" },
                }}
              >
                Our Story
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Quick Info Strip ── */}
      <Box
        ref={stripRef}
        sx={{
          backgroundColor: "#0D1B2A",
          borderTop: "1px solid #1A2A3A",
          borderBottom: "1px solid #1A2A3A",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {[
              {
                icon: <AccessTimeIcon sx={{ color: "#F2C800", fontSize: 22 }} />,
                label: "Hours",
                value: "Open Daily  6:30 AM – 2:00 PM",
                justify: "flex-start",
              },
              {
                icon: <LocationOnIcon sx={{ color: "#F2C800", fontSize: 22 }} />,
                label: "Location",
                value: "12108 Cortez Rd W, Cortez, FL",
                justify: "center",
              },
              {
                icon: <PhoneIcon sx={{ color: "#F2C800", fontSize: 22 }} />,
                label: "Phone",
                value: "(941) 792-0030",
                justify: "flex-end",
              },
            ].map(({ icon, label, value, justify }, i) => (
              <Grid size={{ xs: 12, sm: 4 }} key={i}>
                <Box
                  className="strip-cell"
                  sx={{
                    display: "flex", alignItems: "center", gap: 1.5,
                    justifyContent: { xs: "center", sm: justify },
                  }}
                >
                  {icon}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.62rem", color: "#4A6070",
                        textTransform: "uppercase", letterSpacing: "0.12em",
                        fontFamily: '"Lato", sans-serif',
                      }}
                    >
                      {label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#DADAD2", fontWeight: 600 }}>
                      {value}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── About Teaser ── */}
      <Box ref={aboutRef} sx={{ py: { xs: 9, md: 14 }, backgroundColor: "#1A1D1F", overflow: "hidden" }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} className="about-text">
              <Typography variant="overline" sx={{ color: "#F2C800", display: "block", mb: 1 }}>
                Our Story
              </Typography>
              <Typography variant="h3" sx={{ color: "#DADAD2", mb: 3 }}>
                More Than Just a Meal
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#8BAFC4", lineHeight: 1.85, mb: 2, fontFamily: '"Lato", sans-serif' }}
              >
                Nestled in the historic fishing village of Cortez, Florida, our café has been a
                beloved gathering spot since the 1970s. Originally a haven for local fishermen,
                we've kept our warm, welcoming atmosphere alive through the decades.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#8BAFC4", lineHeight: 1.85, mb: 4, fontFamily: '"Lato", sans-serif' }}
              >
                In 2002, Sam Varelis took over, bringing a passion for home-style cooking and
                community. Generous portions, friendly faces, and made-from-scratch recipes every
                single day.
              </Typography>
              <Button component={Link} to="/about-us" variant="outlined" color="secondary" sx={{ px: 3.5 }}>
                Read Our History
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} className="about-img">
              <Box
                component="img"
                src={img1}
                alt="Inside Cortez Café"
                sx={{
                  width: "100%",
                  height: { xs: 280, md: 420 },
                  objectFit: "cover",
                  borderRadius: 3,
                  boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Gallery Teaser ── */}
      <Box ref={galleryRef} sx={{ py: { xs: 9, md: 14 }, backgroundColor: "#141618" }}>
        <Container maxWidth="lg">
          <Box className="gallery-heading" sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="overline" sx={{ color: "#F2C800", display: "block", mb: 1 }}>
              Gallery
            </Typography>
            <Typography variant="h3" sx={{ color: "#DADAD2" }}>
              From the Griddle to Your Table
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ mb: 5 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component="img"
                src={img2}
                alt="Café food"
                className="gallery-img"
                sx={{
                  width: "100%", height: { xs: 220, md: 360 },
                  objectFit: "cover", borderRadius: 2, display: "block",
                  transition: "transform 0.35s ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component="img"
                src={img3}
                alt="Café atmosphere"
                className="gallery-img"
                sx={{
                  width: "100%", height: { xs: 220, md: 360 },
                  objectFit: "cover", borderRadius: 2, display: "block",
                  transition: "transform 0.35s ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              />
            </Grid>
          </Grid>
          <Box className="gallery-cta" sx={{ textAlign: "center" }}>
            <Button
              component={Link} to="/gallery"
              variant="contained" color="secondary" size="large"
              sx={{ color: "#010302", fontWeight: 700, px: 5 }}
            >
              Browse Gallery
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
