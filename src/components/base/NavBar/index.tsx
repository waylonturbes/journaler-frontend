import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import { styled } from "@mui/material/styles";

const DesktopNavContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("desktop")]: {
    display: "block",
  },
  [theme.breakpoints.down("desktop")]: {
    display: "none",
  },
}));

const MobileNavContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("desktop")]: {
    display: "none",
  },
  [theme.breakpoints.down("desktop")]: {
    display: "block",
  },
}));

const NavBar = () => {
  return (
    <>
      <DesktopNavContainer>
        <DesktopNavBar />
      </DesktopNavContainer>
      <MobileNavContainer>
        <MobileNavBar />
      </MobileNavContainer>
    </>
  );
};

export default NavBar;
