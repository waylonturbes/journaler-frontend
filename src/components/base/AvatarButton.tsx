import React from "react";
import { Avatar, IconButton } from "@mui/material";

interface AppProps {
  onClickAction?: () => void;
  userInitial: string;
  outline?: {
    "outline-offset": string;
    outline: string;
  };
}

const AvatarButton = ({ onClickAction, outline, userInitial }: AppProps) => {
  return (
    <IconButton
      onClick={onClickAction}
      aria-label="user avatar"
      sx={[
        {
          color: "common.white",
          transition: "0.16s ease-in",
        },
        { ...outline },
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
