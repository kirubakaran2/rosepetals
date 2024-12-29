import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import BookingForm from "./BookingForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onBookNowClick: () => void;
}

const Hero = ({ onBookNowClick }: HeroProps) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Hero description animation
      gsap.from(".hero-description", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });

      // Button animation
      gsap.from(".hero-button", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        delay: 0.6,
        ease: "back.out(1.7)"
      });

      // Slider animation
      gsap.from(".hero-slider", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.9,
        scrollTrigger: {
          trigger: ".hero-slider",
          start: "top 80%",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const slides = [
    {
      image: img1,
      title: "Professional Beautician Course",
    },
    {
      image: img2,
      title: "Organic Skincare",
    },
    {
      image: img3,
      title: "Acupuncture Therapy",
    },
  ];

  return (
    <div 
      ref={heroRef} 
      className="min-h-screen pt-16 bg-gradient-to-b from-accent via-accent/50 to-white"
      id="home"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">
            Transform Your Beauty <br />
            <span className="text-primary">Inside & Out</span>
          </h1>
          <p className="hero-description text-lg md:text-xl text-muted-foreground mb-8">
            Experience luxury beauty treatments and holistic wellness at RosePetals
          </p>
          <p className="hero-description text-lg md:text-xl font-semibold text-primary mb-4">
            Call us at: <span className="text-primary hover:text-primary/80">7373016001</span> | <span className="text-primary hover:text-primary/80">8637475782</span>
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="default"
                size="lg" 
                className="hero-button rounded-full"
                onClick={onBookNowClick}
              >
                Book Your Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-center mb-4">Book Your Session</DialogTitle>
              </DialogHeader>
              <BookingForm />
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="hero-slider">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="w-full max-w-4xl mx-auto mt-12"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="w-full max-w-lg">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-serif">
                      {slide.title}
                    </h3>
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