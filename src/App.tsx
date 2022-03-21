import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/base/NavBar";
import Footer from "./components/base/Footer";
import {
  About,
  Home,
  Login,
  Register,
  Dashboard,
  Contact,
} from "./components/pages";
import { useLocation } from "react-router-dom";

const App: React.FC = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <NavBar />
      <Box sx={{ display: "flex", flex: "auto" }}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
