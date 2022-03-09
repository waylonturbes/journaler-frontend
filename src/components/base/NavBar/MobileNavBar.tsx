import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AvatarButton from "../AvatarButton";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  IconButton,
  Button,
  SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

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
    <AppBar position="static" sx={{ backgroundColor: "primary.dark" }}>
      <Toolbar
        sx={{
          py: "20px",
          px: "10px",
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
            color="inherit"
            aria-label="menu"
            sx={{ m: "0px" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <SwipeableDrawer
            open={drawer}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Typography variant="h4">Testing 123</Typography>
          </SwipeableDrawer>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          >
            Journaler
          </Typography>
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
