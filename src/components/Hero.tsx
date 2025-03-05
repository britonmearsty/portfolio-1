
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 bg-hero-pattern"
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className={`lg:w-1/2 space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Apps & Web Designer + Developer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Crafting Digital Experiences That Matter
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Hi, I'm Briton Cheruyot, a passionate apps and web designer/developer from Kenya.
              I blend creativity with technical expertise to build beautiful, functional digital solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-outline"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div 
            className={`lg:w-1/2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} 
            style={{ animationDelay: '0.5s' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-1/20 to-highlight/30 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white p-2 shadow-xl rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Briton Cheruyot" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className={`flex flex-col items-center text-muted-foreground hover:text-primary transition-colors ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '1s' }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-float" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
