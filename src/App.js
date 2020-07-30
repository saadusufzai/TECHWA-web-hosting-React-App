import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#000",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Hero setDarkMode={setDarkMode} darkMode={darkMode} />

      <Plans />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
export default App;
