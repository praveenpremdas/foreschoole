'use client'
import React, { useState, useEffect, useRef } from 'react';
import './card.css';

const profiles = [
  {
    name: "Samuel Abera",
    position: "Software Developer",
    image: "https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c",
    description: "Adaptable developer with experience in frontend (Nuxt.js) and backend (Laravel/Nest.js). Passionate about web development, quick learner, and committed to exceptional websites. Let's collaborate!",
  },
  {
    name: "Abc Esx",
    position: "Software Developer",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxwZW9wbGV8ZW58MHwwfHx8MTcxODQ3NDU1Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Adaptable developer with experience in frontend (Nuxt.js) and backend (Laravel/Nest.js). Passionate about web development, quick learner, and committed to exceptional websites. Let's collaborate!",
  },
  {
    name: "Yzx Lms",
    position: "Software Developer",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8cGVvcGxlfGVufDB8MHx8fDE3MTg0NzQ1NTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Adaptable developer with experience in frontend (Nuxt.js) and backend (Laravel/Nest.js). Passionate about web development, quick learner, and committed to exceptional websites. Let's collaborate!",
  },
  {
    name: "Yzx Lmsddws",
    position: "Software Developer",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8cGVvcGxlfGVufDB8MHx8fDE3MTg0NzQ1NTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Adaptable developer with experience in frontend (Nuxt.js) and backend (Laravel/Nest.js). Passionate about web development, quick learner, and committed to exceptional websites. Let's collaborate!",
  },
  {
    name: "Yzx Lmsdwdw",
    position: "Software Developer",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8cGVvcGxlfGVufDB8MHx8fDE3MTg0NzQ1NTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Adaptable developer with experience in frontend (Nuxt.js) and backend (Laravel/Nest.js). Passionate about web development, quick learner, and committed to exceptional websites. Let's collaborate!",
  },
  {
    name: "Yzx Lmsdwdw",
    position: "Software Developer",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8cGVvcGxlfGVufDB8MHx8fDE3MTg0NzQ1NTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Adaptable developer with experience in frontend (Nuxt.js) and backend (Laravel/Nest.js). Passionate about web development, quick learner, and committed to exceptional websites. Let's collaborate!",
  }
  // Add more profiles as needed
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 3000); // Change profile every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const newTransform = -currentIndex * 20; // 20rem is the width of each card
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      carouselRef.current.style.transform = `translateX(${newTransform}rem)`;
      
      // For infinity scroll effect
      if (currentIndex === profiles.length) {
        setTimeout(() => {
          carouselRef.current.style.transition = 'none';
          carouselRef.current.style.transform = `translateX(0rem)`;
          setCurrentIndex(0);
        }, 500);
      }
    }
  }, [currentIndex]);

  return (
    <div className="w-60 h-screen bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
      <div ref={carouselRef} className="w-60 h-full py-20 flex transition-transform duration-500 ease-in-out">
        {profiles.map((profile, idx) => (
          <div
            key={idx}
            className={`w-[18rem] mx-4 flex-shrink-0 flex flex-col gap-2 px-4 border border-gray-300 rounded-lg bg-white dark:bg-gray-900 ${currentIndex === idx ? 'scale-110 shadow-xl z-10' : 'opacity-75'}`}
          >
            <div className="w-full flex justify-center items-center">
              <img
                className="w-[8rem] h-[8rem] rounded-full outline outline-offset-2 outline-1 outline-blue-400 shadow-lg mt-4"
                src={profile.image}
                alt={profile.name}
              />
            </div>
            <div className="w-full h-full text-center flex flex-col gap-4 mt-4">
              <h1 className="uppercase text-lg font-semibold dark:text-white">{profile.position}</h1>
              <h2 className="text-xl font-serif capitalize font-semibold text-gray-700 dark:text-gray-300">{profile.name}</h2>
              <p className="text-gray-700 dark:text-gray-300">{profile.description}</p>
              <button className="w-[60%] mx-auto bg-blue-500 text-white rounded-3xl px-4 py-2">Follow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
