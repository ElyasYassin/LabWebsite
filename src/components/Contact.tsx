import React from 'react';

export default function Contact() {
  return (
    <section className="p-8 max-w-xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-4">You can reach us at:</p>
      <ul className="text-gray-700">
        <li>Email: <a href="mailto:sairlab@example.edu" className="text-blue-600 underline">sairlab@example.edu</a></li>
        <li>Location: CU Denver Campus, North Classroom 2102</li>
      </ul>
    </section>
  );
}