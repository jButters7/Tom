import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Research from './components/pages/Research';
import AboutMe from './components/pages/AboutMe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/research/:category' element={<Research />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;