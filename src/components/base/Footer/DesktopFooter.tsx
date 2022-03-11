import React from "react";
import { Box, List, Typography, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import CustomListItem from "../FooterListItem";
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
        <Typography variant="h6" color="common.white">
          FOLLOW ME
        </Typography>
        <CustomListItem
          text="LinkedIn"
          icon={<LinkedInIcon sx={{ color: "common.white" }} />}
          link="https://www.linkedin.com/in/waylon-turbes/"
          component="a"
        />
        <CustomListItem
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
        <Typography variant="h6" color="common.white">
          EXPLORE
        </Typography>
        <CustomListItem text="Home" component={NavLink as any} route={"/"} />
        <CustomListItem
          text="About"
          component={NavLink as any}
          route={"/about"}
        />
      </List>
    </Box>
  );
};

export default DesktopFooter;
