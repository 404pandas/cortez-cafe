import {
  Box,
  Container,
  Divider,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  Fade,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

import menuData from "../data/menu.json";

const MenuSection = ({
  title,
  items,
  id,
}: {
  title: string;
  items: typeof menuData.breakfast;
  id: string;
}) => (
  <Box id={id} sx={{ mb: 6 }}>
    <Typography variant='h4' gutterBottom>
      {title}
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <Grid container spacing={4}>
      {items.map((item, i) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
          <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
            <Typography variant='h6' color='primary'>
              {item.name}
            </Typography>
            <Typography variant='body2' color='text.primary' sx={{ mt: 1 }}>
              {item.description}
            </Typography>
            <Typography
              variant='subtitle1'
              sx={{ mt: 1, fontWeight: "bold" }}
              color='secondary'
            >
              {item.price}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const Menu = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <Typography variant='h3' align='center' gutterBottom>
        🍽️ Our Menu
      </Typography>
      <Typography variant='body1' align='center' sx={{ mb: 6 }} color='primary'>
        Everything is made fresh, from scratch, and served with a smile.
      </Typography>
      <Typography
        variant='body2'
        align='center'
        sx={{ mb: 4 }}
        color='text.secondary'
      >
        * Omelettes are served taste and your choice of hash browns, home
        friends, and grits. Substitute sliced tomatoes for potatos, toast, or
        grits at no additional charge.
      </Typography>
      <Typography
        variant='body2'
        align='center'
        sx={{ mb: 4 }}
        color='text.secondary'
      >
        Add diced tomatoes, onion, mushroom, peppers, cheese, spinach, or feta
        to any omelette to an additional $2.00 each.
      </Typography>
      <Typography
        variant='body2'
        align='center'
        sx={{ mb: 4 }}
        color='text.secondary'
      >
        Add hash browns, home fries, or grits for only $2.50.
      </Typography>
      {/* Jump Links */}
      <Stack direction='row' spacing={2} justifyContent='center' sx={{ mb: 4 }}>
        <Button variant='outlined' onClick={() => scrollTo("breakfast")}>
          Breakfast
        </Button>
        <Button variant='outlined' onClick={() => scrollTo("lunch")}>
          Lunch
        </Button>
        <Button variant='outlined' onClick={() => scrollTo("specials")}>
          Specials
        </Button>
      </Stack>

      {/* Menu Sections */}
      <MenuSection
        title='Breakfast'
        items={menuData.breakfast}
        id='breakfast'
      />
      <MenuSection title='Lunch' items={menuData.lunch} id='lunch' />
      <MenuSection
        title='House Specials'
        items={menuData.specials}
        id='specials'
      />

      {/* Back to Top */}
      <Fade in={showScrollTop}>
        <Box
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Button
            variant='contained'
            color='primary'
            onClick={() => scrollTo("breakfast")}
            startIcon={<KeyboardArrowUpIcon />}
          >
            Breakfast
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => scrollTo("lunch")}
            startIcon={<KeyboardArrowUpIcon />}
          >
            Lunch
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => scrollTo("specials")}
            startIcon={<KeyboardArrowUpIcon />}
          >
            Specials
          </Button>
        </Box>
      </Fade>
    </Container>
  );
};

export default Menu;
