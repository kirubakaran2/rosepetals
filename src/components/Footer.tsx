import { useState, useEffect } from "react";
import { Instagram, MapPin, Phone, Mail, Heart, ExternalLink } from "lucide-react";
import logo from "../../public/logotransparent.png";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <footer 
      id="footer" 
      className="relative bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="relative group">
  {/* Glowing hover background */}
  <div className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300 pointer-events-none"></div>

  <a
    href="#"
    className="flex items-center transform transition-transform duration-300 hover:scale-105 relative z-10"
  >
    <div className="relative">
      {/* Gradient background glow on hover */}
      <div className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-30 bg-gradient-to-r from-pink-400 to-rose-400 transition-opacity duration-300 pointer-events-none"></div>

      {/* Logo image */}
      <img
        src={logo}
        alt="RosePetals Logo"
        width={40}
        height={40}
        className="mr-2 relative z-10"
      />
    </div>

    {/* Brand text */}
    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
      RosePetals
    </h3>
  </a>
</div>

              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Transform your beauty journey with our expert services and treatments. Where elegance meets expertise.
              </p>
              
              {/* Decorative Element */}
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-pink-200 animate-pulse" />
                <div className="h-px bg-gradient-to-r from-pink-200 to-transparent flex-1"></div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-pink-200" />
                Contact Us
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group cursor-pointer">
                  <MapPin className="w-5 h-5 text-pink-200 mt-1 transform transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      NO:5, KAMMIYAMPET MAIN ROAD,<br />
                      SEMMANADALAM, CUDDALORE
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Phone className="w-5 h-5 text-pink-200 transform transition-transform duration-300 group-hover:scale-110" />
                  <a 
                    href="tel:+917373016001" 
                    className="text-white/90 hover:text-white transition-colors duration-300"
                  >
                    +91 7373016001
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Mail className="w-5 h-5 text-pink-200 transform transition-transform duration-300 group-hover:scale-110" />
                  <a 
                    href="mailto:info@rosepetals.com" 
                    className="text-white/90 hover:text-white transition-colors duration-300"
                  >
                    info@rosepetals.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Section */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Instagram className="w-6 h-6 mr-2 text-pink-200" />
                Follow Us
              </h3>
              
              <a
                href="https://www.instagram.com/rosepetals_cuddalore/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-400 rounded-xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Instagram className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-pink-100 transition-colors duration-300">
                        @rosepetals_cuddalore
                      </p>
                      <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
                        Follow for beauty tips & updates
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className={`mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '0.6s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              {!mapLoaded && (
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-white font-medium">Loading map...</span>
                  </div>
                </div>
              )}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.0539674659444!2d79.74522227505665!3d11.761249088453823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5499405880fb81%3A0x3aa869513ac88a2f!2sRose%20Petals%20Beauty%20Lounge!5e0!3m2!1sen!2sin!4v1735457487383!5m2!1sen!2sin"
                className="w-full h-80 md:h-96 transition-opacity duration-500"
                style={{border: 0}}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={handleMapLoad}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 border-t border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '0.8s' }}>
            <p className="text-white/80 text-sm md:text-base">
              &copy; {new Date().getFullYear()} RosePetals Beauty Lounge. All rights reserved. 
              <span> | Crafted By <strong>aazhilabs</strong></span>
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;