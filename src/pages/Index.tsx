import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OurWorks from "@/components/OurWorks";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ServiceTimeline from "@/components/ServiceTimeline";
import profile from "@/assets/profile.jpg";
import bgimage from "../../public/rose.png"
const rosePetalsBgImg = bgimage;
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const bookingRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  // Animations setup
  useEffect(() => {
    // Animate sections on scroll
    const sections = sectionRefs.current.filter(Boolean) as HTMLElement[];
    
    sections.forEach((section, index) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out"
      });
    });

    // Special animations for specific elements
    gsap.utils.toArray(".feature-card").forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: "back.out(1.2)"
      });
    });

    // Smooth scroll for navigation
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        const navHeight = document.querySelector('nav')?.offsetHeight || 0;
        const elementPosition = element?.getBoundingClientRect().top || 0;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(anchor => {
      anchor.addEventListener('click', handleNavClick);
    });

    return () => {
      navLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 overflow-x-hidden relative">
      {/* Background texture with subtle rose petals */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          backgroundImage: `url(${rosePetalsBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply'
        }}
      />
      
      <Navbar />
      <Hero onBookNowClick={scrollToBooking} />
      
      {/* Why Choose Us Section */}
      <section 
        id="why-us" 
        ref={el => addToRefs(el, 0)}
        className="py-20 md:py-28 bg-gradient-to-b from-white to-rose-50/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-rose-100/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-amber-100/30 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-rose-600 uppercase bg-rose-100/50 rounded-full mb-4">
              Excellence Redefined
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mt-3 mb-6">
              Why Choose <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-500">RosePetals</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative">
            {/* Feature cards */}
            {[
              {
                title: "Expert Care",
                icon: "🌸",
                description: "Our certified professionals deliver exceptional beauty and wellness treatments with meticulous attention to detail.",
                color: "from-rose-100/40 to-rose-50/20"
              },
              {
                title: "Luxury Experience",
                icon: "✨",
                description: "Immerse yourself in our serene sanctuary designed for ultimate relaxation and rejuvenation.",
                color: "from-amber-100/40 to-amber-50/20"
              },
              {
                title: "Personalized Service",
                icon: "💫",
                description: "Every treatment is carefully tailored to your unique needs and preferences for optimal results.",
                color: "from-violet-100/40 to-violet-50/20"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`feature-card bg-gradient-to-b ${item.color} backdrop-blur-sm border border-white/50 rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 relative z-10`}
              >
                <div className="text-5xl mb-6 text-center">{item.icon}</div>
                <h3 className="text-xl font-serif font-medium mb-4 text-center">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
<section 
  id="courses" 
  ref={el => addToRefs(el, 1)}
  className="py-20 md:py-28 bg-white relative"
>
  <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
    <div className="text-center mb-16 md:mb-20">
      <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-amber-600 uppercase bg-amber-100/50 rounded-full mb-4">
        Master Your Craft
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mt-3 mb-6">
        Our <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">Courses</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto rounded-full" />
    </div>

    {/* === Course 1: Makeup Artistry === */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center mb-16">
      <div className="relative">
        <div className="feature-card bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 border-l-4 border-rose-500 hover:-translate-y-1">
          <h3 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-gray-800">
            Professional Makeup Artistry
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Master the transformative art of makeup with our comprehensive course designed for aspiring artists seeking professional excellence.
          </p>
          <ul className="space-y-3 text-gray-600">
            {[
              "Bridal Makeup Techniques",
              "Color Theory & Skin Analysis",
              "Advanced Application Methods",
              "Professional Portfolio Development"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-rose-500 mr-3 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:from-rose-600 hover:to-amber-600">
            Enroll Now
          </button>
        </div>
      </div>
      <div className="hidden md:block relative h-full">
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80" 
            alt="Makeup artist at work" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </div>

    {/* === Course 2: Beauty Therapy === */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
      <div className="hidden md:block relative h-full order-2 md:order-1">
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1731514771613-991a02407132?auto=format&fit=crop&w=800&q=80" 
            alt="Spa facial therapy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
      <div className="relative order-1 md:order-2">
        <div className="feature-card bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-amber-500 hover:-translate-y-1">
          <h3 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-gray-800">
            Beauty Therapy Certification
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our certification program provides the foundational knowledge and practical skills needed for a successful career in beauty therapy.
          </p>
          <ul className="space-y-3 text-gray-600">
            {[
              "Advanced Facial Treatments",
              "Therapeutic Massage Techniques",
              "Skincare Science",
              "Client Relationship Management"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-amber-500 mr-3 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-rose-600">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Our Works Section */}
      <section 
        id="our-works" 
        ref={el => addToRefs(el, 2)}
        className="py-20 md:py-28 bg-gradient-to-b from-white to-rose-50/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-rose-100/30 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-violet-600 uppercase bg-violet-100/50 rounded-full mb-4">
              Gallery
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mt-3 mb-6">
              Our <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-rose-500">Masterpieces</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-rose-400 mx-auto rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Explore our gallery of transformative beauty work that speaks to our artistry and attention to detail.
            </p>
          </div>
          <OurWorks />
        </div>
      </section>

      {/* Acupuncture Section */}
<section 
  id="acupuncture" 
  ref={el => addToRefs(el, 3)}
  className="py-20 md:py-28 bg-white relative"
>
  <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
    <div className="text-center mb-16 md:mb-20">
      <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-emerald-600 uppercase bg-emerald-100/50 rounded-full mb-4">
        Holistic Wellness
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mt-3 mb-6">
        Ancient <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Healing</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full" />
      <p className="text-gray-600 max-w-3xl mx-auto mt-6">
        Experience the ancient healing art of acupuncture, carefully adapted for modern wellness needs to restore balance and vitality.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
      
      {/* Image Column */}
      <div className="relative h-72 md:h-full md:col-span-1">
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1598555763574-dca77e10427e?auto=format&fit=crop&w=800&q=80" 
            alt="Serene spa room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/30" />
        </div>
      </div>

      {/* Therapeutic Benefits Card */}
      <div className="feature-card bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 md:col-span-1">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-emerald-100/50 flex items-center justify-center mr-4 text-emerald-600 text-2xl">
            ☯
          </div>
          <h3 className="text-2xl font-serif font-medium">Therapeutic Benefits</h3>
        </div>
        <ul className="space-y-4">
          {[
            { title: "Stress Relief", desc: "Reduce anxiety and promote deep relaxation" },
            { title: "Pain Management", desc: "Alleviate chronic pain naturally" },
            { title: "Improved Sleep", desc: "Restore healthy sleep patterns" },
            { title: "Energy Flow", desc: "Enhance your body's natural energy" }
          ].map((item, i) => (
            <li key={i} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <h4 className="font-medium text-gray-800">{item.title}</h4>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Treatment Focus Card */}
      <div className="feature-card bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 md:col-span-1">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-teal-100/50 flex items-center justify-center mr-4 text-teal-600 text-2xl">
            ⚕
          </div>
          <h3 className="text-2xl font-serif font-medium">Treatment Focus</h3>
        </div>
        <ul className="space-y-4">
          {[
            { title: "Chronic Conditions", desc: "Address long-standing health concerns" },
            { title: "Emotional Balance", desc: "Support for anxiety and mood" },
            { title: "Digestive Health", desc: "Improve gut function naturally" },
            { title: "Women's Wellness", desc: "Specialized care for feminine health" }
          ].map((item, i) => (
            <li key={i} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <h4 className="font-medium text-gray-800">{item.title}</h4>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section 
        id="about" 
        ref={el => addToRefs(el, 4)}
        className="py-20 md:py-28 bg-gradient-to-b from-white to-rose-50/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-amber-100/30 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-rose-600 uppercase bg-rose-100/50 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mt-3 mb-6">
              About <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-500">RosePetals</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto rounded-full" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-1/3 flex justify-center relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-amber-100/50 rounded-full transform rotate-6 blur-md" />
                <div className="absolute inset-0 border-4 border-white rounded-full transform -rotate-3" />
                <img 
                  src={profile} 
                  alt="Mrs Salma" 
                  className="relative w-full h-full object-cover rounded-full z-10 border-4 border-white shadow-xl"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left mt-10 md:mt-0">
              <h3 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-gray-800">Mrs. Salma</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over a decade of expertise in beauty and wellness, I founded RosePetals to create a sanctuary where modern aesthetics meet holistic well-being. Our approach combines time-honored techniques with innovative methods to deliver transformative results.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Beyond our signature treatments, we're committed to education through specialized courses, empowering both clients and aspiring professionals with knowledge that elevates their beauty journey.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {["CIDESCO Certified", "11+ Years Experience", "Continuing Education", "Client-Focused"].map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section 
        id="booking" 
        ref={el => {
          bookingRef.current = el;
          addToRefs(el, 5);
        }}
        className="py-20 md:py-28 bg-gradient-to-b from-white to-rose-50/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-violet-100/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-rose-100/30 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-violet-600 uppercase bg-violet-100/50 rounded-full mb-4">
              Begin Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mt-3 mb-6">
              Book Your <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-rose-500">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-rose-400 mx-auto rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Begin your journey to relaxation and rejuvenation by scheduling your personalized consultation.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
      
      <ServiceTimeline />
      <Services/>
      <Footer />
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .feature-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
};

export default Index;