import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

interface CustomListItemProps {
  text: string;
  icon?: any;
  link?: string;
  component: any;
  route?: any;
}

const CustomListItem = (props: CustomListItemProps) => {
  const { text, icon, link, component, route } = props;

  return (
    <ListItem sx={{ p: "0px" }}>
      <ListItemButton
        sx={{
          px: "0px",
          py: "5px",
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
            color: "common.white",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
