import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="container pt-20 pb-16">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
        <img
          src="/lovable-uploads/11d2a02d-c1ef-4f62-bfa8-109e69f6dc59.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-fade-up">
          David Grohman
        </h1>
        <div 
          className="inline-block bg-primary text-white px-4 py-2 rounded-full text-lg mb-6 animate-fade-up" 
          style={{ animationDelay: "0.2s" }}
        >
          IT Specialist & Developer
        </div>
        <p 
          className="text-lg text-gray-600 max-w-xl mb-8 animate-fade-up" 
          style={{ animationDelay: "0.4s" }}
        >
          Passionate about creating innovative solutions through technology. 
          Specializing in web development, software solutions, and IT consulting.
        </p>
        <Button className="animate-fade-up" style={{ animationDelay: "0.6s" }}>
          Get in Touch
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;