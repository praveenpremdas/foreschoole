'use client'
import React, { useEffect, useState } from 'react';
import './animation1.css'; // Import your CSS file

const Animation1 = () => {
    const [showText, setShowText] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showPoints, setShowPoints] = useState(false);
    const [currentPointIndex, setCurrentPointIndex] = useState(0);

    const points = [
        'Why choose Revamp24?',
        'Innovative Methodology',
        'Rigorous Approach',
        'Mentorship Program',
        'Personal Attention',
    ];

    useEffect(() => {
        const textTimeout = setTimeout(() => setShowText(true),100);
        const imageTimeout = setTimeout(() => setShowImage(true), 500);
        const pointsTimeout = setTimeout(() => setShowPoints(true), 1000);

        let pointInterval;

        if (showPoints) {
            pointInterval = setInterval(() => {
                setCurrentPointIndex((prevIndex) => (prevIndex + 1) % points.length);
            }, 2000); // Change point every 2 seconds
        }

        return () => {
            clearTimeout(textTimeout);
            clearTimeout(imageTimeout);
            clearTimeout(pointsTimeout);
            clearInterval(pointInterval);
        };
    }, [showPoints]);

    return (
        <section className="bg-gray-200 pb-10 flex flex-col justify-center items-center text-black overflow-hidden">
            <div className='w-full h-full flex flex-col md:flex-row justify-center items-center text-center'>
                <div className="w-full md:w-1/2 p-4 md:text-left font-left text-left-area">
                    {showText && (
                        <p className="text-lg md:text-lg font-bold typing-animation">
                            Engage in face-to-face interactive sessions for math and science.
                            <br />
                            Experience live online classes with personalized attention.
                        </p>
                    )}
                </div>
                <div className="w-full h-96  md:w-1/2 p-4 flex flex-col justify-center items-center font-right">
                    {showImage && (
                        <div className="mt-6 opacity-0 animate-fadeInFromTop">
                            <img src="animation-girl.png" alt="Interactive Sessions" className="w-full max-w-md mx-auto" />
                        </div>
                    )}
                    {showPoints && (
                        <div className="mt-6 text-base font-bold font-serif">
                            <p className="opacity-0 animate-fadeIn sb-ani-p">
                                {points[currentPointIndex]}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Animation1;
