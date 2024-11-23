import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Globe, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

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

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Healthcare App",
    description: "Patient management system",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Educational Platform",
    description: "Online learning management system",
    image: "https://via.placeholder.com/300x200",
  },
];

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Corp",
    content: "Exceptional work and professional service.",
    image: "https://via.placeholder.com/100x100",
  },
  {
    name: "Jane Smith",
    role: "CTO, StartUp Inc",
    content: "Delivered beyond our expectations.",
    image: "https://via.placeholder.com/100x100",
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
              IT Specialist & Developer
            </div>
            <p className="text-lg text-gray-600 max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Passionate about creating innovative solutions through technology. 
              Specializing in web development, software solutions, and IT consulting.
            </p>
            <Button className="animate-fade-up" style={{ animationDelay: "0.6s" }}>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-16 bg-white/50 rounded-3xl my-16">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            Student and freelancer with a responsible approach, experienced in programming and graphics.
            I have strong analytical thinking, excellent communication skills, and a desire to constantly learn.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                  <div>
                    <h4 className="font-medium">Freelance Developer</h4>
                    <p className="text-gray-600">2020 - Present</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                  <div>
                    <h4 className="font-medium">IT Consultant</h4>
                    <p className="text-gray-600">2019 - Present</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                  <div>
                    <h4 className="font-medium">Computer Science</h4>
                    <p className="text-gray-600">2018 - 2022</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Portfolio Section */}
      <section className="container py-16 bg-white/50 rounded-3xl my-16">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-8">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary" />
              <a href="tel:+420774727074" className="hover:text-primary transition-colors">
                +420 774 727 074
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <a href="mailto:david@grohman.cz" className="hover:text-primary transition-colors">
                david@grohman.cz
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span>Chrudim, Pardubický</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <Input placeholder="Your Name" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <Input placeholder="Subject" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="min-h-[150px]" />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;