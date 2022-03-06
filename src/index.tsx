import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { theme } from "./styles/theme/themeOverride";
import { NavBar } from "./components/base";

// Style Sheets
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <NavBar />
        <App />
      </Container>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
