import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Gallery from './components/Gallery.tsx';
import Home from './components/Home.tsx';
import Team from './components/Team.tsx';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={< Team />} />
          <Route path="/gallery" element={<Gallery />} />
      </Routes>
          </Router>
    </div>
  );
}

export default App;
