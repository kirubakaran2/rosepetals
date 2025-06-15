import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../../public/logotransparent.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Why Us", href: "#why-us" },
    { name: "Courses", href: "#courses" },
    { name: "Acupuncture", href: "#acupuncture" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#booking" },
  ];

  const handleMenuClick = (itemName) => {
    setActiveItem(itemName);
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled || isOpen 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-lg shadow-lg'
      } ${isOpen ? 'rounded-b-none' : 'rounded-b-lg'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with hover animation */}
            <div className="flex items-center group">
              <a href="#" className="flex items-center transform transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <img 
                src={logo}
                alt="RosePetals Logo"
                width={40}
                height={40}
                className="mr-3"
              />
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent transform transition-all duration-300 group-hover:scale-105">
                  RosePetals
                </span>
              </a>
            </div>
            
            {/* Desktop Menu with floating effect */}
            <div className="hidden md:flex space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200/50">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-gray-700 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:text-pink-600 ${
                    activeItem === item.name 
                      ? 'text-pink-600 bg-pink-50 shadow-sm' 
                      : 'hover:bg-pink-50/50'
                  } transform hover:scale-105 hover:-translate-y-0.5`}
                  onClick={() => setActiveItem(item.name)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'slideInDown 0.6s ease-out forwards'
                  }}
                >
                  {activeItem === item.name && (
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full animate-pulse"></div>
                  )}
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></div>
                </a>
              ))}
            </div>

            {/* Hamburger Menu with morphing animation */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:scale-110"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Menu className={`w-5 h-5 absolute transition-all duration-300 ${
                  isOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`} />
                <X className={`w-5 h-5 absolute transition-all duration-300 ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                }`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        <div className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} style={{ top: '4rem' }} onClick={() => setIsOpen(false)} />
      </nav>

      {/* Mobile Menu with staggered animation */}
      <div className={`md:hidden fixed left-4 right-4 z-40 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isOpen 
          ? 'top-20 opacity-100 visible translate-y-0 scale-100' 
          : 'top-16 opacity-0 invisible -translate-y-4 scale-95'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
          <div className="p-2">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block text-lg text-gray-700 py-4 px-6 rounded-xl transition-all duration-300 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 active:scale-95 transform ${
                  activeItem === item.name 
                    ? 'text-pink-600 bg-gradient-to-r from-pink-50 to-rose-50 shadow-sm' 
                    : ''
                } ${isOpen ? 'animate-slideInUp' : ''}`}
                onClick={() => handleMenuClick(item.name)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.name}</span>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 transition-all duration-300 ${
                    activeItem === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}></div>
                </div>
              </a>
            ))}
          </div>
          
          {/* Decorative bottom bar */}
          <div className="h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;