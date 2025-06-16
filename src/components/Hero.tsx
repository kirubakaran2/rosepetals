import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backgroundImage from "../../public/bg.png?url";
import BookingForm from "./BookingForm";
import img2 from "../../public/soap.png"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const img1 = "https://images.unsplash.com/photo-1715848504087-11a748ce0058?";
import img3 from "../../public/accupuncture.png";
gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onBookNowClick: () => void;
}

const Hero = ({ onBookNowClick }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      });

      gsap.from(".hero-description", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".hero-phone", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.7,
        ease: "power2.out",
      });

      gsap.from(".hero-button", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: "elastic.out(1, 0.5)",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const slides = [
    {
      image: img1,
      title: "Professional Beautician Course",
      subtitle: "Master the art of beauty",
    },
    {
      image: img2,
      title: "Organic Skincare",
      subtitle: "Nature's touch for your skin",
    },
    {
      image: img3,
      title: "Acupuncture Therapy",
      subtitle: "Ancient healing for modern life",
    },
  ];

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen pt-16 overflow-hidden bg-gray-50"
      id="home"
    >
      {/* Enhanced Background with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/20 via-white/40 to-white/80" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 md:py-20 h-full flex flex-col">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12 flex-1 flex flex-col justify-center">
          <div className="mb-6 md:mb-8">
            <span className="inline-block px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-sm font-medium mb-4 border border-rose-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              Premium Beauty & Wellness
            </span>
          </div>

          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="font-serif font-light text-gray-800">
              Elevate Your
            </span>{" "}
            <br className="hidden sm:block" />
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-400">
              Beauty Experience
            </span>
          </h1>

          <p className="hero-description text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Expert care blending modern techniques with holistic wellness
            approaches for radiant results
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            <p className="hero-phone text-sm md:text-base lg:text-lg font-medium text-rose-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 mr-1.5 text-rose-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a
                href="tel:7373016001"
                className="hover:text-rose-800 transition-colors"
              >
                +91 73730 16001
              </a>
            </p>

            <span className="hidden sm:block text-gray-300">|</span>

            <p className="hero-phone text-sm md:text-base lg:text-lg font-medium text-rose-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 mr-1.5 text-rose-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a
                href="tel:8637475782"
                className="hover:text-rose-800 transition-colors"
              >
                +91 86374 75782
              </a>
            </p>
          </div>

          <Dialog>
            <div onClick={onBookNowClick}>
              <DialogTrigger asChild>
<button 
  className="
    relative 
    inline-flex 
    items-center 
    justify-center 
    px-8 
    py-3 
    md:px-10 
    md:py-4 
    text-base 
    md:text-lg 
    font-medium 
    text-white 
    bg-gradient-to-r 
    from-rose-600 
    to-rose-500 
    rounded-full 
    shadow-lg 
    hover:from-rose-700 
    hover:to-rose-600 
    transition-all 
    duration-300
    overflow-hidden
    group
    border-2 border-white/20
    hover:shadow-xl
    hover:scale-105
  "
>
  <span className="relative z-10 flex items-center">
    Book Your Appointment
    <span className="ml-2 inline-block animate-bounce-x">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  </span>
  <span className="absolute inset-0 bg-gradient-to-r from-rose-700 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
</button>
              </DialogTrigger>
            </div>
            <DialogContent className="sm:max-w-[425px] rounded-lg border border-gray-100 shadow-xl bg-white">
              <DialogHeader>
                <DialogTitle className="text-xl font-medium text-center mb-4 text-gray-800">
                  Schedule Your Consultation
                </DialogTitle>
              </DialogHeader>
              <BookingForm />
            </DialogContent>
          </Dialog>
        </div>

        <div className="hero-slider mt-6 md:mt-12 lg:mt-16 px-2">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="w-full max-w-5xl mx-auto"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: "auto",
                spaceBetween: 24,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group transform transition-all duration-200 hover:shadow-xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-1">
                      {slide.title}
                    </h3>
                    <p className="text-rose-100 text-sm md:text-base">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;