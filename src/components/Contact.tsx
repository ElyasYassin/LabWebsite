import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="px-6 py-16 max-w-2xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold text-blue-800 mb-6">Get in Touch</h2>
      <p className="text-lg text-gray-700 mb-10">
        We’d love to hear from you! Whether you have questions about the lab, want to collaborate, or just want to say hello, feel free to reach out.
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <div className="flex items-center mb-4">
          <Mail className="text-blue-600 w-6 h-6 mr-3" />
          <a href="mailto:aisa@ucdenver.edu" className="text-blue-700 font-medium hover:underline">
            aisa@ucdenver.edu
          </a>
        </div>

        <div className="flex items-center">
          <MapPin className="text-blue-600 w-6 h-6 mr-3" />
          <span className="text-gray-800">Location: TBD</span>
        </div>
      </div>
    </section>
  );
}