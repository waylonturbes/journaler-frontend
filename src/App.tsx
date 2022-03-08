import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { About, Auth, Home } from "./components/pages";

import * as Pages from "./components/pages";

const App: React.FC = () => {
  return (
    <Box sx={{ flex: "auto" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" />
        <Route path="dashboard" />
        <Route path="auth" element={<Auth />} />
      </Routes>
      <Pages.Auth />
    </Box>
  );
};

export default App;
