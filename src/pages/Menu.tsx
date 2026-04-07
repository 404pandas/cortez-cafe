import {
  Box,
  Container,
  Divider,
  Typography,
  Chip,
  Fade,
  IconButton,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ImageIcon from "@mui/icons-material/Image";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import breakfastImg from "../assets/breakfast.jpg";
import breakfast2Img from "../assets/breakfast2.jpg";
import extrasImg from "../assets/extras.jpg";
import lunchImg from "../assets/lunch.jpg";
import lunch2Img from "../assets/lunch2.jpg";
import menuData from "../data/menu.json";

// ── Types ──────────────────────────────────────────────────────────────────────

type MenuItem = { name: string; price: string };

// ── Menu image data ────────────────────────────────────────────────────────────

const menuImages = [
  {
    src: breakfastImg,
    label: "Breakfast — Favorites & Regulars",
    alt: "Breakfast menu page 1: Cortezian Favorites including Eggs Benedict, Breakfast Burrito, Hungry Man, Cortez Scrambler, Polish Sausage, Country Fried Steak with Sausage Gravy, SOS over Toast, and Full Biscuits and Homemade Sausage Gravy; Cortez Regulars including Spam, Ham, Bacon, Sausage, 2 Eggs and Toast variations, Pork Chops, Steak, Corn Beef Hash, Cortez Muffin and Bagel, and Eggs BLT; On the Lighter Side including Breakfast Sundae, Protein Wrap, Oatmeal, Yogurt, Fresh Fruit, Muffins, and Danishes.",
  },
  {
    src: breakfast2Img,
    label: "Breakfast — Omelets & Sweets",
    alt: "Breakfast menu page 2: Cortezian Omelets including Cortez, Greek, Spanish, Bacon or Sausage and Cheese, Bacon Tomato and Swiss, Western, Sausage Swiss and Mushroom, Veggie, Ham and Cheese, Cheese, and Philly Cheese Steak omelets, all served with toast and hash browns, home fries, or grits; Sweets for the Sweet including Pancake Special, Belgian Waffles Plain, One Topping, and All The Way, Large Pancake, Short Stack, Sand Dollar Pancakes, and French Toast.",
  },
  {
    src: extrasImg,
    label: "Kids Menu, Sides & Beverages",
    alt: "Little Fishes kids menu for ages 10 and under with breakfast items including Mickey Mouse Pancake, Egg-in-a-Basket, and 1 Egg 1 Bacon 1 Toast, and lunch items including Chicken Fingers and Fries and Grilled Cheese and Fries. Sides list including eggs, biscuits, bagels, cream cheese, grits, sausage gravy, tomatoes, banana, salsa, peanut butter, apple sauce, corn beef hash, pork chops, steak, sausage, bacon, ham, grilled pita bread, french fries, onion rings, sweet potato fries, cottage cheese, tzatziki sauce, tzatziki bread and pita, spinach pie, and hamburger patty. Beverages including coffee, hot tea, hot chocolate, soda, iced tea, juice, whole milk, and chocolate milk. No refills on juice, milk, hot chocolate, or chocolate milk.",
  },
  {
    src: lunchImg,
    label: "Lunch — Burgers, Platters & Soups/Salads",
    alt: "Lunch menu page 1. Fresh Angus Burgers including Big Boy Burger, Cortez Burger, Mushroom Melt, Hamburger, Cheeseburger, Bacon Cheeseburger, Patty Melt, and Greek Burger, all served with fries or cottage cheese. Cortez Platters including Lisa's Special grilled marinated chicken breast with feta, Hand-made Fish Fingers and Fries, Jumbo Clam Strips and Fries, Hot Dog and Fries, Chili Cheese Dog and Fries, and Hand-made Chicken Tenders and Fries. Soups and Salads including Home-made Chili, Soup of the Day, Tossed Salad, Greek Salad, Chef Salad, Greek Spinach Pie and Greek Salad, Tuna or Chicken Salad Cold Plate, and Fabulous Fresh Fruit Plate. Substitute onion rings or sweet potato fries for $1.95.",
  },
  {
    src: lunch2Img,
    label: "Lunch — Sandwiches, Clubs & Wraps",
    alt: "Lunch menu page 2. Speciality Sandwiches including Fish Hoagie fried blackened or grilled, Philly Cheese Steak, Chicken Philly, Pressed Cuban, Tuna Melt, Classic Reuben, Turkey Reuben, French Dip with au jus, Chicken Supreme, and Chicken Quesadilla. Clubs and Classics including BLT Club, Turkey BLT Club, Roast Beef Club, Ham Turkey BLT Club, BLT, Tuna or Chicken Salad, Ham and Cheese hot or cold, Grilled Cheese, Grilled Cheese and Tomato, Grilled Bacon Cheese and Tomato, Egg Salad, and Turkey and Cheese hot or cold. Pita Wraps including Gyro Meat Wrap, Grilled Chicken Gyro Wrap, Greek Chicken and Feta Wrap, and Tuna or Chicken Salad Wrap.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

// Simple name + price row — no description, no card
const MenuRow = ({ item }: { item: MenuItem }) => (
  <Box
    component="li"
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 1,
      py: 1,
      borderBottom: "1px solid #111D27",
      listStyle: "none",
      "&:last-child": { borderBottom: "none" },
    }}
  >
    <Typography
      variant="body1"
      sx={{
        color: "#DADAD2",
        fontFamily: '"Lato", sans-serif',
        lineHeight: 1.4,
      }}
    >
      {item.name}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        color: "#F2C800",
        fontFamily: '"Lato", sans-serif',
        fontWeight: 700,
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {item.price}
    </Typography>
  </Box>
);

// Two-column list that splits items into two side-by-side columns on desktop
const MenuList = ({ items }: { items: MenuItem[] }) => {
  const mid = Math.ceil(items.length / 2);
  const col1 = items.slice(0, mid);
  const col2 = items.slice(mid);

  return (
    <Box
      className="menu-list"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: { xs: 0, sm: "0 3rem" },
        mb: 2,
      }}
    >
      <Box component="ul" sx={{ p: 0, m: 0 }}>
        {col1.map((item, i) => <MenuRow key={i} item={item} />)}
      </Box>
      <Box component="ul" sx={{ p: 0, m: 0 }}>
        {col2.map((item, i) => <MenuRow key={i} item={item} />)}
      </Box>
    </Box>
  );
};

