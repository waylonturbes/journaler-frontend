import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import useWindowSize from "../../../utils/useWindowSize";
import usePathname from "../../../utils/usePathname";

const NavBar = () => {
  let windowSize = useWindowSize();
  let currentPath = usePathname();

  return (
    <>
      {windowSize === "desktop" ? (
        <DesktopNavBar pathname={currentPath} />
      ) : (
        <MobileNavBar />
      )}
    </>
  );
};

export default NavBar;
