import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const services = [
    {
      category: "Bridal Makeup",
      items: [
        "Traditional Bridal Makeup",
        "Modern Bridal Makeup",
        "Engagement Makeup",
        "Reception Makeup",
        "Trial Makeup Session",
      ],
    },
    {
      category: "Spa Treatments",
      items: [
        "Swedish Massage",
        "Deep Tissue Massage",
        "Hot Stone Therapy",
        "Aromatherapy",
        "Body Wraps",
      ],
    },
    {
      category: "Facial Treatments",
      items: [
        "Deep Cleansing Facial",
        "Anti-Aging Treatment",
        "Hydrating Facial",
        "Acne Treatment",
        "Skin Brightening",
      ],
    },
  ];

  return (
    <section className="py-20 bg-secondary/20" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        
        <div className="grid gap-6 max-w-3xl mx-auto">
          {services.map((service) => (
            <div
              key={service.category}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Button
                variant="ghost"
                className="w-full p-4 flex items-center justify-between text-left"
                onClick={() => setExpandedCategory(
                  expandedCategory === service.category ? null : service.category
                )}
              >
                <span className="text-xl font-semibold">{service.category}</span>
                <ChevronDown
                  className={`transition-transform ${
                    expandedCategory === service.category ? "rotate-180" : ""
                  }`}
                />
              </Button>
              
              {expandedCategory === service.category && (
                <div className="p-4 bg-gray-50 animate-accordion-down">
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;