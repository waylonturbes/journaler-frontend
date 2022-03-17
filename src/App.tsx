import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { About, Home, Login, Register, Dashboard } from "./components/pages";

const App: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flex: "auto" }}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;
