import React, { useState } from "react";
import "./Header.scss";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ClgIcon from "../../Assets/Icons/ClgIcon";
import { Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HeaderData from '../../Services/utils/json/Header.js';

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = useNavigate();
  const { mainNav, navItems } = HeaderData();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openMenuKey, setOpenMenuKey] = useState(null);

  const handleClick = (event, key) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuKey(key);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenuKey(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNav = (menuItem, index) => {
    let path = "";
    switch (menuItem) {
      case "About Us":
        path = `/AboutUs/${index}`;
        break;
      case "Farming":
        path = `/Farming/${index}`;
        break;
      case "Academics":
        path = `/Academics/${index}`;
        break;
      case "Academic Activities":
        path = `/AcademicActivities/${index}`;
        break;
      case "Life @ KRISAT":
        path = `/LifeKRISAT/${index}`;
        break;
      case "Facilities":
        path = `/Facilities/${index}`;
        break;
      case "Nursery":
        path = `/Nursery/${index}`;
        break;
      case "Rules & Regulations":
        path = `/RulesRegulations/${index}`;
        break;
      default:
        path = "/"; // Fallback to home
    }

    nav(path);
    setAnchorEl(null);
    setOpenMenuKey(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, backgroundColor: "#224095", color:"white" }} onClick={() => nav("/")}>
        Krishna College of Agriculture & Technology
      </Typography>
      <Divider />
      <List>
        {Object.keys(mainNav).map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: "center", 
                '&:hover': {
                    backgroundColor: "rgba(50, 168, 82, 0.7)",
                    color: "white"
                  } 
                }} 
                onClick={() => handleNav(item, 0)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const drawerWidth = 240; // Define your drawer width

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CssBaseline />
        <>
          <Toolbar className="header-toolbar">
            <Box className="header-top">
              <span className="header-top-left" onClick={() => nav('/')}>
                <ClgIcon />
                <Box className="header-college-name">
                  <h1>Krishna College of Agriculture & Technology</h1>
                  <h4>Affiliated to Tamil Nadu Agricultural University</h4>
                </Box>
              </span>
              <span className="header-top-right">
                {navItems.map((item, index) => (
                  <Button key={item} onClick={() => nav(`${item}`)} className="header-nav">
                    <h3>{item}</h3>
                    {index < navItems.length - 1 && <h2>|</h2>}
                  </Button>
                ))}
              </span>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleDrawerToggle}
                className="menu-toggle" // Added class
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box className="header-bottom">
              {Object.keys(mainNav).map((keyName, index) => (
                <React.Fragment key={index}>
                  <Button
                    className="nav-button"
                    sx={{ 
                      color: "#fff" ,
                      '&:hover': {
                        backgroundColor: "rgba(50, 168, 82, 0.7)",
                      },
                    }}
                    id={`toolbar-${index}`}
                    aria-controls={openMenuKey === keyName ? `toolbar-menu` : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenuKey === keyName ? 'true' : undefined}
                    onClick={(event) => handleClick(event, keyName)}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    {keyName}
                  </Button>
                  <Menu
                    id={`toolbar-menu-${index}`}
                    anchorEl={anchorEl}
                    open={openMenuKey === keyName}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': `toolbar-button-${index}`,
                    }}
                  >
                    {mainNav[keyName].map((k, i) => (
                      <MenuItem 
                        key={`${k}-${i}`} 
                        onClick={() => handleNav(keyName, i)} 
                        sx={{
                          '&:hover': {
                            backgroundColor: "rgba(50, 168, 82, 0.7)",
                            color: "white"
                          },
                        }}
                      >
                        {k}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ))}
            </Box>
          </Toolbar>
        </>
        {mobileOpen && <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>}
      </Box>
    </>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
