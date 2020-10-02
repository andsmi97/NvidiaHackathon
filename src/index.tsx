import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import AppContainer from "./AppContainer";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#73B900", light: "#EEF7E0", dark: "#269000" },
    secondary: { main: "#3509BA", light: "#0039C7", dark: "#230B6E" },
    type: "dark",
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
