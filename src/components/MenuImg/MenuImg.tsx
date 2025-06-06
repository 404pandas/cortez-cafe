import { Container } from "@mui/material";
import Slider from "react-slick";

import breakfast1 from "../../assets/breakfast.jpg";
import breakfast2 from "../../assets/breakfast2.jpg";
import extra from "../../assets/extras.jpg";
import lunch1 from "../../assets/lunch.jpg";
import lunch2 from "../../assets/lunch2.jpg";

// Sample images — replace with actual URLs or local image imports
const images = [breakfast1, breakfast2, extra, lunch1, lunch2];

const MenuImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Container maxWidth='md' sx={{ py: 8 }}>
      <Slider {...settings}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Menu item ${i + 1}`}
            style={{
              width: "40% !important",
              height: "auto",
              borderRadius: "16px",
              objectFit: "cover",
            }}
          />
        ))}
      </Slider>
    </Container>
  );
};

export default MenuImg;
