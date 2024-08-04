'use client'
import React from 'react';
import './foreschool.css'; // Create and import your CSS file for styling

const ForeSchoolClasses = () => {
    return (
        <div className="foreschool-container bg-gray-200 p-6">
            <h1 className="main-heading text-center font-bold text-black mb-10">How do ForeSchool classes work</h1>
            <div className="foreschool-sections grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="foreschool-section text-center">
                    <div className="content-container flex flex-col items-start">
                        <img src="/clock.png" alt="Class Duration" className="section-image mb-6" />
                        <h2 className="sub-heading font-semibold mb-2 pl-10">60-90 mins 5+ times</h2>
                        <ul className="description text-left">
                            <li>Class duration is 60-90 minutes</li>
                            <li>Class size is up to 1:6 (but 1:1 is also available for higher pricing)</li>
                            <li>Class frequency is 5+ times/week depending on grade & preference</li>
                        </ul>
                    </div>
                </div>
                <div className="foreschool-section text-center">
                    <div className="content-container flex flex-col items-start">
                        <img src="/zoom.png" alt="Class Duration" className="section-image mb-6" />
                        <h2 className="sub-heading font-semibold mb-2 pl-10">ZOOM platform</h2>
                        <ul className="description text-left">
                            <li>Classes happen through ZOOM platform</li>
                            <li>This enables our tutors to deliver completely personalised instruction based on the Revamp24 Method</li>
                        </ul>
                    </div>
                </div>
                <div className="foreschool-section text-center">
                    <div className="content-container flex flex-col items-start">
                        <img src="/live-removebg-preview.png" alt="Live Interaction" className="section-image mb-6" />
                        <h2 className="sub-heading font-semibold mb-2 pl-10">Live 1:1 interaction</h2>
                        <ul className="description text-left">
                            <li>Teacher-student interaction is always 1:1 (even in group classes)</li>
                            <li>This ensures that every student gets the exact help that they need, at the exact time when they need it</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForeSchoolClasses;
