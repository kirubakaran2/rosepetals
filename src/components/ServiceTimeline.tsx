import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServicesTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const services = timelineRef.current?.querySelectorAll('.service-item');
    const timeline = timelineRef.current?.querySelector('.timeline-line');

    if (services && timeline) {
      // Animate the main timeline line drawing
      gsap.fromTo(timeline, 
        {
          scaleY: 0,
          transformOrigin: "top center"
        },
        {
          scaleY: 1,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1
          }
        }
      );

      services.forEach((service, index) => {
        // Animate service items with stagger
        gsap.from(service, {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: service,
            start: "top 80%",
            end: "center center",
            toggleActions: "play none none reverse"
          }
        });

        // Animate the dot for each service with spin
        const dot = service.querySelector('.timeline-dot');
        if (dot) {
          gsap.from(dot, {
            scale: 0,
            opacity: 0,
            rotation: 360, // Add 360 degree rotation
            duration: 0.8,
            delay: 0.3,
            ease: "back.out(1.7)", // Add easing for smoother spin
            scrollTrigger: {
              trigger: service,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });
        }
      });
    }
  }, []);

  return (
    <div className="py-20 bg-gradient-to-b from-secondary/20 via-white to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Our Journey to Your Beauty
        </h2>
        
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line (Visible on all devices) */}
          <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 transform md:-translate-x-1/2" />
          
          {/* Service Items */}
          <div className="space-y-12 md:space-y-24">
            {[ 
              {
                title: "Acupuncture Therapy",
                description: "Ancient healing techniques for modern wellness",
                icon: "✧"
              },
              {
                title: "Beauty Courses",
                description: "Professional training for aspiring beauticians",
                icon: "❋"
              },
              {
                title: "Hair Treatments",
                description: "Revitalize your hair with our expert care",
                icon: "✦"
              },
              {
                title: "Skin Care",
                description: "Personalized attention to every detail",
                icon: "❈"
              }
            ].map((service, index) => (
              <div
                key={service.title}
                className={`service-item relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col pl-12 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot absolute left-4 md:left-1/2 w-8 h-8 bg-white border-2 border-primary rounded-full transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                  <span className="text-primary">{service.icon}</span>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}>
                  <h3 className="text-2xl font-serif mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTimeline;
