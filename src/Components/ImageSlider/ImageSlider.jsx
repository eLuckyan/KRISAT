import React, { useRef, useState } from "react";
import "./ImageSlider.scss";
import Box from "@mui/material/Box";

const ImageSlider = ({ images, activeIndex, setActiveIndex }) => {
  const sliderRef = useRef(null);

  const scrollToSlide = (index) => {
    const slider = sliderRef.current;
    const slideWidth = slider.offsetWidth / 2; // Calculate half width of the slider
    const scrollPosition = index * 300 - slideWidth + 150; // Center the active slide

    slider.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    const newIndex = activeIndex + 1 >= images.length ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = activeIndex - 1 < 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    scrollToSlide(index);
  };

  return (
    <Box className="gallery-slider">
      <div className="image-slider">
        <div>
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="slider-container" ref={sliderRef}>
            {images.map((image, index) => (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div
                  onClick={() => setActiveIndex(index)}
                  key={index}
                  className={`slider-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="slider-image"
                  />
                </div>
                <div className="slider-content">
                  {index !== activeIndex && <span style={{
                    fontSize: '16px',
                    color: '#77A24A'
                  }}>{image.label}</span>}
                </div>
              </div>
            ))}
          </div>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ImageSlider;
