import React from "react";

const Footer = () => {
    return (
        <footer className="py-6 dark:bg-gray-100 dark:text-gray-900">
            <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                            {/* <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50">
                                    <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                                </svg>
                            </div> */}
                            <span className="self-center text-2xl font-semibold">Kabix</span>
                        </a>
                    </div>
                    {/* <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Category</p>
                        <ul>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
                            </li>
                        </ul>
                    </div> */}
                    {/* <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Category</p>
                        <ul>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex justify-center pt-5 pb-5 space-x-4 lg:pt-0 lg:col-end-13">
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
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2024 All rights reserved</span>
                        {/* <a rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </a> */}
                    </div>

                </div>
            </div>
        </footer>
    );

}

export default Footer;

