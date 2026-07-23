import React from 'react';
import { FaProjectDiagram } from "react-icons/fa";
import ProjectCard from './ProjectCard';
import dualdbImg from '../../assets/dualdb.png';
import agrishieldImg from '../../assets/agrishield.jpg';
import constructionImg from '../../assets/construction.jpg';
import genaiImg from '../../assets/genai.png';
import dualpromptImg from '../../assets/dualprompt.png';
import mlImg from '../../assets/ml.png';
import timetableImg from '../../assets/timetable.png';

const MyWork = () => {
  const projects = [
    {
      title: "DualDB Query Architect",
      description: "DualDB Query Architect is a unified database dashboard connecting developers with SQL and NoSQL environments. It optimizes data exploration and query construction by implementing features like a visual drag-and-drop interface, real-time query translation, secure database connections, and PDF report generation",
      image: dualdbImg,
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "MySQL", "Blocky"],
      sourceLink: "https://github.com/v56ishali/DualDB_Query_Architect",
      demoLink: "https://dualdbarchitect.kwscloud.in/"
    },
    {
      title: "Construction Site Viability and Lifespan Prediction",
      description: "Construction Site Selection is a data-driven web application focused on intelligent urban planning and structural longevity. It uses advanced machine learning models to evaluate site feasibility and predict project lifespans, providing actionable insights for developers and civil engineers through an interactive and responsive design.",
      image: constructionImg,
      technologies: ["Flask", "Python", "Docker"],
      sourceLink: "https://github.com/v56ishali/Construction_Site_Viability_and_Lifespan_Prediction",
      demoLink: "https://construction-site-selection-7wo8.onrender.com"
    },
    {
      title: "Vishu's Dance Academy",
      description: "A web application designed to empower dance academies, trainers, and students by automating admissions and scheduling. Built with React, Node.js, and MongoDB, Vishu's Dance Academy bridges the gap between aspiring dancers, trainers, and administrative management — helping studios streamline enrollment and class organization through a simple, intuitive interface.",
      image: danceImg,
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      sourceLink: "https://github.com/v56ishali/Vishu_Dance_Academy",
      demoLink: "https://vishu-dance-academy.vercel.app/"
    },
    {
      title: "Dual-Prompt Text–Image Matching Framework Using CLIP",
      description: "A multimodal AI system that detects fake news and manipulated incident reports by cross-validating text and images in real time. Combines NLP and computer vision using CLIP, BLIP-2, and spaCy — achieving 89.3% authenticity detection accuracy, outperforming baseline methods by 15.7%.",
      image: dualpromptImg,
      technologies: ["Python", "CLIP", "BLIP-2", "spaCy", "NLP", "Multimodal AI"],
      sourceLink: "https://github.com/v56ishali/Dual_prompt_image-text_matching",
      demoLink: "https://huggingface.co/spaces/vishali-056/Dual_Prompt"
    },
    {
      title: "Time Table Generator",
      description: "A smart Time Table Generator that automates academic scheduling by creating optimized and conflict-free timetables based on user-defined constraints. Built with React, Node.js, Express, MongoDB, and Tailwind CSS, the application streamlines timetable management through an intuitive interface, efficient scheduling logic, and PDF export functionality.",
      image: timetableImg,
      technologies: ["React", "Tailwind.CSS", "Node.js", "Express.js", "MongoDB"],
      sourceLink: "https://github.com/v56ishali/TimeTable_Generator",
      demoLink: "https://time-table-generator-pi.vercel.app/"
    },
    {
      title: "Machine Learning Projects",
      description: "A hands-on collection of machine learning projects spanning classification, regression, and computer vision. Built using Python with Scikit-learn, TensorFlow/Keras, and OpenCV, these projects demonstrate end-to-end ML workflows — from data preprocessing and exploratory analysis to model training and evaluation.",
      image: mlImg,
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
      sourceLink: "https://github.com/v56ishali/My_Machine_Learning",
      demoLink: "https://huggingface.co/spaces/vishali-056/Brain_Tumor_Detection"
    },
    {
      title: "Generative AI Projects",
      description: "A creative collection of Generative AI projects exploring conversational AI and image generation. Built using Hugging Face models with interactive interfaces powered by Streamlit and Gradio — these projects showcase the practical side of modern AI, from building intelligent chatbots to generating images from text prompts.",
      image: genaiImg,
      technologies: ["Python", "HuggingFace", "StreamLit", "Gradio", "Transformers"],
      sourceLink: "https://github.com/v56ishali/My_Generative_AI",
      demoLink: "https://huggingface.co/vishali-056/spaces"
    }
  ];

  return (
    <section id="project" className="min-h-screen bg-transparent text-white py-16">
      <div className="flex justify-center mb-12">
        <button className="border-2 py-2 px-6 rounded-full text-white flex items-center">
          <FaProjectDiagram className="text-4xl md:text-3xl mr-2 text-purple-400" />
          <span className="text-sm md:text-base lg:text-lg font-semibold">PROJECTS</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default MyWork;
