import React from 'react';
import vish_pic from '../../assets/vish_pic.jpg';

const Hero = () => {
    return (
<section id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-transparent text-white px-6 py-16 md:py-0">
  {/* Photo on Left with Animated Violet Bg Lines */}
  <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative py-10">
    <div className="relative group flex justify-center items-center">
      {/* Animated Violet concentric rings */}
      <div className="absolute inset-0 -m-6 md:-m-8 border-2 border-dashed border-purple-500/25 rounded-full animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-0 -m-3 md:-m-4 border border-purple-500/40 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse" />
      {/* Profile Image Wrapper */}
      <div className="relative bg-black rounded-2xl overflow-hidden border-2 border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
        <img
          src={vish_pic}
          alt="Profile"
          className="object-cover w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  </div>

  {/* Content on Right */}
  <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left md:pl-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      Hi, I'm <span className="text-purple-400">Vishali S</span>
    </h1>
    <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 max-w-xl">
      I am an AI/ML and Full-Stack Developer with expertise in building intelligent applications, scalable web platforms, and data-driven solutions. I specialize in Machine Learning and modern full-stack technologies, combining strong problem-solving skills with software engineering practices to develop efficient, secure, and user-centric applications. while bringing a continuous learning mindset to software development.
    </p>

    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="#contact"
        className="border-2 py-2 px-5 rounded-full text-purple-400 hover:text-white transition duration-300 cursor-pointer text-center"
      >
        CONNECT
      </a>
      <a
        href="/Vishali's_Resume.pdf" 
        download="Vishali's_Resume.pdf"
        className="border-2 py-2 px-5 rounded-full text-purple-400 hover:text-white transition duration-300 cursor-pointer text-center"
      >
        DOWNLOAD RESUME
      </a>
    </div>
  </div>
</section>
    );
};

export default Hero;