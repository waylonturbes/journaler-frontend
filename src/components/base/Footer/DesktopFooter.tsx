import React from "react";
import { Box, List, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FooterListItem, FooterListHeader } from "./CustomFooterComponents";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const DesktopFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: "20px",
        backgroundColor: "primary.dark",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <List component="div" sx={{ p: "20px" }}>
        <FooterListHeader title="FOLLOW ME" />
        <FooterListItem
          text="LinkedIn"
          icon={<LinkedInIcon sx={{ color: "common.white" }} />}
          link="https://www.linkedin.com/in/waylon-turbes/"
          component="a"
        />
        <FooterListItem
          text="GitHub"
          icon={<GitHubIcon sx={{ color: "common.white" }} />}
          link="https://github.com/waylonturbes"
          component="a"
        />
      </List>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ bgcolor: "common.white" }}
      />
      <List component="div" sx={{ p: "20px" }}>
        <FooterListHeader title="EXPLORE" />
        <FooterListItem text="Home" component={NavLink as any} route={"/"} />
        <FooterListItem
          text="About"
          component={NavLink as any}
          route={"/about"}
        />
        <FooterListItem
          text="Contact"
          component={NavLink as any}
          route={"/contact"}
        />
      </List>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ bgcolor: "common.white" }}
      />
      <List component="div" sx={{ p: "20px" }}>
        <FooterListHeader title="FIND MORE" />
        <FooterListItem
          text="Register"
          component={NavLink as any}
          route={"/auth/register"}
        />
        {/* Dashboard will only be visible when logged in */}
        <FooterListItem
          text="Dashboard"
          component={NavLink as any}
          route={"/dashboard"}
        />
        <FooterListItem
          text="View Code"
          component="a"
          link="https://github.com/waylonturbes/journaler-frontend"
        />
      </List>
    </Box>
  );
};

export default DesktopFooter;
