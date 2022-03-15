import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { About, Home, Login } from "./components/pages";

const App: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flex: "auto" }}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" />
          <Route path="dashboard" />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;
