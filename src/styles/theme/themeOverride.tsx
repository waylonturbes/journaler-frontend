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
}

export const theme = createTheme({
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
