import React from "react";
import { Box } from "@mui/material";
import Brand from "../../assets/brand.svg";

const NavBar: React.FC = () => {
  return (
    <Box component="header">
      <img src={Brand} alt="Journaler branding" />
    </Box>
  );
};

export default NavBar;
