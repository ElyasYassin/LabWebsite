import React from 'react';

const projects = [
  {
    title: 'Investigating Rotational Dynamics in Motor Control',
    description:
      'Explores the role of sensory feedback vs. intrinsic connectivity in generating rotational neural activity using MyoSuite and MuJoCo simulations.',
    tags: ['Motor Control', 'Neuroscience', 'Reinforcement Learning'],
    link: 'https://example.com/paper-link',
  },
  {
    title: 'Poetic Storytelling from Landscape Images',
    description:
      'Combines vision-language models and reinforcement learning to generate dynamic poems and narratives from images.',
    tags: ['Multimodal AI', 'NLP', 'Creativity'],
    link: 'https://example.com/story-demo',
  },
];

export default function Projects() {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-800 mb-10">Research Projects</h2>
      <div className="space-y-8">
        {projects.map((proj, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-700">{proj.title}</h3>
            <p className="text-gray-700 mt-2">{proj.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {proj.tags.map((tag, i) => (
                <span key={i} className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-blue-600 underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}