import React from "react";
import { Box } from "@mui/material";

const DesktopFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: "30px",
        backgroundColor: "primary.main",
        border: "6px solid",
        borderColor: "primary.dark",
        borderRadius: "20px 20px 0px 0px",
      }}
    ></Box>
  );
};

export default DesktopFooter;
