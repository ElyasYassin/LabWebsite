import React from 'react';

const team = [
  { name: 'Vicente Ramos', role: 'President', major: 'PhD Computer Science', image: '/images/team/vicente.jpg' },
  { name: 'Darya Voljina', role: 'Vice President', major: 'BS Computer Science', image: '/images/team/darya.jpg' },
  { name: 'Andrea Olvera', role: 'BS Finance', major: 'BS Finance', image: '/images/team/andrea.jpg' },
  { name: 'Hung Nguyen', role: 'Treasurer', major: 'MS Business Analytics', image: '/images/team/hung.jpg' },
  { name: 'Sadiqah Al-Masyabi', role: 'Tech Intern', major: 'BS Computer Science', image: '/images/team/sadiqah.jpg' },
  { name: 'Elyas Larfi', role: 'Technology Officer', major: 'BS Computer Science', image: '/images/team/elyas.jpg' },
  { name: 'Zahra Abdullahi', role: 'Technology Assistant', major: 'BS Computer Science', image: '/images/team/zahra.jpg' },
  { name: 'Qijian Ma', role: 'Technology Officer', major: 'BS Computer Science', image: '/images/team/qijian.jpg' },
  { name: 'Vanessa Benavente', role: 'Outreach Coordinator', major: 'BS Computer Science', image: '/images/team/vanessa.jpg' },
  { name: 'Yahya Hama', role: 'Technology Assistant', major: 'Computer Science', image: '/images/team/yaaya.jpg' },
  { name: 'Maab Taha', role: 'Intern', major: 'BS Computer Science', image: '/images/team/maab.jpg' },
  { name: 'Eduardo Galvez', role: 'Intern', major: 'BS Computer Science', image: '/images/team/eduardo.jpg' },
  { name: 'Michael Bolar', role: 'Intern', major: 'BS Computer Science', image: '/images/team/michael.jpg' },
];

export default function Team() {
  return (
    <section className="p-8 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-10">Our Team</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-200 shadow-md"
            />
            <h3 className="mt-3 text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-blue-600">{member.role}</p>
            <p className="text-sm text-gray-500">{member.major}</p>
          </div>
        ))}
      </div>
    </section>
  );
}