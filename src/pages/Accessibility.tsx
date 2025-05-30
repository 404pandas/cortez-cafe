import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import HearingIcon from "@mui/icons-material/Hearing";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Accessibility = () => {
  return (
    <Container maxWidth='md' sx={{ py: 8 }}>
      <Typography variant='h4' gutterBottom align='center'>
        ♿ Accessibility & Comfort
      </Typography>
      <Typography
        variant='body1'
        align='center'
        color='text.primary'
        sx={{ mb: 5 }}
      >
        At Cortez Cafe, we’re committed to making sure everyone in our community
        feels welcome and comfortable — no matter their age or ability.
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            <WheelchairPickupIcon color='primary' />
          </ListItemIcon>
          <ListItemText
            primary='Wheelchair Accessible'
            secondary='Our entrance, restrooms, and seating areas are fully wheelchair accessible.'
          />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ChildCareIcon color='primary' />
          </ListItemIcon>
          <ListItemText
            primary='Child-Friendly Seating'
            secondary='We offer highchairs, booster seats, and family-style seating for guests with young children.'
          />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <HearingIcon color='primary' />
          </ListItemIcon>
          <ListItemText
            primary='Quiet-Friendly Atmosphere'
            secondary='We maintain a peaceful environment and are happy to accommodate guests with sensory needs whenever possible.'
          />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color='primary' />
          </ListItemIcon>
          <ListItemText
            primary='Flexible Layout'
            secondary='Tables can be moved to accommodate mobility aids or larger parties with specific needs.'
          />
        </ListItem>
      </List>

      <Box mt={4}>
        <Typography variant='body2' color='text.primary'>
          If you have any accessibility questions before your visit, please
          don’t hesitate to call us at (941) 792-0030. We’ll do everything we
          can to ensure a comfortable experience.
        </Typography>
      </Box>
    </Container>
  );
};

export default Accessibility;
