import React from "react";
import { Box, List, Typography } from "@mui/material";
import CustomListItem from "../FooterListItem";
// import GitHubIcon from "@mui/icons-material/GitHub";
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
        />
        <CustomListItem
          text="LinkedIn"
          icon={<LinkedInIcon sx={{ color: "common.white" }} />}
          link="https://github.com/waylonturbes"
        />
      </List>
    </Box>
  );
};

export default DesktopFooter;
