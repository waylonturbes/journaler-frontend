import React from "react";
import { NavLink } from "react-router-dom";
import AvatarButton from "../AvatarButton";
import { AppBar, Box, ButtonGroup, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Brand from "../../../assets/brand.svg";

interface NavProps {
  dummyUser: {
    email: string;
    isAuthenticated: boolean;
  };
}

const DesktopNavBar = (props: NavProps) => {
  const { dummyUser } = props;

  return (
    <AppBar
      component="header"
      position="sticky"
      color="transparent"
      sx={{
        px: "20px",
        py: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={Brand} alt="Journaler branding" />
      <ButtonGroup variant="text" aria-label="header navigation links">
        <Button
          size="large"
          value="home"
          label="Home"
          component={NavLink as any}
          to={"/"}
        >
          HOME
        </Button>
        <Button
          size="large"
          value="dashboard"
          component={NavLink as any}
          to={"/dashboard"}
        >
          DASHBOARD
        </Button>
        <Button
          size="large"
          value="about"
          component={NavLink as any}
          to={"/about"}
        >
          ABOUT
        </Button>
        <Button
          size="large"
          value="contact"
          component={NavLink as any}
          to={"/contact"}
        >
          CONTACT
        </Button>
        {dummyUser.isAuthenticated ? (
          <Box sx={{ px: "16px", margin: "auto" }}>
            <AvatarButton userInitial={dummyUser.email[0].toUpperCase()} />
          </Box>
        ) : (
          <Button
            size="large"
            component={NavLink as any}
            to={"/auth/login"}
            icon={<PersonIcon />}
            iconPosition="start"
          >
            LOGIN
          </Button>
        )}
      </ButtonGroup>
    </AppBar>
  );
};

export default DesktopNavBar;
