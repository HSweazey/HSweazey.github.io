import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string; // URL to the GitHub repo
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-action transition-all duration-300 group"
    >
      <div className="flex justify-between items-start">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-navy-900 group-hover:text-action">
          {title}
        </h3>
        {/* Simple arrow icon that moves when you hover */}
        <span className="text-gray-400 group-hover:text-action transform group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
      
      <p className="mb-4 font-normal text-gray-700">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-lightBlue-50 text-navy-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-lightBlue-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;