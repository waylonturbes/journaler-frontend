import React from "react";
import { Box, List, Divider, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FooterListItem, FooterListHeader } from "./CustomFooterComponents";
import Brand from "../../../assets/brand.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const DesktopFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: "20px",
        backgroundColor: "common.white",
        display: "flex",
        justifyContent: "space-evenly",
        boxShadow: "none",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "grey.400",
        borderBottom: "none",
        borderLeftWidth: { md: "0px", lg: "1px" },
        borderRightWidth: { md: "0px", lg: "1px" },
        borderRadius: { md: "0px", lg: "8px 8px 0px 0px" },
      }}
    >
      <List component="div" sx={{ p: "20px" }}>
        <FooterListHeader title="FOLLOW ME" />
        <FooterListItem
          text="LinkedIn"
          icon={<LinkedInIcon sx={{ color: "common.black" }} />}
          link="https://www.linkedin.com/in/waylon-turbes/"
          component="a"
        />
        <FooterListItem
          text="GitHub"
          icon={<GitHubIcon sx={{ color: "common.black" }} />}
          link="https://github.com/waylonturbes"
          component="a"
        />
      </List>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ bgcolor: "common.black" }}
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
        sx={{ bgcolor: "common.black" }}
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
      <Divider
        orientation="vertical"
        flexItem
        sx={{ bgcolor: "common.black" }}
      />
      <Box
        component="div"
        sx={{
          p: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          aligntContent: "center",
        }}
      >
        <Box component={NavLink as any} to={"/"}>
          <Box
            component="img"
            src={Brand}
            alt="Journaler logo"
            sx={{ height: "50px" }}
          ></Box>
        </Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, color: "common.black", textAlign: "center" }}
        >
          Copyright © 2022 Journaler
        </Typography>
      </Box>
    </Box>
  );
};

export default DesktopFooter;
