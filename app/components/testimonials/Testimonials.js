'use client'
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    name: "Micheal Gough",
    title: "CEO at Google",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
  },
  {
    quote: "Using Flowbite has greatly improved our development speed. The components are very easy to use and customize, and the overall design quality is excellent.",
    name: "Jane Doe",
    title: "CTO at Amazon",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jane-doe.png"
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 bg-gray-200">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6">What Our Clients Say</h2>
        <figure className="max-w-screen-md mx-auto transition-opacity duration-1000 ease-in-out" key={currentIndex}>
          <svg
            className="h-20 mx-auto text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-2xl font-medium text-gray-900 dark:text-white">
              "{testimonials[currentIndex].quote}"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src={testimonials[currentIndex].image}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                {testimonials[currentIndex].name}
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                {testimonials[currentIndex].title}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
