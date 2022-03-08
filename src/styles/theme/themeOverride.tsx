import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    desktop: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 970,
      desktop: 1100,
    },
  },
  palette: {
    primary: {
      main: "#795548",
      dark: "#3E2B24",
    },
    secondary: {
      main: "#ff5722",
    },
    error: {
      main: "#e91e63",
    },
    success: {
      main: "#4caf50",
    },
    info: {
      main: "#2196f3",
    },
  },
});
