import React from 'react';
import { Link } from 'react-router-dom';
import vidbg from './images/Homebg.mp4'; // Replace with SAIR Lab logo

export default function Home() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={vidbg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-6xl font-bold">SAIR Lab</h1>
        <p className="mt-4 text-2xl">
          Student AI Research Lab | Exploring the future of Artificial Intelligence
        </p>
        <div className="mt-6 space-x-4">
          <Link to="/about" className="px-5 py-2 bg-white text-blue-800 rounded hover:bg-gray-100">About Us</Link>
          <Link to="/projects" className="px-5 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Our Research</Link>
        </div>
      </div>
    </section>
  );
}