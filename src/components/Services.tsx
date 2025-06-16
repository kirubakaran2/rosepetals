import { useState } from "react";
import { ChevronDown, Sparkles, Heart, Star } from "lucide-react";

interface ServiceCategory {
  category: string;
  icon: JSX.Element;
  color: string;
  items: string[];
}

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const services: ServiceCategory[] = [
    {
      category: "Bridal Makeup",
      icon: <Heart className="w-5 h-5" />,
      color: "from-rose-500 to-pink-500",
      items: [
        "Traditional Bridal Makeup",
        "Modern Bridal Makeup",
        "Engagement Makeup",
        "Reception Makeup",
        "Trial Makeup Session",
      ],
    },
    {
      category: "Hair Treatments & Additions",
      icon: <Sparkles className="w-5 h-5" />,
      color: "from-purple-500 to-indigo-500",
      items: [
        "Keratin Smoothing Treatment",
        "Scalp Detox Therapy",
        "Hair Spa & Conditioning",
        "Hair Extensions",
        "Hair Volumizing Additions",
      ],
    },
    {
      category: "Facial Treatments",
      icon: <Star className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-500",
      items: [
        "Deep Cleansing Facial",
        "Anti-Aging Treatment",
        "Hydrating Facial",
        "Acne Treatment",
        "Skin Brightening",
      ],
    },
  ];

  const handleToggle = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-100/20 to-transparent opacity-50 pointer-events-none" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-rose-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our comprehensive range of beauty treatments designed to enhance your natural radiance.
          </p>
        </div>

        {/* Service list */}
        <div className="grid gap-8">
          {services.map((service) => {
            const isExpanded = expandedCategory === service.category;
            return (
              <div
                key={service.category}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden transition-all"
              >
                {/* Gradient hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none`}
                />

                {/* Category button */}
                <button
                  onClick={() => handleToggle(service.category)}
                  className="relative z-10 w-full p-6 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-transparent hover:to-slate-50/50 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <span className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                      {service.category}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-500 transition-all duration-300 group-hover:text-slate-700 ${
                      isExpanded ? "rotate-180 text-slate-700" : ""
                    }`}
                  />
                </button>

                {/* Expandable content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border border-slate-100">
                      <ul className="grid gap-3 md:grid-cols-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center text-slate-700 hover:text-slate-900 transition-colors group/item"
                          >
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200`}
                            />
                            <span className="font-medium group-hover/item:translate-x-1 transition-transform duration-200">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href='#booking' >
          <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
            Book Your Appointment
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
