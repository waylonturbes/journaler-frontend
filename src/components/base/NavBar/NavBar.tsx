import React, { useState } from "react";
import { Link } from "react-router-dom";
import AvatarButton from "../AvatarButton";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Brand from "../../../assets/brand.svg";

const NavBar = () => {
  const [tab, setTab] = useState("");
  const isAuthenticated = true;
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const dummyUser = {
    email: "jkbowser@att.net",
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
        border: "6px solid #3E2B24", // color is primary.dark
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
          backgroundColor: "primary.dark",
          borderRadius: "6px",
        }}
      >
        <Tab value="home" label="Home" component={Link as any} to={"/"} />
        <Tab
          value="dashboard"
          label="Dashboard"
          component={Link as any}
          to={"/dashboard"}
        />
        <Tab
          value="about"
          label="About"
          component={Link as any}
          to={"/about"}
        />
        <Tab
          value="contact"
          label="Contact"
          component={Link as any}
          to={"/contact"}
        />
        {isAuthenticated ? (
          <Box sx={{ px: "16px", margin: "auto" }}>
            {tab === "profile" ? (
              <AvatarButton
                onClickAction={() => setTab("profile")}
                outline={{
                  "outline-offset": "-4px",
                  outline: "2px solid #ff5722", // color is secondary.main
                }}
                userInitial={dummyUser.email[0].toUpperCase()}
              />
            ) : (
              <AvatarButton
                onClickAction={() => setTab("profile")}
                userInitial={dummyUser.email[0].toUpperCase()}
              />
            )}
          </Box>
        ) : (
          <Tab
            value="login"
            component={Link as any}
            to={"/auth/login"}
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
