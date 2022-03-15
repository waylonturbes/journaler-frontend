import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

interface FooterListItemProps {
  text: string;
  icon?: any;
  link?: string;
  component: any;
  route?: string;
}

interface FooterHeaderProps {
  title: string;
}

export const FooterListHeader = (props: FooterHeaderProps) => {
  const { title } = props;
  return (
    <Typography variant="h6" color="common.black" sx={{ mb: "8px" }}>
      {title}
    </Typography>
  );
};

export const FooterListItem = (props: FooterListItemProps) => {
  const { text, icon, link, component, route } = props;

  return (
    <ListItem sx={{ p: "0px" }}>
      <ListItemButton
        sx={{
          p: "0px",
          justifyContent: "space-between",
        }}
        component={component}
        to={route}
        href={link}
        target={component === "a" ? "_blank" : "_self"}
      >
        {icon && (
          <ListItemIcon sx={{ minWidth: "auto", marginRight: "10px" }}>
            {icon}
          </ListItemIcon>
        )}
        <ListItemText
          sx={{ minWidth: "10px", display: "flex" }}
          primary={text}
          primaryTypographyProps={{
            fontSize: "1rem",
            fontWeight: "medium",
            color: "common.black",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};
