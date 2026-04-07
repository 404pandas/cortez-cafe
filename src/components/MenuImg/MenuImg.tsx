import { Box } from "@mui/material";
import Slider from "react-slick";

import breakfast1 from "../../assets/breakfast.jpg";
import breakfast2 from "../../assets/breakfast2.jpg";
import extra from "../../assets/extras.jpg";
import lunch1 from "../../assets/lunch.jpg";
import lunch2 from "../../assets/lunch2.jpg";

const images = [
  { src: breakfast1, alt: "Breakfast plates" },
  { src: breakfast2, alt: "Morning favorites" },
  { src: extra, alt: "Extras and sides" },
  { src: lunch1, alt: "Lunch specials" },
  { src: lunch2, alt: "Fresh lunch" },
];

const MenuImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { arrows: false },
      },
    ],
  };

  return (
    <Box
      sx={{
        maxWidth: 720,
        mx: "auto",
        mb: 8,
        px: { xs: 0, sm: 2 },
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
      }}
    >
      <Slider {...settings}>
        {images.map(({ src, alt }, i) => (
          <Box key={i}>
            <Box
              component="img"
              src={src}
              alt={alt}
              sx={{
                width: "100%",
                height: { xs: 240, sm: 340, md: 420 },
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default MenuImg;
