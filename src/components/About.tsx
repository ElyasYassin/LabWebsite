import React from 'react';

export default function About() {
  return (
    <section className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h2 className="text-4xl font-bold text-blue-800 mb-6">About SAIR Lab</h2>

      {/* Introduction */}
      <p className="mb-6">
        The <strong>Student AI Research Lab (SAIR Lab)</strong> is a student-driven research initiative based at CU Denver, dedicated to advancing artificial intelligence through education, experimentation, and community engagement.
      </p>

      {/* Mission */}
      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">Our Mission</h3>
      <p className="mb-6">
        Our mission is to empower undergraduate and graduate students with hands-on experience in real-world AI research. We focus on fostering a collaborative environment that encourages learning, innovation, and impact.
      </p>

      {/* History */}
      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">How We Started</h3>
      <p className="mb-6">
        SAIR Lab was founded in 2025 by a group of passionate students who saw the need for a dedicated research space that bridges the gap between coursework and cutting-edge AI applications. What began as a small group of collaborators has grown into a multidisciplinary team working on projects spanning machine learning, robotics, natural language processing, and computational neuroscience.
      </p>

      {/* Research Areas */}
      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">What We Do</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Lead research projects in reinforcement learning, generative AI, robotics, and computer vision.</li>
        <li>Host workshops and reading groups to make complex topics accessible to students of all levels.</li>
        <li>Present at symposiums, publish papers, and build open-source tools.</li>
        <li>Collaborate with faculty, labs, and tech companies on applied problems.</li>
      </ul>

      {/* Collaboration & Inclusion */}
      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">Who We Work With</h3>
      <p className="mb-6">
        We’re proud to support students from diverse academic backgrounds including computer science, neuroscience, business analytics, and engineering. SAIR Lab values inclusion, curiosity, and peer-to-peer mentorship.
      </p>

      {/* Closing CTA */}
      <div className="mt-10 text-center">
        <p className="mb-4 font-medium text-gray-700">
          Want to learn more or get involved? Check out our <a href="/projects" className="text-blue-600 underline">projects</a> or <a href="/join" className="text-blue-600 underline">join us</a>!
        </p>
      </div>
    </section>
  );
}