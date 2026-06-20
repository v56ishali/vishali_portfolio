import React from 'react';
import SkillProgress from './SkillProgress';

const SkillCategoryCard = ({ category }) => {
  return (
    <div className="border border-purple-400 rounded-2xl shadow-lg p-6 md:p-8 bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex flex-col">
      <h3 className="text-xl font-bold text-violet-400 mb-6 text-center">{category.title}</h3>
      <div className="flex flex-col w-full px-2">
        {category.skills.map((skill, idx) => (
          <SkillProgress key={idx} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategoryCard;
