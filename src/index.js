import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "./store";
import { SnackbarProvider } from "notistack";


console.log("hi");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={4}>
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
