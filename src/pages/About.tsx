import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import parkingArea from "../assets/the-parking-area.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page header
      gsap.fromTo(
        ".about-header > *",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", delay: 0.1 }
      );

      // Origin story — text left, image right
      gsap.fromTo(
        ".origin-text",
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.85, ease: "power2.out",
          scrollTrigger: { trigger: ".origin-text", start: "top 84%" },
        }
      );
      gsap.fromTo(
        ".origin-img",
        { opacity: 0, x: 50, scale: 0.97 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.85, ease: "power2.out",
          scrollTrigger: { trigger: ".origin-img", start: "top 84%" },
        }
      );

      // Legacy / Commitment columns stagger
      gsap.fromTo(
        ".story-col",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: ".story-col", start: "top 86%" },
        }
      );

      // Info cards
      gsap.fromTo(
        ".info-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: ".info-card", start: "top 90%" },
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
          <Box className="about-header">
            <Typography variant="overline" sx={{ color: "#F2C800", display: "block", mb: 1 }}>
              Our Story
            </Typography>
            <Typography variant="h2" sx={{ color: "#DADAD2" }}>
              About Cortez Café
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#a6c9e3", mt: 2, maxWidth: 480, mx: "auto", fontFamily: '"Lato", sans-serif' }}
            >
              A historic gathering spot in the heart of Florida's last working fishing village.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Main Content ── */}
      <Box sx={{ py: { xs: 9, md: 13 }, backgroundColor: "#1A1D1F", overflow: "hidden" }}>
        <Container maxWidth="lg">
          {/* Origin Story */}
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" sx={{ mb: { xs: 8, md: 12 } }}>
            <Grid size={{ xs: 12, md: 6 }} className="origin-text">
              <Typography variant="h3" sx={{ color: "#DADAD2", mb: 3 }}>
                A Place to Gather Since the 70s
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#8BAFC4", lineHeight: 1.9, mb: 2.5, fontFamily: '"Lato", sans-serif' }}
              >
                Nestled in the heart of the historic fishing village of Cortez, Florida, Cortez
                Café has been a beloved gathering spot since the 1970s. Originally a haven for
                local fishermen to share stories over hearty breakfasts and bottomless coffee,
                the café has maintained its warm, welcoming atmosphere through the decades.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#8BAFC4", lineHeight: 1.9, fontFamily: '"Lato", sans-serif' }}
              >
                It's common to see locals and tourists sharing tables, engaging in conversations
                that span from fishing tales to daily news. The café serves as a community hub
                where friendships are forged over plates of fluffy pancakes, savory omelets, and
                homemade pies crafted from cherished family recipes.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} className="origin-img">
              <Box
                component="img"
                src={parkingArea}
                alt="Cortez Café exterior"
                sx={{
                  width: "100%", height: { xs: 260, md: 400 },
                  objectFit: "cover", borderRadius: 3,
                  boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                }}
              />
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: "#1A2A3A" }} />

          {/* Legacy & Commitment */}
          <Grid container spacing={6} sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 6, md: 10 } }}>
            <Grid size={{ xs: 12, md: 6 }} className="story-col">
              <Box sx={{ borderLeft: "3px solid #F2C800", pl: 3, mb: 2 }}>
                <Typography variant="h4" sx={{ color: "#F2C800" }}>
                  A Legacy of Hospitality
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "#8BAFC4", lineHeight: 1.9, fontFamily: '"Lato", sans-serif' }}
              >
                In 2002, Sam Varelis took over the café, bringing with him a passion for
                home-style cooking and community. He expanded the space in 2003, nearly doubling
                its size, yet preserving its cozy charm. His dedication to generous portions and
                friendly service has turned first-time visitors into lifelong regulars.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} className="story-col">
              <Box sx={{ borderLeft: "3px solid #0078B7", pl: 3, mb: 2 }}>
                <Typography variant="h4" sx={{ color: "#DADAD2" }}>
                  Our Commitment to You
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "#8BAFC4", lineHeight: 1.9, fontFamily: '"Lato", sans-serif' }}
              >
                We take pride in offering a menu filled with comfort foods made from scratch
                daily. From juicy Angus burgers to Greek specialties, every dish is prepared
                with care and served with a smile. Our goal is to provide a dining experience
                that feels like home, whether you're a longtime resident or a first-time guest.
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: "#1A2A3A" }} />

          {/* Info Cards */}
          <Grid container spacing={3} sx={{ mt: { xs: 6, md: 8 } }}>
            {[
              {
                icon: <AccessTimeIcon sx={{ color: "#F2C800", fontSize: 30, flexShrink: 0, mt: 0.3 }} />,
                title: "Hours",
                sub: "Open Every Day",
                value: "6:30 AM – 2:00 PM",
                gold: true,
              },
              {
                icon: <LocationOnIcon sx={{ color: "#F2C800", fontSize: 30, flexShrink: 0, mt: 0.3 }} />,
                title: "Address",
                sub: "12108 Cortez Rd W",
                value: "Cortez, FL 34215",
                gold: false,
              },
            ].map(({ icon, title, sub, value, gold }) => (
              <Grid size={{ xs: 12, sm: 6 }} key={title}>
                <Box
                  className="info-card"
                  sx={{
                    backgroundColor: "#0D1B2A",
                    border: "1px solid #1A2A3A",
                    borderRadius: 3,
                    p: 3.5,
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
                  }}
                >
                  {icon}
                  <Box>
                    <Typography variant="h6" sx={{ color: "#DADAD2", mb: 0.5 }}>{title}</Typography>
                    <Typography variant="body2" sx={{ color: "#a6c9e3", mb: 0.25 }}>{sub}</Typography>
                    <Typography variant="body1" sx={{ color: gold ? "#F2C800" : "#DADAD2", fontWeight: gold ? 700 : 400 }}>
                      {value}
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

export default About;
