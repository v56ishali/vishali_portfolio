import React from 'react';
import { CgProfile } from "react-icons/cg";
import { RiGlobalFill } from "react-icons/ri";
import { FaCode, FaLightbulb, FaDatabase } from "react-icons/fa6";

const About = () => {
    return (
      <section id="about" className="px-4 md:px-10 lg:px-14 py-10">
        <div className="flex justify-center">
          <button className="border-2 py-3 px-6 rounded-full text-white mb-7 flex items-center">
            <CgProfile className="text-4xl md:text-3xl mr-2 text-purple-400"  />
            <span className="text-base md:text-lg lg:text-xl">ABOUT ME</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-center h-full">
            <div>
              <div className="flex items-center gap-2 mb-3 text-purple-300">
                <RiGlobalFill className="text-2xl text-violet-400" />
                <h3 className="text-lg md:text-xl font-bold text-violet-400">My Journey</h3>
              </div>
              <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                I'm Vishali S, an aspiring AI/ML Engineer and Full-Stack Developer driven by a passion for building intelligent applications, scalable web solutions, and solving real-world problems through technology. My interests span Machine Learning, Deep Learning, Generative AI, Retrieval-Augmented Generation (RAG), and modern full-stack development.Over the years, I have worked on developing responsive web applications, AI-powered solutions, and data-driven projects using modern frameworks and tools. I enjoy transforming complex challenges into practical solutions by combining software engineering principles with artificial intelligence techniques.With a continuous learning mindset, I actively explore emerging technologies, participate in hackathons, and work on innovative projects that enhance my technical and problem-solving abilities. Beyond academics, I engage with developer and AI communities to stay updated with industry trends and advancements in the rapidly evolving technology landscape.Looking ahead, I am eager to leverage my expertise in AI, Machine Learning, Deep Learning, Generative AI, and Full-Stack Development to contribute to impactful projects, build innovative solutions, and create meaningful value through technology.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-300">
                  <FaCode className="text-2xl text-violet-400" />
                  <h3 className="text-lg md:text-xl font-bold text-violet-400">Full-Stack Development</h3>
                </div>
                <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                  Experienced in building scalable web platforms and integrating modern frameworks. I focus on developing secure backend architectures and designing responsive, user-friendly frontend interfaces that deliver seamless digital experiences.
                </p>
              </div>
            </div>

            <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-300">
                  <FaLightbulb className="text-2xl text-violet-400" />
                  <h3 className="text-lg md:text-xl font-bold text-violet-400">Artificial Intelligence & Machine Learning</h3>
                </div>
                <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                  Passionate about developing intelligent systems using Machine Learning, Deep Learning, and AI techniques. Experienced in data preprocessing, model training, evaluation, and applying AI solutions to solve real-world problems.
                </p>
              </div>
            </div>

            <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-300">
                  <FaDatabase className="text-2xl text-violet-400" />
                  <h3 className="text-lg md:text-xl font-bold text-violet-400">Problem Solving & Algorithms</h3>
                </div>
                <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                  Possess strong problem-solving and algorithmic abilities demonstrated through hackathons and hands-on projects. I enjoy designing elegant solutions for complex logic and optimization problems using clean code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;