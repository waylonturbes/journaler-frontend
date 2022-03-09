import React from "react";
import { Link } from "react-router-dom";
import { Avatar, IconButton, Menu, MenuItem, Fade } from "@mui/material";

interface AppProps {
  userInitial: string;
}

const AvatarButton = ({ userInitial }: AppProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-label="user avatar"
        sx={{
          color: "common.white",
          transition: "0.16s ease-in",
        }}
      >
        <Avatar
          component="image"
          className="user-icon"
          sx={{
            bgcolor: "primary.main",
            color: "common.white",
            fontWeight: "500",
            height: "46px",
            width: "46px",
          }}
        >
          {userInitial}
        </Avatar>
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} component={Link as any} to={"/profile"}>
          Profile
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link as any}
          to={"/auth/logout"}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default AvatarButton;
