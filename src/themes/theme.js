import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },

  palette: {
    primary: {
      main: "#1d8457",
    },
  },

  components: {
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "50%",
          maxWidth: "150px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "400",
        },
      },
    },
  },
});
