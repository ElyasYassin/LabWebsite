import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-blue-800">SAIR Lab</h1>
        <p className="mt-4 text-xl text-gray-700">
          Student AI Research Lab | Exploring the future of Artificial Intelligence
        </p>
        <div className="mt-6 space-x-4">
          <Link to="/about" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">About Us</Link>
          <Link to="/projects" className="px-5 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Our Research</Link>
        </div>
      </div>
    </section>
  );
}