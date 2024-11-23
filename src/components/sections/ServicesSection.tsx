import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "IT Consulting",
    description: "Expert advice for optimizing your tech strategy",
    icon: "💡",
  },
  {
    title: "Software Development",
    description: "Custom solutions for your business needs",
    icon: "💻",
  },
  {
    title: "SaaS Development",
    description: "Scalable, efficient Software-as-a-Service platforms",
    icon: "🚀",
  },
  {
    title: "Web Applications",
    description: "Modern, user-friendly web development",
    icon: "🌐",
  },
  {
    title: "Graphic Design",
    description: "Creative designs tailored to your goals",
    icon: "🎨",
  },
  {
    title: "Custom Services",
    description: "Bespoke IT solutions to fit unique requirements",
    icon: "⚙️",
  },
];

const ServicesSection = () => (
  <section className="container py-16">
    <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <Button variant="ghost" className="group">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Card>
      ))}
    </div>
  </section>
);

export default ServicesSection;