import { Box, Container, Grid, Link, Typography } from "@mui/material";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import HearingIcon from "@mui/icons-material/Hearing";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <WheelchairPickupIcon sx={{ fontSize: 32, color: "#F2C800" }} />,
    title: "Wheelchair Accessible",
    description: "Our entrance, restrooms, and seating areas are fully wheelchair accessible.",
  },
  {
    icon: <ChildCareIcon sx={{ fontSize: 32, color: "#F2C800" }} />,
    title: "Child-Friendly Seating",
    description: "We offer highchairs, booster seats, and family-style seating for guests with young children.",
  },
  {
    icon: <HearingIcon sx={{ fontSize: 32, color: "#F2C800" }} />,
    title: "Quiet-Friendly Atmosphere",
    description: "We maintain a peaceful environment and are happy to accommodate guests with sensory needs whenever possible.",
  },
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 32, color: "#F2C800" }} />,
    title: "Flexible Layout",
    description: "Tables can be moved to accommodate mobility aids or larger parties with specific needs.",
  },
];

const Accessibility = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".a11y-header > *",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", delay: 0.1 }
      );

      // Feature cards stagger in
      gsap.fromTo(
        ".a11y-card",
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: ".a11y-card", start: "top 88%" },
        }
      );

      // CTA note
      gsap.fromTo(
        ".a11y-cta",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".a11y-cta", start: "top 92%" },
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
          <Box className="a11y-header">
            <Typography variant="overline" sx={{ color: "#F2C800", display: "block", mb: 1 }}>
              Inclusive & Welcoming
            </Typography>
            <Typography variant="h2" sx={{ color: "#DADAD2" }}>
              Accessibility &amp; Comfort
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#a6c9e3", mt: 2, maxWidth: 500, mx: "auto", fontFamily: '"Lato", sans-serif' }}
            >
              We're committed to making sure everyone in our community feels welcome and
              comfortable — no matter their age or ability.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Feature Cards ── */}
      <Box sx={{ py: { xs: 9, md: 12 }, backgroundColor: "#1A1D1F" }}>
        <Container maxWidth="md">
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {features.map(({ icon, title, description }) => (
              <Grid size={{ xs: 12, sm: 6 }} key={title}>
                <Box
                  className="a11y-card"
                  sx={{
                    backgroundColor: "#0D1B2A",
                    border: "1px solid #1A2A3A",
                    borderRadius: 3,
                    p: 4,
                    height: "100%",
                    transition: "box-shadow 0.25s ease",
                    "&:hover": { boxShadow: "0 8px 32px rgba(0,0,0,0.4)" },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{icon}</Box>
                  <Typography variant="h6" sx={{ color: "#DADAD2", mb: 1.5 }}>
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#a6c9e3", lineHeight: 1.75, fontFamily: '"Lato", sans-serif' }}
                  >
                    {description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* CTA note */}
          <Box
            className="a11y-cta"
            sx={{
              backgroundColor: "#0D1B2A",
              border: "1px solid #1A2A3A",
              borderLeft: "4px solid #0078B7",
              borderRadius: 2,
              p: 3.5,
              display: "flex",
              gap: 2,
              alignItems: "flex-start",
            }}
          >
            <PhoneIcon sx={{ color: "#0078B7", fontSize: 24, flexShrink: 0, mt: 0.2 }} />
            <Box>
              <Typography variant="subtitle1" sx={{ color: "#DADAD2", mb: 0.5 }}>
                Have accessibility questions?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#a6c9e3", lineHeight: 1.7, fontFamily: '"Lato", sans-serif' }}
              >
                Call us before your visit at{" "}
                <Link
                  href="tel:9417920030"
                  sx={{
                    color: "#0078B7", textDecoration: "none",
                    "&:hover": { color: "#F2C800" }, transition: "color 0.2s ease",
                  }}
                >
                  (941) 792-0030
                </Link>{" "}
                and we'll do everything we can to ensure a comfortable experience.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Accessibility;
