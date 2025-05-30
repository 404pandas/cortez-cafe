import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container maxWidth='md' sx={{ py: 12, textAlign: "center" }}>
      <Typography variant='h1' color='primary' sx={{ fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant='h5' sx={{ mt: 2 }}>
        Oops! That page doesn’t exist.
      </Typography>
      <Typography variant='body1' color='text.primary' sx={{ mt: 1 }}>
        The page you're looking for may have moved, been deleted, or never
        existed.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant='contained' color='primary' component={Link} to='/'>
          Return to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Error;
