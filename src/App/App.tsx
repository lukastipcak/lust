import React from "react";
import "./App.css";
import Layout from "../containers/Layout/Layout";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
};

export default App;
