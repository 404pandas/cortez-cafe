import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: img1, alt: "Cortez Café interior" },
  { src: img2, alt: "Fresh breakfast plates" },
  { src: img3, alt: "Café atmosphere" },
  { src: img4, alt: "Lunch offerings" },
  { src: img5, alt: "Community gathering" },
  { src: img6, alt: "Homemade dishes" },
];

const Gallery = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".gallery-header > *",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", delay: 0.1 }
      );

      // Grid images stagger in with scale + fade as they scroll into view
      gsap.fromTo(
        ".gallery-cell",
        { opacity: 0, scale: 0.92, y: 30 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.65, stagger: { amount: 0.6, from: "start" },
          ease: "power2.out",
          scrollTrigger: { trigger: ".gallery-cell", start: "top 88%" },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box ref={pageRef}>
      {/* ── Page Header ── */}
      <Box
        sx={{
          backgroundColor: "#0D1B2A",
          py: { xs: 7, md: 10 },
          borderBottom: "1px solid #1A2A3A",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Box className="gallery-header">
            <Typography variant="overline" sx={{ color: "#F2C800", display: "block", mb: 1 }}>
              Photos
            </Typography>
            <Typography variant="h2" sx={{ color: "#DADAD2" }}>
              Our Café in Photos
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#a6c9e3", mt: 2, maxWidth: 460, mx: "auto", fontFamily: '"Lato", sans-serif' }}
            >
              A peek inside Cortez Café — our dishes, our space, and our community.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Gallery Grid ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#1A1D1F" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {galleryImages.map(({ src, alt }, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box
                  className="gallery-cell"
                  sx={{
                    position: "relative",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                    cursor: "pointer",
                    "&:hover .img-overlay": { opacity: 1 },
                    "&:hover img": { transform: "scale(1.06)" },
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={alt}
                    sx={{
                      width: "100%",
                      height: { xs: 240, sm: 260, md: 280 },
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <Box
                    className="img-overlay"
                    sx={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)",
                      opacity: 0, transition: "opacity 0.35s ease",
                      display: "flex", alignItems: "flex-end", p: 2,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#DADAD2", fontFamily: '"Playfair Display", Georgia, serif', fontStyle: "italic" }}
                    >
                      {alt}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Gallery;
