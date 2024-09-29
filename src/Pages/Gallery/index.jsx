import React, { useState } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "./Gallery.scss";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { IoIosCamera } from "react-icons/io";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "https://picsum.photos/id/237/300/400",
      alt: "Culturals",
      label: "Culturals",
      buttonLabel: "Explore Now",
    },
    {
      src: "https://picsum.photos/id/238/300/400",
      alt: "Convocation",
      label: "Convocation",
    },
    {
      src: "https://picsum.photos/id/239/300/400",
      alt: "Webinars",
      label: "Webinars",
    },
    {
      src: "https://picsum.photos/id/240/300/400",
      alt: "Workshops",
      label: "Workshops",
    },
    {
      src: "https://picsum.photos/id/241/300/400",
      alt: "Seminars",
      label: "Seminars",
    },
  ];

  const getSelectedLabel = (index) => {
    return images[index].label;
  };

  return (
    <>
      <Box className="image-slider-parent">
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0px 10px'
          }}>
            <IoIosCamera color="#1F3A7E" fontSize="44px" />
            <span
              color="#1F3A7E"
              style={{
                fontSize: "36px",
                color: "#1F3A7E",
              }}
            >
              Gallery
            </span>
          </div>
        </div>
        <div className="image-slider-second">
          <Box>
            <div className="styled-title">
              <h1>{getSelectedLabel(activeIndex)}</h1>
              <span className="arrow">&#10230;</span>
            </div>
          </Box>
          <ImageSlider
            images={images}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </Box>
    </>
  );
};

export default Gallery;
