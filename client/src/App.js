import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";
import DirectorPage from "./pages/DirectorPage";


function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/film" Component={FilmPage}/>
            <Route path="/director" Component={DirectorPage}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
