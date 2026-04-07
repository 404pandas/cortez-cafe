import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";

const pages = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About", path: "/about-us" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact-us" },
];

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#0D1B2A",
          borderBottom: "2px solid #F2C800",
        }}
      >
        <Toolbar
          disableGutters
          sx={{ px: { xs: 2, md: 4 }, minHeight: { xs: 64, md: 72 } }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
              mr: "auto",
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontStyle: "italic",
                fontSize: { xs: "1.4rem", md: "1.75rem" },
                fontWeight: 700,
                color: "#F2C800",
                lineHeight: 1.1,
              }}
            >
              Cortez Café
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Lato", sans-serif',
                fontSize: "0.62rem",
                color: "#a6c9e3",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                mt: 0.25,
              }}
            >
              Cortez, FL &middot; Since the 70s
            </Typography>
          </Box>

          {/* Desktop Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0,
              alignItems: "center",
            }}
          >
            {pages.map(({ label, path }) => (
              <Box
                key={label}
                component={Link}
                to={path}
                sx={{
                  textDecoration: "none",
                  px: 1.75,
                  py: 0.75,
                  fontSize: "0.9rem",
                  fontFamily: '"Lato", sans-serif',
                  fontWeight: isActive(path) ? 700 : 400,
                  color: isActive(path) ? "#F2C800" : "#DADAD2",
                  borderBottom: isActive(path)
                    ? "2px solid #F2C800"
                    : "2px solid transparent",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                  "&:hover": {
                    color: "#F2C800",
                    borderBottomColor: "#F2C800",
                  },
                }}
              >
                {label}
              </Box>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "flex", md: "none" }, color: "#DADAD2" }}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#0D1B2A",
            width: 270,
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontStyle: "italic",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#F2C800",
            }}
          >
            Cortez Café
          </Typography>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "#DADAD2" }}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(242,200,0,0.3)" }} />
        <List sx={{ pt: 1 }}>
          {pages.map(({ label, path }) => (
            <ListItem key={label} disablePadding>
              <ListItemButton
                component={Link}
                to={path}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderLeft: isActive(path)
                    ? "3px solid #F2C800"
                    : "3px solid transparent",
                  "&:hover": {
                    backgroundColor: "rgba(242,200,0,0.07)",
                    borderLeftColor: "#F2C800",
                  },
                }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    sx: {
                      fontFamily: '"Lato", sans-serif',
                      color: isActive(path) ? "#F2C800" : "#DADAD2",
                      fontWeight: isActive(path) ? 700 : 400,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: "#1E3050", mt: 2 }} />
        <Box sx={{ p: 3 }}>
          <Typography
            variant="caption"
            sx={{ color: "#3A5060", display: "block" }}
          >
            Open Daily: 6:30 AM – 2:00 PM
          </Typography>
          <Typography variant="caption" sx={{ color: "#3A5060" }}>
            (941) 792-0030
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Nav;
