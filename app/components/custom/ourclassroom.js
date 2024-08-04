'use client'
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './ourclassroom.css';  // Create and import your CSS file for styling

const ClassroomStatistics = ({ label, end }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="statistic-item font-bold text-2xl" ref={ref}>
      {inView && (
        <CountUp start={0} end={end} duration={3} delay={0} />
      )}
      {label.indexOf('Experience') > -1 ? 'Hrs+' : (label.indexOf('Academic ') > -1 ? '%' : '+' )}
      <p className="font-thin text-sm font-serif">{label}</p>
    </div>
  );
};

const OurClassrooms = () => {
  return (
    <div className="classrooms-container bg-gray-200 p-6">
      <h1 className="main-heading text-center font-bold text-black mb-8">Our Classrooms</h1>
      <div className="classroom-sections grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="classroom-section text-center">
          <img src="/liveclass.jpg" alt="Live Classes" className="section-image mb-4" />
          <h2 className="sub-heading font-semibold mb-2">Live Classes</h2>
          <p>High quality Live streaming online classes offered to individuals or small groups.</p>
        </div>
        <div className="classroom-section text-center">
          <img src="/hometutions-removebg-preview.png" alt="Home Tuition" className="section-image mb-4" />
          <h2 className="sub-heading font-semibold mb-2">Home Tuition</h2>
          <p>One on One tuition at your home ensuring individual attention and mentoring for the student.</p>
        </div>
        <div className="classroom-section text-center">
          <img src="/centertution-removebg-preview.png" alt="Center Tuition" className="section-image mb-4" />
          <h2 className="sub-heading font-semibold mb-2">Center Tuition</h2>
          <p>We run a well equipped and easily accessible centre in the heart of the city.</p>
        </div>
        <div className="classroom-section text-center">
          <img src="/appertmenttutions-removebg-preview.png" alt="Apartment Classes" className="section-image mb-4" />
          <h2 className="sub-heading font-semibold mb-2">Apartment Classes</h2>
          <p>We do tie-ups with resident associations and apartments to offer group classes for the families.</p>
        </div>
      </div>
      <div className="statistics-container bg-white p-6 rounded-lg shadow-md text-center">
        <div className="statistics grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-16 m-10">
          <ClassroomStatistics label="Students Impacted" end={30000} />
          <ClassroomStatistics label="Tutoring Hours" end={50000} />
          <ClassroomStatistics label="Tutors" end={600} />
          <ClassroomStatistics label="Minimum Experience Of Our Tutor" end={400} />
          <ClassroomStatistics label="Academic Success Rate of Students" end={96} />
        </div>
      </div>
    </div>
  );
};

export default OurClassrooms;
