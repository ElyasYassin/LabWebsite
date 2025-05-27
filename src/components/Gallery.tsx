import React from 'react';

const images = [
  '/images/gallery/lab1.jpg',
  '/images/gallery/event1.jpg',
  '/images/gallery/presentation1.jpg',
  '/images/gallery/group1.jpg',
  '/images/gallery/whiteboard.jpg',
  '/images/gallery/code-session.jpg',
];

export default function Gallery() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-800 mb-6">Gallery</h2>
      <p className="text-gray-700 mb-8">Photos from our lab, events, and research activities.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}