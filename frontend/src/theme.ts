import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a20063",
    },
    secondary: {
      main: "#bf4887",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ddd",
    },
  },
});

export default theme;
