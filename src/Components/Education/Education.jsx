import React from 'react';
import { FaGraduationCap } from "react-icons/fa6";
import EducationCard from './EducationCard';

const Education = () => {
  const educations = [
    {
      degree: "Bachelor of Engineering (B.E)",
      major: "Computer Science and Engineering",
      institution: "Kamaraj College of Engineering and Technology",
      duration: "2023 – 2027",
      scoreLabel: "CGPA",
      score: "8.5 / 10",
      subLabel: "Till 5th Semester"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      major: "General Schooling",
      institution: "PKN Girls Higher Secondary School",
      duration: "Passed in 2020",
      scoreLabel: "Percentage",
      score: "100%"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      major: "Secondary Education",
      institution: "PKN Girls Higher Secondary School",
      duration: "Passed in 2023",
      scoreLabel: "Percentage",
      score: "81%"
    }
  ];

  return (
    <section id="education" className="px-4 md:px-10 lg:px-14 py-10 bg-transparent text-white">
      <div className="flex justify-center mb-10">
        <button className="border-2 py-2 px-6 rounded-full text-white flex items-center">
          <FaGraduationCap className="text-4xl md:text-3xl mr-2 text-purple-400" />
          <span className="text-sm md:text-base lg:text-lg font-semibold">EDUCATION</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        {educations.map((education, index) => (
          <EducationCard key={index} education={education} />
        ))}
      </div>
    </section>
  );
};

export default Education;
