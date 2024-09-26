import React from "react";
import "./NewsLetterLabel.scss";
import { Box } from "@mui/material";

const NewsLetterLabel = () => {
  return (
    <>
      <Box className="news-letter-label-parent">
        <Box className="news-letter-label-container">
          <Box className="news-letter-label-first">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                gap: '5px'
            }}>
              <span>KRISAT Digest</span>
              <span>The monthly campus newsletter</span>
            </div>
          </Box>
          <Box>
            <div style={{
                background: '#2B862F',
                padding: '10px',
                borderRadius: '10px'
            }}>
              <span>Newsletter</span>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewsLetterLabel;
