import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import useWindowSize from "../../../utils/useWindowSize";

const NavBar = () => {
  let windowSize = useWindowSize();

  return (
    <>
      {windowSize === "desktop" ? (
        <DesktopNavBar initialRoute="home" />
      ) : (
        <MobileNavBar />
      )}
    </>
  );
};

export default NavBar;
