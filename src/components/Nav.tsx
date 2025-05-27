import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/logo.png'; // Replace with SAIR Lab logo

export default function Nav() {
  const location = useLocation();

  // Use light text on homepage, dark on internal pages
  const isDarkBg = location.pathname === '/' || location.pathname === '/home';
  const textColor = isDarkBg ? 'text-white' : 'text-black';
  const linkHover = isDarkBg ? 'hover:text-gray-300' : 'hover:text-gray-700';

  return (
    <nav
      className={`absolute top-0 left-10 right-10 z-50 p-4 flex justify-between items-center flex-wrap transition-all duration-300 ${textColor}`}
    >
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="SAIR Lab Logo" className="h-12 w-12" />
        <span className={`text-xl font-semibold ${textColor}`}>SAIR Lab</span>
      </Link>

      <div className={`flex space-x-6 font-medium ${textColor}`}>
        <Link to="/about" className={`${linkHover}`}>About</Link>
        <Link to="/team" className={`${linkHover}`}>Team</Link>
        <Link to="/projects" className={`${linkHover}`}>Research</Link>
        <Link to="/gallery" className={`${linkHover}`}>Gallery</Link>
        <Link to="/join" className={`${linkHover}`}>Join Us</Link>
        <Link to="/contact" className={`${linkHover}`}>Contact</Link>
      </div>
    </nav>
  );
}