import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import SideNav from "../SideNav";

const Layout = () => {
  return (
    <>
      <Box>
        <Box>
          <Header />
        </Box>
        {/* <Box>
          <SideNav />
        </Box> */}
        <Box>
          <Outlet />
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