const SectionHeader = ({
  label,
  title,
  id,
}: {
  label: string;
  title: string;
  id: string;
}) => (
  <Box id={id} className="section-header" sx={{ mt: 6, mb: 2, scrollMarginTop: "88px" }}>
    <Typography
      variant="overline"
      sx={{ color: "#F2C800", display: "block", mb: 0.25, fontSize: "0.65rem" }}
    >
      {label}
    </Typography>
    <Typography
      variant="h5"
      sx={{ color: "#DADAD2", fontFamily: '"Playfair Display", Georgia, serif' }}
    >
      {title}
    </Typography>
    <Divider sx={{ borderColor: "#1A2A3A", mt: 1.5 }} />
  </Box>
);

const NoteBox = ({ children }: { children: React.ReactNode }) => (
  <Box
    className="note-box"
    sx={{
      backgroundColor: "#0A1520",
      border: "1px solid #1A2A3A",
      borderLeft: "3px solid #0078B7",
      borderRadius: 1.5,
      px: 2,
      py: 1.5,
      mb: 2,
      display: "flex",
      gap: 1.5,
      alignItems: "flex-start",
    }}
  >
    <InfoOutlinedIcon sx={{ color: "#0078B7", fontSize: 16, flexShrink: 0, mt: 0.2 }} />
    <Typography
      variant="body2"
      sx={{ color: "#a6c9e3", lineHeight: 1.65, fontFamily: '"Lato", sans-serif' }}
    >
      {children}
    </Typography>
  </Box>
);

const MegaHeader = ({ title, id }: { title: string; id: string }) => (
  <Box
    id={id}
    className="mega-header"
    sx={{
      mt: 10,
      mb: 1,
      pb: 1.5,
      borderBottom: "2px solid #F2C800",
      scrollMarginTop: "88px",
    }}
  >
    <Typography variant="h3" sx={{ color: "#F2C800", fontStyle: "italic" }}>
      {title}
    </Typography>
  </Box>
);

// ── Main component ─────────────────────────────────────────────────────────────

