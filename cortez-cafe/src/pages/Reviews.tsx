import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const reviews = [
  {
    name: "Emily R.",
    text: "Best breakfast spot in Cortez! The pancakes were fluffy, the coffee was strong, and the staff made us feel like family.",
    rating: 5,
  },
  {
    name: "Mark T.",
    text: "Great service and even better food. The grouper sandwich was fresh and delicious!",
    rating: 4.5,
  },
  {
    name: "Linda K.",
    text: "Feels like a slice of old Florida. Cozy, welcoming, and consistently good. Highly recommend the omelets!",
    rating: 5,
  },
  {
    name: "Derek S.",
    text: "Affordable and authentic. We stop in every time we're in town. Love their homemade pies!",
    rating: 4,
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<StarIcon key={i} color='warning' />);
    else if (rating + 0.5 === i)
      stars.push(<StarHalfIcon key={i} color='warning' />);
    else stars.push(<StarBorderIcon key={i} color='disabled' />);
  }
  return stars;
};

const Reviews = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <Typography variant='h4' align='center' gutterBottom>
        ⭐ Customer Reviews
      </Typography>
      <Typography
        variant='body1'
        align='center'
        color='text.primary'
        sx={{ mb: 5 }}
      >
        See what our happy customers are saying about their Cortez Cafe
        experience.
      </Typography>

      <Grid container spacing={4}>
        {reviews.map((review, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card elevation={4} sx={{ p: 2, height: "100%" }}>
              <CardContent>
                <Box display='flex' alignItems='center' gap={2} mb={2}>
                  <Avatar>{review.name.charAt(0)}</Avatar>
                  <Box>
                    <Typography variant='subtitle1' fontWeight='bold'>
                      {review.name}
                    </Typography>
                    <Box display='flex'>{renderStars(review.rating)}</Box>
                  </Box>
                </Box>
                <Typography variant='body2' color='text.primary'>
                  "{review.text}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
