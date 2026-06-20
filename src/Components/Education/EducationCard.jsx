import React from 'react';
import { FaGraduationCap } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const EducationCard = ({ education }) => {
  return (
    <div className="flex-1 border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-3 text-purple-300">
          <FaGraduationCap className="text-2xl text-violet-400" />
          <h3 className="text-lg md:text-xl font-bold text-violet-400">{education.degree}</h3>
        </div>
        <h4 className="font-semibold text-white/90 text-base md:text-lg mb-1">{education.major}</h4>
        <p className="text-gray-300 text-sm md:text-base mb-4">{education.institution}</p>
      </div>
      <div className="mt-4 pt-4 border-t border-purple-900/30">
        <div className="flex items-center gap-3 text-white/70 mb-2 text-sm md:text-base">
          <SlCalender className="text-purple-400" />
          <span>{education.duration}</span>
        </div>
        <p className="text-purple-400 font-semibold text-lg">
          {education.scoreLabel}: {education.score}
          {education.subLabel && <span className="text-xs md:text-sm text-gray-400 font-normal ml-2">({education.subLabel})</span>}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
