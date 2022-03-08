import React, { useState } from "react";
import { AppBar, Tabs, Tab, Avatar, IconButton, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Brand from "../../assets/brand.svg";

const NavBar: React.FC = () => {
  const [tab, setTab] = useState("home");
  const isAuthenticated = true;
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <AppBar
      component="header"
      position="sticky"
      sx={{
        px: "20px",
        py: "10px",
        height: "94",
        borderRadius: "0px 0px 20px 20px",
        border: "6px solid #3E2B24",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={Brand} alt="Journaler branding" />
      <Tabs
        value={tab}
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
            {tab === "profile" ? (
              <IconButton
                onClick={() => setTab("profile")}
                aria-label="user avatar"
                sx={{
                  color: "common.white",
                  transition: "0.16s ease-in",
                  "outline-offset": "-4px",
                  outline: "2px solid #ff5722",
                }}
              >
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
            ) : (
              <IconButton
                onClick={() => setTab("profile")}
                aria-label="user avatar"
                sx={{
                  color: "common.white",
                  transition: "0.16s ease-in",
                }}
              >
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
            )}
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
