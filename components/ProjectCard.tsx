"use client";

import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  demoLink?: string;
  images?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link, demoLink, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (images) {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (images) {
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <div className="block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full overflow-hidden">
      
      {/* CAROUSEL SECTION */}
      {images && images.length > 0 && (
        <div className="h-48 w-full relative group overflow-hidden border-b border-gray-100">
          <img 
            src={`/images/${images[currentImageIndex]}`} 
            alt={`${title} preview ${currentImageIndex + 1}`} 
            className="w-full h-full object-cover object-top transition-transform duration-500"
          />

          {images.length > 1 && (
            <>
              {/* Left Arrow */}
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
              >
                ←
              </button>
              
              {/* Right Arrow */}
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
              >
                →
              </button>

              {/* Page Indicator */}
              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-navy-900">
            {title}
          </h3>
        </div>
        
        <p className="mb-4 font-normal text-gray-700">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-lightBlue-50 text-navy-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-lightBlue-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white bg-navy-900 hover:bg-navy-800 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
          >
            GitHub Repo
          </a>
          
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-navy-900 bg-white border border-navy-900 hover:bg-lightBlue-50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;