import { Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RosePetals</h3>
            <p className="text-white/80">
              Transform your beauty journey with our expert services and treatments.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-white/80">
            NO:5,KAMMIYAMPET MAIN ROAD,
            SEMMANADALAM,CUDDALORE<br />
              Phone: +91 7373016001<br />
              Email: info@rosepetals.com
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <a
              href="https://www.instagram.com/rosepetals_cuddalore/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <Instagram />
              <span>@rosepetals_cuddalore</span>
            </a>
          </div>
        </div>

        <div className="mt-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.0539674659444!2d79.74522227505665!3d11.761249088453823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5499405880fb81%3A0x3aa869513ac88a2f!2sRose%20Petals%20Beauty%20Lounge!5e0!3m2!1sen!2sin!4v1735457487383!5m2!1sen!2sin"
            className="w-full h-[300px]"
            style={{border: 0}}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} RosePetals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;