import React from "react";
import { Box, List, Divider, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FooterListItem, FooterListHeader } from "./CustomFooterComponents";
import Brand from "../../../assets/brand.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MobileFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: "20px",
        backgroundColor: "primary.dark",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box>
        <List component="div" sx={{ p: "10px" }}>
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
        <List component="div" sx={{ p: "10px" }}>
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
      </Box>
      <List component="div" sx={{ p: "10px" }}>
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
      <Divider flexItem sx={{ bgcolor: "common.white", my: "10px" }} />
      <Box
        component="div"
        sx={{
          p: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          aligntContent: "center",
        }}
      >
        <Box
          component={NavLink as any}
          to={"/"}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={Brand}
            alt="Journaler logo"
            sx={{ height: "50px" }}
          ></Box>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            color: "common.white",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Copyright © 2022 Journaler
        </Typography>
      </Box>
    </Box>
  );
};

export default MobileFooter;
