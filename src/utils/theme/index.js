import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(16, 86, 143)",
    },
    background: {
      default: "white",
    },
    text: {
      secondary: "rgba(255, 255, 255, 1)",
    },
  },
  typography,
});

export default theme;