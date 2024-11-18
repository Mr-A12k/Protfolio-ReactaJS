// import React from "react";

// const ContactPage = () => {
//     return (

//         <section className="bg-[#161b22] text-gray-100 py-12">
//             <div className="grid max-w-6xl grid-cols-1 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
//                 {/* Left Side: Contact Information */}
//                 <div className="py-6 md:py-0 md:px-8">
//                     <h1 className="text-4xl font-bold mb-2">Get in touch</h1>
//                     <p className="text-gray-400 mb-6">Fill in the form to start a conversation</p>
//                     <div className="space-y-4 text-gray-300">
//                         {/* Address */}
//                         <p className="flex items-center text-lg">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="currentColor"
//                                 className="w-6 h-6 mr-4 text-violet-500"
//                                 viewBox="0 0 20 20"
//                             >
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                                     clipRule="evenodd"
//                                 />
//                             </svg>
//                             Fake address, 9999 City
//                         </p>
//                         {/* Phone */}
//                         <p className="flex items-center text-lg">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="currentColor"
//                                 className="w-6 h-6 mr-4 text-violet-500"
//                                 viewBox="0 0 20 20"
//                             >
//                                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                             </svg>
//                             123456789
//                         </p>
//                         {/* Email */}
//                         <p className="flex items-center text-lg">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="currentColor"
//                                 className="w-6 h-6 mr-4 text-violet-500"
//                                 viewBox="0 0 20 20"
//                             >
//                                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                             </svg>
//                             contact@business.com
//                         </p>
//                         {/* GitHub */}
//                         <p className="flex items-center text-lg">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="currentColor"
//                                 className="w-6 h-6 mr-4 text-violet-500"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M12 .297a12 12 0 00-3.793 23.39c.6.111.82-.258.82-.577v-2.177c-3.338.725-4.042-1.632-4.042-1.632-.546-1.388-1.333-1.757-1.333-1.757-1.089-.745.082-.73.082-.73 1.204.084 1.838 1.255 1.838 1.255 1.07 1.834 2.809 1.304 3.495.998.109-.775.419-1.305.763-1.604-2.664-.304-5.467-1.334-5.467-5.933 0-1.31.47-2.382 1.236-3.221-.123-.303-.535-1.524.116-3.176 0 0 1.008-.323 3.3 1.23a11.447 11.447 0 016.004 0c2.291-1.554 3.3-1.23 3.3-1.23.651 1.652.239 2.873.117 3.176.767.839 1.235 1.911 1.235 3.221 0 4.61-2.805 5.625-5.475 5.922.429.37.81 1.102.81 2.222v3.293c0 .32.217.694.825.575A12.001 12.001 0 0012 .297z"
//                                     clipRule="evenodd"
//                                 />
//                             </svg>
//                             <a
//                                 href="https://github.com/Mr-A12k"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:underline text-violet-500"
//                             >
//                                 GitHub
//                             </a>
//                         </p>

//                     </div>
//                 </div>

//                 {/* Right Side: Contact Form */}
//                 <form
//                     className="flex flex-col py-6 space-y-6 md:py-0 md:px-8"
//                     noValidate
//                 >
//                     {/* Full Name */}
//                     <label className="block text-left">
//                         <span className="block text-lg text-gray-300 mb-1">Full name</span>
//                         <input
//                             type="text"
//                             placeholder="Leroy Jenkins"
//                             className="block w-full rounded-md bg-[#21262d] text-gray-100 border border-gray-600 p-3 focus:border-violet-500 focus:ring focus:ring-violet-500 focus:outline-none"
//                         />
//                     </label>
//                     {/* Email Address */}
//                     <label className="block text-left">
//                         <span className="block text-lg text-gray-300 mb-1">Email address</span>
//                         <input
//                             type="email"
//                             placeholder="leroy@jenkins.com"
//                             className="block w-full rounded-md bg-[#21262d] text-gray-100 border border-gray-600 p-3 focus:border-violet-500 focus:ring focus:ring-violet-500 focus:outline-none"
//                         />
//                     </label>
//                     {/* Message */}
//                     <label className="block text-left">
//                         <span className="block text-lg text-gray-300 mb-1">Message</span>
//                         <textarea
//                             rows="4"
//                             placeholder="Write your message here..."
//                             className="block w-full rounded-md bg-[#21262d] text-gray-100 border border-gray-600 p-3 focus:border-violet-500 focus:ring focus:ring-violet-500 focus:outline-none"
//                         ></textarea>
//                     </label>
//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="w-15 px-4 py-2 text-lg font-semibold text-center rounded-md bg-violet-500 text-gray-100 hover:bg-violet-600 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
//                     >
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </section>

