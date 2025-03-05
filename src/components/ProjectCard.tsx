
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  delay: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
  delay,
  isVisible
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden shadow-md card-hover ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} 
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 sm:h-60">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-0'}`}></div>
        
        {/* Overlay Links */}
        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-primary hover:text-white hover:bg-primary transition-colors"
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-primary hover:text-white hover:bg-primary transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-1 bg-secondary rounded-full text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
