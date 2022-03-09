import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AvatarButton from "../AvatarButton";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Brand from "../../../assets/brand.svg";

interface NavProps {
  pathname: string;
  dummyUser: {
    email: string;
    isAuthenticated: boolean;
  };
}

const DesktopNavBar = (props: NavProps) => {
  const { pathname, dummyUser } = props;
  const [tab, setTab] = useState(pathname);
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
        aria-label="header navigation links"
        sx={{
          p: "8px",
          backgroundColor: "primary.dark",
          borderRadius: "6px",
        }}
      >
        <Tab value="home" label="Home" component={NavLink as any} to={"/"} />
        <Tab
          value="dashboard"
          label="Dashboard"
          component={NavLink as any}
          to={"/dashboard"}
        />
        <Tab
          value="about"
          label="About"
          component={NavLink as any}
          to={"/about"}
        />
        <Tab
          value="contact"
          label="Contact"
          component={NavLink as any}
          to={"/contact"}
        />
        {dummyUser.isAuthenticated ? (
          <Box sx={{ px: "16px", margin: "auto" }}>
            <AvatarButton userInitial={dummyUser.email[0].toUpperCase()} />
          </Box>
        ) : (
          <Tab
            value="login"
            component={NavLink as any}
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

export default DesktopNavBar;
