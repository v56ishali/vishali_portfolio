import React from 'react';

const Hero = () => {
    return (
<section id="home" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white px-6 py-16 md:py-0">
  {/* Centered Content */}
  <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mt-[-50px]">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
      Greetings, I'm <span className="text-purple-400">Vishali S</span>
    </h1>
    <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
      I am an AI/ML and Full-Stack Developer with expertise in building intelligent applications, scalable web platforms, and data-driven solutions. I specialize in Machine Learning and modern full-stack technologies, combining strong problem-solving skills with software engineering practices to develop efficient, secure, and user-centric applications while bringing a continuous learning mindset to software development.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
      <a
        href="#contact"
        className="border-2 py-2 px-6 rounded-full text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center font-semibold tracking-wide shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
      >
        CONNECT
      </a>
      <a
        href="/vishali_resume.pdf" 
        download="vishali_resume.pdf"
        className="border-2 py-2 px-6 rounded-full text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center font-semibold tracking-wide shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
      >
        DOWNLOAD RESUME
      </a>
    </div>
  </div>
</section>
    );
};

export default Hero;
