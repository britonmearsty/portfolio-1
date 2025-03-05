
import { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Lightbulb, Code } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      id: 1,
      title: "Web Design & Development",
      description: "Creating responsive, user-friendly websites that engage visitors and drive business growth.",
      icon: Monitor,
      color: "bg-blue-50 text-blue-500"
    },
    {
      id: 2,
      title: "Mobile App Design & Development",
      description: "Building native and cross-platform mobile applications with intuitive interfaces and robust functionality.",
      icon: Smartphone,
      color: "bg-green-50 text-green-500"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Crafting beautiful, intuitive user interfaces and seamless user experiences that delight customers.",
      icon: Lightbulb,
      color: "bg-amber-50 text-amber-500"
    },
    {
      id: 4,
      title: "Custom Software Solutions",
      description: "Developing tailored software solutions to address unique business challenges and requirements.",
      icon: Code,
      color: "bg-purple-50 text-purple-500"
    }
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
      id="services" 
      ref={sectionRef}
      className="py-20 bg-secondary/30"
    >
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block text-primary font-medium mb-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>SERVICES</span>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            What I Offer
          </h2>
          <p className={`text-muted-foreground ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            I provide comprehensive design and development services to help businesses and individuals establish 
            a strong digital presence and create exceptional user experiences.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`bg-white p-8 rounded-xl shadow-sm card-hover ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className={`p-4 rounded-full w-fit mb-6 ${service.color}`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
              
              {/* Service Features */}
              <ul className="mt-4 space-y-2">
                {[...Array(3)].map((_, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-muted-foreground">
                      {index === 0 
                        ? ['Responsive design', 'SEO optimization', 'Performance tuning'][i]
                        : index === 1
                          ? ['Cross-platform development', 'Offline functionality', 'Push notifications'][i]
                          : index === 2
                            ? ['User research', 'Wireframing & prototyping', 'Usability testing'][i]
                            : ['Custom CRM systems', 'API development', 'Legacy system integration'][i]
                      }
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className={`text-2xl font-bold mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
              My Development Process
            </h3>
            <p className={`text-muted-foreground ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              I follow a structured, collaborative approach to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {['Discovery & Research', 'Planning & Design', 'Development', 'Testing & Launch'].map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="text-lg font-semibold mb-2">{step}</h4>
                      <p className="text-muted-foreground text-sm">
                        {index === 0
                          ? "Understanding your goals, audience, and requirements to lay a solid foundation."
                          : index === 1
                            ? "Creating a strategic plan and designing user-centered interfaces and experiences."
                            : index === 2
                              ? "Building your solution with clean, efficient code following best practices."
                              : "Rigorous testing and smooth deployment to ensure everything works perfectly."
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center z-10">
                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : ''} hidden md:block`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
