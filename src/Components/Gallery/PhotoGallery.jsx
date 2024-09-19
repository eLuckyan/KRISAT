import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "./PhotoGallery.scss";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

const CalendarComponent = ({ date }) => {
  return (
    <>
      <div className="gallery-calendar-div">
        <section className="gallery-calendar-section">
          <CalendarMonthIcon className="gallery-calendar-icon" color="white" />
          <span>{date}</span>
        </section>
      </div>
    </>
  );
};

const CollectionNameComponent = ({ collectionName }) => {
  return (
    <>
      <div className="gallery-collection-div">
        <section className="gallery-collection-section">
          <span>{collectionName}</span>
        </section>
      </div>
    </>
  );
};

const PhotoGallery = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          margin: "50px 0px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box className="gallery-box-parent">
            <CalendarComponent date="Jun 7" />
            <CollectionNameComponent collectionName="COLLECTIVE FARMING" />
            <img
              style={{
                height: "25vh",
                width: "520px",
              }}
              className="gallery-img"
              src={`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`}
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Box className="gallery-box-parent">
              <CalendarComponent date="Sept 16" />
              <CollectionNameComponent collectionName="UGC HANDBOOK" />
              <img
                className="gallery-img"
                style={{
                  height: "25vh",
                  width: "250px",
                }}
                src={`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`}
                loading="lazy"
              />
            </Box>
            <Box className="gallery-box-parent">
              <CalendarComponent date="May 1" />
              <CollectionNameComponent collectionName="CONVOCATION 2024" />
              <img
                className="gallery-img"
                style={{
                  height: "25vh",
                  width: "250px",
                }}
                src={`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`}
                loading="lazy"
              />
            </Box>
          </Box>
        </Box>
        <Box className="gallery-box-parent">
          <CalendarComponent date="Jul 17" />
          <CollectionNameComponent collectionName="ANUAL DAY 2023" />
          <img
            className="gallery-img vertical-img"
            style={{
              height: "50vh",
            }}
            width="100%"
            src={`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`}
            loading="lazy"
          />
        </Box>
      </Box>
    </>
  );
};

export default PhotoGallery;
