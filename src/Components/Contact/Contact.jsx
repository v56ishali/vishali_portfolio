import React from 'react';
import { MdPermContactCalendar, MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <section id="contact" className="text-white px-6 py-16">
            <div className="flex justify-center mb-12">
                <button className="border-2 py-2 px-6 rounded-full text-white flex items-center">
                    <MdPermContactCalendar className="text-4xl md:text-3xl mr-2 text-purple-400" />
                    <span className="text-lg md:text-xl font-semibold tracking-wide">CONTACT</span>
                </button>
            </div>
            
            <div className="max-w-2xl mx-auto">
                <div className="border border-purple-400 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 bg-black/40 backdrop-blur-lg flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-violet-400 mb-8 text-center">
                        Contact Information
                    </h3>
                    
                    <div className="space-y-6 w-full flex flex-col items-start md:items-center">
                        <div className="flex items-center gap-4">
                            <MdEmail className="text-purple-400 text-4xl border border-purple-400 p-2 rounded-full shadow-md hover:bg-purple-400/10 transition" />
                            <p className="text-lg">
                                <span className="font-semibold">Email: </span>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=vishali.sk28@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-violet-300 transition"
                                >
                                    vishali.sk28@gmail.com
                                </a>
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <FaLocationDot className="text-purple-400 text-4xl border border-purple-400 p-2 rounded-full shadow-md hover:bg-purple-400/10 transition" />
                            <p className="text-lg">
                                <span className="font-semibold">Location: </span>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Jawahar+Nagar+2nd+Street+Thirumangalam+Madurai+Tamil+Nadu+625706"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-violet-300 transition"
                                >
                                    Madurai, Tamil Nadu
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-10">
                        <a
                            href="https://github.com/v56ishali"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 text-5xl border border-purple-400 p-3 rounded-full shadow-md hover:bg-purple-400 hover:text-white transition duration-300"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/s-vishali-4718b92b4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 text-5xl border border-purple-400 p-3 rounded-full shadow-md hover:bg-purple-400 hover:text-white transition duration-300"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;