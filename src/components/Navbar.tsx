import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src={logo}
                alt="RosePetals Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-2xl font-bold text-primary">
                RosePetals
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-primary/10"
              >
                {item.name}
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 transition-all duration-300 transform rotate-180" />
            ) : (
              <Menu className="w-6 h-6 transition-all duration-300" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu with smooth animation */}
      <div className={`md:hidden fixed inset-0 top-16 z-40 bg-white shadow-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'}`}>
        <div className="flex flex-col space-y-1 p-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg text-gray-700 hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 active:bg-primary/20"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;