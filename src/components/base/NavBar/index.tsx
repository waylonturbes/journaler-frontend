import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import useWindowSize from "../../../utils/useWindowSize";

const NavBar = () => {
  let windowSize = useWindowSize();
  // will be replaced when connected to backend
  const dummyUser = {
    email: "jkbowser@att.net",
    isAuthenticated: true,
  };

  return (
    <>
      {windowSize > 1000 ? (
        <DesktopNavBar dummyUser={dummyUser} />
      ) : (
        <MobileNavBar dummyUser={dummyUser} />
      )}
    </>
  );
};

export default NavBar;
