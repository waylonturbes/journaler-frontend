import React from "react";
import { Link } from "react-router-dom";
import AvatarButton from "../AvatarButton";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

const MobileNavBar = () => {
  const isAuthenticated = false;

  const dummyUser = {
    email: "jkbowser@att.net",
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "primary.dark" }}
    >
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
          >
            <MenuIcon fontSize="large" />
          </IconButton>
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
        {isAuthenticated ? (
          <AvatarButton userInitial={dummyUser.email[0].toUpperCase()} />
        ) : (
          <Button
            variant="outlined"
            color="secondary"
            component={Link as any}
            to={"/login"}
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
