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
    desktop: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      desktop: 1000,
    },
  },
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#22cbff",
    },
    error: {
      main: "#ff225d",
    },
    warning: {
      main: "#ffc422",
    },
    success: {
      main: "#22ff56",
    },
    info: {
      main: "#cbff22",
    },
  },
});
