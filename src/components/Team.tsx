import React from 'react';

import vicenteImg from './images/team/vicente.jpg';
import daryaImg from './images/team/darya.jpg';
import andreaImg from './images/team/andrea.jpg';
import hungImg from './images/team/tom.jpg';
//import sadiqahImg from './images/team/sadiqah.jpg';
import elyasImg from './images/team/elyas.jpg';
import zahraImg from './images/team/zahra.jpg';
import qijianImg from './images/team/jason.jpg';
import vanessaImg from './images/team/nessa.jpg';
import yaayaImg from './images/team/yahya.jpg';
import farnoushImg from './images/team/farnoush.jpg';
//import maabImg from './images/team/maab.jpg';
//import eduardoImg from './images/team/eduardo.jpg';
//import michaelImg from './images/team/michael.jpg';

const team = [
  { name: 'Farnoush Banaei-Kashani', role: 'Advisor', major: 'Associate Professor', image: farnoushImg },
  { name: 'Vicente Ramos', role: 'President', major: 'PhD Computer Science', image: vicenteImg },
  { name: 'Darya Voljina', role: 'Vice President', major: 'BS Computer Science', image: daryaImg },
  { name: 'Andrea Olvera', role: 'BS Finance', major: 'BS Finance', image: andreaImg },
  { name: 'Hung Nguyen', role: 'Treasurer', major: 'MS Business Analytics', image: hungImg },
  { name: 'Elyas Larfi', role: 'Technology Officer', major: 'BS Computer Science', image: elyasImg },
  { name: 'Zahra Abdullahi', role: 'Technology Assistant', major: 'BS Computer Science', image: zahraImg },
  { name: 'Qijian Ma', role: 'Technology Officer', major: 'BS Computer Science', image: qijianImg },
  { name: 'Vanessa Benavente', role: 'Outreach Coordinator', major: 'BS Computer Science', image: vanessaImg },
  { name: 'Yahya Hama', role: 'Technology Assistant', major: 'Computer Science', image: yaayaImg },
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