import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import "./index.css";

import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const theme = createTheme({
  typography: {
    fontFamily:[ 
      'Satisfy',
       'cursive'
  ].join(','),
  },
  palette: {
    primary: {
      main: '#18ffff'
    },
    secondary: {
      main: '#ff80ab'
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,

  document.getElementById("root")
);
