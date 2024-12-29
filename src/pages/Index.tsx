import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OurWorks from "@/components/OurWorks";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from "@/assets/profile.jpg";
import profile2 from "@/assets/pro.jpg";

const Index = () => {
  const bookingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate sections on scroll
    gsap.utils.toArray<HTMLElement>('section').forEach((section, i) => {
      gsap.fromTo(section, 
        { 
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Smooth scroll to section with offset for navbar
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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleNavClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  // Handle booking button click
  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onBookNowClick={scrollToBooking} />
      
      <section id="why-us" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Care</h3>
              <p className="text-muted-foreground">
                Our team of certified professionals ensures you receive the highest quality beauty and wellness treatments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Luxury Experience</h3>
              <p className="text-muted-foreground">
                Immerse yourself in a serene environment designed for your ultimate relaxation and rejuvenation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
              <p className="text-muted-foreground">
                We tailor our treatments to meet your unique needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Courses
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-accent/30 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Professional Makeup Artistry</h3>
              <p className="text-muted-foreground mb-4">
                Master the art of makeup with our comprehensive course designed for aspiring makeup artists.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Bridal Makeup Techniques</li>
                <li>Color Theory and Skin Analysis</li>
                <li>Advanced Application Methods</li>
                <li>Business Skills for Makeup Artists</li>
              </ul>
            </div>
            <div className="bg-accent/30 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Beauty Therapy Certification</h3>
              <p className="text-muted-foreground mb-4">
                Get certified in beauty therapy and start your journey in the beauty industry.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Facial Treatments</li>
                <li>Body Massage Techniques</li>
                <li>Skincare Fundamentals</li>
                <li>Client Consultation Skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="our-works" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-primary">Works</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <OurWorks />
          </div>
        </div>
      </section>

      <section id="acupuncture" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Acupuncture Therapy
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Experience the ancient healing art of acupuncture, promoting balance and wellness through traditional Chinese medicine techniques.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <ul className="text-left list-disc list-inside text-muted-foreground">
                  <li>Stress Relief</li>
                  <li>Pain Management</li>
                  <li>Improved Sleep</li>
                  <li>Enhanced Energy</li>
                </ul>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Treatment Areas</h3>
                <ul className="text-left list-disc list-inside text-muted-foreground">
                  <li>Chronic Pain</li>
                  <li>Anxiety & Depression</li>
                  <li>Digestive Issues</li>
                  <li>Women's Health</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-64 h-64 mx-auto mb-8">
              <img
                src={profile}
                alt="Spa Owner"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Mrs Salma</h3>
              <p className="text-muted-foreground mb-6">
              With over 11 years of experience in the beauty and wellness industry, RosePetals was founded with a vision to create a sanctuary where beauty meets wellness. Expertise in both traditional and modern beauty techniques, alongside a focus on acupuncture, has made RosePetals a leading destination for those seeking premium beauty services. In addition to offering exceptional treatments, RosePetals also provides specialized courses, ensuring a holistic approach to beauty and well-being. </p>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" ref={bookingRef} className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Book Your Appointment
          </h2>
          <BookingForm />
        </div>
      </section>

      <Services />
      <Footer />
    </div>
  );
};

export default Index;
