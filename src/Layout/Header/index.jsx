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
import HeaderData from '../../Services/Utils/json/Header';

const drawerWidth = 240;
const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const nav = useNavigate()
  const { mainNav, navItems } = HeaderData();
  const [anchorEl, setAnchorEl] = React.useState(null);
  //const open = Boolean(anchorEl);
  const [openMenuKey, setOpenMenuKey] = useState(null)

  const handleClick = (event, key) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuKey(key)
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenuKey(null)
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = useNavigate()

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} onClick={() => nav("/")}>
        Krishna College of Agriculture & Technology
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding >
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => nav(`${item}`)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <header className="header-toolbar">
        <div className="header-top">
          <span className="header-top-left" onClick={()=>navigate('/')}>
            <ClgIcon />
            <span className="header-college-name">
              <h2>Krishna College of Agriclture & Technology</h2>
              <h5>Affiliated to Tamil Nadu Agricultural University</h5>
            </span>
          </span>
          <span className="header-top-right">
            {navItems.map((item, index) => (
              <Button key={item} sx={{ color: "#fff" }} onClick={() => nav(`${item}`)} className="header-nav">
                <h3> {item}</h3>
                {(navItems.length - 1 > index) && <h2>|</h2>}
              </Button>
            ))}
          </span>
        </div>
        <div className="header-bottom">
          {Object.keys(mainNav).map((keyName, index) => {
            // return <Button key={index} sx={{color:"#fff"}}>{keyName}</Button>
            return <React.Fragment key={index}>
              <Button
                //key={index}
                sx={{ color: "#fff" }}
                id={`toolbar-${index}`}
                //id={`toolbar-button`}
                aria-controls={openMenuKey === keyName ? `toolbar-menu` : undefined}
                aria-haspopup="true"
                aria-expanded={openMenuKey===keyName ? 'true' : undefined}
                onClick={(event) => (handleClick(event, keyName))}
                endIcon={<KeyboardArrowDownIcon />}
              >
                {keyName}
              </Button>
              <Menu
                key={`${keyName}-${index}`}
                id={`toolbar-menu-${index}`}
                anchorEl={anchorEl}
                open={openMenuKey===keyName}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': `toolbar-button-${index}`,
                }}
              >
                {mainNav[keyName].map((k, i) => {
                  return <MenuItem key={`${k}-${i}`} onClick={handleClose}>{k}</MenuItem>
                })}
              </Menu>
            </React.Fragment>
            //console.log(keyName, index, mainNav[keyName])
          })}
        </div >
        {/* <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar className="header-toolbar">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <ClgIcon />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                onClick={()=>nav("/")}
              >
                Krishna College of Agriculture & Technology
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#fff" }} onClick={()=>nav(`${item}`)}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>  */}
      </header >
    </>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