const Menu = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const dragStart = useRef<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page header
      gsap.fromTo(
        ".menu-header > *",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.14, ease: "power2.out", delay: 0.1 }
      );

      // Photo section heading + caption
      gsap.fromTo(
        ".photos-heading",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".photos-heading", start: "top 88%" },
        }
      );

      // Main carousel image
      gsap.fromTo(
        ".carousel-frame",
        { opacity: 0, scale: 0.97 },
        {
          opacity: 1, scale: 1, duration: 0.75, ease: "power2.out",
          scrollTrigger: { trigger: ".carousel-frame", start: "top 85%" },
        }
      );

      // Thumbnails stagger
      gsap.fromTo(
        ".carousel-thumb",
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".carousel-thumb", start: "top 92%" },
        }
      );

      // Full menu heading
      gsap.fromTo(
        ".fullmenu-heading",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: ".fullmenu-heading", start: "top 88%" },
        }
      );

      // Each mega-section header animates as it scrolls in
      gsap.utils.toArray<HTMLElement>(".mega-header").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0, duration: 0.65, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });

      // Each sub-section header
      gsap.utils.toArray<HTMLElement>(".section-header").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.55, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

      // Menu rows — batch by parent list so each list animates together
      gsap.utils.toArray<HTMLElement>(".menu-list").forEach((list) => {
        const rows = list.querySelectorAll("li");
        gsap.fromTo(
          rows,
          { opacity: 0, x: -14 },
          {
            opacity: 1, x: 0, duration: 0.4, stagger: 0.03, ease: "power1.out",
            scrollTrigger: { trigger: list, start: "top 90%" },
          }
        );
      });

      // Note boxes
      gsap.utils.toArray<HTMLElement>(".note-box").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 14 },
          {
            opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 92%" },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const prev = () => setActiveImage((i) => (i - 1 + menuImages.length) % menuImages.length);
  const next = () => setActiveImage((i) => (i + 1) % menuImages.length);

  const handleDragStart = (x: number) => { dragStart.current = x; };
  const handleDragEnd = (x: number) => {
    if (dragStart.current === null) return;
    const delta = dragStart.current - x;
    if (Math.abs(delta) > 40) { if (delta > 0) next(); else prev(); }
    dragStart.current = null;
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const jumpLinks = [
    { label: "Breakfast", id: "section-breakfast" },
    { label: "Lunch", id: "section-lunch" },
    { label: "Sides & Kids", id: "section-sides" },
    { label: "Beverages", id: "section-beverages" },
  ];

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
          <Box className="menu-header">
            <Typography variant="overline" sx={{ color: "#F2C800", display: "block", mb: 1 }}>
              Cortez Café
            </Typography>
            <Typography variant="h2" sx={{ color: "#DADAD2" }}>
              Our Menu
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#a6c9e3", mt: 2, fontFamily: '"Lato", sans-serif' }}
            >
              Everything made fresh, from scratch, and served with a smile.
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap", mt: 4 }}>
              {jumpLinks.map(({ label, id }) => (
                <Chip
                  key={id}
                  label={label}
                  onClick={() => scrollTo(id)}
                  variant="outlined"
                  sx={{
                    borderColor: "#F2C800",
                    color: "#F2C800",
                    fontFamily: '"Lato", sans-serif',
                    fontWeight: 600,
                    px: 1,
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "rgba(242,200,0,0.1)" },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>

        {/* ── Menu Photos ── */}
        <Box component="section" aria-label="Physical menu photos" sx={{ mb: { xs: 8, md: 10 } }}>
          <Box className="photos-heading" sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <ImageIcon sx={{ color: "#F2C800" }} />
            <Typography variant="h4" sx={{ color: "#DADAD2" }}>
              Menu Photos
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#a6c9e3", fontFamily: '"Lato", sans-serif', mb: 3, lineHeight: 1.7 }}
          >
            Browse our physical menu below. A full text version for screen readers is available further down this page.
          </Typography>

          {/* Main image */}
          <Box
            className="carousel-frame"
            sx={{
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid #1A2A3A",
              boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
              mb: 2,
              backgroundColor: "#0D1B2A",
              cursor: "grab",
              "&:active": { cursor: "grabbing" },
              userSelect: "none",
            }}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseUp={(e) => handleDragEnd(e.clientX)}
            onMouseLeave={() => { dragStart.current = null; }}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
          >
            <Box
              component="img"
              src={menuImages[activeImage].src}
              alt={menuImages[activeImage].alt}
              draggable={false}
              sx={{
                width: "100%",
                maxHeight: { xs: 520, sm: 700, md: 900 },
                objectFit: "contain",
                display: "block",
                pointerEvents: "none",
              }}
            />
            <IconButton
              onClick={prev}
              aria-label="Previous menu page"
              sx={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(13,27,42,0.75)",
                color: "#F2C800",
                "&:hover": { backgroundColor: "rgba(13,27,42,0.95)" },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={next}
              aria-label="Next menu page"
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(13,27,42,0.75)",
                color: "#F2C800",
                "&:hover": { backgroundColor: "rgba(13,27,42,0.95)" },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            sx={{ color: "#F2C800", fontFamily: '"Lato", sans-serif', fontWeight: 600, textAlign: "center", mb: 3 }}
          >
            {menuImages[activeImage].label}
          </Typography>

          {/* Thumbnails */}
          <Box
            role="tablist"
            aria-label="Menu photo thumbnails"
            sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", justifyContent: "center" }}
          >
            {menuImages.map((img, i) => (
              <Box
                key={i}
                className="carousel-thumb"
                role="tab"
                aria-selected={activeImage === i}
                aria-label={img.label}
                tabIndex={0}
                onClick={() => setActiveImage(i)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveImage(i); }}
                sx={{
                  width: { xs: 68, sm: 96 },
                  height: { xs: 88, sm: 124 },
                  borderRadius: 1.5,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: activeImage === i ? "2px solid #F2C800" : "2px solid #1A2A3A",
                  opacity: activeImage === i ? 1 : 0.5,
                  transition: "border-color 0.2s ease, opacity 0.2s ease",
                  "&:hover": { opacity: 1, borderColor: "#F2C800" },
                  "&:focus-visible": { outline: "2px solid #0078B7", outlineOffset: 2 },
                }}
              >
                <Box
                  component="img"
                  src={img.src}
                  alt=""
                  aria-hidden="true"
                  sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#1A2A3A", mb: { xs: 6, md: 8 } }} />

        {/* ── Full Text Menu ── */}
        <Box component="section" aria-label="Full text menu">
          <Box className="fullmenu-heading" sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
            <MenuBookIcon sx={{ color: "#F2C800" }} />
            <Typography variant="h4" sx={{ color: "#DADAD2" }}>
              Full Menu
            </Typography>
          </Box>

          {/* ══ BREAKFAST ══ */}
          <MegaHeader title="Breakfast" id="section-breakfast" />

          <SectionHeader label="Cortezian Favorites" title="House Favorites" id="breakfast-favorites" />
          <MenuList items={menuData.breakfast_favorites} />

          <SectionHeader label="Cortezian Omelets" title="Omelets" id="breakfast-omelets" />
          <NoteBox>
            Served with toast and your choice of hash browns, home fries, or grits.
            Substitute sliced tomatoes at no charge. Add veggies or cheese for $2.00 each.
          </NoteBox>
          <MenuList items={menuData.breakfast_omelets} />

          <SectionHeader label="Cortez Regulars" title="Eggs & Meat" id="breakfast-regulars" />
          <NoteBox>Add hash browns, home fries, or grits for $2.50.</NoteBox>
          <MenuList items={menuData.breakfast_regulars} />

          <SectionHeader label="On the Lighter Side" title="Lighter Options" id="breakfast-lighter" />
          <MenuList items={menuData.breakfast_lighter} />

          <SectionHeader label="Sweets for the Sweet" title="Pancakes & Waffles" id="breakfast-sweets" />
          <MenuList items={menuData.breakfast_sweets} />

          {/* ══ LUNCH ══ */}
          <MegaHeader title="Lunch" id="section-lunch" />
          <NoteBox>{menuData.notes.sandwiches_burgers_wraps}</NoteBox>

          <SectionHeader label="Speciality Sandwiches" title="Sandwiches" id="lunch-sandwiches" />
          <MenuList items={menuData.lunch_sandwiches} />

          <SectionHeader label="Fresh Angus Burgers" title="Burgers" id="lunch-burgers" />
          <MenuList items={menuData.lunch_burgers} />

          <SectionHeader label="Cortez Platters" title="Platters" id="lunch-platters" />
          <MenuList items={menuData.lunch_platters} />

          <SectionHeader label="Clubs & Classics" title="Clubs & Classics" id="lunch-clubs" />
          <MenuList items={menuData.lunch_clubs} />

          <SectionHeader label="Pita Wraps" title="Wraps" id="lunch-wraps" />
          <MenuList items={menuData.lunch_wraps} />

          <SectionHeader label="Soups & Salads" title="Soups & Salads" id="lunch-soups-salads" />
          <NoteBox>
            All soups are homemade. Our Greek dressing is to die for! Add a grilled pita to any salad for $1.50.
          </NoteBox>
          <MenuList items={menuData.lunch_soups_salads} />

          {/* ══ KIDS & SIDES ══ */}
          <MegaHeader title="Sides & Kids" id="section-sides" />

          <SectionHeader label="Little Fishes (10 & under)" title="Kids Menu" id="kids" />
          <MenuList items={menuData.kids} />

          <SectionHeader label="À La Carte" title="Sides" id="sides" />
          <MenuList items={menuData.sides} />

          {/* ══ BEVERAGES ══ */}
          <MegaHeader title="Beverages" id="section-beverages" />
          <NoteBox>No refills on juice, milk, hot chocolate, or chocolate milk.</NoteBox>
          <MenuList items={menuData.beverages} />
        </Box>
      </Container>

      {/* ── FAB cluster ── */}
      <Fade in={showScrollTop}>
        <Box
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 1,
          }}
        >
          {/* Slide-out nav links */}
          <Fade in={navOpen}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 0.75,
                mb: 0.5,
                maxHeight: "70vh",
                overflowY: "auto",
                overflowX: "hidden",
                pr: 0.25,
              }}
            >
              {[
                { label: "Breakfast", id: "section-breakfast" },
                { label: "↳ Favorites", id: "breakfast-favorites" },
                { label: "↳ Omelets", id: "breakfast-omelets" },
                { label: "↳ Eggs & Meat", id: "breakfast-regulars" },
                { label: "↳ Lighter", id: "breakfast-lighter" },
                { label: "↳ Pancakes & Waffles", id: "breakfast-sweets" },
                { label: "Lunch", id: "section-lunch" },
                { label: "↳ Sandwiches", id: "lunch-sandwiches" },
                { label: "↳ Burgers", id: "lunch-burgers" },
                { label: "↳ Platters", id: "lunch-platters" },
                { label: "↳ Clubs & Classics", id: "lunch-clubs" },
                { label: "↳ Wraps", id: "lunch-wraps" },
                { label: "↳ Soups & Salads", id: "lunch-soups-salads" },
                { label: "Sides & Kids", id: "section-sides" },
                { label: "Beverages", id: "section-beverages" },
              ].map(({ label, id }) => (
                <Box
                  key={id}
                  onClick={() => { scrollTo(id); setNavOpen(false); }}
                  sx={{
                    backgroundColor: label.startsWith("↳") ? "#1C3050" : "#243D5C",
                    border: "1px solid #2E4D6A",
                    borderRight: label.startsWith("↳") ? "1px solid #2E4D6A" : "3px solid #F2C800",
                    color: label.startsWith("↳") ? "#a6c9e3" : "#F2C800",
                    fontFamily: '"Lato", sans-serif',
                    fontSize: label.startsWith("↳") ? "0.75rem" : "0.82rem",
                    fontWeight: label.startsWith("↳") ? 400 : 700,
                    px: 1.5,
                    py: 0.6,
                    borderRadius: 1.5,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.7)",
                    transition: "background-color 0.15s ease, color 0.15s ease",
                    "&:hover": {
                      backgroundColor: "#2E4D6A",
                      color: "#F2C800",
                    },
                  }}
                >
                  {label.startsWith("↳") ? label.slice(2) : label}
                </Box>
              ))}
            </Box>
          </Fade>

          {/* Button row: nav toggle + back to top */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              onClick={() => setNavOpen((o) => !o)}
              aria-label={navOpen ? "Close quick navigation" : "Open quick navigation"}
              aria-expanded={navOpen}
              sx={{
                backgroundColor: navOpen ? "#243D5C" : "#1C3050",
                border: "2px solid #F2C800",
                color: "#F2C800",
                width: 48,
                height: 48,
                boxShadow: "0 4px 16px rgba(0,0,0,0.7)",
                "&:hover": { backgroundColor: "#2E4D6A" },
                transition: "background-color 0.2s ease",
              }}
            >
              {navOpen ? <CloseIcon /> : <ListIcon />}
            </IconButton>

            <IconButton
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              sx={{
                backgroundColor: "#F2C800",
                color: "#010302",
                width: 48,
                height: 48,
                boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                "&:hover": { backgroundColor: "#FFD800", transform: "translateY(-2px)" },
                transition: "transform 0.2s ease",
              }}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default Menu;
