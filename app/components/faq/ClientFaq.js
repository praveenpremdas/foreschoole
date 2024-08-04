'use client'
import React, { useState } from 'react';

export default function ClientFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-200 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-600 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-400">
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {[
            { question: 'What classes does Foreschool offer?', answer: 'Foreschool offers maths and science classes for students in class 8th -12th across all boards(CBSE,ICSE,IGCSE,State Board etc)' },
            { question: 'How do Foreschool classes work?', answer: 'Foreschool offers live Interactive online classes with expert tutors for math and sciences for class 8-12th.Foreschool master teacher takes 2 or more live classes per week with the student.Classes are conducted on Zoom Platform.Class size is up to 1:6 (but 1:1 is also available for Premium Subscribers)Master Tutor-student interaction is always 1:1 (even in group classes).To join a class, the student needs a desktop / laptop with a headphone and mic, and broadband internet.' },
            { question: 'What is the frequency and duration of classes?', answer: 'We recommend two classes per week for each subject(Maths physics chemistry and biology).Each class is 60-90 mins long and class size is up to 1:6 (but 1:1 is also available for Premium subscribers).You CAN choose a class frequency and class timings that suit you.' },
            { question: 'Are Foreschool’s programs applicable for all classes?', answer: 'Foreschool’s learning programs are for students from 8th to Class 12. We also offer programs for competitive exams like JEE, NEET, State entrance examinations,SAT etc' },
            { question: 'What languages are the learning programs available in?', answer: 'The Foreschool’s programs are available only in English' },
            { question: 'Do you provide customer support?', answer: 'Yes, we provide customer support for all our enrolled users. You can write to us at support@Foreschool.in or on 6366440333' },
          ].map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-500 bg-gray-800 border border-gray-700 shadow-lg cursor-pointer hover:bg-gray-700 ${
                activeIndex === index ? 'bg-gray-700' : 'bg-gray-800'
              }`}
              onClick={() => handleToggle(index)}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-white">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-400">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 textbase mt-9">
          Didn’t find the answer you are looking for?{' '}
          <a
            href="#"
            title=""
            className="font-medium text-blue-500 transition-all duration-200 hover:text-blue-600 focus:text-blue-600 hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
}
