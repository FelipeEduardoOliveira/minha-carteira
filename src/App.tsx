import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/global-styles";
import Layout from "./Components/Layout";
import dark from "./Styles/themes/dark";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
