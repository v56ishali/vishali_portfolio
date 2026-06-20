import React from "react";
import { SiSkillshare } from "react-icons/si";
import SkillCategoryCard from "./SkillCategoryCard";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", percent: 88 },
        { name: "Python", percent: 80 },
        { name: "Java", percent: 75 },
        { name: "C", percent: 70 },
        { name: "TypeScript", percent: 65 },
      ]
    },
    {
      title: "Technologies & Frameworks",
      skills: [
        { name: "React.js", percent: 88 },
        { name: "Node.js", percent: 85 },
        { name: "Express.js", percent: 82 },
        { name: "Next.js", percent: 78 },
        { name: "Bootstrap", percent: 70 },
        { name: "Tailwind CSS", percent: 65 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", percent: 88 },
        { name: "MySQL", percent: 85 },
        { name: "PostgreSQL", percent: 50 },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code", percent: 93 },
        { name: "GitHub", percent: 90 },
        { name: "Git", percent: 88 },
        { name: "Google Colab", percent: 88 },
        { name: "Kaggle", percent: 85 },
        { name: "Hugging Face", percent: 82 },
        { name: "Figma", percent: 80 },
        { name: "StreamLit", percent: 78 },
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Artificial Intelligence (AI)", percent: 90 },
        { name: "Machine Learning (ML)", percent: 88 },
        { name: "Deep Learning (DL)", percent: 85 },
        { name: "Database Management Systems (DBMS)", percent: 84 },
        { name: "Generative Artificial Intelligence (Gen AI)", percent: 80 },
        { name: "Retrieval-Augmented Generation (RAG)", percent: 75 },
        { name: "Data Structures & Algorithms (DSA)", percent: 70 },
        { name: "Object-Oriented Programming (OOP)", percent: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-transparent text-white px-6 py-16">
      <div className="flex justify-center mb-12">
        <button className="border-2 py-3 px-7 rounded-full text-white flex items-center">
          <SiSkillshare className="text-4xl md:text-3xl mr-2 text-purple-400"  />
          <span className="text-base md:text-lg lg:text-xl font-semibold">
            MY SKILLS
          </span>
        </button>
      </div>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
