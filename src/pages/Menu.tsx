import {
  Box,
  Container,
  Divider,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

const menuData = {
  breakfast: [
    {
      name: "4-Egg Omelet",
      description:
        "Stuffed with cheese, onions, peppers, and your choice of ham, bacon, or sausage.",
      price: "$10.99",
    },
    {
      name: "Buttermilk Pancakes",
      description: "Fluffy pancakes served with maple syrup and butter.",
      price: "$7.99",
    },
    {
      name: "Country Breakfast",
      description:
        "Two eggs, toast, home fries, and your choice of bacon or sausage.",
      price: "$9.49",
    },
  ],
  lunch: [
    {
      name: "Angus Burger",
      description:
        "Grilled to order with lettuce, tomato, and your choice of cheese.",
      price: "$11.99",
    },
    {
      name: "Chicken Salad Sandwich",
      description: "House-made chicken salad on toasted sourdough.",
      price: "$9.99",
    },
    {
      name: "Grilled Reuben",
      description:
        "Classic Reuben with corned beef, Swiss, sauerkraut, and Russian dressing.",
      price: "$10.99",
    },
  ],
  specials: [
    {
      name: "Fried Grouper Sandwich",
      description:
        "Locally caught grouper, lightly breaded and served with fries.",
      price: "$13.99",
    },
    {
      name: "Greek Platter",
      description:
        "Gyro meat, pita, hummus, and Greek salad with homemade tzatziki.",
      price: "$14.99",
    },
  ],
};

const MenuSection = ({
  title,
  items,
}: {
  title: string;
  items: typeof menuData.breakfast;
}) => (
  <Box sx={{ mb: 6 }}>
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
  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <Typography variant='h3' align='center' gutterBottom>
        🍽️ Our Menu
      </Typography>
      <Typography variant='body1' align='center' sx={{ mb: 6 }} color='primary'>
        Everything is made fresh, from scratch, and served with a smile.
      </Typography>

      <MenuSection title='Breakfast' items={menuData.breakfast} />
      <MenuSection title='Lunch' items={menuData.lunch} />
      <MenuSection title='House Specials' items={menuData.specials} />
    </Container>
  );
};

export default Menu;
