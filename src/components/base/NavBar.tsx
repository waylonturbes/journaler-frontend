import React, { useState } from "react";
import { AppBar, Tabs, Tab, Avatar, IconButton, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Brand from "../../assets/brand.svg";

const NavBar: React.FC = () => {
  const [value, setValue] = useState("home");
  const isAuthenticated = true;
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <AppBar
      component="header"
      position="sticky"
      sx={{
        px: "30px",
        py: "15px",
        height: "94",
        borderRadius: "0px 0px 20px 20px",
        border: "4px solid #3E2B24",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={Brand} alt="Journaler branding" />
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="header nav links"
        sx={{
          p: "8px",
          backgroundColor: "#3E2B24",
          borderRadius: "6px",
        }}
      >
        <Tab value="home" label="Home" />
        <Tab value="dashboard" label="Dashboard" />
        <Tab value="about" label="About" />
        <Tab value="contact" label="Contact" />
        {isAuthenticated ? (
          <Box sx={{ px: "16px", margin: "auto" }}>
            <IconButton aria-label="user avatar" sx={{ color: "common.white" }}>
              <Avatar
                component="image"
                className="user-icon"
                sx={{
                  bgcolor: "primary.main",
                  color: "common.white",
                  fontWeight: "500",
                  height: "46px",
                  width: "46px",
                }}
              >
                WT
              </Avatar>
            </IconButton>
          </Box>
        ) : (
          <Tab
            value="login"
            icon={<PersonIcon />}
            iconPosition="start"
            label="Login"
          />
        )}
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
