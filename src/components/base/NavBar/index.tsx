import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import useWindowSize from "../../../utils/useWindowSize";
// import { unmountComponentAtNode } from "react-dom";

const NavBar = () => {
  let windowSize = useWindowSize();
  return <>{windowSize === "desktop" ? <DesktopNavBar /> : <MobileNavBar />}</>;
};

export default NavBar;
