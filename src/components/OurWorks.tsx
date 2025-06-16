import { useEffect, useRef } from "react";
import img2 from "/client1.png";
import img1 from "/client2.png";
import img3 from "/hairtreatment.png";
import img4 from "/products.png";

const OurWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            setTimeout(() => {
              el.classList.add(
                "opacity-100",
                "translate-y-0",
                "scale-100",
                "md:translate-x-0"
              );
            }, index * 150); // staggered delay
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".work-item");
    items?.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const works = [
    {
      image: img1,
      title: "Bridal Makeup",
      description: "Timeless and elegant looks crafted for your special day.",
    },
    {
      image: img2,
      title: "Facial Treatment",
      description: "Deep-cleansing and revitalizing facials for radiant skin.",
    },
    {
      image: img3,
      title: "Hair Treatments",
      description: "Nourishing therapies for healthy, beautiful hair.",
    },
    {
      image: img4,
      title: "Our Products",
      description: "Premium beauty products selected for exceptional results.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {works.map((work, index) => (
        <div
          key={index}
          className="work-item opacity-0 translate-y-8 scale-95 md:translate-x-8 transition-all duration-700 ease-out relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-105"
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
