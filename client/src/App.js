import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";
import DirectorPage from "./pages/DirectorPage";
import GlobalStyle from "./components/styles/GlobalStyle";
import { ThemeProvider} from "styled-components";
import {themeSettings} from "./theme";
import NavbarComponent from "./components/common/NavbarComponent";
import {useState} from "react";


function App() {
    const [the, toggleTheme] = useState("light");
    const updateTheme = (newTheme) => {
        toggleTheme(newTheme);
    };

    return (
      <div>
        <GlobalStyle />
          <ThemeProvider theme={themeSettings[the]}>
              <Router>
                  <NavbarComponent updateTheme={updateTheme} them={the} />
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/film" element={<FilmPage />}/>
                      <Route path="/director" element={<DirectorPage />}/>
                      <Route path="*" element={<Navigate to="/"/>}/>
                  </Routes>
              </Router>
          </ThemeProvider>
      </div>
  );
}

export default App;
