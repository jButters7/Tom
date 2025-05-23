import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Research from './components/pages/Research';
import AboutMe from './components/pages/AboutMe';
import CV from './components/pages/CV';
import Media from './components/pages/Media';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/css/App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ height: "80px" }}></div>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/research/:category' element={<Research />} />
          <Route path='/media' exact element={<Media />} />
          <Route path='/cv' element={<CV />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;