import React from 'react';
import { GiJourney } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot, FaCode } from "react-icons/fa6";

const Services = () => {
    return (
        <section id="experience" className="bg-transparent text-white px-6 pt-16 pb-30">
            <div className="flex justify-center mb-10">
                <button className="border-2 py-2 px-6 rounded-full text-white flex items-center">
                    <GiJourney className="text-4xl md:text-3xl mr-2 text-purple-400" />
                    <span className="text-sm md:text-base lg:text-lg font-semibold">ACHIEVEMENTS</span>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {/* Card 1 */}
                <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-3 text-purple-300">
                            <FaProjectDiagram className="text-2xl" />
                            <h3 className="text-lg font-semibold">TanCam's Hackathon</h3>
                        </div>
                        <h4 className="font-semibold text-white/90 text-lg mb-1">Kumaraguru College of Technology</h4>
                        <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                            <SlCalender className="text-purple-400" />
                            <span>12 March 2026</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                            <FaLocationDot className="text-purple-400" />
                            <span>Coimbatore</span>
                        </div>
                        <p className="text-white/80 mb-3 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                            Won a special cash prize of ₹10,000 in a hackathon under the AI domain for the project Construction Site Viability and Lifespan Prediction — recognized for building an innovative, real-world solution leveraging machine learning and predictive analytics.
                        </p>
                    </div>
                    <p className="text-purple-400 font-bold text-base mt-2">Won Special Prize</p>
                </div>
                
                {/* Card 2 */}
                <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-3 text-purple-300">
                            <FaProjectDiagram className="text-2xl" />
                            <h3 className="text-lg font-semibold">Tech Challenge 2025</h3>
                        </div>
                        <h4 className="font-semibold text-white/90 text-lg mb-1">Kamaraj College of Engineering and Technology</h4>
                        <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                            <SlCalender className="text-purple-400" />
                            <span>26 September 2025</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                            <FaLocationDot className="text-purple-400" />
                            <span>Virudhunagar</span>
                        </div>
                        <p className="text-white/80 mb-3 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                            Secured 1st place and a cash prize of ₹2,500 in a one-week inter-college coding and algorithm challenge conducted by Tarcin Robotics — demonstrating strong problem-solving skills and algorithmic thinking under competitive pressure.
                        </p>
                    </div>
                    <p className="text-purple-400 font-bold text-base mt-2">Won 1st Prize</p>
                </div>

                {/* Card 4 */}
                <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-3 text-purple-300">
                            <FaProjectDiagram className="text-2xl" />
                            <h3 className="text-lg font-semibold">Value Added Courses</h3>
                        </div>
                        <h4 className="font-semibold text-white/90 text-lg mb-1">Silicon Software Service, Panith Innovations</h4>
                        <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                            <SlCalender className="text-purple-400" />
                            <span>February 2025 & July 2025</span>
                        </div>
                        <p className="text-white/80 mb-3 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                            Completed a value-added course in Java at Silicon Software Service in February 2025, strengthening core programming fundamentals and object-oriented development skills and Completed a value-added course in Generative AI at Panith Innovations in July 2025, gaining hands-on exposure to modern AI concepts, LLMs, and real-world Gen AI applications.
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-purple-400 font-bold text-base">Completed</p>
                        <a
                            href="https://drive.google.com/drive/folders/1hMTegjCX594dnPTD5_hKdvx1zBEdq-ig"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-purple-400 py-1 px-4 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 text-sm font-semibold"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>
                
                {/* Card: Research Paper */}
                <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-3 text-purple-300">
                            <FaCode className="text-2xl" />
                            <h3 className="text-lg font-semibold">Research Paper</h3>
                        </div>
                        <h4 className="font-semibold text-white/90 text-lg mb-1">
                            International Research Journal of Advanced Engineering and Management
                        </h4>
                        <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                            <SlCalender className="text-purple-400" />
                            <span>International Conference</span>
                        </div>
                        <p className="text-white/80 mb-3 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                            Published and presented a peer-reviewed research paper at an international conference, featured in the International Research Journal of Advanced Engineering and Management (IRJAEM).
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-purple-400 font-bold text-base">Published</p>
                        <a
                            href="https://irjaeh.com/index.php/journal/article/view/1414"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-purple-400 py-1 px-4 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 text-sm font-semibold"
                        >
                            View Paper
                        </a>
                    </div>
                </div>

                 {/* Card 5 */}
                <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-3 text-purple-300">
                            <FaCode className="text-2xl" />
                            <h3 className="text-lg font-semibold">Certification</h3>
                        </div>
                        <h4 className="font-semibold text-white/90 text-lg mb-1">Infosys Certification</h4>
                        <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                            <SlCalender className="text-purple-400" />
                            <span>Infosys</span>
                        </div>
                        <p className="text-white/80 mb-3 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                            Successfully completed multiple Infosys Springboard courses spanning C, Python, Java, Software Engineering, Design Thinking, Machine Learning Foundations, Generative AI, Applied Gen AI, OpenAI GPT Models, Generative Pre-Trained Transformers, and Prompt Engineering — demonstrating a comprehensive, industry-aligned skill set across programming, AI, and software development domains.
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-purple-400 font-bold text-base">Certified</p>
                        <a
                            href="https://drive.google.com/drive/folders/1RFDaLfd1Qi5AXuP-7G7uupOG5rmrf14S"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-purple-400 py-1 px-4 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 text-sm font-semibold"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-3 text-purple-300">
                            <FaCode className="text-2xl" />
                            <h3 className="text-lg font-semibold">Certification</h3>
                        </div>
                        <h4 className="font-semibold text-white/90 text-lg mb-1">Cisco Certification</h4>
                        <div className="flex items-center gap-3 text-white/70 mb-3 text-sm">
                            <SlCalender className="text-purple-400" />
                            <span>Cisco Networking Academy</span>
                        </div>
                        <p className="text-white/80 mb-3 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                            Successfully completed multiple Cisco Networking Academy courses covering Modern AI, Applied AI, Data Analytics Essentials, Cybersecurity, and Networking Essentials — building a strong, industry-recognized foundation across core technology domains.
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-purple-400 font-bold text-base">Certified</p>
                        <a
                            href="https://drive.google.com/drive/folders/1a0YffnOIHf2U9P_cZ-BfnOPFCe6E7o2p"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-purple-400 py-1 px-4 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 text-sm font-semibold"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;