
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="glass-card overflow-hidden mb-16 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} h-full`}>
        {/* Project Image */}
        <motion.div 
          className="w-full md:w-3/5 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        </motion.div>

        {/* Project Details */}
        <div className="w-full md:w-2/5 p-6 flex flex-col justify-center">
          <div className="mb-2">
            <span className="text-web3-aqua text-sm">Featured Project</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
          
          <div className="mb-4 text-web3-slate">
            <p>{project.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="text-xs px-3 py-1 rounded-full bg-web3-light-blue bg-opacity-30 text-web3-light-slate"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            {project.githubLink && (
              <motion.a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-web3-light-slate hover:text-web3-aqua transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.liveLink && (
              <motion.a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-web3-light-slate hover:text-web3-aqua transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
            {project.demoLink && (
              <motion.a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-web3-light-slate hover:text-web3-aqua transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code size={20} />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Numbered index */}
      <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-web3-aqua bg-opacity-20 text-web3-aqua font-bold">
        {index + 1}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
