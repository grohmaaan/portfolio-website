import { Card } from "@/components/ui/card";

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

const PortfolioSection = () => (
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
);

export default PortfolioSection;