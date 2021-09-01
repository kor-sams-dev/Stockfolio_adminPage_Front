import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";
import GlobalFonts from "./styles/fonts/fonts";

ReactDOM.render(
  <>
    <GlobalStyle />
    <GlobalFonts />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
