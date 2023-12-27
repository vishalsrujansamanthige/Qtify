import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#34c94b",
      dark: "#121212",
      contrastText: "#fff",
    },
  },
});

export default theme;
