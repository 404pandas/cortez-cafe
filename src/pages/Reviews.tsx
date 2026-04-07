import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Allie K.",
    location: "Waukee, IA",
    meta: "2,400 reviews",
    date: "Mar 5, 2026",
    source: "Yelp",
    text: "If you are looking for a solid breakfast that feels like real food, this is your spot!! The girls there are incredibly sweet, great service even if you are just placing a pick up order. If you are dining in, you will get a real mom & pop restaurant experience. We have done both dine in and pickup multiple times, and recommend both options highly! It's fun to grab and go on your way to the beach, better than any breakfast on the island!",
  },
  {
    name: "Leese M.",
    location: "Hastings-on-Hudson, NY",
    meta: "41 Brunch reviews",
    date: "Oct 14, 2025",
    source: "Yelp",
    text: "This is a classic family owned truly local gem. It's clean and pleasantly decorated with a truly cute old school diner vibe. The staff are really friendly and they do above and beyond type service. The food is just really good down home cooking. Great place to have a meal and then get your super fresh seafood next door.",
  },
  {
    name: "Susan A.",
    location: "Gates, TN",
    meta: "8 Brunch reviews",
    date: "Aug 24, 2025",
    source: "Yelp",
    text: "Food was good. Service was good. Ambiance was good. I love this area and the traditional style of Cortez Cafe!",
  },
  {
    name: "Richard S.",
    location: "Local Guide",
    meta: "916 reviews · 37 photos",
    date: "Recently",
    source: "Google",
    text: "Large meal portions, which are very tasty. Excellent place for breakfast.",
  },
  {
    name: "Dontask M.",
    location: "Local Guide",
    meta: "32 reviews · 20 photos",
    date: "Recently",
    source: "Google",
    text: "Best homegrown breakfast in Manatee, located in Cortez Village, everything's fresh homemade, not a chain, been going here for over 30 years, Sam's been the owner for 25 years, a greatest establishment!",
  },
  {
    name: "Jennifer H.",
    location: "Local Guide",
    meta: "617 reviews · 134 photos",
    date: "3 weeks ago",
    source: "Google",
    text: "Breakfast until 2 PM or burgers, grilled cheese, salad, and more. Love it!! Go here, it's good....",
  },
  {
    name: "Cam L.",
    location: "Local Guide",
    meta: "150 reviews · 16 photos",
    date: "2 months ago",
    source: "Google",
    text: "This is a nice cafe. My first time there, definitely want to go back. The food was good, service was good — that's a quaint little cafe, nothing more than you could ask for.",
  },
  {
    name: "Doctor Badger",
    location: "Local Guide",
    meta: "294 reviews · 46 photos",
    date: "2 months ago",
    source: "Google",
    text: "This is old Cortez at its finest. The gals here are so friendly and efficient, while the owner looks on and keeps things rolling. The menu is large and everything is great. Their coffee is the best.",
  },
  {
    name: "colladolla",
    location: "Local Guide",
    meta: "41 reviews · 67 photos",
    date: "3 months ago",
    source: "Google",
    text: "Local spot. Locals are funny, friendly, and welcoming. Festive, fun, and great portion sizes and prices. Very attentive staff.",
  },
  {
    name: "Patrick C.",
    location: "Local Guide",
    meta: "45 reviews · 7 photos",
    date: "5 months ago",
    source: "Google",
    text: "Awesome dining experience... have made this my dad's, brother's, and my Friday breakfast place every Friday. If you go I would definitely recommend the corned beef hash.",
  },
];

const FiveStars = () => (
  <Box sx={{ display: "flex", gap: 0.25 }}>
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} sx={{ color: "#F2C800", fontSize: 16 }} />
    ))}
  </Box>
);

const Reviews = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".reviews-header > *",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", delay: 0.1 }
      );

      // Cards stagger in as the grid scrolls into view
      gsap.fromTo(
        ".review-card",
        { opacity: 0, y: 44, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65,
          stagger: { amount: 0.8, from: "start" },
          ease: "power2.out",
          scrollTrigger: { trigger: ".review-card", start: "top 88%" },
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
          <Box className="reviews-header">
            <Typography variant="overline" sx={{ color: "#F2C800", display: "block", mb: 1 }}>
              What People Say
            </Typography>
            <Typography variant="h2" sx={{ color: "#DADAD2" }}>
              Customer Reviews
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#a6c9e3", mt: 2, maxWidth: 460, mx: "auto", fontFamily: '"Lato", sans-serif' }}
            >
              Hear from the folks who make Cortez Café their home away from home.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Reviews Grid ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#1A1D1F" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {reviews.map((review, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box
                  className="review-card"
                  sx={{
                    backgroundColor: "#0D1B2A",
                    border: "1px solid #1A2A3A",
                    borderRadius: 3,
                    p: 3.5,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    transition: "box-shadow 0.25s ease",
                    "&:hover": { boxShadow: "0 8px 32px rgba(0,0,0,0.4)" },
                  }}
                >
                  <FormatQuoteIcon
                    sx={{ color: "rgba(242,200,0,0.08)", fontSize: 72, position: "absolute", top: 10, right: 12 }}
                  />

                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <FiveStars />
                    <Chip
                      label={review.source}
                      size="small"
                      sx={{
                        height: 20, fontSize: "0.62rem",
                        fontFamily: '"Lato", sans-serif', fontWeight: 700,
                        backgroundColor: review.source === "Yelp" ? "rgba(210,38,48,0.15)" : "rgba(66,133,244,0.15)",
                        color: review.source === "Yelp" ? "#E8544A" : "#6AA3F8",
                        border: `1px solid ${review.source === "Yelp" ? "rgba(210,38,48,0.3)" : "rgba(66,133,244,0.3)"}`,
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#a6c9e3", lineHeight: 1.75,
                      fontFamily: '"Lato", sans-serif', fontStyle: "italic",
                      flexGrow: 1, mb: 3,
                    }}
                  >
                    "{review.text}"
                  </Typography>

                  <Box sx={{ borderTop: "1px solid #1A2A3A", pt: 2, display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 38, height: 38, borderRadius: "50%",
                        backgroundColor: "#122949", border: "2px solid #F2C800",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#F2C800", fontWeight: 700,
                          fontFamily: '"Playfair Display", Georgia, serif',
                          fontSize: "0.95rem", textTransform: "uppercase",
                        }}
                      >
                        {review.name.charAt(0)}
                      </Typography>
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#DADAD2", fontFamily: '"Lato", sans-serif', fontWeight: 700, lineHeight: 1.2 }}
                      >
                        {review.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#3A5870", fontFamily: '"Lato", sans-serif', display: "block", lineHeight: 1.3 }}
                      >
                        {review.location}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#2A4050", fontFamily: '"Lato", sans-serif', display: "block", lineHeight: 1.3 }}
                      >
                        {review.meta} · {review.date}
                      </Typography>
                    </Box>
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

export default Reviews;
