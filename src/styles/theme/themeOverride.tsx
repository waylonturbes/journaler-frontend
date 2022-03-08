import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
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
