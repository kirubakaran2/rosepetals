import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: "",
  });

  const services = [
    "Bridal Makeup",
    "Facial Treatment",
    "Body Massage",
    "Acupuncture",
    "Hair Styling",
    "Nail Care",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({ name: "", phone: "", date: "", service: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border-primary/20 focus:border-primary"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="border-primary/20 focus:border-primary"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="border-primary/20 focus:border-primary"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Select
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
        >
          <SelectTrigger className="border-primary/20 focus:border-primary">
            <SelectValue placeholder="Select Service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-white"
      >
        Confirm Booking
      </Button>
    </form>
  );
};

export default BookingForm;