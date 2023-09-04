import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./assets/GlobalStyles";
import { ThemeProvider } from "./context/themeContext/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </ThemeProvider>
  </Provider>
);
