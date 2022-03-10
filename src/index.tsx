import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, styled } from "@mui/material/styles";
import { theme } from "./styles/theme/themeOverride";
import NavBar from "./components/base/NavBar";
import Footer from "./components/base/Footer";

// Style Sheets
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/index.css";

const AppContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("desktop")]: {
    maxWidth: "1000px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  [theme.breakpoints.down("desktop")]: {
    maxWidth: "100%",
    padding: "0px",
  },
}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppContainer
          sx={{
            minHeight: "100vh",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <NavBar />
          <App />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
