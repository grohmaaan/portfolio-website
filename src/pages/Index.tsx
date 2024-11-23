import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Software Developer & IT Consultant
          </h1>
          <p className="text-lg text-muted-foreground">
            Transforming ideas into powerful digital solutions
          </p>
          <Button size="lg" className="animate-fade-in">
            Get in Touch
          </Button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Professional"
            className="rounded-lg shadow-2xl animate-fade-in"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground">
                With years of experience in software development and IT consulting,
                I've helped numerous businesses transform their digital presence
                and optimize their technology strategies.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Experience</h3>
              <p className="text-muted-foreground">
                I specialize in creating custom software solutions, developing
                scalable SaaS platforms, and providing comprehensive IT
                consulting services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Portfolio items would go here */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Project 1</h3>
                <p className="text-muted-foreground">
                  Description of the project and its impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your message" className="h-32" />
              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Connect With Me</h3>
              <div className="space-y-4">
                <a href="mailto:contact@example.com" className="flex items-center space-x-3 text-muted-foreground hover:text-primary">
                  <Mail className="h-5 w-5" />
                  <span>contact@example.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center space-x-3 text-muted-foreground hover:text-primary">
                  <Phone className="h-5 w-5" />
                  <span>+1 (234) 567-890</span>
                </a>
                <div className="flex space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6 text-muted-foreground hover:text-primary" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-6 w-6 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "IT Consulting",
    description: "Expert guidance to optimize your technology strategy and infrastructure.",
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business needs.",
  },
  {
    title: "SaaS Development",
    description: "Scalable and efficient Software-as-a-Service platforms.",
  },
  {
    title: "Web Applications",
    description: "Modern, responsive, and user-friendly web applications.",
  },
  {
    title: "Graphic Design",
    description: "Eye-catching designs that communicate your brand's message.",
  },
  {
    title: "Custom Services",
    description: "Bespoke IT solutions designed to meet your unique requirements.",
  },
];

export default Index;