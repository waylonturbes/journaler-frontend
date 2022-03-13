import React from "react";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import useWindowSize from "../../../utils/useWindowSize";

const Footer = () => {
  let windowSize: number = useWindowSize();

  return <>{windowSize > 751 ? <DesktopFooter /> : <MobileFooter />}</>;
};

export default Footer;
