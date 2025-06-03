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

const menuData = {
  breakfast: [
    {
      name: "Cortez Omelet",
      description:
        "Ham, bacon, sausage, onions, peppers, mushrooms, tomatoes, and cheese.",
      price: "$8.95",
    },
    {
      name: "Philly Cheese Steak Omelet",
      description: "Roast beef, peppers, onions, mushrooms, and Swiss cheese.",
      price: "$7.75",
    },
    {
      name: "Veggie Omelet",
      description: "Mushrooms, onions, peppers, tomatoes, and cheese.",
      price: "$7.25",
    },
    {
      name: "Greek Omelet",
      description: "Feta cheese, spinach, and tomatoes.",
      price: "$7.50",
    },
    {
      name: "Pancake Special",
      description: "Large pancake, 2 eggs, 2 sausage or 4 bacon.",
      price: "$7.50",
    },
    {
      name: "Belgian Waffle",
      description:
        "Banana nut, blueberry, strawberry, or pecan, topped with whipped cream.",
      price: "$5.50",
    },
    {
      name: "French Toast",
      description: "Two slices of Texas toast with cinnamon and vanilla.",
      price: "$5.00",
    },
    {
      name: "Cortez Muffin",
      description:
        "Fried egg, bacon, sausage or ham & cheese on a grilled English muffin.",
      price: "$3.50",
    },
    {
      name: "Breakfast Burrito",
      description:
        "Eggs scrambled with peppers, onion, cheese, and choice of meat (ham, bacon, or sausage) wrapped in a tortilla. Served with potatoes or grits, and a side of salsa or sour cream.",
      price: "$7.95",
    },
    {
      name: "Hungry Man",
      description:
        "3 eggs, a 1/2 order of biscuits and sausage gravy. Served with potatoes or grits.",
      price: "$7.95",
    },
  ],
  lunch: [
    {
      name: "Fish Hoagie",
      description: "Fried, blackened, or grilled fish hoagie.",
      price: "$8.50",
    },
    {
      name: "Philly Cheese Steak",
      description:
        "Roast beef, grilled onions, peppers, mushrooms, and Swiss cheese.",
      price: "$8.75",
    },
    {
      name: "Pressed Cuban",
      description: "Pressed pork, ham, salami & cheese with a special sauce.",
      price: "$7.95",
    },
    {
      name: "Tuna Melt",
      description: "Tuna salad & Swiss cheese on grilled rye.",
      price: "$7.25",
    },
    {
      name: "Classic Reuben",
      description:
        "Corned beef, sauerkraut & Swiss with a special sauce on grilled rye.",
      price: "$8.75",
    },
    {
      name: "Chicken Quesadilla",
      description:
        "Grilled chicken, bell peppers, onions, and cheese in a tortilla.",
      price: "$8.00",
    },
    {
      name: "Gyro Wrap",
      description: "Gyro meat with tomatoes, onions & tzatziki.",
      price: "$8.50",
    },
    {
      name: "Greek Chicken and Feta Wrap",
      description:
        "Marinated grilled chicken with feta, lettuce, tomatoes, onion & Greek dressing.",
      price: "$7.75",
    },
    {
      name: "Big Boy Burger",
      description:
        "Burger topped with ham, Swiss, onion rings & BBQ sauce on a burger bun.",
      price: "$8.95",
    },
    {
      name: "Cortez Burger",
      description:
        "Burger topped with grilled onions & Swiss on grilled Texas toast.",
      price: "$8.50",
    },
  ],
  specials: [
    {
      name: "Lin's Special",
      description:
        "Grilled marinated chicken breast, feta, grilled spinach, onions, mushrooms & tomatoes.",
      price: "$8.50",
    },
    {
      name: "Handmade Fish Fingers & Fries",
      description: "Freshly made fish fingers served with fries.",
      price: "$8.50",
    },
    {
      name: "Jumbo Clam Strips & Fries",
      description: "Generous portion of clam strips served with fries.",
      price: "$8.50",
    },
    {
      name: "Chili Cheese Dog & Fries",
      description: "Hot dog topped with chili and cheese, served with fries.",
      price: "$6.50",
    },
    {
      name: "Home-Made Chicken Tenders & Fries",
      description: "Homemade chicken tenders served with fries.",
      price: "$8.50",
    },
    {
      name: "Greek Salad with Grilled Chicken",
      description: "Fresh Greek salad topped with grilled chicken.",
      price: "$6.95",
    },
    {
      name: "Tuna or Chicken Salad Cold Plate",
      description:
        "Stuffed tomato on lettuce, with cottage cheese & fresh fruit.",
      price: "$7.95",
    },
    {
      name: "Fabulous Fresh Fruit Plate",
      description: "Fruit, cottage cheese & sliced tomatoes on lettuce.",
      price: "$6.75",
    },
  ],
};

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
          }}
        >
          <Button
            variant='contained'
            color='primary'
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            startIcon={<KeyboardArrowUpIcon />}
          >
            Top
          </Button>
        </Box>
      </Fade>
    </Container>
  );
};

export default Menu;
