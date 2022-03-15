import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AvatarButton from "../AvatarButton";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import Brand from "../../../assets/brand.svg";

interface NavProps {
  dummyUser: {
    email: string;
    isAuthenticated: boolean;
  };
}

const MobileNavBar = (props: NavProps) => {
  const { dummyUser } = props;
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawer(open);
    };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "common.white",
        boxShadow: "none",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "grey.400",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
      }}
    >
      <Toolbar
        sx={{
          py: "10px",
          px: "20px",
          display: "flex",
          justifyContent: "space-between",
          aligntItems: "center",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ m: "0px", color: "common.black" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <SwipeableDrawer
            open={drawer}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <List
              component="nav"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <ListItem>
                <ListItemButton component={NavLink as any} to={"/"}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton component={NavLink as any} to={"/dashboard"}>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton component={NavLink as any} to={"/about"}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton component={NavLink as any} to={"/contact"}>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </ListItem>
            </List>
          </SwipeableDrawer>
          <Box
            component={NavLink as any}
            to={"/"}
            sx={{
              height: { xs: "30px", sm: "40px" },
              marginLeft: { xs: "5px", sm: "10px" },
              alignSelf: "center",
            }}
          >
            <Box
              component="img"
              src={Brand}
              alt="Journaler logo"
              sx={{ height: { xs: "30px", sm: "40px" } }}
            ></Box>
          </Box>
        </Box>
        {dummyUser.isAuthenticated ? (
          <AvatarButton userInitial={dummyUser.email[0].toUpperCase()} />
        ) : (
          <Button
            variant="outlined"
            color="secondary"
            component={NavLink as any}
            to={"/auth/login"}
            startIcon={<PersonIcon />}
            sx={{
              py: "12.75px",
              px: "12.75px",
            }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MobileNavBar;
