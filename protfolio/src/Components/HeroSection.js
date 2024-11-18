// import React from 'react';
// import Image from '../Assests/file (3).png';

// const HeroSection = () => {
//     return (

//         <section className="dark:bg-gray-100 dark:text-gray-800">

//             <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

//                 {/* Text Section */}
//                 <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
//                     <h1 className="text-5xl font-bold leading-none sm:text-6xl">
//                         Hello,<br />
//                         I am <span className="dark:text-violet-600 text-[rem] font-bold animate-pulse transition-all duration-700 ease-in-out hover:animate-bounce">
//                             Arun Kapil
//                         </span><br />
//                         <span className="dark:text-violet-600 text-[4.2rem] font-bold animate-pulse transition-all duration-700 ease-in-out">
//                             <span className="typing-text">Designer</span>
//                             <span className="typing-text">Developer</span>
//                         </span>


//                     </h1>
//                     <p className="mt-8 mb-10 text-lg sm:mb-15">
//                         I specialize in UI/UX design and creating smooth digital experiences.
//                         With skills in tools like Figma, ReactJS, and Node.js, I focus on detail and usability to bring ideas to life.
//                         My projects show my commitment to quality, user-centered design, and meaningful results.
//                         I'm always learning and adapting, pushing boundaries to deliver solutions that make a real difference.
//                     </p>

//                     {/* Buttons */}
//                     <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
//                         <a
//                             rel="noopener noreferrer"
//                             href="#"
//                             className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
//                         >
//                             Suspendisse
//                         </a>
//                         <a
//                             rel="noopener noreferrer"
//                             href="#"
//                             className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
//                         >
//                             Malesuada
//                         </a>
//                     </div>
//                 </div>

//                 {/* Image Section */}
//                 <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
//                     <img
//                         src={Image}
//                         alt="Profile Image"
//                         className="object-contain w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[600px] lg:h-[600px] xl:w-[600px] xl:h-[600px]"
//                     />
//                 </div>


//             </div>
//         </section>
//     );
// };

// export default HeroSection;


import React, { useState, useEffect } from 'react';
import Image from '../Assests/file (3).png';

const HeroSection = () => {
    const [word, setWord] = useState("Designer");
    const words = ["Designer", "Developer", "Freelancer"];
    const [index, setIndex] = useState(0);
    const [typingEffect, setTypingEffect] = useState(true); // Track typing effect completion

    // Change the word after typing animation completes
    useEffect(() => {
        const typingInterval = setInterval(() => {
            setTypingEffect(false); // Stop typing animation when word changes
        }, 5000); // Set typing effect duration based on animation timing (3 seconds)

        const wordChangeInterval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
            setTypingEffect(true); // Restart typing animation when the word changes
        }, 5500); // Changes the word every 3.5 seconds (after typing animation completes)

        return () => {
            clearInterval(typingInterval);
            clearInterval(wordChangeInterval);
        };
    }, [words.length]);

    // Update the current word based on index
    useEffect(() => {
        setWord(words[index]);
    }, [index]);

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

                {/* Text Section */}
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        Hello,<br />
                        I am <span className="dark:text-violet-600 text-[4rem] font-bold ">
                            Arun Kapil
                        </span><br />
                        <span className="dark:text-violet-600 text-[4rem] font-bold">
                            <span className={`typing-text ${typingEffect ? 'typing' : ''}`}>{word}</span>
                        </span>
                    </h1>
                    <p className="mt-8 mb-10 text-lg sm:mb-15">
                        I specialize in UI/UX design and creating smooth digital experiences.
                        With skills in tools like Figma, ReactJS, Node.js and MongoDB.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a
                            rel="noopener noreferrer"
                            href="https://wa.me/9360427143?text=Hello,%20I%20would%20like%20to%20connect%20with%20you!"
                            target="_blank"
                            className="px-14 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
                        >
                            Contact Me
                        </a>

                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
                        >
                            Download Resume
                        </a>
                    </div>
                    <div>
                        <div className="flex justify-center pt-10 pb-5 mt-10 space-x-4  lg:pt-0 lg:col-end-13">
                            <a
                                rel="noopener noreferrer"
                                href="mailto:arunkapilm@gmail.com"
                                title="Email"
                                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </a>

                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/arun-kapil-m/" title="LinkedIn" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-10h3v1.528c.892-.859 2.072-1.528 3.5-1.528 2.485 0 4.5 2.015 4.5 4.5v5.5z" />
                                </svg>
                            </a>

                            <a rel="noopener noreferrer" href="https://github.com/Mr-A12k" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
                    <img
                        src={Image}
                        alt="Profile Image"
                        className="object-contain w-200 h-200 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[600px] lg:h-[600px] xl:w-[600px] xl:h-[600px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;