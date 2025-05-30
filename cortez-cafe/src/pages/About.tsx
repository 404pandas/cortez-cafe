import { Container, Typography, Divider } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth='md' sx={{ py: 8 }}>
      <Typography variant='h4' gutterBottom align='center'>
        🍳 About Cortez Cafe
      </Typography>

      <Typography variant='body1' color='text.primary' sx={{ mb: 4 }}>
        Nestled in the heart of the historic fishing village of Cortez, Florida,
        Cortez Cafe has been a beloved gathering spot since the 1970s.
        Originally a haven for local fishermen to share stories over hearty
        breakfasts and bottomless coffee, the cafe has maintained its warm,
        welcoming atmosphere through the decades.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant='h5' gutterBottom>
        A Legacy of Hospitality
      </Typography>
      <Typography variant='body1' color='text.primary' sx={{ mb: 4 }}>
        In 2002, Sam and Debi Varelis took over the cafe, bringing with them a
        passion for home-style cooking and community. They expanded the space in
        2003, nearly doubling its size, yet preserving its cozy charm. Their
        dedication to generous portions and friendly service has turned
        first-time visitors into lifelong regulars.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant='h5' gutterBottom>
        More Than Just a Meal
      </Typography>
      <Typography variant='body1' color='text.primary' sx={{ mb: 4 }}>
        At Cortez Cafe, it's common to see locals and tourists sharing tables,
        engaging in conversations that span from fishing tales to daily news.
        The cafe serves as a community hub where friendships are forged over
        plates of fluffy pancakes, savory omelets, and homemade pies crafted
        from Debi's cherished family recipes.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant='h5' gutterBottom>
        Our Commitment to You
      </Typography>
      <Typography variant='body1' color='text.primary' sx={{ mb: 4 }}>
        We take pride in offering a menu filled with comfort foods made from
        scratch daily. From juicy Angus burgers to Greek specialties, every dish
        is prepared with care and served with a smile. Our goal is to provide a
        dining experience that feels like home, whether you're a longtime
        resident or a first-time guest.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant='body1' color='text.primary'>
        Come visit us at 12108 Cortez Rd W, Cortez, FL 34215. We're open daily
        from 6:30 AM to 2:00 PM. We look forward to welcoming you to our cafe
        family.
      </Typography>
    </Container>
  );
};

export default About;
