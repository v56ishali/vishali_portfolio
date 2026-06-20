import React from 'react';
import { IoLogoHtml5 } from "react-icons/io5";
import ExperienceCard from './ExperienceCard';

const Internship = () => {
  const experiences = [
    {
      role: "Machine Learning Intern",
      company: "Panith Innovations",
      duration: "09 June 2025 - 23 June 2025",
      location: "Madurai",
      achievements: [
        "Completed a 15-day Machine Learning internship.",
        "Developed and trained machine learning models for data analysis, prediction, and classification tasks.",
        "Performed data preprocessing, feature engineering, and model evaluation using Python libraries such as Pandas, NumPy, and Scikit-learn.",
        "Collaborated with mentors to optimize model performance, improve accuracy, and deploy ML solutions for real-world applications."
      ],
      certificateLink: "https://drive.google.com/drive/folders/1zsPE7TH1CqhglKrKw0Kx4c3yiN9DFLgL"
    },
    {
      role: "Web Developement Intern(AICTE)",
      company: "Tarcin Robotics",
      duration: "December 2025 - February 2026",
      location: "Madurai",
      achievements: [
        "Collaborated with a engineering team to design, build, and debug web components using the MEAN stack.",
        "Applied responsive design practices and state management workflows.",
        "Delivered all assigned milestones within a 3-month internship period.",
        "Improved web application performance and user experience.",
        "Participated in code reviews and team discussions, enhancing collaboration skills and writing cleaner, maintainable code."
      ],
      certificateLink: "https://drive.google.com/drive/folders/1o5xsh77lbFcXWmHw-Ur8siU3hYXaMVJa"
    }
  ];

  return (
    <section id="internship" className="bg-transparent text-white px-6 pt-16 pb-30">
      <div className="flex justify-center mb-10">
        <button className="border-2 py-2 px-6 rounded-full text-white flex items-center">
          <IoLogoHtml5 className="text-4xl md:text-3xl mr-2 text-purple-400" />
          <span className="text-sm md:text-base lg:text-lg font-semibold">INTERNSHIP</span>
        </button>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
