import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import useWindowSize from "../../../utils/useWindowSize";
import usePathname from "../../../utils/usePathname";

const NavBar = () => {
  let windowSize = useWindowSize();
  let currentPath = usePathname();
  // will be replaced when connected to backend
  const dummyUser = {
    email: "jkbowser@att.net",
    isAuthenticated: true,
  };

  return (
    <>
      {windowSize === "desktop" ? (
        <DesktopNavBar pathname={currentPath} dummyUser={dummyUser} />
      ) : (
        <MobileNavBar dummyUser={dummyUser} />
      )}
    </>
  );
};

export default NavBar;
