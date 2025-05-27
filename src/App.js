import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Team from './components/Team.tsx';
import Gallery from './components/Gallery.tsx';
import Join from './components/Join.tsx';
import Contact from './components/Contact.tsx'; 
import Nav from './components/Nav.tsx';
import Footer from './components/Footer.tsx';
import Projects from './components/Projects.tsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Persistent navigation */}
        <Nav />

        {/* Main content */}
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;