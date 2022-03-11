import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface CustomListItemProps {
  text: string;
  icon: any;
  link: string;
}

const CustomListItem = (props: CustomListItemProps) => {
  const { text, icon, link } = props;

  return (
    <ListItem sx={{ p: "0px" }}>
      <ListItemButton
        sx={{
          px: "0px",
          py: "5px",
          justifyContent: "space-between",
        }}
        component="a"
        href={link}
        target="_blank"
      >
        <ListItemIcon sx={{ minWidth: "auto", marginRight: "10px" }}>
          {icon}
        </ListItemIcon>
        <ListItemText
          sx={{ minWidth: "10px", display: "flex" }}
          primary={text}
          primaryTypographyProps={{
            fontSize: "1rem",
            fontWeight: "medium",
            color: "common.white",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

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
