import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  Avatar,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import PublishIcon from "@mui/icons-material/Publish";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Logo from "../image/Logo2.jpg";

const SideNavbar = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNavigation = (path, index) => {
    setSelectedIndex(index);
    console.log(selectedIndex);
    navigate(path);
  };
 
  const accountname = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    handleNavigation("/", 2);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#f9f1f1",
          color: "#fff",
        },
      }}
    >
      <List>
        <ListItem>
          <Avatar
            alt="Property Logo"
            src={Logo}
            sx={{ width: 80, height: 80, margin: "0 auto" }}
          />
          <div
            style={{
              marginLeft: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bolder",
                fontFamily: "Serif",
                color: "#337ab7",
                textTransform: "uppercase",
                fontSize: "1.2rem",
              }}
            >
              {accountname.toUpperCase()}
            </Typography>
          </div>
        </ListItem>
        <Divider sx={{ backgroundColor: "#444" }} />
        <ListItem
          component="div"
          onClick={() => handleNavigation("/list", 0)}
          sx={{
            "&:hover": {
              backgroundColor: "#386aa5",
              color: "#ffffff",
              "& .MuiListItemIcon-root": {
                color: "#ffffff",
              },
            },
            backgroundColor: selectedIndex === 0 ? "#337ab7" : "inherit",
            color: selectedIndex === 0 ? "#fff" : "#0000ff",
          }}
        >
          <ListItemIcon
            sx={{ color: selectedIndex === 0 ? "#fff" : "#0000ff" }}
          >
            <ListIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              variant: "body1",
              sx: {
                fontWeight: "bold",
                color: selectedIndex === 0 ? "#fff" : "#000",
              },
            }}
            primary="List"
          />
        </ListItem>
        <ListItem
          component="div"
          onClick={() => handleNavigation("/bulk-listing", 1)}
          sx={{
            "&:hover": {
              backgroundColor: "#386aa5",
              color: "#000",
              "& .MuiListItemIcon-root": {
                color: "#ffffff",
              },
            },
            backgroundColor: selectedIndex === 1 ? "#337ab7" : "inherit",
            color: selectedIndex === 1 ? "#fff" : "#0000ff",
          }}
        >
          <ListItemIcon
            sx={{ color: selectedIndex === 1 ? "#fff" : "#0000ff" }}
          >
            <PublishIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              variant: "body1",
              sx: {
                fontWeight: "bold",
                color: selectedIndex === 1 ? "#fff" : "#000",
              },
            }}
            primary="Bulk Listing"
          />
        </ListItem>
        <Divider sx={{ backgroundColor: "#444" }} />
        <ListItem
          component="div"
          onClick={handleLogout}
          sx={{
            "&:hover": {
              backgroundColor: "#386aa5",
              color: "#000",
              "& .MuiListItemIcon-root": {
                color: "#ffffff",
              },
            },
            backgroundColor: selectedIndex === 2 ? "#337ab7" : "inherit",
            color: selectedIndex === 2 ? "#fff" : "#0000ff",
          }}
        >
          <ListItemIcon sx={{ color: selectedIndex === 2 ? "#fff" : "#000" }}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              variant: "body1",
              sx: {
                fontWeight: "bold",
                color: selectedIndex === 2 ? "#fff" : "#000",
              },
            }}
            primary="Logout"
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideNavbar;
