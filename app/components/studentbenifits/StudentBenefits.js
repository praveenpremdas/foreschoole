'use client'
import React from 'react';
import './StudentBenefits.css'; // Import the CSS file

const StudentBenefits = () => {
  const points = [
    { title: 'Assessment', description: 'Students will undergo an assessment test.' },
    { title: 'Evaluation', description: 'Evaluate and scrutinize the student’s proficiency in learning.' },
    { title: 'Eradicate', description: 'Eradicate all their clashes and obstacles in learning and comprehending.' },
    { title: 'Course Selection', description: 'Guide them to the apt course based on their intellect.' },
  ];

  return (
    <section className="bg-gray-200 py-10 px-4">
      <h1 className="sb-font-heading text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-pink-500 mb-20">
        We Provide The Best For Our Students
      </h1>
      <ul className="flex flex-col lg:flex-row justify-center items-center gap-10">
        {points.map((point, index) => (
          <li key={index} className={`flex flex-col items-center text-center lg:w-1/4 space-y-4  ${(index+1)%2 == 0 ?'md:mb-40' :'md:mt-20'}`}>
            <div className="relative w-32 h-32 flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-bounce">
              <div className="absolute w-28 h-28 bg-gray-200 rounded-full border-4 border-dotted border-blue-400 animate-spin-slow"></div>
            </div>
            <h3 className="text-2xl font-bold sb-font-body-head">{point.title}</h3>
            <p className="text-base max-w-xs sb-font-body">{point.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StudentBenefits;
