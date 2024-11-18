import React from "react";

const Internship = () => {
    const timelineData = [
        {
            year: "2024",
            events: [
                {
                    title: "Freelancer - 2UyirNaturals",
                    description: "Designed and built the company's website for an agroherbal business using GoDaddy. Focused on creating a user-friendly interface that aligns with the company's brand and products. Also maintain their social media handles",
                },
            ],
        },
        {
            year: "2024",
            events: [
                {
                    title: " UI/UX and Backend Development Intern - Icanio Technologies",
                    description: "Led the redesign of the company website using Figma, improving user experience andincorporating responsive design Adapted to different tasks and needs with an open mind and willingness to learn. Identifiedlimitations, capabilities, and performance requirements of software designs withpredevelopment assessments. Developed a course management system using Node.js andMongoDB, implementing secure user authentication with JWT andbcrypt.",
                },
            ],
        },
        {
            year: "2023",
            events: [
                {
                    title: "Web Development Intern  - InternPe",
                    description: "Completed a one-month internship on remote mode that focused on web development(HTML, CSS, JS)I gained knowledge about how to use YouTube and the internet to understand the concepts.Built dynamic web components using JavaScript",
                },
            ],
        },
    ];

    return (
        <section className="bg-white text-gray-900 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 md:text-4xl text-center">
                    Timeline - Internship / Freelancing
                </h2>
                <div className="flex justify-center">
                    <div className="w-full max-w-3xl relative border-l-4 border-violet-600">
                        {timelineData.map((item, index) => (
                            <div key={index} className="mb-10 ml-10 relative">
                                {/* Year */}
                                <span className="absolute -left-14 top-0 bg-violet-600 text-white font-semibold rounded-full w-10 h-10 flex items-center justify-center">
                                    {item.year}
                                </span>
                                {/* Events */}
                                <div className="pl-6 align-left">
                                    {item.events.map((event, idx) => (
                                        <div key={idx} className="mt-4">
                                            <h3 className="text-lg font-medium">
                                                {event.title}{" "}
                                                <span className="text-violet-600">({item.year})</span>
                                            </h3>
                                            <p className="text-gray-600">{event.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Internship;