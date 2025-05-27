import React from 'react';

const images = [
  '/images/lab1.jpg',
  '/images/lab2.jpg',
  '/images/lab3.jpg',
];

export default function Gallery() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Gallery ${i}`} className="w-full h-64 object-cover rounded shadow" />
        ))}
      </div>
    </section>
  );
}