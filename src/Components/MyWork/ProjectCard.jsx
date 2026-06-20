import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="border-2 border-purple-300 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 bg-black/40 backdrop-blur-lg flex flex-col justify-between">
      <div>
        <div className="w-full h-48 mx-auto rounded-xl overflow-hidden border border-purple-800 flex items-center justify-center bg-gray-800 relative group">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <span className="text-gray-400 font-semibold">Image</span>
          )}
        </div>
        
        <h3 className="font-bold text-violet-400 text-center text-xl mt-4">{project.title}</h3>
        
        <p className="font-normal text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mt-4">
          {project.description}
        </p>

        {/* Technology Badges */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="bg-purple-900/40 border border-purple-500/50 text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        {project.sourceLink && (
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-purple-400 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center text-sm font-semibold"
          >
            Source Code
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-purple-400 py-2 px-5 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300 cursor-pointer text-center text-sm font-semibold bg-purple-900/20"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
