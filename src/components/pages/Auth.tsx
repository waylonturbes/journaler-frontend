import React from "react";
import { Box } from "@mui/material";
import { Login } from "../forms";

const Auth: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Login />
    </Box>
  );
};

export default Auth;