//     );
// };

// export default ContactPage;

import React from "react";

const ContactPage = () => {
    return (
        <section className="bg-[#161b22] text-gray-100 py-12">
            <div className="grid max-w-6xl grid-cols-1 mx-auto lg:px-8 md:grid-cols-2 md:divide-x ">
                {/* Left Side: Contact Information */}
                <div className="py-6 md:py-0 md:px-8 m-[15px]">
                    <h1 className="text-4xl font-bold mb-2 text-center md:text-left">
                        Get in touch
                    </h1>
                    <p className="text-gray-400 mb-6 text-center md:text-left">
                        Fill in the form to start a conversation
                    </p>
                    <div className="space-y-4 text-gray-300">
                        {/* Address */}
                        <p className="flex items-center text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-6 h-6 mr-4 text-violet-500"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Rajapalayam, TamilNadu-626 117.
                        </p>
                        {/* Phone */}
                        <p className="flex items-center text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-6 h-6 mr-4 text-violet-500"
                                viewBox="0 0 20 20"
                            >
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            123456789
                        </p>
                        {/* Email */}
                        <p className="flex items-center text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-6 h-6 mr-4 text-violet-500"
                                viewBox="0 0 20 20"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            arunkapilm@gmail.com
                        </p>
                        {/* GitHub */}
                        <p className="flex items-center text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-6 h-6 mr-4 text-violet-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 .297a12 12 0 00-3.793 23.39c.6.111.82-.258.82-.577v-2.177c-3.338.725-4.042-1.632-4.042-1.632-.546-1.388-1.333-1.757-1.333-1.757-1.089-.745.082-.73.082-.73 1.204.084 1.838 1.255 1.838 1.255 1.07 1.834 2.809 1.304 3.495.998.109-.775.419-1.305.763-1.604-2.664-.304-5.467-1.334-5.467-5.933 0-1.31.47-2.382 1.236-3.221-.123-.303-.535-1.524.116-3.176 0 0 1.008-.323 3.3 1.23a11.447 11.447 0 016.004 0c2.291-1.554 3.3-1.23 3.3-1.23.651 1.652.239 2.873.117 3.176.767.839 1.235 1.911 1.235 3.221 0 4.61-2.805 5.625-5.475 5.922.429.37.81 1.102.81 2.222v3.293c0 .32.217.694.825.575A12.001 12.001 0 0012 .297z"
                                    clipRule="evenodd"
                                />
                                <a
                                href="https://github.com/Mr-A12k"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-violet-500"
                            >
                                
                            </a>
                            </svg>
                            GitHub
                        </p>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <form
                    className="flex flex-col py-6 space-y-6 md:py-0 md:px-8 m-[15px]"
                    noValidate
                >
                    {/* Full Name */}
                    <label className="block text-left">
                        <span className="block text-lg text-gray-300 mb-1">Full name</span>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="block w-full rounded-md bg-[#21262d] text-gray-100 border border-gray-600 p-3 focus:border-violet-500 focus:ring focus:ring-violet-500 focus:outline-none"
                        />
                    </label>
                    {/* Email Address */}
                    <label className="block text-left">
                        <span className="block text-lg text-gray-300 mb-1">Email address</span>
                        <input
                            type="email"
                            placeholder="yourmail@example.com"
                            className="block w-full rounded-md bg-[#21262d] text-gray-100 border border-gray-600 p-3 focus:border-violet-500 focus:ring focus:ring-violet-500 focus:outline-none"
                        />
                    </label>
                    {/* Message */}
                    <label className="block text-left">
                        <span className="block text-lg text-gray-300 mb-1">Message</span>
                        <textarea
                            rows="4"
                            placeholder="Write your message here..."
                            className="block w-full rounded-md bg-[#21262d] text-gray-100 border border-gray-600 p-3 focus:border-violet-500 focus:ring focus:ring-violet-500 focus:outline-none"
                        ></textarea>
                    </label>
                    {/* Submit Button */}
                    {/* <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-semibold text-center rounded-md bg-violet-500 text-gray-100 hover:bg-violet-600 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
          >
            Submit
          </button> */}
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600" fdprocessedid="zoaqnp">Submit</button>

                </form>
            </div>
        </section>
    );
};

export default ContactPage;