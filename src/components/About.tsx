
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Technical skills list
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "UI/UX Design", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "React Native", level: 70 },
    { name: "Figma", level: 80 },
  ];

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
      id="about" 
      ref={sectionRef}
      className="py-20 bg-secondary/30"
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className={`lg:w-2/5 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-2/20 to-highlight/30 rounded-2xl transform -rotate-3 scale-105"></div>
              <div className="relative bg-white p-2 shadow-xl rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="About Briton Cheruyot" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className={`lg:w-3/5 space-y-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="space-y-2">
              <span className="inline-block text-primary font-medium">ABOUT ME</span>
              <h2 className="text-3xl sm:text-4xl font-bold">Get to know me better</h2>
            </div>
            
            <p className="text-muted-foreground">
              I'm a passionate apps and web designer/developer based in Kenya with extensive experience creating 
              digital solutions that blend aesthetics with functionality. My journey in tech began with a fascination 
              for how digital experiences can transform businesses and connect people.
            </p>
            
            <p className="text-muted-foreground">
              My Kenyan heritage has profoundly influenced my work, inspiring me to create designs that are not only 
              visually appealing but also culturally relevant and accessible. I believe that great design should be 
              inclusive and speak to diverse audiences.
            </p>
            
            <p className="text-muted-foreground">
              When I'm not coding or designing, you'll find me exploring nature, participating in tech communities, 
              or mentoring aspiring developers. I'm always open to new challenges and collaborations that push the 
              boundaries of digital innovation.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className={`space-y-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${0.8 + index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <button 
                onClick={() => window.open('/resume.pdf', '_blank')} 
                className="button-outline"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
