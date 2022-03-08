import React from "react";
import { Link } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";

interface AppProps {
  onClickAction: () => void;
  userInitial: string;
  styles?: {
    "outline-offset": string;
    outline: string;
  };
}

const AvatarButton = ({ onClickAction, styles, userInitial }: AppProps) => {
  return (
    <IconButton
      onClick={onClickAction}
      component={Link as any}
      to={"/profile"}
      aria-label="user avatar"
      sx={[
        {
          color: "common.white",
          transition: "0.16s ease-in",
        },
        { ...styles },
      ]}
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
  );
};

export default AvatarButton;
