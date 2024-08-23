import React from "react";
import "./Footer.scss";
import ClgIcon from "../../Assets/Icons/ClgIcon";
import { Box } from "@mui/material";
import { FaMapLocation } from "react-icons/fa6";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <>
      <footer>
        <Box className="footer-first-item">
          <Box className="footer-clg-icon">
            <ClgIcon width="70" height="70" />
            <Box className="footer-clg-name">
              <h2>Krishna College of Agriclture & Technology</h2>
              <h5>Affiliated to Tamil Nadu Agricultural University</h5>
            </Box>
          </Box>
          <Box className="footer-clg-details">
            <Box className="footer-clg-locations">
              <FaMapLocation width={50} height={50} />
              <Box className="footer-clg-address">
                <span>Srirengapuram, Usilampatti</span>
                <span>Madurai 625 532</span>
              </Box>
            </Box>
            <Box className="footer-clg-contact">
              <span className="footer-contact-icon">
                <LocalPhoneIcon /> 9095900202/3/4
              </span>
              <span className="footer-contact-icon">
                <EmailIcon /> admin@krisat.edu.in
              </span>
            </Box>
          </Box>
        </Box>
        <Divider color="white" />
        <Box className="footer-essential">
          <Box className="footer-quick-links">
            <span className="footer-quick-links-header">Quick Links</span>
            <ul className="footer-quick-links-ul">
              <li>Academics Activities</li>
              <li>Rules and Regulations</li>
              <li>Nursery</li>
              <li>Farm</li>
            </ul>
          </Box>
          <Box className="footer-academics">
            <span className="footer-academics-header">Academics</span>
            <ul className="footer-academics-ul">
              <li>Departments</li>
              <li>Admissions</li>
              <li>Student life</li>
              <li>Research</li>
              <li>Alumni</li>
            </ul>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
