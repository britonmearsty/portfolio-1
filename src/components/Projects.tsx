
import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order tracking.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: ["web", "frontend", "backend"]
    },
    {
      id: 2,
      title: "Travel Companion App",
      description: "A mobile app for travelers featuring itinerary planning, local recommendations, and offline maps.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: ["mobile", "frontend"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A clean, modern portfolio website for a graphic designer showcasing their work and services.",
      image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["HTML/CSS", "JavaScript", "GSAP"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: ["web", "frontend", "design"]
    },
    {
      id: 4,
      title: "Task Management System",
      description: "A collaborative task management system with real-time updates, file sharing, and team chat.",
      image: "https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Redux", "Express", "Socket.io"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: ["web", "frontend", "backend"]
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "A fitness app that tracks workouts, nutrition, and progress with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React Native", "TypeScript", "Firebase"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: ["mobile", "frontend"]
    },
    {
      id: 6,
      title: "Weather App",
      description: "A beautiful weather application with detailed forecasts, interactive maps, and location-based alerts.",
      image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["JavaScript", "API Integration", "CSS3"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: ["web", "frontend"]
    }
  ];

  // Filter categories
  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'design', label: 'Design' }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block text-primary font-medium mb-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>PORTFOLIO</span>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Featured Projects
          </h2>
          <p className={`text-muted-foreground ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Here are some of my best projects that showcase my skills and experience in design and development.
          </p>
          
          {/* Filter Categories */}
          <div className={`flex flex-wrap justify-center gap-2 mt-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === category.value 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-foreground hover:bg-secondary/70'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              delay={0.4 + index * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        {/* Show More Button (Optional) */}
        <div className="text-center mt-12">
          <button className={`button-outline ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
