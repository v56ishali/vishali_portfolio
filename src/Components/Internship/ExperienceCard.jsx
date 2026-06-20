import React from 'react';
import { IoLogoHtml5 } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="flex-1 border border-purple-400 rounded-2xl shadow-lg p-6 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-3 text-purple-300">
          <IoLogoHtml5 className="text-2xl text-violet-400" />
          <h3 className="text-lg md:text-xl font-bold text-violet-400">{experience.role}</h3>
        </div>

        <h4 className="font-semibold text-white/90 text-base md:text-lg mb-1">
          {experience.company}
        </h4>

        <div className="flex items-center gap-3 text-white/70 mb-2 text-sm md:text-base">
          <SlCalender className="text-purple-400" />
          <span>{experience.duration}</span>
        </div>

        <div className="flex items-center gap-3 text-white/70 mb-3 text-sm md:text-base">
          <FaLocationDot className="text-purple-400" />
          <span>{experience.location}</span>
        </div>

        <ul className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed list-disc pl-5 space-y-2 mt-4 font-normal">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
        
        {experience.certificateLink && (
          <div className="flex items-center justify-start mt-6">
            <a
              href={experience.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-400 py-1 px-4 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 text-sm font-semibold"
            >
              View Certificate
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
