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
  },
});
