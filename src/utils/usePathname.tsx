import { useLocation } from "react-router-dom";

const usePathname = (): string => {
  const location = useLocation();
  const { pathname } = location;
  let path: string = "";
  if (pathname === "/") {
    path = "home";
  } else if (pathname === "/about") {
    path = "about";
  } else if (pathname === "/dashboard") {
    path = "dashboard";
  } else if (pathname === "/contact") {
    path = "contact";
  } else if (pathname === "/auth/login") {
    path = "login";
  } else if (pathname === "/auth/logout") {
    path = "logout";
  } else {
    path = pathname;
  }
  return path;
};

export default usePathname;
