import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    title: "IT Consulting",
    description: "Tailored guidance to optimize your technology strategy",
    icon: "💡",
  },
  {
    title: "Software Development",
    description: "Custom software solutions to meet your specific needs",
    icon: "💻",
  },
  {
    title: "SaaS Solutions",
    description: "Scalable, efficient Software-as-a-Service platforms",
    icon: "🚀",
  },
  {
    title: "Web Applications",
    description: "Modern, user-friendly web applications",
    icon: "🌐",
  },
  {
    title: "Graphic Design",
    description: "Eye-catching designs for a variety of needs",
    icon: "🎨",
  },
  {
    title: "Custom Services",
    description: "Bespoke IT solutions designed to fit your unique requirements",
    icon: "⚙️",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF]">
      {/* Hero Section */}
      <section className="container pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
            <img
              src="/lovable-uploads/5b7244af-823a-4e71-98ba-15ac6a5d06d3.png"
              alt="David Grohman"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-fade-up">
              David Grohman
            </h1>
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-lg mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              IT Specialista
            </div>
            <p className="text-lg text-gray-600 max-w-xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Student a freelancer s odpovědným přístupem, zkušený v programování a grafice. 
              Mám silné analytické myšlení, výborné komunikační dovednosti a chuť se neustále učit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container py-8">
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          <a href="tel:+420774727074" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-5 h-5" />
            +420 774 727 074
          </a>
          <a href="mailto:david@grohman.cz" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
            david@grohman.cz
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Chrudim, Pardubický
          </div>
          <a href="https://linktr.ee/david.grohman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Globe className="w-5 h-5" />
            linktr.ee/david.grohman
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
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

      {/* Skills Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Problem Solving</span>
                <span>95%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full w-[95%] bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Programming</span>
                <span>90%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full w-[90%] bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Design</span>
                <span>85%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full w-[85%] bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Analytics</span>
                <span>95%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full w-[95%] bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Communication</span>
                <span>90%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full w-[90%] bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Languages</h2>
        <div className="flex justify-center gap-8">
          <img src="https://flagcdn.com/w40/cz.png" alt="Czech" className="w-10 h-auto" />
          <img src="https://flagcdn.com/w40/de.png" alt="German" className="w-10 h-auto" />
          <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-10 h-auto" />
        </div>
      </section>
    </div>
  );
};

export default Index;