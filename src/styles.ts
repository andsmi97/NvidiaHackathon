import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import ProximaNova from "./fonts/ProximaNova-Regular.woff";

const proximaNova = {
  fontFamily: "ProximaNova",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
    local('ProximaNova'),
    local('ProximaNova-Regular'),
    url(${ProximaNova}) format('woff')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
export const useStyles = makeStyles((theme) => ({
  global: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    width: "100vw",
    height: "100vh",
    background: theme.palette.primary.light,
  },
}));

export const theme = createMuiTheme({
  palette: {
    primary: { main: "#73B900", light: "#EEF7E0", dark: "#269000" },
    secondary: { main: "#3509BA", light: "#0039C7", dark: "#230B6E" },
  },
  typography: {
    fontFamily: "Raleway, Arial",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [proximaNova],
      },
    },
  },
});
