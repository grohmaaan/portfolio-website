import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => (
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
);

export default ContactSection;