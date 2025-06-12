import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Join() {
  return (
    <section className="p-8 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">Join SAIR Lab</h2>
      <p className="text-gray-700 mb-6">
        Interested in AI research? We're looking for collaborators to join our lab. Opportunities are available for all experience levels!
      </p>

      <a
        href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        Apply Now <ArrowRight size={16} />
      </a>
      {/* Getting Involved Section Heading */}
      <h3 className="text-3xl font-bold text-blue-800 mt-12 mb-6">Getting Involved</h3>

      <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-2">What to Expect</h3>
      <ul className="text-gray-700 space-y-2 text-left list-disc list-inside mb-12">
        <li>Lab meetings and faculty mentorship</li>
        <li>Opportunities to publish and present research paper</li>
      </ul>

      {/* Contact Form */}
      <h3 className="text-2xl font-semibold text-blue-700 mb-2">Want to collaborate or propose a project?</h3>
      <p className="text-gray-600 mb-6">Fill out the form below and we’ll get back to you.</p>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID" //Replace with custom backend endpoint
        method="POST"
        className="grid grid-cols-1 gap-4 text-left max-w-2xl mx-auto"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Affiliation</label>
          <input
            type="text"
            name="affiliation"
            placeholder="e.g., CU Denver, MSU, CCD, Other"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">How would you like to contribute?</label>
          <select
            name="interest"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="join">Join an existing project</option>
            <option value="pitch">Propose a new project idea</option>
            <option value="unsure">I'm not sure yet</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
        >
          <Mail size={16} />
          Submit Inquiry
        </button>
      </form>
    </section>
  );
}
