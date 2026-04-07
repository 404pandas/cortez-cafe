import { Box, Container, Grid, Link, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactRow = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
    <Box
      sx={{
        width: 44, height: 44, borderRadius: 2,
        backgroundColor: "#122949", border: "1px solid #1A2A3A",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}
    >
      {icon}
    </Box>
    <Box>
      <Typography
        sx={{
          fontSize: "0.65rem", color: "#4A6070", textTransform: "uppercase",
          letterSpacing: "0.12em", fontFamily: '"Lato", sans-serif', mb: 0.25,
        }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  </Box>
);

const Contact = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".contact-header > *",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", delay: 0.1 }
      );

      // "Visit Us" heading
      gsap.fromTo(
        ".contact-title",
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".contact-title", start: "top 88%" },
        }
      );

      // Contact rows stagger up
      gsap.fromTo(
        ".contact-row",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: ".contact-row", start: "top 88%" },
        }
      );

      // Map slides in from right
      gsap.fromTo(
        ".contact-map",
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0, duration: 0.85, ease: "power2.out",
          scrollTrigger: { trigger: ".contact-map", start: "top 85%" },
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
          <Box className="contact-header">
            <Typography variant="overline" sx={{ color: "#F2C800", display: "block", mb: 1 }}>
              Get in Touch
            </Typography>
            <Typography variant="h2" sx={{ color: "#DADAD2" }}>
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#a6c9e3", mt: 2, maxWidth: 420, mx: "auto", fontFamily: '"Lato", sans-serif' }}
            >
              We're open every day and love seeing new faces. Stop by or give us a call.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Content ── */}
      <Box sx={{ py: { xs: 9, md: 12 }, backgroundColor: "#1A1D1F" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="flex-start">
            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography className="contact-title" variant="h4" sx={{ color: "#DADAD2", mb: 4 }}>
                Visit Us
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
                <Box className="contact-row">
                  <ContactRow
                    icon={<LocationOnIcon sx={{ color: "#F2C800", fontSize: 22 }} />}
                    label="Address"
                  >
                    <Typography variant="body1" sx={{ color: "#DADAD2", lineHeight: 1.6 }}>
                      12108 Cortez Rd W<br />Cortez, FL 34215
                    </Typography>
                  </ContactRow>
                </Box>
                <Box className="contact-row">
                  <ContactRow
                    icon={<PhoneIcon sx={{ color: "#F2C800", fontSize: 22 }} />}
                    label="Phone"
                  >
                    <Link
                      href="tel:9417920030"
                      sx={{
                        color: "#DADAD2", textDecoration: "none",
                        fontSize: "1rem", fontFamily: '"Lato", sans-serif',
                        transition: "color 0.2s ease",
                        "&:hover": { color: "#F2C800" },
                      }}
                    >
                      (941) 792-0030
                    </Link>
                  </ContactRow>
                </Box>
                <Box className="contact-row">
                  <ContactRow
                    icon={<AccessTimeIcon sx={{ color: "#F2C800", fontSize: 22 }} />}
                    label="Hours"
                  >
                    <Typography variant="body1" sx={{ color: "#DADAD2", lineHeight: 1.6 }}>
                      Open Daily<br />
                      <Box component="span" sx={{ color: "#F2C800", fontWeight: 700 }}>
                        6:30 AM – 2:00 PM
                      </Box>
                    </Typography>
                  </ContactRow>
                </Box>
              </Box>
            </Grid>

            {/* Map */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                className="contact-map"
                sx={{
                  borderRadius: 3, overflow: "hidden",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
                  border: "1px solid #1A2A3A",
                  height: { xs: 280, sm: 360, md: 400 },
                }}
              >
                <iframe
                  title="Map showing Cortez Café at 12108 Cortez Rd W, Cortez, FL 34215"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-82.6480%2C27.4718%2C-82.6280%2C27.4818&layer=mapnik&marker=27.4768%2C-82.6380"
                />
              </Box>
              <Box sx={{ mt: 1.5, textAlign: "right" }}>
                <Link
                  href="https://www.google.com/maps/dir/?api=1&destination=12108+Cortez+Rd+W,Cortez,FL+34215"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontSize: "0.8rem", color: "#4A8FAA",
                    fontFamily: '"Lato", sans-serif', textDecoration: "none",
                    "&:hover": { color: "#F2C800" }, transition: "color 0.2s ease",
                  }}
                >
                  Get directions in Google Maps →
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
