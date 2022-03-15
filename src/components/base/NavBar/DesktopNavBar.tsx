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
      color="inherit"
      sx={{
        px: "20px",
        py: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "none",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "grey.400",
        borderTop: "none",
        borderLeftWidth: { md: "0px", lg: "1px" },
        borderRightWidth: { md: "0px", lg: "1px" },
        borderRadius: { md: "0px", lg: "0px 0px 8px 8px" },
      }}
    >
      <Box component={NavLink as any} to={"/"}>
        <Box
          component="img"
          src={Brand}
          alt="Journaler branding"
          sx={{ px: "17px" }}
        />
      </Box>
      <ButtonGroup
        variant="text"
        fullWidth={true}
        size="large"
        aria-label="header navigation links"
        color="inherit"
        sx={{ maxWidth: "600px" }}
      >
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
          <Box sx={{ px: "11px", margin: "auto" }}>
            <AvatarButton userInitial={dummyUser.email[0].toUpperCase()} />
          </Box>
        ) : (
          <Button
            size="large"
            component={NavLink as any}
            to={"/login"}
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
