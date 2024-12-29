import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";


const OurWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      }
    });

    // Animate each work item sequentially
    const works = document.querySelectorAll('.work-item');
    works.forEach((work, i) => {
      timeline.fromTo(work,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        i * 0.2
      );
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const works = [
    {
        image: img1,
      title: "Bridal Makeup",
      description: "Elegant bridal transformations",
    },
    {
        image: img2,
      title: "Facial Treatment", 
      description: "Rejuvenating facial care",
    },
    {
        image: img3,
      title: "Therapeutic Massage",
      description: "Relaxing body treatments",
    },
    {
        image: img1,
      title: "Spa Services",
      description: "Luxury spa experiences",
    },
  ];

  return (
    <div ref={triggerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {works.map((work, index) => (
        <div
          key={index}
          className="work-item relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105"
        >
          <div className="aspect-video">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-serif mb-2 tracking-wide">{work.title}</h3>
              <p className="text-base font-light">{work.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurWorks;