import React from "react";
import { Box } from "@mui/material";

import * as Pages from "./components/pages";

const App: React.FC = () => {
  return (
    <Box sx={{ flex: "auto" }}>
      <Pages.Auth />
    </Box>
  );
};

export default App;
