import React from 'react';

export default function Join() {
  return (
    <section className="p-8 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">Join SAIR Lab</h2>
      <p className="text-gray-700 mb-6">
        Interested in AI research? We're looking for motivated students to join our lab. Opportunities are available for all experience levels!
      </p>

      <a
        href="https://forms.gle/YOUR_GOOGLE_FORM_LINK" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        Apply Now
      </a>
    </section>
  );
}