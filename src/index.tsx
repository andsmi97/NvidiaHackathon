import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MuiThemeProvider, } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { theme } from './styles'
import "./i18n";
import AppContainer from "./AppContainer";


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
